import { useState } from "react";
import { EventFeaturedBlock } from "@/components/event/EventFeaturedBlock";
import { EventHeroSection } from "@/components/event/EventHeroSection";
import { PastEventsSection } from "@/components/event/PastEventsSection";
import { UpcomingEventsGrid } from "@/components/event/UpcomingEventsGrid";
import {
  FEATURED_EVENT,
  PAST_EVENTS,
  UPCOMING_EVENTS,
} from "@/constant/eventPage";

export default function EventPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-white min-h-screen">
      <EventHeroSection search={search} onSearchChange={setSearch} />

      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Event Mendatang
          </h2>
          <p className="text-gray-500 text-sm">
            Jangan lewatkan agenda penting komunitas kita.
          </p>
        </div>

        <EventFeaturedBlock event={FEATURED_EVENT} />
        <UpcomingEventsGrid events={UPCOMING_EVENTS} />
      </section>

      <PastEventsSection events={PAST_EVENTS} />
    </div>
  );
}
