import { MapPin, Clock } from "lucide-react";
import type { FeaturedEvent } from "@/types/eventPage";

type EventFeaturedBlockProps = {
  event: FeaturedEvent;
};

export function EventFeaturedBlock({ event }: EventFeaturedBlockProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-8 items-center bg-white rounded-[24px] border border-gray-100 p-4 md:p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] mb-10">
      <div className="rounded-[16px] overflow-hidden aspect-video lg:aspect-auto lg:h-[360px]">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col p-2 lg:p-6 lg:pr-10">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 rounded-md bg-yellow-50 text-yellow-700 text-xs font-bold">
            {event.category}
          </span>
          <span className="px-3 py-1 rounded-md bg-gray-100 text-gray-600 text-xs font-bold">
            {event.dateText}
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
          {event.title}
        </h3>
        <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
          {event.description}
        </p>

        <div className="flex flex-col gap-3 mb-8">
          <div className="flex items-center gap-3 text-gray-600 text-[13px] font-medium">
            <MapPin size={16} className="text-gray-400" /> {event.location}
          </div>
          <div className="flex items-center gap-3 text-gray-600 text-[13px] font-medium">
            <Clock size={16} className="text-gray-400" /> {event.time}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            className="bg-[#0F172A] hover:bg-[#1e293b] text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors"
          >
            Daftar Sekarang
          </button>
          <button
            type="button"
            className="text-gray-700 hover:text-gray-900 px-4 py-3 text-sm font-semibold transition-colors"
          >
            Lihat Detail
          </button>
        </div>
      </div>
    </div>
  );
}
