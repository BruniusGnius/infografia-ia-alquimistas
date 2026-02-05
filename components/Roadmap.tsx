import React from 'react';

const Roadmap: React.FC = () => {
    const steps = [
        {
            week: "SEMANA 01",
            title: "EL PROMPT MAESTRO",
            desc: "Control total. Deja de adivinar y empieza a dirigir a la IA con precisión quirúrgica.",
            active: true
        },
        {
            week: "SEMANA 02",
            title: "FRAMEWORKS DE PODER",
            desc: "Calidad documental. Modelos mentales (ARV, DIIR) para resultados perfectos.",
            active: true
        },
        {
            week: "SEMANA 03",
            title: "PILOTO AUTOMÁTICO",
            desc: "SOPs Inteligentes. Diseña sistemas que trabajan por ti mientras duermes.",
            active: true
        },
        {
            week: "SEMANA 04",
            title: "ROI INMEDIATO",
            desc: "Proyecto real implementado en tu trabajo actual con impacto medible.",
            active: true
        }
    ];

  return (
    <section>
      <div className="flex items-baseline gap-4 mb-16">
        <span className="text-brand-gold font-mono text-2xl font-black">///</span>
        <h3 className="text-4xl md:text-5xl font-condensed font-black text-white uppercase tracking-tight">
          El Roadmap (4 Sprints)
        </h3>
      </div>

      <div className="relative pl-4 md:pl-0 max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-gold via-brand-border to-transparent md:-ml-0.5"></div>

          <div className="space-y-16">
            {steps.map((step, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block w-1/2"></div>

                    {/* Node */}
                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 bg-brand-black border-4 border-brand-gold rounded-full z-10 shadow-[0_0_20px_rgba(240,185,11,0.6)]">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>

                    {/* Content */}
                    <div className={`ml-20 md:ml-0 w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                        <span className="text-brand-gold text-sm font-black tracking-widest mb-2 block">{step.week}</span>
                        <h4 className="text-3xl font-condensed font-black text-white mb-3 uppercase leading-none">{step.title}</h4>
                        <p className="text-gray-200 text-lg font-medium leading-relaxed">{step.desc}</p>
                    </div>
                </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default Roadmap;