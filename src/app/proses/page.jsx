import { Sprout } from "lucide-react";

export default function ProsesPage() {
  const steps = [
    {
      num: "01",
      title: "Pemanenan",
      desc: "Wortel dipetik langsung dari kebun pada waktu yang tepat dengan tingkat kematangan optimal.",
    },
    {
      num: "02",
      title: "Sortasi & Pembersihan",
      desc: "Dilakukan pemilihan ukuran, pembersihan dari sisa tanah, dan sortir kualitas secara teliti.",
    },
    {
      num: "03",
      title: "Grading & Packing",
      desc: "Wortel dikelompokkan ke dalam Grade A & B, lalu dikemas rapi menjaga kesegarannya.",
    },
    {
      num: "04",
      title: "Distribusi",
      desc: "Pengiriman cepat dan aman langsung menuju tempat atau gudang mitra langganan.",
    },
  ];

  return (
    <div className="w-full space-y-6 py-2">
      <div>
        <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-100 mb-2">
          <Sprout className="w-3.5 h-3.5 text-emerald-600" />
          <span>Alur Kerja Kami</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
          Proses Dari Kebun Hingga Anda
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 mt-1">
          Setiap langkah dijaga ketat untuk memastikan kualitas terbaik sampai di tangan Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <span className="text-xs font-bold px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-lg inline-block">
                Langkah {item.num}
              </span>
              <h3 className="font-bold text-gray-900 text-base">
                {item.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}