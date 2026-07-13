import React from 'react';
import { prisma as prismaClient } from '../../../../lib/prisma';
import FleetClient from './FleetClient';

export const dynamic = 'force-dynamic';

export default async function FleetPage() {
  const vehicles = await prismaClient.vehicle.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return <FleetClient initialVehicles={vehicles} />;
}
