
import { GoogleGenAI, Type } from "@google/genai";
import type { City, Coordinates, Activity, Hotel, ActivityType, RestaurantSuggestion, TripOptions, TransportationAppInfo, Company, CompanyType, BaggageInfo, Country, CountryTravelInfo, LocalRestaurant } from '../types';
import { searchLocalCities, getLocalActivitiesForCity } from '../data/cities';
import { filterLocalHotels, allLocalHotels } from '../data/hotels';
import { filterLocalRestaurants, allLocalRestaurants } from '../data/restaurants';
import { haversineDistance } from './geo';

// Default model according to Google GenAI SDK standards
const DEFAULT_MODEL = "gemini-3.8-flash";
const FALLBACK_MODEL = "gemini-flash-latest";

// Fix: Initialize the GoogleGenAI client according to the guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// --- Helper function to parse JSON responses ---
const parseJsonResponse = <T>(text: string | undefined): T | null => {
  if (!text) return null;
  try {
    // The response might be wrapped in markdown JSON block
    const jsonString = text.trim().replace(/^```json/, '').replace(/```$/, '').trim();
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Failed to parse JSON response:", error);
    console.error("Original text:", text);
    return null;
  }
};

// --- API Functions ---

export const searchCities = async (query: string, language: string): Promise<City[]> => {
  // 1. Check local database first for instant, offline-capable results
  const localMatches = searchLocalCities(query);
  if (localMatches.length > 0) {
    return localMatches.slice(0, 10).map(c => ({
      id: c.id,
      name: c.name,
      country: c.country,
      coordinates: c.coordinates,
      region: c.region,
      continent: c.continent
    }));
  }

  // 2. Fallback to AI if no local match found
  const prompt = `Find cities matching '${query}'. Return up to 5 cities. Your response must be a JSON object with a single key "cities", which is an array of city objects. Each city object must have "id" (a unique string), "name", "country", and "coordinates" (an object with "lat" and "lng"). The entire response, including city and country names, must be in the language with the code: ${language}.`;

  const schemaConfig = {
    responseMimeType: "application/json",
    responseSchema: {
      type: Type.OBJECT,
      properties: {
        cities: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              name: { type: Type.STRING },
              country: { type: Type.STRING },
              coordinates: {
                type: Type.OBJECT,
                properties: {
                  lat: { type: Type.NUMBER },
                  lng: { type: Type.NUMBER },
                },
                required: ['lat', 'lng'],
              },
            },
            required: ['id', 'name', 'country', 'coordinates'],
          },
        },
      },
    },
  };

  try {
    let response;
    try {
      response = await ai.models.generateContent({
        model: DEFAULT_MODEL,
        contents: prompt,
        config: schemaConfig,
      });
    } catch {
      response = await ai.models.generateContent({
        model: FALLBACK_MODEL,
        contents: prompt,
        config: schemaConfig,
      });
    }

    const result = parseJsonResponse<{ cities: City[] }>(response.text);
    return result?.cities || [];
  } catch (error) {
    console.error("Error searching cities:", error);
    return [];
  }
};

export const geocodeAddress = async (address: string, cityName: string, country: string): Promise<Coordinates | null> => {
  const prompt = `Find the geographic coordinates (latitude and longitude) for the address: "${address}" in the city of ${cityName}, ${country}. If the address is not found, return an object with null for lat and lng. Your response must be a JSON object with "lat" and "lng" keys.`;
  
  try {
    const response = await ai.models.generateContent({
      model: DEFAULT_MODEL,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            lat: { type: Type.NUMBER },
            lng: { type: Type.NUMBER },
          },
        },
      },
    });

    const result = parseJsonResponse<{ lat: number | null, lng: number | null }>(response.text);
    if(result && result.lat !== null && result.lng !== null) {
      return result as Coordinates;
    }
    return null;

  } catch (error) {
    console.error("Error geocoding address:", error);
    return null;
  }
};

const activityTypes: ActivityType[] = ['museum', 'restaurant', 'monument', 'park', 'shopping', 'show', 'other'];

export const searchActivities = async (city: City, language: string): Promise<Activity[]> => {
    // 1. Prioritize local database: If city activities exist locally, return them immediately without AI calls
    const localActivities = getLocalActivitiesForCity(city.name);
    if (localActivities && localActivities.length > 0) {
        return localActivities;
    }

    // 2. Fallback to Gemini if the city is not in the local database
    const prompt = `List 15 popular and diverse tourist activities in ${city.name}, ${city.country}. For each activity, provide a unique id, name, type (from this list: ${activityTypes.join(', ')}), an estimated duration in minutes, a short description, its geographic coordinates (lat, lng), and its opening hours in "HH:MM-HH:MM" format (or null if not applicable, like a public park). Your response must be a JSON object with a single key "activities", which is an array of activity objects. The entire response, including names and descriptions, must be in the language with the code: ${language}.`;
    
    try {
        const response = await ai.models.generateContent({
            model: DEFAULT_MODEL,
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        activities: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.OBJECT,
                                properties: {
                                    id: { type: Type.STRING },
                                    name: { type: Type.STRING },
                                    type: { type: Type.STRING, enum: activityTypes },
                                    duration: { type: Type.INTEGER },
                                    description: { type: Type.STRING },
                                    coordinates: {
                                        type: Type.OBJECT,
                                        properties: {
                                            lat: { type: Type.NUMBER },
                                            lng: { type: Type.NUMBER },
                                        },
                                        required: ['lat', 'lng'],
                                    },
                                    openingHours: { type: Type.STRING, nullable: true },
                                },
                                required: ['id', 'name', 'type', 'duration', 'description', 'coordinates'],
                            },
                        },
                    },
                },
            },
        });
        const result = parseJsonResponse<{ activities: Activity[] }>(response.text);
        return result?.activities || [];
    } catch (error) {
        console.error("Error searching activities:", error);
        return [];
    }
};

export const searchHotels = async (
  city: City, 
  query: string, 
  maxPrice: number, 
  language: string,
  options?: { category?: any; neighborhood?: string }
): Promise<Hotel[]> => {
    // 1. Prioritize local database: Instant local hotels without AI calls
    const localHotels = filterLocalHotels(city.id || city.name, {
        maxPrice: maxPrice > 0 ? maxPrice : undefined,
        query: query.trim() || undefined,
        category: options?.category,
        neighborhood: options?.neighborhood
    });

    if (localHotels && localHotels.length > 0) {
        return localHotels;
    }

    // 2. Fallback to Gemini if the city or hotel is not in the local database
    const prompt = `Find hotels in ${city.name}, ${city.country} that match the search query "${query}". If the query is empty, list at least 15 popular and diverse hotels. All listed hotels must have an estimated price per night under ${maxPrice} EUR. For each hotel, provide a unique id, name, address, star rating (1-5), an estimated price per night in EUR, its coordinates (lat, lng), a sample booking URL, and an overall rating (out of 10). Your response must be a JSON object with a single key "hotels", which is an array of hotel objects. The entire response, including hotel names and addresses, must be in the language with the code: ${language}.`;
    
    try {
        const response = await ai.models.generateContent({
            model: DEFAULT_MODEL,
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        hotels: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.OBJECT,
                                properties: {
                                    id: { type: Type.STRING },
                                    name: { type: Type.STRING },
                                    address: { type: Type.STRING },
                                    stars: { type: Type.INTEGER },
                                    pricePerNight: { type: Type.INTEGER },
                                    coordinates: {
                                        type: Type.OBJECT,
                                        properties: {
                                            lat: { type: Type.NUMBER },
                                            lng: { type: Type.NUMBER },
                                        },
                                        required: ['lat', 'lng'],
                                    },
                                    bookingUrl: { type: Type.STRING },
                                    rating: { type: Type.NUMBER },
                                },
                                required: ['id', 'name', 'address', 'stars', 'pricePerNight', 'coordinates', 'bookingUrl', 'rating'],
                            },
                        },
                    },
                },
            },
        });
        const result = parseJsonResponse<{ hotels: Hotel[] }>(response.text);
        return result?.hotels || [];
    } catch (error) {
        console.error("Error searching hotels:", error);
        return [];
    }
};

export const searchLocalRestaurants = (
  city: City,
  options?: {
    cuisineType?: string;
    priceTier?: any;
    vegetarianStatus?: any;
    halalStatus?: any;
    neighborhood?: string;
    query?: string;
  }
): LocalRestaurant[] => {
  return filterLocalRestaurants(city.id || city.name, options);
};

export const findNearbyRestaurant = async (
  coordinates: Coordinates, 
  language: string,
  dietaryPreference: TripOptions['dietaryPreference']
): Promise<RestaurantSuggestion | null> => {
  // 1. Prioritize local database: look for the closest local restaurant matching dietaryPreference
  let candidates = allLocalRestaurants;
  if (dietaryPreference === 'halal') {
    candidates = candidates.filter(r => r.dietary.halal === 'Halal vérifié' || r.dietary.halal === 'options halal');
  } else if (dietaryPreference === 'vegetarian') {
    candidates = candidates.filter(r => r.dietary.vegetarian === '100% végétarien' || r.dietary.vegetarian === 'options végétariennes');
  }

  // Calculate distance for all candidates
  let bestCandidate: LocalRestaurant | null = null;
  let minDistance = Infinity;

  for (const cand of candidates) {
    const dist = haversineDistance(coordinates, cand.coordinates);
    if (dist < minDistance) {
      minDistance = dist;
      bestCandidate = cand;
    }
  }

  // If a local restaurant is within 40 km, return it instantly with rich verified metadata!
  if (bestCandidate && minDistance <= 40) {
    return {
      name: bestCandidate.name,
      address: bestCandidate.address,
      type: bestCandidate.cuisine,
      coordinates: bestCandidate.coordinates,
      isHalal: bestCandidate.dietary.halal === 'Halal vérifié' || bestCandidate.dietary.halal === 'options halal',
      isVegetarian: bestCandidate.dietary.vegetarian === '100% végétarien' || bestCandidate.dietary.vegetarian === 'options végétariennes',
      priceRange: bestCandidate.priceRange,
      specialties: bestCandidate.specialties,
      verificationDate: bestCandidate.verificationDate,
      district: bestCandidate.district
    };
  }

  // 2. Fallback to Gemini if no matching local restaurant is found
  let prompt: string;
  const responseSchema: any = {
      type: Type.OBJECT,
      properties: {
        name: { type: Type.STRING },
        address: { type: Type.STRING },
        type: { type: Type.STRING },
        coordinates: {
          type: Type.OBJECT,
          properties: {
            lat: { type: Type.NUMBER },
            lng: { type: Type.NUMBER },
          },
          required: ['lat', 'lng'],
        },
      },
      required: ['name', 'address', 'type', 'coordinates'],
  };

  if (dietaryPreference === 'halal') {
      prompt = `Find one good, highly-rated, and not too expensive halal restaurant near latitude ${coordinates.lat} and longitude ${coordinates.lng} suitable for a tourist's lunch break. You must perform a two-step verification for its halal status. First, for cities in France, verify the restaurant is listed on the website https://mon-resto-halal.com/. For other non-Muslim majority countries (Europe, Americas, Asia), find and use a similar reliable local directory. Second, you must also cross-reference this with general review sites like TripAdvisor or Google Maps to confirm it is explicitly mentioned as "halal" or "hallal" by the restaurant or in recent customer reviews. Only return a restaurant if you are confident about its halal status. Your response must be a JSON object with "name", "address", "type" (cuisine type), "coordinates" (lat, lng), and "isHalal" (set to true). The entire response must be in the language with the code: ${language}.`;
      responseSchema.properties.isHalal = { type: Type.BOOLEAN };
  } else if (dietaryPreference === 'vegetarian') {
      prompt = `Find one good, highly-rated, and not too expensive restaurant with excellent vegetarian options near latitude ${coordinates.lat} and longitude ${coordinates.lng}. Suggest a single restaurant suitable for a tourist's lunch break. Your response must be a JSON object with "name", "address", "type" (cuisine type, e.g., 'Italian', 'Local', 'Café'), and "coordinates" (an object with "lat" and "lng"). The entire response must be in the language with the code: ${language}.`;
  } else {
      prompt = `Find one good, highly-rated, and not too expensive restaurant near latitude ${coordinates.lat} and longitude ${coordinates.lng}. Suggest a single restaurant suitable for a tourist's lunch break. Your response must be a JSON object with "name", "address", "type" (cuisine type, e.g., 'Italian', 'Local', 'Café'), and "coordinates" (an object with "lat" and "lng"). The entire response must be in the language with the code: ${language}.`;
  }

  try {
    const response = await ai.models.generateContent({
      model: DEFAULT_MODEL,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema,
      },
    });

    const result = parseJsonResponse<RestaurantSuggestion>(response.text);
    return result;
  } catch (error) {
    console.error("Error finding nearby restaurant:", error);
    return null;
  }
};

export const getTransportationAppInfo = async (city: City, modes: ('public' | 'bike')[]): Promise<TransportationAppInfo[]> => {
  if (modes.length === 0) return [];

  const localApps: TransportationAppInfo[] = [];
  const cityName = (city.name || '').toLowerCase();
  if (modes.includes('public')) {
    if (cityName.includes('paris')) localApps.push({ type: 'public', name: 'Île-de-France Mobilités', url: 'https://www.iledefrance-mobilites.fr/' });
    else if (cityName.includes('lyon')) localApps.push({ type: 'public', name: 'TCL Lyon', url: 'https://www.tcl.fr/' });
    else if (cityName.includes('marseille')) localApps.push({ type: 'public', name: 'RTM Marseille', url: 'https://www.rtm.fr/' });
    else if (cityName.includes('london') || cityName.includes('londres')) localApps.push({ type: 'public', name: 'TfL Go', url: 'https://tfl.gov.uk/maps/tfl-go' });
    else localApps.push({ type: 'public', name: `Citymapper (${city.name})`, url: 'https://citymapper.com/' });
  }
  if (modes.includes('bike')) {
    if (cityName.includes('paris')) localApps.push({ type: 'bike', name: "Vélib' Métropole", url: 'https://www.velib-metropole.fr/' });
    else if (cityName.includes('lyon')) localApps.push({ type: 'bike', name: "Vélo'v", url: 'https://velov.grandlyon.com/' });
    else localApps.push({ type: 'bike', name: `Lime / Tier (${city.name})`, url: 'https://www.li.me/' });
  }

  const prompt = `For the city of ${city.name}, ${city.country}, find the official or most popular mobile apps for the following transportation types: ${modes.join(', ')}. For each type, provide the app's name and a single relevant URL (preferably the official website or a general app store link). Your response must be a JSON object with a single key "apps", which is an array of objects. Each object must have "type" ('public' or 'bike'), "name", and "url".`;

  try {
    const response = await ai.models.generateContent({
      model: DEFAULT_MODEL,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            apps: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  type: { type: Type.STRING, enum: ['public', 'bike'] },
                  name: { type: Type.STRING },
                  url: { type: Type.STRING },
                },
                required: ['type', 'name', 'url'],
              },
            },
          },
        },
      },
    });
    const result = parseJsonResponse<{ apps: TransportationAppInfo[] }>(response.text);
    return (result?.apps && result.apps.length > 0) ? result.apps : localApps;
  } catch (error) {
    console.error("Error getting transportation app info, using local fallback:", error);
    return localApps;
  }
};


export const getTravelCompanies = async (type: CompanyType, language: string): Promise<Company[]> => {
  const prompt = (() => {
    switch (type) {
      case 'airline':
        return `List an extensive list of at least 50 European airline companies, including major carriers, low-cost airlines, and regional airlines. Your response must be a JSON object with a single key "companies", which is an array of objects. Each object must have "id" (a unique string, can be the company name normalized) and "name". The response must be in the language with the code: ${language}.`;
      case 'train':
        return `List an extensive list of at least 50 European train operating companies, including national railways (like SNCF, Deutsche Bahn, Trenitalia) and private operators. Your response must be a JSON object with a single key "companies", which is an array of objects. Each object must have "id" (a unique string, can be the company name normalized) and "name". The response must be in the language with the code: ${language}.`;
      case 'ferry':
        return `List an extensive list of at least 50 European ferry companies, including those operating in the Mediterranean, Baltic Sea, North Sea, and across the English Channel. Your response must be a JSON object with a single key "companies", which is an array of objects. Each object must have "id" (a unique string, can be the company name normalized) and "name". The response must be in the language with the code: ${language}.`;
      default:
        return `List the top 20 major ${type} companies operating globally. Your response must be a JSON object with a single key "companies", which is an an array of objects. Each object must have "id" (a unique string, can be the company name normalized) and "name". The response must be in the language with the code: ${language}.`;
    }
  })();
  
  try {
    const response = await ai.models.generateContent({
      model: DEFAULT_MODEL,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            companies: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING },
                  name: { type: Type.STRING },
                },
                required: ['id', 'name'],
              },
            },
          },
        },
      },
    });
    const result = parseJsonResponse<{ companies: Company[] }>(response.text);
    return result?.companies || [];
  } catch (error) {
    console.error(`Error getting ${type} companies:`, error);
    return [];
  }
};


export const getBaggageInfo = async (companyName: string, companyType: CompanyType, language: string): Promise<BaggageInfo | null> => {
    const prompt = `Provide a summary of the standard baggage allowance for the ${companyType} company "${companyName}". Be precise and focus on standard economy policies. Your response must be a JSON object with the keys "freeAllowance", "paidAllowance", and "usefulInfo". "freeAllowance" should be an array of strings. "paidAllowance" should be an array of objects, where each object has a "description" and a "price" (as a string, e.g., "from €25"). "usefulInfo" should be a single string with other relevant tips. The response must be in the language with the code: ${language}.`;

    try {
        const response = await ai.models.generateContent({
            model: DEFAULT_MODEL,
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        freeAllowance: {
                            type: Type.ARRAY,
                            items: { type: Type.STRING },
                        },
                        paidAllowance: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.OBJECT,
                                properties: {
                                    description: { type: Type.STRING },
                                    price: { type: Type.STRING },
                                },
                                required: ['description', 'price'],
                            },
                        },
                        usefulInfo: { type: Type.STRING },
                    },
                    required: ['freeAllowance', 'paidAllowance', 'usefulInfo'],
                },
            },
        });
        const result = parseJsonResponse<BaggageInfo>(response.text);
        return result;
    } catch (error) {
        console.error(`Error getting baggage info for ${companyName}:`, error);
        return null;
    }
};

export const getCountryList = async (language: string): Promise<Country[]> => {
    const prompt = `Provide a list of all countries in the world. Your response must be a JSON object with a single key "countries", which is an array of objects. Each object must have "code" (the two-letter ISO 3166-1 alpha-2 code) and "name". The response, including country names, must be in the language with the code: ${language}.`;

    try {
        const response = await ai.models.generateContent({
            model: DEFAULT_MODEL,
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        countries: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.OBJECT,
                                properties: {
                                    code: { type: Type.STRING },
                                    name: { type: Type.STRING },
                                },
                                required: ['code', 'name'],
                            },
                        },
                    },
                },
            },
        });
        const result = parseJsonResponse<{ countries: Country[] }>(response.text);
        return result?.countries.sort((a, b) => a.name.localeCompare(b.name, language)) || [];
    } catch (error) {
        console.error("Error getting country list:", error);
        return [];
    }
};

export const getCountryTravelInfo = async (countryName: string, language: string): Promise<CountryTravelInfo | null> => {
    const prompt = `Provide key travel information for tourists visiting "${countryName}". Focus on entry requirements and other essential info. Your response must be a JSON object with the keys "maxStay", "visaInfo", "documentsRequired", and "usefulInfo". "maxStay" should be a string summarizing the maximum stay for tourists (e.g., "90 days within any 180-day period for Schengen area rules"). "visaInfo" should be a clear summary of visa requirements for a typical tourist. "documentsRequired" should be an array of strings listing typical documents to present upon arrival. "usefulInfo" should be a single string with other relevant tips (e.g., currency, emergency number, a small cultural tip). The response must be in the language with the code: ${language}.`;

    try {
        const response = await ai.models.generateContent({
            model: DEFAULT_MODEL,
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        maxStay: { type: Type.STRING },
                        visaInfo: { type: Type.STRING },
                        documentsRequired: { type: Type.ARRAY, items: { type: Type.STRING } },
                        usefulInfo: { type: Type.STRING },
                    },
                    required: ['maxStay', 'visaInfo', 'documentsRequired', 'usefulInfo'],
                },
            },
        });
        const result = parseJsonResponse<CountryTravelInfo>(response.text);
        return result;
    } catch (error) {
        console.error(`Error getting travel info for ${countryName}:`, error);
        return null;
    }
};
