import React, { useState, useEffect } from 'react';
import type { City, Hotel, HotelCategory } from '../../types';
import useTranslation from '../../hooks/useTranslation';
import { useDebounce } from '../../hooks/useDebounce';
import { searchHotels } from '../../services/geminiService';
import Card from '../common/Card';
import Button from '../common/Button';
import { Search, Loader, Star, CheckCircle, ExternalLink, MapPin, ShieldCheck, Filter } from 'lucide-react';
import { cacheService } from '../../services/cache';

interface HotelSelectorProps {
    city: City;
    selectedHotel: Hotel | null;
    setSelectedHotel: (hotel: Hotel | null) => void;
    language: string;
}

const CATEGORY_LABELS: Record<HotelCategory | 'all', string> = {
    all: 'Toutes gammes',
    budget: 'Économique',
    midscale: 'Milieu de gamme',
    upscale: 'Haut de gamme',
    luxury: 'Luxe'
};

const HotelSelector: React.FC<HotelSelectorProps> = ({ city, selectedHotel, setSelectedHotel, language }) => {
    const { t } = useTranslation();
    const [query, setQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<HotelCategory | 'all'>('all');
    const [neighborhoodFilter, setNeighborhoodFilter] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [suggestions, setSuggestions] = useState<Hotel[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isSearching, setIsSearching] = useState(true);
    const [maxPrice, setMaxPrice] = useState(600);

    const debouncedQuery = useDebounce(query, 300);
    const debouncedPrice = useDebounce(maxPrice, 300);
    const debouncedNeighborhood = useDebounce(neighborhoodFilter, 300);

    useEffect(() => {
        const fetchHotels = async () => {
            const cacheKey = `hotels_${city.id}_${debouncedQuery}_${debouncedPrice}_${selectedCategory}_${debouncedNeighborhood}_${language}`;
            const cachedHotels = cacheService.get<Hotel[]>(cacheKey);
            if (cachedHotels) {
                setSuggestions(cachedHotels);
                return;
            }

            setIsLoading(true);
            try {
                const hotels = await searchHotels(
                    city, 
                    debouncedQuery, 
                    debouncedPrice, 
                    language, 
                    {
                        category: selectedCategory !== 'all' ? selectedCategory : undefined,
                        neighborhood: debouncedNeighborhood.trim() || undefined
                    }
                );
                cacheService.set(cacheKey, hotels);
                setSuggestions(hotels);
            } catch (error) {
                console.error("Error searching hotels:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchHotels();
    }, [city, debouncedQuery, debouncedPrice, selectedCategory, debouncedNeighborhood, language]);
    
    const handleSelectHotel = (hotel: Hotel) => {
        setSelectedHotel(hotel);
        setIsSearching(false);
    };
    
    const handleReset = () => {
        setSelectedHotel(null);
        setQuery('');
        setNeighborhoodFilter('');
        setSelectedCategory('all');
        setIsSearching(true);
    };

    if (selectedHotel && !isSearching) {
        return (
             <Card>
                <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">{t('selected_hotel')}</h3>
                    <div className="flex items-start gap-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                        <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0"/>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                                <p className="font-semibold text-slate-800">{selectedHotel.name}</p>
                                <span className="font-bold text-slate-900 text-sm whitespace-nowrap">{selectedHotel.pricePerNight}€ / nuit</span>
                            </div>
                            <p className="text-sm text-slate-600 mt-0.5">{selectedHotel.address}</p>
                            {selectedHotel.district && (
                                <p className="text-xs text-sky-700 font-medium flex items-center gap-1 mt-1">
                                    <MapPin size={12} /> Quartier : {selectedHotel.district}
                                </p>
                            )}
                            <div className="flex items-center justify-between text-xs text-yellow-500 mt-2">
                                <div className="flex items-center">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} size={14} className={i < selectedHotel.stars ? 'fill-current' : 'text-slate-300'}/>
                                    ))}
                                </div>
                                {selectedHotel.category && (
                                    <span className="text-slate-600 text-xs bg-slate-100 px-2 py-0.5 rounded">
                                        {CATEGORY_LABELS[selectedHotel.category] || selectedHotel.category}
                                    </span>
                                )}
                            </div>
                            {selectedHotel.verificationDate && (
                                <p className="text-[11px] text-slate-500 mt-2 flex items-center gap-1">
                                    <ShieldCheck size={12} className="text-emerald-600" />
                                    Données vérifiées le {selectedHotel.verificationDate}
                                </p>
                            )}
                        </div>
                    </div>
                    <Button onClick={handleReset} variant="secondary" size="sm" className="w-full mt-3">{t('change')}</Button>
                </div>
            </Card>
        );
    }

    return (
        <Card>
            <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">{t('accommodation_title')}</h3>
                    <button
                        type="button"
                        onClick={() => setShowFilters(!showFilters)}
                        className={`text-xs flex items-center gap-1 px-2 py-1 rounded transition-colors ${
                            showFilters || selectedCategory !== 'all' || neighborhoodFilter
                                ? 'bg-sky-100 text-sky-700 font-semibold'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                        title="Filtres avancés"
                    >
                        <Filter size={13} />
                        Filtres
                        {(selectedCategory !== 'all' || neighborhoodFilter) && (
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-600"></span>
                        )}
                    </button>
                </div>

                {/* Main search query */}
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-slate-400" />
                    </div>
                    <input
                        type="text"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        placeholder={t('search_hotel_placeholder')}
                        className="w-full ps-9 pe-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    />
                </div>

                {/* Filters toggleable section */}
                {showFilters && (
                    <div className="p-3 bg-slate-50 rounded-lg space-y-3 text-xs border border-slate-200 animate-fadeIn">
                        {/* Category filter */}
                        <div>
                            <label className="block font-medium text-slate-700 mb-1">Gamme d'hôtel :</label>
                            <div className="grid grid-cols-2 gap-1.5">
                                {(Object.keys(CATEGORY_LABELS) as (HotelCategory | 'all')[]).map(cat => (
                                    <button
                                        key={cat}
                                        type="button"
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-2 py-1.5 rounded text-left transition-colors truncate ${
                                            selectedCategory === cat
                                                ? 'bg-sky-600 text-white font-medium'
                                                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                                        }`}
                                    >
                                        {CATEGORY_LABELS[cat]}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Neighborhood filter */}
                        <div>
                            <label className="block font-medium text-slate-700 mb-1">Quartier / Secteur :</label>
                            <input
                                type="text"
                                value={neighborhoodFilter}
                                onChange={e => setNeighborhoodFilter(e.target.value)}
                                placeholder="Ex: Centre, Marais, Baixa..."
                                className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded text-xs focus:ring-1 focus:ring-sky-500"
                            />
                        </div>
                    </div>
                )}

                {/* Max price slider */}
                <div>
                    <div className="flex justify-between items-center text-sm font-medium">
                        <span>{t('max_price_per_night')} :</span>
                        <span className="font-bold text-sky-700">{maxPrice}€</span>
                    </div>
                    <input 
                        type="range" 
                        min="40" 
                        max="800" 
                        step="10" 
                        value={maxPrice} 
                        onChange={e => setMaxPrice(parseInt(e.target.value, 10))} 
                        className="w-full mt-1 accent-sky-600"
                    />
                </div>
            </div>

            {/* Hotel suggestions list */}
            <div className="max-h-96 overflow-y-auto border-t">
                {isLoading ? (
                    <div className="p-6 text-center text-slate-500 flex items-center justify-center">
                        <Loader className="animate-spin me-2" size={18}/> Chargement des hôtels...
                    </div>
                ) : suggestions.length > 0 ? (
                    <ul>
                        {suggestions.map(hotel => (
                            <li key={hotel.id} className="border-b last:border-b-0 hover:bg-slate-50 transition-colors">
                                <div className="p-3">
                                    <div className="flex items-start justify-between gap-2">
                                        <button 
                                            onClick={() => handleSelectHotel(hotel)} 
                                            className="text-start flex-1 group cursor-pointer"
                                        >
                                            <p className="font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                                                {hotel.name}
                                            </p>
                                            <p className="text-xs text-slate-500 mt-0.5">{hotel.address}</p>
                                            {hotel.district && (
                                                <p className="text-[11px] text-sky-700 font-medium flex items-center gap-1 mt-0.5">
                                                    <MapPin size={11} /> {hotel.district}
                                                </p>
                                            )}
                                        </button>
                                        <div className="text-end flex-shrink-0">
                                            <span className="font-bold text-sm text-slate-900 block">{hotel.pricePerNight}€</span>
                                            <span className="text-[10px] text-slate-400">/ nuit</span>
                                        </div>
                                    </div>

                                    {/* Star rating & category */}
                                    <div className="flex items-center justify-between text-xs mt-2 pt-1 border-t border-slate-100">
                                        <div className="flex items-center text-yellow-500">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star key={i} size={13} className={i < hotel.stars ? 'fill-current' : 'text-slate-300'}/>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            {hotel.category && (
                                                <span className="text-[10px] uppercase font-semibold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">
                                                    {CATEGORY_LABELS[hotel.category] || hotel.category}
                                                </span>
                                            )}
                                            <button
                                                type="button"
                                                onClick={() => handleSelectHotel(hotel)}
                                                className="text-xs bg-sky-600 hover:bg-sky-700 text-white font-medium px-2 py-0.5 rounded transition-colors"
                                            >
                                                Choisir
                                            </button>
                                        </div>
                                    </div>

                                    {/* Verification metadata */}
                                    {hotel.verificationDate && (
                                        <div className="mt-1.5 text-[10px] text-slate-400 flex items-center justify-between">
                                            <span className="flex items-center gap-1">
                                                <ShieldCheck size={11} className="text-emerald-600" />
                                                Vérifié le {hotel.verificationDate}
                                            </span>
                                            {hotel.bookingUrl && (
                                                <a 
                                                    href={hotel.bookingUrl} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="hover:text-sky-600 flex items-center gap-0.5"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    Réservation <ExternalLink size={10} />
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="p-6 text-sm text-center text-slate-500">
                        <p>{t('no_hotel_selected')}</p>
                        <p className="text-xs text-slate-400 mt-1">Essayez d'augmenter le prix max ou de modifier vos filtres.</p>
                    </div>
                )}
            </div>
        </Card>
    );
};

export default HotelSelector;
