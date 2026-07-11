import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { cn } from '../../utils/cn';


export default function Footer({ whatsappNumber = '+917997869389' }) {
  return (
    <footer className="bg-[#111827] pt-20 pb-10 text-gray-400">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <img src="/logo.png" alt="Govinda Go Logo" className="h-24 lg:h-28 mb-6 object-contain rounded-lg shadow-sm" />
            <p className="text-sm leading-relaxed mb-6">
              Experience the joy of driving well-maintained, insured and sanitized vehicles with complete freedom. Premium self-drive cars and bikes in Tirupati.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F4B400] hover:text-[#0A0A0A] transition-colors"><FaFacebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F4B400] hover:text-[#0A0A0A] transition-colors"><FaInstagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F4B400] hover:text-[#0A0A0A] transition-colors"><FaTwitter className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-[#F4B400] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#F4B400] transition-colors">About Us</a></li>
              <li><a href="#fleet" className="hover:text-[#F4B400] transition-colors">Our Fleet</a></li>
              <li><a href="#contact" className="hover:text-[#F4B400] transition-colors">Contact</a></li>
              <li><a href="#faq" className="hover:text-[#F4B400] transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-[#F4B400] transition-colors">Self Drive Cars</a></li>
              <li><a href="#" className="hover:text-[#F4B400] transition-colors">Self Drive Bikes</a></li>
              <li><a href="#" className="hover:text-[#F4B400] transition-colors">Airport Pickup</a></li>
              <li><a href="#" className="hover:text-[#F4B400] transition-colors">Railway Station Drop</a></li>
              <li><a href="#" className="hover:text-[#F4B400] transition-colors">Home Delivery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F4B400] shrink-0 mt-0.5" />
                <span className="text-sm">Tirumala Bypass Road, Tirupati, Andhra Pradesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#F4B400] shrink-0" />
                <div className="flex flex-col text-sm">
                  <a href={`tel:${whatsappNumber}`} className="hover:text-white">{whatsappNumber}</a>
                  <a href="tel:+919440944087" className="hover:text-white">+91 9440944087</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#F4B400] shrink-0" />
                <a href="mailto:govindago_tpt@gmail.com" className="text-sm hover:text-white">govindago_tpt@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Govinda Go. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
