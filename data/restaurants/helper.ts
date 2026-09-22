import type { LocalRestaurant, VegetarianStatus, HalalStatus, PriceTier } from '../../types';

export function makeResto(
  id: string,
  name: string,
  cityId: string,
  cityName: string,
  country: string,
  address: string,
  district: string,
  lat: number,
  lng: number,
  cuisine: string,
  priceRange: PriceTier,
  priceIndicative: string,
  vegetarian: VegetarianStatus,
  halal: HalalStatus,
  rating: number,
  description: string,
  specialties: string[],
  verificationDate: string = 'Informations vérifiées le 15/01/2025',
  phone?: string,
  website?: string
): LocalRestaurant {
  return {
    id,
    name,
    cityId,
    cityName,
    country,
    address,
    district,
    coordinates: { lat, lng },
    cuisine,
    priceRange,
    priceIndicative,
    dietary: {
      vegetarian,
      halal
    },
    rating,
    description,
    specialties,
    verificationDate,
    phone,
    website,
    halal_verifie: halal === 'Halal vérifié',
    'halal_vérifié': halal === 'Halal vérifié',
    halalVerificationDate: halal === 'Halal vérifié' ? (verificationDate || '15/01/2025') : undefined
  };
}
