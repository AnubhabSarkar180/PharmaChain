import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/layout/AuthLayout';
import { Fingerprint } from 'lucide-react';

export default function ConsumerLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();

  return (
    <AuthLayout
      title="Consumer Portal"
      subtitle="Verify your pharmaceutical products instantly using the public ledger."
      roleTag="Public Verifier"
      quote="Empowering patients with absolute certainty."
      imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ8m2Sg7U9Z-Z8TQQH4f_sT3n9oQhO5fM6A1jT9Yp-I5jV5pYkO1eH0bLQ9Z8e_d7-J8vXl5f9U_z4LwLkTtR2v5-T6rGqDqU8cR7jO_Ea8o4Z0rP2lA"
    >
      <div className="space-y-6">
        <button type="button" onClick={() => { login('consumer'); navigate('/consumer'); }} className="w-full border-2 border-surface-container-high hover:border-primary active:scale-95 transition-all text-on-surface font-headline font-bold py-4 rounded-lg flex items-center justify-center gap-3">
            <span className="material-symbols-outlined text-teal-600">account_balance_wallet</span>
            Connect Web3 Wallet
        </button>
        
        <div className="flex items-center justify-center gap-4 py-2">
            <div className="h-px bg-surface-container-high flex-1"></div>
            <span className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Or</span>
            <div className="h-px bg-surface-container-high flex-1"></div>
        </div>
        
        <div className="relative group cursor-text">
            <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest font-label text-on-surface-variant">Biometric ID / Passkey</label>
                <div className="relative">
                    <input type="text" placeholder="Authenticate via Device Headless" disabled className="w-full bg-surface-container-low border-2 border-transparent rounded-lg pl-12 pr-4 py-4 focus:ring-0 focus:border-secondary focus:bg-surface-container-lowest transition-all font-body text-slate-400 cursor-not-allowed" />
                    <Fingerprint className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                </div>
            </div>
        </div>
        
        <button type="button" onClick={() => { login('consumer'); navigate('/consumer'); }} className="w-full bg-primary hover:brightness-110 active:scale-95 transition-all text-on-primary font-headline font-bold py-4 rounded-lg shadow-lg mt-6">
            Continue as Guest 
        </button>
      </div>
      
      <p className="mt-8 text-[13px] text-center text-on-surface-variant font-body">
          First time verifying? <br/><a href="/signup/consumer" className="text-secondary font-bold hover:underline">Learn about anonymous verification</a>
      </p>
    </AuthLayout>
  );
}
