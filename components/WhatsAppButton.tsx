import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Translation } from '../types';

interface WhatsAppButtonProps {
  t: Translation['contact'];
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = () => {
    const text = message.trim() || t.placeholder;
    const url = `https://wa.me/551892929292?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="mb-4 w-72 bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="bg-[#075E54] p-4 flex justify-between items-center text-white">
                <span className="font-bold text-sm">WhatsApp Chat</span>
                <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 rounded-full p-1">
                  <X size={16} />
                </button>
              </div>
              <div className="p-4 bg-[#E5DDD5] min-h-[150px] flex flex-col">
                <p className="text-xs text-gray-600 mb-2">{t.whatsappPrompt}</p>
                <textarea
                  className="w-full flex-1 bg-white rounded-lg p-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#128C7E] resize-none"
                  placeholder={t.placeholder}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  autoFocus
                />
                <button
                  onClick={handleSend}
                  className="mt-3 bg-[#128C7E] hover:bg-[#075E54] text-white py-2 px-4 rounded-full flex items-center justify-center gap-2 text-sm font-bold transition-colors"
                >
                  {t.send} <Send size={14} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
        >
          {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        </button>
      </div>
    </>
  );
};

export default WhatsAppButton;