import React from 'react';
import { TrendingDown, BatteryLow, Scale, ArrowUpRight, AlertCircle } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid } from 'recharts';

const dataTrend = [
  { year: '2021', value: 100 },
  { year: '2022', value: 92 },
  { year: '2023', value: 85 },
  { year: '2024', value: 78 },
  { year: '2025', value: 70 },
];

const RiskReward: React.FC = () => {
  return (
    <div className="space-y-16">
      
      {/* BLOQUE 2: EL ANÁLISIS DE RIESGO */}
      <section className="bg-brand-black border-2 border-brand-border p-6 md:p-10 relative overflow-hidden rounded-2xl shadow-2xl">
        <div className="absolute top-0 right-0 p-4 opacity-10">
             <TrendingDown size={150} className="text-neon-red" />
        </div>

        <div className="mb-10">
            <div className="section-kicker mb-3 flex items-center gap-2 text-neon-red" style={{color: '#ef4444'}}>
                <span className="w-3 h-3 bg-neon-red rounded-full animate-pulse shadow-[0_0_10px_#ef4444]"></span>
                AMENAZA CONFIRMADA
            </div>
            <h2 className="text-4xl md:text-6xl font-condensed font-black text-white uppercase">
                El Fin del "Entry-Level"
            </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
            {/* Chart Area */}
            <div>
                <div className="h-56 w-full border border-brand-border bg-brand-surface/50 p-4 rounded-lg">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={dataTrend}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                            <XAxis dataKey="year" stroke="#fff" tick={{fontSize: 12, fontWeight: 'bold'}} />
                            <Line type="monotone" dataKey="value" stroke="#ef4444" strokeWidth={4} dot={{fill: '#ef4444', r: 4}} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex items-center gap-4 mt-6">
                    <span className="text-6xl font-condensed font-black text-neon-red">-30%</span>
                    <p className="text-base text-white font-bold max-w-[200px] leading-tight">
                        Caída en contratación de recién graduados.
                    </p>
                </div>
            </div>

            {/* Battery Area */}
            <div className="flex flex-col justify-center bg-brand-surface/30 border border-brand-border p-8 rounded-xl backdrop-blur-sm">
                <div className="flex items-start justify-between mb-8">
                    <div>
                        <h4 className="text-white font-black text-lg uppercase mb-1">Caducidad de Habilidad</h4>
                        <span className="text-xs font-bold text-gray-400">FUENTE: IBM INSTITUTE</span>
                    </div>
                    <BatteryLow className="text-neon-red" size={40} />
                </div>
                
                <div className="text-center py-4">
                    <span className="text-8xl font-condensed font-black text-white">2.5</span>
                    <span className="text-2xl text-gray-200 font-condensed font-bold"> AÑOS</span>
                </div>
                <div className="w-full bg-brand-black h-4 mt-4 rounded-full overflow-hidden border border-brand-border">
                    <div className="w-[15%] bg-neon-red h-full shadow-[0_0_10px_#ef4444]"></div>
                </div>
                <p className="text-center text-neon-red font-bold text-sm mt-6 uppercase tracking-wide">
                    Batería Baja: Lo que aprendiste en 2022 ya es obsoleto.
                </p>
            </div>
        </div>
      </section>

      {/* BLOQUE 3: LA ECUACIÓN DE VALOR */}
      <section className="bg-gradient-to-br from-brand-surface to-brand-black border border-brand-gold/30 p-1 rounded-2xl">
        <div className="bg-brand-black p-6 md:p-10 rounded-xl border border-brand-border">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <Scale className="text-brand-gold" size={28} />
                        <h3 className="text-brand-gold font-bold uppercase tracking-widest">
                            La Ecuación de Valor
                        </h3>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-condensed font-black text-white uppercase">
                        Riesgo vs Recompensa
                    </h2>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                
                {/* Side A: Traditional (REDESIGNED) */}
                <div className="p-8 border-2 border-brand-border bg-brand-surface rounded-xl flex flex-col justify-between relative overflow-hidden">
                     {/* Background Warning Stripe */}
                     <div className="absolute top-0 left-0 w-full h-2 bg-brand-border"></div>
                     
                     <div>
                        <div className="flex items-center justify-between mb-6">
                            <span className="font-bold text-sm text-gray-400 uppercase tracking-widest">Oficinista Tradicional</span>
                            <AlertCircle className="text-neon-red" size={24} />
                        </div>
                        
                        <div className="text-3xl font-condensed font-black text-white mb-2 leading-tight">
                            Riesgo Inminente de Obsolescencia
                        </div>
                     </div>

                     <div className="mt-8 pt-8 border-t border-brand-border">
                        <div className="flex items-end gap-2">
                            <span className="text-7xl font-condensed font-black text-neon-red leading-none drop-shadow-lg">44%</span>
                        </div>
                        <p className="text-lg text-white font-bold mt-2 leading-tight">
                            De tus habilidades actuales <br/> <span className="text-neon-red underline">dejarán de servir.</span>
                        </p>
                     </div>
                </div>

                {/* Side B: AI User */}
                <div className="p-8 bg-gradient-to-br from-brand-gold/10 to-brand-black border-2 border-brand-gold rounded-xl relative overflow-hidden group shadow-[0_0_20px_rgba(240,185,11,0.1)]">
                    <div className="absolute top-0 left-0 w-full h-2 bg-brand-gold"></div>
                    
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6">
                             <span className="font-bold text-sm text-brand-gold uppercase tracking-widest flex items-center gap-2">
                                Usuario Aumentado <ArrowUpRight size={16} strokeWidth={3} />
                            </span>
                        </div>

                        <div className="text-3xl font-condensed font-black text-white mb-2 leading-tight">
                           Nueva Jerarquía Profesional
                        </div>
                        
                        <div className="mt-8 pt-8 border-t border-brand-gold/30">
                            <h4 className="text-sm text-brand-gold font-bold uppercase mb-1">Prima Salarial (Wage Premium)</h4>
                            <div className="flex items-baseline gap-2">
                                <span className="text-8xl font-condensed font-black text-brand-gold leading-none drop-shadow-[0_0_15px_rgba(240,185,11,0.4)]">+56%</span>
                            </div>
                            <p className="text-sm font-bold text-white mt-4">
                                Más ingresos por el mismo puesto.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="mt-10 text-center bg-brand-surface/50 p-6 rounded-lg border border-brand-border">
                <p className="text-2xl md:text-3xl font-condensed font-black text-white">
                    "Mismo puesto + Habilidades de IA = <span className="text-brand-gold text-shadow-gold">56% más sueldo</span>."
                </p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default RiskReward;