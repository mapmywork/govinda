'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';

export default function AddVehicleForm({ initialData, onSuccess }) {
  // Parse features back to string if they are an array in initialData
  let defaultFeatures = '';
  if (initialData?.features) {
    try {
      defaultFeatures = JSON.parse(initialData.features).join(', ');
    } catch {
      defaultFeatures = initialData.features;
    }
  }

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialData ? {
      ...initialData,
      features: defaultFeatures,
      isAvailable: String(initialData.isAvailable)
    } : { isAvailable: 'true' }
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setMessage('');
    try {
      const payload = {
        ...data,
        features: data.features.split(',').map(f => f.trim()).filter(f => f),
        year: parseInt(data.year),
        price: parseFloat(data.price),
        isAvailable: data.isAvailable === 'true'
      };

      const url = initialData ? `/api/vehicles/${initialData.id}` : '/api/vehicles';
      const method = initialData ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error('Failed to save vehicle');

      if (onSuccess) {
        onSuccess();
      } else {
        setMessage(initialData ? 'Vehicle updated successfully!' : 'Vehicle added successfully!');
      }
    } catch (error) {
      setMessage(error.message || 'An error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-[#0A0A0A]">
        {initialData ? 'Edit Vehicle' : 'Add New Vehicle'}
      </h2>
      
      {message && (
        <div className={`p-4 mb-6 rounded-lg ${message.includes('success') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Make</label>
            <input 
              {...register('make', { required: true })} 
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F4B400] transition-all"
              placeholder="e.g. Toyota"
            />
            {errors.make && <span className="text-red-500 text-sm mt-1">Required</span>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Model</label>
            <input 
              {...register('model', { required: true })} 
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F4B400] transition-all"
              placeholder="e.g. Camry"
            />
            {errors.model && <span className="text-red-500 text-sm mt-1">Required</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
            <input 
              type="number"
              {...register('year', { required: true, min: 1900, max: 2100 })} 
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F4B400] transition-all"
              placeholder="2024"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Price per day ($)</label>
            <input 
              type="number"
              step="0.01"
              {...register('price', { required: true, min: 0 })} 
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F4B400] transition-all"
              placeholder="45.00"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
            <select 
              {...register('type', { required: true })}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F4B400] transition-all"
            >
              <option value="">Select type...</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Luxury">Luxury</option>
              <option value="Sports">Sports</option>
              <option value="Electric">Electric</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
            <input 
              {...register('imageUrl')} 
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F4B400] transition-all"
              placeholder="https://example.com/car.jpg"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Features (comma separated)</label>
          <input 
            {...register('features', { required: true })} 
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F4B400] transition-all"
            placeholder="Bluetooth, Backup Camera, Leather Seats"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
          <select 
            {...register('isAvailable')}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F4B400] transition-all"
          >
            <option value="true">Available</option>
            <option value="false">Unavailable</option>
          </select>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-[#0A0A0A] text-white rounded-xl px-4 py-3 font-semibold hover:bg-gray-800 transition-colors flex justify-center items-center gap-2 mt-6"
        >
          {isSubmitting ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            null
          )}
          <span>{isSubmitting ? 'Saving...' : (initialData ? 'Update Vehicle' : 'Add Vehicle')}</span>
        </button>
      </form>
    </div>
  );
}
