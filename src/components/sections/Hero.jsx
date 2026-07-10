import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CountUp from 'react-countup';
import { Phone, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

import heroBg from '../../assets/images/tirumala-hero.png';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0A0A0A] pt-32 pb-12">
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#0A0A0A] z-10" />
        <img
          src={heroBg}
          alt="Divine Tirumala Hills"
          className="w-full h-full object-cover object-center opacity-70 mix-blend-overlay"
        />
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl text-center mx-auto w-full">
          {/* Main Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex justify-center"
          >
            <img
              src="/logo.png"
              alt="Govinda Go - Self Drive Cars & Bikes"
              className="w-64 md:w-80 h-auto drop-shadow-[0_4px_24px_rgba(244,180,0,0.3)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 flex justify-center gap-4"
          >
            <Badge variant="glass">Premium Self Drive</Badge>
            <Badge variant="primary">From ₹999 / Day</Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tighter mb-4"
          >
            Freedom To Drive. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4B400] to-yellow-200">Power To Explore.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Experience the joy of driving well-maintained, insured, and sanitized vehicles with complete freedom in Tirupati.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="primary" icon={ArrowRight} className="w-full sm:w-auto text-lg py-4 px-8">
              Explore Fleet
            </Button>
            <Button variant="glass" icon={Phone} className="w-full sm:w-auto text-lg py-4 px-8">
              Call Now
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Floating Counters */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="w-full z-20 hidden md:block mt-24 relative"
      >
        <div className="container mx-auto px-6">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl max-w-4xl mx-auto py-8 px-10 grid grid-cols-3 divide-x divide-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <div className="text-center px-4">
              <div className="text-3xl font-black text-white mb-1">
                1000+
              </div>
              <div className="text-sm text-gray-300 font-medium uppercase tracking-wider">Happy Customers</div>
            </div>
            <div className="text-center px-4">
              <div className="text-3xl font-black text-[#F4B400] mb-1">
                50+
              </div>
              <div className="text-sm text-gray-300 font-medium uppercase tracking-wider">Premium Vehicles</div>
            </div>
            <div className="text-center px-4">
              <div className="text-3xl font-black text-white mb-1">24/7</div>
              <div className="text-sm text-gray-300 font-medium uppercase tracking-wider">Customer Support</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
