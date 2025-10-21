import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Hero';
import About from './pages/About';
import HealthBenefits from './pages/HealthBenefits';
import Ingredients from './pages/Ingredients';
import Process from './pages/Process';
import WhyUs from './pages/WhyUs';
import Contact from './pages/ContactPage';
// import NotFound from './pages/NotFound'; // You can enable this later if needed

function App(): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-stone-50 via-amber-50 to-emerald-50">
        {/* Header */}
        <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

        {/* Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/health-benefits" element={<HealthBenefits />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/process" element={<Process />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
