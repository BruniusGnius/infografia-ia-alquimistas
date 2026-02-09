import React from 'react';
import { Zap, Clock, Bot, Terminal } from 'lucide-react';

const SolutionCard: React.FC<{ icon: React.ReactNode; title: string; stat?: string; desc: string; note: string }> = ({ icon, title, stat, desc, note }) => (
  <div className="benefit-card border-2 border-brand-border bg-brand-surface/40 p-8 rounded-xl relative hover:border-brand-gold transition-colors duration-300 group">
    <div className="icon mb-6 text-brand-gold group-hover:scale-110 transition-transform duration-300">
        {icon}
    </div>
    <div className="flex flex-col mb-4">
        <h4 className="text-brand-gold font-condensed font-black text-2xl uppercase tracking-wide mb-1">{title}</h4>
        {stat && <span className="font-mono text-white font-black text-xl bg-white/10 px-2 py-1 inline-block w-fit rounded">{stat}</span>}
    </div>
    
    <p className="text-gray-200 text-base font-medium mb-6 leading-relaxed">{desc}</p>
    
    <div className="pt-4 border-t border-brand-border group-hover:border-brand-gold/30 transition-colors">
        <span className="text-xs font-bold text-brand-gold uppercase block mb-1 tracking-widest">// SYSTEM NOTE</span>
        <p className="text-sm text-gray-400 font-medium">{note}</p>
    </div>
  </div>
);

const TheSolution: React.FC = () => {
  return (
    <section className="mb-32">
      {/* Header Block */}
      <div className="flex flex-col md:flex-row items-end justify-between border-b-2 border-brand-border pb-8 mb-12">
        <div>
            <span className="section-kicker mb-3">LA SOLUCIÓN</span>
            <h3 className="text-4xl md:text-6xl font-condensed font-black text-white uppercase leading-none">
              El Antídoto: <span className="text-brand-gold">Alquimistas de la IA</span>
            </h3>
        </div>
      </div>

      {/* Hero Image Insert */}
      <div className="relative w-full aspect-video mb-16 rounded-xl overflow-hidden border-2 border-brand-border shadow-[0_0_40px_rgba(240,185,11,0.15)] group">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>
        <img 
            src="https://alquimistas.gnius.club/assets/ia-al-servicio-del-alquimista-v3.jpg" 
            alt="IA al servicio del Alquimista" 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
        />
        {/* Decorative Overlay Frame */}
        <div className="absolute inset-0 border-4 border-white/5 z-20 pointer-events-none rounded-xl"></div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8 relative">
        <SolutionCard 
            icon={<Zap size={40} />}
            title="Eficiencia"
            stat="+40%"
            desc="Incremento directo en productividad operativa."
            note="MIT Verified: Tareas terminadas 40% más rápido y 18% mejor calidad."
        />
        <SolutionCard 
            icon={<Clock size={40} />}
            title="Tiempo Libre"
            stat="1 DÍA/MES"
            desc="Recuperado mediante automatización de procesos."
            note="Tiempo real desbloqueado para familia y ocio."
        />
        <SolutionCard 
            icon={<Bot size={40} />}
            title="Asistente 24/7"
            desc="AlkIA: Tu Coach Personalizado."
            note="Se adapta al perfil: Contador, Abogado, Admin o Padre."
        />
        <SolutionCard 
            icon={<Terminal size={40} />}
            title="Metodología"
            desc="Prompt Estratégico & Arquitectura Cognitiva."
            note="No enseñamos 'trucos de chat'. Enseñamos ingeniería."
        />
      </div>
    </section>
  );
};

export default TheSolution;