import React from 'react';
import useTranslation from '../../hooks/useTranslation';
import { AlertTriangle } from 'lucide-react';

interface TripBalanceWarningProps {
  message: string;
  onDismiss: () => void;
}

const TripBalanceWarning: React.FC<TripBalanceWarningProps> = ({ message, onDismiss }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-yellow-50 border-s-4 border-yellow-400 p-4 mb-6 rounded-e-lg" role="alert">
      <div className="flex">
        <div className="flex-shrink-0">
          <AlertTriangle className="h-5 w-5 text-yellow-400" aria-hidden="true" />
        </div>
        <div className="ms-3 flex-1 md:flex md:justify-between">
          <p className="text-sm text-yellow-700">{message}</p>
          <p className="mt-3 text-sm md:mt-0 md:ms-6">
            <button
              onClick={onDismiss}
              className="whitespace-nowrap font-medium text-yellow-700 hover:text-yellow-600"
            >
              {t('dismiss_warning')}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TripBalanceWarning;