import React, { forwardRef } from "react";
import { ArrowRight, ChevronRight } from 'lucide-react';
interface CTAProps {
  statsRef: React.RefObject<HTMLElement>;
  handleContactClick: () => void;
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  gradesRef: React.RefObject<HTMLElement>;
}

const CTA = forwardRef<HTMLElement, CTAProps>(({ statsRef, handleContactClick, scrollToSection, gradesRef }, ref) => {
    return(<section ref={statsRef} className="py-24 px-6 bg-white">
            <div className="container mx-auto max-w-7xl">
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
                </div>
    
                <div className="relative z-10 text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Ready to Import Premium Raw Makhana?</h2>
                  <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
                    Join 200+ satisfied B2B clients worldwide. Get your custom quote in 24 hours.
                  </p>
                </div>
    
                <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6">
                  <button
                    onClick={handleContactClick}
                    className="group px-12 py-6 bg-white text-emerald-700 text-lg font-black rounded-2xl shadow-2xl hover:shadow-3xl transition-all inline-flex items-center space-x-3 hover:-translate-y-1"
                  >
                    <span>Get Bulk Quote Now</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </button>
                  <button
                    onClick={() => scrollToSection(gradesRef)}
                    className="px-12 py-6 bg-emerald-900 text-white text-lg font-black rounded-2xl shadow-2xl hover:shadow-3xl transition-all inline-flex items-center space-x-3 hover:-translate-y-1 border-2 border-white/30"
                  >
                    <span>Compare Grades</span>
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </section>
)})
export default CTA;