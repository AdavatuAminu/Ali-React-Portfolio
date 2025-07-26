import { useState } from 'react';
import { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import { ArrowUp } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) {
        progressBar.style.width = `${scrollPercent}%`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen w-full overflow-x-hidden`}>
      <div className="fixed top-0 left-0 w-full z-[999] h-1 bg-gray-200">
        <div
          id="scroll-progress"
          className="h-full bg-orange-500 transition-all duration-200"
          style={{ width: '0%', height: '4px' }}
        ></div>
      </div>

      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <Home setActiveSection={setActiveSection} />
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setActiveSection('home'); // ✅ Explicitly set this
        }}
        className="fixed bottom-6 right-6 bg-blue-700 text-white p-3 rounded-full shadow-md hover:bg-orange-500 transition"
      >
        <ArrowUp size={20} />
      </button>

    </div>
  );
}

export default App;
