import type { Activity, ActivityType, Coordinates } from '../../types';

export function makeAct(
  id: string,
  name: string,
  type: ActivityType,
  category: string,
  duration: number,
  description: string,
  lat: number,
  lng: number,
  location?: string,
  priority: 'Incontournable' | 'Très recommandé' | 'Recommandé' = 'Incontournable',
  openingHours?: string
): Activity {
  return {
    id,
    name,
    type,
    category,
    duration,
    description,
    coordinates: { lat, lng },
    location: location || name,
    priority,
    openingHours: openingHours || '09:00-18:00'
  };
}
