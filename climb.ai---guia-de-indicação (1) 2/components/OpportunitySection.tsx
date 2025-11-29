import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const OpportunitySection: React.FC = () => {
  const opportunities = [
    "Estamos perdendo muito tempo com isso.",
    "Tem muito retrabalho.",
    "Estamos crescendo, mas o operacional não acompanha.",
    "A gente faz isso na mão até hoje."
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-black overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute right-0 top-20 w-1/3 h-full bg-gradient-to-l from-neutral-900 to-transparent opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20 flex flex-col md:flex-row gap-8 items-start md:items-end justify-between border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-3 text-climb-teal mb-2">
              <AlertTriangle size={24} className="animate-pulse" />
              <span className="font-mono text-sm tracking-widest uppercase">Detecção de Sinal</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-none tracking-tighter">
              SINAIS DE<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-climb-teal to-blue-500">OPORTUNIDADE</span>
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-sm text-right">
            Frases que indicam problemas claros, urgentes e com alto potencial de solução.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-climb-teal rounded-sm transform translate-x-2 translate-y-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500"></div>
            <div className="absolute inset-0 border-2 border-white/20 rounded-sm transform -translate-x-2 -translate-y-2 group-hover:-translate-x-4 group-hover:-translate-y-4 transition-transform duration-500"></div>
            <div className="relative overflow-hidden rounded-sm scanline">
               <div className="absolute inset-0 bg-climb-teal/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity"></div>
               <img 
                src="https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?q=80&w=2071&auto=format&fit=crop" 
                alt="Stress no trabalho" 
                className="relative grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 object-cover h-[500px] w-full"
              />
            </div>
          </div>

          <div className="space-y-6">
            {opportunities.map((text, idx) => (
              <div key={idx} className="group relative p-6 border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-lg overflow-hidden cursor-default hover:border-climb-teal/30">
                {/* Progress bar effect on hover */}
                <div className="absolute bottom-0 left-0 h-1 bg-climb-teal w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                
                <div className="flex items-start gap-4">
                  <span className="font-mono text-climb-teal/50 text-sm mt-1">0{idx + 1}</span>
                  <p className="text-2xl md:text-3xl text-gray-300 group-hover:text-white transition-colors duration-300 font-light">
                    "{text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};