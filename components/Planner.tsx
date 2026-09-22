import React, { useState, useEffect, useCallback } from 'react';
import type { City, Activity, Hotel, TripOptions, CustomActivity, ScheduledActivityInfo } from '../types';
import useTranslation from '../hooks/useTranslation';
import { searchActivities } from '../services/geminiService';
import ActivityList from './planner/ActivityList';
import HotelSelector from './planner/HotelSelector';
import OptionsPanel from './planner/OptionsPanel';
import CustomActivityModal from './planner/CustomActivityModal';
import ScheduleActivityModal from './planner/ScheduleActivityModal';
import { RestaurantExplorerModal } from './planner/RestaurantExplorerModal';
import TripBalanceWarning from './planner/TripBalanceWarning';
import Button from './common/Button';
import { PlaneTakeoff } from 'lucide-react';
import { cacheService } from '../services/cache';

interface PlannerProps {
    city: City;
    numberOfDays: number;
    dates: { start: Date, end: Date, arrivalTime: string, departureTime: string };
    availableActivities: Activity[];
    setAvailableActivities: React.Dispatch<React.SetStateAction<Activity[]>>;
    selectedActivityIds: Set<string>;
    setSelectedActivityIds: React.Dispatch<React.SetStateAction<Set<string>>>;
    customActivities: CustomActivity[];
    setCustomActivities: React.Dispatch<React.SetStateAction<CustomActivity[]>>;
    scheduledActivities: Record<string, ScheduledActivityInfo>;
    setScheduledActivities: React.Dispatch<React.SetStateAction<Record<string, ScheduledActivityInfo>>>;
    selectedHotel: Hotel | null;
    setSelectedHotel: React.Dispatch<React.SetStateAction<Hotel | null>>;
    tripOptions: TripOptions;
    setTripOptions: React.Dispatch<React.SetStateAction<TripOptions>>;
    onGeneratePlan: () => void;
    isLoading: boolean;
}

const Planner: React.FC<PlannerProps> = ({
    city,
    numberOfDays,
    dates,
    availableActivities,
    setAvailableActivities,
    selectedActivityIds,
    setSelectedActivityIds,
    customActivities,
    setCustomActivities,
    scheduledActivities,
    setScheduledActivities,
    selectedHotel,
    setSelectedHotel,
    tripOptions,
    setTripOptions,
    onGeneratePlan,
    isLoading,
}) => {
    const { t, language } = useTranslation();
    const [isCustomActivityModalOpen, setIsCustomActivityModalOpen] = useState(false);
    const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
    const [isRestaurantModalOpen, setIsRestaurantModalOpen] = useState(false);
    const [activityToSchedule, setActivityToSchedule] = useState<Activity | CustomActivity | null>(null);
    const [isActivitiesLoading, setIsActivitiesLoading] = useState(false);
    const [warningMessage, setWarningMessage] = useState<string | null>(null);

    useEffect(() => {
        const fetchActivities = async () => {
            if (city) {
                const cacheKey = `activities_${city.id}_${language}`;
                const cachedActivities = cacheService.get<Activity[]>(cacheKey);
                
                if (cachedActivities) {
                    setAvailableActivities(cachedActivities);
                    return;
                }

                setIsActivitiesLoading(true);
                try {
                    const activities = await searchActivities(city, language);
                    cacheService.set(cacheKey, activities);
                    setAvailableActivities(activities);
                } catch(e) {
                    console.error("Error fetching activities", e);
                } finally {
                    setIsActivitiesLoading(false);
                }
            }
        };
        fetchActivities();
    }, [city, setAvailableActivities, language]);

    useEffect(() => {
        const calculateSmartCapacity = () => {
            if (numberOfDays <= 0 || !tripOptions.maxActivitiesPerDay) return 0;

            const arrivalHour = parseInt(dates.arrivalTime.split(':')[0], 10);
            const departureHour = parseInt(dates.departureTime.split(':')[0], 10);
            const dayStartHour = tripOptions.startTime;
            const dayEndHour = tripOptions.endTime;
            const maxPerDay = tripOptions.maxActivitiesPerDay;

            const fullDayDuration = dayEndHour - dayStartHour;
            if (fullDayDuration <= 0) return 0;

            if (numberOfDays === 1) {
                const start = Math.max(arrivalHour, dayStartHour);
                const end = Math.min(departureHour, dayEndHour);
                const availableDuration = Math.max(0, end - start);
                return Math.round((availableDuration / fullDayDuration) * maxPerDay);
            }

            // Arrival day
            const arrivalStart = Math.max(arrivalHour, dayStartHour);
            const arrivalAvailableDuration = Math.max(0, dayEndHour - arrivalStart);
            const arrivalCapacity = Math.round((arrivalAvailableDuration / fullDayDuration) * maxPerDay);

            // Departure day
            const departureEnd = Math.min(departureHour, dayEndHour);
            const departureAvailableDuration = Math.max(0, departureEnd - dayStartHour);
            const departureCapacity = Math.round((departureAvailableDuration / fullDayDuration) * maxPerDay);

            // Full days in between
            const fullDaysCount = numberOfDays - 2;
            const fullDaysCapacity = fullDaysCount > 0 ? fullDaysCount * maxPerDay : 0;
            
            return arrivalCapacity + departureCapacity + fullDaysCapacity;
        };

        const maxCapacity = calculateSmartCapacity();
        const selectedCount = selectedActivityIds.size;

        if (selectedCount > 0 && numberOfDays > 0) {
            if (selectedCount > maxCapacity) {
                const message = t('warning_too_many_activities')
                    .replace('{selectedCount}', selectedCount.toString())
                    .replace('{maxCapacity}', maxCapacity.toString());
                setWarningMessage(message);
            } else if (selectedCount < numberOfDays) {
                const message = t('warning_too_few_activities')
                    .replace('{selectedCount}', selectedCount.toString())
                    .replace('{dayCount}', numberOfDays.toString());
                setWarningMessage(message);
            } else {
                setWarningMessage(null);
            }
        } else {
            setWarningMessage(null);
        }
    }, [selectedActivityIds.size, numberOfDays, tripOptions, dates.arrivalTime, dates.departureTime, t]);

    const handleToggleActivity = useCallback((id: string) => {
        setSelectedActivityIds(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
                // Also remove schedule if deselected
                setScheduledActivities(current => {
                    const newSchedules = {...current};
                    delete newSchedules[id];
                    return newSchedules;
                });
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    }, [setSelectedActivityIds, setScheduledActivities]);

    const handleAddCustomActivity = (activity: CustomActivity) => {
        setCustomActivities(prev => [...prev, activity]);
        setSelectedActivityIds(prev => new Set(prev).add(activity.id));
    };

    const handleOpenScheduleModal = (activity: Activity | CustomActivity) => {
        setActivityToSchedule(activity);
        setIsScheduleModalOpen(true);
    };
    
    const handleSaveSchedule = (activityId: string, schedule: ScheduledActivityInfo | null) => {
        setScheduledActivities(prev => {
            const newSchedules = { ...prev };
            if (schedule) {
                newSchedules[activityId] = schedule;
            } else {
                delete newSchedules[activityId];
            }
            return newSchedules;
        });
        setIsScheduleModalOpen(false);
        setActivityToSchedule(null);
    };

    const allActivities = [...availableActivities, ...customActivities];
    
    const buttonText = selectedActivityIds.size > 0
    ? `${t('generate_plan')} (${selectedActivityIds.size} ${selectedActivityIds.size > 1 ? t('activity_plural') : t('activity_singular')})`
    : t('generate_plan');


    return (
        <div className="space-y-8">
             <div className="text-center">
                <h2 className="text-3xl font-bold text-slate-800">{t('step2_title')}</h2>
                <p className="text-slate-600 mt-1">
                    {city.name}, {city.country} - {numberOfDays} {t('days')}
                </p>
            </div>

            {warningMessage && (
                <TripBalanceWarning
                    message={warningMessage}
                    onDismiss={() => setWarningMessage(null)}
                />
            )}
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2">
                    <ActivityList
                        activities={allActivities}
                        selectedIds={selectedActivityIds}
                        onToggleActivity={handleToggleActivity}
                        onAddCustomActivity={() => setIsCustomActivityModalOpen(true)}
                        onScheduleActivity={handleOpenScheduleModal}
                        scheduledActivities={scheduledActivities}
                        isLoading={isActivitiesLoading}
                    />
                </div>
                <div className="space-y-8">
                    <HotelSelector
                        city={city}
                        selectedHotel={selectedHotel}
                        setSelectedHotel={setSelectedHotel}
                        language={language}
                    />
                    <OptionsPanel 
                        options={tripOptions} 
                        setOptions={setTripOptions} 
                        onOpenRestaurants={() => setIsRestaurantModalOpen(true)}
                    />
                </div>
            </div>
            <div className="pt-6 border-t flex justify-center">
                 <Button 
                    onClick={onGeneratePlan} 
                    size="lg" 
                    disabled={isLoading || selectedActivityIds.size === 0}
                    className="relative overflow-hidden"
                >
                    {isLoading ? (
                        <>
                            <PlaneTakeoff className="absolute inset-0 m-auto animate-fly-across text-white" size={24}/>
                            <span className="relative z-10">{t('generating_plan')}</span>
                        </>
                    ) : buttonText}
                </Button>
            </div>
            
            <CustomActivityModal
                isOpen={isCustomActivityModalOpen}
                onClose={() => setIsCustomActivityModalOpen(false)}
                onAddActivity={handleAddCustomActivity}
                city={city}
            />

            <ScheduleActivityModal
                isOpen={isScheduleModalOpen}
                onClose={() => setIsScheduleModalOpen(false)}
                onSave={handleSaveSchedule}
                activity={activityToSchedule}
                tripDates={dates}
                existingSchedule={activityToSchedule ? scheduledActivities[activityToSchedule.id] : undefined}
            />

            <RestaurantExplorerModal
                isOpen={isRestaurantModalOpen}
                onClose={() => setIsRestaurantModalOpen(false)}
                city={city}
            />

        </div>
    );
};

export default Planner;