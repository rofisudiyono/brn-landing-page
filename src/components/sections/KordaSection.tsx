import { Users, Map } from "lucide-react";
import { KORDA_DATA } from "@/data";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AutoScrollCarousel } from "@/components/ui/AutoScrollCarousel";

export function KordaSection() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <Container>
        <SectionHeader
          label="Jaringan korda"
          labelClassName="bg-[#F8FAFC] border border-gray-100 text-[#1e293b] shadow-sm px-4 py-1.5 text-[13px] mb-5"
          title="Korda BRN di berbagai wilayah"
          titleClassName="text-3xl md:text-[2.75rem] text-[#0F172A] leading-tight mb-5"
          description="Tampilan korda dibuat lebih rapi, ringkas, dan mudah dipindai untuk menonjolkan identitas wilayah serta jumlah pengurus."
          descriptionClassName="text-[15px] max-w-2xl"
          className="mb-16"
        />

        <AutoScrollCarousel className="gap-6 pb-8 pt-2 px-2 -mx-2">
          {KORDA_DATA.map((korda) => (
            <div
              key={korda.id}
              className="snap-start shrink-0 w-[280px] md:w-[320px] bg-white rounded-xl p-6 border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] hover:border-gray-200 hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* TOP: Icon, Name & Badge */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] flex items-center justify-center shrink-0 border border-gray-50">
                  <Map size={20} className="text-[#0F172A]" />
                </div>

                <div className="flex-1 min-w-0 pt-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-bold text-[#0F172A] text-base truncate">
                      {korda.name}
                    </h3>
                    <span className="inline-flex shrink-0 items-center px-2 py-0.5 rounded-full bg-[#F1F5F9] text-[#475569] text-[10px] font-bold">
                      {korda.region}
                    </span>
                  </div>
                  {/* Gunakan korda.coverage jika ada di @/data, jika tidak pakai fallback cities */}
                  <p className="text-[13px] text-gray-500 truncate">
                    {korda.coverage || `${korda.region} Kota`}
                  </p>
                </div>
              </div>

              {/* Garis Horizontal */}
              <div className="h-px bg-gray-100 w-full mb-5"></div>

              {/* BOTTOM: Stats (Pengurus & Anggota) */}
              <div className="flex items-center">
                {/* Kolom Pengurus */}
                <div className="flex-1">
                  <p className="text-[11px] text-gray-500 font-medium mb-1">
                    Pengurus
                  </p>
                  <div className="flex items-center gap-1.5 text-[#0F172A]">
                    <Users size={14} className="text-gray-400" />
                    <span className="font-bold text-lg leading-none">
                      {korda.pengurus} {/* Fallback data */}
                    </span>
                  </div>
                </div>

                {/* Garis Vertikal */}
                <div className="w-px h-10 bg-gray-100 mx-4"></div>

                {/* Kolom Anggota */}
                <div className="flex-1">
                  <p className="text-[11px] text-gray-500 font-medium mb-1">
                    Anggota
                  </p>
                  <div className="flex items-center gap-1.5 text-[#0F172A]">
                    <Users size={14} className="text-gray-400" />
                    <span className="font-bold text-lg leading-none">
                      {korda.anggota} {/* Fallback data */}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </AutoScrollCarousel>
      </Container>
    </section>
  );
}
