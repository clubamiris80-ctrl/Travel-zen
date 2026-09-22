import type { ParkingLot, ParkingStructureType, KeysDepositType } from './types';
import { allLocalCities } from '../cities';

/**
 * Générateur local déterministe garantissant une couverture de parkings riches (Indigo, EFFIA, Q-Park, APCOA, Officiel, Municipal, etc.)
 * pour TOUTES les villes référencées dans l'application, 100% hors-ligne.
 */

interface CityParkingTemplate {
  nameSuffix: string;
  category: 'airport' | 'train_station' | 'city_center' | 'tourist_spot' | 'hotel';
  structureType: ParkingStructureType;
  typeLabel: string;
  sourceName: 'Officiel' | 'Municipal' | 'EFFIA' | 'Indigo' | 'Q-Park' | 'APCOA' | 'Saba' | 'Interparking' | 'Blue Valet';
  offsetKm: number;
  offsetAngleDeg: number;
  streetName: string;
  dailyRate: number;
  hourlyRate: number;
  shuttle: boolean;
  valet: boolean;
  electricCharging: boolean;
  isOpen24_7: boolean;
  freeCancellation: boolean;
  keysDeposit: KeysDepositType;
  maxHeight: number | undefined;
  totalSpaces: number;
}

const templates: CityParkingTemplate[] = [
  // 1. Parking Centre-Ville & Zone Historique (Indigo / Municipal)
  {
    nameSuffix: 'Parking Centre-Ville Historique',
    category: 'city_center',
    structureType: 'souterrain',
    typeLabel: 'Parking Souterrain Sécurisé Hyper-Centre',
    sourceName: 'Indigo',
    offsetKm: 0.35,
    offsetAngleDeg: 45,
    streetName: 'Place Centrale / Rue Principale',
    dailyRate: 18,
    hourlyRate: 2.6,
    shuttle: false,
    valet: false,
    electricCharging: true,
    isOpen24_7: true,
    freeCancellation: true,
    keysDeposit: 'keep_keys',
    maxHeight: 1.9,
    totalSpaces: 420
  },
  // 2. Parking Gare & Dépose-Minute (EFFIA)
  {
    nameSuffix: 'Parking Gare Centrale TGV & TER',
    category: 'train_station',
    structureType: 'couvert',
    typeLabel: 'Parking Couvert Direct Gare Ferroviaire',
    sourceName: 'EFFIA',
    offsetKm: 1.1,
    offsetAngleDeg: 120,
    streetName: 'Avenue de la Gare / Parvis Sud',
    dailyRate: 22,
    hourlyRate: 3.1,
    shuttle: false,
    valet: false,
    electricCharging: true,
    isOpen24_7: true,
    freeCancellation: true,
    keysDeposit: 'keep_keys',
    maxHeight: 2.0,
    totalSpaces: 530
  },
  // 3. Parking Navette Aéroport & Longue Durée (Officiel / Aérogare)
  {
    nameSuffix: 'AirPark Éco - Navette Aéroport 24/7',
    category: 'airport',
    structureType: 'exterieur',
    typeLabel: 'Parking Clôturé avec Navette Aérogare Gratuite',
    sourceName: 'Officiel',
    offsetKm: 8.5,
    offsetAngleDeg: 210,
    streetName: 'Zone Aéroportuaire / Route de l\'Aviation',
    dailyRate: 11,
    hourlyRate: 2.2,
    shuttle: true,
    valet: false,
    electricCharging: true,
    isOpen24_7: true,
    freeCancellation: true,
    keysDeposit: 'keep_keys',
    maxHeight: undefined,
    totalSpaces: 650
  },
  // 4. Service Voiturier Express Dépose-Minute (Blue Valet)
  {
    nameSuffix: 'Service Voiturier Dépose-Minute Aérogare',
    category: 'airport',
    structureType: 'valet',
    typeLabel: 'Service Voiturier Dépose-Minute Sans Navette',
    sourceName: 'Blue Valet',
    offsetKm: 9.2,
    offsetAngleDeg: 215,
    streetName: 'Dépose-Minute Hall Départs',
    dailyRate: 26,
    hourlyRate: 5.5,
    shuttle: false,
    valet: true,
    electricCharging: true,
    isOpen24_7: false,
    freeCancellation: true,
    keysDeposit: 'leave_keys',
    maxHeight: 2.1,
    totalSpaces: 350
  },
  // 5. Parking Tourisme, Musée & Shopping (Q-Park)
  {
    nameSuffix: 'Parking Tourisme & Théâtre',
    category: 'tourist_spot',
    structureType: 'souterrain',
    typeLabel: 'Parking Souterrain Quartier Commerces & Musées',
    sourceName: 'Q-Park',
    offsetKm: 0.65,
    offsetAngleDeg: 300,
    streetName: 'Boulevard des Arts & Culture',
    dailyRate: 16.5,
    hourlyRate: 2.4,
    shuttle: false,
    valet: false,
    electricCharging: true,
    isOpen24_7: true,
    freeCancellation: true,
    keysDeposit: 'keep_keys',
    maxHeight: 1.9,
    totalSpaces: 380
  }
];

function offsetCoordinates(lat: number, lng: number, distanceKm: number, angleDeg: number) {
  const earthRadius = 6371; // km
  const rad = angleDeg * (Math.PI / 180);
  const dLat = (distanceKm / earthRadius) * (180 / Math.PI) * Math.cos(rad);
  const dLng = ((distanceKm / earthRadius) * (180 / Math.PI) * Math.sin(rad)) / Math.cos(lat * (Math.PI / 180));
  return {
    lat: Number((lat + dLat).toFixed(4)),
    lng: Number((lng + dLng).toFixed(4))
  };
}

let cachedGeneratedParkings: ParkingLot[] | null = null;

export function getAllCitiesGeneratedParkings(): ParkingLot[] {
  if (cachedGeneratedParkings) {
    return cachedGeneratedParkings;
  }

  const list: ParkingLot[] = [];

  for (const city of allLocalCities) {
    const lat = city.coordinates.lat;
    const lng = city.coordinates.lng;

    templates.forEach((tpl, index) => {
      const coords = offsetCoordinates(lat, lng, tpl.offsetKm, tpl.offsetAngleDeg);
      const id = `pk-${city.id}-${index}-${tpl.category}`;

      let distanceTargetKm = tpl.offsetKm;
      let targetName = `Centre de ${city.name}`;
      let targetType: 'airport' | 'train_station' | 'city' = 'city';

      if (tpl.category === 'airport') {
        targetName = `Aéroport de ${city.name}`;
        targetType = 'airport';
        distanceTargetKm = 1.8 + index * 0.4;
      } else if (tpl.category === 'train_station') {
        targetName = `Gare Centrale de ${city.name}`;
        targetType = 'train_station';
        distanceTargetKm = 0.2;
      }

      const park: ParkingLot = {
        id,
        name: `${tpl.nameSuffix} - ${city.name}`,
        category: tpl.category,
        structureType: tpl.structureType,
        typeLabel: tpl.typeLabel,
        address: `${tpl.streetName}, ${city.name}`,
        city: city.name,
        country: city.country,
        coordinates: coords,
        distanceCenterKm: Number(tpl.offsetKm.toFixed(1)),
        distanceTargetKm: Number(distanceTargetKm.toFixed(1)),
        targetName,
        targetType,
        hourlyRate: tpl.hourlyRate,
        hourlyRateFormatted: `${tpl.hourlyRate.toFixed(2).replace('.', ',')} € / h`,
        dailyRate: tpl.dailyRate,
        dailyRateFormatted: `${tpl.dailyRate.toFixed(2).replace('.', ',')} € / jour`,
        weekendRateFormatted: `${(tpl.dailyRate * 2.3).toFixed(0)} € / week-end (3j)`,
        weeklyRateFormatted: `${(tpl.dailyRate * 4.4).toFixed(0)} € / semaine (7j)`,
        pricingOverview: tpl.shuttle
          ? `Forfait 7 jours à ${(tpl.dailyRate * 4.4).toFixed(0)}€ avec navette aller-retour gratuite incluse.`
          : tpl.valet
          ? `Prise en charge voiturier personnalisée dès ${tpl.dailyRate}€ / jour sans navette.`
          : `Tarif négocié local : 1h dès ${tpl.hourlyRate.toFixed(2)}€, journée dès ${tpl.dailyRate}€.`,
        packagesAvailable: ['Tarif Standard Garanti', 'Forfait Week-end', 'Pass 7 jours Vacances', 'Annulation Gratuite'],
        openingHours: tpl.isOpen24_7 ? '24h/24 et 7j/7 en continu' : '05h00 - 23h30 tous les jours',
        isOpen24_7: tpl.isOpen24_7,
        bookingAvailable: true,
        freeCancellation: tpl.freeCancellation,
        modificationAllowed: true,
        cancellationPolicy: 'Annulation et modification gratuites jusqu\'à 2 heures avant l\'arrivée.',
        shuttleService: tpl.shuttle,
        shuttleFrequency: tpl.shuttle ? 'Toutes les 10 à 15 minutes en continu' : undefined,
        shuttleDuration: tpl.shuttle ? '5 à 7 minutes jusqu\'aux terminaux' : undefined,
        shuttlePrice: tpl.shuttle ? 'Navette gratuite aller-retour comprise' : undefined,
        valetService: tpl.valet,
        valetDetails: tpl.valet
          ? `Un voiturier prend en charge votre véhicule directement au dépose-minute devant votre porte.`
          : undefined,
        keysDeposit: tpl.keysDeposit,
        keysDepositLabel:
          tpl.keysDeposit === 'keep_keys'
            ? 'Vous gardez vos clés de voiture'
            : 'Remise des clés au voiturier qualifié',
        electricCharging: tpl.electricCharging,
        electricChargingDetails: 'Bornes de recharge accélérée 22 kW disponibles sur place',
        security: {
          videoSurveillance: true,
          guarded24_7: true,
          barrierAccess: true,
          fenced: true,
          details: 'Enceinte sécurisée avec barrières automatiques, vidéosurveillance 24/7 et patrouilles régulières.'
        },
        pmrAccessible: true,
        maxHeightMeters: tpl.maxHeight,
        maxHeightFormatted: tpl.maxHeight ? `${tpl.maxHeight.toFixed(2).replace('.', ',')} m` : 'Sans limite (extérieur)',
        totalSpaces: tpl.totalSpaces,
        extraServices: [
          'Réservation en ligne instantanée',
          'Vidéosurveillance 24/7',
          'Accès PMR',
          tpl.shuttle ? 'Navette aéroport gratuite' : 'Accès piéton direct',
          'Assistance démarrage batterie'
        ],
        sourceName: tpl.sourceName,
        lastUpdated: 'Septembre 2026'
      };

      list.push(park);
    });
  }

  cachedGeneratedParkings = list;
  return cachedGeneratedParkings;
}
