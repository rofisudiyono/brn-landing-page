import { useEffect, useMemo, useRef, useState } from "react";
import {
  MapPin,
  Phone,
  Search,
  Map,
  X,
  ArrowUpDown,
  Mail,
  Tag,
} from "lucide-react";
import { PartnerMapLoader } from "@/components/peta/PartnerMapLoader";
import { useDebounce } from "@/hooks/useDebounce";
import { KATEGORI_LIST, KATEGORI_COLOR } from "./petaPartnerConstants";
import type { Kategori } from "./petaPartnerConstants";

// ─── Tipe Data ─────────────────────────────────────────────────────────────
type Partner = {
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

// ─── Mockup Data ─────────────────────────────────────────────────────────
const ALL_PARTNERS: Partner[] = [
  // DKI Jakarta
  {
    id: 1,
    name: "Bengkel Maju Jaya Motor",
    owner: "Bpk. Ahmad Hidayat",
    email: "ahmad@majujayamotor.com",
    whatsapp: "081234567891",
    kategori: "Bengkel Umum",
    province: "DKI Jakarta",
    city: "Jakarta Selatan",
    address:
      "Jl. TB Simatupang No. 45, Cilandak, Jakarta Selatan, DKI Jakarta 12430",
    mapsLink: "https://maps.google.com/?q=-6.2615,106.8106",
    avatar:
      "https://ui-avatars.com/api/?name=MJ&background=1A2332&color=F5C800&bold=true&size=80",
    lat: -6.2615,
    lng: 106.8106,
  },
  {
    id: 2,
    name: "Toko Ban Mega Jaya",
    owner: "Ibu Sari Dewi Utami",
    email: "sari@megajayaban.co.id",
    whatsapp: "082111223344",
    kategori: "Toko Ban",
    province: "DKI Jakarta",
    city: "Jakarta Barat",
    address:
      "Jl. Daan Mogot Km. 15 No. 32, Cengkareng, Jakarta Barat, DKI Jakarta 11730",
    mapsLink: "https://maps.google.com/?q=-6.1683,106.7630",
    avatar:
      "https://ui-avatars.com/api/?name=TM&background=EA580C&color=fff&bold=true&size=80",
    lat: -6.1683,
    lng: 106.763,
  },
  {
    id: 3,
    name: "Pusat Aksesoris Otomotif IKM",
    owner: "Bpk. Rudi Hartono",
    email: "rudi@ikmaksesoris.com",
    whatsapp: "081398765432",
    kategori: "Aksesoris Mobil",
    province: "DKI Jakarta",
    city: "Jakarta Pusat",
    address:
      "Jl. Tanah Abang III No. 17, Tanah Abang, Jakarta Pusat, DKI Jakarta 10170",
    mapsLink: "https://maps.google.com/?q=-6.1751,106.8650",
    avatar:
      "https://ui-avatars.com/api/?name=IK&background=7C3AED&color=fff&bold=true&size=80",
    lat: -6.1751,
    lng: 106.865,
  },
  {
    id: 4,
    name: "Auto Detailing Prima",
    owner: "Bpk. Dodi Kusuma",
    email: "dodi@autodetailingprima.id",
    whatsapp: "085678901234",
    kategori: "Detailing & Cuci Mobil",
    province: "DKI Jakarta",
    city: "Jakarta Timur",
    address:
      "Jl. Raya Bekasi Km. 18 No. 5, Cakung, Jakarta Timur, DKI Jakarta 13910",
    mapsLink: "https://maps.google.com/?q=-6.2250,106.9000",
    avatar:
      "https://ui-avatars.com/api/?name=AP&background=0F766E&color=fff&bold=true&size=80",
    lat: -6.225,
    lng: 106.9,
  },
  // Jawa Barat
  {
    id: 5,
    name: "Bengkel Spesialis Toyota Bandung",
    owner: "Bpk. Agus Permadi",
    email: "agus@bengkeltoyotabandung.com",
    whatsapp: "082234567890",
    kategori: "Bengkel Spesialis",
    province: "Jawa Barat",
    city: "Bandung",
    address: "Jl. Pasteur No. 120, Sukajadi, Kota Bandung, Jawa Barat 40161",
    mapsLink: "https://maps.google.com/?q=-6.9175,107.6191",
    avatar:
      "https://ui-avatars.com/api/?name=BS&background=1D4ED8&color=fff&bold=true&size=80",
    lat: -6.9175,
    lng: 107.6191,
  },
  {
    id: 6,
    name: "Oli & Spare Part Bekasi Jaya",
    owner: "Ibu Lestari Wulandari",
    email: "lestari@olibekasiajaya.com",
    whatsapp: "081122334455",
    kategori: "Oli & Spare Part",
    province: "Jawa Barat",
    city: "Bekasi",
    address:
      "Jl. Ahmad Yani No. 77, Bekasi Timur, Kota Bekasi, Jawa Barat 17111",
    mapsLink: "https://maps.google.com/?q=-6.2383,106.9756",
    avatar:
      "https://ui-avatars.com/api/?name=OB&background=CA8A04&color=fff&bold=true&size=80",
    lat: -6.2383,
    lng: 106.9756,
  },
  {
    id: 7,
    name: "Bengkel Umum Bogor Mandiri",
    owner: "Bpk. Hendra Saputra",
    email: "hendra@bengkelbogor.co.id",
    whatsapp: "089876543210",
    kategori: "Bengkel Umum",
    province: "Jawa Barat",
    city: "Bogor",
    address:
      "Jl. Pajajaran No. 55A, Bogor Tengah, Kota Bogor, Jawa Barat 16128",
    mapsLink: "https://maps.google.com/?q=-6.5971,106.8060",
    avatar:
      "https://ui-avatars.com/api/?name=BM&background=166534&color=fff&bold=true&size=80",
    lat: -6.5971,
    lng: 106.806,
  },
  // Jawa Timur
  {
    id: 8,
    name: "Modifikasi & Accessories Surabaya",
    owner: "Bpk. Bambang Wibowo",
    email: "bambang@modifsub.id",
    whatsapp: "081345678901",
    kategori: "Modifikasi Mobil",
    province: "Jawa Timur",
    city: "Surabaya",
    address: "Jl. Raya Darmo No. 100, Wonokromo, Surabaya, Jawa Timur 60241",
    mapsLink: "https://maps.google.com/?q=-7.2575,112.7521",
    avatar:
      "https://ui-avatars.com/api/?name=MS&background=9F1239&color=fff&bold=true&size=80",
    lat: -7.2575,
    lng: 112.7521,
  },
  {
    id: 9,
    name: "Toko Ban Malang Sejahtera",
    owner: "Ibu Endah Puspitasari",
    email: "endah@banmalang.com",
    whatsapp: "087654321098",
    kategori: "Toko Ban",
    province: "Jawa Timur",
    city: "Malang",
    address: "Jl. Kawi No. 24, Klojen, Kota Malang, Jawa Timur 65119",
    mapsLink: "https://maps.google.com/?q=-7.9797,112.6304",
    avatar:
      "https://ui-avatars.com/api/?name=TM&background=EA580C&color=fff&bold=true&size=80",
    lat: -7.9797,
    lng: 112.6304,
  },
  {
    id: 10,
    name: "Sidoarjo Auto Care",
    owner: "Bpk. Teguh Santoso",
    email: "teguh@sidoarjoautocare.com",
    whatsapp: "082298765432",
    kategori: "Detailing & Cuci Mobil",
    province: "Jawa Timur",
    city: "Sidoarjo",
    address: "Jl. Ahmad Yani No. 15, Sidoarjo, Jawa Timur 61218",
    mapsLink: "https://maps.google.com/?q=-7.4460,112.7185",
    avatar:
      "https://ui-avatars.com/api/?name=SA&background=0F766E&color=fff&bold=true&size=80",
    lat: -7.446,
    lng: 112.7185,
  },
  // Bali
  {
    id: 11,
    name: "Bengkel Bali Otomotif",
    owner: "Bpk. I Wayan Surya",
    email: "wayan@bengkalbali.com",
    whatsapp: "081234567890",
    kategori: "Bengkel Umum",
    province: "Bali",
    city: "Denpasar",
    address:
      "Jl. Bypass Ngurah Rai No. 88, Sanur, Denpasar Selatan, Bali 80228",
    mapsLink: "https://maps.google.com/?q=-8.6705,115.2126",
    avatar:
      "https://ui-avatars.com/api/?name=BO&background=1A2332&color=F5C800&bold=true&size=80",
    lat: -8.6705,
    lng: 115.2126,
  },
  {
    id: 12,
    name: "Kuta Aksesoris & Spare Part",
    owner: "Ibu Ni Made Ayu",
    email: "nimade@kutaaksesoris.com",
    whatsapp: "087711223344",
    kategori: "Aksesoris Mobil",
    province: "Bali",
    city: "Badung",
    address: "Jl. Raya Kuta No. 200, Kuta, Badung, Bali 80361",
    mapsLink: "https://maps.google.com/?q=-8.5069,115.2625",
    avatar:
      "https://ui-avatars.com/api/?name=KA&background=7C3AED&color=fff&bold=true&size=80",
    lat: -8.5069,
    lng: 115.2625,
  },
  {
    id: 13,
    name: "Gianyar Ban & Oli",
    owner: "Bpk. I Ketut Dharma",
    email: "ketut@gianyarbanoli.id",
    whatsapp: "081556677889",
    kategori: "Oli & Spare Part",
    province: "Bali",
    city: "Gianyar",
    address: "Jl. Astina Utara No. 5, Gianyar, Bali 80511",
    mapsLink: "https://maps.google.com/?q=-8.5400,115.3307",
    avatar:
      "https://ui-avatars.com/api/?name=GB&background=CA8A04&color=fff&bold=true&size=80",
    lat: -8.54,
    lng: 115.3307,
  },
  // Jawa Tengah
  {
    id: 14,
    name: "Bengkel Spesialis Honda Semarang",
    owner: "Bpk. Slamet Riyadi",
    email: "slamet@bengkelhonda-smg.com",
    whatsapp: "082244556677",
    kategori: "Bengkel Spesialis",
    province: "Jawa Tengah",
    city: "Semarang",
    address:
      "Jl. Pandanaran No. 78, Pleburan, Semarang Selatan, Jawa Tengah 50241",
    mapsLink: "https://maps.google.com/?q=-6.9932,110.4203",
    avatar:
      "https://ui-avatars.com/api/?name=BH&background=1D4ED8&color=fff&bold=true&size=80",
    lat: -6.9932,
    lng: 110.4203,
  },
  {
    id: 15,
    name: "Solo Modif Center",
    owner: "Bpk. Joko Purnomo",
    email: "joko@solomodif.co.id",
    whatsapp: "085512345678",
    kategori: "Modifikasi Mobil",
    province: "Jawa Tengah",
    city: "Surakarta",
    address: "Jl. Slamet Riyadi No. 300, Laweyan, Surakarta, Jawa Tengah 57141",
    mapsLink: "https://maps.google.com/?q=-7.5755,110.8243",
    avatar:
      "https://ui-avatars.com/api/?name=SC&background=9F1239&color=fff&bold=true&size=80",
    lat: -7.5755,
    lng: 110.8243,
  },
  // Sumatera Utara
  {
    id: 16,
    name: "Medan Prima Bengkel",
    owner: "Bpk. Harun Al Rasyid",
    email: "harun@medanprimabengkel.com",
    whatsapp: "081365432109",
    kategori: "Bengkel Umum",
    province: "Sumatera Utara",
    city: "Medan",
    address:
      "Jl. Asia No. 123, Kota Matsum IV, Medan Area, Kota Medan, Sumut 20214",
    mapsLink: "https://maps.google.com/?q=3.5952,98.6722",
    avatar:
      "https://ui-avatars.com/api/?name=MP&background=1A2332&color=F5C800&bold=true&size=80",
    lat: 3.5952,
    lng: 98.6722,
  },
  {
    id: 17,
    name: "Toko Ban Deli Makmur",
    owner: "Ibu Fatimah Nasution",
    email: "fatimah@bandelimakmur.id",
    whatsapp: "082199887766",
    kategori: "Toko Ban",
    province: "Sumatera Utara",
    city: "Deli Serdang",
    address:
      "Jl. Thamrin No. 44, Lubuk Pakam, Deli Serdang, Sumatera Utara 20514",
    mapsLink: "https://maps.google.com/?q=3.4731,98.8392",
    avatar:
      "https://ui-avatars.com/api/?name=TD&background=EA580C&color=fff&bold=true&size=80",
    lat: 3.4731,
    lng: 98.8392,
  },
  // Sulawesi Selatan
  {
    id: 18,
    name: "Makassar Auto Detailing",
    owner: "Bpk. Syahrul Ramadhan",
    email: "syahrul@makassardetailing.com",
    whatsapp: "081411223344",
    kategori: "Detailing & Cuci Mobil",
    province: "Sulawesi Selatan",
    city: "Makassar",
    address:
      "Jl. Urip Sumoharjo No. 55, Panakkukang, Makassar, Sulawesi Selatan 90231",
    mapsLink: "https://maps.google.com/?q=-5.1477,119.4327",
    avatar:
      "https://ui-avatars.com/api/?name=MA&background=0F766E&color=fff&bold=true&size=80",
    lat: -5.1477,
    lng: 119.4327,
  },
  {
    id: 19,
    name: "Gowa Spare Part & Aksesoris",
    owner: "Ibu Andi Risna Wahyuni",
    email: "andi.risna@gowaaksesoris.id",
    whatsapp: "085588990011",
    kategori: "Aksesoris Mobil",
    province: "Sulawesi Selatan",
    city: "Gowa",
    address:
      "Jl. Sultan Hasanuddin No. 12, Somba Opu, Gowa, Sulawesi Selatan 92111",
    mapsLink: "https://maps.google.com/?q=-5.2200,119.4800",
    avatar:
      "https://ui-avatars.com/api/?name=GS&background=7C3AED&color=fff&bold=true&size=80",
    lat: -5.22,
    lng: 119.48,
  },
  // Kalimantan Timur
  {
    id: 20,
    name: "Balikpapan Bengkel Spesialis",
    owner: "Bpk. Eko Prasetyo",
    email: "eko@bengkelbalikpapan.com",
    whatsapp: "081453216789",
    kategori: "Bengkel Spesialis",
    province: "Kalimantan Timur",
    city: "Balikpapan",
    address:
      "Jl. Jenderal Sudirman No. 88, Balikpapan Kota, Kalimantan Timur 76112",
    mapsLink: "https://maps.google.com/?q=-1.2675,116.8289",
    avatar:
      "https://ui-avatars.com/api/?name=BB&background=1D4ED8&color=fff&bold=true&size=80",
    lat: -1.2675,
    lng: 116.8289,
  },
  {
    id: 21,
    name: "Samarinda Oli & Pelumas",
    owner: "Ibu Yuni Ariani",
    email: "yuni@samarindaoli.co.id",
    whatsapp: "082277889900",
    kategori: "Oli & Spare Part",
    province: "Kalimantan Timur",
    city: "Samarinda",
    address:
      "Jl. Untung Suropati No. 35, Samarinda Ilir, Samarinda, Kalimantan Timur 75117",
    mapsLink: "https://maps.google.com/?q=-0.5022,117.1536",
    avatar:
      "https://ui-avatars.com/api/?name=SO&background=CA8A04&color=fff&bold=true&size=80",
    lat: -0.5022,
    lng: 117.1536,
  },
  // Riau
  {
    id: 22,
    name: "Pekanbaru Car Wash & Detailing",
    owner: "Bpk. Mustafa Kamal",
    email: "mustafa@pkucarwash.com",
    whatsapp: "081372345678",
    kategori: "Detailing & Cuci Mobil",
    province: "Riau",
    city: "Pekanbaru",
    address: "Jl. Sudirman No. 170, Tampan, Pekanbaru, Riau 28291",
    mapsLink: "https://maps.google.com/?q=0.5070,101.4478",
    avatar:
      "https://ui-avatars.com/api/?name=PC&background=0F766E&color=fff&bold=true&size=80",
    lat: 0.507,
    lng: 101.4478,
  },
  // DIY Yogyakarta
  {
    id: 23,
    name: "Jogja Modifikasi & Custom",
    owner: "Bpk. Wahyu Widodo",
    email: "wahyu@jogjacustom.id",
    whatsapp: "082345678901",
    kategori: "Modifikasi Mobil",
    province: "DIY Yogyakarta",
    city: "Yogyakarta",
    address: "Jl. Mangkubumi No. 33, Gedongtengen, Kota Yogyakarta, DIY 55271",
    mapsLink: "https://maps.google.com/?q=-7.7956,110.3695",
    avatar:
      "https://ui-avatars.com/api/?name=JM&background=9F1239&color=fff&bold=true&size=80",
    lat: -7.7956,
    lng: 110.3695,
  },
];

// ─── Derived lists ────────────────────────────────────────────────────────
const PROVINCES = [...new Set(ALL_PARTNERS.map((p) => p.province))].sort();

type SortKey = "default" | "name-asc" | "kategori";
const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: "default", label: "Urutan Default" },
  { key: "name-asc", label: "Nama A–Z" },
  { key: "kategori", label: "Berdasarkan Kategori" },
];

export default function PetaPartnerPage() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedKategori, setSelectedKategori] = useState("");
  const [sortBy, setSortBy] = useState<SortKey>("default");
  const [showSort, setShowSort] = useState(false);
  const [selected, setSelected] = useState<number | null>(11);
  const sortRef = useRef<HTMLDivElement>(null);

  // Close sort dropdown on outside click
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setShowSort(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // Cities for selected province
  const availableCities = useMemo(() => {
    if (!selectedProvince) return [];
    return [
      ...new Set(
        ALL_PARTNERS.filter((p) => p.province === selectedProvince).map(
          (p) => p.city,
        ),
      ),
    ].sort();
  }, [selectedProvince]);

  // Filter + sort
  const filteredPartners = useMemo(() => {
    let result = [...ALL_PARTNERS];

    if (selectedProvince)
      result = result.filter((p) => p.province === selectedProvince);
    if (selectedCity) result = result.filter((p) => p.city === selectedCity);
    if (selectedKategori)
      result = result.filter((p) => p.kategori === selectedKategori);
    if (debouncedSearch.trim()) {
      const q = debouncedSearch.trim().toLowerCase();
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

    switch (sortBy) {
      case "name-asc":
        return result.sort((a, b) => a.name.localeCompare(b.name));
      case "kategori":
        return result.sort((a, b) => a.kategori.localeCompare(b.kategori));
      default:
        return result;
    }
  }, [
    debouncedSearch,
    selectedProvince,
    selectedCity,
    selectedKategori,
    sortBy,
  ]);

  const mapPartners = useMemo(() => {
    const base = filteredPartners.map((p) => ({
      id: p.id,
      name: p.name,
      kategori: p.kategori,
      lat: p.lat,
      lng: p.lng,
    }));
    if (selected != null && !base.some((p) => p.id === selected)) {
      const extra = ALL_PARTNERS.find((p) => p.id === selected);
      if (extra)
        base.push({
          id: extra.id,
          name: extra.name,
          kategori: extra.kategori,
          lat: extra.lat,
          lng: extra.lng,
        });
    }
    return base;
  }, [filteredPartners, selected]);

  const selectedPosition = useMemo((): [number, number] | null => {
    if (selected == null) return null;
    const p = ALL_PARTNERS.find((x) => x.id === selected);
    return p ? [p.lat, p.lng] : null;
  }, [selected]);

  const hasActiveFilters =
    selectedProvince ||
    selectedCity ||
    selectedKategori ||
    debouncedSearch.trim();

  function clearFilters() {
    setSearch("");
    setSelectedProvince("");
    setSelectedCity("");
    setSelectedKategori("");
    setSortBy("default");
  }

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-80px)] bg-white overflow-hidden">
      {/* ── SIDEBAR KIRI ──────────────────────────────────────────── */}
      <div className="w-full md:w-[400px] flex-shrink-0 border-r border-gray-200 bg-white flex flex-col h-full shadow-[2px_0_15px_-3px_rgba(0,0,0,0.05)] z-10">
        {/* Header & Filter */}
        <div className="p-5 md:p-6 pb-4 border-b border-gray-100 shrink-0 space-y-3">
          <h2 className="font-bold text-gray-900 text-[20px]">
            Cari Partner BRN
          </h2>

          {/* Search */}
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Nama usaha, kategori, atau kota..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-9 py-3 text-[13px] border border-gray-200 rounded-xl outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 placeholder:text-gray-400 transition-shadow shadow-sm"
            />
            {search ? (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={14} />
              </button>
            ) : null}
          </div>

          {/* Provinsi + Kota */}
          <div className="flex gap-3">
            <div className="relative flex-1">
              <select
                value={selectedProvince}
                onChange={(e) => {
                  setSelectedProvince(e.target.value);
                  setSelectedCity("");
                }}
                className="w-full appearance-none px-4 py-3 text-[13px] border border-gray-200 rounded-xl outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 text-gray-600 font-medium bg-white shadow-sm cursor-pointer"
              >
                <option value="">Semua Provinsi</option>
                {PROVINCES.map((prov) => (
                  <option key={prov} value={prov}>
                    {prov}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                <svg
                  className="fill-current h-3.5 w-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className="relative flex-1">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
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
                <svg
                  className="fill-current h-3.5 w-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Kategori filter */}
          <div className="relative">
            <select
              value={selectedKategori}
              onChange={(e) => setSelectedKategori(e.target.value)}
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
              <svg
                className="fill-current h-3.5 w-3.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

          {/* Reset filter chip */}
          {hasActiveFilters ? (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1.5 text-[12px] font-semibold text-yellow-700 bg-yellow-50 border border-yellow-200 px-3 py-1.5 rounded-lg hover:bg-yellow-100 transition-colors"
            >
              <X size={11} />
              Reset semua filter
            </button>
          ) : null}
        </div>

        {/* Counter + Sort */}
        <div className="px-5 md:px-6 py-3 flex items-center justify-between shrink-0">
          <span className="text-[12px] font-bold text-gray-400">
            Menampilkan{" "}
            <span className="text-gray-700">{filteredPartners.length}</span>{" "}
            dari {ALL_PARTNERS.length} Partner
          </span>

          <div className="relative" ref={sortRef}>
            <button
              onClick={() => setShowSort((v) => !v)}
              className={`flex items-center gap-1.5 text-[12px] font-semibold px-3 py-1.5 rounded-lg border transition-colors ${
                sortBy !== "default"
                  ? "border-yellow-300 bg-yellow-50 text-yellow-700"
                  : "border-gray-200 bg-white text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              <ArrowUpDown size={13} />
              <span className="hidden sm:inline">
                {SORT_OPTIONS.find((o) => o.key === sortBy)?.label ?? "Urutkan"}
              </span>
            </button>

            {showSort ? (
              <div className="absolute right-0 top-full mt-1.5 w-52 bg-white border border-gray-100 rounded-xl shadow-lg z-20 overflow-hidden">
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => {
                      setSortBy(opt.key);
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

        {/* Partner List */}
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
                onClick={clearFilters}
                className="mt-4 text-[12px] font-semibold text-yellow-700 underline underline-offset-2 hover:text-yellow-800 transition-colors"
              >
                Reset filter
              </button>
            </div>
          ) : (
            filteredPartners.map((partner) => {
              const isSelected = selected === partner.id;
              const badgeClass =
                KATEGORI_COLOR[partner.kategori as Kategori] ??
                "bg-gray-100 text-gray-600";

              return (
                <div
                  key={partner.id}
                  onClick={() => setSelected(partner.id)}
                  className={`rounded-[16px] p-5 cursor-pointer transition-all duration-200 border-2 ${
                    isSelected
                      ? "border-[#F5C800] shadow-[0_4px_20px_-5px_rgba(245,200,0,0.25)] bg-yellow-50/30"
                      : "border-transparent shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] hover:border-gray-100 hover:shadow-md bg-white"
                  }`}
                >
                  {/* Avatar & Nama */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 border border-gray-100">
                      <img
                        src={partner.avatar}
                        alt={partner.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center min-w-0">
                      <h3 className="font-bold text-gray-900 text-[15px] leading-tight mb-0.5 truncate">
                        {partner.name}
                      </h3>
                      <p className="text-[12px] text-gray-400 font-medium truncate">
                        {partner.owner}
                      </p>
                    </div>
                  </div>

                  {/* Kategori badge */}
                  <div className="mb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-lg ${badgeClass}`}
                    >
                      <Tag size={10} />
                      {partner.kategori}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="flex flex-col gap-1.5 mb-5">
                    <div className="flex items-center gap-2 text-[12px] font-bold text-gray-600">
                      <MapPin size={13} className="text-gray-400 shrink-0" />
                      {partner.city},{" "}
                      <span className="font-normal text-gray-500">
                        {partner.province}
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-[12px] text-gray-400 leading-relaxed pl-5">
                      {partner.address}
                    </div>
                    <div className="flex items-center gap-2 text-[12px] text-gray-400 pl-5">
                      <Mail size={11} className="shrink-0" />
                      {partner.email}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2.5">
                    <a
                      href={`https://wa.me/62${partner.whatsapp.replace(/^0/, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 bg-[#10B981] hover:bg-[#059669] text-white text-[13px] font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
                    >
                      <Phone size={14} fill="currentColor" />
                      Hubungi
                    </a>
                    <a
                      href={partner.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelected(partner.id);
                      }}
                      title="Lihat di Google Maps"
                      className="w-[46px] h-[46px] border border-gray-200 rounded-xl hover:bg-gray-50 flex items-center justify-center transition-colors shadow-sm shrink-0"
                    >
                      <Map size={18} className="text-gray-600" />
                    </a>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* ── MAP KANAN ─────────────────────────────────────────────── */}
      <div className="relative z-0 flex min-h-[400px] flex-1 bg-[#F5F5F5] md:min-h-0">
        <PartnerMapLoader
          partners={mapPartners}
          selectedId={selected}
          selectedPosition={selectedPosition}
          onMarkerClick={setSelected}
        />
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
