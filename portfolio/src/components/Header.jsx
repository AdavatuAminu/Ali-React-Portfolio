import { useState } from 'react';
import { X, Menu, Sun, Moon } from 'lucide-react';

function Header({ darkMode, setDarkMode, activeSection, setActiveSection }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuLinks = ['home', 'about', 'portfolio', 'contact'];
    const currentSection = activeSection;
    const toggleTheme = () => setDarkMode(!darkMode);

    return (
        <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 shadow-md bg-inherit">
            <nav className="flex items-center justify-between w-full">
                {/* Logo */}
                <div className="flex items-center gap-2 justify-start">
                    <img
                        src={darkMode ? '/Ali-Logo2.png' : '/Ali-Logo.png'}
                        alt="logo"
                        className="h-8 md:h-12"
                    />
                </div>

                {/* Desktop Nav */}
                <ul className="hidden md:flex gap-10 text-md font-medium mr-35">
                    {menuLinks.map((route) => (
                        <li key={route}>
                            <a
                                href={`#${route}`}
                                onClick={() => setActiveSection(route)}
                                className={`capitalize relative transition-colors duration-200 ${currentSection === route ? 'text-orange-500 after:scale-x-100' : 'hover:text-orange-400 after:scale-x-0'
                                    } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-orange-500 after:w-full after:transition-transform after:duration-300 after:origin-left`}
                            >
                                {route}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Theme toggle */}
                <div className="hidden md:flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className={`w-12 h-6 rounded-full flex items-center transition-colors duration-300 ${darkMode ? 'bg-blue-700' : 'border border-blue-700'
                            }`}
                    >
                        <span
                            className={`transform transition-transform duration-300 ${darkMode ? 'translate-x-6' : 'translate-x-1'
                                }`}
                        >
                            {darkMode ? <Moon size={16} className="text-white" /> : <Sun size={16} className="text-black" />}
                        </span>
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <Menu className="md:hidden h-8 w-8 cursor-pointer" onClick={() => setIsMobileMenuOpen(true)} />
            </nav>

            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-inherit dark:bg-black shadow-md z-50 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-6">
                    <button className="mb-6" onClick={() => setIsMobileMenuOpen(false)}>
                        <X className="h-6 w-6" />
                    </button>
                    <ul className="flex flex-col gap-6 font-bold text-lg text-left">
                        {menuLinks.map((route) => (
                            <li key={route}>
                                <a href={`#${route}`} onClick={() => setIsMobileMenuOpen(false)} className="capitalize hover:text-orange-500">
                                    {route}
                                </a>
                            </li>
                        ))}
                        <button
                            onClick={toggleTheme}
                            className={`mt-6 w-12 h-6 rounded-full flex items-center transition-colors duration-300 ${darkMode ? 'bg-blue-700' : 'border border-blue-700'
                                }`}
                        >
                            <span
                                className={`transform transition-transform duration-300 ${darkMode ? 'translate-x-6' : 'translate-x-1'
                                    }`}
                            >
                                {darkMode ? <Moon size={16} className="text-white" /> : <Sun size={16} className="text-black" />}
                            </span>
                        </button>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
