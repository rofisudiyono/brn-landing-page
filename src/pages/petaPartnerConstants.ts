// ─── Kategori Partner ──────────────────────────────────────────────────────
export const KATEGORI_LIST = [
  "Bengkel Umum",
  "Bengkel Spesialis",
  "Toko Ban",
  "Aksesoris Mobil",
  "Oli & Spare Part",
  "Detailing & Cuci Mobil",
  "Modifikasi Mobil",
] as const;

export type Kategori = (typeof KATEGORI_LIST)[number];

export const KATEGORI_COLOR: Record<Kategori, string> = {
  "Bengkel Umum": "bg-blue-100 text-blue-700",
  "Bengkel Spesialis": "bg-indigo-100 text-indigo-700",
  "Toko Ban": "bg-orange-100 text-orange-700",
  "Aksesoris Mobil": "bg-purple-100 text-purple-700",
  "Oli & Spare Part": "bg-yellow-100 text-yellow-700",
  "Detailing & Cuci Mobil": "bg-teal-100 text-teal-700",
  "Modifikasi Mobil": "bg-rose-100 text-rose-700",
};
