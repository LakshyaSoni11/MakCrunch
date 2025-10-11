import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HealthBenefits from './components/HealthBenefits';
import Ingredients from './components/Ingredients';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';

gsap.registerPlugin(ScrollTrigger);

type DivRef = React.RefObject<HTMLDivElement>;

interface HeaderRefs {
  heroRef?: DivRef;
  aboutRef?: DivRef;
  healthBenefitsRef?: DivRef;
  ingredientsRef?: DivRef;
  processRef?: DivRef;
  whyUsRef?: DivRef;
  ctaRef?: DivRef;
}

function App(): JSX.Element {
  const [showContactPage, setShowContactPage] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const healthBenefitsRef = useRef<HTMLDivElement>(null);
  const ingredientsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const whyUsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionRef: DivRef) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    setShowContactPage(true);
    setMobileMenuOpen(false);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setShowContactPage(false);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (showContactPage) {
    return <ContactPage onBackToHome={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-emerald-50 overflow-hidden">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
        handleContactClick={handleContactClick}
        refs={{
          heroRef,
          aboutRef,
          healthBenefitsRef,
          ingredientsRef,
          processRef,
          whyUsRef,
          ctaRef
        } as HeaderRefs}
      />

      <Hero
        ref={heroRef}
        onContactClick={handleContactClick}
        onViewGrades={() => scrollToSection(healthBenefitsRef)}
      />
      <About ref={aboutRef} onContactClick={handleContactClick} />
      <HealthBenefits ref={healthBenefitsRef} onContactClick={handleContactClick} />
      <Ingredients ref={ingredientsRef} onContactClick={handleContactClick} />
      <Process ref={processRef} />
      <WhyUs ref={whyUsRef} />
      <CTA ref={ctaRef} onContactClick={handleContactClick} onViewGrades={() => scrollToSection(healthBenefitsRef)} />
      <Footer
        scrollToSection={scrollToSection}
        handleContactClick={handleContactClick}
        refs={{
          aboutRef,
          healthBenefitsRef,
          ingredientsRef,
          processRef
        }}
      />
    </div>
  );
}

export default App;
