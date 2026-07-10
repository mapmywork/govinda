import React from 'react';
import { motion } from 'framer-motion';
import { Fuel, Users, Settings } from 'lucide-react';
import Button from './Button';
import Badge from './Badge';

export default function CarCard({ car }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col group"
    >
      <div className="relative h-56 bg-gray-50 flex items-center justify-center p-6 overflow-hidden">
        <motion.img 
          src={car.image} 
          alt={car.name} 
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
        />
        {car.tag && (
          <div className="absolute top-4 left-4">
            <Badge variant="primary">{car.tag}</Badge>
          </div>
        )}
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-[#0A0A0A]">{car.name}</h3>
            <p className="text-gray-500 text-sm mt-1">{car.category}</p>
          </div>
          <div className="text-right">
            <span className="text-xs text-gray-500">Starting from</span>
            <div className="text-lg font-bold text-[#F4B400]">₹{car.price}<span className="text-sm font-normal text-gray-500">/day</span></div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 py-4 border-y border-gray-100 mb-6">
          <div className="flex flex-col items-center justify-center text-gray-600">
            <Fuel className="w-5 h-5 mb-1 opacity-70" />
            <span className="text-xs font-medium">{car.fuel}</span>
          </div>
          <div className="flex flex-col items-center justify-center text-gray-600 border-x border-gray-100">
            <Settings className="w-5 h-5 mb-1 opacity-70" />
            <span className="text-xs font-medium">{car.transmission}</span>
          </div>
          <div className="flex flex-col items-center justify-center text-gray-600">
            <Users className="w-5 h-5 mb-1 opacity-70" />
            <span className="text-xs font-medium">{car.seats} Seats</span>
          </div>
        </div>

        <div className="mt-auto grid grid-cols-2 gap-3">
          <Button variant="secondary" className="w-full py-2.5 text-sm">Details</Button>
          <Button variant="primary" className="w-full py-2.5 text-sm">Book Now</Button>
        </div>
      </div>
    </motion.div>
  );
}
