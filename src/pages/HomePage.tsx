import { HeroSection } from "@/components/sections/HeroSection";
import { PartnersPreviewSection } from "@/components/sections/PartnersPreviewSection";
import { EventsPreviewSection } from "@/components/sections/EventsPreviewSection";
import { AppSection } from "@/components/sections/AppSection";
import { KordaSection } from "@/components/sections/KordaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PartnersPreviewSection />
      <EventsPreviewSection />
      <AppSection />
      <KordaSection />
    </>
  );
}
