import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Cloud, 
  Lock, 
  Activity,
  Smartphone,
  Monitor,
  Database
} from 'lucide-react';

const FeaturedProduct = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Cloud-Native Architecture',
      description: 'Built for the cloud with microservices architecture ensuring scalability and reliability.'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description: 'Full compliance with healthcare regulations including HIPAA, SOC 2, and HITECH.'
    },
    {
      icon: Zap,
      title: 'Real-Time Analytics',
      description: 'Instant insights into patient data, operational metrics, and clinical outcomes.'
    },
    {
      icon: Users,
      title: 'Multi-Tenant Support',
      description: 'Secure data isolation for multiple healthcare organizations on a single platform.'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Optimized for healthcare professionals on the go with native mobile applications.'
    },
    {
      icon: Lock,
      title: 'Advanced Security',
      description: 'End-to-end encryption, multi-factor authentication, and continuous security monitoring.'
    }
  ];

  const benefits = [
    'Reduce operational costs by up to 40%',
    'Improve patient satisfaction scores by 30%',
    'Decrease administrative time by 60%',
    'Ensure 100% regulatory compliance',
    'Achieve 99.9% system uptime',
    'Enable seamless data sharing across departments'
  ];

  const testimonials = [
    {
      name: 'Dr. Jennifer Martinez',
      role: 'Chief Medical Officer',
      organization: 'Regional Medical Center',
      quote: 'HealthCloud Pro has transformed how we deliver patient care. The real-time analytics help us make better clinical decisions.',
      image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Mark Thompson',
      role: 'IT Director',
      organization: 'Community Health Network',
      quote: 'Implementation was seamless and the support team is exceptional. We\'ve seen immediate improvements in efficiency.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 via-white to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                HealthCloud Pro
                <span className="block text-sky-500">All-in-One Healthcare Platform</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                The most comprehensive cloud-based healthcare management platform designed to streamline operations, 
                improve patient outcomes, and ensure regulatory compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-sky-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  Request Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="border-2 border-sky-500 text-sky-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-sky-50 transition-colors">
                  Watch Video
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-sky-100 to-teal-100 p-8 rounded-2xl">
                <div className="bg-white rounded-xl shadow-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Activity className="h-6 w-6 text-sky-500" />
                      <span className="font-semibold text-gray-900">HealthCloud Pro</span>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-sky-50 rounded-lg">
                      <span className="text-sm text-gray-700">Active Patients</span>
                      <span className="font-semibold text-sky-600">1,247</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-teal-50 rounded-lg">
                      <span className="text-sm text-gray-700">Appointments Today</span>
                      <span className="font-semibold text-teal-600">89</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm text-gray-700">System Uptime</span>
                      <span className="font-semibold text-blue-600">99.9%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Healthcare
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every feature designed with healthcare professionals in mind, ensuring efficiency and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="bg-sky-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Measurable Results for Your Organization
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Healthcare organizations using HealthCloud Pro see immediate improvements in efficiency, 
                patient satisfaction, and operational costs.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <Monitor className="h-12 w-12 text-sky-500 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">500+</h4>
                <p className="text-gray-600">Healthcare Organizations</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <Users className="h-12 w-12 text-teal-500 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">2M+</h4>
                <p className="text-gray-600">Patients Served</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <Database className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">50TB</h4>
                <p className="text-gray-600">Data Processed Daily</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <Shield className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">100%</h4>
                <p className="text-gray-600">Compliance Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Healthcare Leaders Say
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real healthcare organizations using HealthCloud Pro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sky-600">{testimonial.role}</p>
                    <p className="text-gray-600 text-sm">{testimonial.organization}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-sky-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience HealthCloud Pro?
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Join hundreds of healthcare organizations already transforming patient care with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-sky-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              Schedule Your Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-sky-600 transition-all duration-300 inline-flex items-center justify-center"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedProduct;