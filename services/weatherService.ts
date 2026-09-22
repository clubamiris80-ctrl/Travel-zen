import type { Coordinates, DayWeather, Language } from '../types';

interface WMOInfo {
  condition: Record<Language, string>;
  icon: 'sun' | 'cloud-sun' | 'cloud' | 'cloud-fog' | 'cloud-drizzle' | 'cloud-rain' | 'cloud-snow' | 'cloud-lightning';
}

const WMO_CODES: Record<number, WMOInfo> = {
  0: {
    condition: {
      fr: 'Ensoleillé',
      en: 'Clear sky',
      es: 'Despejado',
      ar: 'صافٍ',
      zh: '晴朗',
      ja: '快晴',
      ru: 'Ясно'
    },
    icon: 'sun'
  },
  1: {
    condition: {
      fr: 'Principalement dégagé',
      en: 'Mainly clear',
      es: 'Mayormente despejado',
      ar: 'صافٍ غالباً',
      zh: '大部晴朗',
      ja: 'おおむね晴れ',
      ru: 'Преимущественно ясно'
    },
    icon: 'sun'
  },
  2: {
    condition: {
      fr: 'Partiellement nuageux',
      en: 'Partly cloudy',
      es: 'Parcialmente nublado',
      ar: 'غائم جزئياً',
      zh: '多云',
      ja: '晴れ時々曇り',
      ru: 'Переменная облачность'
    },
    icon: 'cloud-sun'
  },
  3: {
    condition: {
      fr: 'Couvert',
      en: 'Overcast',
      es: 'Nublado',
      ar: 'غائم',
      zh: '阴天',
      ja: '曇り',
      ru: 'Пасмурно'
    },
    icon: 'cloud'
  },
  45: {
    condition: {
      fr: 'Brouillard',
      en: 'Fog',
      es: 'Niebla',
      ar: 'ضباب',
      zh: '雾',
      ja: '霧',
      ru: 'Туман'
    },
    icon: 'cloud-fog'
  },
  48: {
    condition: {
      fr: 'Brouillard givrant',
      en: 'Depositing rime fog',
      es: 'Niebla escarchada',
      ar: 'ضباب جليدي',
      zh: '冻雾',
      ja: '着氷性の霧',
      ru: 'Изморозь'
    },
    icon: 'cloud-fog'
  },
  51: {
    condition: {
      fr: 'Bruine légère',
      en: 'Light drizzle',
      es: 'Llovizna ligera',
      ar: 'رذاذ خفيف',
      zh: '微雨',
      ja: '小雨',
      ru: 'Легкая морось'
    },
    icon: 'cloud-drizzle'
  },
  53: {
    condition: {
      fr: 'Bruine modérée',
      en: 'Moderate drizzle',
      es: 'Llovizna moderada',
      ar: 'رذاذ معتدل',
      zh: '中度细雨',
      ja: '霧雨',
      ru: 'Умеренная морось'
    },
    icon: 'cloud-drizzle'
  },
  55: {
    condition: {
      fr: 'Bruine dense',
      en: 'Dense drizzle',
      es: 'Llovizna densa',
      ar: 'رذاذ كثيف',
      zh: '密细雨',
      ja: '強い霧雨',
      ru: 'Плотная морось'
    },
    icon: 'cloud-drizzle'
  },
  61: {
    condition: {
      fr: 'Pluie faible',
      en: 'Slight rain',
      es: 'Lluvia ligera',
      ar: 'مطر خفيف',
      zh: '小雨',
      ja: '弱い雨',
      ru: 'Небольшой дождь'
    },
    icon: 'cloud-rain'
  },
  63: {
    condition: {
      fr: 'Pluie modérée',
      en: 'Moderate rain',
      es: 'Lluvia moderada',
      ar: 'مطر معتدل',
      zh: '中雨',
      ja: '雨',
      ru: 'Умеренный дождь'
    },
    icon: 'cloud-rain'
  },
  65: {
    condition: {
      fr: 'Forte pluie',
      en: 'Heavy rain',
      es: 'Lluvia fuerte',
      ar: 'مطر غزير',
      zh: '大雨',
      ja: '大雨',
      ru: 'Сильный дождь'
    },
    icon: 'cloud-rain'
  },
  71: {
    condition: {
      fr: 'Chute de neige légère',
      en: 'Slight snow fall',
      es: 'Nevada ligera',
      ar: 'تساقط ثلوج خفيف',
      zh: '小雪',
      ja: '小雪',
      ru: 'Небольшой снегопад'
    },
    icon: 'cloud-snow'
  },
  73: {
    condition: {
      fr: 'Chute de neige modérée',
      en: 'Moderate snow fall',
      es: 'Nevada moderada',
      ar: 'تساقط ثلوج معتدل',
      zh: '中雪',
      ja: '中程度の雪',
      ru: 'Умеренный снегопад'
    },
    icon: 'cloud-snow'
  },
  75: {
    condition: {
      fr: 'Forte chute de neige',
      en: 'Heavy snow fall',
      es: 'Nevada fuerte',
      ar: 'تساقط ثلوج كثيف',
      zh: '大雪',
      ja: '大雪',
      ru: 'Сильный снегопад'
    },
    icon: 'cloud-snow'
  },
  80: {
    condition: {
      fr: 'Averses légères',
      en: 'Slight rain showers',
      es: 'Chubascos ligeros',
      ar: 'زخات مطر خفيفة',
      zh: '阵雨',
      ja: 'にわか雨',
      ru: 'Небольшие ливни'
    },
    icon: 'cloud-rain'
  },
  81: {
    condition: {
      fr: 'Averses modérées',
      en: 'Moderate rain showers',
      es: 'Chubascos moderados',
      ar: 'زخات مطر معتدلة',
      zh: '中度阵雨',
      ja: '中程度のにわか雨',
      ru: 'Умеренные ливни'
    },
    icon: 'cloud-rain'
  },
  82: {
    condition: {
      fr: 'Violentes averses',
      en: 'Violent rain showers',
      es: 'Chubascos violentos',
      ar: 'زخات مطر عنيفة',
      zh: '强阵雨',
      ja: '激しいにわか雨',
      ru: 'Сильные ливни'
    },
    icon: 'cloud-rain'
  },
  95: {
    condition: {
      fr: 'Orage',
      en: 'Thunderstorm',
      es: 'Tormenta',
      ar: 'عاصفة رعدية',
      zh: '雷暴',
      ja: '雷雨',
      ru: 'Гроза'
    },
    icon: 'cloud-lightning'
  },
  96: {
    condition: {
      fr: 'Orage avec grêle légère',
      en: 'Thunderstorm with slight hail',
      es: 'Tormenta con granizo ligero',
      ar: 'عاصفة رعدية مع بَرَد خفيف',
      zh: '雷暴伴微雹',
      ja: '雹を伴う雷雨',
      ru: 'Гроза с мелким градом'
    },
    icon: 'cloud-lightning'
  },
  99: {
    condition: {
      fr: 'Orage avec forte grêle',
      en: 'Thunderstorm with heavy hail',
      es: 'Tormenta con granizo fuerte',
      ar: 'عاصفة رعدية مع بَرَد كثيف',
      zh: '雷暴伴大雹',
      ja: '激しい雹を伴う雷雨',
      ru: 'Гроза с сильным градом'
    },
    icon: 'cloud-lightning'
  }
};

export const getWmoCondition = (code: number, lang: Language = 'fr'): { condition: string; icon: WMOInfo['icon'] } => {
  const match = WMO_CODES[code];
  if (match) {
    return {
      condition: match.condition[lang] || match.condition.fr,
      icon: match.icon
    };
  }
  // Default fallback
  return {
    condition: lang === 'fr' ? 'Variable' : 'Variable',
    icon: 'cloud-sun'
  };
};

/**
 * Seasonal normal climate estimation based on latitude, longitude and month index (0-11).
 * Used when dates are beyond the live forecast window (e.g. >16 days in the future) or offline.
 */
export const getSeasonalClimate = (
  lat: number,
  _lng: number,
  monthIndex: number,
  lang: Language = 'fr'
): DayWeather => {
  const isNorthern = lat >= 0;
  const absLat = Math.abs(lat);
  // Seasonal cycle phase (0 at coldest month: Jan in North, July in South)
  const seasonMonth = isNorthern ? (monthIndex + 11) % 12 : (monthIndex + 5) % 12;
  // Normalized temperature factor (-1 in peak winter, +1 in peak summer)
  const tempFactor = Math.cos(((seasonMonth - 6) / 6) * Math.PI); // -1 in winter, 1 in summer

  let baseMid = 18;
  let baseAmp = 10;
  let precipChance = 20;
  let defaultCode = 2; // partly cloudy

  if (absLat < 23.5) {
    // Tropical / Equatorial
    baseMid = 28;
    baseAmp = 3;
    precipChance = 35;
    defaultCode = 1;
  } else if (absLat < 35) {
    // Subtropical / Mediterranean south (e.g. Marrakech, Cairo, Seville)
    baseMid = 21;
    baseAmp = 8;
    precipChance = 15;
    defaultCode = tempFactor > 0.3 ? 0 : 2;
  } else if (absLat < 50) {
    // Temperate / Mediterranean north (e.g. Rome, Madrid, Paris, New York)
    baseMid = 14;
    baseAmp = 10;
    precipChance = 25;
    defaultCode = tempFactor > 0.4 ? 1 : 2;
  } else {
    // Cold temperate / Subpolar (e.g. London, Berlin, Stockholm)
    baseMid = 9;
    baseAmp = 9;
    precipChance = 35;
    defaultCode = 3;
  }

  const avgTemp = baseMid + (tempFactor * baseAmp);
  const tempMax = Math.round(avgTemp + 4);
  const tempMin = Math.round(avgTemp - 4);
  const wmo = getWmoCondition(defaultCode, lang);

  return {
    tempMax,
    tempMin,
    code: defaultCode,
    condition: wmo.condition,
    precipitationProbability: precipChance,
    isSeasonalAverage: true
  };
};

// Cache to prevent duplicate queries for identical trips
const weatherCache = new Map<string, Record<string, DayWeather>>();

/**
 * Fetches daily weather for a trip based on city coordinates and day date strings (YYYY-MM-DD).
 * Discreetly falls back to seasonal climate if dates are out of the forecast range or if network fails.
 */
export const fetchTripWeather = async (
  coordinates: Coordinates,
  dates: string[], // YYYY-MM-DD
  lang: Language = 'fr'
): Promise<Record<string, DayWeather>> => {
  if (!coordinates || !dates || dates.length === 0) {
    return {};
  }

  const validDates = dates.filter(Boolean);
  if (validDates.length === 0) return {};

  const cacheKey = `${coordinates.lat.toFixed(2)},${coordinates.lng.toFixed(2)}_${validDates.join('_')}_${lang}`;
  if (weatherCache.has(cacheKey)) {
    return weatherCache.get(cacheKey)!;
  }

  const results: Record<string, DayWeather> = {};

  // Sort to get date range
  const sorted = [...validDates].sort();
  const startDateStr = sorted[0];
  const endDateStr = sorted[sorted.length - 1];

  const now = new Date();
  const minAllowed = new Date(now);
  minAllowed.setDate(now.getDate() - 14); // Open-Meteo allows past few days
  const maxAllowed = new Date(now);
  maxAllowed.setDate(now.getDate() + 15); // Open-Meteo forecast up to 16 days

  const tripStart = new Date(startDateStr);
  const tripEnd = new Date(endDateStr);

  const isWithinForecastRange = tripStart >= minAllowed && tripEnd <= maxAllowed;

  if (isWithinForecastRange) {
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.lat}&longitude=${coordinates.lng}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto&start_date=${startDateStr}&end_date=${endDateStr}`;
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        if (data.daily && Array.isArray(data.daily.time)) {
          const times: string[] = data.daily.time;
          const codes: number[] = data.daily.weather_code || [];
          const maxs: number[] = data.daily.temperature_2m_max || [];
          const mins: number[] = data.daily.temperature_2m_min || [];
          const precip: number[] = data.daily.precipitation_probability_max || [];

          for (let i = 0; i < times.length; i++) {
            const dStr = times[i];
            const code = codes[i] ?? 0;
            const wmo = getWmoCondition(code, lang);
            results[dStr] = {
              tempMax: Math.round(maxs[i] ?? 20),
              tempMin: Math.round(mins[i] ?? 12),
              code,
              condition: wmo.condition,
              precipitationProbability: precip[i] ?? 0,
              isSeasonalAverage: false
            };
          }
        }
      }
    } catch {
      // Graceful fallback to seasonal normals if network fails
    }
  }

  // Fill in any missing dates with seasonal climate estimation
  for (const dStr of validDates) {
    if (!results[dStr]) {
      const dateObj = new Date(dStr);
      const monthIndex = !isNaN(dateObj.getTime()) ? dateObj.getMonth() : new Date().getMonth();
      results[dStr] = getSeasonalClimate(coordinates.lat, coordinates.lng, monthIndex, lang);
    }
  }

  weatherCache.set(cacheKey, results);
  return results;
};
