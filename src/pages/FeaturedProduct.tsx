import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Cloud,
  Brain,
  Activity,
  Smartphone,
  Monitor,
  Database,
  WifiOff,
  Star,
  TrendingUp,
  Clock,
  Users,
  Award
} from 'lucide-react';

// Import your images from the src/assets folder
import mentor1Photo from '../assets/mentors/Mentor1.jpg';
import mentor2Photo from '../assets/mentors/Mentor2.jpeg'; // Corrected path


const featuredProductFeatures = [
  {
    icon: Brain,
    title: 'MedGemma AI Engine',
    description: 'Fine-tuned medical AI model delivering evidence-based diagnostic support and clinical recommendations offline.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: WifiOff,
    title: 'Offline-First Architecture',
    description: 'Works seamlessly without internet, ensuring healthcare delivery in the most remote rural areas.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Database,
    title: 'ABHA Integration',
    description: 'Govt. of India ABHA-powered unified health records accessible across all healthcare facilities.',
    color: 'from-blue-500 to-indigo-700'
  },
  {
    icon: Activity,
    title: 'Real-Time Clinical Insights',
    description: 'Instant analysis of symptoms, vitals, and medical history for faster diagnostic decision-making.',
    color: 'from-teal-500 to-teal-600'
  }
  // Removed some features to keep this section concise for 'PLATFORM' view
];

const benefitsList = [
  'Reduce diagnostic errors by up to 20%',
  'Save 30% more doctor time for patient care',
  'Enable 100% offline capability in rural areas',
  'Provide instant access to unified health records',
  'Achieve complete NDHM and ABDM compliance',
  'Automate hospital workflows and inventory management'
];

const impactMetrics = [
  {
    icon: TrendingUp,
    value: '20%',
    label: 'Reduction in Diagnostic Errors'
  },
  {
    icon: Clock,
    value: '30%',
    label: 'More Time for Patient Care'
  },
  {
    icon: Users,
    value: '50K+',
    label: 'Patients Served'
  },
  {
    icon: Shield,
    value: '100%',
    label: 'NDHM Compliance'
  },
];

const medicalAdvisorsData = [
  {
    name: 'Dr. Rahul Raj',
    credentials: 'MBBS (P.M.C.H.), MD (N.M.C.H.)',
    specialization: 'Cardiology, Neurology, Internal Medicine',
    role: 'Senior Medical Advisor & Validator',
    quote: 'The integration of MedGemma AI with offline capabilities makes Ayulex a game-changer for rural healthcare. I\'ve personally validated the clinical decision support algorithms, and they demonstrate remarkable accuracy in diagnostic assistance.',
    image: mentor1Photo,
  },
  {
    name: 'Sobha Kumari',
    credentials: '5th Year MBBS Student',
    specialization: 'Medical Research & Clinical Implementation',
    role: 'Medical Research Associate',
    quote: 'As part of the new generation of healthcare professionals, I appreciate how Ayulex bridges technology with practical clinical needs. The platform\'s approach to ABHA integration and offline diagnostics addresses real challenges faced in primary health centers.',
    image: mentor2Photo,
  }
];

const platformTechStack = [
  {
    category: 'AI/ML Layer',
    icon: Brain,
    technologies: ['Google MedGemma', 'Prophet', 'MLflow'],
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    category: 'Application Layer',
    icon: Smartphone,
    technologies: ['Flutter', 'FastAPI', 'Redis'],
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    category: 'Data Layer',
    icon: Database,
    technologies: ['PostgreSQL', 'ABHA API', 'S3/GCS'],
    gradient: 'from-teal-500 to-cyan-600'
  },
  {
    category: 'Infrastructure',
    icon: Cloud,
    technologies: ['Kubernetes', 'Docker', 'Prometheus'],
    gradient: 'from-green-500 to-emerald-600'
  }
];

const FeaturedProduct = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#3574FF]/5 via-white to-teal-50 py-20 pt-28">
        <div className="absolute inset-0 opacity-5 z-0">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, #3574FF 0px, #3574FF 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #3574FF 0px, #3574FF 1px, transparent 1px, transparent 40px)'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Ayulex Platform
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 mt-2">Healthcare Intelligence for Atmanirbhar Bharat</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                The most comprehensive AI-powered healthcare platform designed for India, delivering offline diagnostic
                support, unified patient records, and intelligent hospital management from rural clinics to urban hospitals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  Request Demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="https://youtu.be/YDuRl5Kj2cM" target="_blank" rel="noopener noreferrer" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-blue-600 hover:text-blue-600 hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center">
                   <Monitor className="mr-2 h-5 w-5" />
                   Watch Platform Demo
                </a>
              </div>
            </div>

            {/* Simplified Dashboard Preview for Platform overview */}
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-3xl shadow-2xl">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-lg">
                      <Activity className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Platform Overview</h3>
                      <p className="text-sm text-gray-500">Key Metrics at a Glance</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 bg-green-50 border border-green-200 px-4 py-2 rounded-full">
                    <WifiOff className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-semibold text-green-600">Offline Ready</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                    <p className="text-sm font-medium text-gray-600 mb-1">ABHA Records</p>
                    <p className="text-3xl font-bold text-blue-600">2,847</p>
                  </div>
                  <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-4 rounded-xl border border-teal-100">
                    <p className="text-sm font-medium text-gray-600 mb-1">AI Consultations</p>
                    <p className="text-3xl font-bold text-teal-600">156</p>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 rounded-xl border border-indigo-200">
                    <p className="text-sm font-medium text-gray-600 mb-1">Accuracy</p>
                    <p className="text-3xl font-bold text-indigo-600">94.8%</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100">
                    <p className="text-sm font-medium text-gray-600 mb-1">PHCs Connected</p>
                    <p className="text-3xl font-bold text-green-600">89</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Platform Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Capabilities of Ayulex Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Bridging the healthcare divide with intelligent, compliant, and accessible solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProductFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-5 rounded-full -mr-16 -mt-16`}></div>
                  <div className="relative">
                    <div className={`bg-gradient-to-br ${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Measurable Impact & Benefits Section */}
      <section className="py-20 bg-gray-50/70 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Measurable Impact on Healthcare Delivery
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Healthcare facilities using Ayulex see immediate improvements in diagnostic accuracy,
                operational efficiency, and patient outcomes across urban and rural settings.
              </p>
              <div className="space-y-4">
                {benefitsList.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {impactMetrics.map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                      <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-xl mb-4 inline-block">
                              <Icon className="h-6 w-6 text-blue-600" />
                          </div>
                          <h3 className="text-4xl font-bold text-gray-900 mb-2">{metric.value}</h3>
                          <p className="font-semibold text-gray-700">{metric.label}</p>
                      </div>
                  );
              })}
            </div>
          </div>
        </div>
      </section>
      
      {/* Medical Validation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Medically Validated & Clinically Approved
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform undergoes rigorous medical validation by experienced healthcare professionals
              to ensure clinical accuracy and patient safety.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {medicalAdvisorsData.map((advisor, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 flex flex-col items-start hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <img src={advisor.image} alt={advisor.name} className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg mr-5 flex-shrink-0"/>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{advisor.name}</h3>
                    <p className="text-blue-600 font-medium">{advisor.credentials}</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-6 italic border-l-4 border-blue-500 pl-4">"{advisor.quote}"</p>
                <div className="text-gray-600 text-sm space-y-2 mt-auto w-full pt-4 border-t border-gray-100">
                  <p><span className="font-semibold text-gray-800">Specialization:</span> {advisor.specialization}</p>
                  <p><span className="font-semibold text-gray-800">Role:</span> {advisor.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50/70 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built on Proven Technologies
            </h2>
            <p className="text-xl text-gray-600">
              Enterprise-grade technology stack ensuring reliability, security, and scalability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformTechStack.map((stack, index) => {
              const Icon = stack.icon;
              return (
                <div key={index} className={`bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-300`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${stack.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <div className={`bg-gradient-to-br ${stack.gradient} p-3 rounded-xl mb-5 inline-block shadow-md`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{stack.category}</h3>
                    <ul className="space-y-2">
                      {stack.technologies.map((tech, tIndex) => (
                        <li key={tIndex} className="flex items-center text-gray-600">
                          <Star className="h-4 w-4 text-blue-500 mr-3 flex-shrink-0" />
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                Ready to Experience the Ayulex Platform?
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
                Schedule Your Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedProduct;