import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import Button from '../ui/Button';
import { cn } from '../../utils/cn';

const navLinks = [
  { name: 'Home', path: '#home' },
  { name: 'Fleet', path: '#fleet' },
  { name: 'Offers', path: '#offers' },
  { name: 'Services', path: '#services' },
  { name: 'How It Works', path: '#how-it-works' },
  { name: 'Contact', path: '#contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 z-50 relative">
          <img src="/src/assets/logos/logo.png" alt="Govinda Go Logo" className="h-14 lg:h-16 object-contain rounded-md" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.path}
              className={cn(
                "text-sm font-semibold hover:text-[#F4B400] transition-colors relative group",
                isScrolled ? "text-[#0A0A0A]" : "text-white"
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F4B400] transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+919160869607" className={cn(
            "flex items-center gap-2 font-bold text-sm",
            isScrolled ? "text-[#0A0A0A]" : "text-white"
          )}>
            <Phone className="w-4 h-4 text-[#F4B400]" />
            +91 9160869607
          </a>
          <Button variant="primary" className="py-2.5 px-6">Book Now</Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn("lg:hidden z-50 p-2", isScrolled || mobileMenuOpen ? "text-[#0A0A0A]" : "text-white")}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 pb-6 lg:hidden"
          >
            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold text-[#0A0A0A] hover:text-[#F4B400]"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-4">
              <Button variant="secondary" className="w-full justify-center">
                <Phone className="w-4 h-4" /> Call +91 9160869607
              </Button>
              <Button variant="primary" className="w-full justify-center">Book Now</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
