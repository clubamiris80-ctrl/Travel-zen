import React, { useState, useMemo } from 'react';
import type { City, LocalRestaurant, VegetarianStatus, HalalStatus, PriceTier } from '../../types';
import { filterLocalRestaurants, getLocalRestaurantsByCityId } from '../../data/restaurants';
import { 
  X, 
  Search, 
  MapPin, 
  Star, 
  ShieldCheck, 
  Leaf, 
  Utensils, 
  AlertCircle,
  Filter,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';

interface RestaurantExplorerModalProps {
  isOpen: boolean;
  onClose: () => void;
  city: City;
}

export const RestaurantExplorerModal: React.FC<RestaurantExplorerModalProps> = ({
  isOpen,
  onClose,
  city
}) => {
  const [query, setQuery] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState<string>('all');
  const [selectedPrice, setSelectedPrice] = useState<PriceTier | 'all'>('all');
  const [selectedVegetarian, setSelectedVegetarian] = useState<VegetarianStatus | 'all'>('all');
  const [selectedHalal, setSelectedHalal] = useState<HalalStatus | 'all'>('all');
  const [neighborhoodFilter, setNeighborhoodFilter] = useState('');

  // All restaurants for this city
  const cityRestaurants = useMemo(() => {
    return getLocalRestaurantsByCityId(city.id) || [];
  }, [city.id]);

  // List of available cuisines for this city
  const availableCuisines = useMemo(() => {
    const set = new Set<string>();
    cityRestaurants.forEach(r => {
      r.cuisine.split(',').forEach(c => set.add(c.trim()));
    });
    return Array.from(set).sort();
  }, [cityRestaurants]);

  // Filtered results
  const filteredRestaurants = useMemo(() => {
    return filterLocalRestaurants(city.id, {
      cuisineType: selectedCuisine !== 'all' ? selectedCuisine : undefined,
      priceTier: selectedPrice !== 'all' ? selectedPrice : undefined,
      vegetarianStatus: selectedVegetarian !== 'all' ? selectedVegetarian : undefined,
      halalStatus: selectedHalal !== 'all' ? selectedHalal : undefined,
      neighborhood: neighborhoodFilter.trim() || undefined,
      query: query.trim() || undefined
    });
  }, [city.id, selectedCuisine, selectedPrice, selectedVegetarian, selectedHalal, neighborhoodFilter, query]);

  const resetFilters = () => {
    setQuery('');
    setSelectedCuisine('all');
    setSelectedPrice('all');
    setSelectedVegetarian('all');
    setSelectedHalal('all');
    setNeighborhoodFilter('');
  };

  const hasActiveFilters = 
    query || 
    selectedCuisine !== 'all' || 
    selectedPrice !== 'all' || 
    selectedVegetarian !== 'all' || 
    selectedHalal !== 'all' || 
    neighborhoodFilter;

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-3 sm:p-4 backdrop-blur-xs" 
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-100 text-amber-700 rounded-lg">
              <Utensils size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Restaurants locaux & Gastronomie
              </h2>
              <p className="text-xs text-slate-500">
                {city.name}, {city.country} &bull; {cityRestaurants.length} adresses enregistrées en local
              </p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
            aria-label="Fermer"
          >
            <X size={22} />
          </button>
        </div>

        {/* Filter Toolbar */}
        <div className="p-4 border-b border-slate-200 bg-white space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {/* Search query */}
            <div className="relative">
              <div className="absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none text-slate-400">
                <Search size={15} />
              </div>
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Nom, spécialité..."
                className="w-full ps-9 pe-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-amber-500"
              />
            </div>

            {/* Neighborhood input */}
            <div className="relative">
              <div className="absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none text-slate-400">
                <MapPin size={15} />
              </div>
              <input
                type="text"
                value={neighborhoodFilter}
                onChange={e => setNeighborhoodFilter(e.target.value)}
                placeholder="Quartier / zone..."
                className="w-full ps-9 pe-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-amber-500"
              />
            </div>

            {/* Cuisine selector */}
            <div>
              <select
                value={selectedCuisine}
                onChange={e => setSelectedCuisine(e.target.value)}
                className="w-full px-2.5 py-1.5 text-xs border border-slate-300 rounded-lg bg-white text-slate-700 focus:ring-1 focus:ring-amber-500"
              >
                <option value="all">Toutes cuisines</option>
                {availableCuisines.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Filter Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {/* Price tier */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs">
              <span className="text-[11px] font-semibold text-slate-500 px-1">Prix :</span>
              {(['all', '€', '€€', '€€€', '€€€€'] as (PriceTier | 'all')[]).map(p => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setSelectedPrice(p)}
                  className={`px-2 py-0.5 rounded text-xs transition-colors ${
                    selectedPrice === p 
                      ? 'bg-amber-600 text-white font-bold' 
                      : 'text-slate-700 hover:bg-white'
                  }`}
                >
                  {p === 'all' ? 'Tous' : p}
                </button>
              ))}
            </div>

            {/* Vegetarian filter */}
            <div className="flex items-center gap-1 bg-emerald-50 p-1 rounded-lg text-xs border border-emerald-100">
              <Leaf size={13} className="text-emerald-700 ms-1" />
              <button
                type="button"
                onClick={() => setSelectedVegetarian(selectedVegetarian === 'all' ? 'options végétariennes' : selectedVegetarian === 'options végétariennes' ? '100% végétarien' : 'all')}
                className={`px-2 py-0.5 rounded text-xs font-medium transition-colors ${
                  selectedVegetarian === '100% végétarien'
                    ? 'bg-emerald-700 text-white'
                    : selectedVegetarian === 'options végétariennes'
                    ? 'bg-emerald-600 text-white'
                    : 'text-emerald-900 hover:bg-emerald-100'
                }`}
                title="Filtrer végétarien"
              >
                {selectedVegetarian === 'all' && 'Végétarien (Tous)'}
                {selectedVegetarian === 'options végétariennes' && 'Options végétariennes'}
                {selectedVegetarian === '100% végétarien' && '🌱 100% Végétarien'}
              </button>
            </div>

            {/* Halal filter */}
            <div className="flex items-center gap-1 bg-teal-50 p-1 rounded-lg text-xs border border-teal-100">
              <ShieldCheck size={13} className="text-teal-700 ms-1" />
              <button
                type="button"
                onClick={() => setSelectedHalal(selectedHalal === 'all' ? 'options halal' : selectedHalal === 'options halal' ? 'Halal vérifié' : 'all')}
                className={`px-2 py-0.5 rounded text-xs font-medium transition-colors ${
                  selectedHalal === 'Halal vérifié'
                    ? 'bg-teal-700 text-white'
                    : selectedHalal === 'options halal'
                    ? 'bg-teal-600 text-white'
                    : 'text-teal-900 hover:bg-teal-100'
                }`}
                title="Filtrer halal vérifié"
              >
                {selectedHalal === 'all' && 'Halal (Tous)'}
                {selectedHalal === 'options halal' && 'Options Halal'}
                {selectedHalal === 'Halal vérifié' && '✓ Halal Vérifié'}
              </button>
            </div>

            {/* Reset button */}
            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="text-xs text-rose-600 hover:text-rose-800 underline ms-auto"
              >
                Réinitialiser filtres
              </button>
            )}
          </div>
        </div>

        {/* Restaurant cards scroll list */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1 bg-slate-50 space-y-3">
          {filteredRestaurants.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {filteredRestaurants.map(r => (
                <div 
                  key={r.id} 
                  className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Title, Cuisine & Price */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-slate-900 text-base leading-snug">
                          {r.name}
                        </h4>
                        <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                          <MapPin size={12} className="text-slate-400 flex-shrink-0" />
                          <span className="truncate">{r.address}</span>
                          {r.district && (
                            <span className="font-semibold text-slate-700">({r.district})</span>
                          )}
                        </p>
                      </div>
                      <div className="text-end flex-shrink-0">
                        <span className="font-bold text-sm text-slate-800 bg-slate-100 px-2 py-0.5 rounded">
                          {r.priceRange}
                        </span>
                        <p className="text-[10px] text-slate-500 mt-0.5">{r.priceIndicative}</p>
                      </div>
                    </div>

                    {/* Cuisine & Rating */}
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 text-xs">
                      <span className="font-medium text-amber-800 bg-amber-50 px-2 py-0.5 rounded text-[11px]">
                        {r.cuisine}
                      </span>
                      <div className="flex items-center gap-1 text-slate-700">
                        <Star size={13} className="fill-amber-400 text-amber-400" />
                        <span className="font-bold text-xs">{r.rating}/10</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                      {r.description}
                    </p>

                    {/* Specialties */}
                    {r.specialties && r.specialties.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {r.specialties.map(spec => (
                          <span key={spec} className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                            {spec}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Badges and Verification Footer */}
                  <div className="mt-3 pt-2.5 border-t border-slate-100 space-y-1.5">
                    {/* Dietary Statuses */}
                    <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
                      {/* Vegetarian Status */}
                      {r.dietary.vegetarian === '100% végétarien' ? (
                        <span className="inline-flex items-center gap-1 font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                          <Leaf size={11} /> 100% Végétarien
                        </span>
                      ) : r.dietary.vegetarian === 'options végétariennes' ? (
                        <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          <Leaf size={11} /> Options végétariennes
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full text-[10px]">
                          <HelpCircle size={10} /> Végétarien : non vérifié
                        </span>
                      )}

                      {/* Halal Status */}
                      {r.dietary.halal === 'Halal vérifié' || r.halal_verifie ? (
                        <span className="inline-flex items-center gap-1 font-semibold text-teal-800 bg-teal-100 px-2 py-0.5 rounded-full">
                          <ShieldCheck size={11} /> Halal vérifié {r.halalVerificationDate ? `• ${r.halalVerificationDate}` : ''}
                        </span>
                      ) : r.dietary.halal === 'options halal' ? (
                        <span className="inline-flex items-center gap-1 text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200">
                          <ShieldCheck size={11} /> Options halal vérifiées
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full text-[10px]">
                          <HelpCircle size={10} /> Halal : non vérifié
                        </span>
                      )}
                    </div>

                    {/* Metadata Verification Date */}
                    <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                      <span className="flex items-center gap-1">
                        <CheckCircle2 size={11} className="text-emerald-600" />
                        Données vérifiées le {r.verificationDate}
                      </span>
                      {r.district && (
                        <span className="text-slate-500 font-medium">Secteur : {r.district}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
              <AlertCircle size={36} className="text-slate-300 mx-auto mb-2" />
              <h4 className="font-semibold text-slate-700">Aucun restaurant ne correspond à ces critères</h4>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                Modifiez vos filtres de cuisine, de prix ou de critères alimentaires pour afficher davantage d'établissements.
              </p>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-3 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs rounded-lg transition-colors"
                >
                  Effacer les filtres
                </button>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-white border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
          <span>{filteredRestaurants.length} restaurant(s) affiché(s) sur {cityRestaurants.length}</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-900 text-white rounded-lg font-medium transition-colors cursor-pointer"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
