import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Translation } from '../types';

interface ComparisonProps {
  t: Translation['comparison'];
}

const Comparison: React.FC<ComparisonProps> = ({ t }) => {
  const data = [
    {
      name: t.mdLabel,
      price: 949,
      color: '#E6003E'
    },
    {
      name: t.competitorLabel,
      price: 3500,
      color: '#333333'
    }
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-brand-surface border border-white/10 p-4 rounded-lg shadow-xl">
          <p className="font-bold text-white">{payload[0].payload.name}</p>
          <p className="text-brand-red font-mono">R$ {payload[0].value.toLocaleString()}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-24 bg-brand-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              {t.title}
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              {t.description}
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white">
                <div className="w-3 h-3 rounded-full bg-brand-red"></div>
                <span className="font-bold">MD Studios:</span> Acessível, focado em ROI.
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                <span>Concorrência:</span> Custos operacionais repassados a você.
              </li>
            </ul>
          </div>

          <div className="h-[400px] w-full bg-brand-surface/30 rounded-2xl p-6 border border-white/5">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name" stroke="#666" fontSize={14} tickLine={false} axisLine={false} />
                <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `R$${value}`} />
                <Tooltip content={<CustomTooltip />} cursor={{fill: 'transparent'}} />
                <Bar dataKey="price" radius={[8, 8, 0, 0]} barSize={60} animationDuration={1500}>
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;