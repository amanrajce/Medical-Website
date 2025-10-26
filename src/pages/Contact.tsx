import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Award } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    phoneNumber: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        organization: '',
        phoneNumber: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'ayulexteam@gmail.com',
      description: 'Get in touch for demos and partnerships.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 6202792298',
      description: 'Mon-Sat, 9 AM to 6 PM IST',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Mizoram University, Aizawl',
      description: 'Dept. of Computer Engineering',
      color: 'from-red-500 to-orange-600'
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
              Get in Touch with Team Ayulex
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform healthcare delivery in your region? We're here to help you bring 
              AI-powered diagnostic support and unified health records to your healthcare facility.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-5 rounded-full -mr-16 -mt-16`}></div>
                  <div className="relative">
                    <div className={`bg-gradient-to-br ${item.color} w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="text-blue-600 font-semibold my-2">{item.details}</p>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50/70 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column: Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Let's Bridge the Healthcare Divide Together
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're a healthcare facility looking to implement AI diagnostics, a government 
                organization, or want to learn more about how Ayulex can serve your community, we're here to help.
              </p>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Why Partner with Ayulex?
                </h3>
                <ul className="space-y-3 text-gray-700">
                  {[
                    "Offline AI diagnostics for zero connectivity areas",
                    "ABHA-integrated unified health records",
                    "Complete NDHM and ABDM compliance",
                    "Built specifically for the Indian healthcare ecosystem",
                    "Award-winning Smart India Hackathon solution"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-green-700 text-sm">Thank you! Your message has been sent. We'll get back to you soon.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                  <span className="text-red-700 text-sm">Error sending message. Please try again or email us directly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form fields... (same as your original, no changes needed here) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required disabled={isSubmitting} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:bg-gray-100" placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required disabled={isSubmitting} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:bg-gray-100" placeholder="your.email@example.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">Organization/Hospital</label>
                    <input type="text" id="organization" name="organization" value={formData.organization} onChange={handleChange} disabled={isSubmitting} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:bg-gray-100" placeholder="Your healthcare facility" />
                  </div>
                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} disabled={isSubmitting} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:bg-gray-100" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required disabled={isSubmitting} rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical disabled:bg-gray-100" placeholder="Tell us how Ayulex can help..."/>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Location</h2>
            <p className="text-xl text-gray-600">Department of Computer Engineering, Mizoram University, Aizawl</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-2 rounded-3xl shadow-2xl">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.3789311096733!2d92.65179007594586!3d23.73422258882512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374c173e332a657f%3A0x908073b64231b673!2sDepartment%20of%20Computer%20Engineering%2C%20MZU!5e0!3m2!1sen!2sin!4v1729953460492!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl border-4 border-white shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;