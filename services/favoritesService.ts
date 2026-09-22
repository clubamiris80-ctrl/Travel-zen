import type { GeneratedPlan } from '../types';

const FAVORITES_KEY = 'travelZenFavorites';

const getFavorites = (): GeneratedPlan[] => {
    try {
        const favoritesJson = localStorage.getItem(FAVORITES_KEY);
        if (!favoritesJson) return [];

        // Revive date strings into Date objects
        const parsed = JSON.parse(favoritesJson, (key, value) => {
            if ((key === 'start' || key === 'end') && typeof value === 'string') {
                const date = new Date(value);
                if (!isNaN(date.getTime())) {
                    return date;
                }
            }
            return value;
        });

        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        console.error("Error reading favorites from localStorage:", error);
        return [];
    }
};

const saveFavorites = (favorites: GeneratedPlan[]): void => {
    try {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch (error) {
        console.error("Error saving favorites to localStorage:", error);
    }
};

const addFavorite = (plan: GeneratedPlan): void => {
    const favorites = getFavorites();
    if (!favorites.some(fav => fav.id === plan.id)) {
        const newFavorites = [...favorites, plan];
        saveFavorites(newFavorites);
    }
};

const removeFavorite = (planId: string): void => {
    const favorites = getFavorites();
    const newFavorites = favorites.filter(fav => fav.id !== planId);
    saveFavorites(newFavorites);
};

const isFavorite = (planId: string): boolean => {
    const favorites = getFavorites();
    return favorites.some(fav => fav.id === planId);
};

export const favoritesService = {
    getFavorites,
    addFavorite,
    removeFavorite,
    isFavorite,
};