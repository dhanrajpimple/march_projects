import React from 'react';
import compbat from '../Assests/boxing.jpg'
const facilities = [
  {
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
    title: 'Weight Room'
  },
  {
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f',
    title: 'Cardio Zone'
  },
  {
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2',
    title: 'Recovery Suite'
  },
  {
    image: compbat,
    title: 'Combat Arena'
  }
];

const FacilityPreview = () => {
  return (
    <section className="py-20 px-4 bg-dark/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-heading font-bold text-center mb-16">
          The <span className="text-sigma-green">Arena</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {facilities.map((facility) => (
            <div
              key={facility.title}
              className="group relative overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={`${facility.image}?auto=format&fit=crop&w=800&q=80`}
                alt={facility.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl font-heading font-bold">{facility.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilityPreview;