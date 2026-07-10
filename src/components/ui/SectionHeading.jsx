import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export default function SectionHeading({ title, subtitle, className, centered = false }) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#F4B400] font-bold tracking-wider uppercase text-sm mb-3 block"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight"
      >
        {title}
      </motion.h2>
      {centered && (
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="h-1 w-24 bg-[#F4B400] mx-auto mt-6 rounded-full"
        />
      )}
    </div>
  );
}
