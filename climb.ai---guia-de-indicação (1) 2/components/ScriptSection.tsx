import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export const ScriptSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopy = (id: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="min-h-screen py-24 px-6 md:px-12 bg-neutral-900/30 relative">
      {/* Decorative vertical line */}
      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-climb-teal/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px bg-climb-teal/50 flex-1 max-w-[100px]"></div>
          <h2 className="text-2xl md:text-4xl font-light uppercase tracking-[0.2em] text-white">
            Sugestão de <span className="text-climb-teal font-bold">Apresentação</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="group relative p-8 md:p-10 border border-white/5 rounded-2xl bg-gradient-to-b from-white/5 to-transparent hover:bg-white/5 hover:border-climb-teal/50 transition-all duration-500 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(0,229,255,0.1)] hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-climb-teal/10 to-transparent rounded-tr-2xl"></div>
            
            <button 
              onClick={() => handleCopy(1, "Olha, quando vejo alguma demanda que envolve automação, implementação de IA ou criação de um sistema sob medida, eu indico a Climb. Você conhece? Eles analisam empresa, entendem o que pode melhorar e desenvolvem soluções personalizadas que realmente economizam recursos ou aumentam receita, sem nada pronto ou genérico. Se você quiser, posso te conectar com ele pra uma conversa rápida de diagnóstico.")}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-climb-teal transition-all duration-300 group-hover:scale-110"
              title="Copiar texto"
            >
              {copiedId === 1 ? <Check size={20} className="text-white" /> : <Copy size={20} />}
            </button>
            
            <div className="mb-6 opacity-30 text-6xl font-serif leading-none">“</div>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-light relative z-10">
              Olha, quando vejo alguma demanda que envolve <span className="text-climb-teal font-medium drop-shadow-[0_0_8px_rgba(0,229,255,0.4)]">automação</span>, <span className="text-climb-teal font-medium drop-shadow-[0_0_8px_rgba(0,229,255,0.4)]">implementação de IA</span> ou criação de um <span className="text-climb-teal font-medium drop-shadow-[0_0_8px_rgba(0,229,255,0.4)]">sistema sob medida</span>, eu indico a <strong className="text-white">Climb</strong>. Você conhece?
              <br /><br />
              Eles analisam empresa, entendem o que pode melhorar e desenvolvem soluções <span className="text-climb-teal font-medium">personalizadas</span> que realmente <strong className="text-white">economizam recursos</strong> ou <strong className="text-white">aumentam receita</strong>, sem nada pronto ou genérico.
              <br /><br />
              <span className="text-white border-l-2 border-climb-teal pl-4 block mt-4 italic opacity-80 group-hover:opacity-100 transition-opacity">
                Se você quiser, posso te conectar com ele pra uma conversa rápida de diagnóstico.
              </span>
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative p-8 md:p-10 border border-white/5 rounded-2xl bg-gradient-to-b from-white/5 to-transparent hover:bg-white/5 hover:border-climb-teal/50 transition-all duration-500 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(0,229,255,0.1)] hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-climb-teal/10 to-transparent rounded-tr-2xl"></div>

            <button 
              onClick={() => handleCopy(2, "Tem um parceiro meu que cria sistemas personalizados, automações e inteligência artificial especificamente para pequenas e médias empresas. O diferencial é que ele não vende ferramenta pronta: ele entende o processo da empresa e monta exatamente o que ela precisa, seja automatizar tarefas repetitivas, integrar sistemas, criar dashboards, eliminar retrabalho ou até aplicar IA no fluxo. Se fizer sentido, posso te conectar pra uma conversa de 20 minutos. Ele te mostra rapidamente o que dá pra otimizar.")}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-climb-teal transition-all duration-300 group-hover:scale-110"
              title="Copiar texto"
            >
              {copiedId === 2 ? <Check size={20} className="text-white" /> : <Copy size={20} />}
            </button>
            
            <div className="mb-6 opacity-30 text-6xl font-serif leading-none">“</div>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-light relative z-10">
              Tem um parceiro meu que cria <strong className="text-white">sistemas personalizados, automações e IA</strong> <span className="text-climb-teal font-medium drop-shadow-[0_0_8px_rgba(0,229,255,0.4)]">especificamente para PMEs</span>. O diferencial é que ele <strong className="text-white">não vende ferramenta pronta</strong>: ele entende o processo e monta exatamente o que a empresa precisa.
              <br /><br />
              Seja <strong className="text-white">automatizar tarefas</strong>, <strong className="text-white">integrar sistemas</strong>, criar <strong className="text-white">dashboards</strong>, ou até <strong className="text-white">aplicar IA no fluxo</strong>.
              <br /><br />
               <span className="text-white border-l-2 border-climb-teal pl-4 block mt-4 italic opacity-80 group-hover:opacity-100 transition-opacity">
                Se fizer sentido, posso te conectar pra uma conversa de 20 minutos. Ele te mostra rapidamente o que dá pra otimizar.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};