'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Edit2, Trash2, X } from 'lucide-react';
import AddVehicleForm from '../AddVehicleForm';

export default function FleetClient({ initialVehicles }) {
  const [vehicles, setVehicles] = useState(initialVehicles);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState(null);
  const router = useRouter();

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this vehicle?')) {
      const res = await fetch(`/api/vehicles/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setVehicles(vehicles.filter(v => v.id !== id));
        router.refresh();
      }
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#0A0A0A]">Fleet Inventory</h1>
          <p className="text-gray-500 mt-1">Manage your vehicles, prices, and availability.</p>
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-[#0A0A0A] text-white px-4 py-2 rounded-xl font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors"
        >
          <Plus className="w-5 h-5" /> Add Vehicle
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <th className="p-4 font-semibold text-gray-600">Vehicle</th>
                <th className="p-4 font-semibold text-gray-600">Type</th>
                <th className="p-4 font-semibold text-gray-600">Price / Day</th>
                <th className="p-4 font-semibold text-gray-600">Status</th>
                <th className="p-4 font-semibold text-gray-600 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {vehicles.length === 0 ? (
                <tr>
                  <td colSpan="5" className="p-8 text-center text-gray-500">No vehicles found.</td>
                </tr>
              ) : (
                vehicles.map(vehicle => (
                  <tr key={vehicle.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 flex items-center gap-4">
                      {vehicle.imageUrl ? (
                        <img src={vehicle.imageUrl} alt={vehicle.model} className="w-16 h-12 object-cover rounded-lg border border-gray-100" />
                      ) : (
                        <div className="w-16 h-12 bg-gray-100 rounded-lg border border-gray-200" />
                      )}
                      <div>
                        <div className="font-bold text-gray-900">{vehicle.make} {vehicle.model}</div>
                        <div className="text-xs text-gray-500">Year: {vehicle.year}</div>
                      </div>
                    </td>
                    <td className="p-4 text-gray-600">{vehicle.type}</td>
                    <td className="p-4 font-medium text-gray-900">${vehicle.price}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${vehicle.isAvailable ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {vehicle.isAvailable ? 'Available' : 'Unavailable'}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button 
                          onClick={() => setEditingVehicle(vehicle)}
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(vehicle.id)}
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 relative">
            <button onClick={() => setIsAddModalOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-gray-900">
              <X className="w-6 h-6" />
            </button>
            <AddVehicleForm onSuccess={() => { setIsAddModalOpen(false); router.refresh(); }} />
          </div>
        </div>
      )}

      {/* Edit Modal - Reusing AddForm for simplicity but prefilling data */}
      {editingVehicle && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 relative">
            <button onClick={() => setEditingVehicle(null)} className="absolute top-6 right-6 text-gray-400 hover:text-gray-900">
              <X className="w-6 h-6" />
            </button>
            <AddVehicleForm 
              initialData={editingVehicle} 
              onSuccess={() => { setEditingVehicle(null); router.refresh(); }} 
            />
          </div>
        </div>
      )}
    </div>
  );
}
