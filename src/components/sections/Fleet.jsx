import React from 'react';

import SectionHeading from '../ui/SectionHeading';
import CarCard from '../ui/CarCard';

const cars = [
  {
    id: 1,
    name: 'Renault Kwid Climber',
    category: 'Hatchback',
    price: '999',
    fuel: 'Petrol',
    transmission: 'Manual',
    seats: '5',
    image: 'https://imgd.aeplcdn.com/1056x594/n/yzpf5jb_1964930.jpg?q=80',
    tag: 'Budget Friendly'
  },
  {
    id: 2,
    name: 'Maruti Swift',
    category: 'Hatchback',
    price: '1499',
    fuel: 'Petrol',
    transmission: 'Manual',
    seats: '5',
    image: 'https://avgmotors.co.in/wp-content/uploads/2022/03/Pearl-Arctic-White-2-876x535.png'
  },
  {
    id: 3,
    name: 'Maruti Baleno',
    category: 'Premium Hatchback',
    price: '1599',
    fuel: 'Petrol',
    transmission: 'Manual',
    seats: '5',
    image: 'https://imgd.aeplcdn.com/1920x1080/n/cw/ec/102663/baleno-exterior-right-front-three-quarter-69.png?isig=0&q=80&q=80'
  },
  {
    id: 4,
    name: 'Skoda Kushaq',
    category: 'SUV',
    price: '1899',
    fuel: 'Petrol',
    transmission: 'Manual',
    seats: '5',
    image: '/111.jpeg',
    tag: 'Popular'
  },
  {
    id: 5,
    name: 'Hyundai Verna',
    category: 'Luxury Sedan',
    price: '2199',
    fuel: 'Petrol',
    transmission: 'Automatic',
    seats: '5',
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/204398/verna-exterior-right-front-three-quarter.png?isig=0&q=80'
  },
  {
    id: 6,
    name: 'Hyundai Creta',
    category: 'Premium SUV',
    price: '2499',
    fuel: 'Petrol',
    transmission: 'Automatic',
    seats: '5',
    image: 'https://img.gaadicdn.com/images/car-images/large/Hyundai/Creta/11439/1777531540562/Atlas-White_d8dfe5.jpg'
  },
  {
    id: 7,
    name: 'Toyota Innova',
    category: 'Premium MPV',
    price: '3499',
    fuel: 'Diesel',
    transmission: 'Manual',
    seats: '7',
    image: 'https://img.pcauto.com/model/images/touPic/my/Toyota-Innova-Zenix_4725.png',
    tag: 'Best for Family'
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
