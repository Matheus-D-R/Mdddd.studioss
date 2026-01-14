import React from 'react';
import { Star } from 'lucide-react';
import { Translation } from '../types';
import { TESTIMONIALS } from '../constants';

interface TestimonialsProps {
  t: Translation['testimonials'];
}

const Testimonials: React.FC<TestimonialsProps> = ({ t }) => {
  return (
    <section id="testimonials" className="py-24 bg-brand-gray relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-display font-medium italic text-white mb-16 text-center">
          {t.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <div key={index} className="bg-black/50 p-8 rounded-2xl border border-white/5 relative">
              <div className="flex gap-1 mb-6 text-yellow-500">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6 font-light">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{item.name}</h4>
                  <p className="text-gray-500 text-xs uppercase">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;