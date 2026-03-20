import { Link } from "react-router-dom";
import { EVENTS } from "@/data"; // Pastikan EVENTS memiliki field image, date, title, dan description

export function EventsPreviewSection() {
  return (
    // Background section diubah menjadi light gray agar elemen putih (card & button) lebih menonjol
    <section className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            {/* Badge - Outline style */}
            <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-gray-200 text-gray-700 text-[13px] font-semibold mb-6 shadow-sm">
              Agenda komunitas
            </span>

            {/* Title */}
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-gray-900 leading-tight mb-4 tracking-tight">
              Event komunitas terdekat
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-lg">
              Area event kini dibuat lebih ringan dan profesional, memberi ruang
              lebih luas untuk agenda komunitas, seminar, dan aktivitas
              networking BRN.
            </p>
          </div>

          {/* Button Right */}
          <Link to="/event" className="shrink-0">
            <button className="w-full md:w-auto px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 font-semibold text-sm hover:bg-gray-50 transition-colors shadow-sm">
              Lihat Semua Event
            </button>
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EVENTS.map((event, i) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:border-gray-200 hover:shadow-md transition-all duration-300 group flex flex-col"
            >
              {/* Image Section */}
              <div className="overflow-hidden aspect-[16/10] shrink-0">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Section - Ikon dihapus, layout lebih lega */}
              <div className="p-6 md:p-8 flex flex-col grow">
                {/* Date - Clean text format */}
                <span className="text-gray-500 text-[13px] font-medium mb-3 block">
                  {event.date}
                </span>

                {/* Title */}
                <h3 className="font-bold text-gray-900 text-lg md:text-xl mb-3 leading-snug">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] text-gray-600 leading-relaxed line-clamp-3">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
