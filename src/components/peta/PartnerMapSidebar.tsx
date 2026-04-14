import { useEffect, useRef, useState } from "react";
import {
  Search,
  X,
  ArrowUpDown,
} from "lucide-react";
import { KATEGORI_LIST } from "@/constant/partnerKategori";
import { PARTNER_SORT_OPTIONS } from "@/constant/partnerMapSort";
import type { Partner, SortKey } from "@/types/partner";
import { PartnerCard } from "@/components/peta/PartnerCard";

type PartnerMapSidebarProps = {
  provinces: string[];
  availableCities: string[];
  search: string;
  onSearchChange: (v: string) => void;
  selectedProvince: string;
  onProvinceChange: (v: string) => void;
  selectedCity: string;
  onCityChange: (v: string) => void;
  selectedKategori: string;
  onKategoriChange: (v: string) => void;
  hasActiveFilters: boolean;
  onClearFilters: () => void;
  filteredPartners: Partner[];
  totalPartnerCount: number;
  selectedId: number | null;
  onSelectPartner: (id: number) => void;
  sortBy: SortKey;
  onSortChange: (key: SortKey) => void;
};

function ChevronDownIcon() {
  return (
    <svg
      className="fill-current h-3.5 w-3.5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      aria-hidden
    >
      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
    </svg>
  );
}

export function PartnerMapSidebar({
  provinces,
  availableCities,
  search,
  onSearchChange,
  selectedProvince,
  onProvinceChange,
  selectedCity,
  onCityChange,
  selectedKategori,
  onKategoriChange,
  hasActiveFilters,
  onClearFilters,
  filteredPartners,
  totalPartnerCount,
  selectedId,
  onSelectPartner,
  sortBy,
  onSortChange,
}: PartnerMapSidebarProps) {
  const [showSort, setShowSort] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setShowSort(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div className="w-full md:w-[400px] flex-shrink-0 border-r border-gray-200 bg-white flex flex-col h-full shadow-[2px_0_15px_-3px_rgba(0,0,0,0.05)] z-10">
      <div className="p-5 md:p-6 pb-4 border-b border-gray-100 shrink-0 space-y-3">
        <h2 className="font-bold text-gray-900 text-[20px]">Cari Partner BRN</h2>

        <div className="relative">
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Nama usaha, kategori, atau kota..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-9 py-3 text-[13px] border border-gray-200 rounded-xl outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 placeholder:text-gray-400 transition-shadow shadow-sm"
          />
          {search ? (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={14} />
            </button>
          ) : null}
        </div>

        <div className="flex gap-3">
          <div className="relative flex-1">
            <select
              value={selectedProvince}
              onChange={(e) => {
                onProvinceChange(e.target.value);
                onCityChange("");
              }}
              className="w-full appearance-none px-4 py-3 text-[13px] border border-gray-200 rounded-xl outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 text-gray-600 font-medium bg-white shadow-sm cursor-pointer"
            >
              <option value="">Semua Provinsi</option>
              {provinces.map((prov) => (
                <option key={prov} value={prov}>
                  {prov}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
              <ChevronDownIcon />
            </div>
          </div>
          <div className="relative flex-1">
            <select
              value={selectedCity}
              onChange={(e) => onCityChange(e.target.value)}
              disabled={!selectedProvince}
              className="w-full appearance-none px-4 py-3 text-[13px] border border-gray-200 rounded-xl outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 text-gray-600 font-medium bg-white shadow-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option value="">
                {selectedProvince ? "Semua Kota" : "Pilih Kota"}
              </option>
              {availableCities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
              <ChevronDownIcon />
            </div>
          </div>
        </div>

        <div className="relative">
          <select
            value={selectedKategori}
            onChange={(e) => onKategoriChange(e.target.value)}
            className="w-full appearance-none px-4 py-3 text-[13px] border border-gray-200 rounded-xl outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 text-gray-600 font-medium bg-white shadow-sm cursor-pointer"
          >
            <option value="">Semua Kategori</option>
            {KATEGORI_LIST.map((k) => (
              <option key={k} value={k}>
                {k}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
            <ChevronDownIcon />
          </div>
        </div>

        {hasActiveFilters ? (
          <button
            type="button"
            onClick={onClearFilters}
            className="flex items-center gap-1.5 text-[12px] font-semibold text-yellow-700 bg-yellow-50 border border-yellow-200 px-3 py-1.5 rounded-lg hover:bg-yellow-100 transition-colors"
          >
            <X size={11} />
            Reset semua filter
          </button>
        ) : null}
      </div>

      <div className="px-5 md:px-6 py-3 flex items-center justify-between shrink-0">
        <span className="text-[12px] font-bold text-gray-400">
          Menampilkan{" "}
          <span className="text-gray-700">{filteredPartners.length}</span> dari{" "}
          {totalPartnerCount} Partner
        </span>

        <div className="relative" ref={sortRef}>
          <button
            type="button"
            onClick={() => setShowSort((v) => !v)}
            className={`flex items-center gap-1.5 text-[12px] font-semibold px-3 py-1.5 rounded-lg border transition-colors ${
              sortBy !== "default"
                ? "border-yellow-300 bg-yellow-50 text-yellow-700"
                : "border-gray-200 bg-white text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }`}
          >
            <ArrowUpDown size={13} />
            <span className="hidden sm:inline">
              {PARTNER_SORT_OPTIONS.find((o) => o.key === sortBy)?.label ??
                "Urutkan"}
            </span>
          </button>

          {showSort ? (
            <div className="absolute right-0 top-full mt-1.5 w-52 bg-white border border-gray-100 rounded-xl shadow-lg z-20 overflow-hidden">
              {PARTNER_SORT_OPTIONS.map((opt) => (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => {
                    onSortChange(opt.key);
                    setShowSort(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-[13px] transition-colors ${
                    sortBy === opt.key
                      ? "bg-yellow-50 text-yellow-800 font-bold"
                      : "text-gray-700 hover:bg-gray-50 font-medium"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 md:px-6 pb-6 space-y-4 custom-scrollbar">
        {filteredPartners.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
              <Search size={24} className="text-gray-400" />
            </div>
            <p className="text-[14px] font-bold text-gray-700 mb-1">
              Partner tidak ditemukan
            </p>
            <p className="text-[12px] text-gray-400">
              Coba ubah kata kunci atau filter yang digunakan
            </p>
            <button
              type="button"
              onClick={onClearFilters}
              className="mt-4 text-[12px] font-semibold text-yellow-700 underline underline-offset-2 hover:text-yellow-800 transition-colors"
            >
              Reset filter
            </button>
          </div>
        ) : (
          filteredPartners.map((partner) => (
            <PartnerCard
              key={partner.id}
              partner={partner}
              isSelected={selectedId === partner.id}
              onSelect={() => onSelectPartner(partner.id)}
            />
          ))
        )}
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #E5E7EB; border-radius: 20px; }
      `,
        }}
      />
    </div>
  );
}
