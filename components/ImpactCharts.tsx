import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from 'recharts';
import { TrendingUp, ShoppingBag, Activity } from 'lucide-react';

const cattleData = [
  { name: '存栏量 (头)', y2021: 5641, y2024: 7578, growth: '+34.3%' },
  { name: '出栏量 (头)', y2021: 1484, y2024: 3149, growth: '+112.2%' },
  { name: '冻精改良 (头)', y2021: 1500, y2024: 4200, growth: '+180%' },
];

const coopData = [
  { name: '统购玉米 (吨)', value: 1115 },
  { name: '猪浓缩料 (袋)', value: 2898 },
  { name: '牛浓缩料 (袋)', value: 1096 },
  { name: '豌豆种 (袋)', value: 767 },
];

const ImpactCharts: React.FC = () => {
  return (
    <section className="py-20 bg-stone-900 text-white">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">数据见证</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">产业发展与合作社成效</h2>
            <p className="text-gray-400 mt-4">通过技术推广与合作社统一运作，实现了质与量的双重飞跃。</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Cattle Chart */}
          <div className="bg-stone-800 p-6 rounded-2xl border border-stone-700 shadow-xl">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-xl font-bold flex items-center gap-2">
                        <Activity className="text-secondary" />
                        肉牛产业增长对比
                    </h3>
                    <p className="text-sm text-gray-400">2021年 vs 2024年</p>
                </div>
            </div>
            
            <div className="h-[350px] w-full font-sans text-xs">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={cattleData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  layout="horizontal"
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" vertical={false} />
                  <XAxis dataKey="name" stroke="#9ca3af" tick={{fill: '#9ca3af'}} />
                  <YAxis stroke="#9ca3af" tick={{fill: '#9ca3af'}} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1c1917', borderColor: '#444', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                    cursor={{fill: 'rgba(255,255,255,0.1)'}}
                  />
                  <Legend wrapperStyle={{ paddingTop: '20px' }} />
                  <Bar dataKey="y2021" name="2021年" fill="#57534e" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="y2024" name="2024年" fill="#ea580c" radius={[4, 4, 0, 0]}>
                     {
                        cattleData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index === 2 ? '#ca8a04' : '#ea580c'} />
                        ))
                     }
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
                {cattleData.map((item, idx) => (
                    <div key={idx} className="text-center bg-stone-700/50 p-3 rounded-lg">
                        <div className="text-xs text-gray-400">{item.name}</div>
                        <div className="text-lg font-bold text-green-400">{item.growth}</div>
                    </div>
                ))}
            </div>
          </div>

          {/* Coop Stats Grid */}
          <div className="flex flex-col gap-6">
            <div className="bg-stone-800 p-6 rounded-2xl border border-stone-700 shadow-xl flex-grow">
                <h3 className="text-xl font-bold flex items-center gap-2 mb-6">
                    <ShoppingBag className="text-blue-500" />
                    合作社物资统购 (部分)
                </h3>
                <div className="space-y-4">
                    {coopData.map((item, index) => (
                        <div key={index} className="relative">
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-gray-300">{item.name}</span>
                                <span className="font-bold text-white">{item.value}</span>
                            </div>
                            <div className="w-full bg-stone-700 rounded-full h-2.5">
                                <div 
                                    className="bg-blue-600 h-2.5 rounded-full" 
                                    style={{ width: `${(item.value / 3000) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-8 pt-6 border-t border-stone-700 grid grid-cols-2 gap-4">
                     <div className="bg-stone-700 p-4 rounded-xl">
                        <p className="text-gray-400 text-sm">入股社员</p>
                        <p className="text-2xl font-bold text-white">1214 <span className="text-sm font-normal">户</span></p>
                     </div>
                     <div className="bg-stone-700 p-4 rounded-xl">
                        <p className="text-gray-400 text-sm">实现盈利</p>
                        <p className="text-2xl font-bold text-yellow-400">50.08 <span className="text-sm font-normal">万元</span></p>
                     </div>
                </div>
            </div>

             <div className="bg-gradient-to-r from-primary to-green-700 p-6 rounded-2xl shadow-xl text-white flex items-center justify-between">
                <div>
                    <p className="text-green-100 text-sm font-medium mb-1">项目资金支持</p>
                    <p className="text-3xl font-bold">380 <span className="text-lg">万元</span></p>
                    <p className="text-xs text-green-200 mt-2">用于加工厂建设与猪场改造</p>
                </div>
                <div className="bg-white/20 p-3 rounded-full">
                    <TrendingUp size={32} />
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ImpactCharts;