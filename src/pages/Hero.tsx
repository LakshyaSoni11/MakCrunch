import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { Star, ArrowRight } from 'lucide-react';
import { stats, floatingImages } from '../data/constants';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const ctaRef = useRef(null);
  const floatingImagesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animations
      gsap.from('.header-logo', {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: 'power2.out',
      });

      gsap.from('.nav-item', {
        opacity: 0,
        y: -20,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.3,
        ease: 'power2.out',
      });

      // Hero content animations
      gsap.from('.hero-badge', {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        delay: 0.5,
        ease: 'back.out(1.7)',
      });

      gsap.from('.hero-title', {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.7,
        ease: 'power3.out',
      });

      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.9,
        ease: 'power3.out',
      });

      gsap.from('.hero-cta', {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        delay: 1.1,
        ease: 'back.out(1.7)',
      });

      // Floating images
      gsap.to('.floating-image-1', {
        y: -30,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.floating-image-2', {
        y: -40,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.5,
      });

      gsap.to('.floating-image-3', {
        y: -25,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1,
      });

      gsap.to('.floating-shape', {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'none',
      });

      // CTA glow effect
      if (ctaRef.current) {
        gsap.to(ctaRef.current, {
          boxShadow: '0 20px 60px rgba(16, 185, 129, 0.4)',
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      // Stats animation
      gsap.from('.about-stat', {
        opacity: 0,
        scale: 0.5,
        duration: 1.2,
        stagger: 0.15,
        delay: 1.3,
        ease: 'back.out(1.7)',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden pb-10">
      {/* Floating background shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* Floating images */}
      <div ref={floatingImagesRef} className="absolute inset-0 z-0 pointer-events-none bg-transparent">
        {floatingImages.map((img, index) => (
          <img
            key={index}
            src={img.src}
            onError={() => console.error(`Failed to load: ${img.src}`)}
            onLoad={() => console.log(`Loaded: ${img.src}`)}
            alt="Floating"
            className={img.className}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-6xl">
        <div className="hero-badge inline-flex items-center space-x-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full mb-8 shadow-xl border border-emerald-100">
          <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
          <span className="text-emerald-800 font-bold text-sm">
            India&apos;s #1 Raw Makhana Exporter
          </span>
        </div>

        <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-6 leading-tight">
          Premium Raw <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">
            Fox Nuts
          </span>
        </h1>

        <p className="hero-subtitle text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto font-medium">
          Direct from Bihar&apos;s finest lotus ponds. Bulk export of unprocessed Makhana
          for manufacturers, processors & retailers worldwide.
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            ref={ctaRef}
            onClick={() => navigate('/contact')}
            className="group px-10 py-5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white text-lg font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all inline-flex items-center space-x-3 hover:-translate-y-1"
          >
            <span>Request Bulk Quote</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="about-stat bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-emerald-100"
            >
              <div className="flex justify-center mb-3 text-emerald-600">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-black text-gray-900 mb-1">
                {stat.value}+
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
