'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export default function Button({ 
  children, 
  variant = 'primary', 
  className, 
  icon: Icon,
  ...props 
}) {
  const baseClasses = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300";
  
  const variants = {
    primary: "bg-[#F4B400] text-[#0A0A0A] hover:bg-[#d9a000] shadow-[0_4px_20px_rgba(244,180,0,0.4)]",
    secondary: "bg-[#111827] text-white hover:bg-[#1f2937] border border-white/10",
    outline: "bg-transparent text-white border-2 border-[#F4B400] hover:bg-[#F4B400] hover:text-[#0A0A0A]",
    glass: "bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20"
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseClasses, variants[variant], className)}
      {...props}
    >
      {children}
      {Icon && <Icon className="w-5 h-5" />}
    </motion.button>
  );
}
