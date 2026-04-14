import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function TentangHeroSection() {
  return (
    <section className="pt-10 pb-16">
      <Container>
        <div className="bg-[#0F172A] rounded-[32px] overflow-hidden p-8 md:p-12 lg:p-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="z-10">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[12px] font-medium text-gray-400 mb-6 w-fit">
                Komunitas rental mobil indonesia
              </span>
              <h1 className="text-3xl md:text-5xl font-bold leading-[1.15] text-white mb-6 tracking-tight">
                Buser Rentcar Nasional yang lebih{" "}
                <span className="text-[#F5C800]">tegas, terpercaya,</span> dan
                profesional.
              </h1>
              <p className="text-gray-400 text-[15px] leading-relaxed mb-10 max-w-md">
                Komunitas pengusaha rental mobil indonesia yang mengkhususkan
                anggota, pengurus, dan korda dalam satu jaringan nasional yang
                lebih solid dan terpercaya.
              </p>
              <div className="flex gap-4">
                <button
                  type="button"
                  className="bg-white text-[#0F172A] px-6 py-3 rounded-full text-sm font-bold hover:bg-gray-100 transition"
                >
                  Daftar Sekarang
                </button>
                <button
                  type="button"
                  className="border border-white/20 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-white/5 transition"
                >
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[24px] overflow-hidden aspect-[4/3] relative z-0">
                <img
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop"
                  alt="BRN Showroom"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 md:left-[-30px] bg-white rounded-xl p-5 shadow-2xl max-w-[260px] flex gap-4 items-start border border-gray-100 z-10">
                <div className="bg-[#0F172A] p-2 rounded-lg text-white shrink-0 mt-1">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-[13px] mb-1">
                    Jaringan komunitas lebih kuat
                  </h4>
                  <p className="text-gray-500 text-[11px] leading-relaxed">
                    BRN hadir untuk mempercepat solidaritas, kepercayaan, dan
                    visibilitas usaha.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
