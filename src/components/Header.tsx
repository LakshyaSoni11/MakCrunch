import React from 'react';
import { Leaf, Menu, X } from 'lucide-react';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  handleContactClick: () => void;
  refs: {
    heroRef: React.RefObject<HTMLElement>;
    aboutRef: React.RefObject<HTMLElement>;
    gradesRef: React.RefObject<HTMLElement>;
    processRef: React.RefObject<HTMLElement>;
  };
}

function Header({ mobileMenuOpen, setMobileMenuOpen, scrollToSection, handleContactClick, refs }: HeaderProps) {
  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 header-logo">
            <div>
             <img src="../../dist/assets/logo.png" className='h-10 w-18' alt="" />
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection(refs.heroRef)} className="nav-item text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection(refs.aboutRef)} className="nav-item text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection(refs.gradesRef)} className="nav-item text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              Grades
            </button>
            <button onClick={() => scrollToSection(refs.processRef)} className="nav-item text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              Process
            </button>
            <button
              onClick={handleContactClick}
              className="nav-item px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl hover:from-emerald-700 hover:to-emerald-800 transition-all font-semibold shadow-lg hover:shadow-xl"
            >
              Get Quote
            </button>
          </nav>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-700">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3 animate-fadeIn">
            <button onClick={() => scrollToSection(refs.heroRef)} className="block w-full text-left text-gray-700 hover:text-emerald-600 font-medium transition-colors py-2">
              Home
            </button>
            <button onClick={() => scrollToSection(refs.aboutRef)} className="block w-full text-left text-gray-700 hover:text-emerald-600 font-medium transition-colors py-2">
              About
            </button>
            <button onClick={() => scrollToSection(refs.gradesRef)} className="block w-full text-left text-gray-700 hover:text-emerald-600 font-medium transition-colors py-2">
              Grades
            </button>
            <button onClick={() => scrollToSection(refs.processRef)} className="block w-full text-left text-gray-700 hover:text-emerald-600 font-medium transition-colors py-2">
              Process
            </button>
            <button
              onClick={handleContactClick}
              className="block w-full text-left px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl hover:from-emerald-700 hover:to-emerald-800 transition-all font-semibold"
            >
              Get Quote
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;