import React, { useState, useEffect, useCallback } from 'react';
import type { City } from '../types';
import useTranslation from '../hooks/useTranslation';
import Card from './common/Card';
import Button from './common/Button';
import { MapPin, Calendar, Loader, Clock, Globe, Compass, Send, Map, Ticket, Luggage, Camera, Plane, Sun, Palmtree, Backpack } from 'lucide-react';
import { searchCities } from '../services/geminiService';
import { useDebounce } from '../hooks/useDebounce';
import { cacheService } from '../services/cache';

interface DestinationSelectorProps {
    onSelect: (city: City, dates: { start: Date, end: Date, arrivalTime: string, departureTime: string }) => void;
}

const DestinationSelector: React.FC<DestinationSelectorProps> = ({ onSelect }) => {
    const { t, language } = useTranslation();
    const [query, setQuery] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [arrivalTime, setArrivalTime] = useState('15:00');
    const [departureTime, setDepartureTime] = useState('11:00');
    const [selectedCity, setSelectedCity] = useState<City | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [suggestions, setSuggestions] = useState<City[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const debouncedQuery = useDebounce(query, 500);

    useEffect(() => {
        const fetchCities = async () => {
            if (debouncedQuery.length <= 2) {
                setSuggestions([]);
                setIsDropdownOpen(false);
                return;
            }
            
            const cacheKey = `cities_${debouncedQuery}_${language}`;
            const cachedCities = cacheService.get<City[]>(cacheKey);
            if (cachedCities) {
                setSuggestions(cachedCities);
                setIsDropdownOpen(true);
                return;
            }

            setIsLoading(true);
            try {
                const cities = await searchCities(debouncedQuery, language);
                cacheService.set(cacheKey, cities);
                setSuggestions(cities);
                setIsDropdownOpen(true);
            } catch (error) {
                console.error("Error searching cities:", error);
            } finally {
                setIsLoading(false);
            }
        };
        
        fetchCities();

    }, [debouncedQuery, language]);

    const handleCityClick = (city: City) => {
        setSelectedCity(city);
        setQuery(`${city.name}, ${city.country}`);
        setIsDropdownOpen(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedCity && startDate && endDate) {
            // Use T00:00:00 to ensure the date is parsed in the local timezone,
            // avoiding issues where new Date('YYYY-MM-DD') is interpreted as UTC midnight.
            const start = new Date(`${startDate}T00:00:00`);
            const end = new Date(`${endDate}T00:00:00`);
            if(end >= start) {
                onSelect(selectedCity, { start, end, arrivalTime, departureTime });
            } else {
                alert("End date must be after start date.");
            }
        }
    };
    
    const inputClasses = "w-full ps-10 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white text-slate-900 placeholder-slate-500";


    return (
        <div className="max-w-2xl mx-auto relative z-10 py-16">
            {/* Decorative elements */}
            <Globe className="absolute -top-8 -left-20 h-28 w-28 text-sky-200/80 -rotate-12 pointer-events-none z-0" strokeWidth={1} />
            <Map className="absolute top-32 -left-24 h-24 w-24 text-teal-200/80 rotate-12 pointer-events-none z-0" strokeWidth={1} />
            <Camera className="absolute -bottom-8 -left-12 h-20 w-20 text-rose-200/80 rotate-6 pointer-events-none z-0" strokeWidth={1} />
            <Backpack className="absolute top-2/3 -left-20 h-20 w-20 text-cyan-200/80 rotate-[25deg] pointer-events-none z-0" strokeWidth={1} />

            <Sun className="absolute -top-12 -right-16 h-24 w-24 text-amber-200/80 rotate-12 pointer-events-none z-0" strokeWidth={1} />
            <Send className="absolute top-16 -right-20 h-20 w-20 text-pink-200/80 -rotate-12 pointer-events-none z-0" strokeWidth={1} />
            <Ticket className="absolute -top-0 -right-8 h-20 w-20 text-orange-200/80 rotate-20 pointer-events-none z-0" strokeWidth={1} />
            <Plane className="absolute top-1/3 -right-24 h-24 w-24 text-rose-200/80 -rotate-12 pointer-events-none z-0" strokeWidth={1} />
            
            <Compass className="absolute -bottom-8 -right-16 h-28 w-28 text-violet-200/80 rotate-12 pointer-events-none z-0" strokeWidth={1} />
            <Luggage className="absolute bottom-28 -right-24 h-24 w-24 text-sky-200/80 -rotate-12 pointer-events-none z-0" strokeWidth={1} />
            <Palmtree className="absolute bottom-1/3 -right-28 h-24 w-24 text-lime-200/80 rotate-6 pointer-events-none z-0" strokeWidth={1} />
            
            <Card className="relative">
                <div className="p-6 sm:p-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-800 mb-2">{t('step1_title')}</h2>
                    <p className="text-center text-slate-600 mb-8">Commencez par nous dire où et quand vous partez.</p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative">
                            <label htmlFor="city-search" className="block text-sm font-medium text-slate-700 mb-1">{t('city_search_placeholder')}</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none">
                                    <MapPin className="h-5 w-5 text-slate-400" />
                                </div>
                                 <div className="absolute inset-y-0 end-0 pe-3 flex items-center">
                                    {isLoading && <Loader className="h-5 w-5 text-slate-400 animate-spin" />}
                                </div>
                                <input
                                    type="text"
                                    id="city-search"
                                    value={query}
                                    onChange={e => {
                                        setQuery(e.target.value);
                                        setSelectedCity(null);
                                    }}
                                    className={inputClasses}
                                    placeholder={t('city_search_placeholder')}
                                    autoComplete="off"
                                />
                            </div>
                            {isDropdownOpen && suggestions.length > 0 && (
                                <ul className="absolute z-10 w-full bg-white border border-slate-200 rounded-lg mt-1 shadow-lg max-h-60 overflow-y-auto">
                                    {suggestions.map(city => (
                                        <li key={city.id}>
                                            <button type="button" onClick={() => handleCityClick(city)} className="w-full text-start px-4 py-2 hover:bg-slate-100">
                                                {city.name}, {city.country}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="start-date" className="block text-sm font-medium text-slate-700 mb-1">{t('start_date')}</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none">
                                        <Calendar className="h-5 w-5 text-slate-400" />
                                    </div>
                                    <input
                                        type="date"
                                        id="start-date"
                                        value={startDate}
                                        onChange={e => setStartDate(e.target.value)}
                                        required
                                        className={inputClasses}
                                        min={new Date().toISOString().split('T')[0]}
                                    />
                                </div>
                            </div>
                             <div>
                                <label htmlFor="arrival-time" className="block text-sm font-medium text-slate-700 mb-1">{t('arrival_time')}</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none">
                                        <Clock className="h-5 w-5 text-slate-400" />
                                    </div>
                                    <input
                                        type="time"
                                        id="arrival-time"
                                        value={arrivalTime}
                                        onChange={e => setArrivalTime(e.target.value)}
                                        required
                                        className={inputClasses}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="end-date" className="block text-sm font-medium text-slate-700 mb-1">{t('end_date')}</label>
                                 <div className="relative">
                                    <div className="absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none">
                                        <Calendar className="h-5 w-5 text-slate-400" />
                                    </div>
                                    <input
                                        type="date"
                                        id="end-date"
                                        value={endDate}
                                        onChange={e => setEndDate(e.target.value)}
                                        required
                                        className={inputClasses}
                                        min={startDate || new Date().toISOString().split('T')[0]}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="departure-time" className="block text-sm font-medium text-slate-700 mb-1">{t('departure_time')}</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none">
                                        <Clock className="h-5 w-5 text-slate-400" />
                                    </div>
                                    <input
                                        type="time"
                                        id="departure-time"
                                        value={departureTime}
                                        onChange={e => setDepartureTime(e.target.value)}
                                        required
                                        className={inputClasses}
                                    />
                                </div>
                            </div>
                        </div>

                        <Button type="submit" size="lg" className="w-full" disabled={!selectedCity || !startDate || !endDate}>
                           {t('validate_destination')}
                        </Button>
                    </form>
                </div>
            </Card>
        </div>
    );
};

export default DestinationSelector;