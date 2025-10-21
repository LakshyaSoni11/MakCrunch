import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Award, ShieldCheck, Globe } from "lucide-react";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 rounded-xl">
                <img
                  src="/src/public/assets/logo.png"
                  className="h-20"
                  alt="MakCrunch Logo"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">MakCrunch</h3>
                <p className="text-xs text-gray-400">Foods Private Limited</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Crafted with Care, Savored with Pride!
            </p>
            <div className="flex space-x-4">
              <Award className="w-6 h-6 text-emerald-500" />
              <ShieldCheck className="w-6 h-6 text-emerald-500" />
              <Globe className="w-6 h-6 text-emerald-500" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/health-benefits"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Product Grades
                </Link>
              </li>
              <li>
                <Link
                  to="/process"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Process
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Export Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Export Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Minimum Order: 1 Ton</li>
              <li>Payment: LC, TT, CAD</li>
              <li>Packaging: 25kg / 50kg Bags</li>
              <li>Lead Time: 7–15 Days</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>gaurav@makcrunch.com</li>
              <li>+91 94730 35151</li>
              <li>M/S MAKCRUNCH FOODS PRIVATED LIMITED
                BEHIND INDIAN PETROL PUMP MASTPURA,
                BODHGAYA, Gaya, Bihar-823001</li>
            </ul>
            <button
              onClick={() => navigate("/contact")}
              className="mt-6 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors"
            >
              Request Quote
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 RawMakha Export. All rights reserved. Premium Indian Raw
            Fox Nuts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
