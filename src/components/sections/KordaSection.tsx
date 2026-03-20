import { useEffect, useRef } from "react";
import { Users, Map } from "lucide-react"; // Map icon untuk menggantikan B logo
import { KORDA_DATA } from "@/data";

export function KordaSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logic (Berjalan setiap 2 detik)
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const isEnd = scrollLeft + clientWidth >= scrollWidth - 10;

        if (isEnd) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header - Sesuai gambar rata tengah */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#F8FAFC] text-[#1e293b] text-[13px] font-semibold mb-5 shadow-sm border border-gray-100">
            Jaringan korda
          </span>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-[#0F172A] leading-tight mb-5 tracking-tight">
            Korda BRN di berbagai wilayah
          </h2>
          <p className="text-gray-600 text-[15px] leading-relaxed max-w-2xl">
            Tampilan korda dibuat lebih rapi, ringkas, dan mudah dipindai untuk
            menonjolkan identitas wilayah serta jumlah pengurus.
          </p>
        </div>

        {/* Carousel Slider */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 pt-2 px-2 -mx-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
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
        </div>
      </div>
    </section>
  );
}
