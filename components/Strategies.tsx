import React, { useState } from 'react';
import { Flag, Layers, GraduationCap, Music, Signpost, ChevronRight } from 'lucide-react';

interface Strategy {
  id: number;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  color: string;
  content: React.ReactNode;
}

const Strategies: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(1);

  const strategies: Strategy[] = [
    {
      id: 1,
      icon: Flag,
      title: "扛好一面旗子",
      subtitle: "筑牢党组织战斗堡垒",
      color: "bg-red-600",
      content: (
        <div className="space-y-4 animate-fadeIn">
          <p className="text-lg font-medium text-gray-800">坚持党建引领，通过“四个会”统一思想：</p>
          <ul className="list-none space-y-3">
            <li className="flex items-start gap-3 bg-red-50 p-3 rounded-lg">
              <span className="bg-red-200 text-red-800 px-2 py-0.5 rounded text-xs font-bold mt-1">01</span>
              <p className="text-sm text-gray-700"><strong>村“两委”会：</strong> 变“要我干”为“我要干”。</p>
            </li>
            <li className="flex items-start gap-3 bg-red-50 p-3 rounded-lg">
              <span className="bg-red-200 text-red-800 px-2 py-0.5 rounded text-xs font-bold mt-1">02</span>
              <p className="text-sm text-gray-700"><strong>小组户长会：</strong> 算好经济账、长远账，打消顾虑。</p>
            </li>
            <li className="flex items-start gap-3 bg-red-50 p-3 rounded-lg">
              <span className="bg-red-200 text-red-800 px-2 py-0.5 rounded text-xs font-bold mt-1">03</span>
              <p className="text-sm text-gray-700"><strong>筹备组会：</strong> 民主议事，拟定章程。</p>
            </li>
            <li className="flex items-start gap-3 bg-red-50 p-3 rounded-lg">
              <span className="bg-red-200 text-red-800 px-2 py-0.5 rounded text-xs font-bold mt-1">04</span>
              <p className="text-sm text-gray-700"><strong>社员大会：</strong> 选举产生理事会、监事会，防止私有化。</p>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 2,
      icon: Layers,
      title: "搭好一个台子",
      subtitle: "发挥合作社桥梁作用",
      color: "bg-orange-500",
      content: (
        <div className="space-y-4 animate-fadeIn">
            <p className="text-lg font-medium text-gray-800">坚持五个原则，做实综合服务型合作社：</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3 border border-orange-200 rounded hover:bg-orange-50 transition-colors">
                    <h4 className="font-bold text-orange-700">分批分步入社</h4>
                    <p className="text-xs text-gray-600">自愿加入，退社自由。</p>
                </div>
                <div className="p-3 border border-orange-200 rounded hover:bg-orange-50 transition-colors">
                    <h4 className="font-bold text-orange-700">入社须入股</h4>
                    <p className="text-xs text-gray-600">身份股绑定利益。</p>
                </div>
                <div className="p-3 border border-orange-200 rounded hover:bg-orange-50 transition-colors">
                    <h4 className="font-bold text-orange-700">不赊不欠</h4>
                    <p className="text-xs text-gray-600">统购统销，降低成本。</p>
                </div>
                <div className="p-3 border border-orange-200 rounded hover:bg-orange-50 transition-colors">
                    <h4 className="font-bold text-orange-700">不使用白工</h4>
                    <p className="text-xs text-gray-600">亲兄弟明算账，企业化管理。</p>
                </div>
            </div>
        </div>
      )
    },
    {
      id: 3,
      icon: GraduationCap,
      title: "选好一帮才子",
      subtitle: "培育乡村人才队伍",
      color: "bg-blue-600",
      content: (
        <div className="space-y-4 animate-fadeIn">
            <p className="text-lg font-medium text-gray-800">关键在人，选好用好“五支队伍”：</p>
            <div className="space-y-2">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700"><strong>党总支书记：</strong> 把握方向，谋划发展。</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700"><strong>监事长：</strong> 敢于监督，确保安全。</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700"><strong>骨干成员：</strong> 懂经营、懂技术、懂加工。</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700"><strong>宣传员：</strong> 宣传政策，调查意愿。</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700"><strong>专职出纳：</strong> 财务记账，台账管理。</span>
                </div>
            </div>
            <div className="mt-4 bg-blue-50 p-3 rounded text-sm text-blue-800">
                已组织外出考察培训 <strong>9期 118人次</strong>，培养“策划者”思维。
            </div>
        </div>
      )
    },
    {
      id: 4,
      icon: Music,
      title: "唱好一首曲子",
      subtitle: "点燃产业发展新引擎",
      color: "bg-green-600",
      content: (
        <div className="space-y-4 animate-fadeIn">
          <p className="text-gray-600 mb-2">立足资源禀赋，三产融合发展。</p>
          <div className="grid grid-cols-1 gap-3">
             <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 className="font-bold text-green-800">技术推广</h4>
                <p className="text-sm text-green-700">冻精改良、动物防疫、青贮饲料加工，肉牛产业量质齐升。</p>
             </div>
             <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 className="font-bold text-green-800">三产融合</h4>
                <p className="text-sm text-green-700">保山黑猪扩繁、肉食品加工厂、电商人才培训。</p>
             </div>
             <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 className="font-bold text-green-800">一村一品</h4>
                <p className="text-sm text-green-700">因地制宜发展甘蔗、茶叶、中草药、蔬菜等特色种植。</p>
             </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      icon: Signpost,
      title: "走出一条路子",
      subtitle: "绘就和美乡村新画卷",
      color: "bg-teal-600",
      content: (
        <div className="space-y-4 animate-fadeIn">
            <div className="relative pl-6 border-l-2 border-teal-200 space-y-6">
                <div className="relative">
                    <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-teal-500 border-2 border-white"></span>
                    <h4 className="font-bold text-teal-800">新风文明建设</h4>
                    <p className="text-sm text-gray-600 mt-1">召开多层级会议，通过《移风易俗倡导新风管理制度》，革除陋习。</p>
                </div>
                <div className="relative">
                    <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-teal-500 border-2 border-white"></span>
                    <h4 className="font-bold text-teal-800">传统节庆活动</h4>
                    <p className="text-sm text-gray-600 mt-1">举办火把节、重阳节等，丰富文化生活。</p>
                </div>
                <div className="relative">
                    <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-teal-500 border-2 border-white"></span>
                    <h4 className="font-bold text-teal-800">环境治理</h4>
                    <p className="text-sm text-gray-600 mt-1">粪肥还田、减少化肥、人居环境提升，实现村美、人和。</p>
                </div>
            </div>
        </div>
      )
    }
  ];

  const activeStrategy = strategies.find(s => s.id === activeId);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">五大振兴策略</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            坚持“扛好一面旗子、搭好一个台子、育好一批人才、唱好一首曲子、走出一条路子”的发展思路。
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 h-full lg:h-[600px]">
          {/* Navigation Buttons */}
          <div className="lg:w-1/3 flex flex-col gap-3">
            {strategies.map((strategy) => (
              <button
                key={strategy.id}
                onClick={() => setActiveId(strategy.id)}
                className={`group flex items-center justify-between p-6 rounded-xl transition-all duration-300 text-left border ${
                  activeId === strategy.id 
                    ? `${strategy.color} text-white shadow-lg scale-105` 
                    : 'bg-white border-gray-100 text-gray-600 hover:bg-gray-50 hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${activeId === strategy.id ? 'bg-white/20' : 'bg-gray-100 text-gray-500'}`}>
                    <strategy.icon size={24} />
                  </div>
                  <div>
                    <h3 className={`font-bold ${activeId === strategy.id ? 'text-white' : 'text-gray-800'}`}>
                      {strategy.title}
                    </h3>
                    <p className={`text-xs mt-1 ${activeId === strategy.id ? 'text-white/80' : 'text-gray-400'}`}>
                      {strategy.subtitle}
                    </p>
                  </div>
                </div>
                <ChevronRight className={`transform transition-transform ${activeId === strategy.id ? 'rotate-90 lg:rotate-0 opacity-100' : 'opacity-0'}`} />
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3 bg-stone-50 rounded-3xl p-8 md:p-12 border border-stone-100 shadow-inner flex flex-col justify-center relative overflow-hidden">
             {/* Decorative BG Icon */}
            <div className="absolute -right-10 -bottom-10 text-stone-200 opacity-50 rotate-12">
                {activeStrategy && <activeStrategy.icon size={300} />}
            </div>
            
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${activeStrategy?.color}`}>
                        策略 {activeStrategy?.id}
                    </span>
                    <h3 className="text-3xl font-bold text-gray-800">{activeStrategy?.subtitle}</h3>
                </div>
                
                <div className="prose prose-lg max-w-none">
                    {activeStrategy?.content}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategies;