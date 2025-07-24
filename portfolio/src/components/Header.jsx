import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { X, Menu } from 'lucide-react';

function Header() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuLinks = ['home', 'about', 'portfolio', 'contact',];

    const Navigation = () => (
        
        <nav className="flex justify-between items-center w-full">
            {/* Left Section */}
             <div className='justify-start'>
            <img src="/Ali-Logo.png" alt="logo" className="h-9 md:h-15" />
        </div>
            <div className="flex items-center gap-4 md:gap-2 md:ml-0 ml-[-1rem]">
                {/* Menu Icon for Mobile */}
                <
                    Menu
                    className="h-10 md:hidden cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(true)}
                />
                
                {/* Desktop NavLinks */}
                <div className="hidden md:flex gap-6 text-md ml-8 mt-6">
                    {menuLinks.map((route) => (
                        <NavLink
                            key={route}
                            to={`/${route}`}
                            className={({ isActive }) =>
                                `${isActive ? 'border-b-4 border-orange-500' : 'border-b-2 border-transparent'} pb-7 hover:border-orange-300 capitalize`
                            }
                        >
                            {route}
                        </NavLink>
                    ))}
                </div>
            </div>

            {/* Right Section */}
        </nav>
    );
    const MobileMenu = () => (
        <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-md z-50 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-6 pr-30">
                <button className="mb-6 pl-45" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                </button>
                <ul className="flex flex-col gap-6 font-bold text-lg text-left">
                    {menuLinks.map((route) => (
                        <li key={route}>
                            <NavLink
                                to={`/${route}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="capitalize hover:text-orange-500"
                            >
                                {route}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white p-6 text-black h-20">
            {/* Mobile View */}
            <div className="md:hidden px-2">
                <Navigation />
                <MobileMenu />
            </div>

            {/* Desktop View */}
            <div className="hidden md:block border-b border-gray-300 max-w-6xl mx-auto px-1">
                <Navigation />
            </div>
        </header>
    );
}

export default Header;
