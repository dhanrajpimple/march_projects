import React, { useState } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-dark/80 backdrop-blur-lg border-b border-sigma-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Dumbbell className="h-8 w-8 text-sigma-green" />
            <span className="ml-2 text-xl font-heading font-bold text-white">IRONHUSTLE</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-white hover:text-sigma-green px-3 py-2 font-medium">Home</a>
              <a href="#about" className="text-gray-300 hover:text-sigma-green px-3 py-2 font-medium">About</a>
              <a href="#contact" className="text-gray-300 hover:text-sigma-green px-3 py-2 font-medium">Contact</a>
              <button className="neon-button ml-4">Join Now</button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark/95 backdrop-blur-lg">
            <a href="#" className="text-white block px-3 py-2 font-medium">Home</a>
            <a href="#about" className="text-gray-300 block px-3 py-2 font-medium">About</a>
            <a href="#contact" className="text-gray-300 block px-3 py-2 font-medium">Contact</a>
            <button className="neon-button w-full mt-4">Join Now</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;