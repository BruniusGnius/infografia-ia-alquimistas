import React from 'react';
import { ExternalLink } from 'lucide-react';

const sources = [
  { title: "Jobs of Tomorrow", source: "World Economic Forum", url: "https://www3.weforum.org/docs/WEF_Jobs_of_Tomorrow_Generative_AI_2023.pdf" },
  { title: "Future of Jobs Changing", source: "World Economic Forum", url: "https://www.weforum.org/stories/2023/05/future-of-jobs-in-the-age-of-ai-sustainability-and-deglobalization/" },
  { title: "10 Must-Have Skills 2025", source: "Skillsoft", url: "https://www.skillsoft.com/blog/the-top-10-skills-rising-in-importance-according-to-1-000-employers" },
  { title: "AI Jobs Barometer", source: "PwC", url: "https://www.pwc.com/gx/en/services/ai/ai-jobs-barometer.html" },
  { title: "AI and Future of Work", source: "Sand Technologies", url: "https://www.sandtech.com/insight/ai-and-the-future-of-work/" },
  { title: "Future of Jobs Report 2025", source: "World Economic Forum", url: "https://www.weforum.org/publications/the-future-of-jobs-report-2025/digest/" },
  { title: "AI Doesn't Replace You", source: "Medium", url: "https://medium.com/digital-gems/ai-doesnt-replace-you-it-empowers-you-rethinking-roles-in-the-boost-of-ai-c27361ef6afb" },
  { title: "Sam Altman Quote", source: "Times of India", url: "https://timesofindia.indiatimes.com/technology/tech-news/quote-of-the-day-by-sam-altman-ai-wont-replace-humans-but-humans-who-use-ai-will-replace-those-who-dont-/articleshow/127689103.cms" },
  { title: "Alquimistas de IA", source: "Gnius Club", url: "https://alquimistas.gnius.club" },
  { title: "Top Jobs Stories 2025", source: "World Economic Forum", url: "https://www.weforum.org/stories/2026/01/top-jobs-and-labour-market-stories-2025/" },
  { title: "Four Futures for Jobs 2030", source: "World Economic Forum", url: "https://reports.weforum.org/docs/WEF_Four_Futures_for_Jobs_in_the_New_Economy_AI_and_Talent_in_2030_2025.pdf" },
  { title: "Fastest Growing Jobs", source: "World Economic Forum", url: "https://www.weforum.org/stories/2025/01/future-of-jobs-report-2025-the-fastest-growing-and-declining-jobs/" },
  { title: "Creating Opportunities", source: "World Economic Forum", url: "https://www.weforum.org/impact/creating-economic-opportunities-for-all-in-the-intelligent-age/" },
  { title: "AI Skills Mexico Jump 148%", source: "Mexico Business News", url: "https://mexicobusiness.news/talent/news/ai-job-skills-mexico-jump-148" },
  { title: "5 Things HR Needs to Know", source: "UNLEASH", url: "https://www.unleash.ai/artificial-intelligence/5-things-hr-needs-to-know-from-wefs-2025-future-of-jobs-report/" },
  { title: "Tendencias EdTech 2026", source: "Colegium", url: "https://www.colegium.com.mx/tendencias-edtech-2026-transformacion-digital-colegios/" },
  { title: "Domina la IA (Video)", source: "YouTube", url: "https://www.youtube.com/watch?v=pXXmbK-PbGE" },
  { title: "Coursera Blog WEF Report", source: "Coursera", url: "https://blog.coursera.org/wef-future-of-jobs-report-2025/" },
  { title: "Tendencias Laborales", source: "OLA", url: "https://www.observatoriolaboral.gob.mx/static/estudios-publicaciones/Tendencias_actuales.html" },
  { title: "Conversatorio IA y Trabajo (Video)", source: "YouTube", url: "https://www.youtube.com/watch?v=OH1ecGKqDp4" },
  { title: "Futuro del Trabajo Mexico 2026", source: "Caintra", url: "https://www.caintra.org.mx/reticula-transforma/el-futuro-del-trabajo-en-mexico-en-2026-tendencias-globales-que-transformaran-la-industria/" },
  { title: "Qué es un prompt", source: "CEUPE", url: "https://www.ceupe.com/blog/que-es-un-prompt.html" },
  { title: "Barómetro Global IA 2025", source: "PwC MX", url: "https://www.pwc.com/mx/es/prensa/barometro-laboral-ia-2025.html" },
  { title: "IA en estudiantes", source: "Infobae", url: "https://www.infobae.com/educacion/2026/01/18/la-inteligencia-artificial-preocupa-a-expertos-por-su-efecto-en-estudiantes/" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black border-t border-brand-border pt-24 pb-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-24">
        
        {/* Urgency Data */}
        <div className="mb-16">
            <p className="text-neon-red font-bold text-sm uppercase tracking-widest mb-4 animate-pulse">
                ⚠ DATO DE URGENCIA
            </p>
            <h3 className="text-3xl md:text-5xl font-condensed font-bold text-white max-w-3xl mx-auto leading-tight">
                "75% de las empresas adoptarán IA en los próximos 5 años."
            </h3>
            <p className="text-gray-300 text-sm mt-3 font-bold uppercase tracking-wide">(WEF Future of Jobs)</p>
        </div>

        {/* Physical Button CTA */}
        <div className="inline-block relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold to-neon-red opacity-30 blur group-hover:opacity-60 transition duration-500"></div>
            <a 
                href="https://alquimistas.gnius.club" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-button relative block text-xl md:text-3xl px-12 py-6 shadow-[0_0_30px_rgba(240,185,11,0.3)]"
            >
                [ BLINDAR MI CARRERA AHORA > ]
            </a>
        </div>

        <div className="mt-16 pt-10 border-t border-brand-border">
             <p className="text-gray-300 font-bold text-base mb-3 uppercase tracking-wide">
                Tarifas especiales para Familias y Equipos:
            </p>
            <a href="mailto:lilo@gnius.club" className="text-brand-gold hover:text-white transition-colors text-xl font-black tracking-wide font-saira">
                lilo@gnius.club
            </a>
        </div>

        {/* Sources Section */}
        <div className="mt-24 pt-8 border-t border-brand-border/20 text-left">
            <h5 className="text-gray-500 font-bold uppercase text-xs tracking-widest mb-6">Fuentes Citadas & Referencias (Acceso Feb 2026)</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                {sources.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[10px] text-gray-600 font-medium hover:text-gray-400 transition-colors">
                        <span className="text-brand-gold/50">[{idx + 1}]</span>
                        <div className="flex flex-wrap gap-1">
                            <span className="text-gray-400">{item.title}</span>
                            <span className="opacity-50">-</span>
                            <span className="uppercase text-gray-500">{item.source}</span>
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="ml-1 text-brand-border hover:text-brand-gold inline-flex items-center">
                                <ExternalLink size={8} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* FOOTER COMPLETO INTEGRADO */}
      <div className="py-16 border-t border-brand-border bg-black text-white w-full">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">

            {/* 1. SECCIÓN INSTITUCIONAL (Gnius + Partners) */}
            <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-10 mb-12">

                {/* Logo Gnius */}
                <div className="order-1 md:order-1">
                    <img src="https://alquimistas.gnius.club/assets/gnius-academy-logo.png" alt="Gnius Academy logo"
                        className="h-36 md:h-28 w-auto object-contain max-w-[200px] md:max-w-[150px]" />
                </div>

                {/* Bloque Partners */}
                <div className="order-2 md:order-2 flex flex-col items-center md:items-end gap-6 w-full md:w-auto">
                    {/* Texto Miembro Activo */}
                    <p className="text-gray-400 text-sm font-medium tracking-wide text-center md:text-right">
                        Miembro activo de WSA y de AIM-UNIDO
                    </p>

                    {/* Logos Partners */}
                    <div className="flex flex-wrap justify-center md:justify-end items-center gap-8 md:gap-10">
                        <img src="https://alquimistas.gnius.club/assets/logo-white.svg" alt="World Summit Award"
                            className="h-8 md:h-10 w-auto opacity-90 hover:opacity-100 transition-opacity" />

                        <img src="https://alquimistas.gnius.club/assets/UNIDO_Logo.svg" alt="UNIDO"
                            className="h-10 md:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity" />

                        <img src="https://alquimistas.gnius.club/assets/xAIM-Global_logo_horizontal_emblem_bylineweb-2048x602.png.pagespeed.ic.5SvjGLyMhD.webp"
                            alt="AIM Global" className="h-8 md:h-10 w-auto opacity-90 hover:opacity-100 transition-opacity" />
                    </div>
                </div>
            </div>

            {/* SEPARADOR */}
            <div className="border-t border-brand-border/40 w-full mb-12"></div>

            {/* 2. SECCIÓN CONTACTO */}
            <div className="text-center">
                <p className="mt-6 text-2xl font-condensed font-bold text-white">CURSO ALQUIMISTAS</p>
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-gray-400">
                    <a href="https://wa.me/522218481116" target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-white transition-colors underline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.395 1.906 6.215l-1.036 3.787 3.849-1.002z" />
                        </svg>
                        <span>(+52) 221 848 1116</span>
                    </a>
                    <a href="mailto:info@gnius.club"
                        className="flex items-center gap-2 hover:text-white transition-colors underline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                        </svg>
                        <span>info@gnius.club</span>
                    </a>
                </div>
                <div className="mt-6 flex justify-center space-x-6 text-gray-400">
                    <a href="https://gnius.club/aviso-de-privacidad.html"
                        className="hover:text-white transition-colors underline">Aviso de Privacidad</a>
                </div>
                <p className="mt-6 text-sm text-gray-500">&copy; 2026 Gnius Club - AlkIA. Todos los derechos
                    reservados.
                </p>

            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;