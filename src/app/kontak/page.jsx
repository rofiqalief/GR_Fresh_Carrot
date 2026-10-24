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
    const text = `Halo ${company.name},\nSaya berminat mengajukan penawaran:\nPerusahaan: ${formData.companyName}\nKontak: ${formData.contact}\nEmail: ${formData.email}\nProduk: ${formData.product}\nJumlah: ${formData.quantity}\nFrekuensi: ${formData.frequency}\nCatatan: ${formData.notes}`;
    window.open(`https://wa.me/${company.phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 md:p-8 space-y-6 bg-white rounded-3xl shadow-sm border border-gray-100 my-8">
      {/* [PENANDA FUNGSI: Header Kontak] */}
      <div className="border-b border-gray-100 pb-4">
        <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-[11px] font-semibold px-3 py-1 rounded-full border border-emerald-100">
          <span>✔</span> Kontak & Minta Penawaran
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-2">
          Terhubung dengan Tim Kami
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 mt-1">
          Hubungi kami atau kirim permintaan penawaran instan untuk kebutuhan bisnis Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* [PENANDA FUNGSI: Info Kontak Perusahaan - Kolom Kiri] */}
        <div className="md:col-span-1 bg-gray-50 rounded-2xl p-5 border border-gray-100 space-y-4 text-xs text-gray-700">
          <h3 className="font-bold text-gray-900 text-sm border-b border-gray-200 pb-2">Informasi Kontak</h3>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <span className="font-medium">{company.phone}</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <span className="font-medium truncate">{company.email}</span>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
              <MapPin className="w-4 h-4" />
            </div>
            <span className="font-medium leading-relaxed">{company.address}</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <span className="font-medium">{company.operating_hours || 'Senin - Minggu: 08.00 - 17.00'}</span>
          </div>
        </div>

        {/* [PENANDA FUNGSI: Form Minta Penawaran B2B - Kolom Kanan] */}
        <div className="md:col-span-2 bg-white rounded-2xl p-6 border border-gray-100 shadow-xs space-y-4">
          <h3 className="font-bold text-gray-900 text-base">Minta Penawaran B2B</h3>
          
          <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-gray-700 mb-1">Nama Perusahaan*</label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-emerald-600 outline-none text-xs"
                  placeholder="Contoh: PT Kuliner Nusantara"
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-gray-700 mb-1">Kontak (WhatsApp)*</label>
                <input
                  type="tel"
                  required
                  className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-emerald-600 outline-none text-xs"
                  placeholder="0812xxxxxxx"
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-gray-700 mb-1">Email*</label>
                <input
                  type="email"
                  required
                  className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-emerald-600 outline-none text-xs"
                  placeholder="email@perusahaan.com"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-gray-700 mb-1">Produk yang Dibutuhkan*</label>
                <select
                  className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-emerald-600 outline-none bg-white text-xs font-medium"
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                >
                  <option>Pilih Produk</option>
                  <option>Wortel Grade A (Premium)</option>
                  <option>Wortel Grade B (Standar)</option>
                  <option>Paket Grosir / Industri</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-gray-700 mb-1">Jumlah Kebutuhan*</label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-emerald-600 outline-none text-xs"
                  placeholder="Contoh: 100 kg / Bulan"
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-gray-700 mb-1">Frekuensi Kebutuhan*</label>
                <select
                  className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-emerald-600 outline-none bg-white text-xs font-medium"
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
              <label className="block text-[11px] font-semibold text-gray-700 mb-1">Catatan Tambahan</label>
              <textarea
                rows="3"
                className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-emerald-600 outline-none text-xs"
                placeholder="Tuliskan spesifikasi khusus atau pertanyaan tambahan..."
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              Kirim Permintaan via WhatsApp
            </button>
          </form>
        </div>
      </div>

      {/* [PENANDA FUNGSI: Analitik Ringkasan Perusahaan] 
          Catatan: Menggunakan akses properti primitif (misal: .visitors atau fallback string/number) 
          untuk mencegah error objek React child.
      */}
      {analytics && (
        <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 space-y-3">
          <h4 className="font-bold text-gray-900 text-xs uppercase tracking-wider">Ringkasan Performa & Statistik</h4>
          <div className="grid grid-cols-3 gap-3 text-center text-[10px]">
            <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-2xs">
              <div className="text-gray-500 font-medium">Pengunjung (30 Hari)</div>
              <div className="font-extrabold text-emerald-800 text-base mt-1">
                {typeof analytics.visitors === 'object' ? (analytics.visitors?.count || '1,250+') : (analytics.visitors || '1,250+')}
              </div>
            </div>
            <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-2xs">
              <div className="text-gray-500 font-medium">Permintaan Penawaran</div>
              <div className="font-extrabold text-emerald-800 text-base mt-1">
                {typeof analytics.inquiries === 'object' ? (analytics.inquiries?.count || '45+') : (analytics.inquiries || '45+')}
              </div>
            </div>
            <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-2xs">
              <div className="text-gray-500 font-medium">WhatsApp Clicks</div>
              <div className="font-extrabold text-emerald-800 text-base mt-1">
                {typeof analytics.waClicks === 'object' ? (analytics.waClicks?.count || '320+') : (analytics.waClicks || '320+')}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}