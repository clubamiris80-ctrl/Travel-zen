import type { ParkingLot, ParkingFilters, ParkingCategory } from './types';
import { comprehensiveParkings } from './comprehensiveParkings';
import { supplementaryWorldParkings } from './supplementaryParkings';
import { worldMetropolisParkings } from './worldMetropolisParkings';
import { touristMetropolisParkings } from './touristMetropolisParkings';
import { getAllCitiesGeneratedParkings } from './localCitiesParkings';
import { airportsData } from './airports';
import { trainStationsData } from './trainStations';
import { haversineDistance } from '../../services/geo';

/**
 * Moteur unifié de base de données locale pour les parkings.
 * Regroupe les parkings réels détaillés, les parkings officiels d'aéroports et gares,
 * ainsi que les parkings locaux de toutes les villes.
 */

let allUnifiedParkingsCache: ParkingLot[] | null = null;

export function getAllParkings(): ParkingLot[] {
  if (allUnifiedParkingsCache) {
    return allUnifiedParkingsCache;
  }

  const list: ParkingLot[] = [
    ...comprehensiveParkings,
    ...supplementaryWorldParkings,
    ...worldMetropolisParkings,
    ...touristMetropolisParkings
  ];
  const knownKeys = new Set(list.map(p => `${p.city.toLowerCase()}-${p.category}-${p.name.toLowerCase()}`));

  // 1. Enrichir avec les installations des aéroports officiels
  for (const airport of airportsData) {
    airport.facilities.forEach((facility, idx) => {
      const isShuttle =
        facility.type === 'longue_duree' ||
        facility.features.some(f => f.toLowerCase().includes('navette')) ||
        facility.description.toLowerCase().includes('navette');
      const isCovered =
        facility.type === 'couvert' ||
        facility.typeLabel.toLowerCase().includes('couvert') ||
        facility.features.some(f => f.toLowerCase().includes('couvert'));
      const isElectric = facility.features.some(f => f.toLowerCase().includes('recharge'));
      const isValet = facility.features.some(f => f.toLowerCase().includes('voiturier'));

      let dailyRate = 22;
      const priceNumMatch = facility.indicativePrice.match(/(\d+)\s*€/);
      if (priceNumMatch) {
        dailyRate = parseInt(priceNumMatch[1], 10);
      }

      const parkId = `official-${airport.id}-${idx}`;
      const park: ParkingLot = {
        id: parkId,
        name: `${airport.name} (${airport.iata}) - ${facility.name}`,
        category: 'airport',
        structureType: isValet ? 'valet' : isCovered ? 'couvert' : 'exterieur',
        typeLabel: facility.typeLabel,
        address: airport.address,
        city: airport.city,
        country: airport.country,
        coordinates: airport.coordinates,
        distanceCenterKm: 12.0,
        distanceTargetKm: 0.1,
        targetName: airport.name,
        targetType: 'airport',
        hourlyRate: Number((dailyRate / 7).toFixed(1)),
        hourlyRateFormatted: `${(dailyRate / 7).toFixed(1).replace('.', ',')} € / h`,
        dailyRate: dailyRate,
        dailyRateFormatted: `${dailyRate} € / jour`,
        weekendRateFormatted: `${Math.round(dailyRate * 2.2)} € / week-end`,
        weeklyRateFormatted: `${Math.round(dailyRate * 4.3)} € / semaine`,
        pricingOverview: `${facility.indicativePrice}. ${facility.description}`,
        packagesAvailable: ['Tarif Résa Officiel', 'Accès Garanti', 'Annulation Gratuite'],
        openingHours: '24h/24 et 7j/7 en continu',
        isOpen24_7: true,
        bookingAvailable: true,
        freeCancellation: true,
        modificationAllowed: true,
        cancellationPolicy: 'Annulation sans frais jusqu\'à 6 heures avant l\'arrivée.',
        shuttleService: isShuttle,
        shuttleFrequency: isShuttle ? 'Toutes les 8 à 12 minutes 24h/24' : undefined,
        shuttleDuration: isShuttle ? '3 à 5 minutes' : undefined,
        shuttlePrice: isShuttle ? 'Navette gratuite comprise' : undefined,
        valetService: isValet,
        valetDetails: isValet ? 'Service voiturier officiel au terminal' : undefined,
        keysDeposit: isValet ? 'leave_keys' : 'keep_keys',
        keysDepositLabel: isValet ? 'Remise des clés au voiturier' : 'Vous gardez vos clés de voiture',
        electricCharging: isElectric,
        electricChargingDetails: isElectric ? 'Bornes de recharge rapide disponibles' : undefined,
        security: {
          videoSurveillance: true,
          guarded24_7: true,
          barrierAccess: true,
          fenced: true,
          details: 'Parking officiel sous vidéosurveillance de l\'aéroport et patrouilles régulières.'
        },
        pmrAccessible: true,
        maxHeightMeters: isCovered ? 1.9 : undefined,
        maxHeightFormatted: isCovered ? '1,90 m' : 'Sans limite (extérieur)',
        totalSpaces: 750,
        extraServices: [...facility.features, 'Accès direct terminal', 'PMR'],
        sourceName: 'Officiel',
        lastUpdated: 'Septembre 2026'
      };

      const key = `${park.city.toLowerCase()}-${park.category}-${park.name.toLowerCase()}`;
      if (!knownKeys.has(key)) {
        list.push(park);
        knownKeys.add(key);
      }
    });
  }

  // 2. Enrichir avec les installations des gares officielles
  for (const station of trainStationsData) {
    station.facilities.forEach((facility, idx) => {
      const isCovered =
        facility.type === 'couvert' ||
        facility.typeLabel.toLowerCase().includes('couvert') ||
        facility.features.some(f => f.toLowerCase().includes('couvert'));
      const isElectric = facility.features.some(f => f.toLowerCase().includes('recharge'));

      let dailyRate = 24;
      const priceNumMatch = facility.indicativePrice.match(/(\d+)\s*€/);
      if (priceNumMatch) {
        dailyRate = parseInt(priceNumMatch[1], 10);
      }

      const parkId = `station-${station.id}-${idx}`;
      const park: ParkingLot = {
        id: parkId,
        name: `${station.name} - ${facility.name}`,
        category: 'train_station',
        structureType: isCovered ? 'couvert' : 'exterieur',
        typeLabel: facility.typeLabel,
        address: station.address,
        city: station.city,
        country: station.country,
        coordinates: station.coordinates,
        distanceCenterKm: 1.0,
        distanceTargetKm: 0.1,
        targetName: station.name,
        targetType: 'train_station',
        hourlyRate: Number((dailyRate / 7.5).toFixed(1)),
        hourlyRateFormatted: `${(dailyRate / 7.5).toFixed(1).replace('.', ',')} € / h`,
        dailyRate: dailyRate,
        dailyRateFormatted: `${dailyRate} € / jour`,
        weekendRateFormatted: `${Math.round(dailyRate * 2.1)} € / week-end`,
        weeklyRateFormatted: `${Math.round(dailyRate * 4.2)} € / semaine`,
        pricingOverview: `${facility.indicativePrice}. ${facility.description}`,
        packagesAvailable: ['Tarif Gare & Connexions', 'Forfait Week-end Escapade', 'Billet Train + Parking'],
        openingHours: '24h/24 et 7j/7 en continu',
        isOpen24_7: true,
        bookingAvailable: true,
        freeCancellation: true,
        modificationAllowed: true,
        cancellationPolicy: 'Annulation sans frais jusqu\'à 2 heures avant.',
        shuttleService: false,
        valetService: false,
        keysDeposit: 'keep_keys',
        keysDepositLabel: 'Vous gardez vos clés de voiture',
        electricCharging: isElectric,
        electricChargingDetails: isElectric ? 'Bornes de recharge rapide disponibles sur site' : undefined,
        security: {
          videoSurveillance: true,
          guarded24_7: true,
          barrierAccess: true,
          fenced: true,
          details: 'Surveillance continue de la gare et caméras numériques.'
        },
        pmrAccessible: true,
        maxHeightMeters: isCovered ? 1.9 : undefined,
        maxHeightFormatted: isCovered ? '1,90 m' : 'Sans limite de gabarit',
        totalSpaces: 550,
        extraServices: [...facility.features, 'Accès direct quais', 'PMR'],
        sourceName: facility.name.toLowerCase().includes('effia')
          ? 'EFFIA'
          : facility.name.toLowerCase().includes('indigo')
          ? 'Indigo'
          : 'Officiel',
        lastUpdated: 'Septembre 2026'
      };

      const key = `${park.city.toLowerCase()}-${park.category}-${park.name.toLowerCase()}`;
      if (!knownKeys.has(key)) {
        list.push(park);
        knownKeys.add(key);
      }
    });
  }

  // 3. Ajouter les parkings locaux générés pour toutes les 247 villes
  const generatedParkings = getAllCitiesGeneratedParkings();
  for (const park of generatedParkings) {
    const key = `${park.city.toLowerCase()}-${park.category}-${park.name.toLowerCase()}`;
    if (!knownKeys.has(key)) {
      list.push(park);
      knownKeys.add(key);
    }
  }

  allUnifiedParkingsCache = list;
  return allUnifiedParkingsCache;
}

/**
 * Recherche et filtrage performant de parkings
 */
export function queryParkings(params: {
  query?: string;
  category?: ParkingCategory;
  city?: string;
  filters?: ParkingFilters;
}): ParkingLot[] {
  let results = getAllParkings();

  // 1. Filtrer par catégorie si spécifiée
  if (params.category && params.category !== 'all') {
    if (params.category === 'city_center') {
      results = results.filter(p => p.category === 'city_center' || p.category === 'tourist_spot');
    } else {
      results = results.filter(p => p.category === params.category);
    }
  }

  // 2. Recherche par ville ou mot-clé
  const queryText = (params.query || '').trim().toLowerCase();
  const searchCity = (params.city || '').trim().toLowerCase();

  if (searchCity) {
    results = results.filter(p =>
      p.city.toLowerCase().includes(searchCity) ||
      p.country.toLowerCase().includes(searchCity) ||
      p.address.toLowerCase().includes(searchCity)
    );
  } else if (queryText) {
    const terms = queryText.split(/\s+/).filter(Boolean);
    results = results.filter(p => {
      const fullText = [
        p.name,
        p.city,
        p.country,
        p.address,
        p.typeLabel,
        p.targetName || '',
        p.sourceName,
        p.extraServices.join(' ')
      ].join(' ').toLowerCase();

      return terms.every(term => fullText.includes(term));
    });
  }

  // 3. Appliquer les filtres multi-critères
  const f = params.filters || {};

  if (f.maxDailyPrice && f.maxDailyPrice > 0) {
    results = results.filter(p => (p.dailyRate || 999) <= (f.maxDailyPrice as number));
  }

  if (f.onlyCovered) {
    results = results.filter(p => p.structureType === 'souterrain' || p.structureType === 'couvert');
  }

  if (f.shuttleOnly) {
    results = results.filter(p => p.shuttleService === true);
  }

  if (f.valetOnly) {
    results = results.filter(p => p.valetService === true);
  }

  if (f.electricChargingOnly) {
    results = results.filter(p => p.electricCharging === true);
  }

  if (f.open24_7Only) {
    results = results.filter(p => p.isOpen24_7 === true);
  }

  if (f.freeCancellationOnly) {
    results = results.filter(p => p.freeCancellation === true);
  }

  if (f.keepKeysOnly) {
    results = results.filter(p => p.keysDeposit === 'keep_keys');
  }

  if (f.pmrOnly) {
    results = results.filter(p => p.pmrAccessible === true);
  }

  if (f.source && f.source !== 'all') {
    results = results.filter(p => p.sourceName.toLowerCase() === f.source?.toLowerCase());
  }

  if (f.maxDistanceKm && f.maxDistanceKm > 0) {
    results = results.filter(p => {
      const dist = p.distanceTargetKm ?? p.distanceCenterKm ?? 999;
      return dist <= (f.maxDistanceKm as number);
    });
  }

  // 4. Tri des résultats
  const sortBy = f.sortBy || 'recommended';
  results.sort((a, b) => {
    if (sortBy === 'price_asc') {
      return (a.dailyRate || 999) - (b.dailyRate || 999);
    }
    if (sortBy === 'price_desc') {
      return (b.dailyRate || 0) - (a.dailyRate || 0);
    }
    if (sortBy === 'distance_asc') {
      const distA = a.distanceTargetKm ?? a.distanceCenterKm ?? 999;
      const distB = b.distanceTargetKm ?? b.distanceCenterKm ?? 999;
      return distA - distB;
    }
    if (sortBy === 'name_asc') {
      return a.name.localeCompare(b.name);
    }
    // Par défaut 'recommended':
    // Priorité aux gestionnaires vérifiés (Officiel, Municipal, EFFIA, Indigo, Q-Park, APCOA) avec annulation gratuite et 24/7
    let scoreA = 0;
    let scoreB = 0;
    if (['Officiel', 'Municipal', 'EFFIA', 'Indigo', 'Q-Park', 'APCOA', 'Saba', 'Interparking'].includes(a.sourceName)) scoreA += 5;
    if (['Officiel', 'Municipal', 'EFFIA', 'Indigo', 'Q-Park', 'APCOA', 'Saba', 'Interparking'].includes(b.sourceName)) scoreB += 5;
    if (a.freeCancellation) scoreA += 2;
    if (b.freeCancellation) scoreB += 2;
    if (a.isOpen24_7) scoreA += 2;
    if (b.isOpen24_7) scoreB += 2;
    if (a.electricCharging) scoreA += 1;
    if (b.electricCharging) scoreB += 1;
    return scoreB - scoreA;
  });

  return results;
}
