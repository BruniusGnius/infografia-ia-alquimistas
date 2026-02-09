import React from 'react';
import { Quote, UserX, UserCheck, X, Check } from 'lucide-react';

const TheMyth: React.FC = () => {
  return (
    <section className="py-16 my-24 bg-brand-surface/20 border-y border-brand-border relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Quote size={300} className="text-white transform rotate-12" />
        </div>

      <div className="relative px-4 max-w-5xl mx-auto">
        <div className="text-center mb-12">
            <h3 className="text-brand-gold font-condensed font-bold uppercase tracking-[0.2em] text-sm mb-4">
            Paradigma 2026
            </h3>
            
            <blockquote className="text-3xl md:text-5xl font-condensed font-black text-white leading-none mb-8">
            "La IA no te reemplazará. <br/>
            <span className="text-gray-500">Alguien que use IA...</span> <span className="text-brand-gold bg-brand-gold/10 px-2">sí lo hará.</span>"
            </blockquote>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch mt-10">
            {/* Left: The Loser */}
            <div className="bg-brand-black p-8 rounded-2xl border border-brand-border hover:border-neon-red/50 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-red to-transparent opacity-50"></div>
                
                <div className="flex items-center justify-between mb-6">
                    <h4 className="text-gray-400 font-bold uppercase text-xs tracking-widest flex items-center gap-2">
                        <UserX size={16} className="text-neon-red" />
                        Analista Tradicional
                    </h4>
                    <span className="text-neon-red text-xs font-black border border-neon-red px-2 py-1 rounded bg-neon-red/10">OBSOLETO</span>
                </div>

                <div className="space-y-4">
                    <div className="flex items-start gap-3">
                        <X size={18} className="text-neon-red mt-1 shrink-0" />
                        <p className="text-gray-400 text-sm leading-relaxed">Pasa <strong className="text-white">6 horas</strong> estructurando datos manualmente en Excel.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <X size={18} className="text-neon-red mt-1 shrink-0" />
                        <p className="text-gray-400 text-sm leading-relaxed">Entrega con errores humanos por fatiga visual.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <X size={18} className="text-neon-red mt-1 shrink-0" />
                        <p className="text-gray-400 text-sm leading-relaxed">Siente la IA como una amenaza a su seguridad laboral.</p>
                    </div>
                </div>
            </div>
            
            {/* Right: The Winner */}
            <div className="bg-gradient-to-br from-brand-surface to-brand-black p-8 rounded-2xl border-2 border-brand-gold shadow-[0_0_30px_rgba(240,185,11,0.15)] relative transform md:-translate-y-4">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-gold text-brand-black font-black text-xs px-4 py-1 rounded-full uppercase tracking-widest shadow-lg border-2 border-brand-black z-20">
                    El Nuevo Estándar
                </div>

                <div className="flex items-center justify-between mb-6 mt-2">
                    <h4 className="text-brand-gold font-bold uppercase text-xs tracking-widest flex items-center gap-2">
                        <UserCheck size={16} />
                        Usuario Aumentado
                    </h4>
                </div>

                 <div className="space-y-4 relative z-10">
                    <div className="flex items-start gap-3">
                        <Check size={18} className="text-brand-gold mt-1 shrink-0" />
                        <p className="text-white text-sm leading-relaxed">Completa la misma tarea en <strong className="text-brand-gold">15 minutos</strong> usando Code Interpreter.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <Check size={18} className="text-brand-gold mt-1 shrink-0" />
                        <p className="text-white text-sm leading-relaxed">Dedica el resto del día a análisis estratégico y toma de decisiones.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <Check size={18} className="text-brand-gold mt-1 shrink-0" />
                        <p className="text-white text-sm leading-relaxed">Usa la IA como exoesqueleto mental para amplificar su valor.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TheMyth;