import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Check, Info } from 'lucide-react';
import { Translation } from '../types';

interface SmartInvestmentProps {
  t: Translation['investment'];
}

const SmartInvestment: React.FC<SmartInvestmentProps> = ({ t }) => {
  const data = [
    {
      name: t.chart.mdLabel,
      price: 949,
      color: '#E6003E'
    },
    {
      name: t.chart.competitorLabel,
      price: 3500,
      color: '#2A2A2A'
    }
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-brand-surface border border-white/10 p-4 shadow-xl backdrop-blur-md">
          <p className="font-bold text-white text-sm mb-1">{payload[0].payload.name}</p>
          <p className="text-brand-red font-mono font-bold">R$ {payload[0].value.toLocaleString()}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="investment" className="py-32 bg-brand-dark relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-medium italic text-white mb-6">{t.title}</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: The Offer Details */}
          <div className="bg-brand-surface border border-brand-red/30 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 bg-brand-red text-white text-xs font-bold px-4 py-2 rounded-bl-xl">
              {t.offer.discountBadge}
            </div>
            
            <div className="mb-8">
              <span className="text-brand-red font-bold tracking-widest uppercase text-sm mb-2 block">{t.offer.label}</span>
              <div className="flex items-baseline gap-4">
                 <span className="text-5xl md:text-7xl font-display font-bold italic text-white tracking-tight">{t.offer.newPrice}</span>
                 <span className="text-xl text-gray-500 line-through decoration-brand-red/50">{t.offer.oldPrice}</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
               {t.offer.features.map((feature, idx) => (
                 <div key={idx} className="flex items-center gap-4 p-3 bg-white/5 rounded-lg border border-white/5">
                   <div className="w-6 h-6 rounded-full bg-brand-red/20 flex items-center justify-center shrink-0">
                     <Check size={14} className="text-brand-red" />
                   </div>
                   <span className="text-gray-200 font-medium">{feature}</span>
                 </div>
               ))}
            </div>
            
            <p className="text-xs text-gray-500 text-center uppercase tracking-widest border-t border-white/10 pt-6">
              * Pagamento Único | Sem mensalidades ocultas
            </p>
          </div>

          {/* Right: The Comparison Chart */}
          <div className="bg-[#050505] border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col">
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-2xl font-display font-medium italic text-white">{t.chart.title}</h3>
              <Info size={20} className="text-gray-600" />
            </div>

            <div className="flex-1 min-h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis 
                    dataKey="name" 
                    stroke="#666" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                    tick={{fill: '#888'}}
                  />
                  <YAxis hide />
                  <Tooltip content={<CustomTooltip />} cursor={{fill: 'transparent'}} />
                  <Bar dataKey="price" radius={[6, 6, 6, 6]} barSize={80} animationDuration={2000}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
             
             <div className="mt-8 text-center">
               <p className="text-gray-400 text-sm">
                 <strong className="text-white">Análise:</strong> Agências tradicionais repassam altos custos operacionais para o cliente. A <span className="text-brand-red font-bold">MD Studios</span> opera com estrutura enxuta.
               </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartInvestment;