import { Heart, Eye, ShieldCheck, Zap, Sparkles } from "lucide-react";

export default function BenefitsPage() {
  const benefits = [
    {
      title: "Kaya Beta-Karoten & Vitamin A",
      desc: "Mendukung kesehatan mata dan menjaga sistem kekebalan tubuh tetap prima secara alami.",
      icon: Eye,
    },
    {
      title: "Menjaga Kesehatan Jantung",
      desc: "Kandungan antioksidan dan kalium membantu menjaga tekanan darah dan sirkulasi darah.",
      icon: Heart,
    },
    {
      title: "Serat Tinggi untuk Pencernaan",
      desc: "Membantu kelancaran fungsi pencernaan harian dan mendukung metabolisme yang sehat.",
      icon: Zap,
    },
    {
      title: "Nutrisi Alami Tanpa Pengawet",
      desc: "Dipanen langsung dari kebun subur di Muntilan dengan kesegaran yang terjaga utuh.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 py-4 text-center">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-100">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Kebaikan Alami</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
          Manfaat Utama Wortel Segar
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
          Nutrisi esensial yang langsung Anda dapatkan dari setiap gigitan wortel hasil panen terbaik kami.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-left">
        {benefits.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}