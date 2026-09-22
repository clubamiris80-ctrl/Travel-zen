import React, { useState } from 'react';
import Modal from '../common/Modal';
import Button from '../common/Button';
import { Lock, KeyRound, AlertCircle, ShieldCheck } from 'lucide-react';

interface AdminPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const ADMIN_SECRET_CODE = 'Jardin19';

const AdminPasswordModal: React.FC<AdminPasswordModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === ADMIN_SECRET_CODE) {
      setError(null);
      setCode('');
      onSuccess();
    } else {
      setError("Code d'accès secret incorrect. Accès refusé.");
    }
  };

  const handleClose = () => {
    setCode('');
    setError(null);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Accès Espace Administrateur">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center space-x-3 p-3 bg-sky-50 rounded-lg text-sky-800 text-sm">
          <Lock className="w-5 h-5 flex-shrink-0 text-sky-600" />
          <p>Cet espace est réservé à la gestion et au contrôle de la base de données locale des villes.</p>
        </div>

        <div>
          <label htmlFor="admin-code" className="block text-sm font-medium text-slate-700 mb-1">
            Code d'accès secret
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <KeyRound size={18} />
            </div>
            <input
              id="admin-code"
              type="password"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                if (error) setError(null);
              }}
              placeholder="Entrez le code..."
              className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
              autoFocus
            />
          </div>
          {error && (
            <div className="flex items-center space-x-2 mt-2 text-rose-600 text-sm">
              <AlertCircle size={16} />
              <span>{error}</span>
            </div>
          )}
        </div>

        <div className="flex justify-end space-x-3 pt-3 border-t border-slate-200">
          <Button type="button" variant="ghost" onClick={handleClose}>
            Annuler
          </Button>
          <Button type="submit" variant="primary" className="!bg-sky-600 hover:!bg-sky-700">
            Valider l'accès
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default AdminPasswordModal;
