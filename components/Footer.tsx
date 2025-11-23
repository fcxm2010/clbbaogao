import React from 'react';
import { Quote } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-accent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
            <Quote className="mx-auto text-stone-700 mb-6" size={48} />
            <p className="text-xl md:text-2xl text-stone-200 font-light italic leading-relaxed mb-8">
            “这是万兴乡党委政府正确领导的结果，是施甸县农业农村系统谋划协助的结果，是万兴人民群众全力配合的结果，更是香港小母牛北京代表处鼎力帮助的结果。”
            </p>
            <div className="w-16 h-1 bg-stone-700 mx-auto mb-8"></div>
            <h3 className="text-white font-bold text-lg">展望未来</h3>
            <p className="mt-4 text-stone-400">
                我们将更加坚定信心，以更饱满的激情和更昂扬的斗志，在乡村振兴的大道上阔步前行，为施甸的全面振兴贡献智慧和力量！
            </p>
        </div>

        <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>© 2024 万兴乡村振兴项目报告. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
                <span>香港小母牛</span>
                <span>•</span>
                <span>施甸县农业农村局</span>
                <span>•</span>
                <span>万兴乡人民政府</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;