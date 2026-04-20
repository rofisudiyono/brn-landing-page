import { KATEGORI_LIST } from "@/constant/partnerKategori";

/** Partner lengkap untuk halaman Peta Partner */
export type Partner = {
  id: number;
  name: string;
  owner: string;
  email: string;
  whatsapp: string;
  kategori: string;
  province: string;
  city: string;
  address: string;
  mapsLink: string;
  avatar: string;
  lat: number;
  lng: number;
};

export type Kategori = (typeof KATEGORI_LIST)[number];

export type SortKey = "default" | "name-asc" | "kategori";

/** Item ringkas untuk marker peta (selaras dengan PartnerMap) */
export type PartnerMapItem = {
  id: number;
  name: string;
  kategori: string;
  lat: number;
  lng: number;
};
