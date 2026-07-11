'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutDashboard, Car, Settings, LogOut } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  };

  const menuItems = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Fleet Inventory', path: '/admin/fleet', icon: Car },
    { name: 'Global Settings', path: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col fixed left-0 top-0">
      <div className="p-6 border-b border-gray-100 flex justify-center items-center bg-[#0A0A0A]">
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="h-10 object-contain" />
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.path || (item.path !== '/admin' && pathname.startsWith(item.path));
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium ${isActive
                  ? 'bg-[#F4B400]/10 text-[#F4B400]'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
            >
              <Icon className="w-5 h-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-600 hover:bg-red-50 transition-colors font-medium text-left"
        >
          <LogOut className="w-5 h-5" />
          Log Out
        </button>
      </div>
    </div>
  );
}
