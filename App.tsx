
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import type { City, Activity, Hotel, TripOptions, GeneratedPlan, CustomActivity, ScheduledActivityInfo } from './types';
import Header from './components/Header';
import DestinationSelector from './components/DestinationSelector';
import Planner from './components/Planner';
import TripPlan from './components/TripPlan';
import ComingSoon from './components/ComingSoon';
import FavoritesPage from './components/FavoritesPage';
import TravelInfoPage from './components/TravelInfoPage';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminPasswordModal from './components/admin/AdminPasswordModal';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { generatePlan } from './services/planGenerator';
import useTranslation from './hooks/useTranslation';

type SelectedDates = {
    start: Date | null;
    end: Date | null;
    arrivalTime: string;
    departureTime: string;
};

type View = 'destination' | 'planner' | 'plan' | 'favorites' | 'comingSoon' | 'travelInfo' | 'admin';

const App: React.FC = () => {
    const { t, language } = useTranslation();
    const [view, setView] = useState<View>('destination');
    const [isAdminUnlocked, setIsAdminUnlocked] = useState<boolean>(false);
    const [isAdminModalOpen, setIsAdminModalOpen] = useState<boolean>(false);
    
    const [selectedCity, setSelectedCity] = useState<City | null>(null);
    const [selectedDates, setSelectedDates] = useState<SelectedDates>({ start: null, end: null, arrivalTime: '15:00', departureTime: '11:00' });
    const [availableActivities, setAvailableActivities] = useState<Activity[]>([]);
    const [selectedActivityIds, setSelectedActivityIds] = useState<Set<string>>(new Set());
    const [customActivities, setCustomActivities] = useState<CustomActivity[]>([]);
    const [scheduledActivities, setScheduledActivities] = useState<Record<string, ScheduledActivityInfo>>({});
    const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
    const [tripOptions, setTripOptions] = useState<TripOptions>({
        walkDistanceKm: 2,
        motorizedTransport: 'public',
        dietaryPreference: 'any',
        startTime: 9,
        endTime: 19,
        includeLunch: true,
        maxActivitiesPerDay: 4,
    });
    const [generatedPlan, setGeneratedPlan] = useState<GeneratedPlan | null>(null);
    const [viewingFavorite, setViewingFavorite] = useState<GeneratedPlan | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [view, generatedPlan, viewingFavorite]);

    const resetSelections = () => {
        setSelectedCity(null);
        setSelectedDates({ start: null, end: null, arrivalTime: '15:00', departureTime: '11:00' });
        setAvailableActivities([]);
        setSelectedActivityIds(new Set());
        setCustomActivities([]);
        setScheduledActivities({});
        setSelectedHotel(null);
        setGeneratedPlan(null);
        setViewingFavorite(null);
    };

    const handleCitySelect = useCallback((city: City, dates: { start: Date, end: Date, arrivalTime: string, departureTime: string }) => {
        resetSelections();
        setSelectedCity(city);
        setSelectedDates(dates);
        setView('planner');
    }, []);
    
    const handleGoHome = useCallback(() => {
        resetSelections();
        setView('destination');
    }, []);
    
    const determineLastView = () => {
        if (generatedPlan || viewingFavorite) return 'plan';
        if (selectedCity) return 'planner';
        return 'destination';
    };


    const handleGeneratePlan = useCallback(async () => {
        if (!selectedCity || selectedActivityIds.size === 0 || !selectedDates.start || !selectedDates.end) return;

        setIsLoading(true);
        setGeneratedPlan(null);
        
        const allActivities = [...availableActivities, ...customActivities];
        const selectedActivitiesList = allActivities.filter(activity => selectedActivityIds.has(activity.id));
        
        const plan = await generatePlan(
            selectedCity, 
            selectedDates as { start: Date, end: Date, arrivalTime: string, departureTime: string }, 
            selectedActivitiesList,
            scheduledActivities,
            selectedHotel, 
            tripOptions,
            t,
            language
        );

        setGeneratedPlan(plan);
        setIsLoading(false);
        setView('plan');
    }, [selectedCity, selectedDates, availableActivities, selectedActivityIds, customActivities, scheduledActivities, selectedHotel, tripOptions, t, language]);

    const handleBackToPlanner = useCallback(() => {
        setGeneratedPlan(null);
        setView('planner');
    }, []);

    const handleViewFavorite = (plan: GeneratedPlan) => {
        setViewingFavorite(plan);
        setView('plan');
    };

    const handleBackFromFavorite = () => {
        setViewingFavorite(null);
        setView('favorites');
    };

    const numberOfDays = useMemo(() => {
        if (selectedDates.start && selectedDates.end) {
            const startDate = new Date(selectedDates.start);
            const endDate = new Date(selectedDates.end);
            startDate.setHours(0, 0, 0, 0);
            endDate.setHours(0, 0, 0, 0);
            const diffTime = endDate.getTime() - startDate.getTime();
            if (diffTime < 0) return 1;
            const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24)) + 1;
            return diffDays > 0 ? diffDays : 1;
        }
        return 1;
    }, [selectedDates.start, selectedDates.end]);

    const renderView = () => {
        switch (view) {
            case 'destination':
                return <DestinationSelector onSelect={handleCitySelect} />;
            case 'planner':
                if (selectedCity && selectedDates.start && selectedDates.end) {
                    return (
                        <Planner
                            city={selectedCity}
                            numberOfDays={numberOfDays}
                            dates={selectedDates as { start: Date, end: Date, arrivalTime: string, departureTime: string }}
                            availableActivities={availableActivities}
                            setAvailableActivities={setAvailableActivities}
                            selectedActivityIds={selectedActivityIds}
                            setSelectedActivityIds={setSelectedActivityIds}
                            customActivities={customActivities}
                            setCustomActivities={setCustomActivities}
                            scheduledActivities={scheduledActivities}
                            setScheduledActivities={setScheduledActivities}
                            selectedHotel={selectedHotel}
                            setSelectedHotel={setSelectedHotel}
                            tripOptions={tripOptions}
                            setTripOptions={setTripOptions}
                            onGeneratePlan={handleGeneratePlan}
                            isLoading={isLoading}
                        />
                    );
                }
                setView('destination'); // Fallback
                return null;
            case 'plan':
                const planToShow = viewingFavorite || generatedPlan;
                if (planToShow) {
                    return <TripPlan plan={planToShow} onBack={viewingFavorite ? handleBackFromFavorite : handleBackToPlanner} />;
                }
                setView('planner'); // Fallback
                return null;
            case 'favorites':
                return <FavoritesPage onViewPlan={handleViewFavorite} onBack={handleGoHome} />;
            case 'comingSoon':
                return <ComingSoon onBack={() => setView(determineLastView())} />;
            case 'travelInfo':
                return <TravelInfoPage onBack={() => setView(determineLastView())} />;
            case 'admin':
                return (
                    <ErrorBoundary
                        fallbackTitle="Erreur dans le panneau d'administration"
                        fallbackMessage="Une erreur s'est produite lors de l'exécution d'une opération. Toutes vos données locales restent conservées et intactes."
                    >
                        <AdminDashboard 
                            onBack={() => setView(determineLastView())} 
                            onLock={() => {
                                setIsAdminUnlocked(false);
                                setView('destination');
                            }} 
                        />
                    </ErrorBoundary>
                );
            default:
                return <DestinationSelector onSelect={handleCitySelect} />;
        }
    };

    const handleOpenAdmin = () => {
        if (isAdminUnlocked) {
            setView('admin');
        } else {
            setIsAdminModalOpen(true);
        }
    };

    const handleAdminUnlockSuccess = () => {
        setIsAdminUnlocked(true);
        setIsAdminModalOpen(false);
        setView('admin');
    };
    
    // Determine the current step for the header progress bar
    const currentStep = useMemo(() => {
        if (view === 'destination') return 1;
        if (view === 'planner') return 2;
        if (view === 'plan') return 3;
        return 0; // No step for other views
    }, [view]);

    return (
        <div className="min-h-screen bg-slate-50">
            <Header 
                step={currentStep} 
                totalSteps={3} 
                onGoHome={handleGoHome} 
                onShowComingSoon={() => setView('comingSoon')}
                onShowFavorites={() => setView('favorites')}
                onShowTravelInfo={() => setView('travelInfo')}
            />
            <main className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
                {renderView()}
            </main>
             <footer className="text-center p-4 text-xs text-slate-400 flex items-center justify-center space-x-2">
                <span>Intelligent Travel Planner &copy; 2024</span>
                <span>&bull;</span>
                <button
                    onClick={handleOpenAdmin}
                    className="hover:text-sky-600 transition-colors underline cursor-pointer"
                    title="Accès Administrateur"
                >
                    Espace Administrateur
                </button>
            </footer>

            <AdminPasswordModal
                isOpen={isAdminModalOpen}
                onClose={() => setIsAdminModalOpen(false)}
                onSuccess={handleAdminUnlockSuccess}
            />
        </div>
    );
};

export default App;
