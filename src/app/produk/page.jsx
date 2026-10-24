import { Package, CheckCircle2 } from "lucide-react";

export default function ProdukPage() {
  const products = [
    {
      name: "Wortel Grade A (Premium)",
      tag: "Kualitas Utama",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    },
    {
      name: "Wortel Grade B (Standar)",
      tag: "Kualitas Reguler",
      desc: "Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper.",
    },
  ];

  return (
    <div className="w-full space-y-6 py-2">
      <div>
        <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-100 mb-2">
          <Package className="w-3.5 h-3.5 text-emerald-600" />
          <span>Katalog Pilihan</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
          Produk Wortel Segar Kami
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 mt-1">
          Dipanen dengan standar ketat untuk memenuhi kebutuhan pasokan Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {products.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                {item.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed italic">
                {item.desc}
              </p>
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center gap-2 text-xs text-emerald-700 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Tersedia untuk pemesanan langsung</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}