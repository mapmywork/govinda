import React from 'react';
import { cn } from '../../utils/cn';

export default function Badge({ children, variant = 'primary', className }) {
  const variants = {
    primary: 'bg-[#F4B400] text-[#0A0A0A]',
    dark: 'bg-[#111827] text-white',
    light: 'bg-white text-[#0A0A0A]',
    glass: 'bg-white/20 backdrop-blur-md text-white border border-white/30'
  };

  return (
    <span className={cn(
      "inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}
