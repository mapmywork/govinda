import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

export default function FeatureCard({ icon: Icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <GlassCard hoverEffect className="h-full group flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-2xl bg-[#0A0A0A]/5 flex items-center justify-center mb-6 group-hover:bg-[#F4B400]/20 transition-colors duration-300">
          <Icon className="w-8 h-8 text-[#0A0A0A] group-hover:text-[#F4B400] transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-[#0A0A0A]">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </GlassCard>
    </motion.div>
  );
}
