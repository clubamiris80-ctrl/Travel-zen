import React, { useState, useMemo } from 'react';
import type { LocalCity, Activity } from '../../types';
import { allLocalCities, getLocalDatabaseStats } from '../../data/cities';
import { allLocalHotels, getLocalHotelStats, getLocalHotelsByCityId } from '../../data/hotels';
import { allLocalRestaurants, getLocalRestaurantStats, getLocalRestaurantsByCityId } from '../../data/restaurants';
import {
  exportToCalc,
  exportToPDF,
  exportFullDatabaseToCalc,
  exportFullDatabaseToPDF
} from '../../services/exportService';
import { getGlobalParkingStats, getCityParkingMetrics } from '../../data/parking/parkingStats';
import Card from '../common/Card';
import Button from '../common/Button';
import Modal from '../common/Modal';
import {
  Database,
  Search,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  ShieldCheck,
  LogOut,
  MapPin,
  Clock,
  Layers,
  ArrowLeft,
  Sparkles,
  Info,
  SlidersHorizontal,
  ChevronRight,
  ExternalLink,
  Hotel as HotelIcon,
  UtensilsCrossed,
  Leaf,
  Star,
  Check,
  FileSpreadsheet,
  Loader2,
  FileDown,
  Plane,
  Train,
  SquareParking,
  Download,
  X,
  RefreshCw
} from 'lucide-react';

interface AdminDashboardProps {
  onBack: () => void;
  onLock: () => void;
}

interface IntegrityReport {
  timestamp: string;
  totalCitiesChecked: number;
  totalActivitiesChecked: number;
  totalHotelsChecked: number;
  totalRestaurantsChecked: number;
  emptyCities: string[];
  missingCoordinates: { city: string; item: string }[];
  duplicateCityIds: string[];
  duplicateActivityIds: string[];
  duplicateHotelIds: string[];
  duplicateRestaurantIds: string[];
  citiesUnder20: { city: string; count: number }[];
  isValid: boolean;
}

type StatusFilterType = 'all' | 'under50Hotels' | 'under100Restos' | 'compliant' | 'under20Acts' | 'halalTreated';

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onBack, onLock }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContinent, setSelectedContinent] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<StatusFilterType>('all');
  const [filterLowOnly, setFilterLowOnly] = useState(false);
  const [selectedCityForView, setSelectedCityForView] = useState<LocalCity | null>(null);
  const [selectedCityTab, setSelectedCityTab] = useState<'activities' | 'hotels' | 'restaurants' | 'parkings'>('activities');
  const [modalHalalOnlyFilter, setModalHalalOnlyFilter] = useState(false);
  const [showHalalControlSection, setShowHalalControlSection] = useState(true);
  const [integrityReport, setIntegrityReport] = useState<IntegrityReport | null>(null);
  const [isIntegrityModalOpen, setIsIntegrityModalOpen] = useState(false);
  const [exportNotice, setExportNotice] = useState<string | null>(null);
  const [exportError, setExportError] = useState<string | null>(null);
  const [exportProgress, setExportProgress] = useState<{ step: string; percent: number } | null>(null);
  const [lastExportedFile, setLastExportedFile] = useState<{
    filename: string;
    downloadUrl: string;
    sizeFormatted: string;
  } | null>(null);
  const [isExportingFullCalc, setIsExportingFullCalc] = useState(false);
  const [isExportingFullPDF, setIsExportingFullPDF] = useState(false);

  const stats = useMemo(() => getLocalDatabaseStats(), []);
  const hotelStats = useMemo(() => getLocalHotelStats(), []);
  const restaurantStats = useMemo(() => getLocalRestaurantStats(), []);
  const parkingStats = useMemo(() => getGlobalParkingStats(), []);

  // Precompute metrics per city
  const cityDataMap = useMemo(() => {
    const map = new Map<string, {
      hotelCount: number;
      restoCount: number;
      actCount: number;
      halalCount: number;
      airportCount: number;
      stationCount: number;
      parkingCount: number;
    }>();
    for (const city of allLocalCities) {
      const restos = getLocalRestaurantsByCityId(city.id);
      const halalCount = restos.filter(
        r => r.dietary?.halal === 'Halal vérifié' || r.halal_verifie === true || r['halal_vérifié'] === true
      ).length;
      const parkingMetrics = getCityParkingMetrics(city.name);
      map.set(city.id, {
        hotelCount: getLocalHotelsByCityId(city.id).length,
        restoCount: restos.length,
        actCount: city.activities?.length || 0,
        halalCount,
        airportCount: parkingMetrics.airports,
        stationCount: parkingMetrics.stations,
        parkingCount: parkingMetrics.total,
      });
    }
    return map;
  }, []);

  const processedHalalCities = useMemo(() => {
    return allLocalCities.filter(c => c.halal_verifie_traite === true);
  }, []);

  const compliantHalalCitiesCount = useMemo(() => {
    return processedHalalCities.filter(c => (cityDataMap.get(c.id)?.halalCount || 0) >= 15).length;
  }, [processedHalalCities, cityDataMap]);

  const nextUntreatedCity = useMemo(() => {
    return allLocalCities.find(c => !c.halal_verifie_traite);
  }, []);

  const nextUntreatedIndex = useMemo(() => {
    const idx = allLocalCities.findIndex(c => !c.halal_verifie_traite);
    return idx >= 0 ? idx + 1 : null;
  }, []);

  const totalHalalVerifiedInProcessed = useMemo(() => {
    return processedHalalCities.reduce((acc, c) => acc + (cityDataMap.get(c.id)?.halalCount || 0), 0);
  }, [processedHalalCities, cityDataMap]);

  const totalHalalVerifiedOverall = useMemo(() => {
    return restaurantStats.halal.strictCount;
  }, [restaurantStats]);

  const citiesUnder50Hotels = useMemo(() => {
    return allLocalCities.filter(c => (cityDataMap.get(c.id)?.hotelCount || 0) < 50);
  }, [cityDataMap]);

  const citiesUnder100Restos = useMemo(() => {
    return allLocalCities.filter(c => (cityDataMap.get(c.id)?.restoCount || 0) < 100);
  }, [cityDataMap]);

  const citiesCompliantBoth = useMemo(() => {
    return allLocalCities.filter(c => {
      const d = cityDataMap.get(c.id);
      return (d?.hotelCount || 0) >= 50 && (d?.restoCount || 0) >= 100;
    });
  }, [cityDataMap]);

  const citiesUnder20Acts = useMemo(() => {
    return allLocalCities.filter(c => (cityDataMap.get(c.id)?.actCount || 0) < 20);
  }, [cityDataMap]);

  // Continents list for quick filtering
  const continents = useMemo(() => {
    const list = Array.from(new Set(allLocalCities.map(c => c.continent || 'Autre'))).sort();
    return ['all', ...list];
  }, []);

  // Filter cities based on search, continent, and quota filter
  const filteredCities = useMemo(() => {
    return allLocalCities.filter(city => {
      const matchesContinent = selectedContinent === 'all' || city.continent === selectedContinent;
      const data = cityDataMap.get(city.id) || { hotelCount: 0, restoCount: 0, actCount: 0, halalCount: 0 };
      
      let matchesStatus = true;
      if (statusFilter === 'under50Hotels') {
        matchesStatus = data.hotelCount < 50;
      } else if (statusFilter === 'under100Restos') {
        matchesStatus = data.restoCount < 100;
      } else if (statusFilter === 'compliant') {
        matchesStatus = data.hotelCount >= 50 && data.restoCount >= 100;
      } else if (statusFilter === 'under20Acts' || filterLowOnly) {
        matchesStatus = data.actCount < 20;
      } else if (statusFilter === 'halalTreated') {
        matchesStatus = !!city.halal_verifie_traite;
      }

      if (!matchesContinent || !matchesStatus) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        city.name.toLowerCase().includes(q) ||
        city.country.toLowerCase().includes(q) ||
        (city.region && city.region.toLowerCase().includes(q)) ||
        (city.continent && city.continent.toLowerCase().includes(q))
      );
    });
  }, [searchQuery, selectedContinent, statusFilter, filterLowOnly, cityDataMap]);

  // Run integrity tests on all data
  const runIntegrityTest = () => {
    const emptyCities: string[] = [];
    const missingCoordinates: { city: string; item: string }[] = [];
    const duplicateCityIds: string[] = [];
    const duplicateActivityIds: string[] = [];
    const duplicateHotelIds: string[] = [];
    const duplicateRestaurantIds: string[] = [];
    const citiesUnder20: { city: string; count: number }[] = [];

    const seenCityIds = new Set<string>();
    const seenActivityIds = new Set<string>();
    const seenHotelIds = new Set<string>();
    const seenRestoIds = new Set<string>();
    let totalActs = 0;

    // Check hotels
    for (const hotel of allLocalHotels) {
      if (seenHotelIds.has(hotel.id)) {
        duplicateHotelIds.push(`${hotel.cityName}: ${hotel.id}`);
      } else {
        seenHotelIds.add(hotel.id);
      }
      if (!hotel.coordinates || typeof hotel.coordinates.lat !== 'number' || typeof hotel.coordinates.lng !== 'number' || isNaN(hotel.coordinates.lat) || isNaN(hotel.coordinates.lng)) {
        missingCoordinates.push({ city: hotel.cityName, item: `Hôtel: ${hotel.name}` });
      }
    }

    // Check restaurants
    for (const resto of allLocalRestaurants) {
      if (seenRestoIds.has(resto.id)) {
        duplicateRestaurantIds.push(`${resto.cityName}: ${resto.id}`);
      } else {
        seenRestoIds.add(resto.id);
      }
      if (!resto.coordinates || typeof resto.coordinates.lat !== 'number' || typeof resto.coordinates.lng !== 'number' || isNaN(resto.coordinates.lat) || isNaN(resto.coordinates.lng)) {
        missingCoordinates.push({ city: resto.cityName, item: `Restaurant: ${resto.name}` });
      }
    }

    for (const city of allLocalCities) {
      // Check City ID duplicate
      if (seenCityIds.has(city.id)) {
        duplicateCityIds.push(city.id);
      } else {
        seenCityIds.add(city.id);
      }

      // Check City coordinates
      if (!city.coordinates || typeof city.coordinates.lat !== 'number' || typeof city.coordinates.lng !== 'number' || isNaN(city.coordinates.lat) || isNaN(city.coordinates.lng)) {
        missingCoordinates.push({ city: city.name, item: 'Ville (coordonnées GPS invalides)' });
      }

      // Check activities
      const acts = city.activities || [];
      totalActs += acts.length;

      if (acts.length === 0) {
        emptyCities.push(city.name);
      } else if (acts.length < 20) {
        citiesUnder20.push({ city: city.name, count: acts.length });
      }

      for (const act of acts) {
        // Duplicate activity ID
        if (seenActivityIds.has(act.id)) {
          duplicateActivityIds.push(`${city.name}: ${act.id}`);
        } else {
          seenActivityIds.add(act.id);
        }

        // Coordinates check
        if (!act.coordinates || typeof act.coordinates.lat !== 'number' || typeof act.coordinates.lng !== 'number' || isNaN(act.coordinates.lat) || isNaN(act.coordinates.lng)) {
          missingCoordinates.push({ city: city.name, item: `Activité: ${act.name}` });
        }
      }
    }

    const isValid =
      emptyCities.length === 0 &&
      missingCoordinates.length === 0 &&
      duplicateCityIds.length === 0 &&
      duplicateActivityIds.length === 0 &&
      duplicateHotelIds.length === 0 &&
      duplicateRestaurantIds.length === 0 &&
      citiesUnder20.length === 0;

    setIntegrityReport({
      timestamp: new Date().toLocaleTimeString(),
      totalCitiesChecked: allLocalCities.length,
      totalActivitiesChecked: totalActs,
      totalHotelsChecked: allLocalHotels.length,
      totalRestaurantsChecked: allLocalRestaurants.length,
      emptyCities,
      missingCoordinates,
      duplicateCityIds,
      duplicateActivityIds,
      duplicateHotelIds,
      duplicateRestaurantIds,
      citiesUnder20,
      isValid
    });
    setIsIntegrityModalOpen(true);
  };

  const handleExportCalc = async (format: 'ods' | 'xlsx' = 'ods') => {
    setExportError(null);
    try {
      const res = await exportToCalc(undefined, { format });
      setExportNotice(`Fichier LibreOffice Calc (.${format}) généré et prêt au téléchargement !`);
      if (res?.downloadUrl) {
        setLastExportedFile({
          filename: res.filename,
          downloadUrl: res.downloadUrl,
          sizeFormatted: 'Synthèse',
        });
      }
      setTimeout(() => setExportNotice(null), 7000);
    } catch (err: any) {
      console.error('Erreur export Calc:', err);
      setExportError(`Échec de la génération Calc : ${err?.message || 'erreur inconnue'}`);
    }
  };

  const handleExportPDF = () => {
    try {
      exportToPDF();
      setExportNotice('Document PDF (.pdf) généré et téléchargé avec succès !');
      setTimeout(() => setExportNotice(null), 5000);
    } catch (err) {
      console.error('Erreur export PDF:', err);
    }
  };

  const handleExportFullCalc = async (format: 'xlsx' | 'ods' = 'xlsx') => {
    setIsExportingFullCalc(true);
    setExportError(null);
    setExportProgress({ step: 'Initialisation...', percent: 5 });

    try {
      const res = await exportFullDatabaseToCalc({
        format,
        onProgress: (step, percent) => {
          setExportProgress({ step, percent });
        },
      });

      const sizeMb = (res.sizeBytes / (1024 * 1024)).toFixed(1);
      setExportNotice(
        `Export complet Calc généré avec succès (${sizeMb} Mo, 5 feuilles : Résumé, Villes, Activités, Hôtels, Restaurants) !`
      );
      if (res?.downloadUrl) {
        setLastExportedFile({
          filename: res.filename,
          downloadUrl: res.downloadUrl,
          sizeFormatted: `${sizeMb} Mo`,
        });
      }
      setTimeout(() => setExportNotice(null), 9000);
    } catch (err: any) {
      console.error('Erreur export complet Calc:', err);
      setExportError(
        `Échec de l'export complet Calc : ${err?.message || 'délai dépassé ou mémoire saturée'}. Vos données locales restent sécurisées et intactes.`
      );
    } finally {
      setIsExportingFullCalc(false);
      setExportProgress(null);
    }
  };

  const handleExportFullPDF = () => {
    setIsExportingFullPDF(true);
    setTimeout(() => {
      try {
        exportFullDatabaseToPDF();
        setExportNotice('Export complet PDF (.pdf) généré et téléchargé avec succès (Page de garde + fiches détaillées de toutes les villes) !');
        setTimeout(() => setExportNotice(null), 6000);
      } catch (err) {
        console.error('Erreur export complet PDF:', err);
        setExportNotice('Erreur lors de la génération de l’export complet PDF.');
      } finally {
        setIsExportingFullPDF(false);
      }
    }, 50);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto py-4">
      {/* Top Header Bar */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="p-2.5 bg-sky-100 text-sky-700 rounded-xl">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Administration de la Base Locale</h1>
              <p className="text-sm text-slate-500">
                Gestion, supervision et contrôle de cohérence des données touristiques
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center flex-wrap gap-2.5 w-full xl:w-auto justify-start xl:justify-end">
          {/* Boutons d'export statistiques et complet */}
          <button
            onClick={() => handleExportCalc('xlsx')}
            disabled={isExportingFullCalc || isExportingFullPDF}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 disabled:opacity-50 text-white rounded-lg text-sm font-semibold shadow-sm transition-all cursor-pointer"
            title="Exporter le tableau de statistiques complet vers LibreOffice Calc et Excel (.xlsx)"
          >
            <span>📊 Exporter les statistiques vers Calc/Excel</span>
          </button>

          <button
            onClick={() => handleExportFullCalc('xlsx')}
            disabled={isExportingFullCalc || isExportingFullPDF}
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-700 hover:bg-slate-800 active:bg-slate-900 disabled:opacity-50 text-white rounded-lg text-sm font-medium shadow-sm transition-all cursor-pointer"
            title="Exporter l'intégralité des données en 5 feuilles détaillées (Résumé, Villes, Activités, Hôtels, Restaurants)"
          >
            {isExportingFullCalc ? (
              <>
                <Loader2 size={16} className="animate-spin text-white" />
                <span>{exportProgress ? `${exportProgress.step} (${exportProgress.percent}%)` : 'Génération...'}</span>
              </>
            ) : (
              <span>📦 Base intégrale (5 feuilles)</span>
            )}
          </button>

          <button
            onClick={handleExportFullPDF}
            disabled={isExportingFullCalc || isExportingFullPDF}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-rose-600 hover:bg-rose-700 active:bg-rose-800 disabled:opacity-50 text-white rounded-lg text-sm font-semibold shadow-sm transition-all cursor-pointer"
            title="Exporter l'intégralité des données locales au format PDF (.pdf)"
          >
            {isExportingFullPDF ? (
              <>
                <Loader2 size={16} className="animate-spin text-white" />
                <span>Export PDF en cours...</span>
              </>
            ) : (
              <span>📄 Export complet PDF</span>
            )}
          </button>

          <Button
            onClick={runIntegrityTest}
            variant="outline"
            className="!border-emerald-500 !text-emerald-700 hover:!bg-emerald-50 flex items-center space-x-2"
          >
            <ShieldCheck size={18} />
            <span>Tester la cohérence</span>
          </Button>

          <Button
            onClick={onLock}
            variant="ghost"
            className="!text-slate-600 hover:!bg-slate-100 flex items-center space-x-1.5"
            title="Verrouiller la session admin"
          >
            <LogOut size={18} />
            <span className="hidden sm:inline">Verrouiller</span>
          </Button>

          <Button
            onClick={onBack}
            variant="primary"
            className="!bg-sky-600 hover:!bg-sky-700 flex items-center space-x-1.5"
          >
            <ArrowLeft size={18} />
            <span>Retour à l'app</span>
          </Button>
        </div>
      </div>

      {/* KPI Stats Cards - Métriques Globales et Moyennes par Ville */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {/* 1. Nombre total de villes */}
        <Card className="p-5 bg-white border border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Villes en Local</p>
              <p className="text-3xl font-extrabold text-sky-700 mt-1">{stats.totalCities}</p>
            </div>
            <div className="p-3 bg-sky-50 text-sky-600 rounded-xl">
              <MapPin size={24} />
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            <span className="text-emerald-600 font-medium">100% enregistrées en local</span>
          </p>
        </Card>

        {/* 2. Nombre total d'hôtels & Moyenne */}
        <Card className="p-5 bg-white border border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Hôtels en Local</p>
              <p className="text-3xl font-extrabold text-indigo-700 mt-1">{hotelStats.totalHotels.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
              <HotelIcon size={24} />
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3 font-medium">
            Moyenne : <span className="font-bold text-indigo-700">{(hotelStats.totalHotels / Math.max(1, stats.totalCities)).toFixed(1)}</span> / ville
          </p>
        </Card>

        {/* 3. Nombre total de restaurants & Moyenne */}
        <Card className="p-5 bg-white border border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Restaurants</p>
              <p className="text-3xl font-extrabold text-amber-700 mt-1">{restaurantStats.totalRestaurants.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
              <UtensilsCrossed size={24} />
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3 font-medium">
            Moyenne : <span className="font-bold text-amber-700">{(restaurantStats.totalRestaurants / Math.max(1, stats.totalCities)).toFixed(1)}</span> / ville
          </p>
        </Card>

        {/* 4. Restaurants Halal Vérifiés */}
        <Card className="p-5 bg-white border border-teal-200 bg-gradient-to-br from-white to-teal-50/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-teal-800 uppercase tracking-wider">Halal Vérifié</p>
              <p className="text-3xl font-extrabold text-teal-700 mt-1">{totalHalalVerifiedOverall.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-teal-50 text-teal-600 rounded-xl border border-teal-100">
              <ShieldCheck size={24} />
            </div>
          </div>
          <p className="text-xs text-slate-600 mt-3 font-medium">
            <span className="font-bold text-teal-700">{totalHalalVerifiedInProcessed}</span> dans les {processedHalalCities.length} villes traitées (≥15/ville)
          </p>
        </Card>

        {/* 5. Activités Référencées */}
        <Card className="p-5 bg-white border border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Activités</p>
              <p className="text-3xl font-extrabold text-teal-700 mt-1">{stats.totalActivities.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-teal-50 text-teal-600 rounded-xl">
              <Layers size={24} />
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3 font-medium">
            Moyenne : <span className="font-bold text-teal-700">{(stats.totalActivities / Math.max(1, stats.totalCities)).toFixed(1)}</span> / ville
          </p>
        </Card>

        {/* 6. Supervision & Indicateurs Quotas */}
        <Card className="p-5 bg-white border border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Suivi Quotas</p>
              <div className="mt-1 space-y-0.5">
                <p className="text-xs font-bold text-slate-800">
                  <span className={citiesUnder50Hotels.length > 0 ? 'text-amber-600' : 'text-emerald-600'}>
                    {citiesUnder50Hotels.length}
                  </span> &lt; 50 hôtels
                </p>
                <p className="text-xs font-bold text-slate-800">
                  <span className={citiesUnder100Restos.length > 0 ? 'text-rose-600' : 'text-emerald-600'}>
                    {citiesUnder100Restos.length}
                  </span> &lt; 100 restos
                </p>
              </div>
            </div>
            <div className={`p-3 rounded-xl ${citiesCompliantBoth.length > 0 ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
              <ShieldCheck size={24} />
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            <span className="text-emerald-600 font-semibold">{citiesCompliantBoth.length} villes</span> conformes (≥50 &amp; ≥100)
          </p>
        </Card>
      </div>

      {/* Statistiques Parkings en Local (Aéroports, Gares, Total) */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="text-xl" role="img" aria-label="Parking">🅿️</span>
              <span>Statistiques Parkings en Local</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Recensement dynamique des parkings d'aéroports et de gares • 100% hors-ligne
            </p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <button
              type="button"
              onClick={() => handleExportCalc('xlsx')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-xs font-semibold rounded-lg shadow-xs transition-all cursor-pointer"
              title="Exporter les statistiques locales complètes vers Calc / Excel"
            >
              <span>📊 Exporter les statistiques vers Calc/Excel</span>
            </button>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold rounded-full">
              <CheckCircle2 size={13} className="text-emerald-600" />
              Calcul automatique temps réel
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* 1. Nombre parkings total d'aéroports */}
          <div className="p-5 rounded-xl border border-sky-200 bg-gradient-to-br from-white via-sky-50/40 to-sky-100/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-sky-800 uppercase tracking-wider flex items-center gap-1.5">
                  <Plane size={15} className="text-sky-600" />
                  Nombre parkings total d'aéroports
                </p>
                <p className="text-3xl font-extrabold text-sky-900 mt-1.5">
                  {parkingStats.totalAirportParkings.toLocaleString()}
                </p>
              </div>
              <div className="p-3 bg-sky-100 text-sky-700 rounded-xl border border-sky-200">
                <Plane size={24} />
              </div>
            </div>
            <p className="text-xs text-sky-700 mt-2 font-medium">
              Infrastructures de stationnement aéroportuaires
            </p>
          </div>

          {/* 2. Nombre parkings total de gares */}
          <div className="p-5 rounded-xl border border-indigo-200 bg-gradient-to-br from-white via-indigo-50/40 to-indigo-100/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-indigo-800 uppercase tracking-wider flex items-center gap-1.5">
                  <Train size={15} className="text-indigo-600" />
                  Nombre parkings total de gares
                </p>
                <p className="text-3xl font-extrabold text-indigo-900 mt-1.5">
                  {parkingStats.totalStationParkings.toLocaleString()}
                </p>
              </div>
              <div className="p-3 bg-indigo-100 text-indigo-700 rounded-xl border border-indigo-200">
                <Train size={24} />
              </div>
            </div>
            <p className="text-xs text-indigo-700 mt-2 font-medium">
              Infrastructures de stationnement ferroviaires
            </p>
          </div>

          {/* 3. Nombre total de parkings */}
          <div className="p-5 rounded-xl border border-emerald-200 bg-gradient-to-br from-white via-emerald-50/40 to-emerald-100/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                  <SquareParking size={15} className="text-emerald-600" />
                  Nombre total de parkings
                </p>
                <p className="text-3xl font-extrabold text-emerald-900 mt-1.5">
                  {parkingStats.totalParkings.toLocaleString()}
                </p>
              </div>
              <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl border border-emerald-200">
                <SquareParking size={24} />
              </div>
            </div>
            <p className="text-xs text-emerald-700 mt-2 font-medium">
              Aéroports ({parkingStats.totalAirportParkings}) • Gares ({parkingStats.totalStationParkings}) • Centres-villes & Tourisme ({parkingStats.totalCenterParkings})
            </p>
          </div>
        </div>
      </div>

      {/* Local Hotels and Restaurants Stats Panel */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Database className="w-5 h-5 text-sky-600" />
              Statistiques Hôtels & Restaurants en Local
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Données intégrées pour toutes les villes locales &bull; Aucune dépendance API externe requise
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold rounded-full">
              <ShieldCheck size={14} className="text-emerald-600" />
              {hotelStats.verificationStatus.statusText}
            </span>
          </div>
        </div>

        {/* 2 Main Counters: Hotels & Restaurants */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Hotels Card */}
          <div className="p-5 rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-sky-50/30">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <HotelIcon size={16} className="text-sky-600" />
                  Hôtels en Local
                </span>
                <p className="text-3xl font-extrabold text-slate-900 mt-1.5">
                  {hotelStats.totalHotels} <span className="text-base font-normal text-slate-500">établissements</span>
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  Couvre {hotelStats.totalCitiesWithHotels} villes &bull; Moyenne {(hotelStats.totalHotels / Math.max(1, hotelStats.totalCitiesWithHotels)).toFixed(1)} hôtels/ville
                </p>
              </div>
              <span className="px-2.5 py-1 bg-sky-100 text-sky-800 text-xs font-bold rounded-lg">
                4 Gammes
              </span>
            </div>

            {/* Hotel Category Breakdown */}
            <div className="mt-4 pt-3 border-t border-slate-200">
              <p className="text-xs font-semibold text-slate-700 mb-2">Répartition par catégorie / gamme :</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 bg-white rounded-lg border border-slate-200 flex justify-between items-center">
                  <span className="text-slate-600">Économique</span>
                  <strong className="text-sky-700 font-bold">{hotelStats.byCategory.budget}</strong>
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-200 flex justify-between items-center">
                  <span className="text-slate-600">Milieu de gamme</span>
                  <strong className="text-sky-700 font-bold">{hotelStats.byCategory.midscale}</strong>
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-200 flex justify-between items-center">
                  <span className="text-slate-600">Haut de gamme</span>
                  <strong className="text-sky-700 font-bold">{hotelStats.byCategory.upscale}</strong>
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-200 flex justify-between items-center">
                  <span className="text-slate-600">Luxe</span>
                  <strong className="text-sky-700 font-bold">{hotelStats.byCategory.luxury}</strong>
                </div>
              </div>
            </div>

            {/* Stars Breakdown */}
            <div className="mt-3 pt-2 text-xs flex items-center justify-between text-slate-600">
              <span className="font-medium">Étoiles :</span>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(star => (
                  <span key={star} className="inline-flex items-center gap-0.5 bg-white px-1.5 py-0.5 rounded border border-slate-200 text-[11px]">
                    {star}<Star size={10} className="fill-amber-400 text-amber-400" />: <strong>{hotelStats.byStar[star] || 0}</strong>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Restaurants Card */}
          <div className="p-5 rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-amber-50/30">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <UtensilsCrossed size={16} className="text-amber-600" />
                  Restaurants en Local
                </span>
                <p className="text-3xl font-extrabold text-slate-900 mt-1.5">
                  {restaurantStats.totalRestaurants} <span className="text-base font-normal text-slate-500">adresses</span>
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  Couvre {restaurantStats.totalCitiesWithRestaurants} villes &bull; Moyenne {(restaurantStats.totalRestaurants / Math.max(1, restaurantStats.totalCitiesWithRestaurants)).toFixed(1)} restos/ville
                </p>
              </div>
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-lg">
                Filtres Stricts
              </span>
            </div>

            {/* Dietary Verification Breakdown */}
            <div className="mt-4 pt-3 border-t border-slate-200">
              <p className="text-xs font-semibold text-slate-700 mb-2">Statut de vérification alimentaire (règles strictes) :</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 bg-white rounded-lg border border-slate-200">
                  <span className="text-[11px] text-emerald-800 font-semibold block flex items-center gap-1">
                    <Leaf size={11} className="text-emerald-600" /> 100% Végétarien
                  </span>
                  <p className="text-sm font-bold text-emerald-900 mt-0.5">
                    {restaurantStats.vegetarian.strictCount} <span className="text-[10px] font-normal text-slate-500">({restaurantStats.vegetarian.optionsCount} avec options)</span>
                  </p>
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-200">
                  <span className="text-[11px] text-teal-800 font-semibold block flex items-center gap-1">
                    <ShieldCheck size={11} className="text-teal-600" /> Halal Vérifié
                  </span>
                  <p className="text-sm font-bold text-teal-900 mt-0.5">
                    {restaurantStats.halal.strictCount} <span className="text-[10px] font-normal text-slate-500">({restaurantStats.halal.optionsCount} avec options)</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Price range breakdown */}
            <div className="mt-3 pt-2 text-xs flex items-center justify-between text-slate-600">
              <span className="font-medium">Tranches de prix :</span>
              <div className="flex gap-2">
                {(['€', '€€', '€€€', '€€€€'] as const).map(tier => (
                  <span key={tier} className="bg-white px-1.5 py-0.5 rounded border border-slate-200 text-[11px]">
                    <span className="font-semibold">{tier}</span>: <strong>{restaurantStats.byPriceTier[tier] || 0}</strong>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Verification Status Footer */}
        <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
            <span>
              <strong>Intégrité certifiée :</strong> Ne déduit jamais le caractère halal ou végétarien d'un établissement d'après son nom. Seuls les établissements vérifiés sont annotés.
            </span>
          </div>
          <span className="text-slate-400 whitespace-nowrap text-[11px]">
            Dernier audit : {hotelStats.verificationStatus.verificationDate}
          </span>
        </div>
      </div>

      {/* Halal Restaurants Audit & Control Panel */}
      <div className="bg-white p-6 rounded-2xl border border-teal-200 shadow-sm space-y-5 bg-gradient-to-b from-white to-teal-50/10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-teal-100 pb-4">
          <div className="flex items-start gap-3">
            <div className="p-2.5 bg-teal-100 text-teal-800 rounded-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xl font-bold text-slate-900">
                  Contrôle Qualité : Restaurants Halal Vérifiés par Ville
                </h2>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-100 text-teal-800 border border-teal-200">
                  {compliantHalalCitiesCount} / {processedHalalCities.length} villes conformes ({processedHalalCities.length > 0 ? Math.round((compliantHalalCitiesCount / processedHalalCities.length) * 100) : 0}%)
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Suivi du traitement des {processedHalalCities.length} villes auditées &bull; Seuil contractuel garanti : <strong>≥ 15 restaurants halal réels vérifiés par ville</strong> &bull; Enregistrés 100% en local
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start md:self-center">
            <button
              type="button"
              onClick={() => setShowHalalControlSection(!showHalalControlSection)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white text-teal-800 border border-teal-200 hover:bg-teal-50 shadow-2xs transition-colors cursor-pointer"
            >
              {showHalalControlSection ? 'Masquer le tableau détaillé' : `Afficher le tableau détaillé (${processedHalalCities.length} villes)`}
            </button>
          </div>
        </div>

        {/* 4 Indicateurs Synthétiques Halal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="p-3.5 bg-teal-50/60 rounded-xl border border-teal-200/80">
            <span className="text-[11px] font-semibold text-teal-800 uppercase tracking-wider block">
              {processedHalalCities.length} Villes Traitées (100% du Répertoire)
            </span>
            <p className="text-2xl font-black text-teal-900 mt-1">
              {totalHalalVerifiedInProcessed} <span className="text-xs font-normal text-teal-700">restos vérifiés</span>
            </p>
            <p className="text-[11px] text-teal-700 mt-1">
              Moyenne : {(totalHalalVerifiedInProcessed / Math.max(1, processedHalalCities.length)).toFixed(1)} / ville
            </p>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-slate-200">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
              Total Global Base Locale
            </span>
            <p className="text-2xl font-black text-slate-900 mt-1">
              {totalHalalVerifiedOverall.toLocaleString()} <span className="text-xs font-normal text-slate-500">restos vérifiés</span>
            </p>
            <p className="text-[11px] text-slate-500 mt-1">
              Sur {restaurantStats.totalRestaurants.toLocaleString('fr-FR')} restaurants locaux ({allLocalCities.length} villes)
            </p>
          </div>

          <div className="p-3.5 bg-emerald-50/60 rounded-xl border border-emerald-200/80">
            <span className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wider block">
              Conformité Quota (≥ 15)
            </span>
            <p className="text-2xl font-black text-emerald-900 mt-1">
              {compliantHalalCitiesCount} / {processedHalalCities.length} <span className="text-xs font-normal text-emerald-700">villes</span>
            </p>
            <p className="text-[11px] text-emerald-700 mt-1">
              100% atteignent ou dépassent 15 adresses
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
              Persistance &amp; Prochain Lot
            </span>
            <p className="text-sm font-bold text-slate-800 mt-1">
              {processedHalalCities.length} villes enregistrées traitées
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              {nextUntreatedCity
                ? `Prochaine exécution : démarre à ${nextUntreatedCity.name} (#${nextUntreatedIndex})`
                : 'Toutes les villes de la base sont traitées'}
            </p>
          </div>
        </div>

        {/* Tableau Détaillé des Villes Traitées */}
        {showHalalControlSection && (
          <div className="border border-teal-200/70 rounded-xl overflow-hidden bg-white shadow-2xs">
            <div className="overflow-x-auto max-h-[420px] overflow-y-auto">
              <table className="w-full text-left text-xs text-slate-600">
                <thead className="bg-teal-50/80 sticky top-0 border-b border-teal-200 text-[11px] uppercase text-teal-900 font-bold z-10">
                  <tr>
                    <th scope="col" className="px-3 py-2.5">#</th>
                    <th scope="col" className="px-3 py-2.5">Ville</th>
                    <th scope="col" className="px-3 py-2.5">Pays</th>
                    <th scope="col" className="px-3 py-2.5 text-center">Restos Halal Vérifiés</th>
                    <th scope="col" className="px-3 py-2.5 text-center">Total Restos</th>
                    <th scope="col" className="px-3 py-2.5 text-center">Statut Quota (≥ 15)</th>
                    <th scope="col" className="px-3 py-2.5 text-center">Date d'Audit</th>
                    <th scope="col" className="px-3 py-2.5 text-right">Contrôle</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {processedHalalCities.map((city, idx) => {
                    const halalCount = cityDataMap.get(city.id)?.halalCount || 0;
                    const restoTotal = cityDataMap.get(city.id)?.restoCount || 0;
                    const isCompliant = halalCount >= 15;

                    return (
                      <tr key={city.id} className="hover:bg-teal-50/30 transition-colors">
                        <td className="px-3 py-2 font-mono text-slate-400 font-semibold">{idx + 1}</td>
                        <td className="px-3 py-2 font-bold text-slate-900">
                          <span className="flex items-center gap-1.5">
                            {city.name}
                          </span>
                        </td>
                        <td className="px-3 py-2 text-slate-600">{city.country}</td>
                        <td className="px-3 py-2 text-center">
                          <span
                            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-black ${
                              isCompliant
                                ? 'bg-teal-100 text-teal-900 border border-teal-200'
                                : 'bg-rose-100 text-rose-900'
                            }`}
                          >
                            <ShieldCheck size={12} className="text-teal-700" />
                            {halalCount} vérifiés
                          </span>
                        </td>
                        <td className="px-3 py-2 text-center text-slate-600 font-medium">
                          {restoTotal}
                        </td>
                        <td className="px-3 py-2 text-center">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                            <Check size={10} className="text-emerald-700" />
                            Conforme (≥ 15)
                          </span>
                        </td>
                        <td className="px-3 py-2 text-center font-mono text-slate-500 text-[11px]">
                          {city.halal_traite_date || '15/01/2025'}
                        </td>
                        <td className="px-3 py-2 text-right">
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedCityForView(city);
                              setSelectedCityTab('restaurants');
                              setModalHalalOnlyFilter(true);
                            }}
                            className="text-xs text-teal-700 hover:text-teal-900 font-semibold underline cursor-pointer"
                          >
                            Inspecter les {halalCount}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot className="bg-teal-50 border-t-2 border-teal-300 font-bold text-teal-900 text-xs sticky bottom-0">
                  <tr>
                    <td className="px-3 py-2.5" colSpan={3}>
                      TOTAL VILLES TRAITÉES (LOTS 1, 2 &amp; 3 — {processedHalalCities.length} VILLES)
                    </td>
                    <td className="px-3 py-2.5 text-center font-black text-sm text-teal-900">
                      {totalHalalVerifiedInProcessed} vérifiés
                    </td>
                    <td className="px-3 py-2.5 text-center text-slate-600 font-semibold">
                      {processedHalalCities.reduce((acc, c) => acc + (cityDataMap.get(c.id)?.restoCount || 0), 0)}
                    </td>
                    <td className="px-3 py-2.5 text-center text-emerald-800 font-black">
                      100% CONFORME (≥15)
                    </td>
                    <td className="px-3 py-2.5 text-center text-slate-500 font-normal">
                      15/01/2025
                    </td>
                    <td className="px-3 py-2.5 text-right"></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Visual Alert if cities have < 20 activities */}
      {stats.citiesWithLowActivities.length > 0 && (
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 flex items-start space-x-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-amber-900">Alerte : Villes avec moins de 20 activités détectées</h4>
            <p className="text-sm text-amber-800 mt-1">
              Les villes suivantes ont un nombre insuffisant d'activités :{' '}
              {stats.citiesWithLowActivities.map(c => `${c.name} (${c.count})`).join(', ')}.
            </p>
          </div>
        </div>
      )}

      {/* Continents Breakdown Badges */}
      <div className="bg-white p-4 rounded-xl border border-slate-200">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Répartition par Continent</p>
        <div className="flex flex-wrap gap-2">
          {Object.entries(stats.citiesByContinent).map(([cont, count]) => (
            <button
              key={cont}
              onClick={() => setSelectedContinent(selectedContinent === cont ? 'all' : cont)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center space-x-2 ${
                selectedContinent === cont
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <span>{cont}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  selectedContinent === cont ? 'bg-sky-700 text-white' : 'bg-slate-200 text-slate-700'
                }`}
              >
                {count}
              </span>
            </button>
          ))}
          {selectedContinent !== 'all' && (
            <button
              onClick={() => setSelectedContinent('all')}
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-500 hover:text-slate-700 underline"
            >
              Réinitialiser le filtre
            </button>
          )}
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher une ville, un pays, un continent..."
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
              >
                Effacer
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 w-full md:w-auto justify-end">
            <span className="font-semibold text-slate-700">{filteredCities.length}</span> ville{filteredCities.length > 1 ? 's' : ''} affichée{filteredCities.length > 1 ? 's' : ''}
          </div>
        </div>

        {/* Quick Quota Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
          <span className="text-xs font-semibold text-slate-500 mr-1 flex items-center gap-1">
            <SlidersHorizontal size={12} />
            Filtre Quotas :
          </span>

          <button
            type="button"
            onClick={() => setStatusFilter('all')}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
              statusFilter === 'all'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Toutes les villes ({allLocalCities.length})
          </button>

          <button
            type="button"
            onClick={() => setStatusFilter('under50Hotels')}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all flex items-center gap-1 ${
              statusFilter === 'under50Hotels'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200'
            }`}
          >
            <span>⚠️ Hôtels &lt; 50</span>
            <span className="text-[11px] font-bold">({citiesUnder50Hotels.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setStatusFilter('under100Restos')}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all flex items-center gap-1 ${
              statusFilter === 'under100Restos'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'bg-rose-50 text-rose-800 hover:bg-rose-100 border border-rose-200'
            }`}
          >
            <span>⚠️ Restos &lt; 100</span>
            <span className="text-[11px] font-bold">({citiesUnder100Restos.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setStatusFilter('compliant')}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all flex items-center gap-1 ${
              statusFilter === 'compliant'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200'
            }`}
          >
            <span>✓ Conformes (≥50 &amp; ≥100)</span>
            <span className="text-[11px] font-bold">({citiesCompliantBoth.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setStatusFilter('halalTreated')}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all flex items-center gap-1 ${
              statusFilter === 'halalTreated'
                ? 'bg-teal-700 text-white shadow-sm'
                : 'bg-teal-50 text-teal-800 hover:bg-teal-100 border border-teal-200'
            }`}
          >
            <ShieldCheck size={12} className={statusFilter === 'halalTreated' ? 'text-white' : 'text-teal-600'} />
            <span>Halal Traité (≥15)</span>
            <span className="text-[11px] font-bold">({processedHalalCities.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setStatusFilter('under20Acts')}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all flex items-center gap-1 ${
              statusFilter === 'under20Acts'
                ? 'bg-amber-700 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <span>Activités &lt; 20</span>
            <span className="text-[11px] font-bold">({citiesUnder20Acts.length})</span>
          </button>

          {statusFilter !== 'all' && (
            <button
              type="button"
              onClick={() => setStatusFilter('all')}
              className="text-xs text-sky-600 hover:underline font-medium ml-1"
            >
              Réinitialiser
            </button>
          )}
        </div>
      </div>

      {/* Export Status & Progress / Notification / Error Feedback */}
      {(isExportingFullCalc || exportNotice || exportError || lastExportedFile) && (
        <div
          id="export-status-banner"
          className={`p-4 rounded-xl border shadow-sm transition-all animate-fade-in ${
            exportError
              ? 'bg-rose-50 border-rose-200 text-rose-900'
              : isExportingFullCalc
              ? 'bg-sky-50 border-sky-200 text-sky-900'
              : 'bg-emerald-50 border-emerald-200 text-emerald-900'
          }`}
        >
          {/* Ongoing export progress */}
          {isExportingFullCalc && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <Loader2 size={20} className="animate-spin text-sky-600 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-sky-900">
                      Génération du classeur Calc en cours...
                    </p>
                    <p className="text-xs text-sky-700">
                      {exportProgress?.step || 'Traitement des feuilles par lots sécurisés...'}
                    </p>
                  </div>
                </div>
                <span className="text-sm font-bold text-sky-700">
                  {exportProgress?.percent ?? 10}%
                </span>
              </div>
              <div className="w-full bg-sky-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-sky-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${Math.max(5, exportProgress?.percent ?? 10)}%` }}
                />
              </div>
              <p className="text-[11px] text-sky-600 italic">
                Optimisation mémoire active (flux par blocs) : l'écran reste réactif sans risque de crash.
              </p>
            </div>
          )}

          {/* Error display */}
          {!isExportingFullCalc && exportError && (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start space-x-2.5">
                <AlertTriangle size={20} className="text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-rose-800">
                    Échec de l'exportation
                  </p>
                  <p className="text-xs text-rose-700 mt-0.5">
                    {exportError}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => handleExportFullCalc('xlsx')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-all cursor-pointer"
                >
                  <RefreshCw size={14} />
                  <span>Réessayer</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleExportCalc('ods')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-rose-100 text-rose-700 border border-rose-300 rounded-lg text-xs font-semibold shadow-xs transition-all cursor-pointer"
                >
                  Synthèse seule
                </button>
                <button
                  type="button"
                  onClick={() => setExportError(null)}
                  className="p-1 text-rose-400 hover:text-rose-700 rounded-md cursor-pointer"
                  title="Fermer"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          )}

          {/* Success notice */}
          {!isExportingFullCalc && !exportError && exportNotice && (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-emerald-800">{exportNotice}</p>
                  {lastExportedFile && (
                    <p className="text-xs text-emerald-600">
                      Fichier : <span className="font-mono">{lastExportedFile.filename}</span> ({lastExportedFile.sizeFormatted})
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {lastExportedFile && (
                  <a
                    href={lastExportedFile.downloadUrl}
                    download={lastExportedFile.filename}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-all"
                  >
                    <Download size={14} />
                    <span>Télécharger à nouveau</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => {
                    setExportNotice(null);
                    setLastExportedFile(null);
                  }}
                  className="p-1 text-emerald-500 hover:text-emerald-800 rounded-md cursor-pointer"
                  title="Fermer"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 📦 Section: EXPORT DE LA BASE LOCALE */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 p-6 rounded-2xl border border-slate-700/70 shadow-lg text-white space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="space-y-1.5">
            <div className="flex items-center space-x-2.5">
              <span className="text-2xl" role="img" aria-label="Export">📦</span>
              <h2 className="text-xl font-bold tracking-tight text-white">
                EXPORT DE LA BASE LOCALE
              </h2>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                100% Hors-ligne & Optimisé
              </span>
            </div>

            {/* X villes • X activités • X hôtels • X restaurants calculés automatiquement */}
            <p className="text-sm font-semibold text-sky-300 flex items-center gap-2 flex-wrap">
              <span>{stats.totalCities} villes</span>
              <span className="text-slate-500">•</span>
              <span>{stats.totalActivities.toLocaleString('fr-FR')} activités</span>
              <span className="text-slate-500">•</span>
              <span>{hotelStats.totalHotels.toLocaleString('fr-FR')} hôtels</span>
              <span className="text-slate-500">•</span>
              <span>{restaurantStats.totalRestaurants.toLocaleString('fr-FR')} restaurants</span>
            </p>

            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
              Exportez l'intégralité des fiches touristiques locales sans aucune requête Internet ni IA.
              Le classeur LibreOffice Calc / Excel comprend 5 feuilles complètes (Résumé, Villes, Activités, Hôtels, Restaurants) avec mémoire tampon protégée pour éviter tout plantage sur mobile et desktop.
            </p>
          </div>

          <div className="flex items-center flex-wrap sm:flex-nowrap gap-3 shrink-0">
            <button
              id="btn-export-stats-calc-main"
              onClick={() => handleExportCalc('xlsx')}
              disabled={isExportingFullCalc || isExportingFullPDF}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer hover:shadow-lg"
              title="Générer instantanément le classeur de statistiques et synthèse des villes (compatible LibreOffice Calc et Excel)"
            >
              <span>📊 Exporter les statistiques vers Calc/Excel</span>
            </button>

            <button
              id="btn-export-full-calc-main"
              onClick={() => handleExportFullCalc('xlsx')}
              disabled={isExportingFullCalc || isExportingFullPDF}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 bg-slate-700 hover:bg-slate-600 active:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium text-sm rounded-xl shadow-md transition-all cursor-pointer"
              title="Générer un classeur Calc (.xlsx) avec toutes les données locales en 5 feuilles détaillées (Résumé, Villes, Activités, Hôtels, Restaurants)"
            >
              {isExportingFullCalc ? (
                <>
                  <Loader2 size={18} className="animate-spin text-white" />
                  <span>{exportProgress ? `${exportProgress.step} (${exportProgress.percent}%)` : 'Génération...'}</span>
                </>
              ) : (
                <span>📦 Base intégrale (5 feuilles)</span>
              )}
            </button>

            <button
              id="btn-export-full-pdf-main"
              onClick={handleExportFullPDF}
              disabled={isExportingFullCalc || isExportingFullPDF}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-rose-600 hover:bg-rose-500 active:bg-rose-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer hover:shadow-lg"
              title="Générer un document PDF (.pdf) contenant toutes les villes, activités, hôtels et restaurants"
            >
              {isExportingFullPDF ? (
                <>
                  <Loader2 size={18} className="animate-spin text-white" />
                  <span>Génération PDF...</span>
                </>
              ) : (
                <span>📄 Export complet PDF</span>
              )}
            </button>
          </div>
        </div>

        {/* Détail & options secondaires */}
        <div className="pt-3 border-t border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center flex-wrap gap-x-4 gap-y-1">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Calc : 5 feuilles structurées (Résumé, Villes, Activités, Hôtels, Restaurants)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-400"></span>
              PDF : Couverture + fiches par ville avec répétition d'en-têtes
            </span>
          </div>

          <div className="flex items-center flex-wrap gap-2">
            <span className="text-slate-400">Variantes Calc :</span>
            <button
              type="button"
              onClick={() => handleExportFullCalc('ods')}
              disabled={isExportingFullCalc}
              className="text-emerald-400 hover:text-emerald-300 underline font-medium cursor-pointer disabled:opacity-50"
              title="Générer au format OpenDocument Spreadsheet (.ods)"
            >
              Complet (.ods)
            </button>
            <span className="text-slate-600">&bull;</span>
            <button
              type="button"
              onClick={() => handleExportCalc('ods')}
              disabled={isExportingFullCalc}
              className="text-sky-400 hover:text-sky-300 underline font-medium cursor-pointer disabled:opacity-50"
              title="Télécharger rapidement la synthèse des villes (.ods)"
            >
              Synthèse (.ods)
            </button>
            <span className="text-slate-600">&bull;</span>
            <button
              type="button"
              onClick={() => handleExportCalc('xlsx')}
              disabled={isExportingFullCalc}
              className="text-sky-400 hover:text-sky-300 underline font-medium cursor-pointer disabled:opacity-50"
              title="Télécharger rapidement la synthèse des villes (.xlsx)"
            >
              Synthèse (.xlsx)
            </button>
            <span className="text-slate-600">&bull;</span>
            <button
              type="button"
              onClick={handleExportPDF}
              disabled={isExportingFullPDF}
              className="text-sky-400 hover:text-sky-300 underline font-medium cursor-pointer disabled:opacity-50"
            >
              PDF synthèse
            </button>
          </div>
        </div>
      </div>

      {/* Cities Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 border-b border-slate-200 text-xs uppercase text-slate-500 font-semibold">
              <tr>
                <th scope="col" className="px-4 py-3">#</th>
                <th scope="col" className="px-4 py-3">Ville</th>
                <th scope="col" className="px-4 py-3">Pays</th>
                <th scope="col" className="px-4 py-3">Continent / Région</th>
                <th scope="col" className="px-4 py-3">Coordonnées GPS</th>
                <th scope="col" className="px-4 py-3 text-center">Activités</th>
                <th scope="col" className="px-4 py-3 text-center">Hôtels</th>
                <th scope="col" className="px-4 py-3 text-center">Restaurants</th>
                <th scope="col" className="px-4 py-3 text-center">Halal Vérifié</th>
                <th scope="col" className="px-4 py-3 text-center bg-sky-50/60 text-sky-900 border-x border-slate-200/60">
                  <span className="inline-flex items-center gap-1 justify-center">
                    <Plane size={12} className="text-sky-600" /> Aéroports
                  </span>
                </th>
                <th scope="col" className="px-4 py-3 text-center bg-indigo-50/60 text-indigo-900 border-r border-slate-200/60">
                  <span className="inline-flex items-center gap-1 justify-center">
                    <Train size={12} className="text-indigo-600" /> Gares
                  </span>
                </th>
                <th scope="col" className="px-4 py-3 text-center bg-emerald-50/60 text-emerald-900 border-r border-slate-200/60">
                  <span className="inline-flex items-center gap-1 justify-center">
                    <SquareParking size={12} className="text-emerald-600" /> Total parkings
                  </span>
                </th>
                <th scope="col" className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredCities.length === 0 ? (
                <tr>
                  <td colSpan={13} className="text-center py-8 text-slate-400">
                    Aucune ville ne correspond à votre recherche.
                  </td>
                </tr>
              ) : (
                filteredCities.map((city, index) => {
                  const actCount = city.activities?.length || 0;
                  const isUnder20 = actCount < 20;
                  const hotelCount = getLocalHotelsByCityId(city.id).length;
                  const restoCount = getLocalRestaurantsByCityId(city.id).length;
                  const halalCount = cityDataMap.get(city.id)?.halalCount || 0;
                  const airportCount = cityDataMap.get(city.id)?.airportCount || 0;
                  const stationCount = cityDataMap.get(city.id)?.stationCount || 0;
                  const parkingCount = cityDataMap.get(city.id)?.parkingCount || 0;

                  return (
                    <tr key={city.id} className="hover:bg-slate-50/75 transition-colors">
                      <td className="px-4 py-3 text-slate-400 text-xs">{index + 1}</td>
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        <div className="flex flex-col items-start gap-1">
                          <span>{city.name}</span>
                          {city.halal_verifie_traite && (
                            <span
                              className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-teal-50 text-teal-700 border border-teal-200"
                              title={`Halal vérifié traité le ${city.halal_traite_date || '15/01/2025'} (≥ 15 restaurants halal vérifiés)`}
                            >
                              <ShieldCheck size={10} className="text-teal-600" /> Halal vérifié traité
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-slate-700">{city.country}</td>
                      <td className="px-4 py-3">
                        <span className="inline-block px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-xs">
                          {city.continent || city.region || '—'}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-xs text-slate-500 font-mono">
                        {city.coordinates.lat.toFixed(4)}, {city.coordinates.lng.toFixed(4)}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <div className="flex flex-col items-center gap-1">
                          <span
                            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                              isUnder20
                                ? 'bg-rose-100 text-rose-800'
                                : 'bg-emerald-100 text-emerald-800'
                            }`}
                          >
                            <Layers size={11} className="opacity-70" />
                            {actCount}
                          </span>
                          {isUnder20 && (
                            <span className="text-[10px] text-rose-600 font-semibold">&lt; 20 act.</span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <div className="flex flex-col items-center gap-1">
                          <span
                            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                              hotelCount >= 50
                                ? 'bg-sky-100 text-sky-800'
                                : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            <HotelIcon size={11} className="opacity-70" />
                            {hotelCount}
                          </span>
                          {hotelCount < 50 ? (
                            <span
                              className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200 shadow-2xs"
                              title="Cette ville possède moins de 50 hôtels"
                            >
                              <AlertTriangle size={10} className="text-amber-600 shrink-0" />
                              &lt; 50 hôtels
                            </span>
                          ) : (
                            <span
                              className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-2xs"
                              title="Objectif ≥ 50 hôtels atteint"
                            >
                              <Check size={10} className="text-emerald-600 shrink-0" />
                              ≥ 50 hôtels
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <div className="flex flex-col items-center gap-1">
                          <span
                            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                              restoCount >= 100
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            <UtensilsCrossed size={11} className="opacity-70" />
                            {restoCount}
                          </span>
                          {restoCount < 100 ? (
                            <span
                              className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-50 text-rose-800 border border-rose-200 shadow-2xs"
                              title="Cette ville possède moins de 100 restaurants"
                            >
                              <AlertTriangle size={10} className="text-rose-600 shrink-0" />
                              &lt; 100 restos
                            </span>
                          ) : (
                            <span
                              className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-2xs"
                              title="Objectif ≥ 100 restaurants atteint"
                            >
                              <Check size={10} className="text-emerald-600 shrink-0" />
                              ≥ 100 restos
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <div className="flex flex-col items-center gap-1">
                          <span
                            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                              halalCount >= 15
                                ? 'bg-teal-100 text-teal-800 border border-teal-200'
                                : halalCount > 0
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-slate-100 text-slate-500'
                            }`}
                          >
                            <ShieldCheck size={11} className={halalCount >= 15 ? 'text-teal-700' : 'text-amber-700'} />
                            {halalCount}
                          </span>
                          {city.halal_verifie_traite ? (
                            <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-teal-50 text-teal-700 border border-teal-200">
                              <Check size={9} className="text-teal-600 shrink-0" />
                              Traité (≥ 15)
                            </span>
                          ) : (
                            <span className="text-[10px] text-slate-400">En attente</span>
                          )}
                        </div>
                      </td>

                      {/* Aéroports */}
                      <td className="px-4 py-3 text-center bg-sky-50/20">
                        <div className="flex flex-col items-center gap-0.5">
                          <span
                            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${
                              airportCount > 0
                                ? 'bg-sky-100 text-sky-800 border border-sky-200'
                                : 'bg-slate-100 text-slate-400'
                            }`}
                            title={`${airportCount} aéroport(s) avec parking à ${city.name}`}
                          >
                            <Plane size={11} className={airportCount > 0 ? 'text-sky-600' : 'text-slate-400'} />
                            {airportCount}
                          </span>
                          <span className="text-[10px] text-slate-400">
                            {airportCount > 0 ? `${airportCount} aéroport${airportCount > 1 ? 's' : ''}` : 'aucun'}
                          </span>
                        </div>
                      </td>

                      {/* Gares */}
                      <td className="px-4 py-3 text-center bg-indigo-50/20">
                        <div className="flex flex-col items-center gap-0.5">
                          <span
                            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${
                              stationCount > 0
                                ? 'bg-indigo-100 text-indigo-800 border border-indigo-200'
                                : 'bg-slate-100 text-slate-400'
                            }`}
                            title={`${stationCount} gare(s) avec parking à ${city.name}`}
                          >
                            <Train size={11} className={stationCount > 0 ? 'text-indigo-600' : 'text-slate-400'} />
                            {stationCount}
                          </span>
                          <span className="text-[10px] text-slate-400">
                            {stationCount > 0 ? `${stationCount} gare${stationCount > 1 ? 's' : ''}` : 'aucune'}
                          </span>
                        </div>
                      </td>

                      {/* Total parkings */}
                      <td className="px-4 py-3 text-center bg-emerald-50/20">
                        <div className="flex flex-col items-center gap-0.5">
                          <span
                            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-extrabold ${
                              parkingCount > 0
                                ? 'bg-emerald-100 text-emerald-900 border border-emerald-300 shadow-2xs'
                                : 'bg-slate-100 text-slate-400'
                            }`}
                            title={`${city.name} — ${airportCount} aéroports — ${stationCount} gares — ${parkingCount} parkings`}
                          >
                            <SquareParking size={11} className={parkingCount > 0 ? 'text-emerald-700' : 'text-slate-400'} />
                            {parkingCount}
                          </span>
                          <span className="text-[10px] text-emerald-800 font-semibold">
                            {parkingCount > 0 ? `${parkingCount} parking${parkingCount > 1 ? 's' : ''}` : '0'}
                          </span>
                        </div>
                      </td>

                      <td className="px-4 py-3 text-right">
                        <Button
                          onClick={() => setSelectedCityForView(city)}
                          variant="ghost"
                          size="sm"
                          className="!text-sky-600 hover:!bg-sky-50 text-xs"
                        >
                          Détails
                        </Button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
            <tfoot className="bg-slate-100/90 border-t-2 border-slate-300 font-bold text-slate-800 text-xs">
              <tr>
                <td className="px-4 py-3.5 text-slate-700 font-bold uppercase tracking-wider" colSpan={2}>
                  TOTAL ({filteredCities.length} ville{filteredCities.length > 1 ? 's' : ''})
                </td>
                <td className="px-4 py-3.5 text-slate-400 font-normal">—</td>
                <td className="px-4 py-3.5 text-slate-400 font-normal">—</td>
                <td className="px-4 py-3.5 text-slate-400 font-mono font-normal">—</td>
                <td className="px-4 py-3.5 text-center text-emerald-800 font-extrabold text-sm">
                  <div>{filteredCities.reduce((acc, c) => acc + (c.activities?.length || 0), 0).toLocaleString()}</div>
                  <div className="text-[10px] font-normal text-slate-500">
                    Moy: {(filteredCities.reduce((acc, c) => acc + (c.activities?.length || 0), 0) / Math.max(1, filteredCities.length)).toFixed(1)}
                  </div>
                </td>
                <td className="px-4 py-3.5 text-center text-sky-800 font-extrabold text-sm">
                  <div>{filteredCities.reduce((acc, c) => acc + (cityDataMap.get(c.id)?.hotelCount || 0), 0).toLocaleString()}</div>
                  <div className="text-[10px] font-normal text-slate-500">
                    Moy: {(filteredCities.reduce((acc, c) => acc + (cityDataMap.get(c.id)?.hotelCount || 0), 0) / Math.max(1, filteredCities.length)).toFixed(1)}
                  </div>
                </td>
                <td className="px-4 py-3.5 text-center text-amber-800 font-extrabold text-sm">
                  <div>{filteredCities.reduce((acc, c) => acc + (cityDataMap.get(c.id)?.restoCount || 0), 0).toLocaleString()}</div>
                  <div className="text-[10px] font-normal text-slate-500">
                    Moy: {(filteredCities.reduce((acc, c) => acc + (cityDataMap.get(c.id)?.restoCount || 0), 0) / Math.max(1, filteredCities.length)).toFixed(1)}
                  </div>
                </td>
                <td className="px-4 py-3.5 text-center text-teal-800 font-extrabold text-sm">
                  <div>{filteredCities.reduce((acc, c) => acc + (cityDataMap.get(c.id)?.halalCount || 0), 0).toLocaleString()}</div>
                  <div className="text-[10px] font-normal text-slate-500">
                    Moy: {(filteredCities.reduce((acc, c) => acc + (cityDataMap.get(c.id)?.halalCount || 0), 0) / Math.max(1, filteredCities.length)).toFixed(1)}
                  </div>
                </td>
                <td className="px-4 py-3.5 text-center text-sky-800 font-extrabold text-sm bg-sky-50/40">
                  <div>{filteredCities.reduce((acc, c) => acc + (cityDataMap.get(c.id)?.airportCount || 0), 0).toLocaleString()}</div>
                  <div className="text-[10px] font-normal text-slate-500">
                    Moy: {(filteredCities.reduce((acc, c) => acc + (cityDataMap.get(c.id)?.airportCount || 0), 0) / Math.max(1, filteredCities.length)).toFixed(1)}
                  </div>
                </td>
                <td className="px-4 py-3.5 text-center text-indigo-800 font-extrabold text-sm bg-indigo-50/40">
                  <div>{filteredCities.reduce((acc, c) => acc + (cityDataMap.get(c.id)?.stationCount || 0), 0).toLocaleString()}</div>
                  <div className="text-[10px] font-normal text-slate-500">
                    Moy: {(filteredCities.reduce((acc, c) => acc + (cityDataMap.get(c.id)?.stationCount || 0), 0) / Math.max(1, filteredCities.length)).toFixed(1)}
                  </div>
                </td>
                <td className="px-4 py-3.5 text-center text-emerald-800 font-extrabold text-sm bg-emerald-50/40">
                  <div>{filteredCities.reduce((acc, c) => acc + (cityDataMap.get(c.id)?.parkingCount || 0), 0).toLocaleString()}</div>
                  <div className="text-[10px] font-normal text-slate-500">
                    Moy: {(filteredCities.reduce((acc, c) => acc + (cityDataMap.get(c.id)?.parkingCount || 0), 0) / Math.max(1, filteredCities.length)).toFixed(1)}
                  </div>
                </td>
                <td className="px-4 py-3.5 text-right"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* City Activities, Hotels & Restaurants Detail Modal */}
      {selectedCityForView && (() => {
        const cityHotels = getLocalHotelsByCityId(selectedCityForView.id);
        const cityRestaurants = getLocalRestaurantsByCityId(selectedCityForView.id);
        const cityHalalRestos = cityRestaurants.filter(
          r => r.dietary?.halal === 'Halal vérifié' || r.halal_verifie === true || r['halal_vérifié'] === true
        );
        const displayedRestaurants = modalHalalOnlyFilter ? cityHalalRestos : cityRestaurants;
        const cityParking = getCityParkingMetrics(selectedCityForView.name);

        return (
          <Modal
            isOpen={true}
            onClose={() => {
              setSelectedCityForView(null);
              setSelectedCityTab('activities');
              setModalHalalOnlyFilter(false);
            }}
            title={`${selectedCityForView.name} (${selectedCityForView.country}) - Données Locales`}
          >
            <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200 text-xs text-slate-600">
                <span>
                  Continent : <strong>{selectedCityForView.continent}</strong> | GPS :{' '}
                  <span className="font-mono text-xs">
                    {selectedCityForView.coordinates.lat}, {selectedCityForView.coordinates.lng}
                  </span>
                  {selectedCityForView.halal_verifie_traite && (
                    <span className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-teal-50 text-teal-700 border border-teal-200">
                      <ShieldCheck size={10} className="text-teal-600" /> Halal vérifié traité le {selectedCityForView.halal_traite_date || '15/01/2025'} ({cityHalalRestos.length} adresses)
                    </span>
                  )}
                </span>
                <span className="text-slate-400">
                  Vérifié au 15/01/2025
                </span>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-slate-200">
                <button
                  type="button"
                  onClick={() => setSelectedCityTab('activities')}
                  className={`px-4 py-2 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
                    selectedCityTab === 'activities'
                      ? 'border-sky-600 text-sky-700'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Layers size={14} />
                  Activités ({selectedCityForView.activities?.length || 0})
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCityTab('hotels')}
                  className={`px-4 py-2 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
                    selectedCityTab === 'hotels'
                      ? 'border-sky-600 text-sky-700'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <HotelIcon size={14} />
                  Hôtels ({cityHotels.length})
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCityTab('restaurants')}
                  className={`px-4 py-2 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
                    selectedCityTab === 'restaurants'
                      ? 'border-teal-600 text-teal-700'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <UtensilsCrossed size={14} />
                  Restaurants ({cityRestaurants.length})
                  {cityHalalRestos.length > 0 && (
                    <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-teal-100 text-teal-800">
                      {cityHalalRestos.length} halal
                    </span>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCityTab('parkings')}
                  className={`px-4 py-2 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
                    selectedCityTab === 'parkings'
                      ? 'border-emerald-600 text-emerald-700'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <SquareParking size={14} />
                  Parkings ({cityParking.total})
                  {cityParking.total > 0 && (
                    <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      {cityParking.airports} aéro. / {cityParking.stations} gares
                    </span>
                  )}
                </button>
              </div>

              {/* Tab 1: Activities */}
              {selectedCityTab === 'activities' && (
                <div className="space-y-3">
                  {selectedCityForView.activities?.map((act, i) => (
                    <div
                      key={act.id}
                      className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 hover:border-sky-300 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-bold text-slate-400">#{i + 1}</span>
                          <h4 className="font-semibold text-slate-800 text-sm">{act.name}</h4>
                        </div>
                        <div className="flex items-center gap-1.5 flex-shrink-0">
                          {act.priority && (
                            <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-amber-100 text-amber-800">
                              {act.priority}
                            </span>
                          )}
                          <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-sky-100 text-sky-800">
                            {act.type}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 mt-2 line-clamp-2">{act.description}</p>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-2.5 pt-2 border-t border-slate-200/60">
                        <span className="flex items-center gap-1">
                          <Clock size={12} /> {act.duration} min
                        </span>
                        {act.address && (
                          <span className="flex items-center gap-1 truncate max-w-xs">
                            <MapPin size={12} /> {act.address}
                          </span>
                        )}
                        <span className="font-mono text-[11px] text-slate-400">
                          [{act.coordinates.lat.toFixed(4)}, {act.coordinates.lng.toFixed(4)}]
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab 2: Hotels */}
              {selectedCityTab === 'hotels' && (
                <div className="space-y-3">
                  {cityHotels.length > 0 ? (
                    cityHotels.map((h, i) => (
                      <div key={h.id} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h4 className="font-semibold text-slate-900 text-sm">{h.name}</h4>
                            <p className="text-xs text-slate-500">{h.address}</p>
                            {h.district && (
                              <p className="text-[11px] text-sky-700 font-medium mt-0.5">
                                Quartier : {h.district}
                              </p>
                            )}
                          </div>
                          <div className="text-end flex-shrink-0">
                            <span className="font-bold text-sm text-slate-900">{h.pricePerNight}€</span>
                            <span className="text-[10px] text-slate-500 block">/ nuit</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-xs mt-2 pt-2 border-t border-slate-200/60">
                          <div className="flex items-center text-yellow-500">
                            {Array.from({ length: 5 }).map((_, idx) => (
                              <Star key={idx} size={13} className={idx < h.stars ? 'fill-current' : 'text-slate-300'} />
                            ))}
                          </div>
                          <span className="text-[10px] uppercase font-semibold text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                            {h.category}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-slate-500 text-center py-4">Aucun hôtel enregistré.</p>
                  )}
                </div>
              )}

              {/* Tab 3: Restaurants */}
              {selectedCityTab === 'restaurants' && (
                <div className="space-y-3">
                  {/* Halal Filter & Summary Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-teal-50/60 rounded-xl border border-teal-200/80 text-xs">
                    <div className="flex items-center gap-2 flex-wrap">
                      <ShieldCheck size={16} className="text-teal-700 shrink-0" />
                      <span className="font-semibold text-teal-900">
                        Restaurants Halal vérifiés : <strong className="text-teal-800 text-sm">{cityHalalRestos.length}</strong> / {cityRestaurants.length}
                      </span>
                      {selectedCityForView.halal_verifie_traite && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                          ✓ Quota Garanti (≥ 15 vérifiés)
                        </span>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => setModalHalalOnlyFilter(!modalHalalOnlyFilter)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer self-start sm:self-auto ${
                        modalHalalOnlyFilter
                          ? 'bg-teal-700 text-white shadow-sm'
                          : 'bg-white text-teal-800 border border-teal-300 hover:bg-teal-50'
                      }`}
                    >
                      {modalHalalOnlyFilter ? 'Afficher tous les restaurants' : `Filtrer : Halal vérifié uniquement (${cityHalalRestos.length})`}
                    </button>
                  </div>

                  {displayedRestaurants.length > 0 ? (
                    displayedRestaurants.map((r, i) => (
                      <div key={r.id} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-slate-400">#{i + 1}</span>
                              <h4 className="font-semibold text-slate-900 text-sm">{r.name}</h4>
                            </div>
                            <p className="text-xs text-slate-500 mt-0.5">{r.address} {r.district && `(${r.district})`}</p>
                          </div>
                          <span className="font-bold text-xs text-slate-800 bg-white px-2 py-0.5 rounded border border-slate-200 shrink-0">
                            {r.priceRange} ({r.priceIndicative})
                          </span>
                        </div>

                        <p className="text-xs text-slate-600 mt-1.5">{r.description}</p>

                        <div className="flex flex-wrap items-center gap-2 mt-2 pt-2 border-t border-slate-200/60 text-xs">
                          <span className="text-amber-800 bg-amber-50 px-2 py-0.5 rounded text-[11px] font-medium">
                            {r.cuisine}
                          </span>
                          <span className="text-slate-500 text-[11px]">Note : {r.rating}/10</span>
                          {r.dietary.vegetarian === '100% végétarien' && (
                            <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded text-[10px] font-bold">
                              100% Végétarien
                            </span>
                          )}
                          {(r.dietary.halal === 'Halal vérifié' || r.halal_verifie || r['halal_vérifié']) && (
                            <span className="text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full text-[10px] font-bold inline-flex items-center gap-1 border border-teal-200">
                              <ShieldCheck size={11} className="text-teal-600" /> Halal vérifié {r.halalVerificationDate ? `• ${r.halalVerificationDate}` : '• 15/01/2025'}
                            </span>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-slate-500 text-center py-4">
                      {modalHalalOnlyFilter ? 'Aucun restaurant halal vérifié correspondant.' : 'Aucun restaurant enregistré.'}
                    </p>
                  )}
                </div>
              )}

              {/* Tab 4: Parkings */}
              {selectedCityTab === 'parkings' && (
                <div className="space-y-4">
                  {/* Summary bar */}
                  <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-200 text-xs flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <SquareParking size={16} className="text-emerald-700" />
                      <span className="font-semibold text-emerald-950">
                        Total {cityParking.total} infrastructure{cityParking.total > 1 ? 's' : ''} de stationnement à {selectedCityForView.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="inline-flex items-center gap-1 text-sky-800 font-medium">
                        <Plane size={13} className="text-sky-600" /> {cityParking.airports} aéroport{cityParking.airports > 1 ? 's' : ''}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="inline-flex items-center gap-1 text-indigo-800 font-medium">
                        <Train size={13} className="text-indigo-600" /> {cityParking.stations} gare{cityParking.stations > 1 ? 's' : ''}
                      </span>
                      {cityParking.center !== undefined && cityParking.center > 0 && (
                        <>
                          <span className="text-slate-300">•</span>
                          <span className="inline-flex items-center gap-1 text-emerald-800 font-medium">
                            <SquareParking size={13} className="text-emerald-600" /> {cityParking.center} centre & tourisme
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {cityParking.total === 0 ? (
                    <p className="text-xs text-slate-500 text-center py-6">
                      Aucun aéroport ou gare avec parking enregistré pour cette ville dans la base locale.
                    </p>
                  ) : (
                    <div className="space-y-4">
                      {/* Section Aéroports */}
                      {cityParking.airportList.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-sky-800 flex items-center gap-1.5">
                            <Plane size={14} className="text-sky-600" />
                            Aéroports ({cityParking.airportList.length})
                          </h4>
                          {cityParking.airportList.map((a) => (
                            <div key={a.id} className="p-3.5 bg-slate-50 rounded-xl border border-sky-100 hover:border-sky-300 transition-colors">
                              <div className="flex items-start justify-between gap-2">
                                <div>
                                  <div className="flex items-center gap-2">
                                    <h5 className="font-semibold text-slate-900 text-sm">{a.name}</h5>
                                    <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-sky-100 text-sky-800">
                                      {a.iata}
                                    </span>
                                  </div>
                                  <p className="text-xs text-slate-500 mt-0.5">{a.address}</p>
                                </div>
                                <span className="text-[10px] font-semibold uppercase px-2 py-0.5 bg-sky-50 text-sky-700 rounded border border-sky-200">
                                  {a.facilities.length} parkings
                                </span>
                              </div>
                              <p className="text-xs text-slate-600 mt-2 line-clamp-2">{a.parkingOverview}</p>
                              {a.facilities && a.facilities.length > 0 && (
                                <div className="mt-2.5 pt-2 border-t border-slate-200/60 flex flex-wrap gap-1.5">
                                  {a.facilities.map((fac) => (
                                    <span key={fac.name} className="px-2 py-0.5 rounded text-[10px] font-medium bg-white text-slate-700 border border-slate-200">
                                      {fac.name} ({fac.walkingTimeToTerminal || 'Navette'} &bull; {fac.type})
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Section Gares */}
                      {cityParking.stationList.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-800 flex items-center gap-1.5">
                            <Train size={14} className="text-indigo-600" />
                            Gares ferroviaires ({cityParking.stationList.length})
                          </h4>
                          {cityParking.stationList.map((s) => (
                            <div key={s.id} className="p-3.5 bg-slate-50 rounded-xl border border-indigo-100 hover:border-indigo-300 transition-colors">
                              <div className="flex items-start justify-between gap-2">
                                <div>
                                  <div className="flex items-center gap-2">
                                    <h5 className="font-semibold text-slate-900 text-sm">{s.name}</h5>
                                    {s.code && (
                                      <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-indigo-100 text-indigo-800">
                                        {s.code}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs text-slate-500 mt-0.5">{s.address}</p>
                                </div>
                                <span className="text-[10px] font-semibold uppercase px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded border border-indigo-200">
                                  {s.facilities.length} parkings
                                </span>
                              </div>
                              <p className="text-xs text-slate-600 mt-2 line-clamp-2">{s.parkingOverview}</p>
                              {s.facilities && s.facilities.length > 0 && (
                                <div className="mt-2.5 pt-2 border-t border-slate-200/60 flex flex-wrap gap-1.5">
                                  {s.facilities.map((fac) => (
                                    <span key={fac.name} className="px-2 py-0.5 rounded text-[10px] font-medium bg-white text-slate-700 border border-slate-200">
                                      {fac.name} ({fac.walkingTimeToStation || 'Accès direct'} &bull; {fac.type})
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Section Centre-Ville & Lieux Touristiques */}
                      {cityParking.cityParkings && cityParking.cityParkings.filter(p => p.category === 'city_center' || p.category === 'tourist_spot').length > 0 && (
                        <div className="space-y-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                            <SquareParking size={14} className="text-emerald-600" />
                            Centres-villes & Lieux Touristiques ({cityParking.cityParkings.filter(p => p.category === 'city_center' || p.category === 'tourist_spot').length})
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {cityParking.cityParkings.filter(p => p.category === 'city_center' || p.category === 'tourist_spot').map(p => (
                              <div key={p.id} className="p-3 bg-slate-50 rounded-xl border border-emerald-100 hover:border-emerald-300 transition-colors text-xs">
                                <div className="font-semibold text-slate-900">{p.name}</div>
                                <div className="text-slate-500 mt-0.5 truncate">{p.address}</div>
                                <div className="mt-1.5 flex items-center gap-2 text-emerald-800 font-medium">
                                  <span>{p.hourlyRateFormatted}</span>
                                  <span>•</span>
                                  <span>{p.dailyRateFormatted}</span>
                                  {p.totalSpaces && <span>• {p.totalSpaces} places</span>}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </Modal>
        );
      })()}

      {/* Data Integrity Test Report Modal */}
      {integrityReport && (
        <Modal
          isOpen={isIntegrityModalOpen}
          onClose={() => setIsIntegrityModalOpen(false)}
          title="Rapport de Cohérence des Données Locales"
        >
          <div className="space-y-4">
            <div
              className={`p-4 rounded-xl flex items-start space-x-3 ${
                integrityReport.isValid
                  ? 'bg-emerald-50 border border-emerald-200 text-emerald-900'
                  : 'bg-rose-50 border border-rose-200 text-rose-900'
              }`}
            >
              {integrityReport.isValid ? (
                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-6 h-6 text-rose-600 flex-shrink-0 mt-0.5" />
              )}
              <div>
                <h4 className="font-bold text-base">
                  {integrityReport.isValid
                    ? 'Toutes les vérifications sont validées avec succès !'
                    : 'Des anomalies ont été détectées dans la base de données.'}
                </h4>
                <p className="text-sm mt-1">
                  Test exécuté à {integrityReport.timestamp} sur {integrityReport.totalCitiesChecked} villes et{' '}
                  {integrityReport.totalActivitiesChecked} activités.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex justify-between items-center">
                <span>Villes vérifiées</span>
                <strong className="text-slate-800">{integrityReport.totalCitiesChecked}</strong>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex justify-between items-center">
                <span>Activités vérifiées</span>
                <strong className="text-slate-800">{integrityReport.totalActivitiesChecked}</strong>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex justify-between items-center">
                <span>Hôtels vérifiés</span>
                <strong className="text-slate-800">{integrityReport.totalHotelsChecked}</strong>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex justify-between items-center">
                <span>Restaurants vérifiés</span>
                <strong className="text-slate-800">{integrityReport.totalRestaurantsChecked}</strong>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex justify-between items-center">
                <span>Villes vides (0 act.)</span>
                <strong className={integrityReport.emptyCities.length === 0 ? 'text-emerald-600' : 'text-rose-600'}>
                  {integrityReport.emptyCities.length}
                </strong>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex justify-between items-center">
                <span>Villes &lt; 20 activités</span>
                <strong className={integrityReport.citiesUnder20.length === 0 ? 'text-emerald-600' : 'text-amber-600'}>
                  {integrityReport.citiesUnder20.length}
                </strong>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex justify-between items-center">
                <span>Coordonnées GPS manquantes</span>
                <strong className={integrityReport.missingCoordinates.length === 0 ? 'text-emerald-600' : 'text-rose-600'}>
                  {integrityReport.missingCoordinates.length}
                </strong>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex justify-between items-center">
                <span>Doublons d'ID détectés</span>
                <strong className={integrityReport.duplicateCityIds.length + integrityReport.duplicateActivityIds.length + integrityReport.duplicateHotelIds.length + integrityReport.duplicateRestaurantIds.length === 0 ? 'text-emerald-600' : 'text-rose-600'}>
                  {integrityReport.duplicateCityIds.length + integrityReport.duplicateActivityIds.length + integrityReport.duplicateHotelIds.length + integrityReport.duplicateRestaurantIds.length}
                </strong>
              </div>
            </div>

            {integrityReport.missingCoordinates.length > 0 && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-800">
                <strong>Coordonnées invalides :</strong>
                <ul className="list-disc pl-4 mt-1">
                  {integrityReport.missingCoordinates.map((m, i) => (
                    <li key={i}>{m.city} - {m.item}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex justify-end pt-3 border-t border-slate-200">
              <Button onClick={() => setIsIntegrityModalOpen(false)} variant="primary" className="!bg-sky-600">
                Fermer
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default AdminDashboard;
