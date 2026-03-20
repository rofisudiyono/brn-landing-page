import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PartnersPreviewSection } from "@/components/sections/PartnersPreviewSection";
import { EventsPreviewSection } from "@/components/sections/EventsPreviewSection";
import { AppSection } from "@/components/sections/AppSection";
import { KordaSection } from "@/components/sections/KordaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PartnersPreviewSection />
      <EventsPreviewSection />
      <AppSection />
      <KordaSection />
    </>
  );
}
