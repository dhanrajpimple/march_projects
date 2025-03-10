import React from 'react';
import { Dumbbell, ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark/80 border-t border-sigma-green/20 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Dumbbell className="h-8 w-8 text-sigma-green" />
              <span className="ml-2 text-xl font-heading font-bold">IRONHUSTLE</span>
            </div>
            <p className="text-gray-400">
              Where legends are forged and limits are shattered.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-sigma-green">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-sigma-green">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-sigma-green">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-sigma-green">Personal Training</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sigma-green">Group Classes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sigma-green">Nutrition</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 24/7</li>
              <li>Saturday: 24/7</li>
              <li>Sunday: 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sigma-green/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} IronHustle. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full border-2 border-sigma-green text-sigma-green hover:bg-sigma-green/10 transition-colors"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;