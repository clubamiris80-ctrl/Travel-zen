import React from 'react';
import type { TripOptions } from '../../types';
import useTranslation from '../../hooks/useTranslation';
import Card from '../common/Card';
import { TramFront, Car, Bike, Leaf, Moon, UtensilsCrossed, Coffee, Footprints, Zap } from 'lucide-react';

interface OptionsPanelProps {
    options: TripOptions;
    setOptions: React.Dispatch<React.SetStateAction<TripOptions>>;
    onOpenRestaurants?: () => void;
}

const OptionsPanel: React.FC<OptionsPanelProps> = ({ options, setOptions, onOpenRestaurants }) => {
    const { t } = useTranslation();

    const handleOptionChange = <K extends keyof TripOptions>(key: K, value: TripOptions[K]) => {
        setOptions(prev => ({ ...prev, [key]: value }));
    };

    return (
        <Card>
            <div className="p-4 space-y-6">
                <div>
                    <h3 className="text-lg font-bold mb-3">{t('transport_options')}</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">{t('walk_if_less_than')}: <strong>{options.walkDistanceKm} km</strong></label>
                            <input type="range" min="1" max="5" step="0.5" value={options.walkDistanceKm} onChange={e => handleOptionChange('walkDistanceKm', parseFloat(e.target.value))} className="w-full mt-1"/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">{t('motorized_if_greater_than')} {options.walkDistanceKm} km</label>
                            <div className="flex space-x-2 rtl:space-x-reverse">
                                {(['public', 'car', 'bike'] as const).map(mode => (
                                    <button key={mode} onClick={() => handleOptionChange('motorizedTransport', mode)} className={`flex-1 p-2 rounded-lg border text-sm flex flex-col items-center space-y-1 transition ${options.motorizedTransport === mode ? 'bg-indigo-100 border-indigo-500 text-indigo-800' : 'bg-white hover:bg-slate-50'}`}>
                                        {mode === 'public' && <TramFront size={20}/>}
                                        {mode === 'car' && <Car size={20}/>}
                                        {mode === 'bike' && <Bike size={20}/>}
                                        <span>{t(mode === 'public' ? 'public_transport' : mode === 'car' ? 'car_taxi' : 'e_bike')}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-bold">{t('meals_title')}</h3>
                        {onOpenRestaurants && (
                            <button
                                type="button"
                                onClick={onOpenRestaurants}
                                className="text-xs text-sky-600 hover:text-sky-800 font-semibold flex items-center gap-1 transition-colors"
                            >
                                <UtensilsCrossed size={12} />
                                Explorer restaurants
                            </button>
                        )}
                    </div>
                    <div className="flex space-x-2 rtl:space-x-reverse">
                         {(['halal', 'vegetarian', 'any'] as const).map(pref => (
                            <button key={pref} onClick={() => handleOptionChange('dietaryPreference', pref)} className={`flex-1 p-2 rounded-lg border text-sm flex flex-col items-center space-y-1 transition ${options.dietaryPreference === pref ? 'bg-indigo-100 border-indigo-500 text-indigo-800' : 'bg-white hover:bg-slate-50'}`}>
                                {pref === 'vegetarian' && <Leaf size={20} />}
                                {pref === 'halal' && <Moon size={20} />}
                                {pref === 'any' && <UtensilsCrossed size={20} />}
                                <span>{t(`dietary_${pref}`)}</span>
                            </button>
                         ))}
                    </div>
                    {onOpenRestaurants && (
                        <button
                            type="button"
                            onClick={onOpenRestaurants}
                            className="w-full mt-2.5 py-1.5 px-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5"
                        >
                            <UtensilsCrossed size={13} className="text-amber-600" />
                            Voir les restaurants locaux (Filtres cuisine, végétarien, halal)
                        </button>
                    )}
                </div>

                <div className="border-t pt-4">
                    <h3 className="text-lg font-bold mb-3">{t('max_activities_title')}</h3>
                    <div className="text-center">
                        <p className="font-bold text-2xl text-indigo-600">{options.maxActivitiesPerDay}</p>
                        <input 
                            type="range" 
                            min="1"
                            max="7" 
                            step="1" 
                            value={options.maxActivitiesPerDay} 
                            onChange={e => handleOptionChange('maxActivitiesPerDay', parseInt(e.target.value, 10))} 
                            className="w-full mt-2"
                        />
                    </div>
                </div>

                <div className="border-t pt-4">
                    <h3 className="text-lg font-bold mb-3">{t('day_schedule')}</h3>
                     <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">{t('day_start_time')}: <strong>{options.startTime}:00</strong></label>
                            <input type="range" min="6" max="12" step="1" value={options.startTime} onChange={e => handleOptionChange('startTime', parseInt(e.target.value, 10))} className="w-full mt-1"/>
                        </div>
                         <div>
                            <label className="block text-sm font-medium">{t('day_end_time')}: <strong>{options.endTime}:00</strong></label>
                            <input type="range" min="17" max="23" step="1" value={options.endTime} onChange={e => handleOptionChange('endTime', parseInt(e.target.value, 10))} className="w-full mt-1"/>
                        </div>
                        <div className="flex items-center">
                           <input type="checkbox" id="include-lunch" checked={options.includeLunch} onChange={e => handleOptionChange('includeLunch', e.target.checked)} className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                           <label htmlFor="include-lunch" className="ms-2 block text-sm text-slate-900">{t('include_lunch')}</label>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default OptionsPanel;