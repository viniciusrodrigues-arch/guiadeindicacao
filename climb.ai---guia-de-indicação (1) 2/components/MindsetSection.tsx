import React from 'react';
import { Check } from 'lucide-react';

export const MindsetSection: React.FC = () => {
  const signs = [
    "Gostam de eficiência",
    "São abertos a inovação",
    "Se irritam com retrabalho",
    "Querem escalar operação",
    "Reclamam de falta de controle",
    "Buscam previsibilidade e números",
    "Dizem \"preciso organizar a casa\""
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-black relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-climb-teal/5 to-transparent rounded-full -mr-64 -mt-64 blur-3xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
        <div>
          <h2 className="text-5xl md:text-7xl font-light text-white leading-tight tracking-tight">
            MINDSET<br />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-climb-teal to-white">TECNOLÓGICO</span>
          </h2>
          <p className="mt-8 text-xl text-gray-400 leading-relaxed border-l border-white/20 pl-6">
             Identifique decisores que já estão mentalmente preparados para a transformação digital.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-climb-teal/5 rounded-3xl blur-xl"></div>
          <div className="bg-neutral-900/80 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md relative overflow-hidden">
            {/* Grid decoration */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

            <ul className="space-y-4 relative z-10">
              {signs.map((sign, index) => (
                <li key={index} className="flex items-center gap-6 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group cursor-default">
                  <div className="w-10 h-10 rounded-full bg-climb-teal/10 flex items-center justify-center border border-climb-teal/30 group-hover:border-climb-teal group-hover:bg-climb-teal group-hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(0,229,255,0.1)] group-hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]">
                    <Check size={20} className="text-climb-teal group-hover:text-black transition-colors" />
                  </div>
                  <span className="text-xl text-gray-300 group-hover:text-white font-light tracking-wide">{sign}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};