import React from 'react';

import SectionHeading from '../ui/SectionHeading';
import CarCard from '../ui/CarCard';

const cars = [
  {
    id: 1,
    name: 'Hyundai Creta',
    category: 'Premium SUV',
    price: '2499',
    fuel: 'Diesel',
    transmission: 'Automatic',
    seats: '5',
    image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Creta/8667/1755765115423/front-left-side-47.jpg',
    tag: 'Popular'
  },
  {
    id: 2,
    name: 'Hyundai Verna',
    category: 'Luxury Sedan',
    price: '2199',
    fuel: 'Petrol',
    transmission: 'Automatic',
    seats: '5',
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/204398/verna-exterior-right-front-three-quarter.png?isig=0&q=80'
  },
  {
    id: 3,
    name: 'Toyota Innova',
    category: 'Premium MPV',
    price: '3499',
    fuel: 'Diesel',
    transmission: 'Manual',
    seats: '7',
    image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=1000&auto=format&fit=crop',
    tag: 'Best for Family'
  },
  {
    id: 4,
    name: 'Maruti Swift',
    category: 'Hatchback',
    price: '1499',
    fuel: 'Petrol',
    transmission: 'Manual',
    seats: '5',
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'Royal Enfield',
    category: 'Cruiser Bike',
    price: '999',
    fuel: 'Petrol',
    transmission: 'Manual',
    seats: '2',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1000&auto=format&fit=crop'
  }
];

export default function Fleet() {
  return (
    <section id="fleet" className="py-24 bg-[#F9FAFB]">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Our Premium Fleet"
          subtitle="Choose Your Ride"
          centered
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {cars.map((car) => (
            <div key={car.id} className="w-full max-w-[400px]">
              <CarCard car={car} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
