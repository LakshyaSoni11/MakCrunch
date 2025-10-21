import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Grades', path: '/health-benefits' }, // or /grades if you rename the page
    { name: 'Process', path: '/process' },
    { name: 'Why Us', path: '/why-us' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <div className="flex items-center space-x-1">
            <Link to="/">
              <img src="/src/public/assets/logo.png" className="h-12 w-auto" alt="FoxNut Exports Logo" />
            </Link>
             <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">
            MakCrunch
          </span>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-gray-700 font-medium transition-colors hover:text-emerald-600 ${
                  isActive(item.path) ? 'text-emerald-700 font-semibold' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link
              to="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl hover:from-emerald-700 hover:to-emerald-800 transition-all font-semibold shadow-lg hover:shadow-xl"
            >
              Get Quote
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE NAV */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3 animate-fadeIn">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-left text-gray-700 hover:text-emerald-600 font-medium transition-colors py-2 ${
                  isActive(item.path) ? 'text-emerald-700 font-semibold' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl hover:from-emerald-700 hover:to-emerald-800 transition-all font-semibold"
            >
              Get Quote
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
