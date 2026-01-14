import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Translation } from '../types';

interface FAQProps {
  t: Translation['faq'];
}

const FAQ: React.FC<FAQProps> = ({ t }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-brand-surface/30">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-display font-bold text-white mb-12 text-center">{t.title}</h2>
        
        <div className="space-y-4">
          {t.items.map((item, index) => (
            <div key={index} className="border border-white/5 bg-black/40 rounded-lg overflow-hidden">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-white text-lg">{item.question}</span>
                {activeIndex === index ? <Minus className="text-brand-red" /> : <Plus className="text-gray-500" />}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;