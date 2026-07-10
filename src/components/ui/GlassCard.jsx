import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export default function GlassCard({ children, className, hoverEffect = false, ...props }) {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5 } : {}}
      transition={{ duration: 0.3 }}
      className={cn(
        "glass-card p-6 md:p-8",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
