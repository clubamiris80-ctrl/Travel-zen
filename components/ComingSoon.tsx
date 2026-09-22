import React from 'react';
import useTranslation from '../hooks/useTranslation';
import Card from './common/Card';
import Button from './common/Button';
import { ArrowLeft, Luggage, Backpack, Plane } from 'lucide-react';

interface ComingSoonProps {
  onBack: () => void;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ onBack }) => {
  const { t } = useTranslation();

  return (
    <div className="max-w-2xl mx-auto text-center py-16">
      <div className="relative">
        <Luggage className="absolute -top-12 left-1/2 -translate-x-1/2 h-20 w-20 text-sky-200 -rotate-12" strokeWidth={1} />
        <Backpack className="absolute top-8 -left-16 h-16 w-16 text-teal-200 rotate-12" strokeWidth={1} />
        <Plane className="absolute top-12 -right-16 h-20 w-20 text-rose-200 -rotate-12" strokeWidth={1} />
        
        <Card>
          <div className="p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-sky-800">{t('coming_soon_title')}</h2>
            <p className="mt-4 text-slate-600 max-w-md mx-auto">
              {t('coming_soon_description')}
            </p>
            <Button onClick={onBack} size="lg" className="mt-8">
              <ArrowLeft size={20} className="me-2" />
              {t('go_back')}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ComingSoon;