import React, { forwardRef, useEffect, Ref } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { healthBenefits } from '../data/constants';
gsap.registerPlugin(ScrollTrigger);

interface HealthBenefitsProps {
  onContactClick?: () => void;
}



const HealthBenefits = forwardRef<HTMLDivElement, HealthBenefitsProps>(function HealthBenefits(
  { onContactClick },
  ref: Ref<HTMLDivElement>
) {
  useEffect(() => {
    const el = (ref as React.RefObject<HTMLDivElement>)?.current ?? undefined;

    const ctx = gsap.context(() => {
      // Title animation
      gsap.from('.health-title', {
        scrollTrigger: {
          trigger: el,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Benefit cards stagger animation
      gsap.from('.benefit-card', {
        scrollTrigger: {
          trigger: el,
          start: 'top 65%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 60,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.2)',
      });

      // Icon rotation on scroll
      gsap.from('.benefit-icon', {
        scrollTrigger: {
          trigger: el,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
        rotation: -180,
        scale: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'elastic.out(1, 0.5)',
      });

      // CTA section animation
      gsap.from('.health-cta', {
        scrollTrigger: {
          trigger: '.health-cta',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
      });
    },[]);

    return () => ctx.revert();
  }, [ref]);

  return (
    <section
      ref={ref}
      className="py-24 bg-transparent relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 health-title">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full mb-6">
            <span className="text-emerald-800 font-bold text-sm">HEALTH & WELLNESS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Health Benefits of Makhana
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nature's superfood packed with nutrients that support your overall well-being
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {healthBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="benefit-card bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-emerald-200 group"
              >
                <div className={`benefit-icon w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to action section */}
        <div className="health-cta bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-soft-light opacity-10 -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-900 rounded-full mix-blend-multiply opacity-20 -ml-48 -mb-48"></div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Premium Quality for Maximum Benefits
            </h3>
            <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
              Our raw makhana preserves all natural nutrients, ensuring you get the full health benefits in every batch
            </p>
            {onContactClick && (
              <button
                onClick={onContactClick}
                className="px-8 py-4 bg-white text-emerald-700 font-bold rounded-xl hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform duration-300"
              >
                Get Premium Makhana
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});

HealthBenefits.displayName = 'HealthBenefits';

export default HealthBenefits;
