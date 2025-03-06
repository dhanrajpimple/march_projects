import React from 'react';
import { Link } from "@remix-run/react"
import { Calendar, MessageSquare } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-[#4F46E5] text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Book Your Special Event?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Check our availability calendar or contact us directly to secure your preferred date.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/availability" 
              className="btn-primary bg-white text-blue-600 hover:bg-gray-100 flex items-center justify-center space-x-2"
            >
              <Calendar size={20} />
              <span>Check Availability</span>
            </Link>
            <Link 
              to="/contact" 
              className="btn-outline border-white text-white hover:bg-white/10 flex items-center justify-center space-x-2"
            >
              <MessageSquare size={20} />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;