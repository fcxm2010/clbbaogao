import React from 'react';
import { Mountain, HeartHandshake } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/16/1920/1080" 
          alt="Rural Landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-primary/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="flex justify-center mb-6 space-x-4 opacity-90">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                <Mountain size={20} />
                <span className="text-sm font-medium tracking-wide">云南·施甸·万兴</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                <HeartHandshake size={20} />
                <span className="text-sm font-medium tracking-wide">香港小母牛项目</span>
            </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight drop-shadow-lg">
          情撒大地 <span className="text-accent">润物无声</span>
        </h1>
        
        <h2 className="text-xl md:text-3xl font-light mb-10 text-gray-100">
          香港小母牛助推万兴乡村振兴纪实
        </h2>

        <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-gray-200 mb-12">
          2022年5月，三方携手，开启四年助推征程。<br/>
          绘制“产业兴旺、生态宜居、乡风文明、治理有效、生活富裕”的新画卷。
        </p>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          <span className="text-sm uppercase tracking-widest text-white/70 animate-bounce">向下滚动了解更多</span>
        </div>
      </div>
    </header>
  );
};

export default Header;