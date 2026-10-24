// # [PENANDA FUNGSI: Komponen Kartu Alur Proses Produksi]
import Image from 'next/image';

export default function ProcessCard({ title, description, image }) {
  return (
    <div className="space-y-2">
      {/* # [INPUT GAMBAR: Foto Langkah Proses Kebun/Panen/Sortir/Distribusi] */}
      <div className="relative w-full h-44 rounded-xl overflow-hidden bg-emerald-50">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h3 className="font-bold text-gray-900 text-sm">{title}</h3>
        <p className="text-xs text-gray-600 leading-relaxed mt-0.5">{description}</p>
      </div>
    </div>
  );
}