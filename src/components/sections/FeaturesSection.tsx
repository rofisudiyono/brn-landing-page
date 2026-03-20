import { FEATURES } from "@/data";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MapPin, ShieldCheck, Users } from "lucide-react";

const FEATURE_ICONS: Record<number, React.ReactNode> = {
  1: <MapPin size={18} className="text-white" />,
  2: <ShieldCheck size={18} className="text-white" />,
  3: <Users size={18} className="text-white" />,
};

const FEATURE_BADGES: Record<number, string> = {
  1: "Visibilitas nasional",
  2: "Trust & authority",
  3: "Komunitas solid",
};

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <SectionHeader
          label="Benefit utama BRN"
          labelClassName="bg-[#F5C800]/15 text-[#1A2332]"
          title="Mengapa bergabung dengan BRN?"
          titleClassName="text-3xl md:text-4xl font-black text-[#1A2332] mb-3"
          titleStyle={{ fontFamily: "Syne, sans-serif" }}
          description="Struktur komunitas yang kuat, berdah dan mudah diakses, sehingga value utama komunitas langsung terlihat jelas."
          descriptionClassName="text-sm max-w-md mx-auto"
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <div
              key={feature.id}
              className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-[#F5C800]/40 hover:shadow-md transition-all duration-200 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 bg-[#1A2332] rounded-xl flex items-center justify-center">
                  {FEATURE_ICONS[feature.id]}
                </div>
                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide bg-white border border-gray-200 rounded-full px-2.5 py-1">
                  {FEATURE_BADGES[feature.id]}
                </span>
              </div>
              <h3 className="font-bold text-[#1A2332] text-base mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
