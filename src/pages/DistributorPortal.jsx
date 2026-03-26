import React from 'react';

export default function DistributorPortal() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-body">
      

<nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm dark:shadow-none flex justify-between items-center px-8 py-4 max-w-full mx-auto">
<div className="flex items-center gap-8">
<span className="text-2xl font-black text-blue-900 dark:text-white tracking-tighter font-headline" onClick={() => window.location.href="/" } style={{cursor: "pointer"}}>PharmaChain</span>
<div className="hidden md:flex gap-6 font-headline font-bold tracking-tight">
<a className="text-slate-500 dark:text-slate-400 hover:text-blue-900 dark:hover:text-blue-200 transition-colors" href="/manufacturer">Manufacturer</a>
<a className="text-blue-700 dark:text-blue-400 border-b-2 border-blue-700 dark:border-blue-400 pb-1" href="/distributor">Distributor</a>
<a className="text-slate-500 dark:text-slate-400 hover:text-blue-900 dark:hover:text-blue-200 transition-colors" href="/consumer">Consumer</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-lg">
<span className="material-symbols-outlined text-outline mr-2">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm w-48" placeholder="Search Ledger..." type="text"/>
</div>
<button className="material-symbols-outlined p-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all rounded-full">notifications</button>
<button className="material-symbols-outlined p-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all rounded-full">settings</button>
<button className="ml-2 bg-primary text-on-primary px-5 py-2 rounded-lg font-headline font-bold active:scale-95 duration-200">Connect Wallet</button>
</div>
</nav>
<div className="flex pt-20">

<aside className="hidden lg:flex flex-col h-[calc(100vh-80px)] w-64 fixed left-0 bg-slate-50 dark:bg-slate-950 py-6 font-['Inter'] text-sm font-medium">
<div className="px-6 mb-8">
<div className="flex items-center gap-3 mb-1">
<div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white">
<span className="material-symbols-outlined">account_balance</span>
</div>
<span className="text-lg font-bold text-blue-900 dark:text-white">Sovereign Ledger</span>
</div>
<p className="text-xs text-secondary font-semibold">Node Status: Active</p>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg px-4 py-3 mx-2 hover:translate-x-1 transition-transform" href="#">
<span className="material-symbols-outlined">dashboard</span> Dashboard
                </a>
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 px-4 py-3 mx-2 rounded-lg hover:translate-x-1 transition-transform" href="#">
<span className="material-symbols-outlined">inventory_2</span> Inventory
                </a>
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 px-4 py-3 mx-2 rounded-lg hover:translate-x-1 transition-transform" href="#">
<span className="material-symbols-outlined">account_balance_wallet</span> Ledger
                </a>
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 px-4 py-3 mx-2 rounded-lg hover:translate-x-1 transition-transform" href="#">
<span className="material-symbols-outlined">analytics</span> Analytics
                </a>
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 px-4 py-3 mx-2 rounded-lg hover:translate-x-1 transition-transform" href="#">
<span className="material-symbols-outlined">help_center</span> Support
                </a>
</nav>
<div className="px-4 mt-auto space-y-1">
<button className="w-full bg-primary-container text-white py-3 rounded-lg mb-4 font-bold flex items-center justify-center gap-2 active:opacity-80 transition-opacity">
<span className="material-symbols-outlined">add_circle</span> Mint New Batch
                </button>
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 px-4 py-3 rounded-lg" href="#">
<span className="material-symbols-outlined">shield_lock</span> Security Settings
                </a>
<a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 px-4 py-3 rounded-lg" href="#">
<span className="material-symbols-outlined">logout</span> Logout
                </a>
</div>
</aside>

<main className="flex-1 lg:ml-64 p-8 min-h-screen">

<header className="mb-12">
<h1 className="text-5xl font-extrabold text-primary font-headline tracking-tighter mb-2">Distributor Portal</h1>
<p className="text-on-surface-variant max-w-2xl">Manage pharmaceutical supply chains with immutable precision. Monitor incoming batches, verify transit authenticity, and authorize final-mile distribution.</p>
</header>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

<section className="lg:col-span-7 space-y-6">
<div className="flex items-center justify-between">
<h2 className="text-2xl font-bold font-headline text-on-surface">Pending Incoming Batches</h2>
<span className="bg-primary text-on-primary text-xs px-3 py-1 rounded-full font-bold">4 NEW</span>
</div>
<div className="space-y-4">

<div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border-l-4 border-primary group hover:bg-surface-container-low transition-colors duration-300">
<div className="flex justify-between items-start mb-4">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="font-headline font-bold text-lg">Amoxicillin X-202</span>
<span className="text-xs font-mono bg-surface-container-highest px-2 py-0.5 rounded text-on-surface-variant">#0x882A...F91</span>
</div>
<p className="text-sm text-on-surface-variant">Origin: Pfizer Bio-Facility A12</p>
</div>
<div className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 verification-pulse">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings":"'FILL' 1"}}>verified</span>
                                    LEDGER VERIFIED
                                </div>
</div>
<div className="grid grid-cols-3 gap-4 mb-6 text-sm">
<div>
<span className="block text-outline text-[10px] uppercase font-bold tracking-wider">Quantity</span>
<span className="font-semibold">5,000 Units</span>
</div>
<div>
<span className="block text-outline text-[10px] uppercase font-bold tracking-wider">Temp. Log</span>
<span className="font-semibold text-secondary">3.2°C (Stable)</span>
</div>
<div>
<span className="block text-outline text-[10px] uppercase font-bold tracking-wider">ETA</span>
<span className="font-semibold">2 Hours</span>
</div>
</div>
<div className="flex gap-3">
<button className="flex-1 bg-primary text-on-primary py-2.5 rounded font-bold text-sm active:scale-95 transition-all">Approve Receipt</button>
<button className="px-4 py-2.5 rounded border border-outline-variant text-primary hover:bg-surface-container-high transition-colors font-bold text-sm">View Manifest</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border-l-4 border-outline-variant hover:bg-surface-container-low transition-colors duration-300">
<div className="flex justify-between items-start mb-4">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="font-headline font-bold text-lg">Insulin Lantus Solostar</span>
<span className="text-xs font-mono bg-surface-container-highest px-2 py-0.5 rounded text-on-surface-variant">#0x31C4...B22</span>
</div>
<p className="text-sm text-on-surface-variant">Origin: Sanofi Global Hub</p>
</div>
<div className="bg-surface-container-highest text-on-surface-variant px-3 py-1 rounded-full text-xs font-bold">
                                    IN TRANSIT
                                </div>
</div>
<div className="grid grid-cols-3 gap-4 mb-6 text-sm">
<div>
<span className="block text-outline text-[10px] uppercase font-bold tracking-wider">Quantity</span>
<span className="font-semibold">1,200 Units</span>
</div>
<div>
<span className="block text-outline text-[10px] uppercase font-bold tracking-wider">Cold Chain</span>
<span className="font-semibold text-tertiary">Active</span>
</div>
<div>
<span className="block text-outline text-[10px] uppercase font-bold tracking-wider">ETA</span>
<span className="font-semibold">Tomorrow</span>
</div>
</div>
<div className="flex gap-3">
<button className="flex-1 bg-surface-container-high text-outline py-2.5 rounded font-bold text-sm cursor-not-allowed">Awaiting Arrival</button>
<button className="px-4 py-2.5 rounded border border-outline-variant text-primary hover:bg-surface-container-high transition-colors font-bold text-sm">Live Track</button>
</div>
</div>
</div>
</section>

<section className="lg:col-span-5 space-y-10">

<div className="bg-surface-container-low rounded-2xl p-8">
<div className="flex items-center justify-between mb-8">
<h2 className="text-xl font-bold font-headline text-on-surface">Current Inventory</h2>
<button className="text-primary text-sm font-bold flex items-center gap-1">Full Report <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
</div>
<div className="space-y-6">
<div className="flex items-center justify-between border-b border-outline-variant/20 pb-4">
<div>
<p className="font-bold">Paracetamol 500mg</p>
<p className="text-xs text-on-surface-variant">Exp: Oct 2025 • Batch G-99</p>
</div>
<div className="text-right">
<p className="font-bold text-primary">24,500</p>
<p className="text-[10px] text-outline font-bold uppercase">Units</p>
</div>
</div>
<div className="flex items-center justify-between border-b border-outline-variant/20 pb-4">
<div>
<p className="font-bold">Lisinopril Tablets</p>
<p className="text-xs text-on-surface-variant">Exp: Jan 2026 • Batch L-12</p>
</div>
<div className="text-right">
<p className="font-bold text-primary">8,200</p>
<p className="text-[10px] text-outline font-bold uppercase">Units</p>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<p className="font-bold">Atorvastatin</p>
<p className="text-xs text-on-surface-variant">Exp: Dec 2024 • Batch A-55</p>
</div>
<div className="text-right">
<p className="font-bold text-error">1,100</p>
<p className="text-[10px] text-outline font-bold uppercase">Low Stock</p>
</div>
</div>
</div>
<button className="w-full mt-8 bg-secondary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-on-secondary-container transition-colors shadow-lg shadow-secondary/20">
<span className="material-symbols-outlined">local_shipping</span> Initiate Transfer to Retailer
                        </button>
</div>

<div className="space-y-4">
<h3 className="text-sm font-bold uppercase tracking-widest text-outline">Immutable Custody History</h3>
<div className="relative pl-6 space-y-8 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-outline-variant/30">
<div className="relative">
<div className="absolute -left-[23px] top-1 w-4 h-4 rounded-full bg-secondary border-4 border-surface"></div>
<p className="text-xs font-bold text-secondary">TODAY, 09:12 AM</p>
<p className="font-bold text-sm">Batch Verified by PharmaChain Node</p>
<p className="text-xs text-on-surface-variant font-mono mt-1">SIG: 9x822...ee1a</p>
</div>
<div className="relative">
<div className="absolute -left-[23px] top-1 w-4 h-4 rounded-full bg-outline-variant border-4 border-surface"></div>
<p className="text-xs font-bold text-outline">YESTERDAY, 04:45 PM</p>
<p className="font-bold text-sm">Departed Manufacturer Facility</p>
<p className="text-xs text-on-surface-variant">Authorized by S. Miller</p>
</div>
<div className="relative">
<div className="absolute -left-[23px] top-1 w-4 h-4 rounded-full bg-outline-variant border-4 border-surface"></div>
<p className="text-xs font-bold text-outline">OCT 22, 11:20 AM</p>
<p className="font-bold text-sm">Batch Minted &amp; Sealed</p>
<p className="text-xs text-on-surface-variant">Hash: #f2e1...d901</p>
</div>
</div>
</div>
</section>
</div>

<section className="mt-20">
<div className="relative rounded-3xl overflow-hidden h-80 group">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Modern high-tech pharmaceutical warehouse with automated shelving and clinical blue lighting, clean and precise environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAconZZ4qImP1w6Ho9qpewANpjNfo1u3h70OMM_4y8QjA5JXyknwDkkmJ9veFEV88hhDzE2AkOuLOwndSAbalJBjMY_4U79k6qTVohtlEa25EwO0tMQWzYP5HzjRQz7zwNtJ9bZeLwVe8DfnKs_8Y9TO9RgCikWB0yH6Me2iuT-c2NwC0zef_64v2g7tIHoAB2ecOPSrB5eeG7L8qsaFG24rb7DESXMyP3_7MSYlVsEmPErXuLVqW4hTZNONMK7SGFnbWAsTutfAdk"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-10">
<h3 className="text-3xl font-bold text-white font-headline">Smart Logistics Monitoring</h3>
<p className="text-primary-fixed max-w-lg mt-2">Real-time IoT sensors integrated with the blockchain ledger provide 100% visibility into storage conditions and transit security.</p>
</div>
</div>
</section>
</main>
</div>

<footer className="w-full py-12 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 mt-16">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto">
<div className="col-span-1 md:col-span-1">
<span className="font-['Manrope'] font-extrabold text-blue-900 dark:text-white text-xl" onClick={() => window.location.href="/" } style={{cursor: "pointer"}}>PharmaChain</span>
<p className="mt-4 text-xs text-slate-500 font-body normal-case tracking-normal">Immutable supply chain infrastructure for the global pharmaceutical industry.</p>
</div>
<div className="space-y-4">
<h4 className="font-['Inter'] text-xs uppercase tracking-widest text-teal-700 dark:text-teal-400 font-bold">Infrastructure</h4>
<ul className="space-y-2 text-xs text-slate-400 font-medium">
<li><a className="hover:text-teal-600 transition-colors" href="#">Smart Contracts</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Privacy Protocol</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Node Status</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="font-['Inter'] text-xs uppercase tracking-widest text-teal-700 dark:text-teal-400 font-bold">Resources</h4>
<ul className="space-y-2 text-xs text-slate-400 font-medium">
<li><a className="hover:text-teal-600 transition-colors" href="#">API Docs</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Audit Reports</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Integration Guide</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="font-['Inter'] text-xs uppercase tracking-widest text-teal-700 dark:text-teal-400 font-bold">Compliance</h4>
<p className="text-[10px] text-slate-400 leading-relaxed uppercase">Full adherence to DSCSA requirements and global pharmaceutical serialization standards.</p>
</div>
</div>
<div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
<p className="font-['Inter'] text-[10px] uppercase tracking-widest text-slate-400">© 2024 PharmaChain Immutable Ledger Technology. All Rights Reserved.</p>
</div>
</footer>

    </div>
  );
}
