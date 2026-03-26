import React from 'react';

export default function ManufacturerDashboard() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-body">
      

<aside className="h-screen w-64 bg-slate-50 dark:bg-slate-950 flex flex-col py-6 border-r-0 shrink-0">
<div className="px-6 mb-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white">
<span className="material-symbols-outlined" data-icon="qr_code_2">qr_code_2</span>
</div>
<div>
<h2 className="text-lg font-bold text-blue-900 dark:text-white leading-none">Sovereign Ledger</h2>
<p className="text-[10px] uppercase tracking-widest text-secondary mt-1 font-bold">Node Status: Active</p>
</div>
</div>
</div>
<nav className="flex-1 space-y-1 overflow-y-auto">

<a className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg px-4 py-3 mx-2 flex items-center gap-3 font-['Inter'] text-sm font-medium hover:translate-x-1 transition-transform active:opacity-80" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Dashboard</span>
</a>
<a className="text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 px-4 py-3 mx-2 rounded-lg flex items-center gap-3 font-['Inter'] text-sm font-medium hover:translate-x-1 transition-transform active:opacity-80" href="#">
<span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
<span>Inventory</span>
</a>
<a className="text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 px-4 py-3 mx-2 rounded-lg flex items-center gap-3 font-['Inter'] text-sm font-medium hover:translate-x-1 transition-transform active:opacity-80" href="#">
<span className="material-symbols-outlined" data-icon="account_balance_wallet">account_balance_wallet</span>
<span>Ledger</span>
</a>
<a className="text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 px-4 py-3 mx-2 rounded-lg flex items-center gap-3 font-['Inter'] text-sm font-medium hover:translate-x-1 transition-transform active:opacity-80" href="#">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
<span>Analytics</span>
</a>
<a className="text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 px-4 py-3 mx-2 rounded-lg flex items-center gap-3 font-['Inter'] text-sm font-medium hover:translate-x-1 transition-transform active:opacity-80" href="#">
<span className="material-symbols-outlined" data-icon="help_center">help_center</span>
<span>Support</span>
</a>
</nav>
<div className="px-4 mt-auto space-y-1 pt-6 border-t border-slate-200 dark:border-slate-800">
<button className="w-full bg-primary text-white py-3 rounded-lg font-bold text-sm mb-4 active:scale-95 transition-all">
                Mint New Batch
            </button>
<a className="text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 px-4 py-3 rounded-lg flex items-center gap-3 font-['Inter'] text-sm font-medium hover:translate-x-1 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="shield_lock">shield_lock</span>
<span>Security Settings</span>
</a>
<a className="text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 px-4 py-3 rounded-lg flex items-center gap-3 font-['Inter'] text-sm font-medium hover:translate-x-1 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span>Logout</span>
</a>
</div>
</aside>

<main className="flex-1 flex flex-col overflow-y-auto relative">

<header className="fixed top-0 right-0 left-64 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-40 shadow-sm dark:shadow-none">
<div className="flex justify-between items-center px-8 py-4 max-w-full mx-auto">
<div className="flex items-center gap-8">
<span className="text-2xl font-black text-blue-900 dark:text-white tracking-tighter font-headline" onClick={() => window.location.href="/" } style={{cursor: "pointer"}}>PharmaChain</span>
<nav className="hidden md:flex gap-6 font-['Manrope'] font-bold tracking-tight">
<a className="text-blue-700 dark:text-blue-400 border-b-2 border-blue-700 dark:border-blue-400 pb-1" href="/manufacturer">Manufacturer</a>
<a className="text-slate-500 dark:text-slate-400 hover:text-blue-900 dark:hover:text-blue-200 transition-colors" href="/distributor">Distributor</a>
<a className="text-slate-500 dark:text-slate-400 hover:text-blue-900 dark:hover:text-blue-200 transition-colors" href="/consumer">Consumer</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 mr-4">
<span className="material-symbols-outlined text-slate-400" data-icon="notifications">notifications</span>
<span className="material-symbols-outlined text-slate-400" data-icon="settings">settings</span>
</div>
<button className="bg-primary hover:bg-primary-container text-white px-5 py-2 rounded-lg font-bold text-sm active:scale-95 transition-all">
                        Connect Wallet
                    </button>
<img alt="User Profile Avatar" className="w-10 h-10 rounded-full border-2 border-primary/10" data-alt="Professional headshot of a female pharmaceutical researcher in a white lab coat with a clean clinical background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQLjno3Iiw6lg8LTEgT0_jIKBgN-VLg0matL42-iQ5VykV-i2XcFk-KD02MhoKYzXgwyuNgSSgW8yRwdhEHjPOaxRZBTT0_pkosZfKS9H2x2bGhyQeB5v-qSnRO9Z9-ZhcrcPIsp6gYPFDXO78vukuOIe_AAQ5KIMOZdlJ3CVpCU_9-DcvmVQV_OdZoc1N_zEvRu7n_GqF6_2WMm5Ao2GtyaQMb6u2xJ6r88tpPG58_v4K--swaveJFB-dxILCS80T5vMdExuuBA4"/>
</div>
</div>
</header>

<div className="mt-24 px-12 py-8 max-w-7xl w-full mx-auto space-y-12">

<section className="relative">
<div className="flex flex-col md:flex-row justify-between items-end gap-6">
<div>
<div className="inline-flex items-center gap-2 bg-tertiary-container/10 px-3 py-1 rounded-full mb-4">
<span className="w-2 h-2 rounded-full bg-tertiary verification-pulse"></span>
<span className="text-[10px] font-bold uppercase tracking-widest text-tertiary">Verified Manufacturer Node</span>
</div>
<h1 className="text-5xl font-black font-headline text-on-surface tracking-tighter leading-tight">
                            Immutable Production <br/>Management
                        </h1>
</div>
<div className="text-right">
<p className="text-sm font-label uppercase tracking-widest text-on-surface-variant font-bold">Account Balance</p>
<p className="text-3xl font-headline font-bold text-primary">1,284.50 <span className="text-lg opacity-50">PHM</span></p>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-12 gap-10">

<div className="lg:col-span-5 bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10">
<h3 className="text-xl font-headline font-bold mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-secondary" data-icon="add_circle">add_circle</span>
                        Mint New Batch
                    </h3>
<form className="space-y-5">
<div className="space-y-1.5">
<label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Product Name</label>
<input className="w-full bg-surface-container-high border-none rounded-lg focus:ring-2 focus:ring-secondary text-sm px-4 py-3 transition-all" placeholder="e.g. Amoxicillin 500mg" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Batch ID</label>
<input className="w-full bg-surface-container-high border-none rounded-lg focus:ring-2 focus:ring-secondary text-sm px-4 py-3 transition-all" placeholder="PC-2024-X102" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Expiry Date</label>
<input className="w-full bg-surface-container-high border-none rounded-lg focus:ring-2 focus:ring-secondary text-sm px-4 py-3 transition-all" type="date"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Manufacturing Location</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-3 text-slate-400 text-sm" data-icon="location_on">location_on</span>
<input className="w-full bg-surface-container-high border-none rounded-lg focus:ring-2 focus:ring-secondary text-sm pl-10 pr-4 py-3 transition-all" placeholder="Global Logistics Hub, Switzerland" type="text"/>
</div>
</div>
<div className="pt-4">
<button className="w-full bg-primary-container text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 active:scale-[0.98] transition-all" type="submit">
<span className="material-symbols-outlined" data-icon="token">token</span>
                                Authorize &amp; Mint Batch
                            </button>
<p className="text-[10px] text-center text-on-surface-variant mt-4 leading-relaxed">
                                By minting, you record this batch to the immutable ledger. <br/>Gas fees apply to this transaction.
                            </p>
</div>
</form>
</div>

<div className="lg:col-span-7 space-y-8">
<div className="grid grid-cols-2 gap-6">
<div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between h-40">
<span className="material-symbols-outlined text-primary text-3xl" data-icon="precision_manufacturing">precision_manufacturing</span>
<div>
<p className="text-4xl font-headline font-black">42</p>
<p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Active Batches</p>
</div>
</div>
<div className="bg-secondary text-white p-6 rounded-xl flex flex-col justify-between h-40">
<span className="material-symbols-outlined text-white text-3xl" data-icon="verified_user">verified_user</span>
<div>
<p className="text-4xl font-headline font-black">99.9%</p>
<p className="text-xs font-bold uppercase tracking-widest text-white/70">Compliance Rate</p>
</div>
</div>
</div>
<div className="relative rounded-xl overflow-hidden h-64 group">
<img alt="Laboratory Production" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="High-tech pharmaceutical manufacturing line with sterile equipment, bright blue lighting, and automated production components" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFA5_dc7JESfC0ie_Y_8ZiFPettDuaxRHQQRFbZstKEuRXk-1gcdlXN8JGFgZCE65gR7S0aIE5Lek8lIOEf8eYPfSjy37ep8pDK8x1hbnWwObS4t61YYMhUiAG0h_B2ZlEw7N7pElXJKIzAE7WSjouClVmJzyRoaSz6l-sQTvE_gTKz8c7PIPTZmso29fcnhTwlMhXakn6Y02nqb0UBEL0XjuM-Y-hRHfKXFcAHXEi1UBsFQClH7qVIvAGICobk4e-AbIm4LhEIuU"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
<div className="text-white">
<h4 className="text-xl font-headline font-bold">Live Network Visualization</h4>
<p className="text-sm opacity-80">Monitoring node propagation across 14 global regions.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 overflow-hidden">
<div className="p-8 border-b border-surface-container-high flex justify-between items-center">
<h3 className="text-xl font-headline font-bold">Recent Batches</h3>
<div className="flex gap-2">
<button className="p-2 hover:bg-surface-container text-slate-400 rounded-lg transition-colors">
<span className="material-symbols-outlined" data-icon="filter_list">filter_list</span>
</button>
<button className="p-2 hover:bg-surface-container text-slate-400 rounded-lg transition-colors">
<span className="material-symbols-outlined" data-icon="download">download</span>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-surface-container-low text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
<th className="px-8 py-4">Product &amp; Batch ID</th>
<th className="px-8 py-4">Status</th>
<th className="px-8 py-4">Location</th>
<th className="px-8 py-4">Verification Hash</th>
<th className="px-8 py-4 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-high">
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-8 py-5">
<div className="flex flex-col">
<span className="font-bold text-on-surface">Lisinopril 10mg</span>
<span className="text-xs text-on-surface-variant">#BATCH-7721-A</span>
</div>
</td>
<td className="px-8 py-5">
<span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                                        Manufactured
                                    </span>
</td>
<td className="px-8 py-5 text-sm text-on-surface-variant">Zurich, CH</td>
<td className="px-8 py-5">
<code className="bg-surface-container-highest px-3 py-1 rounded font-mono text-[10px] text-primary select-all">0x7a2...f4e1</code>
</td>
<td className="px-8 py-5 text-right">
<button className="inline-flex items-center gap-2 text-secondary font-bold text-xs hover:bg-secondary/10 px-4 py-2 rounded-lg transition-all">
<span className="material-symbols-outlined text-sm" data-icon="qr_code">qr_code</span>
                                        Generate QR Code
                                    </button>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-8 py-5">
<div className="flex flex-col">
<span className="font-bold text-on-surface">Insulin Glargine</span>
<span className="text-xs text-on-surface-variant">#BATCH-8820-B</span>
</div>
</td>
<td className="px-8 py-5">
<span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                                        In Transit
                                    </span>
</td>
<td className="px-8 py-5 text-sm text-on-surface-variant">Frankfurt, DE</td>
<td className="px-8 py-5">
<code className="bg-surface-container-highest px-3 py-1 rounded font-mono text-[10px] text-primary select-all">0x1bc...d9a3</code>
</td>
<td className="px-8 py-5 text-right">
<button className="inline-flex items-center gap-2 text-secondary font-bold text-xs hover:bg-secondary/10 px-4 py-2 rounded-lg transition-all">
<span className="material-symbols-outlined text-sm" data-icon="qr_code">qr_code</span>
                                        Generate QR Code
                                    </button>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-8 py-5">
<div className="flex flex-col">
<span className="font-bold text-on-surface">Metformin HCL</span>
<span className="text-xs text-on-surface-variant">#BATCH-9941-C</span>
</div>
</td>
<td className="px-8 py-5">
<span className="inline-flex items-center gap-1.5 bg-tertiary-container/20 text-tertiary px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                                        Delivered
                                    </span>
</td>
<td className="px-8 py-5 text-sm text-on-surface-variant">New Jersey, US</td>
<td className="px-8 py-5">
<code className="bg-surface-container-highest px-3 py-1 rounded font-mono text-[10px] text-primary select-all">0x4d5...c218</code>
</td>
<td className="px-8 py-5 text-right">
<button className="inline-flex items-center gap-2 text-secondary font-bold text-xs hover:bg-secondary/10 px-4 py-2 rounded-lg transition-all">
<span className="material-symbols-outlined text-sm" data-icon="qr_code">qr_code</span>
                                        Generate QR Code
                                    </button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-6 border-t border-surface-container-high flex justify-center">
<button className="text-sm font-bold text-primary hover:underline transition-all">View All Ledger Entries</button>
</div>
</section>
</div>

<footer className="w-full py-12 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 mt-16">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto">
<div className="col-span-1 md:col-span-1">
<span className="font-['Manrope'] font-extrabold text-blue-900 dark:text-white text-xl" onClick={() => window.location.href="/" } style={{cursor: "pointer"}}>PharmaChain</span>
<p className="mt-4 text-[10px] uppercase tracking-widest text-slate-400 leading-relaxed">
                        Secure supply chain monitoring powered by immutable blockchain protocols.
                    </p>
</div>
<div>
<h5 className="font-bold text-xs uppercase tracking-widest text-teal-700 dark:text-teal-400 mb-6">Protocol</h5>
<ul className="space-y-3">
<li><a className="text-slate-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors font-['Inter'] text-xs uppercase tracking-widest" href="#">Smart Contracts</a></li>
<li><a className="text-slate-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors font-['Inter'] text-xs uppercase tracking-widest" href="#">Privacy Protocol</a></li>
</ul>
</div>
<div>
<h5 className="font-bold text-xs uppercase tracking-widest text-teal-700 dark:text-teal-400 mb-6">Infrastructure</h5>
<ul className="space-y-3">
<li><a className="text-slate-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors font-['Inter'] text-xs uppercase tracking-widest" href="#">Node Status</a></li>
<li><a className="text-slate-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors font-['Inter'] text-xs uppercase tracking-widest" href="#">API Docs</a></li>
</ul>
</div>
<div className="flex flex-col justify-between">
<div className="flex gap-4 mb-8 md:mb-0">
<span className="material-symbols-outlined text-slate-300 hover:text-primary cursor-pointer transition-colors" data-icon="hub">hub</span>
<span className="material-symbols-outlined text-slate-300 hover:text-primary cursor-pointer transition-colors" data-icon="terminal">terminal</span>
<span className="material-symbols-outlined text-slate-300 hover:text-primary cursor-pointer transition-colors" data-icon="fingerprint">fingerprint</span>
</div>
<p className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-bold">
                        © 2024 PharmaChain Immutable Ledger Technology. All Rights Reserved.
                    </p>
</div>
</div>
</footer>
</main>

    </div>
  );
}
