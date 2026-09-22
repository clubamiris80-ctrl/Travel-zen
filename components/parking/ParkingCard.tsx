import React, { useState } from 'react';
import type { AirportParkingInfo, TrainStationParkingInfo } from '../../data/parking/types';
import Card from '../common/Card';
import { MapPin, Navigation, ExternalLink, ChevronDown, ChevronUp, Copy, Check, Car, Zap, Clock, Shield } from 'lucide-react';
import useTranslation from '../../hooks/useTranslation';

interface ParkingCardProps {
  item: AirportParkingInfo | TrainStationParkingInfo;
  type: 'airport' | 'train_station';
  distanceKm?: number;
  searchedCity?: string;
}

export const ParkingCard: React.FC<ParkingCardProps> = ({ item, type, distanceKm, searchedCity }) => {
  const { t } = useTranslation();
  const [showFacilities, setShowFacilities] = useState(false);
  const [copiedGps, setCopiedGps] = useState(false);

  const isAirport = type === 'airport';
  const airportItem = isAirport ? (item as AirportParkingInfo) : null;
  const stationItem = !isAirport ? (item as TrainStationParkingInfo) : null;

  const handleCopyGps = (e: React.MouseEvent) => {
    e.stopPropagation();
    const gpsText = `${item.coordinates.lat.toFixed(4)}, ${item.coordinates.lng.toFixed(4)}`;
    navigator.clipboard.writeText(gpsText);
    setCopiedGps(true);
    setTimeout(() => setCopiedGps(false), 2000);
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${item.name}, ${item.city}`
  )}`;

  return (
    <Card className="border border-slate-200/90 shadow-sm hover:shadow-md transition-all">
      <div className="p-6">
        {/* Header: Title + Badges */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <h4 className="text-xl font-bold text-slate-800 tracking-tight">{item.name}</h4>
              {airportItem && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-sky-100 text-sky-800 border border-sky-200">
                  {airportItem.iata}
                </span>
              )}
              {stationItem?.code && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                  {stationItem.code}
                </span>
              )}
            </div>

            <p className="text-slate-600 font-medium flex items-center gap-1.5 text-sm">
              <MapPin size={16} className="text-sky-600 shrink-0" />
              <span>
                {item.city} &bull; <span className="text-slate-500">{item.country}</span>
              </span>
            </p>
          </div>

          {/* Distance Badge if available */}
          {distanceKm !== undefined && (
            <div className="shrink-0 self-start">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-sm font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <Navigation size={14} className="rotate-45 text-emerald-600" />
                {distanceKm <= 1
                  ? `Dans la ville (${searchedCity || item.city})`
                  : `À ${distanceKm} km ${searchedCity ? `de ${searchedCity}` : ''}`}
              </span>
            </div>
          )}
        </div>

        {/* Address & GPS details */}
        <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          {/* Address */}
          <div className="flex items-start gap-2 text-slate-600">
            <span className="font-semibold text-slate-700 min-w-24 shrink-0">{t('address_location')} :</span>
            <span className="text-slate-600 break-words">{item.address}</span>
          </div>

          {/* GPS Coordinates */}
          <div className="flex items-center gap-2 text-slate-600">
            <span className="font-semibold text-slate-700 min-w-24 shrink-0">{t('gps_coordinates')} :</span>
            <span className="font-mono text-xs bg-slate-100 px-2 py-1 rounded text-slate-700 border border-slate-200">
              {item.coordinates.lat.toFixed(4)}° N, {item.coordinates.lng.toFixed(4)}° E
            </span>
            <button
              onClick={handleCopyGps}
              title="Copier les coordonnées GPS"
              className="p-1 rounded text-slate-500 hover:text-sky-600 hover:bg-sky-50 transition-colors"
            >
              {copiedGps ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
            </button>
          </div>
        </div>

        {/* Overview description */}
        {item.parkingOverview && (
          <p className="mt-3 text-sm text-slate-600 leading-relaxed bg-slate-50/80 p-3 rounded-lg border border-slate-100">
            {item.parkingOverview}
          </p>
        )}

        {/* Action buttons: toggle facilities & open in maps */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => setShowFacilities(!showFacilities)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-700 py-1.5 px-3 rounded-lg hover:bg-sky-50 transition-colors"
          >
            <Car size={16} />
            <span>
              {showFacilities ? 'Masquer les parkings et tarifs' : `Voir les parkings et tarifs (${item.facilities.length})`}
            </span>
            {showFacilities ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          <div className="flex items-center gap-2">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-sky-600 bg-slate-100 hover:bg-sky-50 px-2.5 py-1.5 rounded-lg border border-slate-200 transition-colors"
            >
              <span>Itinéraire Google Maps</span>
              <ExternalLink size={12} />
            </a>

            {item.website && (
              <a
                href={item.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-sky-600 bg-slate-100 hover:bg-sky-50 px-2.5 py-1.5 rounded-lg border border-slate-200 transition-colors"
              >
                <span>Site officiel</span>
                <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>

        {/* Collapsible Facilities List */}
        {showFacilities && item.facilities && item.facilities.length > 0 && (
          <div className="mt-4 space-y-3 pt-3 border-t border-slate-100">
            <h5 className="font-semibold text-slate-800 text-sm flex items-center gap-2">
              <Car size={16} className="text-sky-600" />
              {t('parking_facilities')}
            </h5>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {item.facilities.map((fac, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 text-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <span className="font-semibold text-slate-800">{fac.name}</span>
                      <span className="text-xs font-medium px-2 py-0.5 rounded bg-sky-100 text-sky-800 shrink-0">
                        {fac.typeLabel}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 mb-2">{fac.description}</p>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-100 mb-2">
                      💰 {fac.indicativePrice}
                    </div>

                    {fac.features && fac.features.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {fac.features.map((feat, fIdx) => (
                          <span
                            key={fIdx}
                            className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 bg-white text-slate-600 rounded border border-slate-200"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-sky-500"></span>
                            {feat}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
