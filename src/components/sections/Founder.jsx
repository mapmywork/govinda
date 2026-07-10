import React from 'react';
import { motion } from 'framer-motion';

export default function Founder() {
  return (
    <section id="founder" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-[#F4B400] to-yellow-200 shadow-xl">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white bg-gray-100 flex items-center justify-center relative">
                {/* Fallback avatar if no image is available yet */}
                <div className="w-full h-full flex items-center justify-center bg-[#111827] text-white">
                  <span className="text-8xl font-bold tracking-tighter">K</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-2">
              Meet Our Founder
            </h2>
            <h3 className="text-2xl text-[#F4B400] font-semibold mb-6">
              Karunakar
            </h3>
            <div className="h-1 w-24 bg-[#F4B400] rounded-full mb-8 mx-auto md:mx-0" />
            
            <blockquote className="text-xl md:text-2xl text-gray-700 italic font-medium leading-relaxed mb-6 border-l-4 border-[#F4B400] pl-6 text-left">
              "Our mission is to provide the most reliable, premium, and seamless self-drive car rental experience in Tirupati. We believe in giving our customers the freedom to explore at their own pace."
            </blockquote>
            
            <p className="text-lg text-gray-600 leading-relaxed text-left">
              With a deep passion for travel and automobiles, Karunakar founded Govinda Go to address the need for a hassle-free and high-quality self-drive service. His vision continues to drive our commitment to excellence, vehicle safety, and unparalleled customer satisfaction.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
