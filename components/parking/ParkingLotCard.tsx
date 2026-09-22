import React, { useState } from 'react';
import type { ParkingLot } from '../../data/parking/types';
import Card from '../common/Card';
import {
  MapPin,
  Navigation,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  Zap,
  Clock,
  Shield,
  Bus,
  Key,
  Car,
  Accessibility,
  CheckCircle2,
  CalendarCheck,
  Tag,
  ArrowRight
} from 'lucide-react';

interface ParkingLotCardProps {
  parking: ParkingLot;
  searchedCity?: string;
}

export const ParkingLotCard: React.FC<ParkingLotCardProps> = ({ parking, searchedCity }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [copiedGps, setCopiedGps] = useState(false);

  const handleCopyGps = (e: React.MouseEvent) => {
    e.stopPropagation();
    const gpsText = `${parking.coordinates.lat.toFixed(4)}, ${parking.coordinates.lng.toFixed(4)}`;
    navigator.clipboard.writeText(gpsText);
    setCopiedGps(true);
    setTimeout(() => setCopiedGps(false), 2000);
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${parking.name}, ${parking.address}`
  )}`;

  // Source badge colors
  const getSourceBadgeClass = (source: string) => {
    switch (source) {
      case 'Officiel':
        return 'bg-emerald-700 text-white font-bold';
      case 'Municipal':
        return 'bg-teal-700 text-white font-bold';
      case 'EFFIA':
        return 'bg-amber-600 text-white font-bold';
      case 'Indigo':
        return 'bg-violet-700 text-white font-bold';
      case 'Q-Park':
        return 'bg-red-600 text-white font-bold';
      case 'APCOA':
        return 'bg-sky-700 text-white font-bold';
      case 'Saba':
        return 'bg-blue-700 text-white font-bold';
      case 'Interparking':
        return 'bg-orange-600 text-white font-bold';
      case 'Blue Valet':
        return 'bg-indigo-600 text-white font-bold';
      case 'Secure Parking':
      case 'Wilson Parking':
      case 'NCP':
        return 'bg-slate-800 text-white font-bold';
      default:
        return 'bg-slate-700 text-white font-semibold';
    }
  };

  // Category badge
  const getCategoryBadge = () => {
    switch (parking.category) {
      case 'airport':
        return { label: '✈️ Aéroport', color: 'bg-sky-50 text-sky-800 border-sky-200' };
      case 'train_station':
        return { label: '🚆 Gare', color: 'bg-indigo-50 text-indigo-800 border-indigo-200' };
      case 'city_center':
        return { label: '🏙️ Centre-Ville', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' };
      case 'tourist_spot':
        return { label: '🏛️ Tourisme & Culture', color: 'bg-amber-50 text-amber-800 border-amber-200' };
      case 'hotel':
        return { label: '🏨 Hôtel & Parking', color: 'bg-purple-50 text-purple-800 border-purple-200' };
      default:
        return { label: '🅿️ Parking', color: 'bg-slate-50 text-slate-800 border-slate-200' };
    }
  };

  const catBadge = getCategoryBadge();

  return (
    <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200">
      <div className="p-5 sm:p-6">
        {/* Header: Badges and Title */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            {/* Top Tag Badges Row */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs tracking-wide uppercase ${getSourceBadgeClass(parking.sourceName)}`}>
                {parking.sourceName}
              </span>

              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${catBadge.color}`}>
                {catBadge.label}
              </span>

              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                {parking.typeLabel}
              </span>

              {parking.isOpen24_7 && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  <Clock size={12} />
                  24h/24 & 7j/7
                </span>
              )}

              {parking.freeCancellation && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 border border-sky-200">
                  <CalendarCheck size={12} />
                  Annulation Gratuite
                </span>
              )}
            </div>

            {/* Parking Name */}
            <h4 className="text-xl font-bold text-slate-900 tracking-tight leading-snug">
              {parking.name}
            </h4>

            {/* Location & City */}
            <p className="text-slate-600 font-medium flex items-center gap-1.5 text-sm mt-1">
              <MapPin size={16} className="text-sky-600 shrink-0" />
              <span>
                {parking.city}, {parking.country}
              </span>
            </p>
          </div>

          {/* Pricing Highlight Box */}
          <div className="shrink-0 bg-slate-50 p-3 rounded-xl border border-slate-200 text-end min-w-36">
            <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Tarif Journée</div>
            <div className="text-2xl font-extrabold text-sky-700">
              {parking.dailyRateFormatted || `${parking.dailyRate} € / jour`}
            </div>
            {parking.hourlyRateFormatted && (
              <div className="text-xs text-slate-600 font-medium mt-0.5">
                Dès {parking.hourlyRateFormatted}
              </div>
            )}
          </div>
        </div>

        {/* Address and Distance indicators */}
        <div className="mt-3 pt-3 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-2.5 text-sm">
          {/* Full address */}
          <div className="flex items-start gap-1.5 text-slate-600">
            <span className="font-semibold text-slate-700 shrink-0">Adresse :</span>
            <span className="text-slate-600 break-words">{parking.address}</span>
          </div>

          {/* Proximity indicators */}
          <div className="flex flex-wrap items-center gap-2">
            {parking.distanceTargetKm !== undefined && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                <Navigation size={12} className="text-slate-500" />
                {parking.distanceTargetKm <= 0.2
                  ? `Au contact direct (${parking.targetName || 'quais / terminaux'})`
                  : `À ${parking.distanceTargetKm} km de : ${parking.targetName || 'destination'}`}
              </span>
            )}

            {parking.distanceCenterKm !== undefined && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-50 text-slate-600 border border-slate-200">
                <span>À {parking.distanceCenterKm} km du centre-ville</span>
              </span>
            )}
          </div>
        </div>

        {/* Essential Highlights Chips (Shuttle, Valet, Keys, EV, PMR, Height) */}
        <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2">
          {/* Shuttle service */}
          {parking.shuttleService && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-sky-50 text-sky-800 border border-sky-200">
              <Bus size={14} className="text-sky-600" />
              <span>Navette aéroport gratuite</span>
              {parking.shuttleDuration && <span className="text-sky-600 font-normal">({parking.shuttleDuration})</span>}
            </span>
          )}

          {/* Valet service */}
          {parking.valetService && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-purple-50 text-purple-800 border border-purple-200">
              <Car size={14} className="text-purple-600" />
              <span>Service Voiturier en porte</span>
            </span>
          )}

          {/* Keys Policy */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
            <Key size={13} className="text-slate-500" />
            <span>{parking.keysDepositLabel}</span>
          </span>

          {/* Electric charging */}
          {parking.electricCharging && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
              <Zap size={13} className="text-emerald-600" />
              <span>Recharge électrique</span>
            </span>
          )}

          {/* PMR Accessibility */}
          {parking.pmrAccessible && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
              <Accessibility size={13} className="text-slate-600" />
              <span>Accès PMR</span>
            </span>
          )}

          {/* Max Height */}
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium bg-slate-50 text-slate-600 border border-slate-200">
            <span>Hauteur max :</span>
            <span className="font-semibold text-slate-700">{parking.maxHeightFormatted}</span>
          </span>

          {/* Spaces if known */}
          {parking.totalSpaces && (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium bg-slate-50 text-slate-600 border border-slate-200">
              <span>Places :</span>
              <span className="font-semibold text-slate-700">{parking.totalSpaces}</span>
            </span>
          )}
        </div>

        {/* Pricing & Duration Formulas Overview */}
        <div className="mt-3 bg-sky-50/50 p-3 rounded-xl border border-sky-100/80 text-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="text-slate-700 font-medium text-xs leading-relaxed">
              <strong className="text-slate-900">Tarifs & formules :</strong> {parking.pricingOverview}
            </div>
            {(parking.weekendRateFormatted || parking.weeklyRateFormatted) && (
              <div className="flex items-center gap-2 shrink-0 text-xs">
                {parking.weekendRateFormatted && (
                  <span className="px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200 font-semibold">
                    {parking.weekendRateFormatted}
                  </span>
                )}
                {parking.weeklyRateFormatted && (
                  <span className="px-2 py-0.5 rounded bg-white text-sky-800 border border-sky-200 font-semibold">
                    {parking.weeklyRateFormatted}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons: Toggle Full Details & Maps Direction */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="inline-flex items-center gap-2 text-sm font-bold text-sky-700 hover:text-sky-800 py-1.5 px-3 rounded-lg hover:bg-sky-50 transition-colors"
          >
            <span>{showDetails ? 'Masquer les détails complets' : 'Voir toutes les informations & sécurité'}</span>
            {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          <div className="flex items-center gap-2">
            {/* GPS coordinates copy */}
            <button
              onClick={handleCopyGps}
              title="Copier les coordonnées GPS"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-sky-600 bg-slate-100 hover:bg-sky-50 px-2.5 py-1.5 rounded-lg border border-slate-200 transition-colors"
            >
              {copiedGps ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
              <span>{copiedGps ? 'GPS Copié !' : `${parking.coordinates.lat.toFixed(4)}, ${parking.coordinates.lng.toFixed(4)}`}</span>
            </button>

            {/* Google Maps link */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 px-3 py-1.5 rounded-lg shadow-2xs transition-colors"
            >
              <span>Itinéraire Maps</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Collapsible Complete Technical & Service Details */}
        {showDetails && (
          <div className="mt-4 pt-4 border-t border-slate-200 space-y-3.5 text-sm bg-slate-50/70 p-4 rounded-xl">
            {/* Opening Hours & Cancellation policy */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-start gap-2">
                <Clock size={16} className="text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-800 text-xs uppercase tracking-wider">Horaires d'ouverture</div>
                  <div className="text-slate-700">{parking.openingHours}</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CalendarCheck size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-800 text-xs uppercase tracking-wider">Annulation & Modification</div>
                  <div className="text-slate-700">{parking.cancellationPolicy || 'Modifiable et annulable selon conditions du fournisseur.'}</div>
                </div>
              </div>
            </div>

            {/* Shuttle or Valet specifications */}
            {(parking.shuttleService || parking.valetService) && (
              <div className="bg-white p-3 rounded-lg border border-slate-200">
                <div className="font-semibold text-slate-800 mb-1 flex items-center gap-2">
                  {parking.shuttleService ? <Bus size={16} className="text-sky-600" /> : <Car size={16} className="text-purple-600" />}
                  <span>{parking.shuttleService ? 'Détails du service navette' : 'Détails du service voiturier'}</span>
                </div>
                {parking.shuttleService && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-700">
                    <div>
                      <span className="font-medium text-slate-500">Fréquence :</span>{' '}
                      <strong>{parking.shuttleFrequency || 'À la demande 24/7'}</strong>
                    </div>
                    <div>
                      <span className="font-medium text-slate-500">Durée trajet :</span>{' '}
                      <strong>{parking.shuttleDuration || '4 à 8 minutes'}</strong>
                    </div>
                    <div>
                      <span className="font-medium text-slate-500">Prix navette :</span>{' '}
                      <strong className="text-emerald-700">{parking.shuttlePrice || 'Gratuit A/R inclus'}</strong>
                    </div>
                  </div>
                )}
                {parking.valetService && parking.valetDetails && (
                  <p className="text-xs text-slate-700 mt-1">{parking.valetDetails}</p>
                )}
              </div>
            )}

            {/* Security and surveillance */}
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <div className="font-semibold text-slate-800 mb-1.5 flex items-center gap-2">
                <Shield size={16} className="text-emerald-600" />
                <span>Sécurité & Surveillance</span>
              </div>
              <p className="text-xs text-slate-600 mb-2">{parking.security.details}</p>
              <div className="flex flex-wrap gap-2 text-xs">
                {parking.security.videoSurveillance && (
                  <span className="inline-flex items-center gap-1 text-slate-700 font-medium">
                    <CheckCircle2 size={13} className="text-emerald-600" /> Vidéosurveillance HD 24/7
                  </span>
                )}
                {parking.security.guarded24_7 && (
                  <span className="inline-flex items-center gap-1 text-slate-700 font-medium">
                    <CheckCircle2 size={13} className="text-emerald-600" /> Gardiennage physique
                  </span>
                )}
                {parking.security.barrierAccess && (
                  <span className="inline-flex items-center gap-1 text-slate-700 font-medium">
                    <CheckCircle2 size={13} className="text-emerald-600" /> Barrières automatiques
                  </span>
                )}
                {parking.security.fenced && (
                  <span className="inline-flex items-center gap-1 text-slate-700 font-medium">
                    <CheckCircle2 size={13} className="text-emerald-600" /> Clôture périmétrique
                  </span>
                )}
              </div>
            </div>

            {/* Electric charging & Additional services */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {parking.electricCharging && (
                <div className="bg-white p-3 rounded-lg border border-slate-200">
                  <div className="font-semibold text-slate-800 text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Zap size={14} className="text-emerald-600" />
                    <span>Bornes Électriques</span>
                  </div>
                  <p className="text-xs text-slate-600">{parking.electricChargingDetails || 'Bornes 22 kW disponibles.'}</p>
                </div>
              )}

              {parking.packagesAvailable && parking.packagesAvailable.length > 0 && (
                <div className="bg-white p-3 rounded-lg border border-slate-200">
                  <div className="font-semibold text-slate-800 text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Tag size={14} className="text-sky-600" />
                    <span>Formules Disponibles</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {parking.packagesAvailable.map((pkg, pIdx) => (
                      <span key={pIdx} className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">
                        {pkg}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Additional Services list */}
            {parking.extraServices && parking.extraServices.length > 0 && (
              <div>
                <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Services supplémentaires inclus ou disponibles :
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {parking.extraServices.map((srv, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1 text-xs px-2.5 py-1 bg-white text-slate-700 rounded-md border border-slate-200 font-medium"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-500"></span>
                      {srv}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Metadata Footer: Source + Last update */}
            <div className="pt-2 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-500">
              <div>
                Gestionnaire : <strong className="text-slate-700">{parking.sourceName}</strong> &bull; Données intégrées en local
              </div>
              <div>
                Dernière mise à jour : <strong className="text-slate-700">{parking.lastUpdated}</strong>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
