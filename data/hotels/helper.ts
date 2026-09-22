import type { LocalHotel, HotelCategory } from '../../types';

export function makeHotel(
  id: string,
  name: string,
  cityId: string,
  cityName: string,
  country: string,
  address: string,
  district: string,
  lat: number,
  lng: number,
  category: HotelCategory,
  pricePerNight: number,
  currency: string = '€',
  stars: number = 3,
  description: string = '',
  amenities: string[] = ['Wi-Fi gratuit', 'Climatisation'],
  bookingUrl: string = 'https://www.booking.com',
  rating: number = 8.5,
  verificationDate: string = 'Prix indicatif — vérifié le 15/01/2025'
): LocalHotel {
  return {
    id,
    name,
    cityId,
    cityName,
    country,
    address,
    district,
    coordinates: { lat, lng },
    category,
    pricePerNight,
    currency,
    stars,
    description,
    amenities,
    bookingUrl,
    rating,
    verificationDate
  };
}
