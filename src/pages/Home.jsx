'use client';

import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import OfferBanner from '../components/sections/OfferBanner';
import Features from '../components/sections/Features';
import Fleet from '../components/sections/Fleet';
import { motion } from 'framer-motion';

import Contact from '../components/sections/Contact';
import Founder from '../components/sections/Founder';
import howItWorksBg from '../assets/images/how-it-works-bg.png';

export default function Home({ whatsappNumber = '+917997869389', vehicles = [] }) {
  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <Navbar whatsappNumber={whatsappNumber} />
      <Hero whatsappNumber={whatsappNumber} />
      <OfferBanner whatsappNumber={whatsappNumber} />
      <Features />
      <Fleet vehicles={vehicles} />
      
      {/* Services Quick Section */}
      <section id="services" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-4">
              Pickup & Drop Services
            </h2>
            <div className="h-1 w-24 bg-[#F4B400] rounded-full mb-6" />
            <p className="text-lg text-gray-600">
              We offer seamless pickup and drop services across major transit hubs in Tirupati, including doorstep delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Railway Station', 'Bus Stand', 'Airport'].map((hub, i) => (
              <motion.div 
                key={hub}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#F9FAFB] rounded-3xl p-8 border border-gray-100 hover:border-[#F4B400]/30 transition-colors group"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  <div className="w-8 h-8 bg-[#F4B400] rounded-full opacity-20 absolute" />
                  <span className="relative z-10 text-xl font-bold text-[#0A0A0A]">{i+1}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0A0A0A] mb-2">{hub}</h3>
                <p className="text-gray-500">Dedicated pickup and drop off points available 24/7.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process Timeline */}
      <section id="how-it-works" className="py-24 relative overflow-hidden text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A0A0A]/70 z-10" />
          <img
            src={howItWorksBg.src}
            alt="Scenic road in Tirumala"
            className="w-full h-full object-cover object-center opacity-80"
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">How It Works</h2>
          <div className="h-1 w-24 bg-[#F4B400] rounded-full mb-16 mx-auto" />
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4 relative">
            {['Choose Vehicle', 'Upload Docs', 'Confirm & Pay', 'Drive Away'].map((step, i) => (
              <div key={step} className="flex-1 w-full max-w-xs z-10 relative">
                <div className="w-16 h-16 mx-auto bg-[#111827] border-2 border-[#F4B400] rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {i+1}
                </div>
                <h3 className="text-xl font-bold">{step}</h3>
              </div>
            ))}
            <div className="hidden md:block absolute top-8 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-white/10 z-0" />
          </div>
        </div>
      </section>
      
      <Founder />
      <Contact whatsappNumber={whatsappNumber} />
      <Footer whatsappNumber={whatsappNumber} />
    </div>
  );
}
