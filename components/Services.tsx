import React from 'react';
import { Check, ShieldCheck, BarChart3, Globe } from 'lucide-react';
import { Translation } from '../types';

interface ServicesProps {
  t: Translation['services'];
}

const icons = [Globe, ShieldCheck, BarChart3];

const Services: React.FC<ServicesProps> = ({ t }) => {
  return (
    <section id="services" className="py-32 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-display font-medium italic text-white mb-6 tracking-tight">
              {t.title}
            </h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              {t.subtitle}
            </p>
          </div>
          <div className="h-px bg-white/10 flex-1 ml-12 hidden md:block mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.items.map((service, index) => {
            const Icon = icons[index];
            return (
              <div 
                key={index} 
                className="group relative bg-brand-surface/40 backdrop-blur-sm border border-white/5 p-8 md:p-10 hover:bg-brand-surface/80 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="w-16 h-16 bg-black border border-white/10 rounded-full flex items-center justify-center mb-8 group-hover:border-brand-red/50 transition-colors z-10 relative">
                  <Icon className="text-white group-hover:text-brand-red transition-colors" size={28} strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-display font-semibold italic text-white mb-3 group-hover:translate-x-1 transition-transform">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed border-b border-white/5 pb-6">
                  {service.description}
                </p>

                <div className="mb-6">
                   <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Investimento único</p>
                   <p className="text-3xl font-display font-bold text-white italic">{service.price}</p>
                </div>

                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm group-hover:text-white transition-colors">
                      <Check className="text-brand-red shrink-0 mt-0.5" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;