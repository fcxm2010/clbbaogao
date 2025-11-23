import React from 'react';
import { MapPin, Users, Thermometer, CloudRain, Ruler } from 'lucide-react';

const Overview: React.FC = () => {
  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 text-secondary font-bold mb-4 uppercase tracking-wider text-sm">
              <MapPin size={16} />
              <span>关于万兴</span>
            </div>
            <h2 className="text-4xl font-bold text-stone-800 mb-6">
              万兴，古称“旺兴”
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              寓意“万物兴旺、地杰人灵”。坐落于施甸之南、怒江东岸。
              这里是典型的山区农业乡，山高坡陡，基础设施曾相对滞后，农民“靠天吃饭”现象较为突出。
              但在各方努力下，正在发生翻天覆地的变化。
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                <div className="flex items-center gap-3 mb-2 text-primary">
                  <Ruler size={24} />
                  <span className="font-bold text-2xl">95.37</span>
                </div>
                <p className="text-sm text-stone-500">国土面积 (平方公里)</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                <div className="flex items-center gap-3 mb-2 text-primary">
                  <Users size={24} />
                  <span className="font-bold text-2xl">15,149</span>
                </div>
                <p className="text-sm text-stone-500">总人口 (人)</p>
              </div>
            </div>
          </div>

          {/* Visual/Map Representation Cards */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-secondary">
                <div className="flex justify-between items-start">
                    <div className="p-3 bg-orange-100 rounded-full text-secondary">
                        <MapPin />
                    </div>
                    <span className="text-4xl font-bold text-stone-800">7</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-stone-700">辖区村社</h3>
                <p className="mt-2 text-stone-500 text-sm">万兴社区、长浪坝村、写寨村、中山村、东安社区、大水村、牛汪塘村</p>
             </div>

             <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
                <div className="flex justify-between items-start">
                    <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                        <CloudRain />
                    </div>
                    <div className="text-right">
                         <span className="block text-2xl font-bold text-stone-800">1400mm</span>
                    </div>
                </div>
                <h3 className="mt-4 text-xl font-bold text-stone-700">年均降水</h3>
                <p className="mt-2 text-stone-500 text-sm">气候湿润，适合多样化农业发展</p>
             </div>

             <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-500">
                <div className="flex justify-between items-start">
                    <div className="p-3 bg-yellow-100 rounded-full text-yellow-600">
                        <Thermometer />
                    </div>
                    <span className="text-2xl font-bold text-stone-800">19℃</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-stone-700">年均气温</h3>
                <p className="mt-2 text-stone-500 text-sm">气候宜人，冬无严寒</p>
             </div>

             <div className="bg-stone-800 p-6 rounded-2xl shadow-md text-white flex flex-col justify-center items-center text-center relative overflow-hidden group">
                 <img src="./img/changlangbahangpai1.webp" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity" alt="长浪坝航拍" />
                 <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-2">3834户</h3>
                    <p className="text-stone-300 text-sm">现有农户</p>
                 </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Overview;