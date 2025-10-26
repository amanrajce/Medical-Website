import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield, CheckCircle, ArrowRight, Cloud, Brain, Activity, Smartphone, Monitor, Database,
  WifiOff, Award, TrendingUp, Clock, Target, Stethoscope, Building2, Users
} from 'lucide-react';

const solutionsFeatures = [
  { icon: Brain, title: 'MedGemma AI Engine', desc: 'Fine-tuned medical AI delivering evidence-based diagnostic support with 94.8% accuracy, trained on comprehensive medical literature.', badge: 'Offline AI', color: 'from-blue-500 to-blue-600' },
  { icon: WifiOff, title: 'Offline-First Architecture', desc: 'Zero-connectivity operation with automatic sync. Healthcare delivery continues uninterrupted in remote areas with intelligent edge computing.', badge: 'Zero Dependency', color: 'from-green-500 to-green-600' },
  { icon: Database, title: 'ABHA Integration', desc: 'Seamless integration with Ayushman Bharat Digital Mission for unified, portable health records accessible nationwide.', badge: 'Gov Certified', color: 'from-blue-500 to-blue-700' },
  { icon: Activity, title: 'Real-Time Clinical Insights', desc: 'Instant analysis of symptoms, vitals, and medical history powered by Prophet forecasting for proactive care.', badge: 'Live Analytics', color: 'from-teal-500 to-teal-600' },
  { icon: Smartphone, title: 'Cross-Platform Support', desc: 'Flutter-based responsive design ensuring consistent experience across mobile, tablet, and desktop devices.', badge: 'Universal Access', color: 'from-purple-500 to-purple-600' },
  { icon: Shield, title: 'Enterprise Security', desc: 'End-to-end encryption, RBAC, and full NDHM compliance with continuous security monitoring and audit trails.', badge: 'HIPAA Ready', color: 'from-red-500 to-red-600' }
];

// Impact Metrics, Tech Stack, and Medical Advisors data moved to FeaturedProduct.tsx

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 pb-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, #3574FF 0px, #3574FF 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #3574FF 0px, #3574FF 1px, transparent 1px, transparent 40px)'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
              <Award className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Smart India Hackathon 2025 Finalist</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Ayulex Platform Solutions
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 mt-2">
                AI-Powered Healthcare for Atmanirbhar Bharat
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Explore how Ayulex delivers comprehensive AI-powered solutions, offering offline diagnostic support, 
              unified patient records, and intelligent hospital management to transform healthcare delivery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/contact" className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center">
                Schedule Live Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="https://youtu.be/YDuRl5Kj2cM" target="_blank" rel="noopener noreferrer"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-blue-600 hover:text-blue-600 hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center">
                <Monitor className="mr-2 h-5 w-5" />Watch Solution Demo
              </a>
            </div>
          </div>

          {/* Dashboard Preview - This section is more detailed and stays here */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-3xl shadow-2xl">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-lg">
                      <Activity className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Ayulex Dashboard</h3>
                      <p className="text-sm text-gray-500">Real-time Healthcare Intelligence</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 bg-green-50 border border-green-200 px-4 py-2 rounded-full">
                    <WifiOff className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-semibold text-green-600">Offline Mode Active</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { label: 'Active ABHA Records', value: '2,847', change: '+12% from last month', icon: Database, color: 'blue' },
                    { label: 'AI Consultations Today', value: '156', change: 'Average response: 1.2s', icon: Brain, color: 'teal' },
                    { label: 'Diagnostic Accuracy', value: '94.8%', change: 'Validated by medical experts', icon: Target, color: 'indigo' },
                    { label: 'Rural PHCs Connected', value: '89', change: 'Across 12 states', icon: Building2, color: 'green' }
                  ].map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                      <div key={i} className={`bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100 p-5 rounded-xl border border-${stat.color}-200`}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-600">{stat.label}</span>
                          <Icon className={`h-5 w-5 text-${stat.color}-600`} />
                        </div>
                        <p className={`text-3xl font-bold text-${stat.color}-600`}>{stat.value}</p>
                        <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions/Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Designed for the Indian Healthcare Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every feature engineered to bridge the healthcare divide, ensuring quality care from metropolitan hospitals to remote village clinics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionsFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                  <div className={`bg-gradient-to-br ${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    {feature.badge}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Healthcare Delivery?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the movement toward healthcare equity. See how Ayulex brings world-class diagnostic support to every corner of India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center justify-center">
              Schedule Demo<ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/platform" className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
              Learn About Our Platform
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;