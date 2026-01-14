import React, { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, ArrowUp, Send } from 'lucide-react';
import { Translation } from '../types';

interface ContactProps {
  t: Translation['contact'];
}

const Contact: React.FC<ContactProps> = ({ t }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    const text = message.trim() ? message : t.placeholder;
    const url = `https://wa.me/551892929292?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <footer id="contact" className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
             <div className="text-3xl font-display font-black tracking-tighter mb-8 text-white">
              MD <span className="text-brand-red">STUDIOS</span>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-400">
                <MapPin className="text-brand-red" size={20} />
                <span>{t.location}</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <Phone className="text-brand-red" size={20} />
                <span>(18) 9292-9292</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <Mail className="text-brand-red" size={20} />
                <span>contato@md.studios.com.br</span>
              </div>
            </div>
            
            <div className="mt-8">
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-brand-red hover:text-white text-gray-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="bg-brand-surface p-8 rounded-2xl border border-white/5 shadow-2xl">
            <h3 className="text-white font-bold text-xl mb-4">{t.title}</h3>
            <p className="text-gray-400 mb-4 text-sm">{t.whatsappPrompt}</p>
            
            <textarea
              className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white mb-4 focus:border-brand-red focus:outline-none transition-colors resize-none h-32 placeholder-gray-600"
              placeholder={t.placeholder}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button 
              onClick={handleSend}
              className="w-full bg-green-600 hover:bg-green-700 text-white text-center font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {t.send} <Send size={18} />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} MD Studios. All rights reserved.</p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 hover:text-brand-red transition-colors mt-4 md:mt-0"
          >
            Voltar ao topo <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Contact;