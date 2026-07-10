import React from 'react';
import { Wrench, Banknote, CalendarClock, MapPin, Headphones } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import FeatureCard from '../ui/FeatureCard';

const features = [
  {
    icon: Wrench,
    title: 'Well Maintained Cars',
    description: 'Regular servicing and strict quality checks ensure every ride is smooth and safe.'
  },
  {
    icon: Banknote,
    title: 'Affordable Pricing',
    description: 'Transparent pricing with absolutely zero hidden charges. What you see is what you pay.'
  },
  {
    icon: CalendarClock,
    title: 'Flexible Booking',
    description: 'Rent by the hour, day, week, or month. We adapt to your schedule.'
  },
  {
    icon: MapPin,
    title: 'Pickup Anywhere',
    description: 'Get your car delivered to your doorstep, airport, railway station, or bus stand.'
  },
  {
    icon: Headphones,
    title: '24x7 Customer Support',
    description: 'Our dedicated team is available round the clock to assist you with any queries.'
  }
];

export default function Features() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Why Choose Govinda Go" 
          subtitle="The Premium Difference"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-16">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
