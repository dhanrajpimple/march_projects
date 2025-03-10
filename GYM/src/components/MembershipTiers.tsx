import React from 'react';
import { Zap, Crown, Flame } from 'lucide-react';

const tiers = [
  {
    name: 'SIGMA',
    price: '29',
    icon: Zap,
    features: ['24/7 Gym Access', 'Basic Equipment', 'Locker Room Access'],
    color: 'cyber-blue'
  },
  {
    name: 'ALPHA',
    price: '49',
    icon: Crown,
    features: ['All Sigma Features', 'Personal Training', 'Nutrition Plan'],
    color: 'sigma-green'
  },
  {
    name: 'BEAST',
    price: '99',
    icon: Flame,
    features: ['All Alpha Features', 'Private Coaching', 'Recovery Suite'],
    color: 'neon-pink'
  }
];

const MembershipTiers = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-heading font-bold text-center mb-16">
          Choose Your <span className="text-sigma-green">Path</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.name}
                className="card-holographic p-8 rounded-lg"
              >
                <div className={`text-${tier.color} mb-4`}>
                  <Icon className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-2">{tier.name}</h3>
                <div className="text-4xl font-bold mb-6">
                  ${tier.price}
                  <span className="text-gray-400 text-lg">/mo</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <span className="mr-2">→</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="neon-button w-full">
                  Select Plan
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MembershipTiers;