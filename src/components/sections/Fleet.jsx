import React from 'react';

import SectionHeading from '../ui/SectionHeading';
import CarCard from '../ui/CarCard';

export default function Fleet({ vehicles = [] }) {
  // Only show available vehicles
  const availableVehicles = vehicles.filter(v => v.isAvailable);

  return (
    <section id="fleet" className="py-24 bg-[#F9FAFB]">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Our Premium Fleet"
          subtitle="Choose Your Ride"
          centered
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {availableVehicles.length === 0 ? (
            <div className="col-span-full text-gray-500 py-12 text-center">
              No vehicles available at the moment.
            </div>
          ) : (
            availableVehicles.map((vehicle) => {
              // Map DB fields to what CarCard expects
              let parsedFeatures = [];
              try {
                parsedFeatures = JSON.parse(vehicle.features);
              } catch (e) {
                parsedFeatures = vehicle.features ? vehicle.features.split(',') : [];
              }

              const carProps = {
                id: vehicle.id,
                name: `${vehicle.make} ${vehicle.model}`,
                category: vehicle.type,
                price: vehicle.price,
                fuel: parsedFeatures[0] || 'Petrol', // Fallbacks since we removed these from DB
                transmission: parsedFeatures[1] || 'Manual',
                seats: parsedFeatures[2] || '5',
                image: vehicle.imageUrl || 'https://via.placeholder.com/400x250?text=No+Image',
                tag: vehicle.year >= 2023 ? 'New' : null
              };

              return (
                <div key={vehicle.id} className="w-full max-w-[400px]">
                  <CarCard car={carProps} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
