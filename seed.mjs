import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const cars = [
  {
    name: 'Suzuki Access 125',
    category: 'Scooter',
    price: '350',
    fuel: 'Petrol',
    transmission: 'Automatic',
    seats: '2',
    image: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/188491/access-125-2025-right-front-three-quarter-2.jpeg?isig=0',
  },
  {
    name: 'Royal Enfield Classic 350',
    category: 'Cruiser Bike',
    price: '650',
    fuel: 'Petrol',
    transmission: 'Manual',
    seats: '2',
    image: 'https://images.91wheels.com/assets/b_images/gallery/royalenfield/bullet-350/royalenfield-bullet-350-0-1769515350.png?w=520&q=40',
  },
  {
    name: 'Renault Kwid Climber',
    category: 'Hatchback',
    price: '999',
    fuel: 'Petrol',
    transmission: 'Manual',
    seats: '5',
    image: 'https://imgd.aeplcdn.com/1056x594/n/yzpf5jb_1964930.jpg?q=80',
  },
  {
    name: 'Maruti Swift',
    category: 'Hatchback',
    price: '1499',
    fuel: 'Petrol',
    transmission: 'Manual',
    seats: '5',
    image: 'https://avgmotors.co.in/wp-content/uploads/2022/03/Pearl-Arctic-White-2-876x535.png'
  },
  {
    name: 'Maruti Baleno',
    category: 'Premium Hatchback',
    price: '1599',
    fuel: 'Petrol',
    transmission: 'Manual',
    seats: '5',
    image: 'https://imgd.aeplcdn.com/1920x1080/n/cw/ec/102663/baleno-exterior-right-front-three-quarter-69.png?isig=0&q=80&q=80'
  },
  {
    name: 'Skoda Kushaq',
    category: 'SUV',
    price: '1899',
    fuel: 'Petrol',
    transmission: 'Manual',
    seats: '5',
    image: '/111.jpeg',
  },
  {
    name: 'Hyundai Verna',
    category: 'Luxury Sedan',
    price: '2199',
    fuel: 'Petrol',
    transmission: 'Automatic',
    seats: '5',
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/204398/verna-exterior-right-front-three-quarter.png?isig=0&q=80'
  },
  {
    name: 'Hyundai Creta',
    category: 'Premium SUV',
    price: '2499',
    fuel: 'Petrol',
    transmission: 'Automatic',
    seats: '5',
    image: 'https://img.gaadicdn.com/images/car-images/large/Hyundai/Creta/11439/1777531540562/Atlas-White_d8dfe5.jpg'
  },
  {
    name: 'Toyota Innova',
    category: 'Premium MPV',
    price: '3499',
    fuel: 'Diesel',
    transmission: 'Manual',
    seats: '7',
    image: 'https://img.pcauto.com/model/images/touPic/my/Toyota-Innova-Zenix_4725.png',
  }
];

async function main() {
  console.log('Seeding database with previous cars...');
  
  for (const car of cars) {
    // Break "Renault Kwid Climber" into make: "Renault", model: "Kwid Climber"
    const nameParts = car.name.split(' ');
    const make = nameParts[0];
    const model = nameParts.slice(1).join(' ') || 'Unknown';

    // Build the features array that our new UI expects [Fuel, Transmission, Seats]
    const featuresArray = [car.fuel, car.transmission, `${car.seats} Seats`];

    await prisma.vehicle.create({
      data: {
        make: make,
        model: model,
        year: 2024, // default year since old data didn't have one
        price: parseFloat(car.price),
        type: car.category,
        imageUrl: car.image,
        features: JSON.stringify(featuresArray),
        isAvailable: true,
      }
    });
  }

  console.log('Seeding complete!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
