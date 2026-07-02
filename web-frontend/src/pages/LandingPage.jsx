import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Hero from '../components/Sections/Hero';
import TrustSection from '../components/Sections/TrustSection';
import Features from '../components/Sections/Features';
import HowItWorks from '../components/Sections/HowItWorks';
import CTASection from '../components/Sections/CTASection';
import Footer from '../components/Layout/Footer';
import FloatingElements from '../components/Common/FloatingElements';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <FloatingElements />
      <main>
        <Hero />
        <TrustSection />
        <Features />
        <HowItWorks />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;

