import { airportsData } from './airports';
import { trainStationsData } from './trainStations';
import { getAllParkings } from './parkingDatabase';
import type { AirportParkingInfo, TrainStationParkingInfo, ParkingLot } from './types';

export interface CityParkingMetrics {
  airports: number;
  stations: number;
  center?: number;
  total: number;
  airportList: AirportParkingInfo[];
  stationList: TrainStationParkingInfo[];
  cityParkings?: ParkingLot[];
}

export interface GlobalParkingStats {
  totalAirportParkings: number;
  totalStationParkings: number;
  totalCenterParkings: number;
  totalParkings: number;
  totalCitiesWithParkings: number;
}

// Helper to normalize strings for accent-insensitive and case-insensitive comparison
export function normalizeStr(str: string): string {
  return (str || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

/**
 * Returns all airport parking records associated with a given city name.
 * Handles exact matches, multi-city entries (e.g., "Charleroi / Bruxelles", "Deauville / Rouen"),
 * and Paris cluster airports.
 */
export function getAirportsForCity(cityName: string): AirportParkingInfo[] {
  const normCity = normalizeStr(cityName);
  if (!normCity) return [];

  return airportsData.filter(a => {
    const normA = normalizeStr(a.city);
    if (normA === normCity) return true;

    // Multi-city or slash separated (e.g. "Dole / Dijon")
    const parts = normA.split('/').map(p => p.trim());
    if (parts.includes(normCity)) return true;
    if (parts.some(p => p === normCity || p.includes(normCity) || normCity.includes(p))) return true;

    // Paris cluster special rule: Charles de Gaulle, Orly, Beauvais
    if (normCity === 'paris' && a.id.startsWith('par-')) return true;

    return false;
  });
}

/**
 * Returns all train station parking records associated with a given city name.
 * Handles exact matches, multi-city entries, and Paris train stations.
 */
export function getStationsForCity(cityName: string): TrainStationParkingInfo[] {
  const normCity = normalizeStr(cityName);
  if (!normCity) return [];

  return trainStationsData.filter(s => {
    const normS = normalizeStr(s.city);
    if (normS === normCity) return true;

    // Multi-city or slash separated
    const parts = normS.split('/').map(p => p.trim());
    if (parts.includes(normCity)) return true;
    if (parts.some(p => p === normCity || p.includes(normCity) || normCity.includes(p))) return true;

    // Paris stations (excluding Versailles which belongs to Versailles)
    if (normCity === 'paris' && s.id.startsWith('st-par-') && s.id !== 'st-par-versailles') return true;

    return false;
  });
}

/**
 * Returns the parking metrics for a city.
 * Returns airport parkings count, station parkings count, center & tourism count, and total.
 */
export function getCityParkingMetrics(cityName: string): CityParkingMetrics {
  const normCity = normalizeStr(cityName);
  const airportList = getAirportsForCity(cityName);
  const stationList = getStationsForCity(cityName);
  const allParkings = getAllParkings();

  const cityParkings = allParkings.filter(p => {
    const pCity = normalizeStr(p.city);
    return pCity === normCity || pCity.includes(normCity) || normCity.includes(pCity);
  });

  const airportParkingsCount = cityParkings.filter(p => p.category === 'airport').length;
  const stationParkingsCount = cityParkings.filter(p => p.category === 'train_station').length;
  const centerParkingsCount = cityParkings.filter(p => p.category === 'city_center' || p.category === 'tourist_spot').length;

  return {
    airports: airportParkingsCount > 0 ? airportParkingsCount : airportList.length,
    stations: stationParkingsCount > 0 ? stationParkingsCount : stationList.length,
    center: centerParkingsCount,
    total: cityParkings.length > 0 ? cityParkings.length : (airportList.length + stationList.length),
    airportList,
    stationList,
    cityParkings
  };
}

/**
 * Computes global statistics automatically from real local data:
 * - Nombre parkings total d'aéroports
 * - Nombre parkings total de gares
 * - Nombre total de parkings (incluant centres-villes et sites touristiques)
 */
export function getGlobalParkingStats(): GlobalParkingStats {
  const parkings = getAllParkings();
  let totalAirportParkings = 0;
  let totalStationParkings = 0;
  let totalCenterParkings = 0;

  const citySet = new Set<string>();
  for (const p of parkings) {
    if (p.category === 'airport') {
      totalAirportParkings++;
    } else if (p.category === 'train_station') {
      totalStationParkings++;
    } else {
      totalCenterParkings++;
    }

    if (p.city) {
      citySet.add(normalizeStr(p.city));
    }
  }

  return {
    totalAirportParkings,
    totalStationParkings,
    totalCenterParkings,
    totalParkings: parkings.length,
    totalCitiesWithParkings: citySet.size
  };
}
