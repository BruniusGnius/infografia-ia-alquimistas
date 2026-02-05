import React from 'react';
import { Quote } from 'lucide-react';

const TheMyth: React.FC = () => {
  return (
    <section className="py-12 bg-neutral-900 rounded-2xl relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Quote size={200} className="text-white transform rotate-12" />
        </div>

      <div className="relative px-8 max-w-3xl mx-auto text-center">
        <h3 className="text-gold-500 font-saira font-bold uppercase tracking-widest text-sm mb-4">
          La Verdad Corporativa
        </h3>
        
        <blockquote className="text-3xl md:text-4xl font-saira font-black text-white leading-tight mb-8">
          "La IA no te reemplazará, pero una persona que sepa usar la IA <span className="text-gold-500 underline decoration-2 underline-offset-4 decoration-white/30">sí lo hará</span>."
        </blockquote>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-10">
            <div className="bg-black/50 p-6 rounded-lg border border-neutral-800 w-full md:w-1/2">
                <h4 className="text-red-400 font-bold uppercase text-xs tracking-widest mb-2">Analista Tradicional</h4>
                <div className="h-1 w-12 bg-red-500/30 mb-4"></div>
                <ul className="text-left text-sm text-gray-400 space-y-2">
                    <li className="flex items-center gap-2"><span className="text-red-500 text-xs">●</span> Horas estructurando datos</li>
                    <li className="flex items-center gap-2"><span className="text-red-500 text-xs">●</span> Errores manuales</li>
                    <li className="flex items-center gap-2"><span className="text-red-500 text-xs">●</span> Estrés operativo</li>
                </ul>
            </div>
            
            <div className="bg-gradient-to-br from-gold-900/20 to-black p-6 rounded-lg border border-gold-500/50 w-full md:w-1/2 relative shadow-[0_0_30px_rgba(245,158,11,0.1)]">
                <div className="absolute -top-3 -right-3 bg-gold-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">GANADOR</div>
                <h4 className="text-gold-400 font-bold uppercase text-xs tracking-widest mb-2">Usuario Aumentado</h4>
                <div className="h-1 w-12 bg-gold-500/30 mb-4"></div>
                 <ul className="text-left text-sm text-gray-300 space-y-2">
                    <li className="flex items-center gap-2"><span className="text-gold-500 text-xs">●</span> Minutos en generación</li>
                    <li className="flex items-center gap-2"><span className="text-gold-500 text-xs">●</span> Precisión superior</li>
                    <li className="flex items-center gap-2"><span className="text-gold-500 text-xs">●</span> Tiempo para estrategia y familia</li>
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TheMyth;