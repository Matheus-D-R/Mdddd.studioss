import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Services from './components/Services';
import Process from './components/Process';
import SmartInvestment from './components/SmartInvestment';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import { TRANSLATIONS } from './constants';
import { Language } from './types';

function App() {
  const [lang, setLang] = useState<Language>('pt');
  const t = TRANSLATIONS[lang];

  const openWhatsApp = () => {
    window.open('https://wa.me/551892929292?text=Olá, tenho interesse em escalar meu negócio com a MD Studios.', '_blank');
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-brand-red selection:text-white">
      <Header lang={lang} setLang={setLang} t={t.nav} />
      
      <main>
        <Hero t={t.hero} onCtaClick={openWhatsApp} />
        <TechStack title={t.techStack} />
        <Services t={t.services} />
        <Process t={t.process} />
        <SmartInvestment t={t.investment} />
        <Projects t={t.projects} />
        <Testimonials t={t.testimonials} />
        <FAQ t={t.faq} />
      </main>

      <Contact t={t.contact} />
      <WhatsAppButton t={t.contact} />
    </div>
  );
}

export default App;