import { Link } from "react-router-dom";
import { EVENTS } from "@/data";
import { Container } from "@/components/ui/Container";
import { EventCard } from "@/components/ui/EventCard";

export function EventsPreviewSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC]">
      <Container>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-gray-200 text-gray-700 text-[13px] font-semibold mb-6 shadow-sm">
              Agenda komunitas
            </span>
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-gray-900 leading-tight mb-4 tracking-tight">
              Event komunitas terdekat
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-lg">
              Area event kini dibuat lebih ringan dan profesional, memberi ruang
              lebih luas untuk agenda komunitas, seminar, dan aktivitas
              networking BRN.
            </p>
          </div>
          <Link to="/event" className="shrink-0">
            <button className="w-full md:w-auto px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 font-semibold text-sm hover:bg-gray-50 transition-colors shadow-sm">
              Lihat Semua Event
            </button>
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EVENTS.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </Container>
    </section>
  );
}
