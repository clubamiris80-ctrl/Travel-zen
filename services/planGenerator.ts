import type {
  City,
  Activity,
  Hotel,
  TripOptions,
  GeneratedPlan,
  DailyPlan,
  PlanItem,
  Coordinates,
  CustomActivity,
  ScheduledActivityInfo,
  RestaurantSuggestion,
  LocalRestaurant,
  TransportationAppInfo
} from '../types';
import { haversineDistance } from './geo';
import { allLocalRestaurants } from '../data/restaurants';

type ActivityWithSchedule = (Activity | CustomActivity) & { scheduledTime?: Date };

type EnrichedDates = {
  start: Date;
  end: Date;
  arrivalTime: string;
  departureTime: string;
};

const toLocalDateKey = (date: Date): string => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

function formatTime(date: Date): string {
  const h = date.getHours().toString().padStart(2, '0');
  const m = date.getMinutes().toString().padStart(2, '0');
  return `${h}:${m}`;
}

function addMinutes(date: Date, minutes: number): Date {
  return new Date(date.getTime() + minutes * 60000);
}

/**
 * Calcul déterministe du temps de trajet en minutes selon le mode
 */
function getTravelTime(distanceKm: number, mode: 'walk' | 'public' | 'car' | 'bike'): number {
  if (distanceKm <= 0.05) return 2;
  const speedKmh = mode === 'walk' ? 4.5 : mode === 'bike' ? 15 : mode === 'car' ? 25 : 20;
  const waitTime = mode === 'walk' ? 0 : mode === 'car' ? 4 : 8;
  const transitMinutes = Math.round((distanceKm / speedKmh) * 60);
  return Math.max(2, transitMinutes + waitTime);
}

/**
 * Détermination du mode de déplacement (marche si inférieur au seuil, sinon motorisé choisi)
 */
function selectTravelMode(
  distanceKm: number,
  options: TripOptions
): 'walk' | 'public' | 'car' | 'bike' {
  if (distanceKm <= options.walkDistanceKm) {
    return 'walk';
  }
  return options.motorizedTransport;
}

/**
 * Parsing des horaires d'ouverture (ex: "09:00-18:00")
 */
const parseOpeningHours = (
  hours: string | undefined,
  onDate: Date
): { open: Date; close: Date } | null => {
  if (!hours || !/^\d{2}:\d{2}-\d{2}:\d{2}$/.test(hours)) return null;
  const [startStr, endStr] = hours.split('-');
  const [startH, startM] = startStr.split(':').map(Number);
  const [endH, endM] = endStr.split(':').map(Number);

  const open = new Date(onDate);
  open.setHours(startH, startM, 0, 0);

  const close = new Date(onDate);
  close.setHours(endH, endM, 0, 0);

  if (close < open) {
    close.setDate(close.getDate() + 1);
  }

  return { open, close };
};

/**
 * Vérification stricte des critères diététiques d'un restaurant local
 */
function isHalalRestaurant(r: LocalRestaurant): boolean {
  if (r.dietary?.halal === 'Halal vérifié' || r.dietary?.halal === 'options halal') return true;
  if (r.halal_verifie === true || r['halal_vérifié'] === true) return true;
  if (typeof r.cuisine === 'string' && /halal/i.test(r.cuisine)) return true;
  if (typeof r.description === 'string' && /halal/i.test(r.description)) return true;
  return false;
}

function isVegetarianRestaurant(r: LocalRestaurant): boolean {
  if (r.dietary?.vegetarian === '100% végétarien' || r.dietary?.vegetarian === 'options végétariennes') return true;
  if (typeof r.cuisine === 'string' && /v[eé]g[eé]|vegan/i.test(r.cuisine)) return true;
  if (typeof r.description === 'string' && /v[eé]g[eé]|vegan/i.test(r.description)) return true;
  return false;
}

function matchesDietary(r: LocalRestaurant, dietaryPreference: TripOptions['dietaryPreference']): boolean {
  if (dietaryPreference === 'halal') {
    return isHalalRestaurant(r);
  }
  if (dietaryPreference === 'vegetarian') {
    return isVegetarianRestaurant(r);
  }
  return true;
}

/**
 * Sélection locale d'un restaurant proche des activités prévues ce jour-là
 * Respecte strictement la préférence diététique (ex: Halal certifié / vérifié)
 * et alterne les adresses pour chaque jour.
 */
function findLocalRestaurantForLunch(
  referenceCoords: Coordinates,
  city: City,
  dietaryPreference: TripOptions['dietaryPreference'],
  usedRestaurantNames: Set<string>
): RestaurantSuggestion | null {
  // Filtrage strict selon la préférence diététique
  const filteredCandidates = allLocalRestaurants.filter(r => matchesDietary(r, dietaryPreference));

  if (filteredCandidates.length === 0) {
    return null;
  }

  const cityIdLower = (city.id || '').toLowerCase();
  const cityNameLower = city.name.toLowerCase();

  // Recherche des restaurants dans la ville sélectionnée
  const cityMatches = filteredCandidates.filter(r => {
    const rCityId = (r.cityId || '').toLowerCase();
    const rCityName = (r.cityName || '').toLowerCase();
    const isCityTextMatch =
      rCityId === cityIdLower ||
      rCityName === cityNameLower ||
      rCityName.includes(cityNameLower) ||
      cityNameLower.includes(rCityName);
    const distToCityCenter = haversineDistance(city.coordinates, r.coordinates);
    return isCityTextMatch || distToCityCenter <= 50;
  });

  const searchPool = cityMatches.length > 0 ? cityMatches : filteredCandidates;

  let poolToUse = searchPool.filter(r => !usedRestaurantNames.has(r.name));
  if (poolToUse.length === 0) {
    poolToUse = searchPool;
  }

  let bestCandidate: LocalRestaurant | null = null;
  let minScore = Infinity;

  for (const cand of poolToUse) {
    if (dietaryPreference === 'halal' && !isHalalRestaurant(cand)) {
      continue;
    }

    const dist = haversineDistance(referenceCoords, cand.coordinates);
    const isHalalVerified =
      cand.dietary?.halal === 'Halal vérifié' ||
      cand.halal_verifie === true ||
      cand['halal_vérifié'] === true;
    const bonus = dietaryPreference === 'halal' && !isHalalVerified ? 4 : 0;
    const score = dist + bonus;

    if (score < minScore) {
      minScore = score;
      bestCandidate = cand;
    }
  }

  if (!bestCandidate) {
    bestCandidate = poolToUse[0] || null;
  }

  if (!bestCandidate) return null;

  if (dietaryPreference === 'halal' && !isHalalRestaurant(bestCandidate)) {
    return null;
  }

  usedRestaurantNames.add(bestCandidate.name);

  return {
    name: bestCandidate.name,
    address: bestCandidate.address,
    type: bestCandidate.cuisine,
    coordinates: bestCandidate.coordinates,
    isHalal: isHalalRestaurant(bestCandidate),
    isVegetarian: isVegetarianRestaurant(bestCandidate),
    priceRange: bestCandidate.priceRange || (bestCandidate as any).priceTier,
    specialties: bestCandidate.specialties,
    verificationDate: bestCandidate.halalVerificationDate || bestCandidate.verificationDate || '15/01/2025',
    district: bestCandidate.district
  };
}

/**
 * Recommandations d'applications locales de mobilité (100% local, sans IA)
 */
function getLocalTransportationApps(
  city: City,
  usedModes: ('public' | 'bike')[]
): TransportationAppInfo[] {
  if (usedModes.length === 0) return [];
  const cityName = city.name.toLowerCase();
  const apps: TransportationAppInfo[] = [];

  const publicTransitMap: Record<string, { name: string; url: string }> = {
    paris: { name: 'Île-de-France Mobilités (RATP)', url: 'https://www.iledefrance-mobilites.fr/' },
    lyon: { name: 'TCL Lyon', url: 'https://www.tcl.fr/' },
    marseille: { name: 'RTM Marseille', url: 'https://www.rtm.fr/' },
    lille: { name: 'Ilévia Lille', url: 'https://www.ilevia.fr/' },
    toulouse: { name: 'Tisséo Toulouse', url: 'https://www.tisseo.fr/' },
    bordeaux: { name: 'TBM Bordeaux', url: 'https://www.infotbm.com/' },
    nice: { name: "Lignes d'Azur", url: 'https://www.lignesdazur.com/' },
    strasbourg: { name: 'CTS Strasbourg', url: 'https://www.cts-strasbourg.eu/' },
    nantes: { name: 'Naolib (TAN)', url: 'https://naolib.fr/' },
    montpellier: { name: 'TaM Montpellier', url: 'https://www.tam-voyages.com/' },
    london: { name: 'TfL Go (Transport for London)', url: 'https://tfl.gov.uk/maps/tfl-go' },
    madrid: { name: 'Metro de Madrid', url: 'https://www.metromadrid.es/' },
    barcelona: { name: 'TMB App', url: 'https://www.tmb.cat/' },
    rome: { name: 'Moovit Roma', url: 'https://moovitapp.com/' },
    berlin: { name: 'BVG Fahrinfo', url: 'https://www.bvg.de/' },
    amsterdam: { name: 'GVB Amsterdam', url: 'https://gvb.nl/' },
    brussels: { name: 'STIB-MIVB Brussels', url: 'https://www.stib-mivb.be/' },
    tokyo: { name: 'Tokyo Subway Navigation', url: 'https://www.tokyometro.jp/' },
    'new york': { name: 'MTA TrainTime & Subway', url: 'https://new.mta.info/' }
  };

  const bikeMap: Record<string, { name: string; url: string }> = {
    paris: { name: "Vélib' Métropole", url: 'https://www.velib-metropole.fr/' },
    lyon: { name: "Vélo'v Lyon", url: 'https://velov.grandlyon.com/' },
    marseille: { name: 'LeVélo Marseille', url: 'https://levelo.ampmetropole.fr/' },
    toulouse: { name: 'VélôToulouse', url: 'https://velo.toulouse.fr/' },
    bordeaux: { name: 'Le Vélo par TBM', url: 'https://www.infotbm.com/fr/le-velo' },
    nice: { name: 'Vélobleu', url: 'https://www.velobleu.org/' },
    strasbourg: { name: 'Vélhop Strasbourg', url: 'https://velhop.strasbourg.eu/' },
    nantes: { name: 'Naolib Vélo', url: 'https://naolib.fr/' },
    london: { name: 'Santander Cycles', url: 'https://tfl.gov.uk/modes/cycling/santander-cycles' },
    madrid: { name: 'BiciMAD', url: 'https://www.bicimad.com/' },
    barcelona: { name: 'Bicing Barcelona', url: 'https://www.bicing.barcelona/' },
    'new york': { name: 'Citi Bike NYC', url: 'https://citibikenyc.com/' }
  };

  if (usedModes.includes('public')) {
    let matched = false;
    for (const [key, info] of Object.entries(publicTransitMap)) {
      if (cityName.includes(key)) {
        apps.push({ type: 'public', name: info.name, url: info.url });
        matched = true;
        break;
      }
    }
    if (!matched) {
      apps.push({ type: 'public', name: `Citymapper (${city.name})`, url: 'https://citymapper.com/' });
    }
  }

  if (usedModes.includes('bike')) {
    let matched = false;
    for (const [key, info] of Object.entries(bikeMap)) {
      if (cityName.includes(key)) {
        apps.push({ type: 'bike', name: info.name, url: info.url });
        matched = true;
        break;
      }
    }
    if (!matched) {
      apps.push({ type: 'bike', name: `Lime / Dott Bikes (${city.name})`, url: 'https://www.li.me/' });
    }
  }

  return apps;
}

/**
 * Ordonnancement optimal des activités pour réduire les distances de trajet (TSP Greedy)
 */
function orderActivitiesByProximity(
  activities: ActivityWithSchedule[],
  startCoords: Coordinates
): ActivityWithSchedule[] {
  if (activities.length <= 1) return activities;

  const fixed = activities.filter(a => !!a.scheduledTime);
  const flexible = activities.filter(a => !a.scheduledTime);

  if (fixed.length > 0) {
    fixed.sort((a, b) => a.scheduledTime!.getTime() - b.scheduledTime!.getTime());

    const result: ActivityWithSchedule[] = [];
    let currentPos = startCoords;
    const remainingFlex = [...flexible];

    for (const fixedAct of fixed) {
      while (remainingFlex.length > 0) {
        remainingFlex.sort(
          (a, b) =>
            haversineDistance(currentPos, a.coordinates) -
            haversineDistance(currentPos, b.coordinates)
        );
        const candidate = remainingFlex[0];
        const distToCandidate = haversineDistance(currentPos, candidate.coordinates);
        const distToFixed = haversineDistance(currentPos, fixedAct.coordinates);
        if (distToCandidate < distToFixed) {
          result.push(remainingFlex.shift()!);
          currentPos = candidate.coordinates;
        } else {
          break;
        }
      }
      result.push(fixedAct);
      currentPos = fixedAct.coordinates;
    }

    while (remainingFlex.length > 0) {
      remainingFlex.sort(
        (a, b) =>
          haversineDistance(currentPos, a.coordinates) -
          haversineDistance(currentPos, b.coordinates)
      );
      const next = remainingFlex.shift()!;
      result.push(next);
      currentPos = next.coordinates;
    }

    return result;
  }

  const remaining = [...activities];
  const ordered: ActivityWithSchedule[] = [];
  let currentLoc = startCoords;

  while (remaining.length > 0) {
    remaining.sort(
      (a, b) =>
        haversineDistance(currentLoc, a.coordinates) -
        haversineDistance(currentLoc, b.coordinates)
    );
    const closest = remaining.shift()!;
    ordered.push(closest);
    currentLoc = closest.coordinates;
  }

  return ordered;
}

/**
 * Construction d'un planning quotidien respectant toutes les contraintes.
 * Si canHaveLunchToday est actif, la pause déjeuner est obligatoirement planifiée
 * chaque jour, même s'il y a peu ou aucune activité ce jour-là.
 */
function tryBuildDailySchedule(
  currentDate: Date,
  dayStartTime: Date,
  dayEndTime: Date,
  activities: ActivityWithSchedule[],
  hotel: Hotel | null,
  city: City,
  options: TripOptions,
  canHaveLunchToday: boolean,
  usedRestaurantNames: Set<string>,
  t: (key: string) => string
): { items: PlanItem[]; motorizedUsed: Set<'public' | 'bike'> } | null {
  const planItems: PlanItem[] = [];
  const motorizedUsed = new Set<'public' | 'bike'>();

  const baseCoords = hotel?.coordinates || city.coordinates;
  const baseName = hotel?.name || t('home');

  // CAS 1 : Aucune activité prévue ce jour-là
  if (activities.length === 0) {
    if (!canHaveLunchToday) {
      const durationMin = Math.max(0, Math.round((dayEndTime.getTime() - dayStartTime.getTime()) / 60000));
      return {
        items: [
          {
            type: 'break',
            startTime: formatTime(dayStartTime),
            endTime: formatTime(dayEndTime),
            duration: durationMin,
            details: { description: t('free_time_buffer') }
          }
        ],
        motorizedUsed
      };
    }

    // Avec pause déjeuner obligatoire sans activité :
    // Sélection d'un restaurant proche de l'hôtel ou du centre-ville
    const resto = findLocalRestaurantForLunch(
      baseCoords,
      city,
      options.dietaryPreference,
      usedRestaurantNames
    );
    const restoCoords = resto?.coordinates || baseCoords;
    const restoName = resto?.name || t('lunch_break');

    const rawDist = haversineDistance(baseCoords, restoCoords);
    const dist = Math.max(0.1, Math.round(rawDist * 10) / 10);
    const travelMode = selectTravelMode(dist, options);
    if (travelMode === 'public' || travelMode === 'bike') {
      motorizedUsed.add(travelMode);
    }
    const travelDur = getTravelTime(dist, travelMode);

    // Heure cohérente pour le déjeuner : départ vers 11h45-12h00 pour manger à 12h00
    const lunchStart = new Date(currentDate);
    lunchStart.setHours(12, 0, 0, 0);
    const lunchEnd = addMinutes(lunchStart, 60);

    const departureForLunch = new Date(lunchStart.getTime() - travelDur * 60000);

    // Temps libre le matin si le départ déjeuner est après le début de journée
    if (departureForLunch > dayStartTime) {
      const morningBufferMin = Math.round((departureForLunch.getTime() - dayStartTime.getTime()) / 60000);
      if (morningBufferMin >= 10) {
        planItems.push({
          type: 'break',
          startTime: formatTime(dayStartTime),
          endTime: formatTime(departureForLunch),
          duration: morningBufferMin,
          details: { description: t('free_time_buffer') }
        });
      }
    }

    if (hotel) {
      planItems.push({
        type: 'hotel',
        startTime: formatTime(departureForLunch),
        endTime: formatTime(departureForLunch),
        duration: 0,
        details: { name: hotel.name, action: 'departure' }
      });
    }

    planItems.push({
      type: 'travel',
      startTime: formatTime(departureForLunch),
      endTime: formatTime(lunchStart),
      duration: travelDur,
      details: {
        mode: travelMode,
        distance: dist,
        from: baseName,
        to: restoName
      }
    });

    planItems.push({
      type: 'lunch',
      startTime: formatTime(lunchStart),
      endTime: formatTime(lunchEnd),
      duration: 60,
      details: {
        description: t('lunch_break'),
        restaurant: resto || undefined
      }
    });

    const returnArrival = addMinutes(lunchEnd, travelDur);
    planItems.push({
      type: 'travel',
      startTime: formatTime(lunchEnd),
      endTime: formatTime(returnArrival),
      duration: travelDur,
      details: {
        mode: travelMode,
        distance: dist,
        from: restoName,
        to: baseName
      }
    });

    if (hotel) {
      planItems.push({
        type: 'hotel',
        startTime: formatTime(returnArrival),
        endTime: formatTime(returnArrival),
        duration: 0,
        details: { name: hotel.name, action: 'return' }
      });
    }

    if (dayEndTime > returnArrival) {
      const afternoonBufferMin = Math.round((dayEndTime.getTime() - returnArrival.getTime()) / 60000);
      if (afternoonBufferMin >= 10) {
        planItems.push({
          type: 'break',
          startTime: formatTime(returnArrival),
          endTime: formatTime(dayEndTime),
          duration: afternoonBufferMin,
          details: { description: t('free_time_buffer') }
        });
      }
    }

    return { items: planItems, motorizedUsed };
  }

  // CAS 2 : Des activités sont prévues
  const orderedActivities = orderActivitiesByProximity(activities, baseCoords);

  // Si pas de pause déjeuner demandée : planification séquentielle continue
  if (!canHaveLunchToday) {
    let currentTime = new Date(dayStartTime);
    let currentLocation = baseCoords;
    let currentLocationName = baseName;

    if (hotel) {
      planItems.push({
        type: 'hotel',
        startTime: formatTime(currentTime),
        endTime: formatTime(currentTime),
        duration: 0,
        details: { name: hotel.name, action: 'departure' }
      });
    }

    for (const act of orderedActivities) {
      const rawDist = haversineDistance(currentLocation, act.coordinates);
      const dist = Math.max(0.1, Math.round(rawDist * 10) / 10);
      const travelMode = selectTravelMode(dist, options);
      if (travelMode === 'public' || travelMode === 'bike') {
        motorizedUsed.add(travelMode);
      }
      const travelDuration = getTravelTime(dist, travelMode);
      const arrivalTime = addMinutes(currentTime, travelDuration);

      let actStartTime = arrivalTime;
      if (act.scheduledTime && act.scheduledTime > actStartTime) {
        actStartTime = act.scheduledTime;
      }
      const hours = parseOpeningHours(act.openingHours, currentDate);
      if (hours && hours.open > actStartTime) {
        actStartTime = hours.open;
      }

      if (act.scheduledTime && arrivalTime > act.scheduledTime) {
        return null;
      }

      planItems.push({
        type: 'travel',
        startTime: formatTime(currentTime),
        endTime: formatTime(arrivalTime),
        duration: travelDuration,
        details: {
          mode: travelMode,
          distance: dist,
          from: currentLocationName,
          to: act.name
        }
      });

      if (actStartTime > arrivalTime) {
        const waitMin = Math.round((actStartTime.getTime() - arrivalTime.getTime()) / 60000);
        if (waitMin >= 10) {
          planItems.push({
            type: 'break',
            startTime: formatTime(arrivalTime),
            endTime: formatTime(actStartTime),
            duration: waitMin,
            details: { description: t('free_time_buffer') }
          });
        }
      }

      const actEndTime = addMinutes(actStartTime, act.duration);
      if (hours && actEndTime > hours.close) {
        return null;
      }

      planItems.push({
        type: 'activity',
        startTime: formatTime(actStartTime),
        endTime: formatTime(actEndTime),
        duration: act.duration,
        details: act
      });

      currentTime = actEndTime;
      currentLocation = act.coordinates;
      currentLocationName = act.name;
    }

    if (hotel) {
      const rawDistReturn = haversineDistance(currentLocation, hotel.coordinates);
      const distReturn = Math.max(0.1, Math.round(rawDistReturn * 10) / 10);
      const travelModeReturn = selectTravelMode(distReturn, options);
      if (travelModeReturn === 'public' || travelModeReturn === 'bike') {
        motorizedUsed.add(travelModeReturn);
      }
      const travelDurationReturn = getTravelTime(distReturn, travelModeReturn);
      const arrivalAtHotel = addMinutes(currentTime, travelDurationReturn);

      planItems.push({
        type: 'travel',
        startTime: formatTime(currentTime),
        endTime: formatTime(arrivalAtHotel),
        duration: travelDurationReturn,
        details: {
          mode: travelModeReturn,
          distance: distReturn,
          from: currentLocationName,
          to: hotel.name
        }
      });

      planItems.push({
        type: 'hotel',
        startTime: formatTime(arrivalAtHotel),
        endTime: formatTime(arrivalAtHotel),
        duration: 0,
        details: { name: hotel.name, action: 'return' }
      });
    }

    return { items: planItems, motorizedUsed };
  }

  // CAS 3 : Pause déjeuner obligatoire avec activités
  // Évaluation de tous les points de césure possibles (split) pour placer le déjeuner au moment optimal
  interface SplitEvaluation {
    split: number;
    score: number;
    lunchRestaurant: RestaurantSuggestion | null;
    lunchStart: Date;
    lunchEnd: Date;
    hasHardConflict: boolean;
  }

  const evaluations: SplitEvaluation[] = [];

  for (let split = 0; split <= orderedActivities.length; split++) {
    // Détermination des coordonnées de référence pour le restaurant
    let refCoords: Coordinates;
    if (split > 0 && split < orderedActivities.length) {
      // Entre la dernière activité du matin et la première de l'après-midi
      const morningEndCoords = orderedActivities[split - 1].coordinates;
      const afternoonStartCoords = orderedActivities[split].coordinates;
      refCoords = {
        lat: (morningEndCoords.lat + afternoonStartCoords.lat) / 2,
        lng: (morningEndCoords.lng + afternoonStartCoords.lng) / 2
      };
    } else if (split > 0) {
      // Toutes les activités le matin : proche de la dernière activité
      refCoords = orderedActivities[split - 1].coordinates;
    } else {
      // Toutes les activités l'après-midi : proche de la première activité
      refCoords = orderedActivities[0].coordinates;
    }

    const candidateResto = findLocalRestaurantForLunch(
      refCoords,
      city,
      options.dietaryPreference,
      new Set(usedRestaurantNames)
    );
    const restoCoords = candidateResto?.coordinates || refCoords;

    // Simulation matin
    let simTime = new Date(dayStartTime);
    let simLoc = baseCoords;
    let hasHardConflict = false;
    let scheduledPenalty = 0;
    let totalDistKm = 0;

    for (let j = 0; j < split; j++) {
      const act = orderedActivities[j];
      const dist = haversineDistance(simLoc, act.coordinates);
      totalDistKm += dist;
      const mode = selectTravelMode(dist, options);
      const dur = getTravelTime(dist, mode);
      const arrival = addMinutes(simTime, dur);

      let start = arrival;
      if (act.scheduledTime && act.scheduledTime > start) {
        start = act.scheduledTime;
      }
      const hours = parseOpeningHours(act.openingHours, currentDate);
      if (hours && hours.open > start) {
        start = hours.open;
      }

      if (act.scheduledTime && arrival > act.scheduledTime) {
        hasHardConflict = true;
        scheduledPenalty += 10000;
      }
      const end = addMinutes(start, act.duration);
      if (hours && end > hours.close) {
        hasHardConflict = true;
        scheduledPenalty += 10000;
      }

      simTime = end;
      simLoc = act.coordinates;
    }

    // Trajet vers le restaurant
    const distToResto = haversineDistance(simLoc, restoCoords);
    totalDistKm += distToResto;
    const modeResto = selectTravelMode(distToResto, options);
    const durResto = getTravelTime(distToResto, modeResto);
    const arrivalAtResto = addMinutes(simTime, durResto);

    // Détermination de l'heure du déjeuner (autour de 12h-13h)
    const arrivalMinutes = arrivalAtResto.getHours() * 60 + arrivalAtResto.getMinutes();
    let lunchStart: Date;
    if (arrivalMinutes < 12 * 60) {
      lunchStart = new Date(currentDate);
      lunchStart.setHours(12, 0, 0, 0);
    } else {
      lunchStart = arrivalAtResto;
    }
    const lunchEnd = addMinutes(lunchStart, 60);

    // Simulation après-midi
    simTime = lunchEnd;
    simLoc = restoCoords;

    for (let j = split; j < orderedActivities.length; j++) {
      const act = orderedActivities[j];
      const dist = haversineDistance(simLoc, act.coordinates);
      totalDistKm += dist;
      const mode = selectTravelMode(dist, options);
      const dur = getTravelTime(dist, mode);
      const arrival = addMinutes(simTime, dur);

      let start = arrival;
      if (act.scheduledTime && act.scheduledTime > start) {
        start = act.scheduledTime;
      }
      const hours = parseOpeningHours(act.openingHours, currentDate);
      if (hours && hours.open > start) {
        start = hours.open;
      }

      if (act.scheduledTime && arrival > act.scheduledTime) {
        hasHardConflict = true;
        scheduledPenalty += 10000;
      }
      const end = addMinutes(start, act.duration);
      if (hours && end > hours.close) {
        hasHardConflict = true;
        scheduledPenalty += 10000;
      }

      simTime = end;
      simLoc = act.coordinates;
    }

    // Retour hôtel / fin
    const distReturn = haversineDistance(simLoc, baseCoords);
    totalDistKm += distReturn;
    const modeReturn = selectTravelMode(distReturn, options);
    const durReturn = getTravelTime(distReturn, modeReturn);
    const returnTime = addMinutes(simTime, durReturn);

    // Calcul du score : cible idéale 12h00 - 13h00
    const lunchStartMin = lunchStart.getHours() * 60 + lunchStart.getMinutes();
    let lunchTimePenalty = 0;
    if (lunchStartMin < 720) {
      lunchTimePenalty = (720 - lunchStartMin) * 2;
    } else if (lunchStartMin <= 780) {
      lunchTimePenalty = Math.abs(lunchStartMin - 735) * 0.1;
    } else {
      lunchTimePenalty = (lunchStartMin - 780) * 3;
    }

    const dayEndTargetMin = dayEndTime.getHours() * 60 + dayEndTime.getMinutes();
    const returnMin = returnTime.getHours() * 60 + returnTime.getMinutes();
    const overtimePenalty = Math.max(0, returnMin - dayEndTargetMin) * 4;

    const score = scheduledPenalty + lunchTimePenalty + overtimePenalty + totalDistKm;

    evaluations.push({
      split,
      score,
      lunchRestaurant: candidateResto,
      lunchStart,
      lunchEnd,
      hasHardConflict
    });
  }

  // Sélection de la meilleure césure (priorité sans conflit dur)
  evaluations.sort((a, b) => a.score - b.score);
  const bestValid = evaluations.find(e => !e.hasHardConflict) || evaluations[0];

  // Si même la meilleure césure a un conflit majeur d'horaire fixe ou ouverture, signaler pour ajuster les activités
  if (bestValid.hasHardConflict && orderedActivities.length > 1) {
    return null;
  }

  const chosenSplit = bestValid.split;
  const bestLunchRestaurant = bestValid.lunchRestaurant;
  const bestLunchStartTime = bestValid.lunchStart;

  const activitiesBeforeLunch = orderedActivities.slice(0, chosenSplit);
  const activitiesAfterLunch = orderedActivities.slice(chosenSplit);

  let currentTime = new Date(dayStartTime);
  let currentLocation = baseCoords;
  let currentLocationName = baseName;

  if (hotel) {
    planItems.push({
      type: 'hotel',
      startTime: formatTime(currentTime),
      endTime: formatTime(currentTime),
      duration: 0,
      details: { name: hotel.name, action: 'departure' }
    });
  }

  // Activités du matin
  for (const act of activitiesBeforeLunch) {
    const rawDist = haversineDistance(currentLocation, act.coordinates);
    const dist = Math.max(0.1, Math.round(rawDist * 10) / 10);
    const travelMode = selectTravelMode(dist, options);
    if (travelMode === 'public' || travelMode === 'bike') {
      motorizedUsed.add(travelMode);
    }
    const travelDuration = getTravelTime(dist, travelMode);
    const arrivalTime = addMinutes(currentTime, travelDuration);

    let actStartTime = arrivalTime;
    if (act.scheduledTime && act.scheduledTime > actStartTime) {
      actStartTime = act.scheduledTime;
    }
    const hours = parseOpeningHours(act.openingHours, currentDate);
    if (hours && hours.open > actStartTime) {
      actStartTime = hours.open;
    }

    planItems.push({
      type: 'travel',
      startTime: formatTime(currentTime),
      endTime: formatTime(arrivalTime),
      duration: travelDuration,
      details: {
        mode: travelMode,
        distance: dist,
        from: currentLocationName,
        to: act.name
      }
    });

    if (actStartTime > arrivalTime) {
      const waitMin = Math.round((actStartTime.getTime() - arrivalTime.getTime()) / 60000);
      if (waitMin >= 10) {
        planItems.push({
          type: 'break',
          startTime: formatTime(arrivalTime),
          endTime: formatTime(actStartTime),
          duration: waitMin,
          details: { description: t('free_time_buffer') }
        });
      }
    }

    const actEndTime = addMinutes(actStartTime, act.duration);
    planItems.push({
      type: 'activity',
      startTime: formatTime(actStartTime),
      endTime: formatTime(actEndTime),
      duration: act.duration,
      details: act
    });

    currentTime = actEndTime;
    currentLocation = act.coordinates;
    currentLocationName = act.name;
  }

  // Pause Déjeuner garantie
  const restoName = bestLunchRestaurant?.name || t('lunch_break');
  const restoCoords = bestLunchRestaurant?.coordinates || currentLocation;
  const rawDistToResto = haversineDistance(currentLocation, restoCoords);
  const distToResto = Math.max(0.1, Math.round(rawDistToResto * 10) / 10);
  const travelModeResto = selectTravelMode(distToResto, options);
  if (travelModeResto === 'public' || travelModeResto === 'bike') {
    motorizedUsed.add(travelModeResto);
  }
  const travelDurToResto = getTravelTime(distToResto, travelModeResto);
  const arrivalAtResto = addMinutes(currentTime, travelDurToResto);

  planItems.push({
    type: 'travel',
    startTime: formatTime(currentTime),
    endTime: formatTime(arrivalAtResto),
    duration: travelDurToResto,
    details: {
      mode: travelModeResto,
      distance: distToResto,
      from: currentLocationName,
      to: restoName
    }
  });

  const actualLunchStart = arrivalAtResto < bestLunchStartTime ? bestLunchStartTime : arrivalAtResto;

  if (actualLunchStart > arrivalAtResto) {
    const waitMin = Math.round((actualLunchStart.getTime() - arrivalAtResto.getTime()) / 60000);
    if (waitMin >= 10) {
      planItems.push({
        type: 'break',
        startTime: formatTime(arrivalAtResto),
        endTime: formatTime(actualLunchStart),
        duration: waitMin,
        details: { description: t('free_time_buffer') }
      });
    }
  }

  const lunchEnd = addMinutes(actualLunchStart, 60);
  planItems.push({
    type: 'lunch',
    startTime: formatTime(actualLunchStart),
    endTime: formatTime(lunchEnd),
    duration: 60,
    details: {
      description: t('lunch_break'),
      restaurant: bestLunchRestaurant || undefined
    }
  });

  if (bestLunchRestaurant) {
    usedRestaurantNames.add(bestLunchRestaurant.name);
  }

  currentTime = lunchEnd;
  currentLocation = restoCoords;
  currentLocationName = restoName;

  // Activités de l'après-midi
  for (const act of activitiesAfterLunch) {
    const rawDist = haversineDistance(currentLocation, act.coordinates);
    const dist = Math.max(0.1, Math.round(rawDist * 10) / 10);
    const travelMode = selectTravelMode(dist, options);
    if (travelMode === 'public' || travelMode === 'bike') {
      motorizedUsed.add(travelMode);
    }
    const travelDuration = getTravelTime(dist, travelMode);
    const arrivalTime = addMinutes(currentTime, travelDuration);

    let actStartTime = arrivalTime;
    if (act.scheduledTime && act.scheduledTime > actStartTime) {
      actStartTime = act.scheduledTime;
    }
    const hours = parseOpeningHours(act.openingHours, currentDate);
    if (hours && hours.open > actStartTime) {
      actStartTime = hours.open;
    }

    planItems.push({
      type: 'travel',
      startTime: formatTime(currentTime),
      endTime: formatTime(arrivalTime),
      duration: travelDuration,
      details: {
        mode: travelMode,
        distance: dist,
        from: currentLocationName,
        to: act.name
      }
    });

    if (actStartTime > arrivalTime) {
      const waitMin = Math.round((actStartTime.getTime() - arrivalTime.getTime()) / 60000);
      if (waitMin >= 10) {
        planItems.push({
          type: 'break',
          startTime: formatTime(arrivalTime),
          endTime: formatTime(actStartTime),
          duration: waitMin,
          details: { description: t('free_time_buffer') }
        });
      }
    }

    const actEndTime = addMinutes(actStartTime, act.duration);
    planItems.push({
      type: 'activity',
      startTime: formatTime(actStartTime),
      endTime: formatTime(actEndTime),
      duration: act.duration,
      details: act
    });

    currentTime = actEndTime;
    currentLocation = act.coordinates;
    currentLocationName = act.name;
  }

  // Trajet retour vers l'hôtel
  if (hotel) {
    const rawDistReturn = haversineDistance(currentLocation, hotel.coordinates);
    const distReturn = Math.max(0.1, Math.round(rawDistReturn * 10) / 10);
    const travelModeReturn = selectTravelMode(distReturn, options);
    if (travelModeReturn === 'public' || travelModeReturn === 'bike') {
      motorizedUsed.add(travelModeReturn);
    }
    const travelDurationReturn = getTravelTime(distReturn, travelModeReturn);
    const arrivalAtHotel = addMinutes(currentTime, travelDurationReturn);

    planItems.push({
      type: 'travel',
      startTime: formatTime(currentTime),
      endTime: formatTime(arrivalAtHotel),
      duration: travelDurationReturn,
      details: {
        mode: travelModeReturn,
        distance: distReturn,
        from: currentLocationName,
        to: hotel.name
      }
    });

    planItems.push({
      type: 'hotel',
      startTime: formatTime(arrivalAtHotel),
      endTime: formatTime(arrivalAtHotel),
      duration: 0,
      details: { name: hotel.name, action: 'return' }
    });

    currentTime = arrivalAtHotel;
  }

  // Temps libre restant en fin de journée
  if (dayEndTime > currentTime) {
    const eveningBufferMin = Math.round((dayEndTime.getTime() - currentTime.getTime()) / 60000);
    if (eveningBufferMin >= 15) {
      planItems.push({
        type: 'break',
        startTime: formatTime(currentTime),
        endTime: formatTime(dayEndTime),
        duration: eveningBufferMin,
        details: { description: t('free_time_buffer') }
      });
    }
  }

  return { items: planItems, motorizedUsed };
}

/**
 * GÉNÉRATION DU PROGRAMME DE VOYAGE ENTIÈREMENT EN LOCAL (SANS IA)
 */
export const generatePlan = async (
  city: City,
  dates: EnrichedDates,
  selectedActivities: (Activity | CustomActivity)[],
  scheduledActivities: Record<string, ScheduledActivityInfo>,
  hotel: Hotel | null,
  options: TripOptions,
  t: (key: string) => string,
  language: string
): Promise<GeneratedPlan> => {
  const startDate = new Date(dates.start);
  startDate.setHours(0, 0, 0, 0);
  const endDate = new Date(dates.end);
  endDate.setHours(0, 0, 0, 0);

  const totalDays = Math.max(
    1,
    Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1
  );

  const dailyPlans: DailyPlan[] = [];
  const usedMotorizedModes = new Set<'public' | 'bike'>();
  const usedRestaurantNames = new Set<string>();

  const maxPerDay = options.maxActivitiesPerDay || 4;
  const hotelCoords = hotel?.coordinates || city.coordinates;

  const activitiesByDay: Map<string, ActivityWithSchedule[]> = new Map();
  const unscheduledPool: (Activity | CustomActivity)[] = [];

  for (const act of selectedActivities) {
    const sched = scheduledActivities[act.id];
    if (sched && sched.date) {
      const scheduledTime = new Date(`${sched.date}T${sched.time}:00`);
      if (!activitiesByDay.has(sched.date)) {
        activitiesByDay.set(sched.date, []);
      }
      activitiesByDay.get(sched.date)!.push({ ...act, scheduledTime });
    } else {
      unscheduledPool.push(act);
    }
  }

  const dayDateKeys: string[] = [];
  for (let d = 0; d < totalDays; d++) {
    const dDate = new Date(startDate);
    dDate.setDate(dDate.getDate() + d);
    const dateKey = toLocalDateKey(dDate);
    dayDateKeys.push(dateKey);
    if (!activitiesByDay.has(dateKey)) {
      activitiesByDay.set(dateKey, []);
    }
  }

  for (let d = 0; d < totalDays; d++) {
    if (unscheduledPool.length === 0) break;
    const dateKey = dayDateKeys[d];
    const dayActivities = activitiesByDay.get(dateKey)!;
    const capacityRemaining = maxPerDay - dayActivities.length;
    if (capacityRemaining <= 0) continue;

    if (dayActivities.length === 0) {
      let bestSeedIndex = 0;
      let minSeedDist = Infinity;
      for (let j = 0; j < unscheduledPool.length; j++) {
        const dist = haversineDistance(hotelCoords, unscheduledPool[j].coordinates);
        if (dist < minSeedDist) {
          minSeedDist = dist;
          bestSeedIndex = j;
        }
      }
      const seed = unscheduledPool.splice(bestSeedIndex, 1)[0];
      dayActivities.push(seed);
    }

    while (dayActivities.length < maxPerDay && unscheduledPool.length > 0) {
      let bestCandidateIndex = 0;
      let minClusterDist = Infinity;

      for (let j = 0; j < unscheduledPool.length; j++) {
        const cand = unscheduledPool[j];
        let minDistToCurrentDay = Infinity;
        for (const current of dayActivities) {
          const dist = haversineDistance(cand.coordinates, current.coordinates);
          if (dist < minDistToCurrentDay) {
            minDistToCurrentDay = dist;
          }
        }
        if (minDistToCurrentDay < minClusterDist) {
          minClusterDist = minDistToCurrentDay;
          bestCandidateIndex = j;
        }
      }

      const nextAct = unscheduledPool.splice(bestCandidateIndex, 1)[0];
      dayActivities.push(nextAct);
    }
  }

  let totalScheduledCount = 0;

  for (let i = 0; i < totalDays; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(currentDate.getDate() + i);
    const dateKey = dayDateKeys[i];

    const dayStartTime = new Date(currentDate);
    const dayEndTime = new Date(currentDate);
    dayStartTime.setHours(options.startTime, 0, 0, 0);
    dayEndTime.setHours(options.endTime, 0, 0, 0);

    const canHaveLunchToday = options.includeLunch;

    if (i === 0 && dates.arrivalTime) {
      const [arrH, arrM] = dates.arrivalTime.split(':').map(Number);
      if (canHaveLunchToday && arrH >= 13) {
        dayStartTime.setHours(Math.min(options.startTime, 12), 0, 0, 0);
      } else if (arrH > options.startTime || (arrH === options.startTime && (arrM || 0) > 0)) {
        dayStartTime.setHours(arrH, arrM || 0, 0, 0);
      }
    }

    if (i === totalDays - 1 && dates.departureTime) {
      const [depH, depM] = dates.departureTime.split(':').map(Number);
      if (canHaveLunchToday && depH < 13) {
        dayEndTime.setHours(Math.max(options.endTime, 14), 0, 0, 0);
      } else if (depH < options.endTime || (depH === options.endTime && (depM || 0) < 0)) {
        dayEndTime.setHours(depH, depM || 0, 0, 0);
      }
    }

    let candidateActivities = [...(activitiesByDay.get(dateKey) || [])];
    let builtDay: { items: PlanItem[]; motorizedUsed: Set<'public' | 'bike'> } | null = null;

    while (candidateActivities.length > 0) {
      builtDay = tryBuildDailySchedule(
        currentDate,
        dayStartTime,
        dayEndTime,
        candidateActivities,
        hotel,
        city,
        options,
        canHaveLunchToday,
        usedRestaurantNames,
        t
      );

      if (builtDay) {
        break;
      }

      const lastFlexibleIdx = candidateActivities.map(a => !a.scheduledTime).lastIndexOf(true);
      if (lastFlexibleIdx >= 0) {
        candidateActivities.splice(lastFlexibleIdx, 1);
      } else {
        candidateActivities.pop();
      }
    }

    // Si aucune activité n'était assignée ou si elles n'ont pas pu être planifiées :
    // Construction de la journée (avec pause déjeuner obligatoire garantie si l'option est cochée)
    if (!builtDay) {
      builtDay = tryBuildDailySchedule(
        currentDate,
        dayStartTime,
        dayEndTime,
        [],
        hotel,
        city,
        options,
        canHaveLunchToday,
        usedRestaurantNames,
        t
      );
    }

    if (builtDay && builtDay.items.length > 0) {
      builtDay.motorizedUsed.forEach(m => usedMotorizedModes.add(m));
      const scheduledInDay = builtDay.items.filter(it => it.type === 'activity').length;
      totalScheduledCount += scheduledInDay;

      dailyPlans.push({
        day: i + 1,
        date: currentDate.toLocaleDateString(language, {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        rawDate: dateKey,
        items: builtDay.items
      });
    } else {
      dailyPlans.push({
        day: i + 1,
        date: currentDate.toLocaleDateString(language, {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        rawDate: dateKey,
        items: [
          {
            type: 'break',
            startTime: formatTime(dayStartTime),
            endTime: formatTime(dayEndTime),
            duration: Math.max(0, Math.round((dayEndTime.getTime() - dayStartTime.getTime()) / 60000)),
            details: { description: t('free_time_buffer') }
          }
        ]
      });
    }
  }

  const transportationApps = getLocalTransportationApps(city, Array.from(usedMotorizedModes));

  return {
    id: `plan-${Date.now()}`,
    city,
    dates: { start: dates.start, end: dates.end },
    hotel,
    totalActivities: totalScheduledCount,
    days: dailyPlans,
    transportationApps
  };
};
