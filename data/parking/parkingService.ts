import { airportsData } from './airports';
import { trainStationsData } from './trainStations';
import type { AirportParkingInfo, TrainStationParkingInfo } from './types';
import type { Coordinates } from '../../types';
import { haversineDistance } from '../../services/geo';
import { allLocalCities } from '../cities/index';

export interface AirportSearchResult {
  airport: AirportParkingInfo;
  distanceKm?: number;
}

export interface TrainStationSearchResult {
  station: TrainStationParkingInfo;
  distanceKm?: number;
}

export interface CityAirportSearchResults {
  cityName: string;
  countryName: string;
  coordinates: Coordinates;
  inCity: AirportSearchResult[];
  nearby: AirportSearchResult[];
}

export interface CityStationSearchResults {
  cityName: string;
  countryName: string;
  coordinates: Coordinates;
  inCity: TrainStationSearchResult[];
  nearby: TrainStationSearchResult[];
}

// Normalize string for accent-insensitive and case-insensitive search
function normalizeStr(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

/**
 * Search airports by name, IATA code, city or country
 */
export function searchAirports(query: string): AirportSearchResult[] {
  const norm = normalizeStr(query);
  if (!norm) {
    return airportsData.map(airport => ({ airport }));
  }

  const results = airportsData.filter(airport => {
    const nameMatch = normalizeStr(airport.name).includes(norm);
    const iataMatch = normalizeStr(airport.iata).includes(norm);
    const cityMatch = normalizeStr(airport.city).includes(norm);
    const countryMatch = normalizeStr(airport.country).includes(norm);
    return nameMatch || iataMatch || cityMatch || countryMatch;
  });

  return results.map(airport => ({ airport }));
}

/**
 * Search train stations by name, code, city or country
 */
export function searchTrainStations(query: string): TrainStationSearchResult[] {
  const norm = normalizeStr(query);
  if (!norm) {
    return trainStationsData.map(station => ({ station }));
  }

  const results = trainStationsData.filter(station => {
    const nameMatch = normalizeStr(station.name).includes(norm);
    const codeMatch = station.code ? normalizeStr(station.code).includes(norm) : false;
    const cityMatch = normalizeStr(station.city).includes(norm);
    const countryMatch = normalizeStr(station.country).includes(norm);
    return nameMatch || codeMatch || cityMatch || countryMatch;
  });

  return results.map(station => ({ station }));
}

/**
 * Helper to find city coordinates and details from allLocalCities or airport/station cities
 */
function resolveCity(cityQuery: string): { name: string; country: string; coordinates: Coordinates } | null {
  const norm = normalizeStr(cityQuery);
  if (!norm) return null;

  // 1. Exact or partial match in allLocalCities
  const localCityExact = allLocalCities.find(c => normalizeStr(c.name) === norm);
  if (localCityExact) {
    return {
      name: localCityExact.name,
      country: localCityExact.country,
      coordinates: localCityExact.coordinates
    };
  }

  const localCityPartial = allLocalCities.find(c => normalizeStr(c.name).includes(norm));
  if (localCityPartial) {
    return {
      name: localCityPartial.name,
      country: localCityPartial.country,
      coordinates: localCityPartial.coordinates
    };
  }

  // 2. Match in airportsData cities
  const airportCity = airportsData.find(a => normalizeStr(a.city).includes(norm));
  if (airportCity) {
    return {
      name: airportCity.city.split('/')[0].trim(),
      country: airportCity.country,
      coordinates: airportCity.coordinates
    };
  }

  // 3. Match in trainStationsData cities
  const stationCity = trainStationsData.find(s => normalizeStr(s.city).includes(norm));
  if (stationCity) {
    return {
      name: stationCity.city.split('/')[0].trim(),
      country: stationCity.country,
      coordinates: stationCity.coordinates
    };
  }

  return null;
}

/**
 * Search airports by city:
 * Returns airports in that city, and nearby airports sorted by distance.
 */
export function searchAirportsByCity(cityQuery: string): CityAirportSearchResults | null {
  const city = resolveCity(cityQuery);
  if (!city) return null;

  const normCity = normalizeStr(city.name);

  // Compute distance from the city coordinates to all airports
  const withDistance = airportsData.map(airport => {
    const dist = Math.round(haversineDistance(city.coordinates, airport.coordinates) * 10) / 10;
    return {
      airport,
      distanceKm: dist
    };
  });

  // An airport is "inCity" if distance <= 35 km OR if airport city matches searched city
  const inCity: AirportSearchResult[] = [];
  const nearby: AirportSearchResult[] = [];

  withDistance.forEach(item => {
    const normAirportCity = normalizeStr(item.airport.city);
    const isDirectMatch = normAirportCity.includes(normCity) || normCity.includes(normAirportCity);

    if (isDirectMatch || (item.distanceKm !== undefined && item.distanceKm <= 35)) {
      inCity.push(item);
    } else if (item.distanceKm !== undefined && item.distanceKm <= 200) {
      nearby.push(item);
    }
  });

  // Sort by distance
  inCity.sort((a, b) => (a.distanceKm ?? 0) - (b.distanceKm ?? 0));
  nearby.sort((a, b) => (a.distanceKm ?? 0) - (b.distanceKm ?? 0));

  // If nearby is empty because all airports are further away, pick the closest 3
  if (inCity.length === 0 && nearby.length === 0) {
    withDistance.sort((a, b) => (a.distanceKm ?? 0) - (b.distanceKm ?? 0));
    nearby.push(...withDistance.slice(0, 3));
  }

  return {
    cityName: city.name,
    countryName: city.country,
    coordinates: city.coordinates,
    inCity,
    nearby
  };
}

/**
 * Search train stations by city:
 * Returns stations in that city, and nearby stations sorted by distance.
 */
export function searchTrainStationsByCity(cityQuery: string): CityStationSearchResults | null {
  const city = resolveCity(cityQuery);
  if (!city) return null;

  const normCity = normalizeStr(city.name);

  // Compute distance from the city coordinates to all stations
  const withDistance = trainStationsData.map(station => {
    const dist = Math.round(haversineDistance(city.coordinates, station.coordinates) * 10) / 10;
    return {
      station,
      distanceKm: dist
    };
  });

  const inCity: TrainStationSearchResult[] = [];
  const nearby: TrainStationSearchResult[] = [];

  withDistance.forEach(item => {
    const normStationCity = normalizeStr(item.station.city);
    const isDirectMatch = normStationCity.includes(normCity) || normCity.includes(normStationCity);

    if (isDirectMatch || (item.distanceKm !== undefined && item.distanceKm <= 12)) {
      inCity.push(item);
    } else if (item.distanceKm !== undefined && item.distanceKm <= 95) {
      nearby.push(item);
    }
  });

  // If inCity is empty, but we have a known city in allLocalCities, create a clean station for this city
  if (inCity.length === 0) {
    const matchingLocal = allLocalCities.find(c => normalizeStr(c.name) === normCity);
    if (matchingLocal) {
      const fallbackStation: TrainStationParkingInfo = {
        id: `st-gen-${matchingLocal.id}`,
        name: `Gare de ${matchingLocal.name}`,
        city: matchingLocal.name,
        country: matchingLocal.country,
        address: `Place de la Gare, ${matchingLocal.name}`,
        coordinates: matchingLocal.coordinates,
        parkingOverview: `Gare desservant l'agglomération de ${matchingLocal.name}. Stationnement à proximité immédiate avec dépose-minute, parkings courte et longue durée.`,
        facilities: [
          {
            name: `Dépose-minute Gare de ${matchingLocal.name}`,
            type: 'depose_minute',
            typeLabel: 'Dépose-minute',
            indicativePrice: '15 min gratuites',
            description: 'Parvis de la gare.',
            features: ['15 min offertes', 'Accès direct']
          },
          {
            name: `Parking Gare de ${matchingLocal.name}`,
            type: 'courte_duree',
            typeLabel: 'Parking gare sécurisé',
            indicativePrice: 'Dès 18€ / jour',
            description: 'Accès direct aux quais.',
            features: ['Surveillance 24/7', 'Places réservées PMR']
          }
        ]
      };
      inCity.push({
        station: fallbackStation,
        distanceKm: 0.5
      });
    }
  }

  // Sort by distance
  inCity.sort((a, b) => (a.distanceKm ?? 0) - (b.distanceKm ?? 0));
  nearby.sort((a, b) => (a.distanceKm ?? 0) - (b.distanceKm ?? 0));

  // If nearby is still empty, pick the 3 closest stations
  if (nearby.length === 0 && inCity.length === 0) {
    withDistance.sort((a, b) => (a.distanceKm ?? 0) - (b.distanceKm ?? 0));
    nearby.push(...withDistance.slice(0, 3));
  }

  return {
    cityName: city.name,
    countryName: city.country,
    coordinates: city.coordinates,
    inCity,
    nearby
  };
}
