import React from 'react';
import { Target, TrendingUp, AlertTriangle, BookOpen, Layers, ArrowRight } from 'lucide-react';

const InsightCard: React.FC<{ 
    icon: React.ReactNode; 
    category: string; 
    stat: string; 
    finding: string; 
    value: string;
    highlight?: boolean; // Prop to trigger the larger/featured style
    accentColor?: 'gold' | 'red'; // To alternate colors
    className?: string; // To handle grid positioning
}> = ({ icon, category, stat, finding, value, highlight, accentColor = 'gold', className }) => (
  <div className={`
    relative flex flex-col justify-between 
    bg-brand-black border 
    ${highlight 
        ? `p-8 md:p-12 border-${accentColor === 'gold' ? 'brand-gold' : 'neon-red'} bg-brand-surface/20` 
        : 'p-6 md:p-8 border-brand-border hover:bg-brand-surface/30'
    } 
    rounded-2xl transition-all duration-500 group overflow-hidden ${className}
  `}>
    
    {/* Background Glow for Highlights */}
    {highlight && (
        <div className={`absolute top-0 right-0 w-64 h-64 bg-${accentColor === 'gold' ? 'brand-gold' : 'neon-red'} opacity-5 blur-[100px] pointer-events-none rounded-full -mr-20 -mt-20`}></div>
    )}

    {/* Header */}
    <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
            <div className={`
                p-3 rounded-xl flex items-center justify-center
                ${highlight 
                    ? `bg-${accentColor === 'gold' ? 'brand-gold' : 'neon-red'} text-black shadow-lg shadow-${accentColor === 'gold' ? 'brand-gold' : 'neon-red'}/20` 
                    : 'bg-brand-surface text-brand-gold group-hover:bg-brand-gold group-hover:text-black transition-colors'
                }
            `}>
                {icon}
            </div>
            <span className={`text-xs font-mono font-bold uppercase tracking-widest ${highlight ? 'text-white opacity-80' : 'text-gray-500'}`}>
                {category}
            </span>
        </div>
        
        <div className="mb-6">
            <span className={`
                block font-condensed font-black text-white mb-2 tracking-tighter leading-none group-hover:scale-105 transition-transform duration-300 origin-left
                ${highlight ? 'text-7xl md:text-8xl' : 'text-5xl md:text-6xl'}
                ${highlight && accentColor === 'red' ? 'text-neon-red' : ''}
                ${highlight && accentColor === 'gold' ? 'text-brand-gold' : ''}
            `}>
                {stat}
            </span>
            <p className={`
                font-bold leading-tight uppercase
                ${highlight ? 'text-xl md:text-2xl text-white' : 'text-sm text-gray-200'}
            `}>
                {finding}
            </p>
        </div>
    </div>

    {/* Footer / Value */}
    <div className={`relative z-10 pt-6 border-t ${highlight ? 'border-white/20' : 'border-brand-border/50'}`}>
        <div className="flex items-start gap-3">
             {highlight && <ArrowRight className={accentColor === 'gold' ? 'text-brand-gold' : 'text-neon-red'} size={24} />}
            <div>
                <p className={`text-[10px] uppercase font-bold mb-1 ${highlight ? 'text-white/60' : 'text-brand-gold'}`}>
                    Impacto Directo:
                </p>
                <p className={`font-medium leading-relaxed ${highlight ? 'text-lg text-white' : 'text-xs text-gray-400'}`}>
                    {value}
                </p>
            </div>
        </div>
    </div>
  </div>
);

const ResearchSummary: React.FC = () => {
  return (
    <section className="my-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row items-baseline justify-between mb-12 border-b border-brand-border pb-6">
         <div className="flex items-center gap-4">
            <div className="w-4 h-10 bg-brand-gold shadow-[0_0_15px_rgba(240,185,11,0.5)]"></div>
            <div>
                <h3 className="text-4xl md:text-5xl font-condensed font-black text-white uppercase tracking-wide leading-none">
                    Hallazgos Clave
                </h3>
                <p className="text-sm text-gray-400 font-medium mt-1">PROYECCIONES WEF 2026 & ANÁLISIS DE MERCADO</p>
            </div>
         </div>
      </div>

      {/* Grid Layout: 3 Top / 2 Bottom */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        
        {/* --- ROW 1: Context & Methodology (3 cards) --- */}
        
        <InsightCard 
            className="md:col-span-2"
            icon={<Target size={24} />}
            category="Dinámica Global"
            stat="78M+"
            finding="Empleos Netos Nuevos"
            value="El riesgo real no es el desempleo, es la falta de actualización tecnológica."
        />
        
        <InsightCard 
             className="md:col-span-2"
            icon={<AlertTriangle size={24} />}
            category="Obsolescencia"
            stat="39%"
            finding="Skills Caducas 2030"
            value="La ejecución manual pierde valor frente al pensamiento crítico y estratégico."
        />
        
        <InsightCard 
             className="md:col-span-2"
            icon={<Layers size={24} />}
            category="Metodología"
            stat="4 WKS"
            finding="Sprint Alquimista"
            value="El tiempo promedio para transformar a un operativo en director de sistemas."
        />

        {/* --- ROW 2: The "Killer Stats" (Highlighted, 2 cards) --- */}

        <InsightCard 
            className="md:col-span-3 min-h-[360px]"
            highlight={true}
            accentColor="red"
            icon={<TrendingUp size={32} />}
            category="Mercado MX & Latam"
            stat="+148%"
            finding="Explosión de Demanda Talento IA"
            value="No es una moda, es el nuevo estándar mínimo para competir por salarios de alto nivel en la región."
        />

        <InsightCard 
            className="md:col-span-3 min-h-[360px]"
            highlight={true}
            accentColor="gold"
            icon={<BookOpen size={32} />}
            category="Gestión del Tiempo"
            stat="90%"
            finding="Tiempo Operativo Liberado"
            value="El objetivo final: Dejar de operar 'manos a la obra' para empezar a dirigir 'mente a la obra'."
        />

      </div>
    </section>
  );
};

export default ResearchSummary;