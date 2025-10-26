import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Award, Shield, Heart } from 'lucide-react';
import ayulexLogo from '../assets/logo/logo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" onClick={scrollToTop} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <img 
                src={ayulexLogo} 
                alt="Ayulex Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold">Ayulex</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Bridging India's healthcare divide with AI powered diagnostic support, unified health records, 
              and intelligent hospital management for every Indian.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Award className="h-4 w-4 text-yellow-400" />
              <span className="text-gray-400">SIH 2025 Finalist</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" onClick={scrollToTop} className="block text-gray-400 hover:text-sky-400 transition-colors">Home</Link>
              <Link to="/about" onClick={scrollToTop} className="block text-gray-400 hover:text-sky-400 transition-colors">About Us</Link>
              <Link to="/services" onClick={scrollToTop} className="block text-gray-400 hover:text-sky-400 transition-colors">Our Solutions</Link>
              <Link to="/featured-product" onClick={scrollToTop} className="block text-gray-400 hover:text-sky-400 transition-colors">Ayulex Platform</Link>
              <Link to="/contact" onClick={scrollToTop} className="block text-gray-400 hover:text-sky-400 transition-colors">Contact</Link>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Solutions</h3>
            <div className="space-y-2 text-gray-400">
              <Link to="/services#offline-ai-diagnostics" onClick={scrollToTop} className="block hover:text-sky-400 transition-colors">Offline AI Diagnostics</Link>
              <Link to="/services#abha-health-records" onClick={scrollToTop} className="block hover:text-sky-400 transition-colors">ABHA Health Records</Link>
              <Link to="/services#hospital-management" onClick={scrollToTop} className="block hover:text-sky-400 transition-colors">Hospital Management</Link>
              <Link to="/services#telemedicine-platform" onClick={scrollToTop} className="block hover:text-sky-400 transition-colors">Telemedicine Platform</Link>
              <Link to="/services#clinical-decision-support" onClick={scrollToTop} className="block hover:text-sky-400 transition-colors">Clinical Decision Support</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3 text-gray-400">
              <a 
                href="mailto:ayulexteam@gmail.com" 
                className="flex items-start space-x-2 hover:text-sky-400 transition-colors"
              >
                <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>ayulexteam@gmail.com</span>
              </a>
              <a 
                href="tel:+916202792298" 
                className="flex items-start space-x-2 hover:text-sky-400 transition-colors"
              >
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>+91 6202792298</span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Mizoram+University+Aizawl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-2 hover:text-sky-400 transition-colors"
              >
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Dept. of Computer Engineering, Mizoram University, Aizawl</span>
              </a>
            </div>
          </div>
        </div>

        {/* Compliance & Recognition */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-green-400" />
                <span>NDHM Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-blue-400" />
                <span>ABDM Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-red-400" />
                <span>Made in India</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <Link to="/contact" onClick={scrollToTop} className="hover:text-sky-400 transition-colors">Privacy Policy</Link>
              <span>|</span>
              <Link to="/contact" onClick={scrollToTop} className="hover:text-sky-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Team Ayulex. All rights reserved.</p>
          <p className="mt-2 text-xs text-gray-500">
            Building healthcare equity for Atmanirbhar Bharat | Smart India Hackathon 2025 Finalist
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;