import React from 'react';
import { prisma as prismaClient } from '../../../lib/prisma';
import { Car, CheckCircle, Clock } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function DashboardHome() {
  const vehicles = await prismaClient.vehicle.findMany({
    orderBy: { createdAt: 'desc' }
  });

  const totalVehicles = vehicles.length;
  const availableVehicles = vehicles.filter(v => v.isAvailable).length;
  const recentVehicles = vehicles.slice(0, 5); // top 5 recent

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0A0A0A]">Dashboard Overview</h1>
        <p className="text-gray-500 mt-1">Welcome back, Admin. Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
            <Car className="w-7 h-7" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total Fleet</p>
            <h3 className="text-2xl font-bold text-gray-900">{totalVehicles}</h3>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
            <CheckCircle className="w-7 h-7" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Available</p>
            <h3 className="text-2xl font-bold text-gray-900">{availableVehicles}</h3>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-14 h-14 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center">
            <Clock className="w-7 h-7" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Rented Out</p>
            <h3 className="text-2xl font-bold text-gray-900">{totalVehicles - availableVehicles}</h3>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-bold text-[#0A0A0A]">Recent Additions</h2>
          <Link href="/admin/fleet" className="text-sm font-medium text-[#F4B400] hover:underline">
            View All
          </Link>
        </div>
        <div className="divide-y divide-gray-100">
          {recentVehicles.length === 0 ? (
            <div className="p-6 text-center text-gray-500">No vehicles in the fleet yet.</div>
          ) : (
            recentVehicles.map((vehicle) => (
              <div key={vehicle.id} className="p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
                {vehicle.imageUrl ? (
                  <img src={vehicle.imageUrl} alt={vehicle.model} className="w-16 h-12 object-cover rounded-lg" />
                ) : (
                  <div className="w-16 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xs text-gray-400">
                    No Image
                  </div>
                )}
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{vehicle.make} {vehicle.model}</h4>
                  <p className="text-sm text-gray-500">{vehicle.type} • {vehicle.year}</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-[#0A0A0A]">${vehicle.price}/day</div>
                  <div className={`text-xs font-medium ${vehicle.isAvailable ? 'text-green-600' : 'text-red-600'}`}>
                    {vehicle.isAvailable ? 'Available' : 'Unavailable'}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
