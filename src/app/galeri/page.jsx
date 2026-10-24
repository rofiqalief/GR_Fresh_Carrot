// [PENANDA FUNGSI: Halaman Galeri Foto Kebun & Kegiatan - Sesuai Kolom 5 Gambar]
'use client';

import { useState } from 'react';
import Image from 'next/image';
import db from '@/data/database.json';

export default function GalleryPage() {
  const { gallery } = db;
  const [activeTab, setActiveTab] = useState('Semua');

  const categories = ['Semua', 'Kebun', 'Proses', 'Produk', 'Pengiriman'];

  const filteredGallery = gallery.filter((item) => {
    if (activeTab === 'Semua') return true;
    return item.category.toLowerCase() === activeTab.toLowerCase();
  });

  return (
    <div className="p-4 space-y-4">
      {/* [PENANDA FUNGSI: Header Halaman Galeri] */}
      <div>
        <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-xs uppercase">
          <span>✔</span> Galeri
        </div>
        <p className="text-xs text-gray-600 mt-1">
          Dokumentasi kegiatan kami di kebun, proses, hingga pengiriman produk.
        </p>
      </div>

      {/* [PENANDA FUNGSI: Filter Kategori Galeri] */}
      <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`text-xs px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-colors ${
              activeTab === cat
                ? 'bg-emerald-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* [PENANDA FUNGSI: Grid Foto Galeri 3 Kolom] */}
      <div className="grid grid-cols-3 gap-2">
        {filteredGallery.map((item) => (
          /* [INPUT GAMBAR: File foto sesuai id di database.json] */
          <div key={item.id} className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}