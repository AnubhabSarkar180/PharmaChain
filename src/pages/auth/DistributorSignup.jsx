import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/layout/AuthLayout';
import { Mail, BriefcaseBusiness, MapPin } from 'lucide-react';

export default function DistributorSignup() {
  const { login } = useAuth();
  const navigate = useNavigate();

  return (
    <AuthLayout
      title="Register Logistics Node"
      subtitle="Connect your fleet to the PharmaChain network for verified transit."
      roleTag="Logistics Node"
      quote="Delivering precision precisely when it matters."
      imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDQLjno3Iiw6lg8LTEgT0_jIKBgN-VLg0matL42-iQ5VykV-i2XcFk-KD02MhoKYzXgwyuNgSSgW8yRwdhEHjPOaxRZBTT0_pkosZfKS9H2x2bGhyQeB5v-qSnRO9Z9-ZhcrcPIsp6gYPFDXO78vukuOIe_AAQ5KIMOZdlJ3CVpCU_9-DcvmVQV_OdZoc1N_zEvRu7n_GqF6_2WMm5Ao2GtyaQMb6u2xJ6r88tpPG58_v4K--swaveJFB-dxILCS80T5vMdExuuBA4"
    >
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-widest font-label text-on-surface-variant">Logistics Fleet Name</label>
            <div className="relative">
                <input type="text" placeholder="Global Logistics Corp" className="w-full bg-surface-container-low border-2 border-transparent rounded-lg pl-12 pr-4 py-4 focus:ring-0 focus:border-secondary focus:bg-surface-container-lowest transition-all font-body outline-none" />
                <BriefcaseBusiness className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" size={20} />
            </div>
        </div>
        <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-widest font-label text-on-surface-variant">Primary Hub Code</label>
            <div className="relative">
                <input type="text" placeholder="HUB-JFK-99" className="w-full bg-surface-container-low border-2 border-transparent rounded-lg pl-12 pr-4 py-4 focus:ring-0 focus:border-secondary focus:bg-surface-container-lowest transition-all font-body outline-none" />
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" size={20} />
            </div>
        </div>
        <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-widest font-label text-on-surface-variant">Fleet Email</label>
            <div className="relative">
                <input type="email" placeholder="admin@globallogistics.com" className="w-full bg-surface-container-low border-2 border-transparent rounded-lg pl-12 pr-4 py-4 focus:ring-0 focus:border-secondary focus:bg-surface-container-lowest transition-all font-body outline-none" />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" size={20} />
            </div>
        </div>
        
        <button type="button" onClick={() => navigate('/login/distributor') } className="w-full bg-primary hover:brightness-110 active:scale-95 transition-all text-on-primary font-headline font-bold py-4 rounded-lg shadow-lg mt-6">
            Apply for Integration
        </button>
      </form>
      
      <p className="mt-8 text-[13px] text-center text-on-surface-variant font-body">
          Already part of the network? <a href="/login/distributor" className="text-secondary font-bold hover:underline">Log in</a>
      </p>
    </AuthLayout>
  );
}
