import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language, Translation } from '../types';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translation['nav'];
}

const Header: React.FC<HeaderProps> = ({ lang, setLang, t }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-display font-bold tracking-wide cursor-pointer flex items-center gap-2" onClick={() => scrollTo('hero')}>
          <span className="italic">MD</span> <span className="text-brand-red font-normal text-lg tracking-widest">STUDIOS</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { key: 'home', id: 'hero' },
            { key: 'services', id: 'services' },
            { key: 'projects', id: 'projects' },
            { key: 'testimonials', id: 'testimonials' },
            { key: 'contact', id: 'contact' },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => scrollTo(item.id)}
              className="text-xs font-medium text-gray-300 hover:text-brand-red transition-colors uppercase tracking-[0.15em]"
            >
              {t[item.key as keyof typeof t]}
            </button>
          ))}
        </nav>

        {/* Language & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 bg-white/5 rounded-full px-3 py-1 border border-white/10">
            <Globe size={14} className="text-brand-red" />
            <button 
              onClick={() => setLang('pt')} 
              className={`text-xs font-bold ${lang === 'pt' ? 'text-white' : 'text-gray-500 hover:text-white'}`}
            >
              PT
            </button>
            <span className="text-gray-600">|</span>
            <button 
              onClick={() => setLang('en')} 
              className={`text-xs font-bold ${lang === 'en' ? 'text-white' : 'text-gray-500 hover:text-white'}`}
            >
              EN
            </button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 flex flex-col space-y-4 shadow-2xl">
           {[
            { key: 'home', id: 'hero' },
            { key: 'services', id: 'services' },
            { key: 'projects', id: 'projects' },
            { key: 'testimonials', id: 'testimonials' },
            { key: 'contact', id: 'contact' },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => scrollTo(item.id)}
              className="text-left text-lg font-display font-medium text-gray-200 hover:text-brand-red italic"
            >
              {t[item.key as keyof typeof t]}
            </button>
          ))}
          <div className="pt-4 flex items-center space-x-4 border-t border-white/10">
            <button onClick={() => { setLang('pt'); setIsMenuOpen(false); }} className={`flex items-center space-x-2 ${lang === 'pt' ? 'text-brand-red' : 'text-gray-400'}`}>
              <span>🇧🇷 PT-BR</span>
            </button>
            <button onClick={() => { setLang('en'); setIsMenuOpen(false); }} className={`flex items-center space-x-2 ${lang === 'en' ? 'text-brand-red' : 'text-gray-400'}`}>
               <span>🇺🇸 EN-US</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;