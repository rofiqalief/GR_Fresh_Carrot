import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { Bebas_Neue, Plus_Jakarta_Sans } from 'next/font/google';
import { ShieldCheck, Truck, Sprout, Target, Heart, Leaf, Package, Eye, Zap, Sparkles, CheckCircle2 } from 'lucide-react';
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
  const { company } = db;

  const products = [
    { name: "Wortel Grade A (Premium)", tag: "Kualitas Utama", desc: "Ukuran seragam, mulus, segar, dan sangat cocok untuk supermarket, restoran, serta pasar modern." },
    { name: "Wortel Grade B (Standar)", tag: "Kualitas Reguler", desc: "Kualitas segar dan bergizi tinggi, sangat pas untuk kebutuhan pasar tradisional dan industri kuliner harian." },
  ];

  const benefits = [
    { title: "Kaya Beta-Karoten & Vitamin A", desc: "Mendukung kesehatan mata dan menjaga sistem kekebalan tubuh tetap prima secara alami.", icon: Eye },
    { title: "Menjaga Kesehatan Jantung", desc: "Kandungan antioksidan dan kalium membantu menjaga tekanan darah dan sirkulasi darah.", icon: Heart },
    { title: "Serat Tinggi untuk Pencernaan", desc: "Membantu kelancaran fungsi pencernaan harian dan mendukung metabolisme yang sehat.", icon: Zap },
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

      {/* ================= SECTION 2: TENTANG KAMI (FULL WIDTH, LARGER PHOTOS, 3 STATS) ================= */}
      <section id="tentang-kami" className={`w-full min-h-screen flex items-center justify-center py-20 md:py-28 px-4 sm:px-8 md:px-12 lg:px-16 bg-gray-50/60 overflow-hidden ${plusJakarta.className}`}>
        <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* KOLOM KIRI: Abstrak Perusahaan & 3 Statistik */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-[11px] font-semibold px-3 py-1 rounded-full border border-emerald-100">
              <Sprout className="w-3.5 h-3.5 text-emerald-600" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Dari Lereng Subur Muntilan
            </h2>

            {/* Abstrak Perusahaan */}
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium bg-emerald-50/50 border border-emerald-100/60 p-4 rounded-2xl shadow-xs">
              Golden Roots Fresh Carrot adalah entitas agribisnis modern di Muntilan, Magelang, yang berfokus pada penyediaan rantai pasok hortikultura segar berkualitas tinggi langsung dari ladang pegunungan subur dengan standar penanganan higienis profesional.
            </p>

            {/* Grid 3 Statistik Utama (3 Kolom Simetris) */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="bg-white p-3 sm:p-4 rounded-2xl border border-gray-100 shadow-sm transition-transform duration-300 hover:scale-105 text-center">
                <p className="text-xl sm:text-2xl font-extrabold text-emerald-800">100%</p>
                <p className="text-[10px] sm:text-[11px] text-gray-500 font-semibold mt-0.5 leading-tight">Mutu Alami</p>
              </div>
              <div className="bg-white p-3 sm:p-4 rounded-2xl border border-gray-100 shadow-sm transition-transform duration-300 hover:scale-105 text-center">
                <p className="text-xl sm:text-2xl font-extrabold text-emerald-800">1+ Ton</p>
                <p className="text-[10px] sm:text-[11px] text-gray-500 font-semibold mt-0.5 leading-tight">Suplai Bulanan</p>
              </div>
              <div className="bg-white p-3 sm:p-4 rounded-2xl border border-gray-100 shadow-sm transition-transform duration-300 hover:scale-105 text-center">
                <p className="text-xl sm:text-2xl font-extrabold text-emerald-800">3+ Kota</p>
                <p className="text-[10px] sm:text-[11px] text-gray-500 font-semibold mt-0.5 leading-tight">Distribusi</p>
              </div>
            </div>
          </div>

          {/* KOLOM TENGAH: Kolase Foto Bertumpuk Diperbesar Maksimal */}
          <div className="lg:col-span-5 relative flex items-center justify-center py-6">
            <div className="relative w-full max-w-lg h-[520px] sm:h-[580px] flex items-center justify-center">
              
              {/* Foto Atas */}
              <div className="absolute top-0 right-4 w-64 sm:w-72 h-36 sm:h-40 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transition-transform duration-300 hover:scale-105">
                <Image
                  src="/images/OriginalLandingPage.jpeg"
                  alt="Kebun Wortel Muntilan"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Foto Tengah Utama (Lebih Besar & Lebar) */}
              <div className="absolute top-28 left-0 w-72 sm:w-80 h-60 sm:h-68 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transition-transform duration-300 hover:scale-105 z-10">
                <Image
                  src="/images/BG_Landing Page.jpeg"
                  alt="Wortel Segar Golden Roots"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Kotak Aksen Hijau */}
              <div className="absolute top-60 right-2 w-48 sm:w-52 bg-emerald-900 text-white p-5 rounded-3xl shadow-2xl z-20 flex flex-col justify-center space-y-1.5 border-4 border-white transition-transform duration-300 hover:scale-105">
                <span className="text-3xl">🌿</span>
                <p className="font-bold text-xs sm:text-sm tracking-tight leading-snug">Kesegaran Alami Pegunungan</p>
              </div>

              {/* Foto Bawah */}
              <div className="absolute bottom-0 right-8 w-64 sm:w-72 h-36 sm:h-40 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transition-transform duration-300 hover:scale-105">
                <Image
                  src="/images/OriginalLandingPage.jpeg"
                  alt="Proses Panen Wortel"
                  fill
                  className="object-cover"
                />
              </div>

            </div>
          </div>

          {/* KOLOM KANAN: Visi & Misi */}
          <div className="lg:col-span-3 space-y-6 text-left">
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                Visi Perusahaan
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed bg-white border border-gray-100 p-4 rounded-2xl shadow-sm">
                Menjadi pelopor rantai pasok hortikultura segar unggulan dari daerah Magelang yang dikenal atas konsistensi mutu, kebersihan, dan kontribusi terhadap kesejahteraan petani lokal.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                Misi Utama
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

      {/* ================= SECTION 3: PRODUK ================= */}
      <section id="produk" className="w-full py-24 md:py-32 px-4 sm:px-8 md:px-12 lg:px-16 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto space-y-8">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-emerald-100 mb-2 transition-transform duration-300 hover:scale-105">
              <Package className="w-3 h-3 text-emerald-600" />
              <span>Katalog Pilihan</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
              Produk Wortel Segar Kami
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Dipanen dengan standar ketat untuk memenuhi kebutuhan pasokan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between space-y-4 group">
                <div className="space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md inline-block transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                    {item.tag}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
                <div className="pt-3 border-t border-gray-100 flex items-center gap-2 text-xs text-emerald-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Tersedia untuk pemesanan langsung</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: MANFAAT ================= */}
      <section id="manfaat" className="w-full py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 bg-gray-50/50">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-emerald-100 transition-transform duration-300 hover:scale-105">
              <Sparkles className="w-3 h-3 text-emerald-600" />
              <span>Kebaikan Alami</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
              Manfaat Utama Wortel Segar
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
              Nutrisi esensial yang langsung Anda dapatkan dari setiap gigitan wortel hasil panen terbaik kami.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left pt-2">
            {benefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl space-y-3 group">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base">{item.title}</h3>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: PROSES KAMI ================= */}
      <section id="proses" className="w-full py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto space-y-8">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-emerald-100 mb-2 transition-transform duration-300 hover:scale-105">
              <Sprout className="w-3 h-3 text-emerald-600" />
              <span>Alur Kerja Kami</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
              Proses Dari Kebun Hingga Anda
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Setiap langkah dijaga ketat untuk memastikan kualitas terbaik sampai di tangan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl space-y-3 flex flex-col justify-between group">
                <div className="space-y-3">
                  <span className="text-xs font-bold px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-lg inline-block transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                    Langkah {item.num}
                  </span>
                  <h3 className="font-bold text-gray-900 text-base">{item.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER PROFESIONAL ================= */}
      <footer className="w-full bg-[#f8fafc] border-t border-gray-200 py-12 px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 border border-emerald-600/30 shadow-sm bg-emerald-50">
                <Image
                  src="/images/LogoGRFreshCarrot.jpg"
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
            <div className="flex items-center gap-3 pt-1">
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-gray-200/80 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-gray-700 transition-colors text-xs font-bold">
                WA
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-gray-200/80 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-gray-700 transition-colors text-xs font-bold">
                FB
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-gray-200/80 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-gray-700 transition-colors text-xs font-bold">
                TH
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800">Products</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><a href="#produk" className="hover:text-emerald-700 transition-colors">Wortel Grade A (Premium)</a></li>
              <li><a href="#produk" className="hover:text-emerald-700 transition-colors">Wortel Grade B (Standar)</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800">Services</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><a href="#proses" className="hover:text-emerald-700 transition-colors">Suplai Pasar Harian</a></li>
              <li><a href="#proses" className="hover:text-emerald-700 transition-colors">Kemitraan Bisnis Kuliner</a></li>
              <li><a href="#proses" className="hover:text-emerald-700 transition-colors">Distribusi Antar-Kota</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800">Connect</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><a href={`https://wa.me/${company.phone}`} target="_blank" rel="noreferrer" className="hover:text-emerald-700 transition-colors">Whatsapp</a></li>
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