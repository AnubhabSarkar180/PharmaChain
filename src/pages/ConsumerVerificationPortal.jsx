import React from 'react';

export default function ConsumerVerificationPortal() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-body">
      

<nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm dark:shadow-none">
<div className="flex justify-between items-center px-8 py-4 max-w-full mx-auto">
<div className="flex items-center gap-8">
<span className="text-2xl font-black text-blue-900 dark:text-white tracking-tighter font-headline" onClick={() => window.location.href="/" } style={{cursor: "pointer"}}>PharmaChain</span>
<div className="hidden md:flex gap-6 items-center">
<a className="font-headline font-bold tracking-tight text-slate-500 dark:text-slate-400 hover:text-blue-900 dark:hover:text-blue-200 transition-colors" href="/manufacturer">Manufacturer</a>
<a className="font-headline font-bold tracking-tight text-slate-500 dark:text-slate-400 hover:text-blue-900 dark:hover:text-blue-200 transition-colors" href="/distributor">Distributor</a>
<a className="font-headline font-bold tracking-tight text-blue-700 dark:text-blue-400 border-b-2 border-blue-700 dark:border-blue-400 pb-1" href="/consumer">Consumer</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex gap-4 mr-4">
<span className="material-symbols-outlined text-slate-500 cursor-pointer hover:bg-slate-50 p-2 rounded-full transition-all">notifications</span>
<span className="material-symbols-outlined text-slate-500 cursor-pointer hover:bg-slate-50 p-2 rounded-full transition-all">settings</span>
</div>
<button className="bg-primary text-on-primary px-6 py-2 rounded font-headline font-bold tracking-tight active:scale-95 duration-200 transition-all">Connect Wallet</button>
</div>
</div>
</nav>
<main className="pt-24 pb-12 px-4 md:px-8 max-w-4xl mx-auto">

<header className="mb-12 text-center md:text-left">
<h1 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight mb-4">Verify Your Medicine</h1>
<p className="text-on-surface-variant text-lg max-w-2xl">Access immutable proof of authenticity. Scan your pharmaceutical product to track its journey from the lab to your hands.</p>
</header>

<section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
<div className="md:col-span-8 bg-surface-container-lowest p-8 rounded-xl shadow-sm">
<label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 font-label">Manual Batch Entry</label>
<div className="flex flex-col sm:flex-row gap-3">
<div className="relative flex-grow">
<input className="w-full bg-surface-container-high border-none rounded-lg px-4 py-4 focus:ring-2 focus:ring-secondary/20 focus:bg-surface-container-lowest transition-all font-body text-on-surface" placeholder="Enter Batch ID (e.g., PHX-9921-BA)" type="text"/>
</div>
<button className="bg-primary-container text-white px-8 py-4 rounded-lg font-headline font-bold hover:brightness-110 active:scale-95 transition-all">Verify Batch</button>
</div>
<p className="mt-4 text-sm text-on-surface-variant/70 italic">Example: BTC-4429-001X-NY</p>
</div>
<div className="md:col-span-4 bg-primary-container text-white p-8 rounded-xl flex flex-col items-center justify-center text-center cursor-pointer hover:brightness-105 active:scale-95 transition-all group">
<div className="bg-white/10 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-4xl" style={{"fontVariationSettings":"'wght' 300"}}>qr_code_scanner</span>
</div>
<h3 className="font-headline font-bold text-xl">Scan QR Code</h3>
<p className="text-on-primary-container text-sm mt-1">Instant Verification</p>
</div>
</section>

<section className="space-y-8">
<div className="bg-surface-container-low p-1 rounded-2xl">

<div className="bg-tertiary text-on-tertiary p-6 rounded-t-xl flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-4">
<div className="bg-tertiary-fixed text-on-tertiary-fixed p-3 rounded-full verification-pulse">
<span className="material-symbols-outlined text-3xl" style={{"fontVariationSettings":"'FILL' 1"}}>verified</span>
</div>
<div>
<h2 className="font-headline font-extrabold text-2xl leading-none">Verified Product</h2>
<p className="text-tertiary-fixed/80 text-sm font-label uppercase tracking-widest mt-1">Authenticity Guaranteed by PharmaChain</p>
</div>
</div>
<div className="bg-tertiary-container text-on-tertiary-container px-4 py-2 rounded-full flex items-center gap-2">
<span className="material-symbols-outlined text-sm">lock</span>
<span className="text-xs font-bold font-label tracking-tighter">HASH: 0x71c...f8e2</span>
</div>
</div>

<div className="p-8 bg-surface-container-lowest rounded-b-xl border-t border-surface-container">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div>
<h3 className="font-headline font-bold text-on-surface mb-8 text-lg">Product Journey</h3>
<div className="space-y-0 relative">

<div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-surface-container-highest"></div>

<div className="relative pl-12 pb-10">
<div className="absolute left-0 top-0 w-10 h-10 bg-surface-container-high rounded-full flex items-center justify-center z-10 border-4 border-surface-container-lowest">
<span className="material-symbols-outlined text-primary text-xl">factory</span>
</div>
<p className="text-xs font-label font-bold text-secondary uppercase tracking-widest">Manufacturer</p>
<h4 className="font-headline font-bold text-on-surface">BioMed Global Labs</h4>
<p className="text-sm text-on-surface-variant mt-1">Released: Oct 12, 2023 • 09:42 AM</p>
<p className="text-xs text-on-surface-variant/60 font-mono mt-1">Origin: Basel, Switzerland</p>
</div>

<div className="relative pl-12 pb-10">
<div className="absolute left-0 top-0 w-10 h-10 bg-surface-container-high rounded-full flex items-center justify-center z-10 border-4 border-surface-container-lowest">
<span className="material-symbols-outlined text-primary text-xl">local_shipping</span>
</div>
<p className="text-xs font-label font-bold text-secondary uppercase tracking-widest">Distributor</p>
<h4 className="font-headline font-bold text-on-surface">SwiftCare Logistics</h4>
<p className="text-sm text-on-surface-variant mt-1">Accepted: Oct 15, 2023 • 02:15 PM</p>
<p className="text-xs text-on-surface-variant/60 font-mono mt-1">Cold Chain Integrity: 4.2°C (Verified)</p>
</div>

<div className="relative pl-12">
<div className="absolute left-0 top-0 w-10 h-10 bg-primary-container rounded-full flex items-center justify-center z-10 border-4 border-surface-container-lowest shadow-lg">
<span className="material-symbols-outlined text-white text-xl">local_pharmacy</span>
</div>
<p className="text-xs font-label font-bold text-secondary uppercase tracking-widest">Pharmacy</p>
<h4 className="font-headline font-bold text-on-surface">Central Health Pharmacy</h4>
<p className="text-sm text-on-surface-variant mt-1">Arrived: Oct 20, 2023 • 11:30 AM</p>
<p className="text-xs text-on-surface-variant/60 font-mono mt-1">Inventory ID: NY-CHP-901</p>
</div>
</div>
</div>

<div className="space-y-6">
<div className="bg-surface-container-low p-6 rounded-xl space-y-4">
<h3 className="font-headline font-bold text-on-surface text-lg">Batch Specifications</h3>
<div className="grid grid-cols-2 gap-4">
<div>
<span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Medicine Name</span>
<p className="font-bold text-on-surface">CardioMax 50mg</p>
</div>
<div>
<span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Batch ID</span>
<p className="font-bold text-on-surface">BTC-4429-NY</p>
</div>
<div>
<span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Exp. Date</span>
<p className="font-bold text-error">Nov 2025</p>
</div>
<div>
<span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Dosage Form</span>
<p className="font-bold text-on-surface">Film-coated Tablet</p>
</div>
</div>
<div className="pt-4 border-t border-surface-container-highest">
<span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Manufacturing Site</span>
<div className="flex items-center gap-3 mt-2">
<div className="w-12 h-12 rounded bg-surface-container-highest overflow-hidden">
<img alt="Laboratory facility" className="w-full h-full object-cover" data-alt="Close-up of high-tech pharmaceutical manufacturing laboratory with clean white equipment and clinical blue lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDT0MESBZi-6zuanAHkkjzb8u1UnXkh6JJH4VI50PkUZ60UdT8Prx9h_C8y9z4xJlhSmVDyPIHxnH8UExtrl5lMEAYTQqhWpLowXfgDWR-Xy4TYzr93uEX6d8ANNX2UJG9GBBVhFOtZO1dTJ2nRBfAOfRPGX1KIjis8_ZZoBAKj3-MSw_SEO5q1nwLOPhnwytZEcPK-PKOsOe6UOzkkSUx0ZykcNvXCBlvjnKJ34I3zQnGZ9zmVlDQTyVmO_nx9Ybu6L8ajaEtxXo"/>
</div>
<div>
<p className="text-sm font-bold">BioMed Plant #4</p>
<p className="text-xs text-on-surface-variant">Certified GMP Facility</p>
</div>
</div>
</div>
</div>
<button className="w-full flex items-center justify-center gap-2 border-2 border-primary-container text-primary-container py-4 rounded-lg font-headline font-bold hover:bg-primary-container/5 transition-all">
<span className="material-symbols-outlined">download</span>
                                Download Verification PDF
                            </button>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white dark:bg-slate-950 w-full py-12 border-t border-slate-100 dark:border-slate-800 pt-8 mt-16">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto">
<div className="col-span-1 md:col-span-2">
<span className="font-headline font-extrabold text-blue-900 dark:text-white text-xl" onClick={() => window.location.href="/" } style={{cursor: "pointer"}}>PharmaChain</span>
<p className="mt-4 text-slate-500 dark:text-slate-400 text-sm max-w-sm normal-case tracking-normal">Securing the global pharmaceutical supply chain through immutable ledger technology. Trust in every dose.</p>
</div>
<div>
<h4 className="font-body text-xs uppercase tracking-widest font-bold text-teal-700 dark:text-teal-400 mb-4">Resources</h4>
<ul className="space-y-2">
<li><a className="text-slate-400 dark:text-slate-600 hover:text-teal-600 dark:hover:text-teal-300 transition-colors text-xs uppercase tracking-widest" href="#">Smart Contracts</a></li>
<li><a className="text-slate-400 dark:text-slate-600 hover:text-teal-600 dark:hover:text-teal-300 transition-colors text-xs uppercase tracking-widest" href="#">Privacy Protocol</a></li>
<li><a className="text-slate-400 dark:text-slate-600 hover:text-teal-600 dark:hover:text-teal-300 transition-colors text-xs uppercase tracking-widest" href="#">Node Status</a></li>
<li><a className="text-slate-400 dark:text-slate-600 hover:text-teal-600 dark:hover:text-teal-300 transition-colors text-xs uppercase tracking-widest" href="#">API Docs</a></li>
</ul>
</div>
<div>
<h4 className="font-body text-xs uppercase tracking-widest font-bold text-teal-700 dark:text-teal-400 mb-4">Integrity</h4>
<p className="text-slate-400 text-xs uppercase tracking-widest leading-loose">© 2024 PharmaChain Immutable Ledger Technology. All Rights Reserved.</p>
</div>
</div>
</footer>

    </div>
  );
}
