import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
      <div className="mesh-gradient" />
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 animate-neon-pulse">
          GET SHREDDED
          <br />
          OR GET OUT
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Welcome to IronHustle - where legends are forged and limits are shattered.
          Join the elite. Embrace the grind.
        </p>
        <button className="neon-button text-lg">
          Start Free Trial
        </button>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="w-8 h-8 text-sigma-green animate-bounce-slow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;