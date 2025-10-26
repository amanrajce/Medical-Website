import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import FeaturedProduct from './pages/FeaturedProduct';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop'; // 👈 1. IMPORT THE COMPONENT

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* 👈 2. ADD THE COMPONENT HERE */}
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/featured-product" element={<FeaturedProduct />} />
            <Route path="/contact" element={<Contact />} />
            {/* 404 Not Found Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

// Simple 404 Component
const NotFound = () => {
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-teal-50">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-block bg-sky-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-sky-600 transition-colors"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default App;