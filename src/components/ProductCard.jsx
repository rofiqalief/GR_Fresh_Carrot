// # [PENANDA FUNGSI: Komponen Kartu Produk Reusable]
import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden p-3 flex gap-3">
      {/* # [INPUT GAMBAR: Foto Wortel Berdasarkan Produk - Size 300x300px] */}
      <div className="relative w-28 h-28 rounded-lg overflow-hidden bg-orange-50 flex-shrink-0">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      {/* # [PENANDA FUNGSI: Informasi Detail Spesifikasi Produk] */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-gray-900 text-sm">{product.name}</h3>
            {product.isComingSoon && (
              <span className="text-[10px] bg-amber-100 text-amber-700 font-semibold px-2 py-0.5 rounded-full">
                Coming Soon
              </span>
            )}
          </div>

          {!product.isComingSoon && (
            <p className="text-emerald-700 font-bold text-xs mt-0.5">
              Rp{product.price.toLocaleString('id-ID')} / {product.unit}
            </p>
          )}

          <p className="text-[11px] text-gray-500 mt-1 leading-snug line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* # [PENANDA FUNGSI: Atribut Spesifikasi] */}
        <div className="mt-2 text-[10px] text-gray-600 space-y-0.5 border-t border-gray-100 pt-1.5">
          {product.specs.size && <div>• Ukuran: {product.specs.size}</div>}
          {product.specs.color && <div>• Warna: {product.specs.color}</div>}
          {product.specs.grade && <div>• Kualitas: {product.specs.grade}</div>}
          {product.specs.minOrder && <div>• Minimal Order: {product.specs.minOrder}</div>}
          {product.specs.packaging && <div>• Pengemasan: {product.specs.packaging}</div>}
          {product.specs.certification && <div>• Sertifikasi: {product.specs.certification}</div>}
        </div>
      </div>
    </div>
  );
}