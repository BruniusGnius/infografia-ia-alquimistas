import React from 'react';
import Hero from './components/Hero';
import MarketReality from './components/MarketReality';
import RiskReward from './components/RiskReward';
import TheSolution from './components/TheSolution';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';
import ImpactGrid from './components/ImpactGrid';
import ResearchSummary from './components/ResearchSummary';
import QuoteWall from './components/QuoteWall';
import TheMyth from './components/TheMyth';

const Separator: React.FC<{ text: string; source?: string }> = ({ text, source }) => (
  <div className="w-full border-y border-brand-border bg-brand-surface py-6 my-16 overflow-hidden relative">
    <div className="absolute top-0 left-0 h-full w-2 bg-brand-gold"></div>
    <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <p className="font-condensed font-bold text-brand-gold text-lg md:text-xl uppercase tracking-widest">
        {text}
      </p>
      {source && <span className="text-white text-sm font-bold opacity-80">{source}</span>}
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-white font-saira selection:bg-brand-gold selection:text-black overflow-x-hidden">
      <Hero />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-10">
        
        {/* New Data Section */}
        <ImpactGrid />

        <Separator 
          text="LA REALIDAD DEL MERCADO" 
        />

        <MarketReality />
        
        <Separator 
          text="⚠ PRODUCTIVIDAD REAL: +40% Velocidad / +18% Calidad" 
          source="Fuente: MIT Sloan, 2023"
        />
        
        <RiskReward />
        
        {/* Comparison Section - The Myth */}
        <TheMyth />
        
        {/* New Research Table */}
        <ResearchSummary />

        {/* Keeping the highlight quote as requested in previous turn, acting as a transition */}
        <div className="my-32 text-center max-w-5xl mx-auto px-4">
            <h2 className="text-3xl md:text-6xl font-condensed font-black text-white uppercase leading-none tracking-tight">
                "El riesgo no es la IA. <br/>
                <span className="text-brand-gold drop-shadow-md">El riesgo es ignorarla.</span>"
            </h2>
        </div>

        <TheSolution />
        
        <Roadmap />

        {/* New Quotes Section */}
        <QuoteWall />
        
      </div>
      <Footer />
    </div>
  );
};

export default App;