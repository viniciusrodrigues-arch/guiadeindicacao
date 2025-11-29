import React from 'react';
import { HeroSection } from './components/HeroSection';
import { ScriptSection } from './components/ScriptSection';
import { OpportunitySection } from './components/OpportunitySection';
import { ContextSection } from './components/ContextSection';
import { MindsetSection } from './components/MindsetSection';
import { ContactSection } from './components/ContactSection';

function App() {
  return (
    <main className="bg-black text-white min-h-screen selection:bg-climb-teal selection:text-black font-sans">
      <HeroSection />
      <ScriptSection />
      <OpportunitySection />
      <ContextSection />
      <MindsetSection />
      <ContactSection />
      
      <footer className="py-6 text-center text-gray-600 text-sm border-t border-gray-900">
        <p>&copy; {new Date().getFullYear()} Climb.ai. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}

export default App;