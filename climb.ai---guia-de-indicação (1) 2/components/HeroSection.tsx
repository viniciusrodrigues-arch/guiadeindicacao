import React from 'react';
import { Logo } from './Logo';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between p-8 overflow-hidden bg-climb-black">
      {/* Background Futuristic Grid */}
      <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none"></div>
      
      {/* Abstract Animated Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-climb-teal/10 rounded-full blur-[100px] animate-pulse-slow pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] animate-pulse-slow pointer-events-none" style={{ animationDelay: '1s' }}></div>

      <header className="z-10 relative">
        <Logo className="h-10 md:h-14" />
      </header>

      <div className="flex-1 flex flex-col justify-center max-w-5xl mx-auto z-10 w-full relative">
        <div className="animate-float">
          <div className="border border-white/10 p-8 md:p-16 rounded-2xl bg-black/40 backdrop-blur-xl relative shadow-[0_0_100px_rgba(0,229,255,0.05)] overflow-hidden group">
            {/* Hover Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
            
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-climb-teal to-transparent opacity-50"></div>

            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 text-white leading-tight">
              Guia de <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-climb-teal to-white bg-[length:200%_auto] animate-[pulse_3s_infinite]">
                Indicação
              </span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-300 font-light max-w-2xl border-l-4 border-climb-teal pl-6">
              Um guia prático para identificar e indicar <span className="text-white font-semibold">clientes ideais</span>.
            </p>
          </div>
        </div>
      </div>

      <div className="z-10 flex justify-between items-end relative">
         <div className="text-xs text-gray-500 font-mono tracking-widest">
            SCROLL TO EXPLORE
         </div>
         {/* Decorative abstract chrome-like shape representation */}
         <div className="w-16 h-16 md:w-24 md:h-24 border-t border-l border-climb-teal/30 rounded-full animate-spin-slow opacity-50"></div>
      </div>
    </section>
  );
};