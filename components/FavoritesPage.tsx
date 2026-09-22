import React, { useState, useEffect } from 'react';
import type { GeneratedPlan } from '../types';
import useTranslation from '../hooks/useTranslation';
import { favoritesService } from '../services/favoritesService';
import Card from './common/Card';
import Button from './common/Button';
import { HeartCrack, Trash2, Eye, MapPin, Calendar, Users, ArrowLeft } from 'lucide-react';

interface FavoritesPageProps {
  onViewPlan: (plan: GeneratedPlan) => void;
  onBack: () => void;
}

const FavoritesPage: React.FC<FavoritesPageProps> = ({ onViewPlan, onBack }) => {
  const { t } = useTranslation();
  const [favorites, setFavorites] = useState<GeneratedPlan[]>([]);

  useEffect(() => {
    setFavorites(favoritesService.getFavorites());
  }, []);

  const handleDelete = (planId: string) => {
    if (window.confirm(t('delete_favorite_confirm'))) {
      favoritesService.removeFavorite(planId);
      setFavorites(favoritesService.getFavorites());
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Button onClick={onBack} variant="ghost">
          <ArrowLeft className="me-2" size={20} />
          {t('go_back')}
        </Button>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800">{t('my_favorites')}</h2>
        <p className="text-slate-600 mt-1">Vos voyages sauvegardés, accessibles hors ligne.</p>
      </div>

      {favorites.length === 0 ? (
        <Card>
          <div className="p-12 text-center">
            <HeartCrack className="mx-auto h-16 w-16 text-slate-300" />
            <p className="mt-4 text-slate-500">{t('no_favorites_message')}</p>
          </div>
        </Card>
      ) : (
        <div className="space-y-4">
          {favorites.map(plan => (
            <Card key={plan.id} className="hover:shadow-lg transition-shadow">
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-indigo-700">{plan.city.name}, {plan.city.country}</h3>
                    <div className="flex items-center text-sm text-slate-500 mt-2 gap-4 flex-wrap">
                      <span className="flex items-center"><Calendar size={14} className="me-1.5" /> {new Date(plan.dates.start).toLocaleDateString()} - {new Date(plan.dates.end).toLocaleDateString()}</span>
                      <span className="flex items-center"><Users size={14} className="me-1.5" /> {plan.totalActivities} {t('activities')}</span>
                       {plan.hotel && <span className="flex items-center"><MapPin size={14} className="me-1.5" /> {plan.hotel.name}</span>}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Button variant="secondary" size="sm" onClick={() => handleDelete(plan.id)}>
                        <Trash2 size={16} />
                    </Button>
                    <Button size="sm" onClick={() => onViewPlan(plan)}>
                        <Eye size={16} className="me-1.5" />
                        {t('view_plan')}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;