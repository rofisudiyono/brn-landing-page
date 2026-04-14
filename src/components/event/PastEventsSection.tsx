import { ExternalLink } from "lucide-react";
import type { PastEventItem } from "@/types/eventPage";

type PastEventsSectionProps = {
  events: PastEventItem[];
};

export function PastEventsSection({ events }: PastEventsSectionProps) {
  return (
    <section className="bg-[#F8FAFC] py-16 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Acara Sebelumnya
            </h2>
            <p className="text-gray-500 text-sm">
              Dokumentasi kegiatan dan event yang telah sukses diselenggarakan.
            </p>
          </div>
          <button
            type="button"
            className="text-[13px] font-bold text-gray-900 hover:text-gray-600 transition-colors shrink-0"
          >
            Lihat Semua Galeri
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {events.map((event) => (
            <div key={event.id} className="group cursor-pointer">
              <div className="rounded-[16px] overflow-hidden aspect-[4/3] mb-4 relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
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
  );
}
