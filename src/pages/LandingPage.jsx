import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-body">
      

<nav className="fixed top-0 w-full z-50 shadow-sm glass-header">
<div className="flex justify-between items-center px-8 py-4 max-w-full mx-auto font-headline font-bold tracking-tight">
<div className="text-2xl font-black text-blue-900 tracking-tighter" onClick={() => window.location.href="/" } style={{cursor: "pointer"}}>PharmaChain</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-blue-700 border-b-2 border-blue-700 pb-1 transition-all" href="/login/manufacturer">Manufacturer</a>
<a className="text-slate-500 hover:text-blue-900 transition-colors" href="/login/distributor">Distributor</a>
<a className="text-slate-500 hover:text-blue-900 transition-colors" href="/login/consumer">Consumer</a>
</div>
<div className="flex items-center space-x-6">
<div className="hidden lg:flex items-center space-x-4 text-slate-500">
<span className="material-symbols-outlined hover:bg-slate-50 transition-all p-2 rounded-lg cursor-pointer" data-icon="notifications">notifications</span>
<span className="material-symbols-outlined hover:bg-slate-50 transition-all p-2 rounded-lg cursor-pointer" data-icon="settings">settings</span>
</div>
<button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-bold hover:translate-y-[-1px] active:scale-95 transition-all shadow-sm">
                    Connect Wallet
                </button>
</div>
</div>
</nav>

<main className="pt-24 overflow-hidden">
<section className="relative min-h-[921px] flex items-center px-8 lg:px-24">
<div className="grid lg:grid-cols-12 gap-12 items-center w-full max-w-7xl mx-auto">
<div className="lg:col-span-7 z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-container text-on-tertiary-container mb-6 shadow-[0_0_15px_rgba(0,89,28,0.2)]">
<span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings":"'FILL' 1"}}>verified</span>
<span className="font-label text-xs uppercase tracking-widest font-bold">Verified on Ledger</span>
</div>
<h1 className="font-headline text-5xl lg:text-7xl font-extrabold text-primary leading-[1.1] mb-8 tracking-tight">
                        Trust Your Medicine, <br/>
<span className="text-secondary">Secure the Chain.</span>
</h1>
<p className="text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
                        Eliminate counterfeit pharmaceuticals with end-to-end immutable tracking. Every pill, every batch, every movement recorded on the sovereign ledger.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="bg-primary-container text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all active:scale-95 flex items-center gap-2">
                            Verify Product
                            <span className="material-symbols-outlined" data-icon="qr_code_scanner">qr_code_scanner</span>
</button>
<button onClick={() => window.location.href="/login/manufacturer"} className="bg-surface-container-high text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-surface-container-highest transition-all active:scale-95">
                            Manufacturer Login
                        </button>
</div>
</div>
<div className="lg:col-span-5 relative">
<div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
<img alt="Laboratory environment" className="w-full h-[500px] object-cover" data-alt="Close-up of high-tech laboratory equipment with glowing blue lights and glass vials, clean clinical pharmaceutical setting, soft bokeh" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB84rqZzRHIptB8XeLAd2AeaiZBPpceOur2cjDlafkAQROXHMCXIxXVs1cJBmGZ1AvlsU5YK24dD5pXBv0PfkbjXBkUDhEhzoxJltzM4F1nH0yEzfEkYtlQnY3Y3gk4HkTM6lbeW3KWhNap9wKCR_J8gCa61XYsTrlh5Ul9mdH1_kkNCCfV6ydqlP5LJEYnAHgziO2DotXBv6YOIk9ud-_mfX4-yV5XHsM6Cx5x76XSEhExikhBndxXYC2NGk_D4aVABdD3geh74eU"/>
<div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent"></div>
</div>

<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 max-w-[240px]">
<div className="flex items-center gap-3 mb-2">
<div className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></div>
<span className="font-label text-xs font-bold uppercase text-slate-500">Live Node Status</span>
</div>
<div className="font-headline font-bold text-primary tracking-tight">99.9% Immutable</div>
<div className="text-[10px] text-slate-400 mt-1 font-mono break-all">0x71C765...d8976f</div>
</div>
</div>
</div>

<div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-surface-container-low rounded-bl-[200px]"></div>
</section>

<section className="py-32 px-8 lg:px-24 bg-surface">
<div className="max-w-7xl mx-auto">
<div className="mb-20">
<h2 className="font-headline text-3xl lg:text-5xl font-bold text-primary mb-6">Redefining Transparency</h2>
<p className="text-on-surface-variant max-w-2xl text-lg">Our decentralized protocol ensures every stakeholder—from factory to pharmacy—contributes to a single version of the truth.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-xl flex flex-col justify-between group hover:translate-y-[-8px] transition-all duration-300">
<div>
<div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-8">
<span className="material-symbols-outlined text-primary text-3xl" data-icon="history_edu">history_edu</span>
</div>
<h3 className="font-headline text-2xl font-bold text-primary mb-4">Complete Provenance</h3>
<p className="text-on-surface-variant text-lg leading-relaxed max-w-lg">
                                Access the entire lifecycle of any pharmaceutical product. Track chemical synthesis, batch testing, and distribution routes with timestamped verification.
                            </p>
</div>
<div className="mt-12 flex items-center gap-4">
<span className="font-label text-xs font-bold uppercase tracking-widest text-primary">Explore Protocol</span>
<span className="material-symbols-outlined group-hover:translate-x-2 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</div>
</div>

<div className="bg-primary p-10 rounded-xl text-on-primary flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-4xl mb-8" data-icon="groups">groups</span>
<h3 className="font-headline text-2xl font-bold mb-4">Multi-Stakeholder Governance</h3>
<p className="text-on-primary-container text-base leading-relaxed">
                                Roles for Manufacturers, Logistics Providers, and Dispensaries integrated via smart contracts.
                            </p>
</div>
<div className="space-y-4 mt-8">
<div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg">
<span className="material-symbols-outlined text-sm" data-icon="check_circle">check_circle</span>
<span className="text-sm font-medium">Manufacturer Minting</span>
</div>
<div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg">
<span className="material-symbols-outlined text-sm" data-icon="check_circle">check_circle</span>
<span className="text-sm font-medium">Distributor Handshake</span>
</div>
</div>
</div>

<div className="bg-surface-container-low p-10 rounded-xl flex flex-col items-center text-center justify-center">
<div className="bg-white p-6 rounded-2xl shadow-sm mb-6">
<span className="material-symbols-outlined text-6xl text-primary" data-icon="qr_code_2">qr_code_2</span>
</div>
<h3 className="font-headline text-2xl font-bold text-primary mb-3">Consumer Verification</h3>
<p className="text-on-surface-variant text-sm">
                            Instant QR scanning for patients to verify authenticity at the point of purchase.
                        </p>
</div>

<div className="md:col-span-2 bg-secondary p-1 rounded-xl">
<div className="bg-surface-container-lowest h-full w-full rounded-[calc(0.75rem-1px)] p-10 flex flex-col md:flex-row gap-10 items-center">
<div className="flex-1">
<h3 className="font-headline text-2xl font-bold text-primary mb-4">Immutable Ledger Security</h3>
<p className="text-on-surface-variant mb-6">
                                    Utilizing Zero-Knowledge Proofs to maintain commercial privacy while ensuring 100% public auditability of batch movements.
                                </p>
<div className="bg-surface-container-highest font-mono p-4 rounded text-xs text-primary overflow-hidden whitespace-nowrap opacity-70">
                                    SHA-256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649...
                                </div>
</div>
<div className="w-full md:w-48 h-48 bg-slate-100 rounded-xl overflow-hidden">
<img alt="Blockchain visualization" className="w-full h-full object-cover" data-alt="Abstract digital representation of a secure blockchain network with glowing nodes and intricate interconnected blue lines on dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIhVmNCfAiELGejx9wdtjhBnHB1i3Yd22YruqJVYFfH6w3wvQIaA7KuRtGdWdIYpvPUlIDHV5pbyg34IdslcJNXTyEFK56UEJUTwizoBUA_Whcb9zm8GFbr6bZOjq0q4Q_65rDqTBrpgyN15HWY6O20HJsODHRlwyAcNjRrD7JIg4TTUfWZ_IFRXCou0-yaXtCMvjDBvIOeTBGr3ayRVNBVdmEtRRwGLLHVFNNeSOQH8scINb8CmsUycZM4tpyjWsP8qP2cWFwwfw"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-8 lg:px-24">
<div className="max-w-5xl mx-auto bg-surface-container-low rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden">
<div className="relative z-10">
<h2 className="font-headline text-4xl lg:text-5xl font-extrabold text-primary mb-8 tracking-tight">Ready to Secure Your Supply Chain?</h2>
<p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">
                        Join the network of world-class pharmaceutical leaders ensuring patient safety through blockchain technology.
                    </p>
<div className="flex flex-col sm:flex-row justify-center gap-6">
<button className="bg-primary text-on-primary px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all">
                            Get Implementation Kit
                        </button>
<button className="bg-transparent border-2 border-primary text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-white transition-all">
                            View API Docs
                        </button>
</div>
</div>

<div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full"></div>
<div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full"></div>
</div>
</section>
</main>

<footer className="w-full py-12 border-t border-slate-100 bg-white pt-8 mt-16">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto">
<div className="col-span-1">
<div className="font-headline font-extrabold text-blue-900 text-2xl mb-4" onClick={() => window.location.href="/" } style={{cursor: "pointer"}}>PharmaChain</div>
<p className="text-slate-500 text-sm leading-relaxed mb-6">The definitive protocol for pharmaceutical integrity and supply chain transparency.</p>
</div>
<div className="col-span-1 space-y-4">
<h4 className="font-headline text-xs uppercase tracking-widest text-teal-700 font-bold">Platform</h4>
<ul className="space-y-2">
<li><a className="text-slate-400 hover:text-teal-600 transition-colors cursor-pointer text-xs font-medium uppercase tracking-widest" href="#">Smart Contracts</a></li>
<li><a className="text-slate-400 hover:text-teal-600 transition-colors cursor-pointer text-xs font-medium uppercase tracking-widest" href="#">Privacy Protocol</a></li>
<li><a className="text-slate-400 hover:text-teal-600 transition-colors cursor-pointer text-xs font-medium uppercase tracking-widest" href="#">Node Status</a></li>
</ul>
</div>
<div className="col-span-1 space-y-4">
<h4 className="font-headline text-xs uppercase tracking-widest text-teal-700 font-bold">Resources</h4>
<ul className="space-y-2">
<li><a className="text-slate-400 hover:text-teal-600 transition-colors cursor-pointer text-xs font-medium uppercase tracking-widest" href="#">API Docs</a></li>
<li><a className="text-slate-400 hover:text-teal-600 transition-colors cursor-pointer text-xs font-medium uppercase tracking-widest" href="#">Developer Sandbox</a></li>
<li><a className="text-slate-400 hover:text-teal-600 transition-colors cursor-pointer text-xs font-medium uppercase tracking-widest" href="#">Security Audit</a></li>
</ul>
</div>
<div className="col-span-1 space-y-4">
<h4 className="font-headline text-xs uppercase tracking-widest text-teal-700 font-bold">Legal</h4>
<ul className="space-y-2">
<li><a className="text-slate-400 hover:text-teal-600 transition-colors cursor-pointer text-xs font-medium uppercase tracking-widest" href="#">Terms of Nodes</a></li>
<li><a className="text-slate-400 hover:text-teal-600 transition-colors cursor-pointer text-xs font-medium uppercase tracking-widest" href="#">Privacy Policy</a></li>
<li><a className="text-slate-400 hover:text-teal-600 transition-colors cursor-pointer text-xs font-medium uppercase tracking-widest" href="#">Compliance</a></li>
</ul>
</div>
</div>
<div className="mt-12 pt-8 px-8 max-w-7xl mx-auto border-t border-slate-50 text-center">
<p className="text-slate-400 text-[10px] uppercase tracking-[0.2em]">© 2024 PHARMACHAIN IMMUTABLE LEDGER TECHNOLOGY. ALL RIGHTS RESERVED.</p>
</div>
</footer>

    </div>
  );
}
