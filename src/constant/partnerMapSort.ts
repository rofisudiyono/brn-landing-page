import type { SortKey } from "@/types/partner";

export const PARTNER_SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: "default", label: "Urutan Default" },
  { key: "name-asc", label: "Nama A–Z" },
  { key: "kategori", label: "Berdasarkan Kategori" },
];
