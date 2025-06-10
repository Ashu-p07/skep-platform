
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Courses from '@/components/Courses';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PeacockTransformation from '@/components/PeacockTransformation';

const Index = () => {
  return (
    <div className="min-h-screen">
      <PeacockTransformation />
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
