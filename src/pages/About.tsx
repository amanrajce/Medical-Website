import { Users, Award, Shield, Heart, Zap, Target, Brain, Activity, Globe, Lightbulb, Trophy, Rocket, TrendingUp } from 'lucide-react';
// Import your team photos
import member1Photo from '../assets/team/member1.jpeg';
import member2Photo from '../assets/team/member2.png';
import member3Photo from '../assets/team/member3.png';
import member4Photo from '../assets/team/member4.jpeg';

const About = () => {
  const team = [
    {
      name: 'Aman Raj',
      role: 'Founder & CEO',
      background: 'Drives company vision and strategic direction. Leads product development, investor relations, and overall business growth for Ayulex healthcare platform.',
      image: member1Photo
    },
    {
      name: 'Ekjot Singh Nagpal',
      role: 'Co-Founder & CTO',
      background: 'Oversees all technical operations and engineering teams. Leads AI/ML implementation, system architecture, and technology infrastructure scaling.',
      image: member2Photo
    },
    {
      name: 'Josephine Lalrinmawii',
      role: 'Co-Founder & COO',
      background: 'Manages team operations and cross-functional coordination. Handles day-to-day execution, workflow optimization, and operational excellence.',
      image: member3Photo
    },
    {
      name: 'Lalhriatzela',
      role: 'Business Development Lead',
      background: 'Drives strategic partnerships with hospitals and healthcare providers. Manages stakeholder relationships and market expansion initiatives.',
      image: member4Photo
    }
  ];

  const corePillars = [
    {
      icon: Target,
      title: 'Our Mission',
      description: "To bridge India's healthcare divide by delivering AI powered diagnostic support, unified patient records, and intelligent hospital management systems accessible across urban centers and remote rural areas.",
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Globe,
      title: 'Our Vision',
      description: 'A connected healthcare ecosystem where every Indian, regardless of location, has access to world class diagnostic support, unified medical records, and efficient healthcare services for better health outcomes.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Heart,
      title: 'Core Values',
      description: 'We are driven by Healthcare Equity ensuring accessible care for all. Innovation powers our technology. Data Privacy protects patient information through encryption. Clinical Excellence guides every diagnostic decision.',
      color: 'from-red-500 to-red-600'
    }
  ];

  const challenges = [
    {
      icon: Activity,
      title: 'Diagnostic Gaps',
      description: 'Poor connectivity and lack of advanced tools restrict timely healthcare in rural settings, where 70% of misdiagnoses occur.',
      color: 'from-red-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'Fragmented Records',
      description: 'Patient data is scattered, causing delays in treatment. No unified system exists for instant access to complete medical history.',
      color: 'from-orange-500 to-amber-600'
    },
    {
      icon: Zap,
      title: 'Admin Overload',
      description: 'Manual workflows and poor inventory tracking increase administrative burden, reducing doctors time for patient care.',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Brain,
      title: 'Medical Complexity',
      description: 'Doctors lack integrated digital support to navigate complex cases safely, increasing the challenge of delivering accurate care.',
      color: 'from-blue-500 to-cyan-600'
    }
  ];
  
  const milestones = [
    { 
      year: 'Nov 2024', 
      title: 'The Beginning',
      event: 'Ayulex concept developed and presented at Innovia 24, securing 3rd Place at Mizoram University Innovation Challenge',
      icon: Lightbulb,
      color: 'from-green-500 to-emerald-600'
    },
    { 
      year: 'Apr 2025', 
      title: 'National Recognition',
      event: 'Won 1st Place at Yuvamantha Hackathon 2025, organized by Ministry of Education with our online healthcare assistance model prototype',
      icon: Trophy,
      color: 'from-yellow-500 to-amber-600'
    },
    { 
      year: 'Oct 2025', 
      title: 'SIH Grand Finale',
      event: 'Selected for Smart India Hackathon 2025 Grand Finale under AICTE Healthcare Innovation Challenge - Team Ayulex (ID: 70361)',
      icon: Rocket,
      color: 'from-blue-500 to-indigo-600'
    },
    { 
      year: 'Beyond', 
      title: 'Our Vision',
      event: 'Bridge the healthcare divide across rural and urban India through AI-powered diagnostic support and intelligent hospital management',
      icon: TrendingUp,
      color: 'from-purple-500 to-violet-600'
    }
  ];

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
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              About Ayulex
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A team of engineers and innovators building AI-powered healthcare solutions that deliver 
              intelligent diagnostic support and unified health records across India from tier-1 cities to the remotest villages.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corePillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${pillar.color} opacity-5 rounded-full -mr-16 -mt-16`}></div>
                  <div className="relative">
                    <div className={`bg-gradient-to-br ${pillar.color} w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{pillar.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Problem We're Solving */}
      <section className="py-20 bg-gray-50/70 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Healthcare Challenge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              India faces critical gaps in healthcare delivery that Ayulex is designed to address.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {challenges.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
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

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Team Ayulex
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Engineers, developers, and healthcare technology enthusiasts working to make healthcare accessible for all Indians.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-5 object-cover border-4 border-white shadow-md"
                />
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.background}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              From concept to Smart India Hackathon finalist — building healthcare solutions for <span className="text-blue-600 font-semibold">Atmanirbhar Bharat</span>
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-16 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/60 via-blue-600 to-blue-600/80"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                return (
                  <div key={index} className="relative flex items-start">
                    <div className={`absolute left-5 md:left-13 w-12 h-12 bg-gradient-to-br ${milestone.color} rounded-full z-10 flex items-center justify-center shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <div className="ml-20 md:ml-32 flex-1">
                      <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-l-4 border-blue-600 hover:shadow-xl transition-all hover:translate-x-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                            {milestone.year}
                          </span>
                          <h4 className="text-xl font-bold text-gray-900">{milestone.title}</h4>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{milestone.event}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Recognition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600">
              Recognized for innovation in healthcare technology and commitment to transforming patient care across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
                <div className="bg-gradient-to-br from-yellow-50 to-orange-100 p-3 rounded-xl mb-4 inline-block">
                    <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-yellow-700 mb-2">1st Place Winner</h3>
                <p className="font-semibold text-gray-700 mb-1">Yuvamantha Hackathon 2025</p>
                <p className="text-sm text-gray-500">Innovative AI Powered Healthcare Solution</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
                <div className="bg-gradient-to-br from-amber-50 to-yellow-100 p-3 rounded-xl mb-4 inline-block">
                    <Award className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-amber-700 mb-2">3rd Place Winner</h3>
                <p className="font-semibold text-gray-700 mb-1">Innovia 24 Challenge</p>
                <p className="text-sm text-gray-500">Mizoram University Innovation Challenge</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-100">
              <div className="flex items-center">
                <Brain className="h-6 w-6 text-blue-600 mr-3" />
                <p className="text-blue-800 font-semibold text-lg">Google MedGemma AI</p>
              </div>
              <p className="text-blue-700 mt-2">Fine-tuned medical AI model for diagnostic support.</p>
            </div>

            <div className="bg-green-50 p-6 rounded-2xl border-2 border-green-100">
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-green-600 mr-3" />
                <p className="text-green-800 font-semibold text-lg">ABHA & NDHM Compliant</p>
              </div>
              <p className="text-green-700 mt-2">Certified by Government of India healthcare standards.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;