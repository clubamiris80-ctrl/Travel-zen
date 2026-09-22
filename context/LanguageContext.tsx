
import React, { createContext, useState, useContext, useMemo, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Language } from '../types';
import { translations } from '../lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    document.documentElement.lang = language;
    const direction = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = direction;
  }, [language]);

  // Fix: Explicitly type `dir` as 'ltr' | 'rtl' to match LanguageContextType.
  const dir: 'ltr' | 'rtl' = useMemo(() => (language === 'ar' ? 'rtl' : 'ltr'), [language]);

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  const value = {
    language,
    setLanguage,
    t,
    dir,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
