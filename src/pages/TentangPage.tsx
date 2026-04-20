import { TentangHeroSection } from "@/components/tentang/TentangHeroSection";
import { TentangStorySection } from "@/components/tentang/TentangStorySection";
import { TentangTeamSection } from "@/components/tentang/TentangTeamSection";
import { VisiMisiSection } from "@/components/tentang/VisiMisiSection";

export default function TentangPage() {
  return (
    <div className="bg-white min-h-screen">
      <TentangHeroSection />
      <TentangStorySection />
      <VisiMisiSection />
      <TentangTeamSection />
    </div>
  );
}
