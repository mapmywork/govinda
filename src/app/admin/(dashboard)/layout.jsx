import React from 'react';
import Sidebar from '../components/Sidebar';

export const metadata = {
  title: 'Admin Dashboard | Govina Go Self',
};

export default function AdminDashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex font-sans">
      <Sidebar />
      <div className="flex-1 ml-64 p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
