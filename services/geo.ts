
import type { Coordinates } from '../types';

export function haversineDistance(coords1: Coordinates, coords2: Coordinates): number {
    const R = 6371; // Radius of the Earth in km
    const dLat = toRad(coords2.lat - coords1.lat);
    const dLon = toRad(coords2.lng - coords1.lng);
    const lat1 = toRad(coords1.lat);
    const lat2 = toRad(coords2.lat);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function toRad(value: number): number {
    return (value * Math.PI) / 180;
}

export function calculateTravelTime(distance: number, mode: 'walk' | 'motorized'): number {
    const walkSpeedKmh = 4.5; // Average walking speed
    const motorizedSpeedKmh = 20; // Average speed in city with traffic/stops

    let speed = mode === 'walk' ? walkSpeedKmh : motorizedSpeedKmh;
    
    // Add a base time for motorized transport to simulate waiting time
    const baseWaitTimeMinutes = mode === 'motorized' ? 10 : 0;
    
    const timeHours = distance / speed;
    return timeHours * 60 + baseWaitTimeMinutes; // Return time in minutes
}
