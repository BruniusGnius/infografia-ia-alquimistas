import React from 'react';
import { Zap, Globe, ArrowUpRight } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, YAxis } from 'recharts';

// Data simulation for visual trends
const dataVolatile = [
  { v: 20 }, { v: 50 }, { v: 30 }, { v: 70 }, { v: 40 }, { v: 90 }, { v: 148 }
];
const dataSteadyUp = [
  { v: 10 }, { v: 25 }, { v: 35 }, { v: 45 }, { v: 55 }, { v: 65 }, { v: 85 }
];
const dataExponential = [
  { v: 5 }, { v: 10 }, { v: 15 }, { v: 25 }, { v: 40 }, { v: 60 }, { v: 82 }
];
const dataDrop = [
  { v: 100 }, { v: 90 }, { v: 80 }, { v: 70 }, { v: 60 }, { v: 50 }, { v: 39 }
];

const StatCard: React.FC<{ 
    value: string; 
    label: string; 
    sub: string; 
    highlight?: boolean;
    chartData?: any[];
    chartColor?: string;
}> = ({ value, label, sub, highlight, chartData, chartColor = "#888888" }) => (
  <div className={`relative p-5 border-2 ${highlight ? 'border-neon-red bg-neon-red/5' : 'border-brand-border bg-brand-surface/30'} rounded-xl flex flex-col justify-between h-56 overflow-hidden group hover:border-brand-gold transition-colors duration-300`}>
    
    {/* Sparkline Background */}
    {chartData && (
        <div className="absolute bottom-0 left-0 right-0 h-24 opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                    <defs>
                        <linearGradient id={`grad${label.replace(/\s/g, '')}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={chartColor} stopOpacity={0.8}/>
                            <stop offset="95%" stopColor={chartColor} stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <Area 
                        type="monotone" 
                        dataKey="v" 
                        stroke={chartColor} 
                        fill={`url(#grad${label.replace(/\s/g, '')})`} 
                        strokeWidth={3} 
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )}

    <div className="relative z-10">
        <div className="flex justify-between items-start mb-2">
            <h4 className={`font-condensed font-bold text-xs uppercase tracking-widest ${highlight ? 'text-neon-red' : 'text-brand-gold'}`}>
                {label}
            </h4>
            {highlight && <ArrowUpRight className="text-neon-red animate-pulse" size={16} />}
        </div>
        <div className={`text-5xl md:text-6xl font-condensed font-black mb-2 ${highlight ? 'text-neon-red' : 'text-white'} tracking-tighter`}>
            {value}
        </div>
    </div>
    
    <div className="relative z-10 border-t border-white/10 pt-3">
        <p className="text-gray-300 text-xs font-medium leading-tight">
            {sub}
        </p>
    </div>
  </div>
);

const ImpactGrid: React.FC = () => {
  return (
    <section className="py-12">
        <div className="flex items-end gap-4 mb-8 border-b border-brand-border pb-4">
            <div className="bg-brand-gold p-2 rounded text-brand-black">
                <Zap size={24} fill="currentColor" />
            </div>
            <div>
                <h3 className="text-2xl md:text-3xl font-condensed font-black text-white uppercase leading-none">
                    Data Pulse: 2026
                </h3>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Big Hero Card */}
            <div className="md:col-span-2 row-span-2 bg-brand-black border-2 border-brand-border p-8 rounded-xl relative overflow-hidden flex flex-col justify-center">
                 <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-brand-surface/50 to-transparent"></div>
                 <div className="relative z-10">
                    <div className="flex flex-col">
                        <span className="text-8xl md:text-9xl font-condensed font-black text-white tracking-tighter leading-none">170</span>
                        <span className="text-4xl md:text-6xl font-condensed font-bold text-brand-gold leading-none">MILLONES</span>
                    </div>
                    <div className="h-2 w-24 bg-gradient-to-r from-brand-gold to-transparent my-6"></div>
                    <h4 className="text-xl text-white font-bold uppercase mb-2">Nuevos Empleos Globales</h4>
                    <p className="text-gray-400 text-sm font-medium max-w-sm">
                        La transformación tecnológica creará más roles de los que destruirá para 2030. <br/>
                        <span className="text-brand-gold">La clave es la adaptación.</span>
                    </p>
                 </div>
                 {/* Visual Decor */}
                 <Globe className="absolute -bottom-10 -right-10 text-brand-surface opacity-30" size={240} strokeWidth={0.5} />
            </div>

            {/* Sparkline Cards */}
            <StatCard 
                value="+148%" 
                label="Demanda México" 
                sub="Explosión en vacantes de IA (2024-2026)." 
                highlight={true}
                chartData={dataVolatile}
                chartColor="#ef4444"
            />
            <StatCard 
                value="56%" 
                label="Wage Premium" 
                sub="Aumento salarial por habilidades de prompting." 
                chartData={dataSteadyUp}
                chartColor="#f0b90b"
            />
            <StatCard 
                value="82%" 
                label="Adopción Corp." 
                sub="Ejecutivos integrando Agentes Autónomos." 
                chartData={dataExponential}
                chartColor="#ffffff"
            />
             <StatCard 
                value="39%" 
                label="Obsolescencia" 
                sub="Habilidades de oficina que caducan en 2030." 
                chartData={dataDrop}
                chartColor="#666666"
            />
        </div>
    </section>
  );
};

export default ImpactGrid;