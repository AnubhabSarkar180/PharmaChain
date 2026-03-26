import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/layout/AuthLayout';
import { Mail, Fingerprint } from 'lucide-react';

export default function ConsumerSignup() {
  const { login } = useAuth();
  const navigate = useNavigate();

  return (
    <AuthLayout
      title="Create Verifier ID"
      subtitle="Gain full access to the public supply chain and setup notification alerts for product recalls."
      roleTag="Public Verifier"
      quote="Empowering patients with absolute certainty."
      imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ8m2Sg7U9Z-Z8TQQH4f_sT3n9oQhO5fM6A1jT9Yp-I5jV5pYkO1eH0bLQ9Z8e_d7-J8vXl5f9U_z4LwLkTtR2v5-T6rGqDqU8cR7jO_Ea8o4Z0rP2lA"
    >
      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-widest font-label text-on-surface-variant">Email (Optional)</label>
            <div className="relative">
                <input type="email" placeholder="patient@example.com" className="w-full bg-surface-container-low border-2 border-transparent rounded-lg pl-12 pr-4 py-4 focus:ring-0 focus:border-secondary focus:bg-surface-container-lowest transition-all font-body outline-none" />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" size={20} />
            </div>
            <p className="text-[10px] text-on-surface-variant/70">Used strictly for product recall alerts. Zero tracking.</p>
        </div>
        
        <div className="pt-4 pb-2">
            <button type="button" className="w-full border-2 border-surface-container-high hover:border-primary active:scale-95 transition-all text-on-surface font-headline font-bold py-4 rounded-lg flex items-center justify-center gap-3">
                <Fingerprint className="text-primary" size={24} />
                Generate Anonymous Passkey
            </button>
        </div>
        
        <button type="button" onClick={() => navigate('/login/consumer') } className="w-full bg-primary hover:brightness-110 active:scale-95 transition-all text-on-primary font-headline font-bold py-4 rounded-lg shadow-lg mt-6">
            Complete Setup
        </button>
      </form>
      
      <p className="mt-8 text-[13px] text-center text-on-surface-variant font-body">
          Already have a Verifier ID? <a href="/login/consumer" className="text-secondary font-bold hover:underline">Log in securely</a>
      </p>
    </AuthLayout>
  );
}
