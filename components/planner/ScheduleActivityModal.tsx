import React, { useState, useEffect } from 'react';
import type { Activity, CustomActivity, ScheduledActivityInfo } from '../../types';
import useTranslation from '../../hooks/useTranslation';
import Modal from '../common/Modal';
import Button from '../common/Button';

interface ScheduleActivityModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (activityId: string, schedule: ScheduledActivityInfo | null) => void;
    activity: Activity | CustomActivity | null;
    tripDates: { start: Date, end: Date, arrivalTime: string, departureTime: string };
    existingSchedule?: ScheduledActivityInfo;
}

// Helper to format date to YYYY-MM-DD
const formatDateForInput = (date: Date) => {
    return date.toISOString().split('T')[0];
};

const ScheduleActivityModal: React.FC<ScheduleActivityModalProps> = ({ isOpen, onClose, onSave, activity, tripDates, existingSchedule }) => {
    const { t } = useTranslation();
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        if (isOpen && activity) {
            if (existingSchedule) {
                setDate(existingSchedule.date);
                setTime(existingSchedule.time);
            } else {
                setDate(formatDateForInput(tripDates.start));
                setTime('10:00');
            }
        }
    }, [isOpen, activity, existingSchedule, tripDates]);

    if (!activity) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(activity.id, { date, time });
    };
    
    const handleRemoveSchedule = () => {
        onSave(activity.id, null);
    }

    const minDate = formatDateForInput(tripDates.start);
    const maxDate = formatDateForInput(tripDates.end);

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={`${t('schedule_activity_modal_title')}: ${activity.name}`}>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-slate-700">{t('date')}</label>
                    <input 
                        type="date" 
                        value={date} 
                        onChange={e => setDate(e.target.value)} 
                        required 
                        min={minDate}
                        max={maxDate}
                        className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700">{t('time')}</label>
                    <input 
                        type="time" 
                        value={time} 
                        onChange={e => setTime(e.target.value)} 
                        required 
                        className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div className="flex justify-between items-center gap-4 pt-4">
                    <div>
                        {existingSchedule && (
                             <Button type="button" variant="ghost" className="text-red-600 hover:bg-red-50" onClick={handleRemoveSchedule}>{t('delete')}</Button>
                        )}
                    </div>
                    <div className="flex gap-4">
                        <Button type="button" variant="secondary" onClick={onClose}>{t('cancel')}</Button>
                        <Button type="submit">{t('schedule')}</Button>
                    </div>
                </div>
            </form>
        </Modal>
    );
};

export default ScheduleActivityModal;