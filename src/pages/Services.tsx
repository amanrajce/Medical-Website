import React from 'react';
import { Shield, Database, Zap, BarChart3, Cloud, Lock, Stethoscope, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'cloud-infrastructure',
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Secure, scalable cloud solutions designed specifically for healthcare environments with HIPAA compliance.',
      features: [
        'HIPAA-compliant cloud hosting',
        'Auto-scaling infrastructure',
        '99.9% uptime guarantee',
        'Disaster recovery solutions',
        'Multi-region deployment',
        'Real-time monitoring'
      ],
      benefits: 'Reduce IT costs by up to 40% while ensuring maximum security and reliability for your healthcare data.'
    },
    {
      id: 'ehr-integration',
      icon: Stethoscope,
      title: 'EHR Integration',
      description: 'Seamless integration with existing Electronic Health Record systems for improved workflow efficiency.',
      features: [
        'Epic, Cerner, AllScripts integration',
        'HL7 FHIR standard compliance',
        'Real-time data synchronization',
        'Custom API development',
        'Legacy system modernization',
        'Workflow optimization'
      ],
      benefits: 'Eliminate data silos and reduce administrative time by 60% with unified healthcare information systems.'
    },
    {
      id: 'data-analytics',
      icon: BarChart3,
      title: 'Healthcare Data Analytics',
      description: 'Advanced healthcare analytics and insights to drive better patient outcomes and operational decisions.',
      features: [
        'Population health analytics',
        'Predictive modeling',
        'Clinical decision support',
        'Financial performance tracking',
        'Quality metrics reporting',
        'AI-powered insights'
      ],
      benefits: 'Improve patient outcomes by 25% and operational efficiency through data-driven decision making.'
    },
    {
      id: 'compliance-solutions',
      icon: Shield,
      title: 'Compliance & Security Solutions',
      description: 'Comprehensive security and compliance management to meet healthcare regulatory requirements.',
      features: [
        'HIPAA compliance management',
        'SOC 2 audit support',
        'Risk assessment tools',
        'Security monitoring',
        'Incident response planning',
        'Staff training programs'
      ],
      benefits: 'Achieve 100% compliance with healthcare regulations while reducing security incidents by 80%.'
    },
    {
      id: 'telemedicine-platform',
      icon: Users,
      title: 'Telemedicine Platform',
      description: 'Complete telehealth solution enabling remote patient consultations and monitoring.',
      features: [
        'HD video consultations',
        'Patient portal access',
        'Remote monitoring integration',
        'Prescription management',
        'Insurance verification',
        'Mobile applications'
      ],
      benefits: 'Expand patient reach by 300% and improve patient satisfaction with convenient telehealth services.'
    },
    {
      id: 'data-migration',
      icon: Database,
      title: 'Data Migration Services',
      description: 'Safe and efficient migration of healthcare data to modern cloud-based systems.',
      features: [
        'Zero-downtime migrations',
        'Data validation and cleansing',
        'Legacy system decommissioning',
        'Training and support',
        'Quality assurance testing',
        'Rollback capabilities'
      ],
      benefits: 'Modernize your healthcare systems with 99.9% data accuracy and minimal operational disruption.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 via-white to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Healthcare Cloud Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive cloud solutions designed specifically for healthcare organizations. From infrastructure 
              to analytics, we provide the technology foundation for better patient care.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:grid-flow-col-dense'
                  }`}
                >
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className="bg-sky-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-sky-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                    <p className="text-xl text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-sky-50 p-4 rounded-lg">
                      <p className="text-sky-800 font-medium">{service.benefits}</p>
                    </div>
                  </div>

                  <div className={`bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl ${
                    isEven ? '' : 'lg:col-start-1 lg:row-start-1'
                  }`}>
                    <div className="aspect-square bg-white rounded-xl shadow-lg p-8 flex items-center justify-center">
                      <Icon className="h-32 w-32 text-sky-400" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-sky-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Healthcare Operations?
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Let our experts help you choose the right combination of services for your organization's needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-sky-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Schedule a Consultation
            </a>
            <a
              href="/featured-product"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-sky-600 transition-colors"
            >
              View Our Featured Product
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;