import React, { useState } from 'react';
import type { CustomActivity, ActivityType, City, Coordinates } from '../../types';
import useTranslation from '../../hooks/useTranslation';
import Modal from '../common/Modal';
import Button from '../common/Button';
import { geocodeAddress } from '../../services/geminiService';
import { Loader } from 'lucide-react';
import { cacheService } from '../../services/cache';

interface CustomActivityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddActivity: (activity: CustomActivity) => void;
  city: City;
}

const activityTypes: ActivityType[] = ['museum', 'restaurant', 'monument', 'park', 'shopping', 'show', 'other'];

const CustomActivityModal: React.FC<CustomActivityModalProps> = ({ isOpen, onClose, onAddActivity, city }) => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [type, setType] = useState<ActivityType>('other');
  const [duration, setDuration] = useState(60);
  const [description, setDescription] = useState('');
  const [isGeocoding, setIsGeocoding] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !address) return;
    
    setIsGeocoding(true);
    
    const cacheKey = `geocode_${address}_${city.name}_${city.country}`;
    let coords = cacheService.get<Coordinates | null>(cacheKey);

    if (coords === undefined) {
        coords = await geocodeAddress(address, city.name, city.country);
        cacheService.set(cacheKey, coords);
    }
    
    setIsGeocoding(false);

    if (!coords) {
        // In a real app, show an error to the user
        alert("Could not find coordinates for this address. Please try again.");
        return;
    }

    const newActivity: CustomActivity = {
      id: `custom-${Date.now()}`,
      name,
      address,
      type,
      duration,
      description,
      coordinates: coords,
    };
    onAddActivity(newActivity);
    onClose();
    // Reset form
    setName('');
    setAddress('');
    setType('other');
    setDuration(60);
    setDescription('');
  };
  
  const inputClasses = "mt-1 block w-full border border-slate-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500";

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={t('custom_activity_modal_title')}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">{t('activity_name')}</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} required className={inputClasses} disabled={isGeocoding} />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">{t('address')}</label>
          <input type="text" value={address} onChange={e => setAddress(e.target.value)} required className={inputClasses} disabled={isGeocoding} />
        </div>
        <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-medium text-slate-700">{t('activity_type')}</label>
                <select value={type} onChange={e => setType(e.target.value as ActivityType)} className={inputClasses} disabled={isGeocoding}>
                    {activityTypes.map(t_val => <option key={t_val} value={t_val}>{t(t_val)}</option>)}
                </select>
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-700">{t('duration_minutes')}</label>
                <input type="number" value={duration} onChange={e => setDuration(parseInt(e.target.value, 10))} min="15" step="15" required className={inputClasses} disabled={isGeocoding} />
            </div>
        </div>
         <div>
          <label className="block text-sm font-medium text-slate-700">{t('description')}</label>
          <textarea value={description} onChange={e => setDescription(e.target.value)} rows={3} className={inputClasses} disabled={isGeocoding} />
        </div>
        <div className="flex justify-end gap-4 pt-4">
          <Button type="button" variant="secondary" onClick={onClose} disabled={isGeocoding}>{t('cancel')}</Button>
          <Button type="submit" disabled={isGeocoding}>
            {isGeocoding && <Loader className="animate-spin me-2" size={16}/>}
            {t('add')}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default CustomActivityModal;