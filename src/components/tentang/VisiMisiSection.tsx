import { Container } from "@/components/ui/Container";

export function VisiMisiSection() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Visi & Misi</h2>
          <p className="text-gray-500 text-[15px] max-w-xl mx-auto">
            Arah langkah kami untuk membangun ekosistem rental mobil yang
            terpercaya di Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-[#0F172A] rounded-3xl p-10 md:p-14 flex flex-col justify-center text-white h-full">
            <div className="w-12 h-12 bg-white/10 rounded-full mb-8" />
            <h3 className="text-2xl font-bold mb-4">Visi Kami</h3>
            <p className="text-gray-300 leading-relaxed text-[15px]">
              Menjadi wadah komunitas dan kolaborasi terbesar bagi pengusaha
              rental mobil di Indonesia yang menjunjung tinggi profesionalisme,
              solidaritas, dan kebersamaan dalam melayani masyarakat luas.
            </p>
          </div>

          <div className="flex flex-col gap-4 justify-center">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm flex gap-5 items-start">
              <div className="w-8 h-8 rounded-full bg-gray-100 shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 text-[15px] mb-1.5">
                  Meningkatkan Keamanan Bisnis
                </h4>
                <p className="text-gray-500 text-[13px] leading-relaxed">
                  Membangun sistem informasi dan database terintegrasi untuk
                  meminimalisir risiko penipuan dan kerugian operasional para
                  anggota.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm flex gap-5 items-start">
              <div className="w-8 h-8 rounded-full bg-gray-100 shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 text-[15px] mb-1.5">
                  Memperkuat Solidaritas Anggota
                </h4>
                <p className="text-gray-500 text-[13px] leading-relaxed">
                  Menciptakan forum silaturahmi yang aktif dan saling bantu
                  antar wilayah jika terjadi kendala pada operasional
                  penyewaan.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm flex gap-5 items-start">
              <div className="w-8 h-8 rounded-full bg-gray-100 shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 text-[15px] mb-1.5">
                  Edukasi & Profesionalisme
                </h4>
                <p className="text-gray-500 text-[13px] leading-relaxed">
                  Meningkatkan standar layanan dan manajemen usaha melalui
                  pelatihan, seminar, dan diskusi antar anggota yang terstruktur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
