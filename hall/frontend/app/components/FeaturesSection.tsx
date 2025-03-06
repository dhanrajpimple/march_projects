import React from 'react';
import { Users, Car, Utensils, Music, Palette, Snowflake } from 'lucide-react';

const features = [
  {
    icon: <Users size={28} className="text-indigo-600" />,
    title: 'Capacity for 200+ Guests',
    description: 'Spacious hall that comfortably accommodates large gatherings while maintaining an intimate atmosphere.'
  },
  {
    icon: <Snowflake size={28} className="text-indigo-600" />,
    title: 'Air Conditioning',
    description: 'Climate-controlled environment ensuring comfort for your guests regardless of the season.'
  },
  {
    icon: <Car size={28} className="text-indigo-600" />,
    title: 'Ample Parking',
    description: 'Convenient parking facilities for all your guests with security monitoring.'
  },
  {
    icon: <Utensils size={28} className="text-indigo-600" />,
    title: 'Catering Services',
    description: 'Flexible catering options from our preferred partners or bring your own caterer.'
  },
  {
    icon: <Music size={28} className="text-indigo-600" />,
    title: 'Sound System & DJ',
    description: 'State-of-the-art sound system and optional professional DJ services for your event.'
  },
  {
    icon: <Palette size={28} className="text-indigo-600" />,
    title: 'Decoration Services',
    description: 'Customizable decoration packages to match your event theme and personal style.'
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-4 section-title">Hall Features</h2>
        <p className="text-lg mb-10 max-w-3xl mx-auto text-gray-600">
          Everything you need for a successful and memorable event. From ample space to premium amenities, we've got you covered.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white text-gray-900 p-6 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105"
            >
              <div className="mb-4 p-4 bg-indigo-100 rounded-full inline-block">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
