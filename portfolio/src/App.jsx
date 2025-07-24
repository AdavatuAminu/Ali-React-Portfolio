import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Home from './components/Home';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
   <div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen w-full overflow-x-hidden`}>
      <BrowserRouter>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/home' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
