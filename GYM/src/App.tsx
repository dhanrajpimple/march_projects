import React from 'react';
import { ChevronDown, Dumbbell, TrendingUp, Trophy } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MembershipTiers from './components/MembershipTiers';
import FacilityPreview from './components/FacilityPreview';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <div className="noise-bg fixed inset-0" />
      <Navbar />
      <main>
        <Hero />
        <MembershipTiers />
        <FacilityPreview />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;