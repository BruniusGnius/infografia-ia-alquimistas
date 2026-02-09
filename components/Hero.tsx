import React from 'react';
import { AlertTriangle, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="relative w-full pt-20 pb-16 border-b border-brand-border bg-brand-black overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-brand-black to-transparent z-10"></div>

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-neon-red/10 border-2 border-neon-red rounded text-neon-red font-bold text-sm tracking-widest uppercase">
          <AlertTriangle size={18} strokeWidth={3} />
          <span>Alerta Global: Terremoto de Habilidades</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-condensed font-black text-white leading-[0.9] tracking-tighter mb-8 drop-shadow-lg">
          REPORTE DE <br/>
          <span className="text-brand-gold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">MERCADO LABORAL</span>
        </h1>
        
        <div className="h-2 w-32 bg-brand-gold mx-auto mb-10 shadow-[0_0_20px_rgba(240,185,11,0.6)]"></div>

        {/* Updated Subtitle: Editorial Tone */}
        <h2 className="text-2xl md:text-4xl text-white font-condensed font-bold leading-tight max-w-4xl mx-auto mb-6 uppercase">
            La integración abrupta de la IA: <br className="hidden md:block"/>
            <span className="text-brand-gold">Datos sorprendentes que redefinirán el trabajo en 2026.</span>
        </h2>
        
        <p className="text-gray-200 text-lg md:text-xl font-medium max-w-2xl mx-auto mt-6 leading-relaxed">
          Un análisis visual basado en cifras del Foro Económico Mundial (WEF) y PwC sobre el futuro inmediato de tu profesión.
        </p>

        <div className="mt-10 flex justify-center gap-6 text-sm font-bold text-gray-300">
           <div className="flex items-center gap-2">
             <Globe size={16} />
             <span>WEF_JOBS_REPORT_2026.PDF</span>
           </div>
           <span>|</span>
           <div className="text-neon-red animate-pulse">STATUS: URGENT</div>
        </div>
      </div>
    </header>
  );
};

export default Hero;