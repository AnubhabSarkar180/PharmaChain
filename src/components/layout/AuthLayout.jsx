import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function AuthLayout({ children, title, subtitle, imageSrc, quote, roleTag }) {
  return (
    <div className="min-h-screen bg-surface flex selection:bg-primary-fixed">
      {/* Left Panel - Image Area */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent z-10" />
        <img src={imageSrc} alt="Auth visually" className="absolute inset-0 w-full h-full object-cover" />
        
        <div className="relative z-20 flex flex-col justify-between p-16 h-full text-white w-full">
          <div className="flex items-center gap-2 cursor-pointer w-max" onClick={() => window.location.href="/"}>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
              <span className="material-symbols-outlined text-sm">lock</span>
            </div>
            <span className="font-headline font-extrabold text-xl tracking-tighter">PharmaChain</span>
          </div>

          <div>
            <div className="inline-flex py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-label uppercase tracking-widest font-bold mb-6">
              {roleTag}
            </div>
            <h2 className="font-headline text-4xl lg:text-5xl font-bold leading-tight mb-4">{quote}</h2>
            <p className="text-white/70 font-body text-lg max-w-md">Join the sovereign ledger ensuring complete transparency in the global supply chain.</p>
          </div>
        </div>
      </div>

      {/* Right Panel - Form Area */}
      <div className="w-full lg:w-1/2 flex flex-col pt-8 px-8 sm:px-16 md:px-24">
        <a href="/" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer w-max font-label text-sm font-bold uppercase tracking-widest">
            <ArrowLeft size={16} /> Back to Network
        </a>
        
        <div className="flex flex-col flex-1 justify-center max-w-md w-full mx-auto py-12">
            <h1 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight mb-2">{title}</h1>
            <p className="text-on-surface-variant mb-10 max-w-sm">{subtitle}</p>
            
            {children}
        </div>
        
        <div className="pb-8 text-center mt-auto">
            <p className="text-[10px] text-on-surface-variant/60 font-body uppercase tracking-widest">
               Secured by PharmaChain Protocol 
            </p>
        </div>
      </div>
    </div>
  );
}
