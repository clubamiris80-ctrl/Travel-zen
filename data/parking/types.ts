import type { Coordinates } from '../../types';

export type ParkingType = 'depose_minute' | 'courte_duree' | 'longue_duree' | 'couvert' | 'eco' | 'premium';
export type ParkingCategory = 'airport' | 'train_station' | 'city_center' | 'tourist_spot' | 'hotel' | 'all';
export type ParkingStructureType = 'souterrain' | 'couvert' | 'exterieur' | 'hotel' | 'valet' | 'prive';
export type KeysDepositType = 'keep_keys' | 'leave_keys' | 'not_applicable';

export interface ParkingSecurityInfo {
  videoSurveillance: boolean;
  guarded24_7: boolean;
  barrierAccess: boolean;
  fenced: boolean;
  details: string;
}

export interface ParkingLot {
  id: string;
  name: string;
  category: 'airport' | 'train_station' | 'city_center' | 'tourist_spot' | 'hotel';
  structureType: ParkingStructureType;
  typeLabel: string;

  // Localisation
  address: string;
  city: string;
  country: string;
  postalCode?: string;
  coordinates: Coordinates;
  distanceCenterKm?: number;
  distanceTargetKm?: number;
  targetName?: string;
  targetType?: 'airport' | 'train_station' | 'city';

  // Tarifs et formules
  hourlyRate?: number;
  hourlyRateFormatted?: string;
  dailyRate?: number;
  dailyRateFormatted?: string;
  weekendRateFormatted?: string;
  weeklyRateFormatted?: string;
  freeMinutes?: number;
  pricingOverview: string;
  packagesAvailable?: string[];

  // Horaires
  openingHours: string;
  isOpen24_7: boolean;

  // Réservation & Annulation
  bookingAvailable: boolean;
  freeCancellation: boolean;
  modificationAllowed: boolean;
  cancellationPolicy?: string;

  // Navette & Voiturier
  shuttleService: boolean;
  shuttleFrequency?: string;
  shuttleDuration?: string;
  shuttlePrice?: string;
  valetService: boolean;
  valetDetails?: string;

  // Clés
  keysDeposit: KeysDepositType;
  keysDepositLabel: string;

  // Commodités et Sécurité
  electricCharging: boolean;
  electricChargingDetails?: string;
  security: ParkingSecurityInfo;
  pmrAccessible: boolean;
  maxHeightMeters?: number;
  maxHeightFormatted: string;
  totalSpaces?: number;

  // Services supplémentaires
  extraServices: string[];

  // Source & Date de mise à jour
  sourceName: 'Officiel' | 'Municipal' | 'EFFIA' | 'Indigo' | 'Q-Park' | 'APCOA' | 'Saba' | 'Interparking' | 'Blue Valet' | 'Secure Parking' | 'Wilson Parking' | 'NCP';
  sourceUrl?: string;
  lastUpdated: string;
}

export interface ParkingFilters {
  maxDailyPrice?: number;
  maxDistanceKm?: number;
  structureTypes?: ParkingStructureType[];
  onlyCovered?: boolean;
  shuttleOnly?: boolean;
  valetOnly?: boolean;
  electricChargingOnly?: boolean;
  open24_7Only?: boolean;
  freeCancellationOnly?: boolean;
  keepKeysOnly?: boolean;
  pmrOnly?: boolean;
  source?: string;
  sortBy?: 'recommended' | 'price_asc' | 'price_desc' | 'distance_asc' | 'name_asc';
}

export interface ParkingFacility {
  name: string;
  type: ParkingType;
  typeLabel: string;
  indicativePrice: string;
  description: string;
  features: string[];
}

export interface AirportParkingInfo {
  id: string;
  name: string;
  iata: string;
  city: string;
  country: string;
  address: string;
  coordinates: Coordinates;
  website?: string;
  parkingOverview: string;
  facilities: ParkingFacility[];
}

export interface TrainStationParkingInfo {
  id: string;
  name: string;
  code?: string;
  city: string;
  country: string;
  address: string;
  coordinates: Coordinates;
  website?: string;
  parkingOverview: string;
  facilities: ParkingFacility[];
}

