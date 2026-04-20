import { useMemo, useState } from "react";
import { PartnerMapLoader } from "@/components/peta/PartnerMapLoader";
import { PartnerMapSidebar } from "@/components/peta/PartnerMapSidebar";
import { ALL_PARTNERS } from "@/constant/partnersMapMock";
import { useDebounce } from "@/hooks/useDebounce";
import type { SortKey } from "@/types/partner";
import {
  buildMapMarkers,
  filterPartners,
  getCitiesForProvince,
  getProvincesSorted,
  getSelectedLatLng,
  sortPartners,
} from "@/utils/partnerMap";

export default function PetaPartnerPage() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedKategori, setSelectedKategori] = useState("");
  const [sortBy, setSortBy] = useState<SortKey>("default");
  const [selected, setSelected] = useState<number | null>(11);

  const provinces = useMemo(
    () => getProvincesSorted(ALL_PARTNERS),
    [],
  );

  const availableCities = useMemo(
    () => getCitiesForProvince(ALL_PARTNERS, selectedProvince),
    [selectedProvince],
  );

  const filteredPartners = useMemo(() => {
    const filtered = filterPartners(ALL_PARTNERS, {
      province: selectedProvince,
      city: selectedCity,
      kategori: selectedKategori,
      search: debouncedSearch,
    });
    return sortPartners(filtered, sortBy);
  }, [
    debouncedSearch,
    selectedProvince,
    selectedCity,
    selectedKategori,
    sortBy,
  ]);

  const mapPartners = useMemo(
    () => buildMapMarkers(filteredPartners, selected, ALL_PARTNERS),
    [filteredPartners, selected],
  );

  const selectedPosition = useMemo(
    () => getSelectedLatLng(ALL_PARTNERS, selected),
    [selected],
  );

  const hasActiveFilters =
    Boolean(selectedProvince) ||
    Boolean(selectedCity) ||
    Boolean(selectedKategori) ||
    Boolean(debouncedSearch.trim());

  function clearFilters() {
    setSearch("");
    setSelectedProvince("");
    setSelectedCity("");
    setSelectedKategori("");
    setSortBy("default");
  }

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-80px)] bg-white overflow-hidden">
      <PartnerMapSidebar
        provinces={provinces}
        availableCities={availableCities}
        search={search}
        onSearchChange={setSearch}
        selectedProvince={selectedProvince}
        onProvinceChange={setSelectedProvince}
        selectedCity={selectedCity}
        onCityChange={setSelectedCity}
        selectedKategori={selectedKategori}
        onKategoriChange={setSelectedKategori}
        hasActiveFilters={hasActiveFilters}
        onClearFilters={clearFilters}
        filteredPartners={filteredPartners}
        totalPartnerCount={ALL_PARTNERS.length}
        selectedId={selected}
        onSelectPartner={setSelected}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      <div className="relative z-0 flex min-h-[400px] flex-1 bg-[#F5F5F5] md:min-h-0">
        <PartnerMapLoader
          partners={mapPartners}
          selectedId={selected}
          selectedPosition={selectedPosition}
          onMarkerClick={setSelected}
        />
      </div>
    </div>
  );
}
