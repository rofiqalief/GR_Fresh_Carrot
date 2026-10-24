'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { Bebas_Neue, Plus_Jakarta_Sans } from 'next/font/google';
import { ShieldCheck, Truck, Sprout, Target, Heart, Leaf, Package, Eye, Zap, Sparkles, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import db from '@/data/database.json';

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export default function HomePage() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedStep, setSelectedStep] = useState(null);
  const [maxUnlocked, setMaxUnlocked] = useState(0);
  const [isSpinning, setIsSpinning] = useState(null);
  const { company } = db;

  const products = [
    { 
      name: "Wortel Grade A (Premium)", 
      tag: "Kualitas Utama", 
      desc: "Ukuran seragam, mulus, segar, dan sangat cocok untuk kebutuhan supermarket, restoran, hotel, serta pasar modern dengan standar penampilan terbaik.",
      image: "/images/mentahanproduk.jpg",
      packaging: "Karung / Box Higienis (10kg - 50kg)",
      isAvailable: true // 👈 Ubah jadi false kalau hari ini stoknya kosong/habis
    },
    { 
      name: "Wortel Grade B (Standar)", 
      tag: "Kualitas Reguler", 
      desc: "Kualitas segar dan bergizi tinggi dengan ukuran bervariasi, sangat pas untuk kebutuhan pasar tradisional, industri kuliner harian, maupun pengolahan makanan.",
      image: "/images/mentahanproduk.jpg",
      packaging: "Karung Standar Industri",
      isAvailable: true // 👈 Ubah jadi false kalau hari ini stoknya kosong/habis
    },
  ];

  const benefits = [
    { title: "Kaya Beta-Karoten & Vitamin A", desc: "Mendukung kesehatan mata secara optimal dan menjaga sistem kekebalan tubuh tetap prima setiap hari melalui pasokan nutrisi alami berkualitas tinggi.", icon: Eye },
    { title: "Menjaga Kesehatan Jantung", desc: "Kandungan antioksidan yang kaya serta kalium alami berperan aktif dalam menjaga tekanan darah agar tetap stabil sekaligus melancarkan sirkulasi darah untuk kesehatan jantung.", icon: Heart },
    { title: "Serat Tinggi untuk Pencernaan", desc: "Kandungan serat pangan yang tinggi membantu menjaga kelancaran fungsi pencernaan harian sekaligus mendukung proses metabolisme tubuh agar tetap aktif, dan seimbang.", icon: Zap },
    { title: "Nutrisi Alami Tanpa Pengawet", desc: "Dipanen langsung dari kebun subur di Muntilan dengan kesegaran yang terjaga utuh.", icon: ShieldCheck },
  ];

  const steps = [
    { num: "01", title: "Pemanenan", desc: "Wortel dipetik langsung dari kebun pada waktu yang tepat dengan tingkat kematangan optimal." },
    { num: "02", title: "Sortasi & Pembersihan", desc: "Dilakukan pemilihan ukuran, pembersihan dari sisa tanah, dan sortir kualitas secara teliti." },
    { num: "03", title: "Grading & Packing", desc: "Wortel dikelompokkan ke dalam Grade A & B, lalu dikemas rapi menjaga kesegarannya." },
    { num: "04", title: "Distribusi", desc: "Pengiriman cepat dan aman langsung menuju tempat atau gudang mitra langganan." },
  ];

  return (
    <div className="w-full flex flex-col bg-white">
      <Navbar />

      {/* ================= SECTION 1: BERANDA (HERO) ================= */}
      <section 
        id="beranda"
        className="relative w-full h-screen flex flex-col justify-between overflow-hidden bg-cover bg-center bg-no-repeat pt-16 md:pt-20"
        style={{ backgroundImage: `url('/images/OriginalLandingPage.jpeg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/85 -z-0"></div>

        <div className="relative z-10 my-auto px-6 sm:px-12 md:px-16 text-left md:text-center max-w-5xl mx-auto space-y-6">
          <h1 className={`${bebasNeue.className} text-5xl sm:text-7xl lg:text-9xl tracking-wide leading-none text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.95)] animate-cinematic`}>
            FRESH FROM FARM,<br />
            <span className="text-amber-400 drop-shadow-[0_8px_30px_rgba(0,0,0,0.95)]">GOOD FOR YOU.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/95 font-medium max-w-2xl mx-0 md:mx-auto leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] animate-cinematic-delayed">
            Penyedia wortel segar pilihan kualitas terbaik. Menjaga rantai pasok higienis langsung dari ladang subur pegunungan untuk kebutuhan harian maupun bisnis Anda.
          </p>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 pb-8 pt-4 bg-gradient-to-t from-black/95 via-black/40 to-transparent">
          <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-white text-xs sm:text-sm font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="text-base">🌿</span>
              <span>100% Mutu Alami</span>
            </div>
            <span className="hidden sm:inline text-white/40">|</span>
            <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="text-base">🚜</span>
              <span>Direct From Farm</span>
            </div>
            <span className="hidden sm:inline text-white/40">|</span>
            <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="text-base">🤝</span>
              <span>Kemitraan Petani</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: TENTANG KAMI (BALANCED & LEFT OVERLAP) ================= */}
      <section id="tentang-kami" className={`relative w-full min-h-screen flex items-center justify-center py-20 md:py-28 px-4 sm:px-8 md:px-12 lg:px-16 bg-gray-50/60 overflow-hidden ${plusJakarta.className}`}>
        
        {/* ================= BACKGROUND SILUET CANDI BOROBUDUR (ANTENG & MULUS) ================= */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-[0.07] transition-opacity duration-1000">
          <Image alt="Siluet Candi Borobudur" className="w-full h-full object-cover object-center scale-105" fill src="/images/CandiBorobudur.png"/>
        </div>

        <div className="relative z-10 w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* KOLOM KIRI: Abstrak Perusahaan & 3 Statistik */}
          <div className="lg:col-span-4 space-y-6 -mt-5 text-left">
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-[11px] font-semibold px-3 py-1 rounded-full border border-emerald-100">
            </div>

            <h2 className="text-3xl sm:text-4xl tracking-tight leading-tight bg-gradient-to-r from-emerald-950 via-emerald-800 to-emerald-600 bg-clip-text text-transparent" style={{ fontWeight: 900 }}>
              Dari Lereng Subur Muntilan
            </h2>

            {/* Abstrak Perusahaan (2 Paragraf) */}
            <div className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium bg-emerald-50/50 border border-emerald-100/60 p-4 rounded-2xl shadow-xs space-y-2">
              <p>
                GR Fresh Carrot merupakan usaha yang bergerak
                di bidang pertanian dan penyediaan wortel segar.
                Berbasis di Muntilan, Magelang, Jawa Tengah,
                kami menghadirkan hasil pertanian berkualitas
                yang dipanen dari lahan pertanian dan diproses
                dengan memperhatikan kebersihan, kesegaran,
                serta kualitas produk.
              </p>
              <p>
                Dengan menjaga kualitas dari proses hingga
                produk sampai kepada pelanggan, GR Fresh Carrot
                berkomitmen menyediakan wortel segar yang dapat
                diandalkan untuk berbagai kebutuhan. Produk kami
                juga telah menjangkau pelanggan di berbagai
                daerah sebagai bagian dari upaya memberikan
                hasil pertanian yang segar dan berkualitas.
              </p>
            </div>

            {/* Grid 3 Statistik Utama (Berderet ke Bawah & Ukuran Kompak) */}
            <div className="flex flex-col gap-3 pt-2">
              <div className="bg-white p-3 sm:p-4 rounded-2xl border border-gray-100 shadow-sm transition-transform duration-300 hover:scale-105 text-center w-full max-w-xs">
                <CounterStat target="100%" duration={1500} />
                <p className="text-[10px] sm:text-[11px] text-gray-500 font-semibold mt-0.5 leading-tight">Mutu Alami</p>
              </div>
              <div className="bg-white p-3 sm:p-4 rounded-2xl border border-gray-100 shadow-sm transition-transform duration-300 hover:scale-105 text-center w-full max-w-xs">
                <CounterStat target="1+ Ton" duration={1500} />
                <p className="text-[10px] sm:text-[11px] text-gray-500 font-semibold mt-0.5 leading-tight">Suplai Bulanan</p>
              </div>
              <div className="bg-white p-3 sm:p-4 rounded-2xl border border-gray-100 shadow-sm transition-transform duration-300 hover:scale-105 text-center w-full max-w-xs">
                <CounterStat target="3+ Kota" duration={1500} />
                <p className="text-[10px] sm:text-[11px] text-gray-500 font-semibold mt-0.5 leading-tight">Distribusi</p>
              </div>
            </div>
          </div>

          {/* KOLOM TENGAH: Kolase Foto Sesuai Layout Diagram */}
          <div className="lg:col-span-5 relative flex mt-20 items-center justify-center py-6">
            <div className="relative w-full max-w-lg h-[460px] sm:h-[500px] flex items-center justify-center">
              
              {/* 1. Foto Bawah (Posisi Bawah-Kiri) */}
              <div className="absolute bottom-5 -left-40 w-56 sm:w-64 h-36 sm:h-40 rounded-3xl overflow-hidden shadow-2xl border-7 border-white z-10">
                <Image
                  src="/images/rawatwortel.jpg"
                  alt="Proses Panen Wortel"
                  fill
                  className="object-cover"
                />
              </div>

              {/* 2. Foto Tengah Utama */}
              <div className="absolute top-8 left-10 sm:-left-11 md:-left-8 w-80 sm:w-[380px] md:w-[420px] h-72 sm:h-80 md:h-[350px] rounded-3xl overflow-hidden shadow-2xl border-7 border-white z-20">
                <Image
                  src="/images/nyabutwortel.jpg"
                  alt="Wortel Segar Golden Roots"
                  fill
                  className="object-cover object-[center_-80px]"
                />
              </div>

              {/* 3. Foto Atas (Posisi Atas-Kanan) */}
              <div className="absolute -top-15 right-0 w-56 sm:w-64 h-36 sm:h-40 rounded-3xl overflow-hidden shadow-2xl border-7 border-white z-30">
                <Image
                  src="/images/peti.jpg"
                  alt="Kebun Wortel Muntilan"
                  fill
                  className="object-cover"
                />
              </div>

              {/* 4. Badge Hijau Aksen */}
              <div className="absolute top-40 right-4 sm:right-8 w-36 sm:w-40 bg-emerald-900 text-white p-3.5 rounded-2xl shadow-xl z-40 flex flex-col justify-center space-y-1 border-4 border-white">
                <span className="text-xl">🌿</span>
                <p className="font-bold text-[11px] sm:text-xs tracking-tight leading-snug">Kesegaran Alami Pegunungan</p>
              </div>

            </div>
          </div>

          {/* KOLOM KANAN: Visi & Misi */}
          <div className="lg:col-span-3 space-y-6 text-left">
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl tracking-tight bg-gradient-to-r from-amber-600 via-orange-500 to-amber-500 bg-clip-text text-transparent" style={{ fontWeight: 900 }}>
                Visi 
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed bg-white border border-gray-100 p-4 rounded-2xl shadow-sm">
                Menjadi pelopor rantai pasok hortikultura segar unggulan dari daerah Magelang yang dikenal atas konsistensi mutu, kebersihan, dan kontribusi terhadap kesejahteraan petani lokal.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl tracking-tight bg-gradient-to-r from-amber-600 via-orange-500 to-amber-500 bg-clip-text text-transparent" style={{ fontWeight: 900 }}>
                Misi
              </h3>
              <div className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    Menyediakan wortel segar berkualitas tinggi secara konsisten dan tepat waktu untuk memenuhi kebutuhan pasar harian maupun mitra bisnis.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    Menerapkan standar sortasi, pembersihan, dan pengemasan yang higienis guna menjaga mutu kesegaran alami.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    Membangun kemitraan jangka panjang yang adil dan memberdayakan kesejahteraan petani lokal Muntilan.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 3: PRODUK (NATURAL LEAF BACKGROUND) ================= */}
      <section 
        id="produk" 
        className="w-full min-h-screen flex items-center justify-center py-24 px-4 sm:px-8 md:px-12 lg:px-16 relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/backgroundproduk.jpg')" }}
      >
        
        {/* Overlay Gelap Semi-Transparan (Biar Card & Teks Kontras dan Terbaca Jelas) */}
        <div className="absolute inset-0 bg-emerald-950/85 backdrop-blur-[2px]"></div>

        <div className="max-w-7xl w-full mx-auto relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            
            {/* 1. KOLOM KIRI: GRADE A */}
            <div className="bg-white/95 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl transition-all duration-500 hover:scale-[1.01] flex flex-col justify-between h-full overflow-hidden group">
              <div className="p-8 sm:p-10 space-y-4">
                <h3 className="text-3xl text-emerald-950 tracking-tight" style={{ fontWeight: 900 }}>
                  Grade A
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-justify font-medium">
                  {products[0].desc}
                </p>
              </div>

              {/* Gambar Full-Frame Tanpa Celah */}
              <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-gray-100">
                <Image
                  src={products[0].image}
                  alt="Wortel Grade A"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* 2. KOLOM TENGAH: GRADE B */}
            <div className="bg-white/95 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl transition-all duration-500 hover:scale-[1.01] flex flex-col justify-between h-full overflow-hidden group">
              
              {/* Gambar Full-Frame Tanpa Celah */}
              <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-gray-100">
                <Image
                  src={products[1].image}
                  alt="Wortel Grade B"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-8 sm:p-10 space-y-4">
                <h3 className="text-3xl text-emerald-950 tracking-tight" style={{ fontWeight: 900 }}>
                  Grade B
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-justify font-medium">
                  {products[1].desc}
                </p>
              </div>
            </div>

            {/* 3. KOLOM KANAN: JUDUL & DESKRIPSI UTAMA */}
            <div className="lg:pl-20 lg:pr-2 border-l-0 lg:border-l-2 border-emerald-500/30 space-y-6 text-left py-6 text-white">
              <h2 className="text-4xl sm:text-6xl tracking-tight leading-tight bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent" style={{ fontWeight: 900 }}>
                Produk Wortel Pilihan
              </h2>

              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-medium">
                Dipanen langsung dari lereng subur Muntilan dengan standar sortasi ketat. Kami membagi kualitas pasokan ke dalam dua grade utama untuk memastikan kebutuhan harian maupun bisnis Anda terpenuhi secara optimal dan konsisten.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= SECTION 4: MANFAAT (SMOOTH EXPANDABLE CAPSULES) ================= */}
      <section id="manfaat" className="w-full min-h-screen flex flex-col justify-center py-20 px-4 sm:px-8 md:px-12 lg:px-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl w-full mx-auto space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* KONTEN TEKS UTAMA DI KIRI (Col Span 5) */}
            <div className="lg:col-span-5 space-y-6 text-left lg:pr-6">
              <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-[11px] font-semibold px-3 py-1 rounded-full border border-emerald-100">
              </div>

              <h2 className="text-3xl sm:text-5xl tracking-tight leading-tight bg-gradient-to-r from-emerald-950 via-emerald-800 to-emerald-600 bg-clip-text text-transparent" style={{ fontWeight: 900 }}>
                Kebaikan Alami Wortel Pilihan
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                Nutrisi esensial yang langsung Anda dapatkan dari setiap gigitan wortel hasil panen terbaik lereng Muntilan. Dipelihara secara alami untuk menjaga kandungan vitamin, antioksidan, dan kesegarannya bagi kesehatan tubuh Anda.
              </p>
            </div>

            {/* KELOMPOK KARTU KAPSUL VERTIKAL DI KANAN (Col Span 7) */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {benefits.map((item, idx) => {
                const isExpanded = expandedCard === idx;
                const benefitImages = [
                  "/images/Capsule4.jpg",
                  "/images/Capsule4.jpg",
                  "/images/Capsule4.jpg",
                  "/images/Capsule4.jpg"
                ];
                
                return (
                  <div 
                    key={idx} 
                    onClick={() => setExpandedCard(isExpanded ? null : idx)}
                    className={`relative rounded-t-[120px] rounded-b-3xl overflow-hidden shadow-2xl group flex flex-col justify-end p-6 bg-emerald-950 transition-all duration-500 ease-in-out cursor-pointer ${
                      isExpanded ? 'h-[560px] sm:h-[620px]' : 'h-[480px] sm:h-[540px]'
                    } hover:-translate-y-2`}
                  >
                    {/* Background Image dengan Zoom Effect */}
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={benefitImages[idx % benefitImages.length]}
                        alt={item.title}
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-110 opacity-75"
                      />
                      {/* Gradient Overlay agar teks terbaca jelas */}
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/70 to-transparent"></div>
                    </div>

                    {/* Konten di Dalam Kartu dengan Animasi Halus */}
                    <div className="relative z-10 space-y-2 text-left pb-4">
                      <h3 className="font-extrabold text-white text-sm sm:text-base leading-snug">
                        {item.title}
                      </h3>
                      
                      {/* Wrapper Teks dengan Transisi Max-Height dan Opacity Mulus */}
                      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        isExpanded ? 'max-h-40 opacity-100' : 'max-h-[4.5em] opacity-90'
                      }`}>
                        <p className="text-[11px] text-emerald-100/90 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      {/* Indikator Tombol */}
                      <span className="inline-block text-[10px] text-emerald-300 font-semibold pt-1 underline underline-offset-2 transition-colors duration-300">
                        {isExpanded ? 'Tutup ▲' : 'Baca selengkapnya ▼'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ================= SECTION 5: PROSES KAMI (SEAMLESS FLUSH CARDS, NO GAPS) ================= */}
      <section id="proses" className="w-full min-h-screen flex flex-col justify-between pt-32 px-0 pb-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 relative overflow-hidden text-white">
        
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.15),transparent_70%)] pointer-events-none"></div>

        {/* 1. HEADER (RATA TENGAH / CENTER) */}
        <div className="max-w-3xl w-full mx-auto px-4 text-center space-y-4 relative z-10 pt-4">

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight" style={{ fontWeight: 900 }}>
            Dipetik Sepenuh Hati,<br />
            Hadir Terbaik untuk Anda
          </h2>

          <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed font-medium">
            Berawal dari benih pilihan di lahan subur Muntilan, perjalanan setiap wortel dikawal ketat penuh dedikasi agar nutrisi dan kerenyahannya sampai di tangan Anda tanpa kompromi.
          </p>
        </div>

        {/* 2. 4 CARDS EDGE-TO-EDGE TANPA CELAH SAMA SEKALI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 w-full mt-16">
          {[
            {
              step: "1",
              title: "Pemanenan",
              desc: "Wortel dipetik langsung dari kebun subur Muntilan pada waktu yang tepat dengan tingkat kematangan optimal.",
              image: "/images/panenwortel.jpg"
            },
            {
              step: "2",
              title: "Sortasi & Pembersihan",
              desc: "Dilakukan pemilihan ukuran, pembersihan dari sisa tanah, dan sortir kualitas secara teliti.",
              image: "/images/sortirwortel.jpg"
            },
            {
              step: "3",
              title: "Grading & Packing",
              desc: "Wortel dikelompokkan ke dalam Grade A & B, lalu dikemas rapi untuk menjaga kesegarannya.",
              image: "/images/packingwortel.jpg"
            },
            {
              step: "4",
              title: "Pengiriman",
              desc: "Pengiriman cepat dan aman langsung menuju tempat atau gudang mitra langganan Anda.",
              image: "/images/ngirimwortel.jpg"
            }
          ].map((item, idx) => {
            const isUnlocked = idx <= maxUnlocked; // Wajib urut
            const isSelected = selectedStep === idx;
            const isDimmed = selectedStep !== null && !isSelected;

            return (
              <div 
                key={idx}
                onClick={() => {
                  if (isUnlocked) {
                    setSelectedStep(isSelected ? null : idx);
                    if (idx === maxUnlocked && maxUnlocked < 3) {
                      setMaxUnlocked(maxUnlocked + 1);
                    }
                  }
                }}
                className={`relative h-[420px] sm:h-[480px] rounded-none overflow-hidden shadow-2xl transition-all duration-500 group flex flex-col justify-between p-8 border-0 ${
                  isUnlocked ? 'cursor-pointer' : 'cursor-not-allowed grayscale opacity-40'
                } ${
                  isSelected 
                    ? 'ring-4 ring-amber-400 inset-0 z-20 brightness-105' 
                    : isDimmed 
                      ? 'brightness-[0.4]' // Tanpa scale, murni gelap agar rapat tanpa celah
                      : isUnlocked 
                        ? 'hover:brightness-110' 
                        : 'brightness-50'
                }`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-950/30 to-emerald-950/60"></div>
                </div>

                {/* Top: Angka Putih di atas, Title di bawahnya */}
                <div className="relative z-20 space-y-1 text-left">
                  <div className="text-white font-black text-3xl sm:text-4xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                    {item.step}
                  </div>
                  <h3 className="font-extrabold text-white text-lg sm:text-xl tracking-tight leading-snug drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                    {item.title}
                  </h3>
                </div>

                {/* Center: Paragraf Transisi Tanpa Background (Clean Text) */}
                <div className="relative z-20 my-auto flex items-center justify-center px-4">
                  <div className={`transition-all duration-700 ease-in-out overflow-hidden text-center ${
                    isSelected ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-12'
                  }`}>
                    <p className="text-xs sm:text-sm text-white leading-relaxed font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Spacer bawah */}
                <div className="relative z-20"></div>
              </div>
            );
          })}
        </div>

      </section>

      {/* ================= FOOTER PROFESIONAL ================= */}
      <footer className="w-full bg-[#f8fafc] border-t border-gray-200 py-12 px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Kolom 1: Logo, Deskripsi, & Ikon Sosmed */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 border border-emerald-600/30 shadow-sm bg-emerald-50">
                <Image
                  src="/images/LogoGRFreshCarrot.png"
                  alt="Logo GR Fresh Carrot"
                  width={44}
                  height={44}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-sm tracking-tight text-emerald-800">
                  Golden Roots
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600">
                  Fresh Carrot
                </span>
              </div>
            </div>
            
            <p className="text-xs text-gray-500 leading-relaxed">
              Sociopreneur on Agriculture. Memajukan sektor agribisnis dan rantai pasok hortikultura langsung dari Muntilan, Magelang.
            </p>

            {/* Logo WhatsApp, Facebook, & Threads Tepat di Bawah Deskripsi */}
            <div className="flex items-center gap-2.5 pt-1">
              {/* WhatsApp Icon */}
              <a 
                href="https://wa.me/6287716704421" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-xl bg-gray-200/80 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-gray-700 transition-colors shadow-xs"
                title="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>

              {/* Facebook Icon */}
              <a 
                href="#" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-xl bg-gray-200/80 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-gray-700 transition-colors shadow-xs"
                title="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.37 14.5 5 15.5 5H18V0h-3.808C10.559 0 9 1.571 9 4.75V8z"/>
                </svg>
              </a>

              {/* Threads Icon */}
              <a 
                href="#" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-xl bg-gray-200/80 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-gray-700 transition-colors shadow-xs"
                title="Threads"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.186 24h-.007C5.576 23.978 0 18.553 0 11.968 0 5.383 5.58 0 12.203 0c6.623 0 11.989 5.383 11.996 11.968 0 3.32-1.306 6.333-3.42 8.514l-1.458-1.352c1.844-1.928 2.986-4.529 2.986-7.162 0-5.404-4.407-9.792-9.826-9.792C6.793 1.776 2.404 6.164 2.404 11.568c0 5.405 4.389 9.805 9.798 9.824h.027c2.206 0 4.254-.766 5.882-2.057l1.378 1.488C17.29 23.018 14.863 24 12.186 24zm-.022-7.382c-2.695 0-4.887-2.188-4.887-4.883 0-2.695 2.192-4.883 4.887-4.883 2.695 0 4.887 2.188 4.887 4.883 0 2.695-2.192 4.883-4.887 4.883z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Kolom 2: Products */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800">Products</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><a href="#produk" className="hover:text-emerald-700 transition-colors">Wortel Grade A</a></li>
              <li><a href="#produk" className="hover:text-emerald-700 transition-colors">Wortel Grade B</a></li>
            </ul>
          </div>

          {/* Kolom 3: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800">Services</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><a href="#proses" className="hover:text-emerald-700 transition-colors">Suplai Pasar Harian</a></li>
              <li><a href="#proses" className="hover:text-emerald-700 transition-colors">Kemitraan Bisnis Kuliner</a></li>
              <li><a href="#proses" className="hover:text-emerald-700 transition-colors">Distribusi Antar-Kota</a></li>
            </ul>
          </div>

          {/* Kolom 4: Connect */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800">Connect</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><a href="https://wa.me/6287716704421" target="_blank" rel="noreferrer" className="hover:text-emerald-700 transition-colors">Whatsapp</a></li>
              <li><a href="#" target="_blank" rel="noreferrer" className="hover:text-emerald-700 transition-colors">Facebook</a></li>
              <li><a href="#" target="_blank" rel="noreferrer" className="hover:text-emerald-700 transition-colors">Threads</a></li>
            </ul>
          </div>

        </div>

        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-gray-200 text-center text-xs text-gray-400">
          © 2026 Golden Roots Fresh Carrot. Seluruh hak cipta dilindungi.
        </div>
      </footer>
    </div> 
  );
}     

// ==========================================
// HELPER COMPONENT UNTUK EFEK ANGKA COUNTER
// ==========================================
function CounterStat({ target, duration = 1500 }) {
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    let startTime = null;
    const numericTarget = parseInt(target.replace(/[^0-9]/g, '')) || 0;
    const suffix = target.replace(/[0-9]/g, '');

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const currentVal = Math.floor(progress * numericTarget);
      
      if (progress < 1) {
        const randomGlitch = Math.floor(Math.random() * numericTarget);
        setDisplayValue(progress < 0.7 ? `${randomGlitch}` : `${currentVal}`);
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(`${numericTarget}${suffix}`);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  return (
    <p className="text-xl sm:text-2xl font-extrabold text-emerald-800" style={{ fontWeight: 900 }}>
      {displayValue}
    </p>
  );
}