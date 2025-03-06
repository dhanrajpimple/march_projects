import React, { useState } from 'react';
import { Outlet, Link, useLocation } from "@remix-run/react";
import { Menu, X, ChevronDown, Facebook, Instagram, Twitter } from 'lucide-react';

const MainLayout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-blue-600">GrandHall</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`font-medium transition-colors duration-200 ${isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Home
              </Link>
              <Link 
                to="/hall" 
                className={`font-medium transition-colors duration-200 ${isActive('/hall') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Hall Details
              </Link>
              <Link 
                to="/availability" 
                className={`font-medium transition-colors duration-200 ${isActive('/availability') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Availability
              </Link>
              <Link 
                to="/contact" 
                className={`font-medium transition-colors duration-200 ${isActive('/contact') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
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
              className="md:hidden text-gray-700 focus:outline-none"
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
                  className={`font-medium px-4 py-2 rounded-md transition-colors duration-200 ${isActive('/') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/hall" 
                  className={`font-medium px-4 py-2 rounded-md transition-colors duration-200 ${isActive('/hall') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hall Details
                </Link>
                <Link 
                  to="/availability" 
                  className={`font-medium px-4 py-2 rounded-md transition-colors duration-200 ${isActive('/availability') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Availability
                </Link>
                <Link 
                  to="/contact" 
                  className={`font-medium px-4 py-2 rounded-md transition-colors duration-200 ${isActive('/contact') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
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

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">GrandHall</h3>
              <p className="text-gray-400 mb-4">
                The perfect venue for your special events, weddings, corporate meetings, and celebrations.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/hall" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Hall Details
                  </Link>
                </li>
                <li>
                  <Link to="/availability" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Check Availability
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>123 Event Street, City</li>
                <li>Phone: (123) 456-7890</li>
                <li>Email: info@grandhall.com</li>
                <li>Hours: 9:00 AM - 8:00 PM</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for updates and special offers.
              </p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 rounded-l-md focus:outline-none flex-grow text-gray-900"
                />
                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} GrandHall. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;