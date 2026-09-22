import React, { useState } from 'react';
import type { Activity, CustomActivity, ActivityType, ScheduledActivityInfo } from '../../types';
import useTranslation from '../../hooks/useTranslation';
import Card from '../common/Card';
import Button from '../common/Button';
import { Plus, Clock, Loader, ChevronDown } from 'lucide-react';

interface ActivityListProps {
    activities: (Activity | CustomActivity)[];
    selectedIds: Set<string>;
    onToggleActivity: (id: string) => void;
    onAddCustomActivity: () => void;
    onScheduleActivity: (activity: Activity | CustomActivity) => void;
    scheduledActivities: Record<string, ScheduledActivityInfo>;
    isLoading: boolean;
}

const activityTypes: ActivityType[] = ['museum', 'restaurant', 'monument', 'park', 'shopping', 'show', 'other'];

const ActivityList: React.FC<ActivityListProps> = ({
    activities,
    selectedIds,
    onToggleActivity,
    onAddCustomActivity,
    onScheduleActivity,
    scheduledActivities,
    isLoading
}) => {
    const { t } = useTranslation();
    const [filter, setFilter] = useState<ActivityType | 'all' | 'custom'>('all');

    const filteredActivities = activities.filter(a => {
        if (filter === 'all') return true;
        if (filter === 'custom') return 'address' in a;
        return a.type === filter;
    });

    return (
        <Card className="flex-1">
            <div className="p-4 border-b">
                <h3 className="text-lg font-bold">{t('activities_list')}</h3>
                <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center gap-2 overflow-x-auto pb-2">
                        <div className="relative">
                            <select
                                value={filter}
                                onChange={(e) => setFilter(e.target.value as ActivityType | 'all' | 'custom')}
                                className="bg-slate-100 border-transparent text-slate-800 rounded-lg py-2 ps-3 pe-8 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition appearance-none"
                            >
                                <option value="all">{t('all_types')}</option>
                                {activityTypes.map(type => <option key={type} value={type}>{t(type)}</option>)}
                                <option value="custom">{t('custom')}</option>
                            </select>
                            <ChevronDown size={16} className="absolute top-1/2 -translate-y-1/2 end-3 text-slate-500 pointer-events-none" />
                        </div>
                    </div>
                    <Button onClick={onAddCustomActivity} size="sm">
                        <Plus size={16} className="me-1" /> {t('add_custom_activity')}
                    </Button>
                </div>
            </div>
            <div className="p-4 max-h-[60vh] overflow-y-auto">
                {isLoading ? (
                    <div className="text-center p-8 text-slate-500 flex items-center justify-center">
                        <Loader className="animate-spin me-2" />
                        Loading activities...
                    </div>
                ) : (
                    <ul className="space-y-3">
                        {filteredActivities.map(activity => {
                            const isSelected = selectedIds.has(activity.id);
                            const schedule = scheduledActivities[activity.id];
                            const activityId = `activity-${activity.id}`;
                            return (
                                <li key={activity.id} className={`rounded-lg border transition-all ${isSelected ? 'bg-indigo-50 border-indigo-200' : 'bg-white hover:bg-slate-50'}`}>
                                    <label htmlFor={activityId} className="flex items-start gap-3 p-3 cursor-pointer">
                                        <input
                                            id={activityId}
                                            type="checkbox"
                                            checked={isSelected}
                                            onChange={() => onToggleActivity(activity.id)}
                                            className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <div className="flex-1">
                                            <h4 className="font-semibold">{activity.name}</h4>
                                            <p className="text-sm text-slate-600">{activity.description}</p>
                                            <div className="flex items-center text-xs text-slate-500 mt-1 gap-4 flex-wrap">
                                                <span>{t('duration_minutes')}: {activity.duration}</span>
                                                {activity.openingHours && (
                                                    <span className="flex items-center"><Clock size={12} className="me-1" /> {activity.openingHours}</span>
                                                )}
                                                <span className="capitalize bg-slate-100 px-1.5 py-0.5 rounded">{t('address' in activity ? 'custom' : activity.type)}</span>
                                            </div>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                onScheduleActivity(activity);
                                            }}
                                            disabled={!isSelected}
                                            className={schedule ? 'text-green-600 hover:bg-green-50' : ''}
                                        >
                                            <Clock size={16} className="me-1" />
                                            {schedule ? `${schedule.date.split('-')[2]}/${schedule.date.split('-')[1]} @ ${schedule.time}` : t('schedule')}
                                        </Button>
                                    </label>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </Card>
    );
};

export default ActivityList;