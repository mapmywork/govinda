import React from 'react';
import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';

export default function OfferBanner() {
  return (
    <div id="offers" className="bg-[#F4B400] overflow-hidden py-3 relative z-40 shadow-lg">
      <motion.div 
        animate={{ x: [0, -1035] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        className="flex whitespace-nowrap"
      >
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center gap-4 mx-8 text-[#0A0A0A] font-bold text-sm md:text-base tracking-wide uppercase">
            <Tag className="w-5 h-5" />
            <span>Launch Offer: Prices Starting From ₹999 / Day</span>
            <span className="w-2 h-2 rounded-full bg-[#0A0A0A] mx-2" />
            <span>Up To 20% OFF</span>
            <span className="w-2 h-2 rounded-full bg-[#0A0A0A] mx-2" />
            <span>Limited Period - Book Today</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
