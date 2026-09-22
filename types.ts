
// Fix: Define and export all necessary types for the application.
export type Language = 'fr' | 'en' | 'es' | 'ar' | 'zh' | 'ja' | 'ru';

export type Translations = {
  [key: string]: {
    [lang in Language]?: string;
  };
};

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface City {
  id: string;
  name: string;
  country: string;
  coordinates: Coordinates;
  continent?: string;
  region?: string;
}

export type ActivityType = 'museum' | 'restaurant' | 'monument' | 'park' | 'shopping' | 'show' | 'other';

export interface Activity {
  id: string;
  name: string;
  type: ActivityType;
  duration: number; // in minutes
  description: string;
  coordinates: Coordinates;
  openingHours?: string; // e.g., "09:00-18:00"
  category?: string; // e.g. "Monuments", "Musées", "Quartiers", "Gastronomie", "Parcs", etc.
  location?: string;
  priority?: 'Incontournable' | 'Très recommandé' | 'Recommandé' | string;
}

export interface LocalCity extends City {
  continent: string;
  region?: string;
  activities: Activity[];
  halal_verifie_traite?: boolean;
  'halal_verifie_traité'?: boolean;
  halal_traite_date?: string;
}

export interface CustomActivity extends Activity {
  address: string;
}

export type HotelCategory = 'budget' | 'midscale' | 'upscale' | 'luxury';

export interface Hotel {
  id: string;
  name: string;
  address: string;
  stars: number;
  pricePerNight: number;
  coordinates: Coordinates;
  bookingUrl: string;
  rating: number;
  category?: HotelCategory;
  district?: string;
  amenities?: string[];
  currency?: string;
  verificationDate?: string;
  cityId?: string;
  cityName?: string;
  country?: string;
  description?: string;
}

export interface LocalHotel extends Hotel {
  cityId: string;
  cityName: string;
  country: string;
  district: string;
  category: HotelCategory;
  currency: string;
  description: string;
  amenities: string[];
  verificationDate: string;
}

export type VegetarianStatus = '100% végétarien' | 'options végétariennes' | 'non vérifié' | string;
export type HalalStatus = 'Halal vérifié' | 'Halal certifié' | 'certifié' | 'vérifié' | 'options halal' | 'non vérifié' | string;
export type PriceTier = '€' | '€€' | '€€€' | '€€€€' | '$' | '$$' | '$$$' | '$$$$' | string;

export interface LocalRestaurant {
  id: string;
  name: string;
  cityId: string;
  cityName: string;
  country: string;
  address: string;
  district: string;
  coordinates: Coordinates;
  cuisine: string;
  priceRange: PriceTier;
  priceIndicative: string;
  dietary: {
    vegetarian: VegetarianStatus;
    halal: HalalStatus;
  };
  rating: number;
  description: string;
  specialties: string[];
  verificationDate: string;
  phone?: string;
  website?: string;
  halal_verifie?: boolean;
  'halal_vérifié'?: boolean;
  halalVerificationDate?: string;
}

export interface TripOptions {
  walkDistanceKm: number;
  motorizedTransport: 'public' | 'car' | 'bike';
  dietaryPreference: 'halal' | 'vegetarian' | 'any';
  startTime: number; // hour
  endTime: number; // hour
  includeLunch: boolean;
  maxActivitiesPerDay: number;
}

export interface ScheduledActivityInfo {
    date: string; // YYYY-MM-DD
    time: string; // HH:MM
}

export interface RestaurantSuggestion {
    name: string;
    address: string;
    type: string;
    coordinates: Coordinates;
    isHalal?: boolean;
    isVegetarian?: boolean;
    priceRange?: string;
    specialties?: string[];
    verificationDate?: string;
    district?: string;
}

// For the generated plan
interface ActivityPlanItem {
    type: 'activity';
    startTime: string;
    endTime: string;
    duration: number;
    details: Activity | CustomActivity;
}

interface TravelPlanItem {
    type: 'travel';
    startTime: string;
    endTime: string;
    duration: number;
    details: {
        mode: 'walk' | 'public' | 'car' | 'bike';
        distance: number;
        from: string;
        to: string;
    };
}

interface LunchPlanItem {
    type: 'lunch';
    startTime: string;
    endTime: string;
    duration: number;
    details: {
        description: string;
        restaurant?: RestaurantSuggestion;
    };
}

interface HotelPlanItem {
    type: 'hotel';
    startTime: string;
    endTime: string;
    duration: number;
    details: {
        name: string;
        action: 'departure' | 'return';
    };
}

interface BreakPlanItem {
    type: 'break';
    startTime: string;
    endTime: string;
    duration: number;
    details: {
        description: string;
    };
}

export type PlanItem = ActivityPlanItem | TravelPlanItem | LunchPlanItem | HotelPlanItem | BreakPlanItem;

export interface DayWeather {
  tempMax: number;
  tempMin: number;
  code: number;
  condition: string;
  precipitationProbability?: number;
  isSeasonalAverage?: boolean;
}

export interface DailyPlan {
  day: number;
  date: string;
  rawDate?: string; // YYYY-MM-DD
  items: PlanItem[];
  weather?: DayWeather;
}

export interface TransportationAppInfo {
    type: 'public' | 'bike';
    name: string;
    url: string;
}

export interface GeneratedPlan {
  id: string; // Unique ID for the plan
  city: City;
  dates: { start: Date; end: Date };
  hotel: Hotel | null;
  totalActivities: number;
  days: DailyPlan[];
  transportationApps?: TransportationAppInfo[];
}

// For Baggage/Travel Info
export type CompanyType = 'airline' | 'train' | 'ferry';

export interface Company {
    id: string;
    name: string;
}

export interface PaidBaggageItem {
    description: string;
    price: string;
}

export interface BaggageInfo {
    freeAllowance: string[];
    paidAllowance: PaidBaggageItem[];
    usefulInfo: string;
}

export interface Country {
    code: string;
    name: string;
}

export interface CountryTravelInfo {
    maxStay: string;
    visaInfo: string;
    documentsRequired: string[];
    usefulInfo: string;
}

export type {
  ParkingType,
  ParkingFacility,
  AirportParkingInfo,
  TrainStationParkingInfo
} from './data/parking/types';
