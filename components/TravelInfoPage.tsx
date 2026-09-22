
import React, { useState, useMemo, useEffect } from 'react';
import type { Company, CompanyType, BaggageInfo, Country, CountryTravelInfo } from '../types';
import useTranslation from '../hooks/useTranslation';
import { getTravelCompanies, getBaggageInfo, getCountryList, getCountryTravelInfo } from '../services/geminiService';
import { cacheService } from '../services/cache';
import Card from './common/Card';
import Button from './common/Button';
import { ArrowLeft, Plane, Train, Ship, Briefcase, Search, Loader, CheckCircle, Info, XCircle, Globe, FileText, CalendarDays, ShieldCheck, SquareParking, Building2 } from 'lucide-react';
import { ParkingSearch } from './parking/ParkingSearch';

interface TravelInfoPageProps {
  onBack: () => void;
}

type Mode = 'menu' | 'baggage' | 'country' | 'parking';
type BaggageStep = 'selectType' | 'selectCompany' | 'viewInfo';
type CountryStep = 'selectCountry' | 'viewInfo';

const ModeSelectionCard: React.FC<{ label: string, icon: React.ReactElement, onClick: () => void }> = ({ label, icon, onClick }) => (
    <button onClick={onClick} className="w-full text-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all group">
        <div className="w-20 h-20 mx-auto bg-sky-100 rounded-full flex items-center justify-center transition-colors group-hover:bg-sky-200">
            {React.cloneElement(icon, { className: "h-10 w-10 text-sky-600"})}
        </div>
        <h3 className="mt-5 font-semibold text-xl text-slate-800">{label}</h3>
    </button>
);

const BaggageInfoDisplay: React.FC<{ info: BaggageInfo }> = ({ info }) => {
    const { t } = useTranslation();
    return (
        <div className="space-y-6">
            <Card>
                <div className="p-6">
                    <h4 className="text-xl font-bold flex items-center text-green-700"><CheckCircle size={22} className="me-3" />{t('free_allowance')}</h4>
                    <ul className="mt-4 space-y-2 list-disc list-inside text-slate-600">
                        {info.freeAllowance.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
            </Card>
             <Card>
                <div className="p-6">
                    <h4 className="text-xl font-bold flex items-center text-orange-700"><XCircle size={22} className="me-3" />{t('paid_allowance')}</h4>
                    <ul className="mt-4 space-y-3 text-slate-600">
                        {info.paidAllowance.map((item, i) => (
                            <li key={i} className="flex justify-between items-center bg-slate-50 p-3 rounded-lg border">
                                <span>{item.description}</span>
                                <span className="font-semibold text-slate-800 bg-slate-200 px-2.5 py-1 rounded-md text-sm">{item.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </Card>
             <Card>
                <div className="p-6">
                    <h4 className="text-xl font-bold flex items-center text-sky-700"><Info size={22} className="me-3" />{t('useful_info')}</h4>
                    <p className="mt-4 text-slate-600">{info.usefulInfo}</p>
                </div>
            </Card>
        </div>
    );
};

const CountryInfoDisplay: React.FC<{ info: CountryTravelInfo }> = ({ info }) => {
    const { t } = useTranslation();
    return (
        <div className="space-y-6">
            <Card>
                <div className="p-6">
                    <h4 className="text-xl font-bold flex items-center text-sky-700"><CalendarDays size={22} className="me-3" />{t('max_stay')}</h4>
                    <p className="mt-3 text-slate-600">{info.maxStay}</p>
                </div>
            </Card>
            <Card>
                <div className="p-6">
                    <h4 className="text-xl font-bold flex items-center text-sky-700"><FileText size={22} className="me-3" />{t('visa_requirements')}</h4>
                    <p className="mt-3 text-slate-600">{info.visaInfo}</p>
                </div>
            </Card>
            <Card>
                <div className="p-6">
                    <h4 className="text-xl font-bold flex items-center text-sky-700"><ShieldCheck size={22} className="me-3" />{t('documents_required')}</h4>
                    <ul className="mt-3 space-y-2 list-disc list-inside text-slate-600">
                        {info.documentsRequired.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
            </Card>
            <Card>
                <div className="p-6">
                    <h4 className="text-xl font-bold flex items-center text-sky-700"><Info size={22} className="me-3" />{t('useful_info')}</h4>
                    <p className="mt-3 text-slate-600">{info.usefulInfo}</p>
                </div>
            </Card>
        </div>
    );
};


const TravelInfoPage: React.FC<TravelInfoPageProps> = ({ onBack }) => {
  const { t, language } = useTranslation();
  const [mode, setMode] = useState<Mode>('menu');
  
  // Baggage state
  const [baggageStep, setBaggageStep] = useState<BaggageStep>('selectType');
  const [companyType, setCompanyType] = useState<CompanyType | null>(null);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [baggageInfo, setBaggageInfo] = useState<BaggageInfo | null>(null);
  
  // Country state
  const [countryStep, setCountryStep] = useState<CountryStep>('selectCountry');
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [countryInfo, setCountryInfo] = useState<CountryTravelInfo | null>(null);

  // Parking state
  const [parkingTarget, setParkingTarget] = useState<'airport' | 'train_station' | 'city_center' | 'all' | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
        if(mode !== 'country' || countries.length > 0) return;
        setIsLoading(true);
        const cacheKey = `countries_${language}`;
        let fetchedCountries = cacheService.get<Country[]>(cacheKey);
        if (!fetchedCountries) {
            fetchedCountries = await getCountryList(language);
            cacheService.set(cacheKey, fetchedCountries);
        }
        setCountries(fetchedCountries || []);
        setIsLoading(false);
    }
    fetchCountries();
  }, [mode, language, countries.length]);


  // --- Baggage Handlers ---
  const handleSelectType = async (type: CompanyType) => {
    setCompanyType(type);
    setIsLoading(true);
    setBaggageStep('selectCompany');

    const cacheKey = `companies_${type}_${language}`;
    let fetchedCompanies = cacheService.get<Company[]>(cacheKey);
    if (!fetchedCompanies) {
        fetchedCompanies = await getTravelCompanies(type, language);
        cacheService.set(cacheKey, fetchedCompanies);
    }
    
    setCompanies(fetchedCompanies || []);
    setIsLoading(false);
  };

  const handleSelectCompany = async (company: Company) => {
    setSelectedCompany(company);
    setIsLoading(true);
    setBaggageStep('viewInfo');

    const cacheKey = `baggage_${company.id}_${companyType}_${language}`;
    let fetchedInfo = cacheService.get<BaggageInfo>(cacheKey);
    if (!fetchedInfo) {
        fetchedInfo = await getBaggageInfo(company.name, companyType!, language);
        if(fetchedInfo) cacheService.set(cacheKey, fetchedInfo);
    }
    
    setBaggageInfo(fetchedInfo);
    setIsLoading(false);
  };

  // --- Country Handlers ---
  const handleSelectCountry = async (country: Country) => {
    setSelectedCountry(country);
    setIsLoading(true);
    setCountryStep('viewInfo');
    const cacheKey = `country_info_${country.code}_${language}`;
    let fetchedInfo = cacheService.get<CountryTravelInfo>(cacheKey);
    if (!fetchedInfo) {
        fetchedInfo = await getCountryTravelInfo(country.name, language);
        if (fetchedInfo) cacheService.set(cacheKey, fetchedInfo);
    }
    setCountryInfo(fetchedInfo);
    setIsLoading(false);
  };
  
  // --- Navigation & Reset ---
  const handleBackStep = () => {
    setSearchQuery('');
    if (mode === 'baggage') {
        if (baggageStep === 'viewInfo') { setBaggageStep('selectCompany'); setSelectedCompany(null); setBaggageInfo(null); }
        else if (baggageStep === 'selectCompany') { setBaggageStep('selectType'); setCompanyType(null); setCompanies([]); }
        else { setMode('menu'); }
    } else if (mode === 'country') {
        if (countryStep === 'viewInfo') { setCountryStep('selectCountry'); setSelectedCountry(null); setCountryInfo(null); }
        else { setMode('menu'); }
    } else if (mode === 'parking') {
        if (parkingTarget) {
            setParkingTarget(null);
        } else {
            setMode('menu');
        }
    } else {
        onBack();
    }
  };

  const filteredCompanies = useMemo(() => {
    if (!searchQuery) return companies;
    return companies.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery, companies]);

  const filteredCountries = useMemo(() => {
    if (!searchQuery) return countries;
    return countries.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery, countries]);

  // --- RENDER LOGIC ---
  const renderBaggageContent = () => {
    switch (baggageStep) {
        case 'selectType':
            return (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                     <ModeSelectionCard label={t('transport_type_airline')} icon={<Plane />} onClick={() => handleSelectType('airline')} />
                     <ModeSelectionCard label={t('transport_type_train')} icon={<Train />} onClick={() => handleSelectType('train')} />
                     <ModeSelectionCard label={t('transport_type_ferry')} icon={<Ship />} onClick={() => handleSelectType('ferry')} />
                </div>
            );
        case 'selectCompany':
            return (
                <div>
                    <div className="relative mb-4">
                        <Search className="h-5 w-5 text-slate-400 absolute top-1/2 -translate-y-1/2 start-3 pointer-events-none" />
                        <input type="text" placeholder={t('search_company')} value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                            className="w-full ps-10 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-white" />
                    </div>
                    <ul className="space-y-2 max-h-[60vh] overflow-y-auto p-1">
                        {filteredCompanies.map(company => (
                            <li key={company.id}>
                                <button onClick={() => handleSelectCompany(company)} className="w-full text-left p-4 bg-white rounded-lg shadow-sm hover:bg-sky-50 transition-colors border">
                                    {company.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        case 'viewInfo':
            return baggageInfo ? <BaggageInfoDisplay info={baggageInfo} /> : <p>Information not available.</p>;
    }
  };
  
  const renderCountryContent = () => {
    switch (countryStep) {
        case 'selectCountry':
             return (
                <div>
                    <div className="relative mb-4">
                        <Search className="h-5 w-5 text-slate-400 absolute top-1/2 -translate-y-1/2 start-3 pointer-events-none" />
                        <input type="text" placeholder={t('search_country')} value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                            className="w-full ps-10 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-white" />
                    </div>
                    <ul className="space-y-2 max-h-[60vh] overflow-y-auto p-1">
                        {filteredCountries.map(country => (
                            <li key={country.code}>
                                <button onClick={() => handleSelectCountry(country)} className="w-full text-left p-4 bg-white rounded-lg shadow-sm hover:bg-sky-50 transition-colors border">
                                    {country.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        case 'viewInfo':
             return countryInfo ? <CountryInfoDisplay info={countryInfo} /> : <p>Information not available.</p>;
    }
  };

  const renderParkingContent = () => {
    if (!parkingTarget) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          <ModeSelectionCard
            label={t('airport_title')}
            icon={<Plane />}
            onClick={() => setParkingTarget('airport')}
          />
          <ModeSelectionCard
            label={t('train_station_title')}
            icon={<Train />}
            onClick={() => setParkingTarget('train_station')}
          />
          <ModeSelectionCard
            label="Centre-ville & Tourisme"
            icon={<Building2 />}
            onClick={() => setParkingTarget('city_center')}
          />
        </div>
      );
    }

    return (
      <ParkingSearch
        target={parkingTarget}
        onBackToParkingMenu={() => setParkingTarget(null)}
      />
    );
  };

  const getTitle = () => {
      if (mode === 'menu') return t('travel_info');
      if (mode === 'baggage') {
          if(baggageStep === 'selectCompany') return `${t('select_a_company')} (${t(`transport_type_${companyType}`)})`;
          if(baggageStep === 'viewInfo') return selectedCompany?.name || t('baggage_info_title');
          return t('baggage_info_title');
      }
      if (mode === 'country') {
          if(countryStep === 'viewInfo') return selectedCountry?.name || t('country_info_title');
          return t('country_info_title');
      }
      if (mode === 'parking') {
          if (parkingTarget === 'airport') return `${t('parking_title')} - ${t('airport_title')}`;
          if (parkingTarget === 'train_station') return `${t('parking_title')} - ${t('train_station_title')}`;
          if (parkingTarget === 'city_center') return `${t('parking_title')} - Centre-ville & Tourisme`;
          if (parkingTarget === 'all') return `${t('parking_title')} - Tous les parkings`;
          return t('parking_title');
      }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Button onClick={handleBackStep} variant="ghost">
          <ArrowLeft className="me-2" size={20} />
          {t('go_back')}
        </Button>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800">{getTitle()}</h2>
        {mode === 'menu' && <p className="text-slate-600 mt-1">{t('travel_info_description')}</p>}
      </div>
      
      {isLoading && <div className="flex justify-center items-center p-20"><Loader className="animate-spin h-12 w-12 text-sky-600" /></div>}

      {!isLoading && mode === 'menu' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <ModeSelectionCard label={t('baggage_info_title')} icon={<Briefcase />} onClick={() => setMode('baggage')} />
            <ModeSelectionCard label={t('country_info_title')} icon={<Globe />} onClick={() => setMode('country')} />
            <ModeSelectionCard label={t('parking_title')} icon={<SquareParking />} onClick={() => setMode('parking')} />
        </div>
      )}

      {!isLoading && mode === 'baggage' && renderBaggageContent()}
      {!isLoading && mode === 'country' && renderCountryContent()}
      {!isLoading && mode === 'parking' && renderParkingContent()}
      
    </div>
  );
};

export default TravelInfoPage;
