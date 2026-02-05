import React from 'react';
import { Quote } from 'lucide-react';

const QuoteBlock: React.FC<{ text: string; author?: string; variant?: 'gold' | 'white' }> = ({ text, author, variant = 'white' }) => (
  <div className="relative pl-6 py-4 group">
    {/* Editorial Decor line */}
    <div className={`absolute left-0 top-0 h-8 w-1 ${variant === 'gold' ? 'bg-brand-gold' : 'bg-neon-red'} transition-all duration-500 group-hover:h-full`}></div>
    
    <div className="relative">
        <Quote className={`absolute -top-4 -left-2 ${variant === 'gold' ? 'text-brand-gold/10' : 'text-white/10'} transform -scale-x-100`} size={60} />
        <p className={`relative z-10 font-condensed font-bold text-2xl md:text-3xl leading-tight ${variant === 'gold' ? 'text-brand-gold' : 'text-white'}`}>
            "{text}"
        </p>
    </div>
    
    {author && (
        <div className="mt-4 flex items-center gap-2">
            <div className={`h-px w-8 ${variant === 'gold' ? 'bg-brand-gold/50' : 'bg-gray-600'}`}></div>
            <p className="text-xs text-gray-400 font-mono uppercase tracking-widest">{author}</p>
        </div>
    )}
  </div>
);

const QuoteWall: React.FC = () => {
  return (
    <section className="py-24 border-t border-brand-border bg-brand-surface/20">
        <div className="mb-16 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-condensed font-black text-white uppercase mb-4">
                Verdades Lapidarias
            </h2>
            <div className="h-1 w-24 bg-brand-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 max-w-6xl mx-auto px-4">
            <div className="space-y-16">
                <QuoteBlock 
                    text="La inteligencia artificial no va a reemplazarte; lo hará el humano que sepa dirigirla mejor que tú."
                    variant="gold"
                />
                <QuoteBlock 
                    text="Dominar el prompt estratégico es el nuevo inglés: sin él, tu perfil profesional no habla el idioma del mercado."
                />
                <QuoteBlock 
                    text="En 2026, el éxito no consiste en trabajar más horas, sino en saber orquestar sistemas que trabajen por ti."
                />
            </div>
            <div className="space-y-16 md:pt-12">
                 <QuoteBlock 
                    text="Para un directivo, la IA no es una herramienta de ahorro; es su seguro de vida contra la irrelevancia."
                />
                <QuoteBlock 
                    text="Educar a un hijo sin alfabetización en IA hoy es como haberlo educado sin saber leer ni escribir en el siglo pasado."
                    variant="gold"
                />
                <QuoteBlock 
                    text="La diferencia entre un oficinista y un humano aumentado es el tiempo: mientras uno llena celdas, el otro diseña el futuro."
                />
            </div>
        </div>
    </section>
  );
};

export default QuoteWall;