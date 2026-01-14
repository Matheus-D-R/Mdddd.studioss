import React from 'react';
import { Translation } from '../types';

interface ProcessProps {
  t: Translation['process'];
}

const Process: React.FC<ProcessProps> = ({ t }) => {
  return (
    <section id="process" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-display font-medium italic text-white mb-6">{t.title}</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">{t.subtitle}</p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-red/50 to-transparent -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {t.steps.map((step, index) => (
              <div key={index} className="relative z-10 bg-black md:bg-transparent pt-8 md:pt-0">
                <div className="w-16 h-16 mx-auto bg-brand-surface border border-white/10 text-white font-display font-bold italic text-2xl flex items-center justify-center rounded-xl mb-6 shadow-[0_0_20px_rgba(0,0,0,0.5)] group hover:border-brand-red transition-colors relative">
                   {step.number}
                   <div className="absolute inset-0 bg-brand-red/10 blur-lg -z-10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="text-center px-4">
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;