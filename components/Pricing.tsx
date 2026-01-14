import React from 'react';
import { motion } from 'framer-motion';
import { Check, Flame } from 'lucide-react';
import { Translation } from '../types';

interface PricingProps {
  t: Translation['pricing'];
  onCtaClick: () => void;
}

const Pricing: React.FC<PricingProps> = ({ t, onCtaClick }) => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Anchor Price */}
        <div className="text-center mb-12 opacity-60">
          <p className="text-lg uppercase tracking-widest text-gray-400 mb-2">{t.totalLabel}</p>
          <p className="text-3xl font-bold text-gray-300 line-through decoration-brand-red/50">{t.totalValue}</p>
        </div>

        {/* Promo Card */}
        <motion.div 
          className="bg-gradient-to-b from-brand-surface to-black border border-brand-red rounded-3xl p-8 md:p-12 text-center shadow-[0_0_40px_rgba(230,0,62,0.15)] relative"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-red text-white px-6 py-2 rounded-full font-bold text-sm tracking-wide shadow-lg flex items-center gap-2 whitespace-nowrap">
            <Flame size={16} fill="white" /> {t.promoSubtitle}
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{t.promoTitle}</h3>
          
          <div className="my-8">
            <span className="text-5xl md:text-7xl font-black text-white tracking-tight block">
              {t.promoPrice}
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 text-sm">
            <span className="bg-green-900/30 text-green-400 px-4 py-2 rounded-lg border border-green-800">
              {t.savings}
            </span>
            <span className="bg-brand-red/10 text-brand-red px-4 py-2 rounded-lg border border-brand-red/20 font-bold">
              {t.discount}
            </span>
          </div>

          <button 
            onClick={onCtaClick}
            className="w-full md:w-2/3 bg-brand-red hover:bg-red-700 text-white text-lg font-bold py-5 rounded-xl transition-all shadow-lg hover:shadow-brand-red/40 transform hover:-translate-y-1"
          >
            {t.cta}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;