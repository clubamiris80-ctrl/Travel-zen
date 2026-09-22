import React, { useState, useMemo } from 'react';
import useTranslation from '../../hooks/useTranslation';
import type { ParkingCategory, ParkingFilters, ParkingLot } from '../../data/parking/types';
import { queryParkings, getAllParkings } from '../../data/parking/parkingDatabase';
import { ParkingLotCard } from './ParkingLotCard';
import {
  Search,
  Plane,
  Train,
  Building2,
  Layers,
  MapPin,
  X,
  SlidersHorizontal,
  RotateCcw,
  ShieldCheck,
  Zap,
  Bus,
  Car,
  Clock,
  Key,
  Accessibility,
  Check,
  ArrowUpDown
} from 'lucide-react';

interface ParkingSearchProps {
  target: 'airport' | 'train_station' | 'city_center' | 'all';
  onBackToParkingMenu: () => void;
}

export const ParkingSearch: React.FC<ParkingSearchProps> = ({ target: initialTarget }) => {
  const { t } = useTranslation();

  // Active category filter
  const [selectedCategory, setSelectedCategory] = useState<ParkingCategory>(initialTarget);

  // Search input query
  const [query, setQuery] = useState('');

  // Filters state
  const [showFilters, setShowFilters] = useState(false);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [maxDistance, setMaxDistance] = useState<number | undefined>(undefined);
  const [onlyCovered, setOnlyCovered] = useState(false);
  const [shuttleOnly, setShuttleOnly] = useState(false);
  const [valetOnly, setValetOnly] = useState(false);
  const [electricOnly, setElectricOnly] = useState(false);
  const [open24_7Only, setOpen24_7Only] = useState(false);
  const [freeCancellationOnly, setFreeCancellationOnly] = useState(false);
  const [keepKeysOnly, setKeepKeysOnly] = useState(false);
  const [pmrOnly, setPmrOnly] = useState(false);
  const [selectedSource, setSelectedSource] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'recommended' | 'price_asc' | 'price_desc' | 'distance_asc' | 'name_asc'>('recommended');

  // Popular cities for quick 1-click filter
  const suggestedCities = [
    'Paris',
    'Lyon',
    'Marseille',
    'Nice',
    'Bordeaux',
    'Toulouse',
    'Lille',
    'Strasbourg',
    'Nantes',
    'Montpellier',
    'Bruxelles',
    'Genève',
    'Londres',
    'Rome',
    'Madrid',
    'Barcelone',
    'New York',
    'Tokyo',
    'Dubaï',
    'Marrakech'
  ];

  // Count active filters
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (maxPrice !== undefined) count++;
    if (maxDistance !== undefined) count++;
    if (onlyCovered) count++;
    if (shuttleOnly) count++;
    if (valetOnly) count++;
    if (electricOnly) count++;
    if (open24_7Only) count++;
    if (freeCancellationOnly) count++;
    if (keepKeysOnly) count++;
    if (pmrOnly) count++;
    if (selectedSource !== 'all') count++;
    if (sortBy !== 'recommended') count++;
    return count;
  }, [
    maxPrice,
    maxDistance,
    onlyCovered,
    shuttleOnly,
    valetOnly,
    electricOnly,
    open24_7Only,
    freeCancellationOnly,
    keepKeysOnly,
    pmrOnly,
    selectedSource,
    sortBy
  ]);

  const handleResetFilters = () => {
    setMaxPrice(undefined);
    setMaxDistance(undefined);
    setOnlyCovered(false);
    setShuttleOnly(false);
    setValetOnly(false);
    setElectricOnly(false);
    setOpen24_7Only(false);
    setFreeCancellationOnly(false);
    setKeepKeysOnly(false);
    setPmrOnly(false);
    setSelectedSource('all');
    setSortBy('recommended');
  };

  // Compile filters for queryParkings
  const compiledFilters: ParkingFilters = useMemo(() => {
    return {
      maxDailyPrice: maxPrice,
      maxDistanceKm: maxDistance,
      onlyCovered: onlyCovered || undefined,
      shuttleOnly: shuttleOnly || undefined,
      valetOnly: valetOnly || undefined,
      electricChargingOnly: electricOnly || undefined,
      open24_7Only: open24_7Only || undefined,
      freeCancellationOnly: freeCancellationOnly || undefined,
      keepKeysOnly: keepKeysOnly || undefined,
      pmrOnly: pmrOnly || undefined,
      source: selectedSource !== 'all' ? selectedSource : undefined,
      sortBy
    };
  }, [
    maxPrice,
    maxDistance,
    onlyCovered,
    shuttleOnly,
    valetOnly,
    electricOnly,
    open24_7Only,
    freeCancellationOnly,
    keepKeysOnly,
    pmrOnly,
    selectedSource,
    sortBy
  ]);

  // Execute unified offline query
  const results: ParkingLot[] = useMemo(() => {
    return queryParkings({
      query: query.trim(),
      category: selectedCategory,
      filters: compiledFilters
    });
  }, [query, selectedCategory, compiledFilters]);

  return (
    <div className="space-y-6">
      {/* Category Tabs: Aéroport, Gare, Centre-ville, Tous */}
      <div className="bg-slate-100 p-1.5 rounded-2xl flex flex-wrap max-w-2xl mx-auto border border-slate-200 shadow-2xs">
        <button
          onClick={() => setSelectedCategory('airport')}
          className={`flex-1 min-w-[120px] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-medium text-xs sm:text-sm transition-all ${
            selectedCategory === 'airport'
              ? 'bg-white text-sky-700 shadow-sm font-bold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Plane size={16} className={selectedCategory === 'airport' ? 'text-sky-600' : 'text-slate-400'} />
          <span>Aéroports</span>
        </button>

        <button
          onClick={() => setSelectedCategory('train_station')}
          className={`flex-1 min-w-[120px] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-medium text-xs sm:text-sm transition-all ${
            selectedCategory === 'train_station'
              ? 'bg-white text-indigo-700 shadow-sm font-bold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Train size={16} className={selectedCategory === 'train_station' ? 'text-indigo-600' : 'text-slate-400'} />
          <span>Gares</span>
        </button>

        <button
          onClick={() => setSelectedCategory('city_center')}
          className={`flex-1 min-w-[120px] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-medium text-xs sm:text-sm transition-all ${
            selectedCategory === 'city_center'
              ? 'bg-white text-emerald-700 shadow-sm font-bold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Building2 size={16} className={selectedCategory === 'city_center' ? 'text-emerald-600' : 'text-slate-400'} />
          <span>Centres-Villes</span>
        </button>

        <button
          onClick={() => setSelectedCategory('all')}
          className={`flex-1 min-w-[120px] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-medium text-xs sm:text-sm transition-all ${
            selectedCategory === 'all'
              ? 'bg-white text-slate-900 shadow-sm font-bold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Layers size={16} className={selectedCategory === 'all' ? 'text-slate-700' : 'text-slate-400'} />
          <span>Tous</span>
        </button>
      </div>

      {/* Offline Status & Sources Banner */}
      <div className="bg-sky-50/80 border border-sky-200/80 rounded-xl p-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-sky-900 max-w-3xl mx-auto">
        <div className="flex items-center gap-2">
          <ShieldCheck size={16} className="text-sky-600 shrink-0" />
          <span>
            <strong>Base de données 100% Locale & Hors-Ligne</strong> : données vérifiées d'infrastructures officielles, municipales et des grands gestionnaires (Indigo, EFFIA, Q-Park, APCOA, Saba, Interparking).
          </span>
        </div>
        <div className="shrink-0 text-slate-500 font-medium">
          {getAllParkings().length} parkings disponibles
        </div>
      </div>

      {/* Search Bar + Filter Toggle */}
      <div className="max-w-3xl mx-auto space-y-2">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="h-5 w-5 text-slate-400 absolute top-1/2 -translate-y-1/2 start-3.5 pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher par ville, aéroport (ex: CDG, Orly), gare ou nom de parking..."
              className="w-full ps-11 pe-10 py-3.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 bg-white text-slate-800 shadow-sm text-sm sm:text-base placeholder:text-slate-400"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute top-1/2 -translate-y-1/2 end-3 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                title="Effacer"
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* Filter button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-3.5 rounded-xl border text-sm font-semibold transition-all shadow-sm ${
              activeFiltersCount > 0
                ? 'bg-sky-600 text-white border-sky-600 hover:bg-sky-700'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
            }`}
          >
            <SlidersHorizontal size={17} />
            <span className="hidden sm:inline">Filtres</span>
            {activeFiltersCount > 0 && (
              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-white text-sky-700 font-bold text-xs">
                {activeFiltersCount}
              </span>
            )}
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        {!query && (
          <div className="pt-1 flex items-center gap-2 overflow-x-auto pb-1 text-xs text-slate-600 scrollbar-none">
            <span className="shrink-0 font-medium text-slate-400">Villes :</span>
            {suggestedCities.map((city) => (
              <button
                key={city}
                onClick={() => setQuery(city)}
                className="shrink-0 px-2.5 py-1 bg-white hover:bg-sky-50 hover:text-sky-700 text-slate-700 rounded-full border border-slate-200 transition-colors"
              >
                {city}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* FILTER PANEL */}
      {showFilters && (
        <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h5 className="font-bold text-slate-800 text-sm flex items-center gap-2">
              <SlidersHorizontal size={16} className="text-sky-600" />
              <span>Filtres de recherche avancés</span>
              {activeFiltersCount > 0 && (
                <span className="text-xs bg-sky-100 text-sky-800 px-2 py-0.5 rounded-full font-semibold">
                  {activeFiltersCount} actif(s)
                </span>
              )}
            </h5>

            {activeFiltersCount > 0 && (
              <button
                onClick={handleResetFilters}
                className="text-xs font-semibold text-rose-600 hover:text-rose-700 flex items-center gap-1 hover:underline"
              >
                <RotateCcw size={13} />
                <span>Réinitialiser les filtres</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            {/* 1. Prix Max par jour */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1.5">
                Prix max journalier
              </label>
              <div className="grid grid-cols-4 gap-1">
                {[
                  { label: 'Tous', val: undefined },
                  { label: '<15€', val: 15 },
                  { label: '<25€', val: 25 },
                  { label: '<35€', val: 35 }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMaxPrice(item.val)}
                    className={`py-1.5 px-2 rounded-lg border text-center font-medium transition-colors ${
                      maxPrice === item.val
                        ? 'bg-sky-600 text-white border-sky-600 font-bold'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Gestionnaire / Opérateur */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1.5">
                Gestionnaire / Opérateur
              </label>
              <select
                value={selectedSource}
                onChange={(e) => setSelectedSource(e.target.value)}
                className="w-full py-1.5 px-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium focus:ring-1 focus:ring-sky-500"
              >
                <option value="all">Tous les gestionnaires</option>
                <option value="Officiel">Parkings Officiels</option>
                <option value="Municipal">Parkings Municipaux</option>
                <option value="Indigo">Indigo</option>
                <option value="EFFIA">EFFIA</option>
                <option value="Q-Park">Q-Park</option>
                <option value="APCOA">APCOA</option>
                <option value="Saba">Saba</option>
                <option value="Interparking">Interparking</option>
                <option value="Blue Valet">Blue Valet</option>
              </select>
            </div>

            {/* 3. Tri */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1.5 flex items-center gap-1">
                <ArrowUpDown size={12} />
                <span>Trier par</span>
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full py-1.5 px-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium focus:ring-1 focus:ring-sky-500"
              >
                <option value="recommended">Recommandés (Top Offres)</option>
                <option value="price_asc">Prix le plus bas d'abord</option>
                <option value="price_desc">Prix le plus haut d'abord</option>
                <option value="distance_asc">Distance la plus proche</option>
                <option value="name_asc">Nom alphabétique</option>
              </select>
            </div>
          </div>

          {/* Feature Checkbox Chips */}
          <div className="pt-2 border-t border-slate-100">
            <div className="font-semibold text-slate-700 text-xs mb-2">Services et critères indispensables :</div>
            <div className="flex flex-wrap gap-2 text-xs">
              <label className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border cursor-pointer select-none transition-colors ${
                onlyCovered ? 'bg-sky-50 text-sky-800 border-sky-300 font-semibold' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}>
                <input
                  type="checkbox"
                  checked={onlyCovered}
                  onChange={(e) => setOnlyCovered(e.target.checked)}
                  className="hidden"
                />
                <Building2 size={14} />
                <span>Couvert / Souterrain</span>
                {onlyCovered && <Check size={12} className="text-sky-600" />}
              </label>

              <label className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border cursor-pointer select-none transition-colors ${
                shuttleOnly ? 'bg-sky-50 text-sky-800 border-sky-300 font-semibold' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}>
                <input
                  type="checkbox"
                  checked={shuttleOnly}
                  onChange={(e) => setShuttleOnly(e.target.checked)}
                  className="hidden"
                />
                <Bus size={14} />
                <span>Navette aéroport gratuite</span>
                {shuttleOnly && <Check size={12} className="text-sky-600" />}
              </label>

              <label className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border cursor-pointer select-none transition-colors ${
                valetOnly ? 'bg-sky-50 text-sky-800 border-sky-300 font-semibold' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}>
                <input
                  type="checkbox"
                  checked={valetOnly}
                  onChange={(e) => setValetOnly(e.target.checked)}
                  className="hidden"
                />
                <Car size={14} />
                <span>Service Voiturier</span>
                {valetOnly && <Check size={12} className="text-sky-600" />}
              </label>

              <label className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border cursor-pointer select-none transition-colors ${
                electricOnly ? 'bg-sky-50 text-sky-800 border-sky-300 font-semibold' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}>
                <input
                  type="checkbox"
                  checked={electricOnly}
                  onChange={(e) => setElectricOnly(e.target.checked)}
                  className="hidden"
                />
                <Zap size={14} />
                <span>Borne de recharge électrique</span>
                {electricOnly && <Check size={12} className="text-sky-600" />}
              </label>

              <label className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border cursor-pointer select-none transition-colors ${
                open24_7Only ? 'bg-sky-50 text-sky-800 border-sky-300 font-semibold' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}>
                <input
                  type="checkbox"
                  checked={open24_7Only}
                  onChange={(e) => setOpen24_7Only(e.target.checked)}
                  className="hidden"
                />
                <Clock size={14} />
                <span>Ouvert 24h/24</span>
                {open24_7Only && <Check size={12} className="text-sky-600" />}
              </label>

              <label className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border cursor-pointer select-none transition-colors ${
                freeCancellationOnly ? 'bg-sky-50 text-sky-800 border-sky-300 font-semibold' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}>
                <input
                  type="checkbox"
                  checked={freeCancellationOnly}
                  onChange={(e) => setFreeCancellationOnly(e.target.checked)}
                  className="hidden"
                />
                <span>🛡️ Annulation Gratuite</span>
                {freeCancellationOnly && <Check size={12} className="text-sky-600" />}
              </label>

              <label className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border cursor-pointer select-none transition-colors ${
                keepKeysOnly ? 'bg-sky-50 text-sky-800 border-sky-300 font-semibold' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}>
                <input
                  type="checkbox"
                  checked={keepKeysOnly}
                  onChange={(e) => setKeepKeysOnly(e.target.checked)}
                  className="hidden"
                />
                <Key size={14} />
                <span>Garder ses clés</span>
                {keepKeysOnly && <Check size={12} className="text-sky-600" />}
              </label>

              <label className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border cursor-pointer select-none transition-colors ${
                pmrOnly ? 'bg-sky-50 text-sky-800 border-sky-300 font-semibold' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}>
                <input
                  type="checkbox"
                  checked={pmrOnly}
                  onChange={(e) => setPmrOnly(e.target.checked)}
                  className="hidden"
                />
                <Accessibility size={14} />
                <span>Accès PMR</span>
                {pmrOnly && <Check size={12} className="text-sky-600" />}
              </label>
            </div>
          </div>
        </div>
      )}

      {/* RESULTS LISTING */}
      <div className="space-y-4 pt-1">
        {/* Results Counter & Active Criteria summary */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-slate-600 px-1">
          <div>
            <span className="font-bold text-slate-900">{results.length}</span> parking(s) trouvé(s)
            {query && (
              <span>
                {' '}pour « <strong className="text-slate-800">{query}</strong> »
              </span>
            )}
            {selectedCategory !== 'all' && (
              <span className="text-slate-500">
                {' '}(rubrique{' '}
                {selectedCategory === 'airport'
                  ? 'Aéroports'
                  : selectedCategory === 'train_station'
                  ? 'Gares'
                  : 'Centres-Villes'}
                )
              </span>
            )}
          </div>

          {activeFiltersCount > 0 && (
            <button
              onClick={handleResetFilters}
              className="text-xs text-rose-600 hover:underline flex items-center gap-1"
            >
              Effacer tous les filtres ({activeFiltersCount})
            </button>
          )}
        </div>

        {/* Results Cards List */}
        {results.length > 0 ? (
          <div className="space-y-4">
            {results.slice(0, 50).map((parking) => (
              <ParkingLotCard
                key={parking.id}
                parking={parking}
                searchedCity={query}
              />
            ))}

            {results.length > 50 && (
              <div className="text-center py-4 text-sm text-slate-500">
                Affichage des 50 premiers résultats sur {results.length}. Affinez votre recherche par ville ou avec les filtres.
              </div>
            )}
          </div>
        ) : (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-10 text-center space-y-3">
            <div className="inline-flex p-3 rounded-full bg-slate-200 text-slate-600">
              <Search size={28} />
            </div>
            <h5 className="text-lg font-bold text-slate-800">Aucun parking ne correspond à vos critères</h5>
            <p className="text-slate-600 text-sm max-w-md mx-auto">
              Essayez d'élargir votre recherche, de supprimer certains filtres ou de saisir le nom d'une autre ville.
            </p>
            {activeFiltersCount > 0 && (
              <button
                onClick={handleResetFilters}
                className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-sm font-semibold transition-colors shadow-sm"
              >
                <RotateCcw size={14} />
                <span>Réinitialiser les filtres</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
