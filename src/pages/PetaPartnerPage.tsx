import { useState } from "react";
import {
  MapPin,
  Phone,
  Search,
  Car,
  SlidersHorizontal,
  Map,
  Plus,
  Minus,
  Crosshair,
} from "lucide-react";

// Dummy Data untuk merender UI persis gambar
const DUMMY_PARTNERS = [
  {
    id: 1,
    name: "Surya Rentcar Bali",
    owner: "Bpk. I Wayan Surya",
    armada: 45,
    city: "Denpasar, Bali",
    address:
      "Jl. Bypass Ngurah Rai No. 88, Sanur, Denpasar Selatan, Bali 80228",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop",
    whatsapp: "081234567890",
  },
  {
    id: 2,
    name: "Bintang Auto Rent",
    owner: "Bpk. Ahmad Hidayat",
    armada: 120,
    city: "Jakarta Selatan, DKI Jakarta",
    address: "Jl. TB Simatupang No. 45, Cilandak, Jakarta Selatan",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop",
    whatsapp: "081234567891",
  },
];

export default function PetaPartnerPage() {
  const [search, setSearch] = useState("");
  // Set default selected ke id 1 agar sesuai gambar
  const [selected, setSelected] = useState<number | null>(1);

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-80px)] bg-white overflow-hidden">
      {/* === SIDEBAR KIRI === */}
      <div className="w-full md:w-[400px] flex-shrink-0 border-r border-gray-200 bg-white flex flex-col h-full shadow-[2px_0_15px_-3px_rgba(0,0,0,0.05)] z-10">
        {/* Header & Filter Area */}
        <div className="p-5 md:p-6 pb-4 border-b border-gray-100 shrink-0">
          <h2 className="font-bold text-gray-900 text-[20px] mb-5">
            Cari Partner BRN
          </h2>

          {/* Search Input */}
          <div className="relative mb-4">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Cari nama rental atau kota..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 text-[13px] border border-gray-200 rounded-xl outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 placeholder:text-gray-400 transition-shadow shadow-sm"
            />
          </div>

          {/* Dropdown Provinsi & Kota */}
          <div className="flex gap-3">
            <div className="relative flex-1">
              <select className="w-full appearance-none px-4 py-3 text-[13px] border border-gray-200 rounded-xl outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 text-gray-600 font-medium bg-white shadow-sm cursor-pointer">
                <option value="">Semua Provinsi</option>
                <option value="bali">Bali</option>
                <option value="dki">DKI Jakarta</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>

            <div className="relative flex-1">
              <select className="w-full appearance-none px-4 py-3 text-[13px] border border-gray-200 rounded-xl outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 text-gray-400 font-medium bg-white shadow-sm cursor-pointer">
                <option value="">Pilih Kota</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Counter Info */}
        <div className="px-5 md:px-6 py-3 flex items-center justify-between shrink-0">
          <span className="text-[12px] font-bold text-gray-400">
            Menampilkan 45 Partner
          </span>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <SlidersHorizontal size={14} />
          </button>
        </div>

        {/* List Partner Cards */}
        <div className="flex-1 overflow-y-auto px-5 md:px-6 pb-6 space-y-4 custom-scrollbar">
          {DUMMY_PARTNERS.map((partner) => {
            const isSelected = selected === partner.id;
            return (
              <div
                key={partner.id}
                onClick={() => setSelected(partner.id)}
                // Border keliling kuning cerah jika terpilih
                className={`rounded-[16px] p-5 cursor-pointer transition-all duration-200 border-2 ${
                  isSelected
                    ? "border-[#F5C800] shadow-[0_4px_20px_-5px_rgba(245,200,0,0.25)]"
                    : "border-transparent shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] hover:border-gray-100 hover:shadow-md"
                }`}
              >
                {/* Header Card: Avatar & Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 border border-gray-100">
                    <img
                      src={partner.avatar}
                      alt={partner.name}
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-bold text-gray-900 text-[15px] leading-tight mb-0.5">
                      {partner.name}
                    </h3>
                    <p className="text-[12px] text-gray-400 font-medium">
                      {partner.owner}
                    </p>
                  </div>
                </div>

                {/* Info Text: Armada, Kota, Alamat */}
                <div className="flex flex-col gap-2 mb-5">
                  <div className="flex items-center gap-2 text-[12px] font-bold text-gray-600">
                    <Car size={13} className="text-gray-400" /> {partner.armada}{" "}
                    Armada
                  </div>
                  <div className="flex items-center gap-2 text-[12px] font-bold text-gray-600">
                    <MapPin size={13} className="text-gray-400" />{" "}
                    {partner.city}
                  </div>
                  <div className="flex items-start gap-2 text-[12px] text-gray-400 leading-relaxed pl-5">
                    {partner.address}
                  </div>
                </div>

                {/* Buttons Action */}
                <div className="flex gap-2.5">
                  <a
                    href={`https://wa.me/62${partner.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    // Tombol Hubungi Hijau
                    className="flex-1 bg-[#10B981] hover:bg-[#059669] text-white text-[13px] font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <Phone size={14} fill="currentColor" /> Hubungi
                  </a>
                  <button className="w-[46px] h-[46px] border border-gray-200 rounded-xl hover:bg-gray-50 flex items-center justify-center transition-colors shadow-sm shrink-0">
                    <Map size={18} className="text-gray-600" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* === AREA MAP KANAN === */}
      <div className="flex-1 bg-[#F5F5F5] relative min-h-[400px] md:min-h-0 z-0">
        {/* Simulasi Gambar Background Peta Light Mode (sesuai gambar) */}
        <div className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none">
          {/* Anda bisa menggunakan map API tile sungguhan, ini hanya simulasi UI */}
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
            alt="Map Background"
            className="w-full h-full object-cover grayscale brightness-125 contrast-75"
          />
        </div>

        {/* === SIMULASI PIN MAP === */}
        {/* Pin Kuning Biasa */}
        <div className="absolute top-[35%] left-[25%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
          <div className="w-8 h-8 rounded-full bg-[#F5C800] border-2 border-white shadow-md flex items-center justify-center relative">
            <Car size={14} className="text-white" />
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-t-[8px] border-t-[#F5C800] border-r-[6px] border-r-transparent"></div>
          </div>
        </div>
        <div className="absolute top-[42%] left-[45%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
          <div className="w-8 h-8 rounded-full bg-[#F5C800] border-2 border-white shadow-md flex items-center justify-center relative">
            <Car size={14} className="text-white" />
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-t-[8px] border-t-[#F5C800] border-r-[6px] border-r-transparent"></div>
          </div>
        </div>
        <div className="absolute bottom-[30%] right-[15%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
          <div className="w-8 h-8 rounded-full bg-[#F5C800] border-2 border-white shadow-md flex items-center justify-center relative">
            <Car size={14} className="text-white" />
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-t-[8px] border-t-[#F5C800] border-r-[6px] border-r-transparent"></div>
          </div>
        </div>

        {/* Pin Hijau Aktif (Surya Rentcar) */}
        <div className="absolute top-[50%] left-[65%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 cursor-pointer">
          {/* Info Box */}
          <div className="bg-white rounded-xl shadow-lg px-4 py-2.5 mb-2 flex flex-col items-center border border-gray-100">
            <span className="font-bold text-[12px] text-gray-900 leading-tight">
              Surya Rentcar Bali
            </span>
            <span className="text-[10px] text-gray-400 font-medium">
              45 Armada
            </span>
          </div>
          {/* Green Pin */}
          <div className="w-10 h-10 rounded-full bg-[#10B981] border-2 border-white shadow-[0_4px_10px_rgba(16,185,129,0.4)] flex items-center justify-center relative">
            <Car size={18} className="text-white" />
            {/* Segitiga bawah */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-t-[10px] border-t-[#10B981] border-r-[8px] border-r-transparent"></div>
          </div>
          {/* Shadow bawah pin */}
          <div className="w-6 h-2 bg-black/10 rounded-[100%] absolute -bottom-4 blur-[1px]"></div>
        </div>

        {/* Map Controls Pojok Kanan Bawah */}
        <div className="absolute bottom-6 right-6 flex flex-col gap-2 z-20">
          <div className="flex flex-col bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
            <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 border-b border-gray-100 transition-colors text-gray-600">
              <Plus size={16} />
            </button>
            <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-600">
              <Minus size={16} />
            </button>
          </div>
          <button className="w-10 h-10 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-600 mt-1">
            <Crosshair size={16} />
          </button>
        </div>

        {/* Scale Indicator Pojok Kiri Bawah */}
        <div className="absolute bottom-6 left-6 z-20 bg-white/80 backdrop-blur-sm px-2 py-1 rounded border border-gray-200 shadow-sm flex items-center gap-2">
          <span className="text-[10px] font-bold text-gray-600">500m</span>
          <div className="w-8 h-0.5 bg-gray-900"></div>
        </div>
      </div>

      {/* Agar scrollbar card sidebar terlihat bagus */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #E5E7EB;
          border-radius: 20px;
        }
      `,
        }}
      />
    </div>
  );
}
