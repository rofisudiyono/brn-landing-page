import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { ShieldCheck } from "lucide-react";

const HERO_STATS = [
  {
    value: "120+",
    label: "Jumlah pengurus",
    sub: "Tersebar aktif membantu koordinasi, verifikasi, dan perluasan jaringan anggota.",
  },
  {
    value: "2.500+",
    label: "Jumlah anggota",
    sub: "Komunitas rental mobil yang terus tumbuh dengan koneksi lintas kota dan provinsi.",
  },
  {
    value: "38",
    label: "Jumlah korda",
    sub: "Koordinator daerah yang memperkuat sinergi komunitas di wilayah masing-masing.",
  },
];

export function HeroSection() {
  return (
    <section className="bg-[#F8FAFC] py-6 md:py-10">
      {/* Container dikecilkan ke max-6xl agar tidak terlalu lebar di layar laptop */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Dark Card - Padding dikurangi dari p-16 ke p-10/12 */}
        <div className="bg-[#0F172A] rounded-[24px] overflow-hidden p-8 md:p-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="z-10">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-gray-400 mb-6">
                Komunitas rental mobil indonesia
              </span>

              {/* Ukuran Font diturunkan dari 6xl ke 4xl/5xl agar proporsional */}
              <h1 className="text-3xl md:text-[2.6rem] font-bold leading-[1.15] text-white mb-5 tracking-tight">
                Buser Rentcar Nasional yang lebih{" "}
                <span className="text-[#F5C800]">
                  tegas, terpercaya, dan profesional.
                </span>
              </h1>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-md">
                Komunitas pengusaha rental mobil indonesia yang mengkhususkan
                anggota, pengurus, dan korda dalam satu jaringan nasional yang
                lebih solid dan terpercaya.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link to="/daftar">
                  {/* Button dibuat lebih compact */}
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-6 py-5 text-sm font-bold">
                    Daftar Sekarang
                  </Button>
                </Link>
                <Link to="/tentang">
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/5 rounded-full px-6 py-5 text-sm font-bold"
                  >
                    Pelajari Lebih Lanjut
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="rounded-[20px] overflow-hidden aspect-[16/10] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80"
                  alt="BRN Showroom"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Info Badge - Ukuran font dan padding diperkecil */}
              <div className="absolute -bottom-4 -left-4 md:-left-8 bg-white rounded-xl p-4 shadow-2xl max-w-[280px] flex gap-3 items-start border border-gray-100">
                <div className="bg-[#0F172A] p-2 rounded-lg text-white flex-shrink-0">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-[13px] mb-0.5">
                    Jaringan komunitas lebih kuat
                  </h4>
                  <p className="text-gray-500 text-[11px] leading-tight">
                    BRN hadir untuk mempercepat solidaritas, kepercayaan, dan
                    visibilitas usaha.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid - Dibuat lebih slim */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-xl p-6 shadow-sm flex flex-col justify-center"
              >
                <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </p>
                <p className="text-xs font-bold text-gray-900 mb-1">
                  {stat.label}
                </p>
                <p className="text-gray-500 text-[10px] leading-normal">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
