import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const dataDonut = [
  { name: 'Cambio Radical', value: 23 },
  { name: 'Estabilidad', value: 77 },
];

const COLORS = ['#ef4444', '#333333'];

const MarketReality: React.FC = () => {
  return (
    <section className="relative border-2 border-brand-border bg-brand-surface/20 p-6 md:p-12 rounded-2xl">
      {/* Decorative Corners */}
      <div className="absolute top-0 left-0 w-6 h-6 border-l-4 border-t-4 border-neon-red"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-r-4 border-t-4 border-neon-red"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-l-4 border-b-4 border-neon-red"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-r-4 border-b-4 border-neon-red"></div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left: The Donut */}
        <div className="relative flex flex-col items-center">
            <h3 className="text-neon-red font-bold text-sm uppercase mb-6 tracking-widest text-center border-b border-neon-red/50 pb-2">
              Índice de Disrupción Global
            </h3>
            <div className="h-72 w-72 relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                    <Pie
                        data={dataDonut}
                        innerRadius={90}
                        outerRadius={115}
                        startAngle={90}
                        endAngle={-270}
                        dataKey="value"
                        stroke="none"
                    >
                        {dataDonut.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                    </Pie>
                    </PieChart>
                </ResponsiveContainer>
                {/* Center Data */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-7xl font-condensed font-black text-white drop-shadow-xl">23%</span>
                    <span className="text-sm text-neon-red font-bold mt-2 bg-neon-red/10 px-2 py-1 rounded">RIESGO ALTO</span>
                </div>
            </div>
            <p className="text-center text-gray-200 text-lg font-medium mt-6 max-w-xs leading-relaxed">
                De los empleos mundiales cambiarán radicalmente en los próximos 5 años. <br/>
                <span className="text-gray-400 text-xs font-bold uppercase mt-2 block">(WEF, 2023)</span>
            </p>
        </div>

        {/* Right: The Progress Bar */}
        <div className="flex flex-col justify-center space-y-10">
            <div className="border-l-4 border-brand-border pl-8">
                <h4 className="text-white font-condensed font-black text-3xl uppercase mb-4">
                    Automatización Administrativa
                </h4>
                <p className="text-gray-200 text-lg font-medium mb-8 leading-relaxed">
                    Tareas de oficina, procesamiento de datos y redacción básica son automatizables <strong className="text-brand-gold text-xl">HOY MISMO</strong>.
                </p>

                {/* Progress Bar Container */}
                <div className="w-full bg-brand-black h-12 border border-brand-border relative rounded-r-lg overflow-hidden">
                    {/* The Bar */}
                    <div className="h-full bg-neon-red w-[80%] relative group flex items-center justify-end pr-4 shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                        <span className="text-white font-black text-xl z-10">80%</span>
                        {/* Striped pattern animation */}
                        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(45deg,rgba(0,0,0,0.1)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.1)_50%,rgba(0,0,0,0.1)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] opacity-50"></div>
                    </div>
                </div>
                
                <div className="flex justify-between items-start mt-3">
                    <span className="text-sm font-bold text-gray-300 uppercase tracking-wide">Capacidad de IA Actual</span>
                    <span className="text-sm font-bold text-neon-red uppercase tracking-wide">AUTOMATIZABLE AHORA</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default MarketReality;