'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Loader2, Save } from 'lucide-react';

export default function SettingsClient({ initialSettings }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      whatsappNumber: initialSettings?.whatsappNumber || '',
      seoTitle: initialSettings?.seoTitle || '',
      seoDescription: initialSettings?.seoDescription || '',
    }
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setMessage('');
    
    try {
      const res = await fetch('/api/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!res.ok) throw new Error('Failed to save settings');
      
      setMessage('Settings saved successfully!');
    } catch (error) {
      setMessage('An error occurred while saving.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0A0A0A]">Global Settings</h1>
        <p className="text-gray-500 mt-1">Manage global configuration for your website.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-6 max-w-3xl">
        {message && (
          <div className={`p-4 mb-6 rounded-lg ${message.includes('success') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          <div className="border-b border-gray-100 pb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp Number</label>
              <input 
                {...register('whatsappNumber')}
                placeholder="+919876543210"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F4B400] transition-all"
              />
              <p className="text-xs text-gray-500 mt-1">Include country code (e.g. +91). This updates all WhatsApp buttons on the site.</p>
            </div>
          </div>

          <div className="pt-2">
            <h3 className="text-lg font-bold text-gray-900 mb-4">SEO Metadata</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">SEO Title</label>
                <input 
                  {...register('seoTitle')}
                  placeholder="Govina Go Self - Premium Car Rentals"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F4B400] transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">SEO Description</label>
                <textarea 
                  {...register('seoDescription')}
                  rows={3}
                  placeholder="Experience the joy of driving well-maintained self-drive cars in Tirupati..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F4B400] transition-all"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-[#0A0A0A] text-white rounded-xl px-6 py-3 font-semibold hover:bg-gray-800 transition-colors flex justify-center items-center gap-2"
            >
              {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
              <span>{isSubmitting ? 'Saving...' : 'Save Settings'}</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
