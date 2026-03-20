import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react"; // Tambahkan import ini

// 8 Sample Data Partner (Sama seperti sebelumnya)
const SAMPLE_PARTNERS = [
  {
    id: 1,
    name: "Bintang Rentcar",
    city: "Jakarta",
    desc: "Partner aktif untuk sewa harian, bulanan, dan kebutuhan korporasi dengan pelayanan profesional.",
    logo: "https://ui-avatars.com/api/?name=BR&background=0F172A&color=fff&rounded=true&bold=true",
  },
  {
    id: 2,
    name: "Jatim Premium Car",
    city: "Surabaya",
    desc: "Melayani armada keluarga dan bisnis dengan jaringan operasional yang rapi dan terpercaya.",
    logo: "https://ui-avatars.com/api/?name=JP&background=1E3A8A&color=fff&rounded=true&bold=true",
  },
  {
    id: 3,
    name: "Bali Trans Rental",
    city: "Denpasar",
    desc: "Partner wisata dan perjalanan bisnis dengan dukungan tim lokal yang responsif dan aman.",
    logo: "https://ui-avatars.com/api/?name=BT&background=047857&color=fff&rounded=true&bold=true",
  },
  {
    id: 4,
    name: "Java Mobility",
    city: "Semarang",
    desc: "Solusi rental lintas kota dengan pendekatan profesional untuk pelanggan pribadi dan perusahaan.",
    logo: "https://ui-avatars.com/api/?name=JM&background=475569&color=fff&rounded=true&bold=true",
  },
  {
    id: 5,
    name: "Andalan Auto",
    city: "Bandung",
    desc: "Menyediakan berbagai jenis mobil MPV dan SUV untuk kebutuhan keluarga dan wisata di Jawa Barat.",
    logo: "https://ui-avatars.com/api/?name=AA&background=D97706&color=fff&rounded=true&bold=true",
  },
  {
    id: 6,
    name: "Khatulistiwa Rent",
    city: "Pontianak",
    desc: "Layanan sewa kendaraan handal dengan armada terawat untuk eksplorasi area Kalimantan.",
    logo: "https://ui-avatars.com/api/?name=KR&background=2563EB&color=fff&rounded=true&bold=true",
  },
  {
    id: 7,
    name: "Celebes Trans",
    city: "Makassar",
    desc: "Jaringan rental mobil terkemuka di Sulawesi Selatan yang mengutamakan kenyamanan dan keamanan pelanggan.",
    logo: "https://ui-avatars.com/api/?name=CT&background=DC2626&color=fff&rounded=true&bold=true",
  },
  {
    id: 8,
    name: "Sumatera Drive",
    city: "Medan",
    desc: "Pilihan utama untuk perjalanan lintas Sumatera dengan driver berpengalaman maupun lepas kunci.",
    logo: "https://ui-avatars.com/api/?name=SD&background=7C3AED&color=fff&rounded=true&bold=true",
  },
];

export function PartnersPreviewSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

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

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
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
        </div>
      </div>
    </section>
  );
}
