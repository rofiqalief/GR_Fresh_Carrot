// [PENANDA FUNGSI: Halaman Kontak & Form B2B - Sesuai Kolom 6 Gambar]
'use client';

import { useState } from 'react';
import db from '@/data/database.json';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const { company, analytics } = db;
  const [formData, setFormData] = useState({
    companyName: '',
    contact: '',
    email: '',
    product: 'Pilih Produk',
    quantity: '',
    frequency: 'Pilih Frekuensi',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Halo ${company.name},\nSaya berminat mengajukan penawaran:\n- Perusahaan: ${formData.companyName}\n- Kontak: ${formData.contact}\n- Email: ${formData.email}\n- Produk: ${formData.product}\n- Jumlah: ${formData.quantity}\n- Frekuensi: ${formData.frequency}\n- Catatan: ${formData.notes}`;
    window.open(`https://wa.me/${company.phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="p-4 space-y-5">
      {/* [PENANDA FUNGSI: Header Kontak] */}
      <div>
        <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-xs uppercase">
          <span>✔</span> Kontak & Minta Penawaran
        </div>
        <p className="text-xs text-gray-600 mt-1">
          Hubungi kami atau kirim permintaan penawaran untuk kebutuhan bisnis Anda.
        </p>
      </div>

      {/* [PENANDA FUNGSI: Info Kontak Perusahaan] */}
      <div className="bg-gray-50 rounded-xl p-3 border border-gray-100 space-y-2 text-xs text-gray-700">
        <h3 className="font-bold text-gray-900 text-xs">Hubungi Kami</h3>
        <div className="flex items-center gap-2">
          <Phone className="w-3.5 h-3.5 text-emerald-600" />
          <span>{company.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-3.5 h-3.5 text-emerald-600" />
          <span>{company.email}</span>
        </div>
        <div className="flex items-start gap-2">
          <MapPin className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <span>{company.address}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-3.5 h-3.5 text-emerald-600" />
          <span>{company.operating_hours}</span>
        </div>
      </div>

      {/* [PENANDA FUNGSI: Form Minta Penawaran B2B] */}
      <div className="space-y-3">
        <h3 className="font-bold text-gray-900 text-xs">Minta Penawaran B2B</h3>
        <form onSubmit={handleSubmit} className="space-y-2.5 text-xs">
          <div>
            <label className="block text-[11px] font-medium text-gray-700 mb-0.5">Nama Perusahaan*</label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-1 focus:ring-emerald-500 outline-none"
              placeholder="Contoh: PT Kuliner Nusantara"
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-gray-700 mb-0.5">Kontak (WhatsApp)*</label>
            <input
              type="tel"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-1 focus:ring-emerald-500 outline-none"
              placeholder="0812xxxxxxx"
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-gray-700 mb-0.5">Email*</label>
            <input
              type="email"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-1 focus:ring-emerald-500 outline-none"
              placeholder="email@perusahaan.com"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-gray-700 mb-0.5">Produk yang Dibutuhkan*</label>
            <select
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-1 focus:ring-emerald-500 outline-none bg-white"
              onChange={(e) => setFormData({ ...formData, product: e.target.value })}
            >
              <option>Pilih Produk</option>
              <option>Wortel Fresh</option>
              <option>Wortel Premium</option>
              <option>Paket Grosir</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-[11px] font-medium text-gray-700 mb-0.5">Jumlah Kebutuhan*</label>
              <input
                type="text"
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-1 focus:ring-emerald-500 outline-none"
                placeholder="Contoh: 100 kg"
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-[11px] font-medium text-gray-700 mb-0.5">Frekuensi Kebutuhan*</label>
              <select
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-1 focus:ring-emerald-500 outline-none bg-white"
                onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
              >
                <option>Pilih Frekuensi</option>
                <option>Sekali Pesan</option>
                <option>Mingguan</option>
                <option>Bulanan</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-medium text-gray-700 mb-0.5">Catatan Tambahan</label>
            <textarea
              rows="2"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-1 focus:ring-emerald-500 outline-none"
              placeholder="Tuliskan spesifikasi khusus atau pertanyaan tambahan..."
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Kirim Permintaan via WhatsApp
          </button>
        </form>
      </div>

      {/* [PENANDA FUNGSI: Analitik Ringkasan Perusahaan] */}
      <div className="bg-gray-50 rounded-xl p-3 border border-gray-100 space-y-2">
        <h4 className="font-bold text-gray-900 text-xs">Analitik Dasar (Ringkasan)</h4>
        <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
          <div className="bg-white p-2 rounded-lg border border-gray-100">
            <div className="text-gray-500">Pengunjung (30 Hari)</div>
            <div className="font-bold text-gray-900 text-sm mt-0.5">{analytics.visitors}</div>
          </div>
          <div className="bg-white p-2 rounded-lg border border-gray-100">
            <div className="text-gray-500">Permintaan Penawaran</div>
            <div className="font-bold text-gray-900 text-sm mt-0.5">{analytics.inquiries}</div>
          </div>
          <div className="bg-white p-2 rounded-lg border border-gray-100">
            <div className="text-gray-500">WhatsApp Clicks</div>
            <div className="font-bold text-gray-900 text-sm mt-0.5">{analytics.waClicks}</div>
          </div>
        </div>
      </div>
    </div>
  );
}