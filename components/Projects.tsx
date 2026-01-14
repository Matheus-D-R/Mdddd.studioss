import React from 'react';
import { ArrowUpRight, Layers, Layout, Briefcase, Code2 } from 'lucide-react';
import { Translation } from '../types';
import { PROJECTS } from '../constants';

interface ProjectsProps {
  t: Translation['projects'];
}

const Projects: React.FC<ProjectsProps> = ({ t }) => {
  const getIcon = (category: string) => {
    if (category.includes('Landing')) return <Layout size={32} />;
    if (category.includes('Institutional')) return <Layers size={32} />;
    return <Briefcase size={32} />;
  };

  return (
    <section id="projects" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-medium italic text-white mb-4">
              {t.title}
            </h2>
             <p className="text-gray-400 max-w-xl font-light">{t.subtitle}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <a 
              key={index} 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative block bg-brand-surface/20 border border-white/5 rounded-2xl overflow-hidden transition-all hover:border-brand-red/50 hover:-translate-y-2"
            >
              {/* Abstract Visual Replacement for Image */}
              <div className="h-48 relative overflow-hidden bg-[#0A0A0A]">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-transparent to-transparent opacity-80"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-brand-red/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Center Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-600 group-hover:text-brand-red transition-colors duration-500 scale-100 group-hover:scale-110">
                  {getIcon(project.category)}
                </div>

                {/* Mock Window Controls */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                </div>

                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md border border-white/10 p-1.5 rounded-lg opacity-50 group-hover:opacity-100 group-hover:bg-brand-red group-hover:border-brand-red transition-all">
                  <ArrowUpRight className="text-white" size={16} />
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-brand-red uppercase tracking-widest">{project.category}</span>
                  <Code2 size={16} className="text-gray-600" />
                </div>
                
                <h3 className="text-2xl font-display font-medium italic text-white mb-2 group-hover:text-brand-red transition-colors">{project.name}</h3>
                <p className="text-sm text-gray-400 mb-6 line-clamp-2 font-light">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag, i) => (
                    <span key={i} className="text-[10px] font-mono font-medium text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;