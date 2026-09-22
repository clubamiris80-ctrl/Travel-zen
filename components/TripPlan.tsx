import React, { useState, useEffect } from 'react';
import type { GeneratedPlan, DailyPlan, PlanItem, Activity, ActivityType, CustomActivity, RestaurantSuggestion, DayWeather } from '../types';
import useTranslation from '../hooks/useTranslation';
import Card from './common/Card';
import Button from './common/Button';
import { ArrowLeft, MapPin, Calendar, Users, Hotel as HotelIcon, Clock, Utensils, Footprints, TramFront, Car, Bike, Landmark, Trees, ShoppingCart, Clapperboard, Plus, Heart, Check, Coffee, ChevronDown } from 'lucide-react';
import { favoritesService } from '../services/favoritesService';
import { fetchTripWeather } from '../services/weatherService';
import { DailyWeatherPill, DailyWeatherBanner } from './WeatherBadge';

interface TripPlanProps {
    plan: GeneratedPlan;
    onBack: () => void;
}

const activityTypeIcons: { [key in ActivityType | 'custom']: React.ElementType } = {
    museum: Landmark,
    restaurant: Utensils,
    monument: Landmark,
    park: Trees,
    shopping: ShoppingCart,
    show: Clapperboard,
    other: Plus,
    custom: Plus,
};

const PlanItemComponent: React.FC<{ item: PlanItem }> = ({ item }) => {
    const { t } = useTranslation();
    
    const renderIcon = () => {
        switch(item.type) {
            case 'activity':
                const activityType = 'address' in item.details ? 'custom' : (item.details as Activity).type;
                const Icon = activityTypeIcons[activityType];
                return <div className="bg-indigo-100 text-indigo-600 rounded-full p-2"><Icon size={20} /></div>;
            case 'travel':
                const mode = (item.details as { mode: string }).mode;
                const TravelIcon = mode === 'walk' ? Footprints : mode === 'public' ? TramFront : mode === 'car' ? Car : Bike;
                 return <div className="bg-slate-100 text-slate-600 rounded-full p-2"><TravelIcon size={20} /></div>;
            case 'lunch':
                return <div className="bg-amber-100 text-amber-600 rounded-full p-2"><Utensils size={20} /></div>;
            case 'hotel':
                return <div className="bg-cyan-100 text-cyan-600 rounded-full p-2"><HotelIcon size={20} /></div>;
            case 'break':
                return <div className="bg-slate-100 text-slate-600 rounded-full p-2"><Coffee size={20} /></div>;
        }
    };
    
    const renderDetails = () => {
        switch(item.type) {
            case 'activity':
                const activity = item.details as Activity | CustomActivity;
                return (
                    <div>
                        <h4 className="font-semibold">{activity.name}</h4>
                        <p className="text-sm text-slate-600">{activity.description}</p>
                        <div className="flex items-center text-xs text-slate-500 mt-1 gap-4">
                            <span className="flex items-center"><Clock size={12} className="me-1"/>{item.duration} min</span>
                            {activity.openingHours && (
                                <span className="flex items-center">{t('opening_hours')}: {activity.openingHours}</span>
                            )}
                        </div>
                    </div>
                );
            case 'travel':
                 const travel = item.details as { mode: string, distance: number, from: string, to: string};
                 return (
                     <div>
                        <h4 className="font-semibold">{t('travel')}</h4>
                        <p className="text-sm text-slate-600">
                             {t(travel.mode as any)} ({travel.distance} km) - {item.duration} min
                        </p>
                     </div>
                 );
            case 'lunch':
                const lunchDetails = item.details as { description: string, restaurant?: RestaurantSuggestion };
                if (lunchDetails.restaurant) {
                    return (
                        <div>
                            <h4 className="font-semibold">{t('lunch_break')}</h4>
                            <div className="mt-1 p-2 bg-slate-50 rounded-md border">
                                <div className="flex flex-wrap items-center gap-2">
                                    <p className="text-sm font-semibold text-slate-900">{lunchDetails.restaurant.name}</p>
                                    {lunchDetails.restaurant.priceRange && (
                                        <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                                            {lunchDetails.restaurant.priceRange}
                                        </span>
                                    )}
                                    {lunchDetails.restaurant.isHalal && (
                                        <span className="text-xs font-medium bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full">
                                            ✓ Halal vérifié
                                        </span>
                                    )}
                                    {lunchDetails.restaurant.isVegetarian && (
                                        <span className="text-xs font-medium bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                                            🌱 Végétarien
                                        </span>
                                    )}
                                </div>
                                <p className="text-xs text-slate-600 mt-0.5">
                                    {lunchDetails.restaurant.address}
                                    {lunchDetails.restaurant.district && (
                                        <span className="text-slate-500 ms-1 font-medium">({lunchDetails.restaurant.district})</span>
                                    )}
                                </p>
                                <p className="text-xs text-slate-500 mt-0.5 capitalize">{lunchDetails.restaurant.type}</p>
                                {lunchDetails.restaurant.specialties && lunchDetails.restaurant.specialties.length > 0 && (
                                    <p className="text-[11px] text-amber-800 mt-1">
                                        Spécialités : {lunchDetails.restaurant.specialties.join(', ')}
                                    </p>
                                )}
                                {lunchDetails.restaurant.verificationDate && (
                                    <p className="text-[10px] text-emerald-700 mt-1">
                                        Données vérifiées le {lunchDetails.restaurant.verificationDate}
                                    </p>
                                )}
                            </div>
                        </div>
                    );
                }
                return <h4 className="font-semibold">{t('lunch_break')}</h4>;
            case 'hotel':
                const hotel = item.details as {name: string, action: 'departure' | 'return'};
                return <h4 className="font-semibold">{hotel.action === 'departure' ? t('hotel_departure') : t('hotel_return')}: {hotel.name}</h4>;
            case 'break':
                 const breakDetails = item.details as { description: string };
                 return <h4 className="font-semibold">{breakDetails.description}</h4>;
        }
    };

    return (
         <div className="flex items-start space-x-4 rtl:space-x-reverse relative">
            <div className="w-16 text-right rtl:text-left flex-shrink-0">
                <p className="font-bold text-slate-800 text-base mt-1">{item.startTime}</p>
            </div>
            <div className="flex-shrink-0 z-10">
                {renderIcon()}
            </div>
            <div className="flex-1 pt-1 pb-8">
                {renderDetails()}
            </div>
        </div>
    );
};


const DailyPlanComponent: React.FC<{ dailyPlan: DailyPlan; index: number; weather?: DayWeather }> = ({ dailyPlan, index, weather }) => {
    const [isOpen, setIsOpen] = useState(index === 0);

    return (
        <Card>
            <button
                className="w-full text-left rtl:text-right p-6 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls={`plan-day-${dailyPlan.day}`}
            >
                <div className="flex justify-between items-center gap-3">
                    <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl font-bold">{dailyPlan.date}</h3>
                        {weather && <DailyWeatherPill weather={weather} />}
                    </div>
                    <ChevronDown className={`transform transition-transform duration-300 text-slate-400 shrink-0 ${isOpen ? 'rotate-180' : ''}`} size={24} />
                </div>
            </button>
            {isOpen && (
                <div id={`plan-day-${dailyPlan.day}`} className="px-6 pb-6">
                    {weather && <DailyWeatherBanner weather={weather} />}
                    <div className="relative">
                        <div className="absolute left-[5.5rem] rtl:left-auto rtl:right-[5.5rem] top-4 bottom-4 w-0.5 bg-slate-200"></div>
                        <div className="relative">
                           {dailyPlan.items.map((item, index) => (
                               <PlanItemComponent key={index} item={item} />
                           ))}
                        </div>
                    </div>
                </div>
            )}
        </Card>
    );
};

const TripPlan: React.FC<TripPlanProps> = ({ plan, onBack }) => {
    const { t, language } = useTranslation();
    const [isSaved, setIsSaved] = useState(false);
    const [weatherByDate, setWeatherByDate] = useState<Record<string, DayWeather>>({});

    useEffect(() => {
        setIsSaved(favoritesService.isFavorite(plan.id));
    }, [plan.id]);

    useEffect(() => {
        let isMounted = true;

        const loadWeather = async () => {
            if (!plan.city?.coordinates) return;

            const dateStrings: string[] = plan.days.map((d, idx) => {
                if (d.rawDate) return d.rawDate;
                const dt = new Date(plan.dates.start);
                dt.setDate(dt.getDate() + idx);
                const y = dt.getFullYear();
                const m = String(dt.getMonth() + 1).padStart(2, '0');
                const day = String(dt.getDate()).padStart(2, '0');
                return `${y}-${m}-${day}`;
            });

            try {
                const weatherData = await fetchTripWeather(plan.city.coordinates, dateStrings, language);
                if (isMounted) {
                    setWeatherByDate(weatherData);
                }
            } catch {
                // Weather is optional and discreet, quietly fallback
            }
        };

        loadWeather();

        return () => {
            isMounted = false;
        };
    }, [plan.city?.coordinates?.lat, plan.city?.coordinates?.lng, plan.id, language]);

    const handleSaveToFavorites = () => {
        favoritesService.addFavorite(plan);
        setIsSaved(true);
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
                <Button onClick={onBack} variant="ghost"><ArrowLeft className="me-2" size={20} />{t('edit_plan')}</Button>
                 <Button onClick={handleSaveToFavorites} variant={isSaved ? "secondary" : "primary"} disabled={isSaved}>
                    {isSaved ? <Check size={20} className="me-2" /> : <Heart size={20} className="me-2" />}
                    {isSaved ? t('saved_to_favorites') : t('save_to_favorites')}
                </Button>
            </div>
            <div className="text-center">
                <h2 className="text-3xl font-bold text-slate-800">{t('step3_title')}</h2>
                <p className="text-slate-600 mt-1">{plan.city.name}, {plan.city.country}</p>
            </div>
            <Card>
                <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">{t('trip_summary')}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="bg-slate-100 p-3 rounded-lg">
                            <Calendar className="mx-auto text-indigo-600 mb-1"/>
                            <p className="font-semibold">{plan.days.length} {t('days')}</p>
                            <p className="text-xs text-slate-600">{new Date(plan.dates.start).toLocaleDateString()} - {new Date(plan.dates.end).toLocaleDateString()}</p>
                        </div>
                        <div className="bg-slate-100 p-3 rounded-lg">
                            <Users className="mx-auto text-indigo-600 mb-1"/>
                            <p className="font-semibold">{plan.totalActivities}</p>
                            <p className="text-xs text-slate-600">{t('activities')}</p>
                        </div>
                        <div className="bg-slate-100 p-3 rounded-lg">
                           <HotelIcon className="mx-auto text-indigo-600 mb-1"/>
                           <p className="font-semibold truncate">{plan.hotel?.name || "N/A"}</p>
                           <p className="text-xs text-slate-600">{t('accommodation_title')}</p>
                        </div>
                         <div className="bg-slate-100 p-3 rounded-lg">
                           <MapPin className="mx-auto text-indigo-600 mb-1"/>
                           <p className="font-semibold">{plan.city.name}</p>
                           <p className="text-xs text-slate-600">Destination</p>
                        </div>
                    </div>
                     {plan.transportationApps && plan.transportationApps.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-slate-200">
                            <h4 className="text-sm font-semibold text-slate-700 mb-2">{t('useful_transport_apps')}</h4>
                            <div className="flex flex-wrap gap-2">
                                {plan.transportationApps.map(app => (
                                    <a 
                                        key={app.name} 
                                        href={app.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="inline-flex items-center px-3 py-1.5 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium hover:bg-indigo-200 transition"
                                    >
                                        {app.type === 'public' ? <TramFront size={16} className="me-2" /> : <Bike size={16} className="me-2" />}
                                        {app.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </Card>

            <div className="space-y-6">
                {plan.days.map((dayPlan, index) => {
                    const rawDate = dayPlan.rawDate || (() => {
                        const dt = new Date(plan.dates.start);
                        dt.setDate(dt.getDate() + index);
                        const y = dt.getFullYear();
                        const m = String(dt.getMonth() + 1).padStart(2, '0');
                        const day = String(dt.getDate()).padStart(2, '0');
                        return `${y}-${m}-${day}`;
                    })();
                    const weather = dayPlan.weather || weatherByDate[rawDate];

                    return (
                        <DailyPlanComponent
                            key={dayPlan.day}
                            dailyPlan={dayPlan}
                            index={index}
                            weather={weather}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default TripPlan;
