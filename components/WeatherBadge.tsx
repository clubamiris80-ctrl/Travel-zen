import React from 'react';
import type { DayWeather } from '../types';
import useTranslation from '../hooks/useTranslation';
import {
  Sun,
  CloudSun,
  Cloud,
  CloudFog,
  CloudDrizzle,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Droplets
} from 'lucide-react';

interface WeatherIconProps {
  code: number;
  className?: string;
}

export const WeatherIcon: React.FC<WeatherIconProps> = ({ code, className = 'w-4 h-4' }) => {
  if (code === 0 || code === 1) {
    return <Sun className={`${className} text-amber-500`} />;
  }
  if (code === 2) {
    return <CloudSun className={`${className} text-amber-500`} />;
  }
  if (code === 3) {
    return <Cloud className={`${className} text-slate-400`} />;
  }
  if (code === 45 || code === 48) {
    return <CloudFog className={`${className} text-slate-400`} />;
  }
  if (code >= 51 && code <= 57) {
    return <CloudDrizzle className={`${className} text-sky-500`} />;
  }
  if ((code >= 61 && code <= 67) || (code >= 80 && code <= 82)) {
    return <CloudRain className={`${className} text-blue-500`} />;
  }
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) {
    return <CloudSnow className={`${className} text-indigo-400`} />;
  }
  if (code >= 95) {
    return <CloudLightning className={`${className} text-purple-500`} />;
  }
  return <CloudSun className={`${className} text-amber-500`} />;
};

interface DailyWeatherPillProps {
  weather?: DayWeather;
  onClick?: (e: React.MouseEvent) => void;
}

/**
 * Discreet weather pill placed directly in the daily plan accordion header.
 */
export const DailyWeatherPill: React.FC<DailyWeatherPillProps> = ({ weather, onClick }) => {
  const { t } = useTranslation();

  if (!weather) return null;

  const tooltip = weather.isSeasonalAverage
    ? t('seasonal_norm_tooltip')
    : t('forecast_tooltip');

  return (
    <div
      onClick={onClick}
      className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 hover:bg-slate-200/80 text-slate-700 transition-colors border border-slate-200/60 shrink-0"
      title={tooltip}
      aria-label={`${t('weather')}: ${weather.condition}, ${weather.tempMax}°C / ${weather.tempMin}°C`}
    >
      <WeatherIcon code={weather.code} className="w-3.5 h-3.5 shrink-0" />
      <span className="font-semibold text-slate-800">{weather.tempMax}°</span>
      <span className="text-slate-400 text-[11px]">/ {weather.tempMin}°</span>
      <span className="hidden sm:inline text-slate-500 text-[11px] font-normal truncate max-w-[130px]">
        • {weather.condition}
      </span>
      {weather.isSeasonalAverage && (
        <span className="text-[10px] text-slate-400 font-normal italic">
          ({t('seasonal_abbr')})
        </span>
      )}
    </div>
  );
};

interface DailyWeatherBannerProps {
  weather?: DayWeather;
}

/**
 * Clean, discreet mini-strip shown at the top of the expanded day items.
 */
export const DailyWeatherBanner: React.FC<DailyWeatherBannerProps> = ({ weather }) => {
  const { t } = useTranslation();

  if (!weather) return null;

  return (
    <div className="mb-4 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center justify-between text-xs text-slate-600 gap-2 flex-wrap">
      <div className="flex items-center gap-2 flex-wrap">
        <WeatherIcon code={weather.code} className="w-4 h-4 shrink-0" />
        <span className="font-medium text-slate-800">{weather.condition}</span>
        <span className="text-slate-300">|</span>
        <span>
          {t('max_temp')}: <strong className="text-slate-800">{weather.tempMax}°C</strong>
        </span>
        <span className="text-slate-300">·</span>
        <span>
          {t('min_temp')}: <strong className="text-slate-800">{weather.tempMin}°C</strong>
        </span>
      </div>

      <div className="flex items-center gap-3 text-slate-500">
        {weather.precipitationProbability !== undefined && weather.precipitationProbability > 0 && (
          <span className="inline-flex items-center gap-1 text-slate-600" title={t('chance_of_rain')}>
            <Droplets size={12} className="text-blue-500 shrink-0" />
            <span>{weather.precipitationProbability}%</span>
          </span>
        )}
        {weather.isSeasonalAverage ? (
          <span className="text-[11px] text-slate-400 italic">
            {t('seasonal_average_notice')}
          </span>
        ) : (
          <span className="text-[11px] text-emerald-600 font-medium">
            ● {t('live_forecast')}
          </span>
        )}
      </div>
    </div>
  );
};
