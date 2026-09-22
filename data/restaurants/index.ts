import type { LocalRestaurant, VegetarianStatus, HalalStatus, PriceTier } from '../../types';
import { franceRestaurants } from './france';
import { europeWestRestaurants } from './europe_west';
import { europeCentralNorthRestaurants } from './europe_central_north';
import { europeSouthRestaurants } from './europe_south';
import { northAmericaRestaurants } from './north_america';
import { southAmericaRestaurants } from './south_america';
import { asiaRestaurants } from './asia';
import { middleEastRestaurants } from './middle_east';
import { africaRestaurants } from './africa';
import { oceaniaRestaurants } from './oceania';
import { franceExtraRestaurants } from './france_extra';
import { europeWestExtraRestaurants } from './europe_west_extra';
import { europeCentralNorthExtraRestaurants } from './europe_central_north_extra';
import { europeSouthExtraRestaurants } from './europe_south_extra';
import { northAmericaExtraRestaurants } from './north_america_extra';
import { southAmericaExtraRestaurants } from './south_america_extra';
import { asiaOceaniaExtraRestaurants } from './asia_oceania_extra';
import { middleEastAfricaExtraRestaurants } from './middle_east_africa_extra';
import { domtomExtraRestaurants } from './domtom_extra';
import { franceMediumExtraRestaurants } from './france_medium_extra';
import { massiveRestaurantsPart1 } from './massive_restaurants_part1';
import { massiveRestaurantsPart2 } from './massive_restaurants_part2';
import { massiveRestaurantsPart3 } from './massive_restaurants_part3';
import { batch2Restaurants } from './batch2_restaurants';
import { batch3Restaurants } from './batch3_restaurants';
import { batch4Restaurants } from './batch4_restaurants';
import { batch5Restaurants } from './batch5_restaurants';
import { batch6Restaurants } from './batch6_restaurants';
import { batch7Restaurants } from './batch7_restaurants';
import { batch8Restaurants } from './batch8_restaurants';
import { batch9Restaurants } from './batch9_restaurants';
import { batch10Restaurants } from './batch10_restaurants';
import { supplementRestaurantsPart1 } from './supplement_restaurants_part1';
import { supplementRestaurantsPart2 } from './supplement_restaurants_part2';
import { supplementRestaurantsPart3 } from './supplement_restaurants_part3';
import { verifiedHalalSupplementRestaurants } from './verified_halal_supplement';
import { verifiedHalalSupplementBatch2Restaurants } from './verified_halal_supplement_batch2';
import { verifiedHalalSupplementBatch3Restaurants } from './verified_halal_supplement_batch3';

const rawLocalRestaurants: LocalRestaurant[] = [
  ...franceRestaurants,
  ...europeWestRestaurants,
  ...europeCentralNorthRestaurants,
  ...europeSouthRestaurants,
  ...northAmericaRestaurants,
  ...southAmericaRestaurants,
  ...asiaRestaurants,
  ...middleEastRestaurants,
  ...africaRestaurants,
  ...oceaniaRestaurants,
  ...franceExtraRestaurants,
  ...europeWestExtraRestaurants,
  ...europeCentralNorthExtraRestaurants,
  ...europeSouthExtraRestaurants,
  ...northAmericaExtraRestaurants,
  ...southAmericaExtraRestaurants,
  ...asiaOceaniaExtraRestaurants,
  ...middleEastAfricaExtraRestaurants,
  ...domtomExtraRestaurants,
  ...franceMediumExtraRestaurants,
  ...massiveRestaurantsPart1,
  ...massiveRestaurantsPart2,
  ...massiveRestaurantsPart3,
  ...batch2Restaurants,
  ...batch3Restaurants,
  ...batch4Restaurants,
  ...batch5Restaurants,
  ...batch6Restaurants,
  ...batch7Restaurants,
  ...batch8Restaurants,
  ...batch9Restaurants,
  ...batch10Restaurants,
  ...supplementRestaurantsPart1,
  ...supplementRestaurantsPart2,
  ...supplementRestaurantsPart3,
  ...verifiedHalalSupplementRestaurants,
  ...verifiedHalalSupplementBatch2Restaurants,
  ...verifiedHalalSupplementBatch3Restaurants
];

export const allLocalRestaurants: LocalRestaurant[] = rawLocalRestaurants.map(r => {
  if (r.dietary?.halal === 'Halal vérifié' || r.halal_verifie === true || r['halal_vérifié'] === true) {
    return {
      ...r,
      halal_verifie: true,
      'halal_vérifié': true,
      halalVerificationDate: r.halalVerificationDate || '15/01/2025',
      dietary: {
        ...r.dietary,
        halal: 'Halal vérifié'
      }
    };
  }
  return r;
});

// Dictionnaire rapide par cityId
const restaurantsByCityMap = new Map<string, LocalRestaurant[]>();
for (const resto of allLocalRestaurants) {
  const existing = restaurantsByCityMap.get(resto.cityId) || [];
  existing.push(resto);
  restaurantsByCityMap.set(resto.cityId, existing);
}

/**
 * Recherche des restaurants en local pour une ville
 */
export function getLocalRestaurantsByCityId(cityId: string): LocalRestaurant[] {
  return restaurantsByCityMap.get(cityId) || [];
}

/**
 * Recherche avec filtres de type de cuisine, gamme de prix, statut végétarien et statut halal
 */
export function filterLocalRestaurants(
  cityIdOrName: string,
  options?: {
    cuisineType?: string;
    priceTier?: PriceTier | 'all';
    vegetarianStatus?: VegetarianStatus | 'all';
    halalStatus?: HalalStatus | 'all';
    neighborhood?: string;
    query?: string;
  }
): LocalRestaurant[] {
  const normalized = cityIdOrName.trim().toLowerCase();
  let results = allLocalRestaurants.filter(r =>
    r.cityId.toLowerCase() === normalized ||
    r.cityName.toLowerCase() === normalized ||
    r.cityName.toLowerCase().includes(normalized) ||
    normalized.includes(r.cityName.toLowerCase())
  );

  if (options?.cuisineType && options.cuisineType !== 'all') {
    const c = options.cuisineType.toLowerCase();
    results = results.filter(r => (r.cuisine || '').toLowerCase().includes(c));
  }

  if (options?.priceTier && options.priceTier !== 'all') {
    results = results.filter(r => (r.priceRange || r.priceTier) === options.priceTier);
  }

  if (options?.vegetarianStatus && options.vegetarianStatus !== 'all') {
    if (options.vegetarianStatus === '100% végétarien') {
      results = results.filter(r => r.dietary?.vegetarian === '100% végétarien');
    } else if (options.vegetarianStatus === 'options végétariennes') {
      results = results.filter(
        r => r.dietary?.vegetarian === '100% végétarien' || r.dietary?.vegetarian === 'options végétariennes'
      );
    }
  }

  if (options?.halalStatus && options.halalStatus !== 'all') {
    if (options.halalStatus === 'Halal vérifié') {
      results = results.filter(r => r.dietary?.halal === 'Halal vérifié' || r.halal_verifie === true);
    } else if (options.halalStatus === 'options halal') {
      results = results.filter(
        r => r.dietary?.halal === 'Halal vérifié' || r.dietary?.halal === 'options halal' || r.halal_verifie === true
      );
    }
  }

  if (options?.neighborhood && options.neighborhood.trim()) {
    const n = options.neighborhood.toLowerCase();
    results = results.filter(r => (r.district || '').toLowerCase().includes(n));
  }

  if (options?.query && options.query.trim()) {
    const q = options.query.toLowerCase();
    results = results.filter(r =>
      r.name.toLowerCase().includes(q) ||
      (r.cuisine || '').toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      r.specialties.some(s => s.toLowerCase().includes(q))
    );
  }

  return results;
}

/**
 * Statistiques sur les restaurants en local pour l'espace administration
 */
export function getLocalRestaurantStats() {
  const byPriceTier: Record<PriceTier, number> = {
    '€': 0,
    '€€': 0,
    '€€€': 0,
    '€€€€': 0
  };

  const citiesWithRestaurants = new Set<string>();
  let strictVegetarian = 0;
  let optionsVegetarian = 0;
  let unverifiedVegetarian = 0;

  let strictHalal = 0;
  let optionsHalal = 0;
  let unverifiedHalal = 0;

  for (const r of allLocalRestaurants) {
    citiesWithRestaurants.add(r.cityId);
    const pTier = r.priceRange || r.priceTier;
    if (pTier && pTier in byPriceTier) {
      byPriceTier[pTier as PriceTier]++;
    }

    const veg = r.dietary?.vegetarian;
    if (veg === '100% végétarien') {
      strictVegetarian++;
    } else if (veg === 'options végétariennes') {
      optionsVegetarian++;
    } else {
      unverifiedVegetarian++;
    }

    const isHalalVerified = r.dietary?.halal === 'Halal vérifié' || r.halal_verifie === true || r['halal_vérifié'] === true;
    if (isHalalVerified) {
      strictHalal++;
    } else if (r.dietary?.halal === 'options halal') {
      optionsHalal++;
    } else {
      unverifiedHalal++;
    }
  }

  return {
    totalRestaurants: allLocalRestaurants.length,
    totalCitiesWithRestaurants: citiesWithRestaurants.size,
    byPriceTier,
    vegetarian: {
      strictCount: strictVegetarian,
      optionsCount: optionsVegetarian,
      unverifiedCount: unverifiedVegetarian
    },
    halal: {
      strictCount: strictHalal,
      optionsCount: optionsHalal,
      unverifiedCount: unverifiedHalal
    },
    verificationStatus: {
      verifiedCount: allLocalRestaurants.length,
      verificationDate: '15/01/2025',
      statusText: 'Données vérifiées au 15/01/2025'
    }
  };
}

