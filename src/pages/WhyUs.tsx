import React, { forwardRef } from "react"
import { TrendingUp, ShieldCheck, Package, Globe, Truck, BarChart3 } from 'lucide-react'

interface WhyUsProps {}

const WhyUs = forwardRef<HTMLDivElement, WhyUsProps>(({}, ref) => {
    return(<section ref={ref} className="py-24 px-6 bg-gradient-to-br from-emerald-900 to-emerald-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-white font-bold text-sm">WHY CHOOSE US</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Your Trusted Export Partner</h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Reliable supply, competitive pricing, and hassle-free export documentation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: 'Competitive Pricing',
                description: 'Direct farm sourcing eliminates middlemen, passing savings to you'
              },
              {
                icon: <ShieldCheck className="w-12 h-12" />,
                title: 'Quality Assurance',
                description: 'Lab tested for purity, moisture content, and contaminants'
              },
              {
                icon: <Package className="w-12 h-12" />,
                title: 'Custom Packaging',
                description: 'Bulk bags, vacuum packs, or your branded packaging requirements'
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: 'Export Documentation',
                description: 'Complete paperwork: COO, phytosanitary, fumigation certificates'
              },
              {
                icon: <Truck className="w-12 h-12" />,
                title: 'Reliable Logistics',
                description: 'FOB, CIF, or door delivery. Container and LCL both available'
              },
              {
                icon: <BarChart3 className="w-12 h-12" />,
                title: 'Year-Round Supply',
                description: 'Large inventory ensures consistent availability throughout the year'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="feature-card group bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all border-2 border-white/20 hover:border-white/40"
              >
                <div className="text-emerald-300 mb-6 transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-emerald-100 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  });

WhyUs.displayName = 'WhyUs';

export default WhyUs;
