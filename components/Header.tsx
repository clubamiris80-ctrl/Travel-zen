import React from 'react';
import useTranslation from '../hooks/useTranslation';
import LanguageSelector from './LanguageSelector';
import { PlaneTakeoff, Home, Luggage, Heart, Briefcase } from 'lucide-react';
import Button from './common/Button';

interface HeaderProps {
    step: number;
    totalSteps: number;
    onGoHome: () => void;
    onShowComingSoon: () => void;
    onShowFavorites: () => void;
    onShowTravelInfo: () => void;
}

const Header: React.FC<HeaderProps> = ({ step, totalSteps, onGoHome, onShowComingSoon, onShowFavorites, onShowTravelInfo }) => {
    const { t } = useTranslation();

    return (
        <header className="bg-sky-100 border-b border-sky-200 sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-3">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                        <div className="flex items-center space-x-3 rtl:space-x-reverse flex-shrink-0">
                            <PlaneTakeoff className="h-8 w-8 text-sky-600" />
                            <div className="flex flex-col">
                                <h1 className="text-xl sm:text-2xl font-bold text-sky-800">
                                    Travel-Zen
                                </h1>
                                <p className="text-xs text-sky-700 -mt-1 hidden sm:block">
                                    {t('appTitle')}
                                </p>
                            </div>
                        </div>
                        <Button 
                            onClick={onGoHome} 
                            variant="ghost" 
                            size="sm" 
                            className="!text-sky-700 hover:!bg-sky-200 focus:!ring-sky-500 flex items-center space-x-2 rtl:space-x-reverse"
                        >
                            <Home size={16} />
                            <span className="hidden md:inline">{t('home')}</span>
                        </Button>
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2 rtl:space-x-reverse">
                         <Button 
                            onClick={onShowFavorites}
                            variant="ghost" 
                            size="sm" 
                            className="!text-sky-700 hover:!bg-sky-200 focus:!ring-sky-500 flex items-center space-x-2 rtl:space-x-reverse"
                        >
                            <Heart size={16} />
                            <span className="hidden sm:inline">{t('my_favorites')}</span>
                        </Button>
                         <Button 
                            onClick={onShowTravelInfo}
                            variant="ghost" 
                            size="sm" 
                            className="!text-sky-700 hover:!bg-sky-200 focus:!ring-sky-500 flex items-center space-x-2 rtl:space-x-reverse"
                        >
                            <Briefcase size={16} />
                            <span className="hidden sm:inline">{t('travel_info')}</span>
                        </Button>
                         <Button 
                            onClick={onShowComingSoon}
                            variant="ghost" 
                            size="sm" 
                            className="!text-sky-700 hover:!bg-sky-200 focus:!ring-sky-500 hidden sm:flex items-center space-x-2 rtl:space-x-reverse"
                        >
                            <Luggage size={16} />
                            <span className="hidden md:inline">{t('coming_soon_button')}</span>
                        </Button>
                        <div className="hidden sm:flex items-center space-x-2 rtl:space-x-reverse">
                            {Array.from({ length: totalSteps }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-6 h-2 rounded-full transition-colors ${
                                        i < step ? 'bg-sky-600' : 'bg-sky-200'
                                    }`}
                                />
                            ))}
                        </div>
                        <LanguageSelector />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;