import Home from '../pages/Home';
import { prisma as prismaClient } from '../lib/prisma';

export default async function Page() {
  const setting = await prismaClient.setting.findUnique({
    where: { key: 'whatsappNumber' }
  });
  const whatsappNumber = setting?.value || '+917997869389'; // Default fallback

  const vehicles = await prismaClient.vehicle.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return <Home whatsappNumber={whatsappNumber} vehicles={vehicles} />;
}
