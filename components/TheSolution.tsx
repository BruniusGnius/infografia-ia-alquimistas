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
      <div className="flex flex-col md:flex-row items-end justify-between border-b-2 border-brand-border pb-8 mb-16">
        <div>
            <span className="section-kicker mb-3">ARCHITECTURE V1.0</span>
            <h3 className="text-4xl md:text-6xl font-condensed font-black text-white uppercase leading-none">
              Protocolo de Solución
            </h3>
        </div>
        <div className="text-right hidden md:block">
            <span className="bg-brand-gold text-brand-black font-black px-3 py-1 text-sm uppercase tracking-widest">GNIUS CLUB CERTIFIED</span>
        </div>
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