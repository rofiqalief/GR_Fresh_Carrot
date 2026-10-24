// # [PENANDA FUNGSI: Bottom Navigation Bar Mobile 6 Menu Sesuai UI Gambar]
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Info, Package, RefreshCw, Image, PhoneCall } from 'lucide-react';

export default function BottomNav() {
  const pathname = usePathname();

  // # [PENANDA FUNGSI: Definisi 6 Halaman Navigasi]
  const navItems = [
    { label: 'Beranda', href: '/', icon: Home },
    { label: 'Tentang Kami', href: '/tentang-kami', icon: Info },
    { label: 'Produk', href: '/produk', icon: Package },
    { label: 'Proses Kami', href: '/proses', icon: RefreshCw },
    { label: 'Galeri', href: '/galeri', icon: Image },
    { label: 'Kontak', href: '/kontak', icon: PhoneCall },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-md mx-auto grid grid-cols-6 py-1 px-0.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1.5 px-0.5 text-[9px] font-medium transition-colors ${
                isActive
                  ? 'text-emerald-600 font-bold'
                  : 'text-gray-500 hover:text-emerald-500'
              }`}
            >
              <Icon className={`w-4 h-4 mb-0.5 ${isActive ? 'text-emerald-600' : 'text-gray-400'}`} />
              <span className="truncate w-full text-center leading-tight">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}