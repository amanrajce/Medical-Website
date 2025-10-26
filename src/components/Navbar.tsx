import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ayulexLogo from '../assets/logo/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Solutions', path: '/services' },
    { name: 'Platform', path: '/featured-product' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" onClick={scrollToTop} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <img src={ayulexLogo} alt="Ayulex Logo" className="h-10 w-10" />
              <span className="text-xl font-bold text-gray-900">Ayulex</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={scrollToTop}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-[#3574FF] bg-[#3574FF]/10'
                    : 'text-gray-700 hover:text-[#3574FF] hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={scrollToTop}
              className="ml-4 bg-[#3574FF] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#2d5fd6] transition-all duration-200 transform hover:scale-105"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#3574FF] focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'text-[#3574FF] bg-[#3574FF]/10'
                      : 'text-gray-700 hover:text-[#3574FF] hover:bg-gray-50'
                  }`}
                  onClick={scrollToTop}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block w-full text-center bg-[#3574FF] text-white px-4 py-3 rounded-lg text-base font-medium hover:bg-[#2d5fd6] transition-all duration-200 mt-2"
                onClick={scrollToTop}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;