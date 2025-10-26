import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Heart, Award, Clock, CheckCircle, Brain, TrendingUp } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Brain,
      title: 'Offline AI Diagnostics',
      description: 'Lightweight AI models deliver clinical decision support in rural areas, no internet required. Powered by MedGemma.',
      link: '/services#offline-ai',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'ABHA-Powered Health Records',
      description: 'Government of India ABHA integration unifies patient data across hospitals - one ID, complete medical history, instant access.',
      link: '/services#unified-records',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: TrendingUp,
      title: 'Smart Hospital Management',
      description: 'AI-driven inventory tracking, workflow automation, and analytics that reduce admin burden by 30%.',
      link: '/services#hospital-management',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  const differentiators = [
    {
      icon: Heart,
      title: 'Built for Rural India',
      description: 'Offline-first architecture ensures quality healthcare reaches the last mile, even in zero-connectivity zones.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Zap,
      title: 'Instant Impact',
      description: 'Doctors gain 30% more time for patient care through intelligent automation of reports, scheduling, and documentation.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Award,
      title: 'Medical-Grade AI',
      description: 'Fine-tuned MedGemma models provide evidence-backed diagnostic support, reducing medical errors by up to 20%.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Shield,
      title: 'Privacy-First Design',
      description: 'End-to-end encryption, RBAC, and full compliance with NDHM, ABHA, and data protection standards.',
      color: 'from-gray-500 to-gray-600'
    }
  ];

  const stats = [
    {
      icon: Brain,
      value: '20%',
      label: 'Reduction in Diagnostic Errors'
    },
    {
      icon: Clock,
      value: '30%',
      label: 'More Doctor Time for Patients'
    },
    {
      icon: Award,
      value: '100%',
      label: 'Offline-Capable in Rural Areas'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#3574FF]/5 via-white to-teal-50 py-20">
        <div className="absolute inset-0 opacity-5 z-0">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, #3574FF 0px, #3574FF 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #3574FF 0px, #3574FF 1px, transparent 1px, transparent 40px)'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              AI-Powered Healthcare for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 block mt-2">Every Indian</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Bridging the healthcare divide with intelligent diagnostic support, unified patient records, 
              and hospital management solutions designed for India, from rural clinics to urban hospitals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-blue-600 hover:text-blue-600 hover:shadow-lg transition-all duration-300"
              >
                Explore Solutions
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
              Our Platform Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A complete healthcare technology stack that works everywhere from Primary Health Centres 
              in remote villages to multi-specialty hospitals in metro cities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden flex flex-col"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-5 rounded-full -mr-16 -mt-16`}></div>
                  <div className="relative z-10 flex flex-col flex-grow">
                    <div className={`bg-gradient-to-br ${service.color} w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{service.description}</p>
                    <Link
                      to={service.link}
                      className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center mt-auto"
                    >
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50/70 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Ayulex?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Technology that works where it matters most — delivering healthcare equity across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-5 rounded-full -mr-16 -mt-16`}></div>
                  <div className="relative z-10">
                    <div className={`bg-gradient-to-br ${item.color} w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Healthcare Intelligence for <span className="text-blue-600">Atmanirbhar Bharat</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    <strong>The Challenge:</strong> India faces a critical healthcare divide. Rural clinics lack diagnostic tools, patient records are fragmented, 
                    and doctors struggle with rising medical complexity. 70% of misdiagnoses stem from inadequate decision support.
                  </p>
                  <p>
                    <strong>Our Vision:</strong> A connected healthcare ecosystem where every Indian regardless of location has access to world-class 
                    diagnostic support, unified medical records, and efficient hospital services.
                  </p>
                  <p>
                    <strong>The Solution:</strong> Ayulex combines offline AI diagnostics, Government of India's ABHA-powered unified records, and 
                    intelligent hospital management into one platform — built on proven technologies: Flutter, FastAPI, 
                    MedGemma, and Kubernetes.
                  </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                  {['Healthcare Equity', 'Innovation', 'Data Privacy', 'Clinical Excellence'].map((value) => (
                    <div key={value} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-xl mb-4 inline-block">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                    <p className="font-semibold text-gray-700">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                Ready to Transform Healthcare Delivery?
              </h2>
              <p className="text-xl text-white/90 leading-relaxed mt-4">
                Join the movement toward healthcare equity. See how Ayulex brings world-class diagnostic support 
                and unified health records to every corner of India.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center shadow-lg"
              >
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;