import React from 'react';
import { Sprout, Coffee, Carrot, Flower } from 'lucide-react';

const villages = [
  { name: '东安村', product: '糖料甘蔗', amount: '540亩', icon: Sprout, color: 'text-green-600', bg: 'bg-green-50' },
  { name: '长浪坝村', product: '中草药 & 茶叶', amount: '62户', icon: Coffee, color: 'text-amber-700', bg: 'bg-amber-50' },
  { name: '万兴村', product: '红萝卜', amount: '17户', icon: Carrot, color: 'text-orange-600', bg: 'bg-orange-50' },
  { name: '写寨村', product: '种桑养蚕', amount: '20户', icon: Flower, color: 'text-purple-600', bg: 'bg-purple-50' },
  { name: '大水 & 牛汪塘', product: '贡菜 & 无筋豆', amount: '64户', icon: Sprout, color: 'text-emerald-600', bg: 'bg-emerald-50' },
];

const VillageGrid: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-800">一村一品 · 特色产业</h2>
            <p className="text-stone-500 mt-3">因地制宜，打造多元化农业经济版图</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {villages.map((v, idx) => (
                <div key={idx} className={`group relative p-6 rounded-xl border border-stone-100 shadow-sm hover:shadow-lg transition-all duration-300 ${v.bg} flex flex-col items-center text-center`}>
                    <div className={`p-4 rounded-full bg-white shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300 ${v.color}`}>
                        <v.icon size={32} />
                    </div>
                    <h3 className="text-lg font-bold text-stone-800 mb-1">{v.name}</h3>
                    <p className={`font-medium ${v.color}`}>{v.product}</p>
                    <div className="mt-3 text-xs bg-white/60 px-3 py-1 rounded-full text-stone-600 font-mono">
                        规模: {v.amount}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default VillageGrid;