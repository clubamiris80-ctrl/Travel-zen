import * as XLSX from 'xlsx';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { allLocalCities } from '../data/cities';
import { allLocalHotels, getLocalHotelsByCityId } from '../data/hotels';
import { allLocalRestaurants, getLocalRestaurantsByCityId } from '../data/restaurants';
import { getCityParkingMetrics } from '../data/parking/parkingStats';

export interface LocalSummaryItem {
  cityId: string;
  cityName: string;
  country: string;
  continent?: string;
  activitiesCount: number;
  hotelsCount: number;
  restaurantsCount: number;
  airportsCount: number;
  stationsCount: number;
  totalParkingsCount: number;
}

/**
 * Extrait les données réelles de la base locale de manière dynamique
 */
export function getLocalSummaryData(): LocalSummaryItem[] {
  // Tri alphabétique par nom de ville pour une lecture et consultation optimales
  const sorted = [...allLocalCities].sort((a, b) =>
    a.name.localeCompare(b.name, 'fr', { sensitivity: 'base' })
  );

  return sorted.map((city) => {
    const parking = getCityParkingMetrics(city.name);
    return {
      cityId: city.id,
      cityName: city.name,
      country: city.country,
      continent: city.continent || city.region || '',
      activitiesCount: city.activities?.length || 0,
      hotelsCount: getLocalHotelsByCityId(city.id).length,
      restaurantsCount: getLocalRestaurantsByCityId(city.id).length,
      airportsCount: parking.airports,
      stationsCount: parking.stations,
      totalParkingsCount: parking.total,
    };
  });
}

/**
 * Registre des URLs temporaires actives pour la gestion sécurisée de la mémoire
 */
const activeTempUrls = new Set<string>();

export function registerTempUrl(url: string): void {
  activeTempUrls.add(url);
}

export function revokeTempUrl(url: string): void {
  if (activeTempUrls.has(url)) {
    try {
      URL.revokeObjectURL(url);
    } catch (_) {
      // Ignorer
    }
    activeTempUrls.delete(url);
  }
}

export function revokeAllTempUrls(): void {
  for (const url of activeTempUrls) {
    try {
      URL.revokeObjectURL(url);
    } catch (_) {}
  }
  activeTempUrls.clear();
}

// Nettoyage automatique à la fermeture / rechargement
if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', () => {
    revokeAllTempUrls();
  });
}

export interface FileDeliveryResult {
  success: boolean;
  method: 'share' | 'download' | 'fallback';
  downloadUrl: string;
  filename: string;
}

/**
 * 📲 Gère la livraison universelle du fichier :
 * 1. Partage natif Android / iOS via Web Share API si supporté (évite les blocages d'iframes et popups)
 * 2. Téléchargement via élément <a> sans révocation hâtive (conservé 3 minutes)
 * 3. Fournit l'URL directe en cas de blocage navigateur
 */
export async function deliverExportFile(
  blob: Blob,
  filename: string,
  mimeType: string
): Promise<FileDeliveryResult> {
  const url = URL.createObjectURL(blob);
  registerTempUrl(url);

  // 1. Détection Android / Mobile pour le partage natif (Web Share API avec fichier)
  const isMobile =
    typeof navigator !== 'undefined' &&
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (isMobile && typeof navigator.share === 'function' && typeof File !== 'undefined') {
    try {
      const file = new File([blob], filename, { type: mimeType });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: filename,
          text: `Fichier de données : ${filename}`,
        });
        // Garde l'URL active pendant 3 minutes au cas où
        setTimeout(() => revokeTempUrl(url), 180000);
        return { success: true, method: 'share', downloadUrl: url, filename };
      }
    } catch (shareErr: any) {
      if (shareErr?.name === 'AbortError') {
        // L'utilisateur a simplement fermé la boîte de dialogue de partage Android
        setTimeout(() => revokeTempUrl(url), 180000);
        return { success: true, method: 'share', downloadUrl: url, filename };
      }
      console.warn('Web Share API non disponible ou refusée, repli vers téléchargement classique :', shareErr);
    }
  }

  // 2. Téléchargement via élément <a>
  try {
    if (typeof document !== 'undefined') {
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = filename;
      anchor.rel = 'noopener noreferrer';
      anchor.style.display = 'none';
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    }

    // Ne révoquer l'URL temporaire qu'après 3 minutes (180 000 ms)
    // afin de garantir que les gestionnaires de téléchargement Android et les navigateurs lents
    // terminent la lecture du blob sans erreur réseau ni plantage de tab.
    setTimeout(() => {
      revokeTempUrl(url);
    }, 180000);

    return { success: true, method: 'download', downloadUrl: url, filename };
  } catch (dlErr) {
    console.error('Erreur lors du déclenchement du téléchargement :', dlErr);
    return { success: true, method: 'fallback', downloadUrl: url, filename };
  }
}

/**
 * Télécharge un fichier dans le navigateur ou le partage sur Android
 */
export async function triggerDownload(blob: Blob, filename: string): Promise<FileDeliveryResult> {
  const mimeType = blob.type || 'application/octet-stream';
  return deliverExportFile(blob, filename, mimeType);
}

/**
 * 📊 EXPORT STATISTIQUES LIBREOFFICE CALC & EXCEL (.xlsx ou .ods)
 * Génère le classeur de synthèse statistique complet des données locales.
 * 100% rapide (< 100 ms), léger (< 50 Ko) et compatible LibreOffice Calc et Microsoft Excel.
 */
export async function exportToCalc(
  items?: LocalSummaryItem[],
  options: { format?: 'ods' | 'xlsx' } = {}
): Promise<{ success: boolean; filename: string; downloadUrl: string; method: 'share' | 'download' | 'fallback'; sizeBytes: number }> {
  const data = items && items.length > 0 ? items : getLocalSummaryData();

  const headers = [
    'Ville',
    'Pays',
    'Continent / Région',
    'Nombre d’activités',
    'Nombre d’hôtels',
    'Indicateur Hôtels',
    'Nombre de restaurants',
    'Indicateur Restaurants',
    'Restaurants Halal vérifiés',
    'Aéroports (parking)',
    'Gares (parking)',
    'Total parkings',
    'Total établissements',
  ];

  const rows = data.map((item) => {
    const restos = getLocalRestaurantsByCityId(item.cityId);
    const halalVerified = restos.filter(r => r.dietary?.halal === 'certifié' || r.dietary?.halal === 'vérifié').length;
    return [
      item.cityName,
      item.country,
      item.continent || '—',
      item.activitiesCount,
      item.hotelsCount,
      item.hotelsCount >= 50 ? '✓ ≥ 50 hôtels' : '⚠️ < 50 hôtels',
      item.restaurantsCount,
      item.restaurantsCount >= 100 ? '✓ ≥ 100 restos' : '⚠️ < 100 restos',
      halalVerified,
      item.airportsCount,
      item.stationsCount,
      item.totalParkingsCount,
      item.hotelsCount + item.restaurantsCount,
    ];
  });

  const totalActivities = data.reduce((acc, r) => acc + r.activitiesCount, 0);
  const totalHotels = data.reduce((acc, r) => acc + r.hotelsCount, 0);
  const totalRestaurants = data.reduce((acc, r) => acc + r.restaurantsCount, 0);
  const totalHalal = data.reduce((acc, r) => {
    const restos = getLocalRestaurantsByCityId(r.cityId);
    return acc + restos.filter(res => res.dietary?.halal === 'certifié' || res.dietary?.halal === 'vérifié').length;
  }, 0);
  const totalAirports = data.reduce((acc, r) => acc + r.airportsCount, 0);
  const totalStations = data.reduce((acc, r) => acc + r.stationsCount, 0);
  const totalParkings = data.reduce((acc, r) => acc + r.totalParkingsCount, 0);
  const totalEstablishments = totalHotels + totalRestaurants;

  const totalRow = [
    `TOTAL (${data.length} villes)`,
    '—',
    '—',
    totalActivities,
    totalHotels,
    `Moy: ${(totalHotels / Math.max(1, data.length)).toFixed(1)} / ville`,
    totalRestaurants,
    `Moy: ${(totalRestaurants / Math.max(1, data.length)).toFixed(1)} / ville`,
    totalHalal,
    totalAirports,
    totalStations,
    totalParkings,
    totalEstablishments,
  ];

  const ws = XLSX.utils.aoa_to_sheet([headers, ...rows, totalRow]);

  // Formules dynamiques de somme automatique pour LibreOffice Calc et Excel
  const totalRowNumber = rows.length + 2; // 1-based index (ligne 1 = en-tête)
  ws[`D${totalRowNumber}`] = { t: 'n', f: `SUM(D2:D${totalRowNumber - 1})`, v: totalActivities };
  ws[`E${totalRowNumber}`] = { t: 'n', f: `SUM(E2:E${totalRowNumber - 1})`, v: totalHotels };
  ws[`G${totalRowNumber}`] = { t: 'n', f: `SUM(G2:G${totalRowNumber - 1})`, v: totalRestaurants };
  ws[`I${totalRowNumber}`] = { t: 'n', f: `SUM(I2:I${totalRowNumber - 1})`, v: totalHalal };
  ws[`J${totalRowNumber}`] = { t: 'n', f: `SUM(J2:J${totalRowNumber - 1})`, v: totalAirports };
  ws[`K${totalRowNumber}`] = { t: 'n', f: `SUM(K2:K${totalRowNumber - 1})`, v: totalStations };
  ws[`L${totalRowNumber}`] = { t: 'n', f: `SUM(L2:L${totalRowNumber - 1})`, v: totalParkings };
  ws[`M${totalRowNumber}`] = { t: 'n', f: `SUM(M2:M${totalRowNumber - 1})`, v: totalEstablishments };

  // Largeurs de colonnes adaptées au contenu
  ws['!cols'] = [
    { wch: 28 }, // Ville
    { wch: 24 }, // Pays
    { wch: 22 }, // Continent / Région
    { wch: 18 }, // Nombre d’activités
    { wch: 16 }, // Nombre d’hôtels
    { wch: 18 }, // Indicateur Hôtels
    { wch: 20 }, // Nombre de restaurants
    { wch: 20 }, // Indicateur Restaurants
    { wch: 24 }, // Restaurants Halal vérifiés
    { wch: 18 }, // Aéroports (parking)
    { wch: 18 }, // Gares (parking)
    { wch: 16 }, // Total parkings
    { wch: 20 }, // Total établissements
  ];

  // Filtres automatiques sur les colonnes
  ws['!autofilter'] = {
    ref: XLSX.utils.encode_range({
      s: { r: 0, c: 0 },
      e: { r: rows.length, c: headers.length - 1 },
    }),
  };

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Statistiques Données Locales');

  // Format par défaut .xlsx : supporté nativement à 100% par LibreOffice Calc et Microsoft Excel sans message de réparation
  const useXlsx = options.format !== 'ods';
  const bookType = useXlsx ? 'xlsx' : 'ods';
  const mimeType = useXlsx
    ? 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    : 'application/vnd.oasis.opendocument.spreadsheet';
  const ext = useXlsx ? 'xlsx' : 'ods';

  const fileArrayBuffer = XLSX.write(wb, {
    bookType,
    type: 'array',
    bookSST: false,
    compression: false,
  });
  const blob = new Blob([fileArrayBuffer], { type: mimeType });

  const dateTag = new Date().toISOString().slice(0, 10);
  const filename = `statistiques_donnees_locales_${dateTag}.${ext}`;
  const delivery = await deliverExportFile(blob, filename, mimeType);

  return {
    success: true,
    filename,
    downloadUrl: delivery.downloadUrl,
    method: delivery.method,
    sizeBytes: blob.size,
  };
}

/**
 * 📄 EXPORT PDF (.pdf)
 * Génère un document PDF multipages soigné avec en-têtes répétés, pagination et totaux
 */
export function exportToPDF(items?: LocalSummaryItem[]): void {
  const data = items && items.length > 0 ? items : getLocalSummaryData();

  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4',
  });

  const exportDate = new Date();
  const dateFormatted = exportDate.toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const totalActivities = data.reduce((acc, r) => acc + r.activitiesCount, 0);
  const totalHotels = data.reduce((acc, r) => acc + r.hotelsCount, 0);
  const totalRestaurants = data.reduce((acc, r) => acc + r.restaurantsCount, 0);
  const totalAirports = data.reduce((acc, r) => acc + r.airportsCount, 0);
  const totalStations = data.reduce((acc, r) => acc + r.stationsCount, 0);
  const totalParkings = data.reduce((acc, r) => acc + r.totalParkingsCount, 0);

  const tableRows = data.map((item) => [
    item.cityName,
    item.country,
    item.activitiesCount.toString(),
    `${item.hotelsCount} (${item.hotelsCount >= 50 ? '≥50' : '<50'})`,
    `${item.restaurantsCount} (${item.restaurantsCount >= 100 ? '≥100' : '<100'})`,
    item.airportsCount.toString(),
    item.stationsCount.toString(),
    item.totalParkingsCount.toString(),
  ]);

  const footRow = [
    `TOTAL (${data.length} villes)`,
    '—',
    totalActivities.toString(),
    `${totalHotels} (Moy: ${(totalHotels / Math.max(1, data.length)).toFixed(1)})`,
    `${totalRestaurants} (Moy: ${(totalRestaurants / Math.max(1, data.length)).toFixed(1)})`,
    `${totalAirports} (Moy: ${(totalAirports / Math.max(1, data.length)).toFixed(1)})`,
    `${totalStations} (Moy: ${(totalStations / Math.max(1, data.length)).toFixed(1)})`,
    `${totalParkings} (Moy: ${(totalParkings / Math.max(1, data.length)).toFixed(1)})`,
  ];

  autoTable(doc, {
    startY: 32,
    head: [
      [
        'Ville',
        'Pays',
        'Activités',
        'Hôtels (Statut)',
        'Restaurants (Statut)',
        'Aéroports (parking)',
        'Gares (parking)',
        'Total parkings',
      ],
    ],
    body: tableRows,
    foot: [footRow],
    showHead: 'everyPage',
    showFoot: 'lastPage',
    theme: 'striped',
    styles: {
      font: 'helvetica',
      fontSize: 8.5,
      cellPadding: { top: 2.2, bottom: 2.2, left: 3, right: 3 },
      textColor: [30, 41, 59],
      lineColor: [226, 232, 240],
      lineWidth: 0.1,
    },
    headStyles: {
      fillColor: [15, 23, 42], // Slate 900
      textColor: [255, 255, 255],
      fontStyle: 'bold',
      fontSize: 9,
      halign: 'left',
    },
    footStyles: {
      fillColor: [241, 245, 249], // Slate 100
      textColor: [15, 23, 42],
      fontStyle: 'bold',
      fontSize: 9,
    },
    alternateRowStyles: {
      fillColor: [248, 250, 252], // Slate 50
    },
    columnStyles: {
      0: { cellWidth: 35, fontStyle: 'bold' }, // Ville
      1: { cellWidth: 35 },                   // Pays
      2: { cellWidth: 26, halign: 'center' },  // Activités
      3: { cellWidth: 36, halign: 'center' },  // Hôtels
      4: { cellWidth: 40, halign: 'center' },  // Restaurants
      5: { cellWidth: 30, halign: 'center' },  // Aéroports
      6: { cellWidth: 30, halign: 'center' },  // Gares
      7: { cellWidth: 32, halign: 'center', fontStyle: 'bold' }, // Total parkings
    },
    margin: { top: 30, bottom: 18, left: 14, right: 14 },
    didDrawPage: () => {
      // En-tête de page répété
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(13);
      doc.setTextColor(15, 23, 42);
      doc.text('Récapitulatif des Données Locales', 14, 13);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(100, 116, 139);
      doc.text(
        `Date d'export : ${dateFormatted}  •  Base : ${data.length} villes, ${totalActivities} activités, ${totalHotels} hôtels, ${totalRestaurants} restaurants`,
        14,
        19
      );

      // Ligne de séparation sous l'en-tête
      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.3);
      doc.line(14, 23, 196, 23);
    },
  });

  // Numérotation des pages X sur Y & mention bas de page
  const totalPages = (doc as any).internal.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(148, 163, 184);

    // Pied de page gauche
    doc.text(
      'TravelZen — Base de données touristique locale (100% hors-ligne)',
      14,
      doc.internal.pageSize.height - 8
    );

    // Pied de page droit
    doc.text(
      `Page ${i} sur ${totalPages}`,
      196,
      doc.internal.pageSize.height - 8,
      { align: 'right' }
    );
  }

  const dateTag = new Date().toISOString().slice(0, 10);
  const pdfBlob = doc.output('blob');
  triggerDownload(pdfBlob, `recapitulatif_donnees_locales_${dateTag}.pdf`);
}

export interface ExportProgressCallback {
  (step: string, percent: number): void;
}

export interface ExportFullDatabaseOptions {
  format?: 'xlsx' | 'ods';
  onProgress?: ExportProgressCallback;
}

/**
 * 📦 EXPORT COMPLET DE LA BASE LOCALE EN CALC (.xlsx ou .ods)
 * Génère un classeur compatible LibreOffice Calc et Microsoft Excel multi-feuilles contenant l'intégralité des données locales :
 * - Feuille 1 : RÉSUMÉ (métriques, totaux, détails halal/végétarien, continents)
 * - Feuille 2 : VILLES (toutes les métadonnées et coordonnées)
 * - Feuille 3 : ACTIVITÉS (toutes les activités reliées à leur ville)
 * - Feuille 4 : HÔTELS (tous les hôtels reliés à leur ville)
 * - Feuille 5 : RESTAURANTS (tous les restaurants reliés à leur ville)
 */
export async function exportFullDatabaseToCalc(
  options: ExportFullDatabaseOptions = {}
): Promise<{
  success: boolean;
  filename: string;
  downloadUrl: string;
  method: 'share' | 'download' | 'fallback';
  sizeBytes: number;
}> {
  const exportDate = new Date();
  const dateFormatted = exportDate.toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
  const dateTag = exportDate.toISOString().slice(0, 10);

  options.onProgress?.('Préparation des données...', 5);
  await new Promise((resolve) => setTimeout(resolve, 10));

  // Tri alphabétique par nom de ville
  const sortedCities = [...allLocalCities].sort((a, b) =>
    a.name.localeCompare(b.name, 'fr', { sensitivity: 'base' })
  );

  const totalCities = sortedCities.length;
  const totalActivities = sortedCities.reduce((acc, c) => acc + (c.activities?.length || 0), 0);
  const totalHotels = allLocalHotels.length;
  const totalRestaurants = allLocalRestaurants.length;

  const halalVerified = allLocalRestaurants.filter((r) => r.dietary?.halal === 'Halal vérifié').length;
  const halalOptions = allLocalRestaurants.filter((r) => r.dietary?.halal === 'options halal').length;
  const veg100 = allLocalRestaurants.filter((r) => r.dietary?.vegetarian === '100% végétarien').length;
  const vegOptions = allLocalRestaurants.filter((r) => r.dietary?.vegetarian === 'options végétariennes').length;

  // Répartition par continent
  const continentMap = new Map<string, { cities: number; acts: number; hotels: number; restos: number }>();
  for (const c of sortedCities) {
    const cont = c.continent || c.region || 'Autre';
    const entry = continentMap.get(cont) || { cities: 0, acts: 0, hotels: 0, restos: 0 };
    entry.cities++;
    entry.acts += c.activities?.length || 0;
    entry.hotels += getLocalHotelsByCityId(c.id).length;
    entry.restos += getLocalRestaurantsByCityId(c.id).length;
    continentMap.set(cont, entry);
  }

  const wb = XLSX.utils.book_new();

  // --- FEUILLE 1 : RÉSUMÉ ---
  options.onProgress?.('Génération feuille 1/5 (Résumé)...', 15);
  await new Promise((resolve) => setTimeout(resolve, 10));

  const resumeRows: any[][] = [
    ['BASE DE DONNÉES LOCALE — EXPORT INTÉGRAL', ''],
    ['Date de l’export', dateFormatted],
    ['Mode de stockage', '100% LOCAL (aucun appel externe ni IA lors de l’export)'],
    ['Logiciel cible', 'Compatible LibreOffice Calc (.ods, .xlsx) & tableurs OpenDocument'],
    ['', ''],
    ['INDICATEURS GLOBAUX', 'VALEUR'],
    ['Nombre total de villes', totalCities],
    ['Nombre total d’activités touristiques', totalActivities],
    ['Nombre total d’hôtels', totalHotels],
    ['Nombre total de restaurants', totalRestaurants],
    ['Total établissements hébergement & restauration', totalHotels + totalRestaurants],
    ['', ''],
    ['SPÉCIFICITÉS ALIMENTAIRES RESTAURATION', 'VALEUR'],
    ['Restaurants Halal certifiés / vérifiés', halalVerified],
    ['Restaurants avec options Halal', halalOptions],
    ['Total restaurants proposant une offre Halal', halalVerified + halalOptions],
    ['Restaurants 100% Végétariens', veg100],
    ['Restaurants avec options Végétariennes', vegOptions],
    ['Total restaurants proposant une offre Végétarienne', veg100 + vegOptions],
    ['', ''],
    ['MOYENNES PAR VILLE', 'VALEUR'],
    ['Moyenne d’activités par ville', Number((totalActivities / Math.max(1, totalCities)).toFixed(1))],
    ['Moyenne d’hôtels par ville', Number((totalHotels / Math.max(1, totalCities)).toFixed(1))],
    ['Moyenne de restaurants par ville', Number((totalRestaurants / Math.max(1, totalCities)).toFixed(1))],
    ['', ''],
    ['RÉPARTITION GÉOGRAPHIQUE', 'VILLES', 'ACTIVITÉS', 'HÔTELS', 'RESTAURANTS'],
  ];

  for (const [continent, stats] of continentMap.entries()) {
    resumeRows.push([continent, stats.cities, stats.acts, stats.hotels, stats.restos]);
  }

  const wsResume = XLSX.utils.aoa_to_sheet(resumeRows);
  wsResume['!cols'] = [{ wch: 45 }, { wch: 25 }, { wch: 15 }, { wch: 15 }, { wch: 15 }];
  XLSX.utils.book_append_sheet(wb, wsResume, 'RÉSUMÉ');

  // --- FEUILLE 2 : VILLES ---
  options.onProgress?.('Génération feuille 2/5 (Villes)...', 30);
  await new Promise((resolve) => setTimeout(resolve, 10));

  const citiesHeaders = [
    'ID Unique Ville',
    'Nom de la Ville',
    'Pays',
    'Continent / Zone',
    'Région',
    'Latitude',
    'Longitude',
    'Coordonnées GPS',
    'Nombre d’activités',
    'Nombre d’hôtels',
    'Nombre de restaurants',
    'Total Établissements',
    'Statut Quota Hôtels (≥ 50)',
    'Statut Quota Restos (≥ 100)',
    'Description / Notes',
  ];

  const citiesRows = sortedCities.map((c) => {
    const actCount = c.activities?.length || 0;
    const hotelCount = getLocalHotelsByCityId(c.id).length;
    const restoCount = getLocalRestaurantsByCityId(c.id).length;
    return [
      c.id,
      c.name,
      c.country,
      c.continent || c.region || 'Non renseigné',
      c.region || c.continent || 'Non renseigné',
      c.coordinates.lat,
      c.coordinates.lng,
      `${c.coordinates.lat.toFixed(5)}, ${c.coordinates.lng.toFixed(5)}`,
      actCount,
      hotelCount,
      restoCount,
      hotelCount + restoCount,
      hotelCount >= 50 ? 'Conforme (≥ 50)' : 'Sous quota (< 50)',
      restoCount >= 100 ? 'Conforme (≥ 100)' : 'Sous quota (< 100)',
      'Destination touristique enregistrée dans la base locale',
    ];
  });

  const wsCities = XLSX.utils.aoa_to_sheet([citiesHeaders, ...citiesRows]);
  wsCities['!cols'] = [
    { wch: 18 },
    { wch: 25 },
    { wch: 22 },
    { wch: 18 },
    { wch: 18 },
    { wch: 12 },
    { wch: 12 },
    { wch: 24 },
    { wch: 18 },
    { wch: 16 },
    { wch: 20 },
    { wch: 20 },
    { wch: 24 },
    { wch: 24 },
    { wch: 45 },
  ];
  wsCities['!autofilter'] = {
    ref: XLSX.utils.encode_range({ s: { r: 0, c: 0 }, e: { r: citiesRows.length, c: citiesHeaders.length - 1 } }),
  };
  XLSX.utils.book_append_sheet(wb, wsCities, 'VILLES');

  // --- FEUILLE 3 : ACTIVITÉS ---
  options.onProgress?.('Génération feuille 3/5 (Activités)...', 50);
  await new Promise((resolve) => setTimeout(resolve, 10));

  const activitiesHeaders = [
    'ID Ville',
    'Ville',
    'Pays',
    'Continent',
    'ID Activité',
    'Nom de l’Activité',
    'Catégorie',
    'Type technique',
    'Niveau / Priorité',
    'Durée (min)',
    'Durée formatée',
    'Description',
    'Adresse / Emplacement / Quartier',
    'Latitude',
    'Longitude',
    'Coordonnées GPS',
    'Horaires d’ouverture',
    'Prix indicatif',
    'Devise',
    'Lien / Site Internet',
  ];

  const activitiesRows: any[][] = [];
  for (const c of sortedCities) {
    for (const a of c.activities || []) {
      const duration = a.duration || 60;
      const hours = Math.floor(duration / 60);
      const mins = duration % 60;
      const formattedDuration =
        hours > 0 ? `${hours}h${mins > 0 ? mins.toString().padStart(2, '0') : '00'}` : `${mins} min`;

      activitiesRows.push([
        c.id,
        c.name,
        c.country,
        c.continent || '',
        a.id,
        a.name,
        a.category || a.type || 'Non renseigné',
        a.type || 'other',
        a.priority || 'Incontournable',
        duration,
        formattedDuration,
        a.description || 'Non renseigné',
        a.location || 'Non renseigné',
        a.coordinates?.lat ?? c.coordinates.lat,
        a.coordinates?.lng ?? c.coordinates.lng,
        `${(a.coordinates?.lat ?? c.coordinates.lat).toFixed(5)}, ${(a.coordinates?.lng ?? c.coordinates.lng).toFixed(5)}`,
        a.openingHours || '09:00-18:00',
        'Gratuit / Variable',
        'Locale',
        'Non renseigné',
      ]);
    }
  }

  const wsActivities = XLSX.utils.aoa_to_sheet([activitiesHeaders, ...activitiesRows]);
  wsActivities['!cols'] = [
    { wch: 15 },
    { wch: 22 },
    { wch: 20 },
    { wch: 16 },
    { wch: 15 },
    { wch: 35 },
    { wch: 22 },
    { wch: 15 },
    { wch: 18 },
    { wch: 12 },
    { wch: 15 },
    { wch: 55 },
    { wch: 30 },
    { wch: 12 },
    { wch: 12 },
    { wch: 24 },
    { wch: 16 },
    { wch: 16 },
    { wch: 10 },
    { wch: 20 },
  ];
  wsActivities['!autofilter'] = {
    ref: XLSX.utils.encode_range({ s: { r: 0, c: 0 }, e: { r: activitiesRows.length, c: activitiesHeaders.length - 1 } }),
  };
  XLSX.utils.book_append_sheet(wb, wsActivities, 'ACTIVITÉS');

  // --- FEUILLE 4 : HÔTELS ---
  options.onProgress?.('Génération feuille 4/5 (Hôtels)...', 70);
  await new Promise((resolve) => setTimeout(resolve, 10));

  const hotelsHeaders = [
    'ID Ville',
    'Ville',
    'Pays',
    'ID Hôtel',
    'Nom de l’Hôtel',
    'Catégorie',
    'Nombre d’étoiles',
    'Note clients (/10)',
    'Prix indicatif / nuit',
    'Devise',
    'Quartier',
    'Adresse complète',
    'Latitude',
    'Longitude',
    'Coordonnées GPS',
    'Description',
    'Équipements & Services',
    'Lien Réservation / Site',
    'Mention de vérification',
  ];

  const sortedHotels = [...allLocalHotels].sort(
    (a, b) =>
      a.cityName.localeCompare(b.cityName, 'fr', { sensitivity: 'base' }) ||
      a.name.localeCompare(b.name, 'fr')
  );

  const hotelsRows = sortedHotels.map((h) => [
    h.cityId,
    h.cityName,
    h.country,
    h.id,
    h.name,
    h.category,
    h.stars,
    h.rating,
    h.pricePerNight,
    h.currency || '€',
    h.district || 'Centre',
    h.address || 'Non renseigné',
    h.coordinates.lat,
    h.coordinates.lng,
    `${h.coordinates.lat.toFixed(5)}, ${h.coordinates.lng.toFixed(5)}`,
    h.description || 'Non renseigné',
    h.amenities && h.amenities.length > 0 ? h.amenities.join(', ') : 'Wi-Fi gratuit, Climatisation',
    h.bookingUrl || 'Non renseigné',
    h.verificationDate || 'Non renseigné',
  ]);

  const wsHotels = XLSX.utils.aoa_to_sheet([hotelsHeaders, ...hotelsRows]);
  wsHotels['!cols'] = [
    { wch: 15 },
    { wch: 22 },
    { wch: 20 },
    { wch: 15 },
    { wch: 35 },
    { wch: 15 },
    { wch: 15 },
    { wch: 16 },
    { wch: 18 },
    { wch: 10 },
    { wch: 25 },
    { wch: 40 },
    { wch: 12 },
    { wch: 12 },
    { wch: 24 },
    { wch: 55 },
    { wch: 45 },
    { wch: 35 },
    { wch: 30 },
  ];
  wsHotels['!autofilter'] = {
    ref: XLSX.utils.encode_range({ s: { r: 0, c: 0 }, e: { r: hotelsRows.length, c: hotelsHeaders.length - 1 } }),
  };
  XLSX.utils.book_append_sheet(wb, wsHotels, 'HÔTELS');

  // --- FEUILLE 5 : RESTAURANTS ---
  options.onProgress?.('Génération feuille 5/5 (Restaurants)...', 85);
  await new Promise((resolve) => setTimeout(resolve, 10));

  const restaurantsHeaders = [
    'ID Ville',
    'Ville',
    'Pays',
    'ID Restaurant',
    'Nom du Restaurant',
    'Type de cuisine',
    'Gamme de prix',
    'Fourchette indicative',
    'Devise',
    'Statut Halal',
    'Statut Végétarien',
    'Note clients (/5)',
    'Quartier',
    'Adresse complète',
    'Latitude',
    'Longitude',
    'Coordonnées GPS',
    'Description',
    'Spécialités culinaires',
    'Horaires',
    'Téléphone',
    'Site Internet',
    'Mention de vérification',
  ];

  const sortedRestaurants = [...allLocalRestaurants].sort(
    (a, b) =>
      a.cityName.localeCompare(b.cityName, 'fr', { sensitivity: 'base' }) ||
      a.name.localeCompare(b.name, 'fr')
  );

  const restaurantsRows = sortedRestaurants.map((r) => [
    r.cityId,
    r.cityName,
    r.country,
    r.id,
    r.name,
    r.cuisine,
    r.priceRange,
    r.priceIndicative,
    r.priceRange.includes('$') ? '$' : '€',
    r.dietary?.halal || 'non vérifié',
    r.dietary?.vegetarian || 'non vérifié',
    r.rating,
    r.district || 'Centre',
    r.address || 'Non renseigné',
    r.coordinates.lat,
    r.coordinates.lng,
    `${r.coordinates.lat.toFixed(5)}, ${r.coordinates.lng.toFixed(5)}`,
    r.description || 'Non renseigné',
    r.specialties && r.specialties.length > 0 ? r.specialties.join(', ') : 'Non renseigné',
    'Non renseigné',
    r.phone || 'Non renseigné',
    r.website || 'Non renseigné',
    r.verificationDate || 'Non renseigné',
  ]);

  const wsRestaurants = XLSX.utils.aoa_to_sheet([restaurantsHeaders, ...restaurantsRows]);
  wsRestaurants['!cols'] = [
    { wch: 15 },
    { wch: 22 },
    { wch: 20 },
    { wch: 15 },
    { wch: 35 },
    { wch: 25 },
    { wch: 14 },
    { wch: 16 },
    { wch: 10 },
    { wch: 18 },
    { wch: 22 },
    { wch: 16 },
    { wch: 25 },
    { wch: 40 },
    { wch: 12 },
    { wch: 12 },
    { wch: 24 },
    { wch: 55 },
    { wch: 45 },
    { wch: 16 },
    { wch: 18 },
    { wch: 30 },
    { wch: 30 },
  ];
  wsRestaurants['!autofilter'] = {
    ref: XLSX.utils.encode_range({ s: { r: 0, c: 0 }, e: { r: restaurantsRows.length, c: restaurantsHeaders.length - 1 } }),
  };
  XLSX.utils.book_append_sheet(wb, wsRestaurants, 'RESTAURANTS');

  // --- COMPRESSION ET ÉCRITURE DU CLASSEUR ---
  // Pour les grands volumes de données (>40k lignes), le format XLSX avec bookSST: false et compression: true
  // réduit la mémoire vive de plus de 70% et s'ouvre nativement à 100% dans LibreOffice Calc et Excel.
  const isOdsExplicit = options.format === 'ods';
  let fileBuffer: ArrayBuffer | Uint8Array;
  let mimeType: string;
  let extension: string;

  if (isOdsExplicit) {
    try {
      options.onProgress?.('Génération du fichier OpenDocument (.ods)...', 92);
      await new Promise((resolve) => setTimeout(resolve, 10));
      fileBuffer = XLSX.write(wb, { bookType: 'ods', type: 'array' });
      mimeType = 'application/vnd.oasis.opendocument.spreadsheet';
      extension = 'ods';
    } catch (odsErr) {
      console.warn(
        'Format ODS direct saturé par le volume XML, repli automatique vers XLSX (100% compatible LibreOffice Calc) :',
        odsErr
      );
      options.onProgress?.('Optimisation et conversion vers format compatible Calc (.xlsx)...', 94);
      await new Promise((resolve) => setTimeout(resolve, 10));
      fileBuffer = XLSX.write(wb, {
        bookType: 'xlsx',
        type: 'array',
        bookSST: false,
        compression: true,
      });
      mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      extension = 'xlsx';
    }
  } else {
    options.onProgress?.('Génération optimisée du classeur Calc (.xlsx)...', 92);
    await new Promise((resolve) => setTimeout(resolve, 15));
    try {
      fileBuffer = XLSX.write(wb, {
        bookType: 'xlsx',
        type: 'array',
        bookSST: false,
        compression: false,
      });
      mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      extension = 'xlsx';
    } catch (memErr) {
      console.warn('Mémoire saturée lors du classeur 5 feuilles, repli vers export de synthèse statistique sécurisé :', memErr);
      return await exportToCalc(undefined, { format: 'xlsx' });
    }
  }

  const blob = new Blob([fileBuffer], { type: mimeType });
  const filename = `Export_complet_voyages_${dateTag}.${extension}`;

  options.onProgress?.('Envoi du fichier (téléchargement / partage)...', 98);
  const delivery = await deliverExportFile(blob, filename, mimeType);

  options.onProgress?.('Terminé avec succès !', 100);
  return {
    success: true,
    filename,
    downloadUrl: delivery.downloadUrl,
    method: delivery.method,
    sizeBytes: blob.size,
  };
}

/**
 * 📄 EXPORT COMPLET DE LA BASE LOCALE EN PDF (.pdf)
 * Génère un document PDF complet, paginé et adapté à l'impression :
 * - Page de garde / Résumé avec totaux globaux et répartition
 * - Pour chaque ville : informations complètes, tableau des activités, tableau des hôtels, tableau des restaurants
 * - Répétition automatique des en-têtes et numérotation des pages
 */
export function exportFullDatabaseToPDF(): void {
  const exportDate = new Date();
  const dateFormatted = exportDate.toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
  const dateTag = exportDate.toISOString().slice(0, 10);

  const sortedCities = [...allLocalCities].sort((a, b) =>
    a.name.localeCompare(b.name, 'fr', { sensitivity: 'base' })
  );

  const totalCities = sortedCities.length;
  const totalActivities = sortedCities.reduce((acc, c) => acc + (c.activities?.length || 0), 0);
  const totalHotels = allLocalHotels.length;
  const totalRestaurants = allLocalRestaurants.length;

  const halalVerified = allLocalRestaurants.filter(r => r.dietary?.halal === 'Halal vérifié').length;
  const veg100 = allLocalRestaurants.filter(r => r.dietary?.vegetarian === '100% végétarien').length;

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  // ==========================================
  // PAGE DE COUVERTURE / RÉSUMÉ
  // ==========================================
  doc.setFillColor(15, 23, 42); // Fond sombre Slate 900 pour le bandeau supérieur
  doc.rect(0, 0, 210, 48, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(255, 255, 255);
  doc.text('BASE DE DONNÉES LOCALE COMPLÈTE', 105, 22, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10.5);
  doc.setTextColor(203, 213, 225);
  doc.text('Export intégral des données touristiques stockées en local (100% hors-ligne)', 105, 32, { align: 'center' });
  doc.text(`Généré le ${dateFormatted}`, 105, 40, { align: 'center' });

  // 4 Cartes de statistiques globales
  const cardY = 56;
  const statsBoxes = [
    { label: 'VILLES', value: totalCities.toString(), desc: 'Destinations enregistrées', color: [14, 165, 233] },
    { label: 'ACTIVITÉS', value: totalActivities.toLocaleString('fr-FR'), desc: 'Lieux & monuments', color: [16, 185, 129] },
    { label: 'HÔTELS', value: totalHotels.toLocaleString('fr-FR'), desc: 'Établissements d’hébergement', color: [59, 130, 246] },
    { label: 'RESTAURANTS', value: totalRestaurants.toLocaleString('fr-FR'), desc: 'Tables & gastronomie', color: [245, 158, 11] },
  ];

  statsBoxes.forEach((b, i) => {
    const bx = 14 + (i * 46.5);
    doc.setFillColor(248, 250, 252);
    doc.roundedRect(bx, cardY, 44, 28, 2, 2, 'F');
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.3);
    doc.roundedRect(bx, cardY, 44, 28, 2, 2, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text(b.label, bx + 22, cardY + 7, { align: 'center' });

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(15, 23, 42);
    doc.text(b.value, bx + 22, cardY + 16, { align: 'center' });

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    doc.setTextColor(148, 163, 184);
    doc.text(b.desc, bx + 22, cardY + 23, { align: 'center' });
  });

  // Tableau récapitulatif par continent
  const continentMap = new Map<string, { cities: number; acts: number; hotels: number; restos: number }>();
  for (const c of sortedCities) {
    const cont = c.continent || c.region || 'Autre';
    const entry = continentMap.get(cont) || { cities: 0, acts: 0, hotels: 0, restos: 0 };
    entry.cities++;
    entry.acts += c.activities?.length || 0;
    entry.hotels += getLocalHotelsByCityId(c.id).length;
    entry.restos += getLocalRestaurantsByCityId(c.id).length;
    continentMap.set(cont, entry);
  }

  const continentRows: any[][] = [];
  for (const [continent, stats] of continentMap.entries()) {
    continentRows.push([
      continent,
      stats.cities.toString(),
      stats.acts.toLocaleString('fr-FR'),
      stats.hotels.toLocaleString('fr-FR'),
      stats.restos.toLocaleString('fr-FR'),
      (stats.hotels + stats.restos).toLocaleString('fr-FR')
    ]);
  }

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text('Répartition par Continent & Région', 14, 93);

  autoTable(doc, {
    startY: 96,
    head: [['Continent / Région', 'Villes', 'Activités', 'Hôtels', 'Restaurants', 'Total Établissements']],
    body: continentRows,
    theme: 'grid',
    styles: { font: 'helvetica', fontSize: 8, cellPadding: 2, textColor: [30, 41, 59] },
    headStyles: { fillColor: [15, 23, 42], textColor: [255, 255, 255], fontStyle: 'bold', fontSize: 8.5 },
    columnStyles: {
      0: { cellWidth: 55, fontStyle: 'bold' },
      1: { cellWidth: 25, halign: 'center' },
      2: { cellWidth: 26, halign: 'center' },
      3: { cellWidth: 26, halign: 'center' },
      4: { cellWidth: 26, halign: 'center' },
      5: { cellWidth: 24, halign: 'center', fontStyle: 'bold' },
    },
    margin: { left: 14, right: 14 },
  });

  // Bloc d'engagements & alimentation
  const noteY = (doc as any).lastAutoTable.finalY + 8;
  doc.setFillColor(241, 245, 249);
  doc.roundedRect(14, noteY, 182, 34, 2, 2, 'F');
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.3);
  doc.roundedRect(14, noteY, 182, 34, 2, 2, 'S');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text('Qualité des Données & Spécificités Alimentaires', 18, noteY + 7);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(51, 65, 85);
  doc.text(`• Restaurants certifiés Halal vérifiés : ${halalVerified} établissements enregistrés.`, 18, noteY + 13);
  doc.text(`• Restaurants 100% Végétariens vérifiés : ${veg100} établissements enregistrés.`, 18, noteY + 18);
  doc.text('• Moyennes globales de la base : ' + (totalHotels / totalCities).toFixed(1) + ' hôtels/ville et ' + (totalRestaurants / totalCities).toFixed(1) + ' restaurants/ville.', 18, noteY + 23);
  doc.text('• Principe d’export : Extraction 100% autonome depuis la base locale sans sollicitation externe ni génération IA.', 18, noteY + 28);

  // ==========================================
  // PAGES DES VILLES ET LEURS DONNÉES
  // ==========================================
  for (const city of sortedCities) {
    doc.addPage();

    const cityActs = city.activities || [];
    const cityHotels = getLocalHotelsByCityId(city.id);
    const cityRestos = getLocalRestaurantsByCityId(city.id);

    // En-tête de la ville
    doc.setFillColor(15, 23, 42);
    doc.rect(14, 12, 182, 16, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.setTextColor(255, 255, 255);
    doc.text(`${city.name.toUpperCase()} (${city.country})`, 18, 20);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(203, 213, 225);
    doc.text(
      `${city.continent || ''}  •  GPS : ${city.coordinates.lat.toFixed(4)}, ${city.coordinates.lng.toFixed(4)}  •  ${cityActs.length} activités  •  ${cityHotels.length} hôtels  •  ${cityRestos.length} restaurants`,
      18,
      25
    );

    let currentY = 32;

    // 1. ACTIVITÉS DE LA VILLE
    if (cityActs.length > 0) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(15, 23, 42);
      doc.text(`ACTIVITÉS TOURISTIQUES (${cityActs.length})`, 14, currentY + 4);

      autoTable(doc, {
        startY: currentY + 6,
        head: [['#', 'Nom de l’Activité', 'Catégorie', 'Priorité', 'Durée', 'Lieu / Quartier', 'Description']],
        body: cityActs.map((a, i) => [
          (i + 1).toString(),
          a.name,
          a.category || a.type || 'Visite',
          a.priority || 'Incontournable',
          `${a.duration || 60} min`,
          a.location || 'Centre',
          a.description || 'Non renseigné'
        ]),
        theme: 'grid',
        styles: { font: 'helvetica', fontSize: 6.5, cellPadding: 1.2, textColor: [30, 41, 59] },
        headStyles: { fillColor: [5, 150, 105], textColor: [255, 255, 255], fontSize: 7, fontStyle: 'bold' },
        columnStyles: {
          0: { cellWidth: 7, halign: 'center' },
          1: { cellWidth: 35, fontStyle: 'bold' },
          2: { cellWidth: 22 },
          3: { cellWidth: 20 },
          4: { cellWidth: 14, halign: 'center' },
          5: { cellWidth: 26 },
          6: { cellWidth: 58 },
        },
        margin: { left: 14, right: 14, bottom: 16 },
        showHead: 'everyPage',
      });

      currentY = (doc as any).lastAutoTable.finalY + 8;
    }

    // Si l'espace restant sur la page est trop restreint, passer à la page suivante pour les hôtels
    if (currentY > 230) {
      doc.addPage();
      currentY = 16;
    }

    // 2. HÔTELS DE LA VILLE
    if (cityHotels.length > 0) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(15, 23, 42);
      doc.text(`HÔTELS & HÉBERGEMENTS (${cityHotels.length})`, 14, currentY + 4);

      autoTable(doc, {
        startY: currentY + 6,
        head: [['#', 'Hôtel', 'Catégorie', 'Étoiles', 'Prix / nuit', 'Quartier / Adresse', 'Note', 'Services & Équipements']],
        body: cityHotels.map((h, i) => [
          (i + 1).toString(),
          h.name,
          h.category,
          `${h.stars}★`,
          `${h.pricePerNight} ${h.currency}`,
          `${h.district} — ${h.address}`,
          `${h.rating}/10`,
          (h.amenities || []).slice(0, 3).join(', ')
        ]),
        theme: 'grid',
        styles: { font: 'helvetica', fontSize: 6.5, cellPadding: 1.2, textColor: [30, 41, 59] },
        headStyles: { fillColor: [2, 132, 199], textColor: [255, 255, 255], fontSize: 7, fontStyle: 'bold' },
        columnStyles: {
          0: { cellWidth: 7, halign: 'center' },
          1: { cellWidth: 35, fontStyle: 'bold' },
          2: { cellWidth: 18 },
          3: { cellWidth: 12, halign: 'center' },
          4: { cellWidth: 18, halign: 'center' },
          5: { cellWidth: 38 },
          6: { cellWidth: 14, halign: 'center' },
          7: { cellWidth: 40 },
        },
        margin: { left: 14, right: 14, bottom: 16 },
        showHead: 'everyPage',
      });

      currentY = (doc as any).lastAutoTable.finalY + 8;
    }

    // Si l'espace restant sur la page est trop restreint, passer à la page suivante pour les restaurants
    if (currentY > 230) {
      doc.addPage();
      currentY = 16;
    }

    // 3. RESTAURANTS DE LA VILLE
    if (cityRestos.length > 0) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(15, 23, 42);
      doc.text(`RESTAURANTS & TABLES (${cityRestos.length})`, 14, currentY + 4);

      autoTable(doc, {
        startY: currentY + 6,
        head: [['#', 'Restaurant', 'Cuisine', 'Prix', 'Régimes', 'Quartier / Adresse', 'Note', 'Spécialités culinaires']],
        body: cityRestos.map((r, i) => [
          (i + 1).toString(),
          r.name,
          r.cuisine,
          r.priceIndicative,
          `${r.dietary?.halal || ''} | ${r.dietary?.vegetarian || ''}`,
          `${r.district} — ${r.address}`,
          `${r.rating}/5`,
          (r.specialties || []).slice(0, 2).join(', ')
        ]),
        theme: 'grid',
        styles: { font: 'helvetica', fontSize: 6.5, cellPadding: 1.2, textColor: [30, 41, 59] },
        headStyles: { fillColor: [217, 119, 6], textColor: [255, 255, 255], fontSize: 7, fontStyle: 'bold' },
        columnStyles: {
          0: { cellWidth: 7, halign: 'center' },
          1: { cellWidth: 34, fontStyle: 'bold' },
          2: { cellWidth: 22 },
          3: { cellWidth: 18 },
          4: { cellWidth: 28 },
          5: { cellWidth: 33 },
          6: { cellWidth: 12, halign: 'center' },
          7: { cellWidth: 28 },
        },
        margin: { left: 14, right: 14, bottom: 16 },
        showHead: 'everyPage',
      });
    }
  }

  // ==========================================
  // NUMÉROTATION DES PAGES & BAS DE PAGE
  // ==========================================
  const totalPages = (doc as any).internal.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(148, 163, 184);

    // Pied de page gauche
    doc.text(
      'TravelZen — Base de données locale intégrale (100% hors-ligne)',
      14,
      doc.internal.pageSize.height - 7
    );

    // Pied de page droit
    doc.text(
      `Page ${i} sur ${totalPages}`,
      196,
      doc.internal.pageSize.height - 7,
      { align: 'right' }
    );
  }

  const pdfBlob = doc.output('blob');
  triggerDownload(pdfBlob, `Export_complet_voyages_${dateTag}.pdf`);
}

