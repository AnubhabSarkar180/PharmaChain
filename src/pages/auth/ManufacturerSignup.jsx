import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/layout/AuthLayout';
import { Mail, Building, Key } from 'lucide-react';

export default function ManufacturerSignup() {
  const { login } = useAuth();
  const navigate = useNavigate();

  return (
    <AuthLayout
      title="Register Manufacturer"
      subtitle="Apply to become an authorized node on the PharmaChain network."
      roleTag="Enterprise Node"
      quote="Unshakeable integrity starting from the source."
      imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDDT0MESBZi-6zuanAHkkjzb8u1UnXkh6JJH4VI50PkUZ60UdT8Prx9h_C8y9z4xJlhSmVDyPIHxnH8UExtrl5lMEAYTQqhWpLowXfgDWR-Xy4TYzr93uEX6d8ANNX2UJG9GBBVhFOtZO1dTJ2nRBfAOfRPGX1KIjis8_ZZoBAKj3-MSw_SEO5q1nwLOPhnwytZEcPK-PKOsOe6UOzkkSUx0ZykcNvXCBlvjnKJ34I3zQnGZ9zmVlDQTyVmO_nx9Ybu6L8ajaEtxXo"
    >
      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-widest font-label text-on-surface-variant">Company Name</label>
            <div className="relative">
                <input type="text" placeholder="BioLab Global" className="w-full bg-surface-container-low border-2 border-transparent rounded-lg pl-12 pr-4 py-4 focus:ring-0 focus:border-secondary focus:bg-surface-container-lowest transition-all font-body outline-none" />
                <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" size={20} />
            </div>
        </div>
        <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-widest font-label text-on-surface-variant">Regulatory License ID</label>
            <div className="relative">
                <input type="text" placeholder="FDA-1092-B" className="w-full bg-surface-container-low border-2 border-transparent rounded-lg pl-12 pr-4 py-4 focus:ring-0 focus:border-secondary focus:bg-surface-container-lowest transition-all font-body outline-none" />
                <Key className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" size={20} />
            </div>
        </div>
        <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-widest font-label text-on-surface-variant">Corporate Email</label>
            <div className="relative">
                <input type="email" placeholder="admin@biolab.com" className="w-full bg-surface-container-low border-2 border-transparent rounded-lg pl-12 pr-4 py-4 focus:ring-0 focus:border-secondary focus:bg-surface-container-lowest transition-all font-body outline-none" />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" size={20} />
            </div>
        </div>
        
        <button type="button" onClick={() => navigate('/login/manufacturer') } className="w-full bg-primary hover:brightness-110 active:scale-95 transition-all text-on-primary font-headline font-bold py-4 rounded-lg shadow-lg mt-6">
            Submit Application
        </button>
      </form>
      
      <p className="mt-8 text-[13px] text-center text-on-surface-variant font-body">
          Already registered? <a href="/login/manufacturer" className="text-secondary font-bold hover:underline">Log in here</a>
      </p>
    </AuthLayout>
  );
}
