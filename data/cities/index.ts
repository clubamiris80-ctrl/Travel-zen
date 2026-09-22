import type { Activity, LocalCity } from '../../types';
import { franceCities } from './france';
import { europeWestCities } from './europe_west';
import { europeCentralNorthCities } from './europe_central_north';
import { europeSouthCities } from './europe_south';
import { northAmericaCities } from './north_america';
import { southAmericaCities } from './south_america';
import { asiaCities } from './asia';
import { middleEastCities } from './middle_east';
import { africaCities } from './africa';
import { oceaniaCities } from './oceania';
import { batch2Cities } from './batch2_cities';
import { batch3Cities } from './batch3_cities';
import { batch4Cities } from './batch4_cities';
import { batch5Cities } from './batch5_cities';
import { batch6Cities } from './batch6_cities';
import { batch7Cities } from './batch7_cities';
import { batch8Cities } from './batch8_cities';
import { batch9Cities } from './batch9_cities';
import { batch10Cities } from './batch10_cities';

export const allLocalCities: LocalCity[] = [
  ...franceCities,
  ...europeWestCities,
  ...europeCentralNorthCities,
  ...europeSouthCities,
  ...northAmericaCities,
  ...southAmericaCities,
  ...asiaCities,
  ...middleEastCities,
  ...africaCities,
  ...oceaniaCities,
  ...batch2Cities,
  ...batch3Cities,
  ...batch4Cities,
  ...batch5Cities,
  ...batch6Cities,
  ...batch7Cities,
  ...batch8Cities,
  ...batch9Cities,
  ...batch10Cities
];

// Helper to normalize strings for robust accent-insensitive matching
export const normalizeStr = (str: string): string => {
  return (str || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
};

/**
 * Searches local database for cities matching a query string.
 * Matches by name, country, region or alternative terms.
 */
export const searchLocalCities = (query: string): LocalCity[] => {
  if (!query || query.trim().length === 0) {
    return allLocalCities.slice(0, 20);
  }
  const cleanQ = normalizeStr(query);
  const tokens = cleanQ.split(/[\s,./-]+/).filter(t => t.length > 0);

  return allLocalCities.filter(c => {
    const cleanName = normalizeStr(c.name);
    const cleanCountry = normalizeStr(c.country);
    const cleanRegion = normalizeStr(c.region || '');
    const cleanContinent = normalizeStr(c.continent || '');
    const combined = `${cleanName} ${cleanCountry} ${cleanRegion} ${cleanContinent}`;

    // Direct substring in either direction
    if (
      cleanName.includes(cleanQ) ||
      cleanCountry.includes(cleanQ) ||
      cleanRegion.includes(cleanQ) ||
      cleanContinent.includes(cleanQ) ||
      cleanQ.includes(cleanName)
    ) {
      return true;
    }

    // Token match: if all search words match part of the city/country info
    if (tokens.length > 1 && tokens.every(token => combined.includes(token))) {
      return true;
    }

    return false;
  });
};

/**
 * Finds a specific local city by exact or close name match.
 */
export const findLocalCity = (nameOrQuery: string): LocalCity | undefined => {
  if (!nameOrQuery) return undefined;
  const cleanQ = normalizeStr(nameOrQuery);

  // Exact match first
  let match = allLocalCities.find(c => normalizeStr(c.name) === cleanQ);
  if (match) return match;

  // Starts with or contains
  match = allLocalCities.find(c => {
    const cleanName = normalizeStr(c.name);
    return cleanQ.startsWith(cleanName) || cleanName.startsWith(cleanQ);
  });
  if (match) return match;

  // Partial match in name
  return allLocalCities.find(c => {
    const cleanName = normalizeStr(c.name);
    return cleanName.includes(cleanQ) || cleanQ.includes(cleanName);
  });
};

/**
 * Get local activities for a city if it exists in the database.
 */
export const getLocalActivitiesForCity = (cityName: string): Activity[] | undefined => {
  const city = findLocalCity(cityName);
  if (city && city.activities && city.activities.length > 0) {
    return city.activities;
  }
  return undefined;
};

/**
 * Administrative statistics regarding the local database.
 */
export interface LocalDatabaseStats {
  totalCities: number;
  totalActivities: number;
  citiesByContinent: Record<string, number>;
  citiesWithLowActivities: { name: string; count: number }[];
}

export const getLocalDatabaseStats = (): LocalDatabaseStats => {
  const citiesByContinent: Record<string, number> = {};
  let totalActivities = 0;
  const citiesWithLowActivities: { name: string; count: number }[] = [];

  for (const city of allLocalCities) {
    const continent = city.continent || 'Autre';
    citiesByContinent[continent] = (citiesByContinent[continent] || 0) + 1;
    const actCount = city.activities?.length || 0;
    totalActivities += actCount;
    if (actCount < 20) {
      citiesWithLowActivities.push({ name: city.name, count: actCount });
    }
  }

  return {
    totalCities: allLocalCities.length,
    totalActivities,
    citiesByContinent,
    citiesWithLowActivities
  };
};
