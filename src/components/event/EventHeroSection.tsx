import { Search } from "lucide-react";

type EventHeroSectionProps = {
  search: string;
  onSearchChange: (v: string) => void;
};

export function EventHeroSection({
  search,
  onSearchChange,
}: EventHeroSectionProps) {
  return (
    <section className="bg-[#F8FAFC] pt-24 pb-16 text-center border-b border-gray-100 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-gray-200 text-gray-700 text-[13px] font-semibold mb-6 shadow-sm">
          Jadwal & Agenda
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
          Temukan Berbagai Event BRN
        </h1>
        <p className="text-gray-500 text-[15px] leading-relaxed max-w-xl mx-auto mb-10">
          Ikuti kegiatan kopdar, pelatihan, dan musyawarah nasional. Perkuat
          jaringan bisnis rental mobil Anda di seluruh Indonesia.
        </p>

        <div className="max-w-xl mx-auto bg-white p-1.5 rounded-full shadow-sm border border-gray-200 flex items-center">
          <div className="flex-1 relative flex items-center">
            <Search size={18} className="absolute left-4 text-gray-400" />
            <input
              type="text"
              placeholder="Cari nama event atau lokasi..."
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-11 pr-4 py-3 text-sm bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
            />
          </div>
          <button
            type="button"
            className="bg-[#0F172A] hover:bg-[#1e293b] text-white px-8 py-3 rounded-full text-sm font-semibold transition-colors shrink-0"
          >
            Cari Event
          </button>
        </div>
      </div>
    </section>
  );
}
