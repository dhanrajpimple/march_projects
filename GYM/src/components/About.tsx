import React from 'react';
import hiit from '../Assests/hiit.jpg'
import { Dumbbell, Heart, Trophy } from 'lucide-react';

const trainers = [
  {
    name: 'Alex "The Beast" Rodriguez',
    role: 'Head Trainer',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80',
    specialty: 'Power Lifting'
  },
  {
    name: 'Sarah "Iron" Chen',
    role: 'Nutrition Expert',
    image: hiit,
    specialty: 'HIIT Training'
  },
  {
    name: 'Marcus "Flex" Johnson',
    role: 'Combat Trainer',
    image: 'https://images.pexels.com/photos/6295865/pexels-photo-6295865.jpeg?auto=compress&cs=tinysrgb&w=600',
    specialty: 'MMA & Boxing'
  }
];

const stats = [
  { label: 'Active Members', value: '2,500+' },
  { label: 'Equipment Pieces', value: '200+' },
  { label: 'Weekly Classes', value: '50+' }
];

const values = [
  {
    icon: Dumbbell,
    title: 'Strength First',
    description: 'Build your foundation with progressive overload and proper form'
  },
  {
    icon: Heart,
    title: 'Mental Toughness',
    description: 'Push beyond your limits and develop unbreakable discipline'
  },
  {
    icon: Trophy,
    title: 'Elite Results',
    description: 'Achieve your peak physical condition through dedicated training'
  }
];

const About = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-heading font-bold text-center mb-16">
          The <span className="text-sigma-green">Elite</span> Team
        </h2>

        {/* Trainers */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="group perspective"
            >
              <div className="relative h-96 transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                <div className="absolute inset-0">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60" />
                  {/* <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-heading font-bold">{trainer.name}</h3>
                    <p className="text-sigma-green">{trainer.role}</p>
                  </div> */}
                </div>
                <div className="absolute inset-0 bg-dark/90 rounded-lg p-6 transform rotate-y-180 backface-hidden border-2 border-sigma-green">
                  <div className="flex flex-col h-full justify-center items-center text-center">
                    <h3 className="text-xl font-heading font-bold mb-2">{trainer.name}</h3>
                    <p className="text-sigma-green mb-4">{trainer.role}</p>
                    <p className="text-gray-300">Specialty: {trainer.specialty}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold mb-2 text-sigma-green animate-neon-pulse">
                {stat.value}
              </div>
              <div className="text-xl font-heading relative inline-block">
                {stat.label}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sigma-green to-transparent" />
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="card-holographic p-8 rounded-lg text-center group hover:translate-y-[-10px]"
              >
                <Icon className="w-12 h-12 mx-auto mb-4 text-sigma-green" />
                <h3 className="text-xl font-heading font-bold mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;