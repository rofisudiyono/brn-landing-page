import { useState } from "react";
import { MapPin, Clock, Search, ArrowRight, ExternalLink } from "lucide-react";

// Mock Data disesuaikan dengan tampilan gambar agar render UI sempurna
const FEATURED_EVENT = {
  category: "Musyawarah Nasional",
  dateText: "12 - 14 Okt 2025",
  title: "Munas BRN Ke-5 Jakarta 2025",
  description:
    "Perkumpulan seluruh anggota dan pengurus dari 38 Korda se-Indonesia untuk membahas arah kebijakan dan strategi komunitas di masa mendatang.",
  location: "Hotel Grand Mercure Kemayoran, Jakarta",
  time: "08:00 WIB - Selesai",
  image:
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
};

const UPCOMING_EVENTS = [
  {
    id: 1,
    category: "KOPDAR REGIONAL",
    title: "Kopdar BRN Jabar & Banten",
    location: "Bandung, Jawa Barat",
    time: "10:00 - 15:00 WIB",
    dateMonth: "Okt",
    dateDay: "05",
    attendees: "+45",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "PELATIHAN",
    title: "Manajemen Armada Digital",
    location: "Zoom Meeting (Online)",
    time: "19:00 - 21:00 WIB",
    dateMonth: "Okt",
    dateDay: "20",
    attendees: "+120",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "GATHERING",
    title: "Family Gathering Akhir Tahun",
    location: "Yogyakarta, Jawa Tengah",
    time: "09:00 WIB - Selesai",
    dateMonth: "Des",
    dateDay: "15",
    attendees: "+85",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop",
  },
];

const PAST_EVENTS = [
  {
    id: 1,
    date: "12 Agu 2025",
    title: "Kopdar Korda Jatim Hebat",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    date: "05 Jul 2025",
    title: "Seminar Legalitas Usaha",
    image:
      "https://images.unsplash.com/photo-1475721025505-c315a6ab5345?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    date: "14 Jun 2025",
    title: "Bakti Sosial BRN Peduli",
    image:
      "https://images.unsplash.com/photo-1593113565637-51c5d58dc886?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    date: "21 Mei 2025",
    title: "HUT BRN Ke-4 Nasional",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop",
  },
];

export default function EventPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-white min-h-screen">
      {/* === HERO & SEARCH SECTION === */}
      <section className="bg-[#F8FAFC] pt-24 pb-16 text-center border-b border-gray-100 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-gray-200 text-gray-700 text-[13px] font-semibold mb-6 shadow-sm">
            Jadwal & Agenda
          </span>

          {/* Titles */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
            Temukan Berbagai Event BRN
          </h1>
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-xl mx-auto mb-10">
            Ikuti kegiatan kopdar, pelatihan, dan musyawarah nasional. Perkuat
            jaringan bisnis rental mobil Anda di seluruh Indonesia.
          </p>

          {/* Search Bar - Single Bar Style */}
          <div className="max-w-xl mx-auto bg-white p-1.5 rounded-full shadow-sm border border-gray-200 flex items-center">
            <div className="flex-1 relative flex items-center">
              <Search size={18} className="absolute left-4 text-gray-400" />
              <input
                type="text"
                placeholder="Cari nama event atau lokasi..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 text-sm bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
              />
            </div>
            <button className="bg-[#0F172A] hover:bg-[#1e293b] text-white px-8 py-3 rounded-full text-sm font-semibold transition-colors shrink-0">
              Cari Event
            </button>
          </div>
        </div>
      </section>

      {/* === EVENT MENDATANG SECTION === */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Event Mendatang
          </h2>
          <p className="text-gray-500 text-sm">
            Jangan lewatkan agenda penting komunitas kita.
          </p>
        </div>

        {/* 1. Featured Event (Big Card) */}
        <div className="grid lg:grid-cols-2 gap-8 items-center bg-white rounded-[24px] border border-gray-100 p-4 md:p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] mb-10">
          <div className="rounded-[16px] overflow-hidden aspect-video lg:aspect-auto lg:h-[360px]">
            <img
              src={FEATURED_EVENT.image}
              alt={FEATURED_EVENT.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col p-2 lg:p-6 lg:pr-10">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-md bg-yellow-50 text-yellow-700 text-xs font-bold">
                {FEATURED_EVENT.category}
              </span>
              <span className="px-3 py-1 rounded-md bg-gray-100 text-gray-600 text-xs font-bold">
                {FEATURED_EVENT.dateText}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              {FEATURED_EVENT.title}
            </h3>
            <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
              {FEATURED_EVENT.description}
            </p>

            <div className="flex flex-col gap-3 mb-8">
              <div className="flex items-center gap-3 text-gray-600 text-[13px] font-medium">
                <MapPin size={16} className="text-gray-400" />{" "}
                {FEATURED_EVENT.location}
              </div>
              <div className="flex items-center gap-3 text-gray-600 text-[13px] font-medium">
                <Clock size={16} className="text-gray-400" />{" "}
                {FEATURED_EVENT.time}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-[#0F172A] hover:bg-[#1e293b] text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors">
                Daftar Sekarang
              </button>
              <button className="text-gray-700 hover:text-gray-900 px-4 py-3 text-sm font-semibold transition-colors">
                Lihat Detail
              </button>
            </div>
          </div>
        </div>

        {/* 2. Standard Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {UPCOMING_EVENTS.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-[20px] border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group"
            >
              {/* Image & Floating Date */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white rounded-xl shadow-md flex flex-col items-center justify-center w-12 h-12">
                  <span className="text-[10px] font-bold text-yellow-500 uppercase leading-none mb-0.5">
                    {event.dateMonth}
                  </span>
                  <span className="text-lg font-black text-gray-900 leading-none">
                    {event.dateDay}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col grow">
                <span className="text-[10px] font-bold text-gray-400 tracking-wider mb-2">
                  {event.category}
                </span>
                <h4 className="font-bold text-lg text-gray-900 mb-4 leading-snug line-clamp-2">
                  {event.title}
                </h4>

                <div className="flex flex-col gap-2.5 mb-6">
                  <div className="flex items-center gap-2 text-gray-500 text-[13px]">
                    <MapPin size={14} className="text-gray-400" />{" "}
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-[13px]">
                    <Clock size={14} className="text-gray-400" /> {event.time}
                  </div>
                </div>

                {/* Card Footer (Avatars & Link) */}
                <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center">
                    {/* Dummy Avatars */}
                    <div className="flex -space-x-2">
                      <img
                        className="w-7 h-7 rounded-full border-2 border-white object-cover"
                        src="https://i.pravatar.cc/100?img=11"
                        alt="User"
                      />
                      <img
                        className="w-7 h-7 rounded-full border-2 border-white object-cover"
                        src="https://i.pravatar.cc/100?img=12"
                        alt="User"
                      />
                    </div>
                    <span className="text-[11px] font-bold text-gray-500 ml-2">
                      {event.attendees}
                    </span>
                  </div>
                  <button className="flex items-center gap-1.5 text-[13px] font-bold text-gray-900 hover:text-yellow-600 transition-colors">
                    Detail <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === ACARA SEBELUMNYA SECTION === */}
      <section className="bg-[#F8FAFC] py-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Acara Sebelumnya
              </h2>
              <p className="text-gray-500 text-sm">
                Dokumentasi kegiatan dan event yang telah sukses
                diselenggarakan.
              </p>
            </div>
            <button className="text-[13px] font-bold text-gray-900 hover:text-gray-600 transition-colors shrink-0">
              Lihat Semua Galeri
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PAST_EVENTS.map((event) => (
              <div key={event.id} className="group cursor-pointer">
                <div className="rounded-[16px] overflow-hidden aspect-[4/3] mb-4 relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <p className="text-[11px] font-semibold text-gray-400 mb-1">
                  {event.date}
                </p>
                <h4 className="text-[14px] font-bold text-gray-900 mb-2 leading-snug group-hover:text-[#0F172A] transition-colors">
                  {event.title}
                </h4>
                <div className="flex items-center gap-1.5 text-[12px] font-bold text-gray-500 group-hover:text-gray-900 transition-colors">
                  Lihat dokumentasi <ExternalLink size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
