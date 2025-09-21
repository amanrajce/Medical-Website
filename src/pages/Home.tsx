import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Users, Heart, Award, Clock, CheckCircle } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Shield,
      title: 'Cloud Infrastructure',
      description: 'Secure, scalable cloud solutions designed specifically for healthcare environments with HIPAA compliance.',
      link: '/services#cloud-infrastructure'
    },
    {
      icon: Zap,
      title: 'EHR Integration',
      description: 'Seamless integration with existing Electronic Health Record systems for improved workflow efficiency.',
      link: '/services#ehr-integration'
    },
    {
      icon: Users,
      title: 'Data Analytics',
      description: 'Advanced healthcare analytics and insights to drive better patient outcomes and operational decisions.',
      link: '/services#data-analytics'
    }
  ];

  const differentiators = [
    {
      icon: Heart,
      title: 'Patient-Centric Approach',
      description: 'Every solution we build puts patient care and experience at the center of healthcare delivery.'
    },
    {
      icon: Zap,
      title: 'Streamlined Operations',
      description: 'Our technology eliminates administrative burden, allowing healthcare providers to focus on what matters most.'
    },
    {
      icon: Award,
      title: 'Technology Leadership',
      description: 'Cutting-edge cloud solutions built by healthcare technology experts with proven track records.'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with full HIPAA, SOC 2, and healthcare regulatory compliance built-in.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 via-white to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Healthcare with
              <span className="text-sky-500 block">Cloud Innovation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Empowering healthcare organizations with secure, scalable cloud solutions that improve patient outcomes, 
              streamline operations, and ensure compliance with industry standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-sky-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Join Us Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-sky-500 text-sky-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-sky-50 transition-all duration-300 inline-flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive cloud healthcare solutions designed to meet the unique needs of modern healthcare organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="bg-sky-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <Link
                    to={service.link}
                    className="text-sky-600 font-medium hover:text-sky-700 inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose CloudHealth?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're not just another technology company. We're healthcare transformation specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex space-x-4">
                  <div className="bg-sky-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Journey in Healthcare Innovation
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Origin</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Founded in 2018 by a team of healthcare professionals and cloud architects who witnessed firsthand 
                    the inefficiencies plaguing healthcare systems. We started with a simple mission: make healthcare 
                    technology work better for everyone.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To create a world where healthcare technology empowers providers to deliver exceptional patient care 
                    without the burden of complex, fragmented systems.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We accelerate healthcare transformation through innovative cloud solutions that prioritize patient 
                    outcomes, operational efficiency, and regulatory compliance.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Values</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {['Patient First', 'Innovation', 'Integrity', 'Excellence'].map((value) => (
                      <div key={value} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-sky-500" />
                        <span className="text-gray-700">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-100 to-teal-100 p-8 rounded-2xl">
              <div className="text-center space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <Clock className="h-12 w-12 text-sky-500 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-gray-900">7+ Years</h4>
                  <p className="text-gray-600">Healthcare Innovation</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <Users className="h-12 w-12 text-teal-500 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-gray-900">500+</h4>
                  <p className="text-gray-600">Healthcare Organizations Served</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <Award className="h-12 w-12 text-sky-600 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-gray-900">100%</h4>
                  <p className="text-gray-600">HIPAA Compliant Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-sky-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Healthcare Operations?
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Join hundreds of healthcare organizations already leveraging our cloud solutions to improve patient care and operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-sky-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/featured-product"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-sky-600 transition-all duration-300 inline-flex items-center justify-center"
            >
              View Our Featured Product
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;