import { MapPin, Clock, ArrowRight } from "lucide-react";
import type { UpcomingEvent } from "@/types/eventPage";

type UpcomingEventsGridProps = {
  events: UpcomingEvent[];
};

export function UpcomingEventsGrid({ events }: UpcomingEventsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {events.map((event) => (
        <div
          key={event.id}
          className="bg-white rounded-[20px] border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group"
        >
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

          <div className="p-6 flex flex-col grow">
            <span className="text-[10px] font-bold text-gray-400 tracking-wider mb-2">
              {event.category}
            </span>
            <h4 className="font-bold text-lg text-gray-900 mb-4 leading-snug line-clamp-2">
              {event.title}
            </h4>

            <div className="flex flex-col gap-2.5 mb-6">
              <div className="flex items-center gap-2 text-gray-500 text-[13px]">
                <MapPin size={14} className="text-gray-400" /> {event.location}
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-[13px]">
                <Clock size={14} className="text-gray-400" /> {event.time}
              </div>
            </div>

            <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <img
                    className="w-7 h-7 rounded-full border-2 border-white object-cover"
                    src="https://i.pravatar.cc/100?img=11"
                    alt=""
                  />
                  <img
                    className="w-7 h-7 rounded-full border-2 border-white object-cover"
                    src="https://i.pravatar.cc/100?img=12"
                    alt=""
                  />
                </div>
                <span className="text-[11px] font-bold text-gray-500 ml-2">
                  {event.attendees}
                </span>
              </div>
              <button
                type="button"
                className="flex items-center gap-1.5 text-[13px] font-bold text-gray-900 hover:text-yellow-600 transition-colors"
              >
                Detail <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
