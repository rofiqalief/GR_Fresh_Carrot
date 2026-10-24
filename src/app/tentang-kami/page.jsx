import { Sprout, Target, ShieldCheck, Heart, Leaf } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      title: "Kualitas Utama",
      desc: "Menjaga standar sortir panen agar kesegaran dan ukuran wortel konsisten.",
      icon: ShieldCheck,
    },
    {
      title: "Integritas & Kepercayaan",
      desc: "Transparan dalam penimbangan, penetapan pasokan, dan jadwal pengiriman.",
      icon: Heart,
    },
    {
      title: "Pertanian Berkelanjutan",
      desc: "Memberdayakan petani lokal Muntilan dengan teknik budidaya yang ramah lingkungan.",
      icon: Leaf,
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 py-6 md:py-8 space-y-6">
      <div>
        <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-emerald-100 mb-2">
          <Sprout className="w-3 h-3 text-emerald-600" />
          <span>Profil & Komitmen Kami</span>
        </div>
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
          Tentang Golden Roots Fresh Carrot
        </h1>
      </div>

      <section className="space-y-3 text-xs md:text-sm text-gray-600 leading-relaxed bg-white border border-gray-100 p-5 md:p-6 rounded-2xl shadow-sm">
        <p>
          Berawal dari kawasan agrowisata Muntilan, Magelang di lereng gunung yang subur, <strong className="text-gray-900 font-semibold">Golden Roots Fresh Carrot</strong> tumbuh menjadi salah satu pemasok wortel segar terpercaya di Jawa Tengah. Kami mengelola hasil panen secara cermat demi memastikan nutrisi tanah asli pegunungan tetap terjaga utuh sampai ke tangan konsumen.
        </p>
        <p>
          Dengan memadukan pengalaman bertani secara tradisional dan standar penanganan modern, kami melayani berbagai kebutuhan skala pasokan—mulai dari kebutuhan pasar lokal, bisnis kuliner, hingga kemitraan distributor antar-kota. Fokus utama kami adalah menjaga kesegaran alami tanpa melibatkan bahan pengawet kimia berbahaya.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-emerald-800 text-white p-5 rounded-2xl space-y-2 shadow-sm">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
            <Target className="w-4 h-4" /> Visi Perusahaan
          </div>
          <p className="text-xs md:text-sm text-emerald-50 leading-relaxed">
            Menjadi pelopor rantai pasok hortikultura segar unggulan dari daerah Magelang yang dikenal atas konsistensi mutu, kebersihan, dan kontribusi terhadap kesejahteraan petani lokal.
          </p>
        </div>

        <div className="bg-emerald-50/80 border border-emerald-100 p-5 rounded-2xl space-y-2 shadow-sm">
          <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
            <Sprout className="w-4 h-4 text-emerald-600" /> Misi Utama
          </div>
          <ul className="text-xs md:text-sm text-gray-700 space-y-1.5 list-disc list-inside leading-relaxed">
            <li>Menyediakan wortel segar berkualitas tinggi secara tepat waktu.</li>
            <li>Menerapkan sortasi dan standar pengemasan higienis.</li>
            <li>Membangun kemitraan jangka panjang yang adil dengan petani.</li>
          </ul>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base md:text-lg font-bold text-gray-900">
          Nilai Utama Kami (Our Values)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-4 md:p-5 shadow-sm space-y-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-gray-900">{v.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}