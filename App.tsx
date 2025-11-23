import React from 'react';
import Header from './components/Header';
import Overview from './components/Overview';
import Strategies from './components/Strategies';
import ImpactCharts from './components/ImpactCharts';
import VillageGrid from './components/VillageGrid';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [showScroll, setShowScroll] = React.useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showScroll]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        <Overview />
        <Strategies />
        <ImpactCharts />
        <VillageGrid />
      </main>

      <Footer />

      {/* Scroll to top button */}
      <button
        className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary text-white shadow-lg transition-all duration-300 hover:bg-secondary focus:outline-none ${
          showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        onClick={scrollTop}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default App;