import React from 'react';
import { Siren } from 'lucide-react';

export const ContextSection: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-neutral-900/20 relative overflow-hidden">
      {/* Background Radar Effect */}
      <div className="absolute top-1/2 left-1/4 w-[800px] h-[800px] border border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 animate-[spin_20s_linear_infinite] opacity-30 pointer-events-none">
          <div className="absolute top-0 left-1/2 w-full h-px bg-gradient-to-r from-transparent to-white/20 origin-left"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 relative z-10">
        
        {/* Title Column */}
        <div className="lg:col-span-5">
          <div className="sticky top-32">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-wider mb-6 animate-pulse">
              <Siren size={14} />
              Alerta Vermelho
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-none mb-8">
              Contextos<br />
              <span className="text-gray-500 font-light">de Alerta</span>
            </h2>

            <div className="relative w-full aspect-square max-w-sm mx-auto lg:mx-0">
               {/* Animated rings */}
               <div className="absolute inset-0 border border-climb-teal/20 rounded-full animate-ping [animation-duration:3s]"></div>
               <div className="absolute inset-12 border border-climb-teal/40 rounded-full animate-ping [animation-duration:3s] [animation-delay:0.5s]"></div>
               <div className="absolute inset-24 border border-climb-teal/60 rounded-full animate-ping [animation-duration:3s] [animation-delay:1s]"></div>
               <div className="absolute inset-[40%] bg-climb-teal rounded-full blur-xl opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Content Column */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Item 1 */}
          <div className="group p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-climb-teal/50 transition-all duration-300 hover:shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-climb-teal rounded-sm"></span>
              Volume alto + processos manuais
            </h3>
            <p className="text-xl text-gray-400 italic pl-5 border-l border-gray-800">
              "Muito pedido, muito boleto, muito contrato, muito aluno, muito cliente… mas tudo <span className="text-white">'no braço'</span>."
            </p>
          </div>

          {/* Item 2 */}
          <div className="group p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-climb-teal/50 transition-all duration-300 hover:shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <h3 className="text-2xl font-bold text-white mb-6">
               Dependência manual entre setores (Gargalo)
            </h3>
            <div className="flex flex-col md:flex-row items-center gap-4 text-lg font-mono bg-black/50 p-6 rounded-xl border border-dashed border-gray-700">
                <span className="text-climb-teal">Comercial</span>
                <div className="h-px w-8 bg-gray-600 md:hidden"></div>
                <span className="hidden md:block text-gray-500">→</span>
                <span className="text-climb-teal">Financeiro</span>
                <div className="h-px w-8 bg-gray-600 md:hidden"></div>
                <span className="hidden md:block text-gray-500">→</span>
                <span className="text-white bg-red-500/20 px-2 py-1 rounded">Operacional</span>
            </div>
          </div>

          {/* Item 3 */}
          <div className="group p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-climb-teal/50 transition-all duration-300 hover:shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
               <span className="w-2 h-8 bg-red-500 rounded-sm"></span>
              Cegueira Financeira
            </h3>
            <div className="space-y-3 pl-5">
              <p className="text-xl text-gray-300">
                "Eu não sei onde estou <span className="text-red-400">perdendo dinheiro</span>."
              </p>
              <p className="text-xl text-gray-300">
                "A gente não tem <span className="text-climb-teal">dados</span> para decidir."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};