import React, { forwardRef, useRef } from "react";
import { TrendingUp, ShieldCheck, Package, Globe, Truck, BarChart3, Factory, Award, FileCheck, Briefcase } from 'lucide-react';
import { aboutStats } from "../data/constants";

interface WhyUsProps { }

const WhyUs = forwardRef<HTMLDivElement, WhyUsProps>(({ }, ref) => {
  const statsRef = useRef<HTMLDivElement>(null);
  const iconMap: Record<string, React.ComponentType<{ className: string }>> = {
    Factory,
    ShieldCheck,
    Award,
    FileCheck,
    Briefcase,
    Globe,
  };

  return (
    <section
      ref={ref}
      className="py-24 px-6 bg-gradient-to-br from-emerald-50 via-emerald-100 to-emerald-200 relative overflow-hidden"
    >
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(16,185,129,0.2) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-emerald-200/60 backdrop-blur-sm rounded-full mb-6">
            <span className="text-emerald-900 font-semibold text-sm tracking-wider">
              WHY CHOOSE US
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-emerald-800 mb-6">
            Your Trusted Export Partner
          </h2>
          <p className="text-lg md:text-xl text-emerald-700 max-w-3xl mx-auto leading-relaxed">
            Reliable supply, competitive pricing, and hassle-free export documentation
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <TrendingUp className="w-12 h-12" />,
              title: "Competitive Pricing",
              description:
                "Direct farm sourcing eliminates middlemen, passing savings to you",
            },
            {
              icon: <ShieldCheck className="w-12 h-12" />,
              title: "Quality Assurance",
              description:
                "Lab tested for purity, moisture content, and contaminants",
            },
            {
              icon: <Package className="w-12 h-12" />,
              title: "Custom Packaging",
              description:
                "Bulk bags, vacuum packs, or your branded packaging requirements",
            },
            {
              icon: <Globe className="w-12 h-12" />,
              title: "Export Documentation",
              description:
                "Complete paperwork: COO, phytosanitary, fumigation certificates",
            },
            {
              icon: <Truck className="w-12 h-12" />,
              title: "Reliable Logistics",
              description:
                "FOB, CIF, or door delivery. Container and LCL both available",
            },
            {
              icon: <BarChart3 className="w-12 h-12" />,
              title: "Year-Round Supply",
              description:
                "Large inventory ensures consistent availability throughout the year",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="feature-card group bg-white/80 backdrop-blur-lg rounded-3xl p-8 hover:bg-white transition-all border border-emerald-200 hover:shadow-lg hover:shadow-emerald-200/50"
            >
              <div className="text-emerald-600 mb-6 transform group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-emerald-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-emerald-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-5xl text-center py-10 font-bold text-emerald-800 mt-20">Internationally Certified for Quality & Trust</h2>
      <div
        ref={statsRef}
        className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {aboutStats.map((stat, index) => {
          const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
          const iconColor = index % 2 === 0 ? 'text-emerald-600' : 'text-amber-600';
          const bgColor = index % 2 === 0 ? 'bg-emerald-50' : 'bg-emerald-100';

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
    </section>
  );
});

WhyUs.displayName = "WhyUs";

export default WhyUs;
