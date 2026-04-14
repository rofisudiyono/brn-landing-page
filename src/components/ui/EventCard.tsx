import { memo } from "react";

export interface EventCardItem {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string;
}

interface EventCardProps {
  event: EventCardItem;
}

export const EventCard = memo(({ event }: EventCardProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:border-gray-200 hover:shadow-md transition-all duration-300 group flex flex-col">
      <div className="overflow-hidden aspect-[16/10] shrink-0">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 md:p-8 flex flex-col grow">
        <span className="text-gray-500 text-[13px] font-medium mb-3 block">
          {event.date}
        </span>
        <h3 className="font-bold text-gray-900 text-lg md:text-xl mb-3 leading-snug">
          {event.title}
        </h3>
        <p className="text-[14px] text-gray-600 leading-relaxed line-clamp-3">
          {event.description}
        </p>
      </div>
    </div>
  );
});

EventCard.displayName = "EventCard";
