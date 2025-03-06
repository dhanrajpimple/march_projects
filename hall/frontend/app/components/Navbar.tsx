import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "@remix-run/react";
import { Menu, X, ChevronDown,  Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 20) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const isActive = (path: string) => {
      return location.pathname === path;
    };
  
    return (
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-white'
      }`}>
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 group">
              <Sparkles className="text-purple-500 group-hover:text-pink-500 transition-colors duration-300" size={28} />
              <span className="text-2xl font-bold gradient-text">GrandHall</span>
            </Link>
  
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`font-medium transition-all duration-300 hover:text-purple-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-purple-500 after:transition-all after:duration-300 ${
                  isActive('/') ? 'text-purple-500 after:w-full' : 'text-gray-700'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/hall" 
                className={`font-medium transition-all duration-300 hover:text-purple-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-purple-500 after:transition-all after:duration-300 ${
                  isActive('/hall') ? 'text-purple-500 after:w-full' : 'text-gray-700'
                }`}
              >
                Hall Details
              </Link>
              <Link 
                to="/availability" 
                className={`font-medium transition-all duration-300 hover:text-purple-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-purple-500 after:transition-all after:duration-300 ${
                  isActive('/availability') ? 'text-purple-500 after:w-full' : 'text-gray-700'
                }`}
              >
                Availability
              </Link>
              <Link 
                to="/contact" 
                className={`font-medium transition-all duration-300 hover:text-purple-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-purple-500 after:transition-all after:duration-300 ${
                  isActive('/contact') ? 'text-purple-500 after:w-full' : 'text-gray-700'
                }`}
              >
                Contact
              </Link>
              <Link 
                to="/contact" 
                className="btn-primary"
              >
                Book Now
              </Link>
            </nav>
  
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 hover:text-purple-500 transition-colors duration-300 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
  
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 bg-white">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className={`font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive('/') ? 'bg-purple-100 text-purple-600' : 'text-gray-700 hover:bg-purple-50 hover:text-purple-500'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/hall" 
                  className={`font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive('/hall') ? 'bg-purple-100 text-purple-600' : 'text-gray-700 hover:bg-purple-50 hover:text-purple-500'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hall Details
                </Link>
                <Link 
                  to="/availability" 
                  className={`font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive('/availability') ? 'bg-purple-100 text-purple-600' : 'text-gray-700 hover:bg-purple-50 hover:text-purple-500'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Availability
                </Link>
                <Link 
                  to="/contact" 
                  className={`font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive('/contact') ? 'bg-purple-100 text-purple-600' : 'text-gray-700 hover:bg-purple-50 hover:text-purple-500'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link 
                  to="/contact" 
                  className="btn-primary mx-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Now
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>
    );
  };
export default Navbar;