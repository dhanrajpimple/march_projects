import React from 'react';
import { Link } from "@remix-run/react";
import { Calendar, MessageSquare } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative text-white">
      {/* Background Image with Darker Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-24 md:py-32">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
          Transform Your Ideas into Reality
        </h1>
        <p className="text-lg md:text-xl mt-4 max-w-2xl text-gray-300">
          AI-powered tools to automate, optimize, and elevate your business. 
          Get the best digital solutions for your needs.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link 
            to="/get-started" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg flex items-center space-x-2 shadow-lg transition"
          >
            <Calendar size={20} />
            <span>Get Started</span>
          </Link>
          <Link 
            to="/contact" 
            className="bg-white/20 hover:bg-white/30 text-white font-medium py-3 px-6 rounded-lg flex items-center space-x-2 backdrop-blur-md shadow-lg transition"
          >
            <MessageSquare size={20} />
            <span>Contact Us</span>
          </Link>
        </div>
      </div>

      {/* Wave Shape Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
