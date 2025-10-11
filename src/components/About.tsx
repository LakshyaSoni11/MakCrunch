import React, { forwardRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ShieldCheck } from 'lucide-react';
// import { aboutStats } from '../data/constants';
import { aboutStats } from '../data/constants';

gsap.registerPlugin(ScrollTrigger);

interface AboutProps {
  onContactClick: () => void;
}

const About = forwardRef<HTMLDivElement, AboutProps>(({ onContactClick }, ref) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.from('.about-image', {
        opacity: 0,
        x: 80,
        duration: 1.2,
        ease: 'power3.out',
      });

      // 2️⃣ Text line by line
      tl.from(
        ['.about-content h2, .about-content p'],
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.3, // line by line effect
          ease: 'power3.out',
        },
        '-=1' // slightly overlap with image animation
      );
      tl.from('.about-stats > dix', {
        opacity: 0,
        y: 18,
        scale: 0.98,
        duration: 0.45,
        stagger: 0.18,
        ease: 'power3.out',
      });
        // tl.from('.about-content > .grid > div', {
        //   opacity: 0,
        //   y: 20,
        //   scale: 0.95,
        //   stagger: 0.2,
        //   duration: 0.5,
        //   ease: 'power3.out',
        // })

      // 4️⃣ Button animation
      tl.from('.about-content button', {
        opacity: 0.9,
        y: 20,
        duration: 0.5,
        ease: 'bounce.inOut',
      });
    });

    return () => ctx.revert();
  }, [ref]);


  return (
    <section ref={ref} className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-50 to-transparent opacity-50"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="about-content">
            <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full mb-6">
              <span className="text-emerald-800 font-bold text-sm">ABOUT US</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Raw Material Experts Since 2010
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We are a vertically integrated raw Makhana supplier based in Bihar, India. With direct farm partnerships across the Mithila region, we ensure consistent quality and competitive pricing for bulk buyers.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our state-of-the-art sorting facility processes over 500 tons monthly, serving manufacturers, food processors, and distributors in 25+ countries. From procurement to export documentation, we handle everything.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8 about-stats">
              {aboutStats.map((stat, index) => (
                <div key={index} className={`p-6 ${index === 0 ? 'bg-emerald-50' : 'bg-amber-50'} rounded-2xl`}>
                  {stat.icon}
                  <h4 className="font-bold text-gray-900 mb-2">{stat.title}</h4>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </div>
              ))}
            </div>

            <button
              onClick={onContactClick}
              className="px-8 border-2 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
            >
              <span className='text-white'>Partner With Us</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="about-image relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://t3.ftcdn.net/jpg/06/22/51/44/360_F_622514476_rlzQ9zBCs5WY6pduqAhHe31q9bkaGdbE.jpg"
                alt="Raw Makhana Quality"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-emerald-100 rounded-xl">
                      <ShieldCheck className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Quality Guaranteed</h4>
                      <p className="text-sm text-gray-600">100% Natural & Lab Tested</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-48 h-48 bg-amber-200 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-emerald-200 rounded-full opacity-30 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;