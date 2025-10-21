import React, { useEffect, useRef } from 'react';
import { ArrowRight, ShieldCheck, Factory, Award, FileCheck, Briefcase, Globe } from 'lucide-react';
import { aboutStats } from '../data/constants';
import { TypeAnimation } from 'react-type-animation';
import { TimelineComp } from '../components/TimelineComp';

interface AboutProps {
  onContactClick?: () => void;
}

const About: React.FC<AboutProps> = ({ onContactClick }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphsRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const iconMap: Record<string, React.ComponentType<{ className: string }>> = {
    Factory,
    ShieldCheck,
    Award,
    FileCheck,
    Briefcase,
    Globe,
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const handlePartnerClick = () => {
    if (onContactClick) {
      onContactClick();
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-28 px-6 bg-gradient-to-b from-white to-emerald-50 relative overflow-hidden"
    >
      <style>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .animate-fade-left {
          opacity: 0;
          transform: translateX(60px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-fade-left.animate-in {
          opacity: 1;
          transform: translateX(0);
        }
        
        .stat-card {
          transition: all 0.13 cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .stat-card:hover {
          transform: translateY(-8px) scale(1.02);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        .pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
        
        .image-overlay {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .group:hover .image-overlay {
          transform: scale(1.05);
        }
        
        .badge-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <div className="absolute top-0 right-0 w-2/5 h-full bg-gradient-to-l from-emerald-100/40 to-transparent blur-3xl opacity-40 pointer-events-none pulse-glow" />
      <div className="absolute -bottom-10 left-0 w-72 h-72 bg-amber-200 rounded-full blur-3xl opacity-20 pointer-events-none pulse-glow" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={contentRef}>
            <div
              ref={badgeRef}
              className="inline-block px-5 py-2 bg-emerald-100 rounded-full mb-6 shadow-sm animate-on-scroll badge-float"
              style={{ transitionDelay: '0ms' }}
            >
              <span className="text-emerald-800 font-semibold text-sm tracking-wider">ABOUT US</span>
            </div>

            <h2
              ref={headingRef}
              className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight animate-on-scroll"
              style={{ transitionDelay: '100ms' }}
            >
              Nurturing India's Finest <span className="text-emerald-600">Fox Nuts</span> for the World
            </h2>

            <p
              ref={el => paragraphsRef.current[0] = el}
              className="text-lg text-gray-700 mb-5 leading-relaxed animate-on-scroll"
              style={{ transitionDelay: '200ms' }}
            >
              At <span className="font-semibold text-gray-900">MakCrunch</span>, we bring the authentic taste of Bihar's heritage to global markets.
              Based in <span className="font-semibold">Gaya, India</span>, we source, process, and export premium <span className="text-emerald-700 font-semibold">Fox Nuts (Makhana)</span> from the wetlands of Eastern India.
            </p>

            <p
              ref={el => paragraphsRef.current[1] = el}
              className="text-lg text-gray-700 mb-5 leading-relaxed animate-on-scroll"
              style={{ transitionDelay: '300ms' }}
            >
              Our ISO-certified processing unit combines traditional techniques with advanced sorting and packaging systems to ensure purity,
              crunch, and shelf stability that meet international standards.
            </p>

            <p
              ref={el => paragraphsRef.current[2] = el}
              className="text-lg text-gray-700 mb-8 leading-relaxed animate-on-scroll"
              style={{ transitionDelay: '400ms' }}
            >
              With <span className="font-semibold">FSSAI</span>, <span className="font-semibold">APEDA</span>, and government lab certifications, every export batch is fully traceable and tested for food safety — giving our global partners complete confidence.
            </p>

            <button
              ref={buttonRef}
              onClick={handlePartnerClick}
              className="px-8 py-4 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 hover:shadow-2xl transition-all duration-300 shadow-lg inline-flex items-center space-x-2 group animate-on-scroll"
              style={{ transitionDelay: '500ms' }}
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          <div
            ref={imageRef}
            className="relative animate-fade-left animate-on-scroll"
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group float-animation">
              <img
                src="https://img.freepik.com/premium-photo/makhana-fox-nuts-are-popular-snack-made-from-seeds-water-lily-plant-which-native-to-india_1029474-12319.jpg"
                alt="Premium Fox Nuts - Raw Makhana"
                className="w-full h-[520px] md:h-[600px] object-cover image-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-8 left-8 right-8 transform transition-all duration-500 group-hover:bottom-10">
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-lg border border-emerald-100">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-emerald-100 rounded-xl transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <ShieldCheck className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Quality Guaranteed</h4>
                      <p className="text-sm text-gray-600">Certified • Lab Tested • Export Ready</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-300 rounded-full opacity-30 blur-3xl pointer-events-none pulse-glow" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-300 rounded-full opacity-30 blur-3xl pointer-events-none pulse-glow" />
          </div>
        </div>
        <div className='flex items-center text-center justify-center text-emerald-600 text-3xl mt-20'>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              '500+ Tons Processed Annually',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              '15+ Countries Served',
              1000,
              '98% Customer Retention Rate',
              1000,
              '24/7 Customer Support',
              1000,
              '10,000+ Sq Ft Processing Facility',
              1000,
              '100% Quality Assurance',
              1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-40">
          <div ref={contentRef}>
            <div
              ref={badgeRef}
              className="inline-block px-5 py-2 bg-emerald-100 rounded-full mb-6 shadow-sm animate-on-scroll badge-float"
              style={{ transitionDelay: '0ms' }}
            >
              <span className="text-emerald-800 font-semibold text-sm tracking-wider">Our Founders</span>
            </div>

            <h2
              ref={headingRef}
              className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight animate-on-scroll"
              style={{ transitionDelay: '100ms' }}
            >
              Gaurav <span className="text-emerald-600">Kumar</span> </h2>

            <p
              ref={el => paragraphsRef.current[0] = el}
              className="text-lg text-gray-700 mb-5 leading-relaxed animate-on-scroll"
              style={{ transitionDelay: '200ms' }}
            >
              At <span className="font-semibold text-gray-900">MakCrunch</span>, we bring the authentic taste of Bihar's heritage to global markets.
              Based in <span className="font-semibold">Gaya, India</span>, we source, process, and export premium <span className="text-emerald-700 font-semibold">Fox Nuts (Makhana)</span> from the wetlands of Eastern India.
            </p>

            <p
              ref={el => paragraphsRef.current[1] = el}
              className="text-lg text-gray-700 mb-5 leading-relaxed animate-on-scroll"
              style={{ transitionDelay: '300ms' }}
            >
              Our ISO-certified processing unit combines traditional techniques with advanced sorting and packaging systems to ensure purity,
              crunch, and shelf stability that meet international standards.
            </p>

            <p
              ref={el => paragraphsRef.current[2] = el}
              className="text-lg text-gray-700 mb-8 leading-relaxed animate-on-scroll"
              style={{ transitionDelay: '400ms' }}
            >
              With <span className="font-semibold">FSSAI</span>, <span className="font-semibold">APEDA</span>, and government lab certifications, every export batch is fully traceable and tested for food safety — giving our global partners complete confidence.
            </p>

            <button
              ref={buttonRef}
              onClick={handlePartnerClick}
              className="px-8 py-4 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 hover:shadow-2xl transition-all duration-300 shadow-lg inline-flex items-center space-x-2 group animate-on-scroll"
              style={{ transitionDelay: '500ms' }}
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          <div
            ref={imageRef}
            className="relative animate-fade-left animate-on-scroll"
            style={{ transitionDelay: '200ms' }}
          >
            <div className=" overflow-hidden shadow-2xl rounded-full group float-animation">
              <img
                src="https://img.freepik.com/premium-photo/makhana-fox-nuts-are-popular-snack-made-from-seeds-water-lily-plant-which-native-to-india_1029474-12319.jpg"
                alt="Premium Fox Nuts - Raw Makhana"
                className="w-full h-[520px] md:h-[600px] object-cover image-overlay"
              />
            </div>

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-300 rounded-full opacity-30 blur-3xl pointer-events-none pulse-glow" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-300 rounded-full opacity-30 blur-3xl pointer-events-none pulse-glow" />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">
          <div ref={contentRef}>

            <h2
              ref={headingRef}
              className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight animate-on-scroll"
              style={{ transitionDelay: '100ms' }}
            >
              Gaurav <span className="text-emerald-600">Kumar</span> </h2>

            <p
              ref={el => paragraphsRef.current[0] = el}
              className="text-lg text-gray-700 mb-5 leading-relaxed animate-on-scroll"
              style={{ transitionDelay: '200ms' }}
            >
              At <span className="font-semibold text-gray-900">MakCrunch</span>, we bring the authentic taste of Bihar's heritage to global markets.
              Based in <span className="font-semibold">Gaya, India</span>, we source, process, and export premium <span className="text-emerald-700 font-semibold">Fox Nuts (Makhana)</span> from the wetlands of Eastern India.
            </p>

            <p
              ref={el => paragraphsRef.current[1] = el}
              className="text-lg text-gray-700 mb-5 leading-relaxed animate-on-scroll"
              style={{ transitionDelay: '300ms' }}
            >
              Our ISO-certified processing unit combines traditional techniques with advanced sorting and packaging systems to ensure purity,
              crunch, and shelf stability that meet international standards.
            </p>

            <p
              ref={el => paragraphsRef.current[2] = el}
              className="text-lg text-gray-700 mb-8 leading-relaxed animate-on-scroll"
              style={{ transitionDelay: '400ms' }}
            >
              With <span className="font-semibold">FSSAI</span>, <span className="font-semibold">APEDA</span>, and government lab certifications, every export batch is fully traceable and tested for food safety — giving our global partners complete confidence.
            </p>

            <button
              ref={buttonRef}
              onClick={handlePartnerClick}
              className="px-8 py-4 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 hover:shadow-2xl transition-all duration-300 shadow-lg inline-flex items-center space-x-2 group animate-on-scroll"
              style={{ transitionDelay: '500ms' }}
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          <div
            ref={imageRef}
            className="relative animate-fade-left animate-on-scroll"
            style={{ transitionDelay: '200ms' }}
          >
            <div className=" overflow-hidden shadow-2xl rounded-full group float-animation">
              <img
                src="https://img.freepik.com/premium-photo/makhana-fox-nuts-are-popular-snack-made-from-seeds-water-lily-plant-which-native-to-india_1029474-12319.jpg"
                alt="Premium Fox Nuts - Raw Makhana"
                className="w-full h-[520px] md:h-[600px] object-cover image-overlay"
              />
            </div>

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-300 rounded-full opacity-30 blur-3xl pointer-events-none pulse-glow" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-300 rounded-full opacity-30 blur-3xl pointer-events-none pulse-glow" />
          </div>
        </div>
            <div className='bg-emerald-50'>
              <TimelineComp />
            </div>
        <div>

        </div>


        <div
          ref={statsRef}
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {aboutStats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
            const iconColor = index % 2 === 0 ? 'text-emerald-600' : 'text-amber-600';
            const bgColor = index % 2 === 0 ? 'bg-emerald-50' : 'bg-amber-50';

            return (
              <div
                key={index}
                className={`stat-card p-6 rounded-2xl shadow-md hover:shadow-2xl ${bgColor} animate-on-scroll`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="mb-2 transform transition-transform duration-300 hover:scale-110 hover:rotate-6 inline-block">
                  {IconComponent && <IconComponent className={`w-10 h-10 mb-3 ${iconColor}`} />}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-lg">{stat.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;