import React, { forwardRef } from "react";
import { Leaf, Award, ShieldCheck, Globe } from 'lucide-react';

interface FooterProps {
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  handleContactClick: () => void;
  refs: {
    aboutRef: React.RefObject<HTMLElement>;
    gradesRef: React.RefObject<HTMLElement>;
    processRef: React.RefObject<HTMLElement>;
  };
}

const Footer = forwardRef<HTMLElement, FooterProps>(({ scrollToSection, handleContactClick, refs }, ref) => {
    return(<footer className="bg-gray-900 text-white py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-xl">
                  <img src="../../dist/assets/logo.png" className="h-20" alt="" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">MakCrunch</h3>
                  <p className="text-xs text-gray-400">Foods Private Limited</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Crafted with Care, Savored with pride!
              </p>
              <div className="flex space-x-4">
                <Award className="w-6 h-6 text-emerald-500" />
                <ShieldCheck className="w-6 h-6 text-emerald-500" />
                <Globe className="w-6 h-6 text-emerald-500" />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><button onClick={() => scrollToSection(refs.aboutRef)} className="text-gray-400 hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection(refs.gradesRef)} className="text-gray-400 hover:text-white transition-colors">Product Grades</button></li>
                <li><button onClick={() => scrollToSection(refs.processRef)} className="text-gray-400 hover:text-white transition-colors">Our Process</button></li>
                <li><button onClick={handleContactClick} className="text-gray-400 hover:text-white transition-colors">Get Quote</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Export Info</h4>
              <ul className="space-y-3 text-gray-400">
                <li>Minimum Order: 1 Ton</li>
                <li>Payment: LC, TT, CAD</li>
                <li>Packaging: 25kg/50kg Bags</li>
                <li>Lead Time: 7-15 Days</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li>export@rawmakha.com</li>
                <li>+91 (XXX) XXX-XXXX</li>
                <li>Bihar, India</li>
              </ul>
              <button
                onClick={handleContactClick}
                className="mt-6 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors"
              >
                Request Quote
              </button>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025 RawMakha Export. All rights reserved. Premium Indian Raw Fox Nuts.</p>
          </div>
        </div>
      </footer>
)})
export default Footer;