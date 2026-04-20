import type { Partner, PartnerMapItem, SortKey } from "@/types/partner";

export function getProvincesSorted(partners: Partner[]): string[] {
  return [...new Set(partners.map((p) => p.province))].sort();
}

export function getCitiesForProvince(
  partners: Partner[],
  province: string,
): string[] {
  if (!province) return [];
  return [
    ...new Set(
      partners.filter((p) => p.province === province).map((p) => p.city),
    ),
  ].sort();
}

export type PartnerFilterState = {
  province: string;
  city: string;
  kategori: string;
  search: string;
};

export function filterPartners(
  partners: Partner[],
  { province, city, kategori, search }: PartnerFilterState,
): Partner[] {
  let result = [...partners];

  if (province) result = result.filter((p) => p.province === province);
  if (city) result = result.filter((p) => p.city === city);
  if (kategori) result = result.filter((p) => p.kategori === kategori);
  const q = search.trim().toLowerCase();
  if (q) {
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.owner.toLowerCase().includes(q) ||
        p.city.toLowerCase().includes(q) ||
        p.province.toLowerCase().includes(q) ||
        p.address.toLowerCase().includes(q) ||
        p.kategori.toLowerCase().includes(q),
    );
  }

  return result;
}

export function sortPartners(partners: Partner[], sortBy: SortKey): Partner[] {
  const copy = [...partners];
  switch (sortBy) {
    case "name-asc":
      return copy.sort((a, b) => a.name.localeCompare(b.name));
    case "kategori":
      return copy.sort((a, b) => a.kategori.localeCompare(b.kategori));
    default:
      return copy;
  }
}

export function buildMapMarkers(
  filtered: Partner[],
  selectedId: number | null,
  allPartners: Partner[],
): PartnerMapItem[] {
  const base: PartnerMapItem[] = filtered.map((p) => ({
    id: p.id,
    name: p.name,
    kategori: p.kategori,
    lat: p.lat,
    lng: p.lng,
  }));
  if (selectedId != null && !base.some((p) => p.id === selectedId)) {
    const extra = allPartners.find((p) => p.id === selectedId);
    if (extra) {
      base.push({
        id: extra.id,
        name: extra.name,
        kategori: extra.kategori,
        lat: extra.lat,
        lng: extra.lng,
      });
    }
  }
  return base;
}

export function getSelectedLatLng(
  allPartners: Partner[],
  selectedId: number | null,
): [number, number] | null {
  if (selectedId == null) return null;
  const p = allPartners.find((x) => x.id === selectedId);
  return p ? [p.lat, p.lng] : null;
}

export function toWhatsAppHref(phone: string): string {
  return `https://wa.me/62${phone.replace(/^0/, "")}`;
}
