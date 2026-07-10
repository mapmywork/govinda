import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Contact Govinda Go"
          centered
        />
        
        <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Details Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold text-[#0A0A0A] mb-6">We're Here to Help</h3>
            <p className="text-gray-600 mb-10 text-lg">
              Have questions about our fleet, pricing, or pickup locations in Tirupati? Reach out to us and our dedicated team will assist you immediately.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#F9FAFB] flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                  <Phone className="w-5 h-5 text-[#F4B400]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#0A0A0A] mb-1">Call Us (24/7)</h4>
                  <p className="text-gray-600">+91 9160869607</p>
                  <p className="text-gray-600">+91 9440944087</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#F9FAFB] flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                  <Mail className="w-5 h-5 text-[#F4B400]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#0A0A0A] mb-1">Email Us</h4>
                  <p className="text-gray-600">govindago_tpt@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#F9FAFB] flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                  <MapPin className="w-5 h-5 text-[#F4B400]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#0A0A0A] mb-1">Visit Us</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Tirumala Bypass Road<br/>
                    Tirupati, Andhra Pradesh
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0A0A0A] p-10 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            {/* Decorative background element */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#F4B400] rounded-full blur-[100px] opacity-20 pointer-events-none" />

            <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Send a Message</h3>
            
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-300">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F4B400]/50 transition-all"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-300">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F4B400]/50 transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F4B400]/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-300">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F4B400]/50 transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Your Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F4B400]/50 transition-all resize-none"
                  placeholder="How can we help you today?"
                />
              </div>

              <Button variant="primary" icon={Send} className="w-full py-4 text-lg mt-4">
                Send Message
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
