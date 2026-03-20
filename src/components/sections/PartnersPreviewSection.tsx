import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { SAMPLE_PARTNERS } from "@/data";
import { Container } from "@/components/ui/Container";
import { AutoScrollCarousel } from "@/components/ui/AutoScrollCarousel";

export function PartnersPreviewSection() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#0F172A] text-white text-[13px] font-semibold mb-6">
              Partner BRN
            </span>
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-gray-900 leading-tight mb-4 tracking-tight">
              Partner terpercaya di berbagai daerah
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-lg">
              Tambahan section partner memberi ruang khusus untuk menonjolkan
              jaringan usaha rental mobil yang sudah terhubung bersama BRN.
            </p>
          </div>
          <Link to="/peta-partner" className="shrink-0">
            <button className="w-full md:w-auto px-6 py-3 rounded-xl border border-gray-200 text-gray-900 font-semibold text-sm hover:bg-gray-50 transition-colors shadow-sm">
              Lihat Peta Partner
            </button>
          </Link>
        </div>

        <AutoScrollCarousel className="gap-5 pb-4">
          {SAMPLE_PARTNERS.map((partner) => (
            <div
              key={partner.id}
              className="snap-start shrink-0 w-[280px] md:w-[310px] bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:border-gray-200 hover:shadow-md transition-all duration-300 flex flex-col group cursor-pointer"
            >
              {/* --- HEADER CARD: Diubah menjadi baris horizontal --- */}
              <div className="flex items-center gap-3.5 mb-4">
                {/* Logo */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-100 p-0.5 shrink-0 bg-gray-50 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>

                {/* Teks: Nama Partner & Badge Kota diletakkan berdampingan dengan logo */}
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-gray-900 text-[15px] leading-tight line-clamp-1">
                    {partner.name}
                  </h3>
                  <span className="inline-flex items-center gap-1 w-fit px-2 py-0.5 rounded text-gray-500 bg-gray-50 border border-gray-100 text-[10px] font-bold uppercase tracking-wide">
                    <MapPin size={10} className="text-[#F5C800]" />
                    {partner.city}
                  </span>
                </div>
              </div>
              {/* --- END HEADER CARD --- */}

              {/* Deskripsi */}
              <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-3">
                {partner.desc}
              </p>
            </div>
          ))}
        </AutoScrollCarousel>
      </Container>
    </section>
  );
}
