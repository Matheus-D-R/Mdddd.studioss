import React from 'react';
import { Translation } from '../types';

interface TechStackProps {
  title: string;
}

const techs = [
  'REACT.JS', 'NEXT.JS', 'TYPESCRIPT', 'TAILWIND CSS', 'VERCEL', 
  'GOOGLE ANALYTICS 4', 'GTM', 'AWS', 'NODE.JS', 'FIGMA'
];

const TechStack: React.FC<TechStackProps> = ({ title }) => {
  return (
    <section className="py-10 bg-black border-y border-white/5 overflow-hidden">
      <p className="text-center text-xs text-gray-600 uppercase tracking-widest mb-6 font-bold">{title}</p>
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex space-x-12">
          {[...techs, ...techs, ...techs].map((tech, index) => (
            <span key={index} className="text-2xl md:text-4xl font-display font-black text-white/10 mx-4 select-none">
              {tech}
            </span>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex space-x-12">
           {[...techs, ...techs, ...techs].map((tech, index) => (
            <span key={`dup-${index}`} className="text-2xl md:text-4xl font-display font-black text-white/10 mx-4 select-none">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        .animate-marquee { animation: marquee 25s linear infinite; }
        .animate-marquee2 { animation: marquee2 25s linear infinite; }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>
  );
};

export default TechStack;