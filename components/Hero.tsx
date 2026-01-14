import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Translation } from '../types';

interface HeroProps {
  t: Translation['hero'];
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ t, onCtaClick }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-brand-dark">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex justify-center mb-10">
            <span className="inline-flex items-center py-1.5 px-6 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-serif italic tracking-[0.2em] uppercase backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red mr-4 animate-pulse"></span>
              MD Studios Technology
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white leading-[1.1] mb-8 tracking-tight">
            {t.headline.split(' ').map((word, i) => (
              word.toLowerCase().includes('resultados') || word.toLowerCase().includes('results') || word.toLowerCase().includes('reais') ? 
              <span key={i} className="font-semibold italic text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-400 pr-2">{word} </span> : 
              <span key={i} className={word.toLowerCase().includes('presença') || word.toLowerCase().includes('digital') ? "italic text-gray-100" : ""}>{word} </span>
            ))}
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            {t.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button 
              onClick={onCtaClick}
              className="group relative px-12 py-5 bg-brand-red text-white text-sm uppercase tracking-widest font-bold rounded-sm overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(230,0,62,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <div className="flex items-center gap-4">
                {t.ctaPrimary}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </div>
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;