import React from 'react';
import { Instagram, Phone, Mail, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

export const ContactSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-black min-h-[80vh] flex flex-col justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-climb-teal/5 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto w-full relative z-10">
        <div className="text-center mb-16">
           <div className="inline-block p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8 animate-float">
             <Logo className="h-12 md:h-16" />
           </div>
           <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter">Vamos Conversar?</h2>
           <p className="text-xl text-gray-400">Conecte-se com o futuro da automação.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <a href="https://instagram.com/climb.ai_" target="_blank" rel="noreferrer" 
             className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-neutral-900 border border-white/10 hover:border-climb-teal/50 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-600 to-pink-600 flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(219,39,119,0.5)] transition-shadow">
              <Instagram size={32} className="text-white" />
            </div>
            <span className="text-gray-400 group-hover:text-white text-lg">Instagram</span>
            <span className="text-white font-bold text-xl mt-1">@climb.ai_</span>
            <div className="absolute inset-0 border border-transparent group-hover:border-pink-500/30 rounded-2xl transition-all duration-500"></div>
          </a>
            
          <a href="https://wa.me/5584969868444" target="_blank" rel="noreferrer"
             className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-neutral-900 border border-white/10 hover:border-climb-teal/50 transition-all duration-300 hover:-translate-y-2">
             <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-green-600 to-emerald-400 flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.5)] transition-shadow">
               <Phone size={32} className="text-white" />
             </div>
             <span className="text-gray-400 group-hover:text-white text-lg">WhatsApp</span>
             <span className="text-white font-bold text-xl mt-1">84 96986 8444</span>
             <div className="absolute inset-0 border border-transparent group-hover:border-green-500/30 rounded-2xl transition-all duration-500"></div>
          </a>
            
          <a href="mailto:rai@grupoclimb.ai"
             className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-neutral-900 border border-white/10 hover:border-climb-teal/50 transition-all duration-300 hover:-translate-y-2">
             <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-shadow">
               <Mail size={32} className="text-white" />
             </div>
             <span className="text-gray-400 group-hover:text-white text-lg">E-mail</span>
             <span className="text-white font-bold text-xl mt-1 text-center text-sm md:text-xl break-all">rai@grupoclimb.ai</span>
             <div className="absolute inset-0 border border-transparent group-hover:border-blue-500/30 rounded-2xl transition-all duration-500"></div>
          </a>
        </div>
      </div>
      
      {/* Footer Abstract Art */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-climb-teal to-transparent opacity-50"></div>
      
      <footer className="absolute bottom-6 w-full text-center">
        <p className="text-gray-600 text-sm flex items-center justify-center gap-2">
          &copy; {new Date().getFullYear()} Climb AI
          <span className="w-1 h-1 rounded-full bg-gray-600"></span>
          Todos os direitos reservados
        </p>
      </footer>
    </section>
  );
};