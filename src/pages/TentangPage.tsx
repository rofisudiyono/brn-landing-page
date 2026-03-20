import { ShieldCheck } from "lucide-react";

// Mock Data untuk Pengurus
const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "KETUA UMUM",
    desc: "Memimpin visi strategis dan memastikan seluruh program berjalan sesuai koridor organisasi.",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Arief Rahman",
    role: "WAKIL KETUA",
    desc: "Mendampingi ketua operasional dan mengkoordinasi korda - korda di seluruh daerah.",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Siti Nurbaya",
    role: "SEKRETARIS JENDERAL",
    desc: "Mengelola administrasi pusat dan memastikan komunikasi internal berjalan lancar.",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Hendra Wijaya",
    role: "BENDAHARA",
    desc: "Mengatur sirkulasi dana, iuran, dan memastikan transparansi keuangan kas organisasi.",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
  },
];

export default function TentangPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* === HERO SECTION === */}
      <section className="pt-10 pb-16">
        {/* Container disamakan max-w-7xl */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-[#0F172A] rounded-[32px] overflow-hidden p-8 md:p-12 lg:p-16 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left Content */}
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
                  <button className="bg-white text-[#0F172A] px-6 py-3 rounded-full text-sm font-bold hover:bg-gray-100 transition">
                    Daftar Sekarang
                  </button>
                  <button className="border border-white/20 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-white/5 transition">
                    Pelajari Lebih Lanjut
                  </button>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="rounded-[24px] overflow-hidden aspect-[4/3] relative z-0">
                  <img
                    src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop"
                    alt="BRN Showroom"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Badge */}
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
        </div>
      </section>

      {/* === STORY & STATS SECTION === */}
      <section className="py-16 bg-white">
        {/* Container disamakan max-w-7xl */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-gray-600 text-[12px] font-semibold mb-6">
              Tentang Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Mengenal Lebih Dekat BRN
            </h2>
            <div className="text-gray-500 text-[15px] leading-relaxed space-y-4 max-w-3xl mx-auto">
              <p>
                Buser Rentcar Nasional (BRN) adalah wadah bagi para pengusaha
                rental mobil di seluruh Indonesia untuk bersatu, berkomunikasi,
                dan membangun standarisasi pelayanan. Berdiri dari keresahan
                bersama, kini kami tumbuh sebagai ekosistem solidaritas antar
                pengusaha.
              </p>
              <p>
                Sejak didirikan, kami berfokus pada keamanan komunitas, edukasi
                antar anggota, serta peningkatan <i>branding presence</i> di
                mata calon pelanggan. Visi ini jaringan yang terus berkembang
                kami berkomitmen untuk menjadi standar kualitas industri rental
                mobil nasional.
              </p>
            </div>
          </div>

          {/* Stats - Grid akan melebar penuh mengikuti max-w-7xl */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-100 rounded-2xl p-8 bg-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] text-center md:text-left">
              <h3 className="text-4xl font-bold text-gray-900 mb-2">120+</h3>
              <p className="font-bold text-sm text-gray-900 mb-2">
                Jumlah pengurus
              </p>
              <p className="text-[12px] text-gray-500">
                Tersebar aktif membantu koordinasi, verifikasi, dan perluasan
                jaringan anggota.
              </p>
            </div>
            <div className="border border-gray-100 rounded-2xl p-8 bg-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] text-center md:text-left">
              <h3 className="text-4xl font-bold text-gray-900 mb-2">2.500+</h3>
              <p className="font-bold text-sm text-gray-900 mb-2">
                Jumlah anggota
              </p>
              <p className="text-[12px] text-gray-500">
                Komunitas rental mobil yang terus tumbuh dengan koneksi lintas
                kota provinsi.
              </p>
            </div>
            <div className="border border-gray-100 rounded-2xl p-8 bg-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] text-center md:text-left">
              <h3 className="text-4xl font-bold text-gray-900 mb-2">38</h3>
              <p className="font-bold text-sm text-gray-900 mb-2">
                Jumlah korda
              </p>
              <p className="text-[12px] text-gray-500">
                Koordinator daerah yang memperkuat sinergi komunitas di wilayah
                masing-masing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === VISI & MISI SECTION === */}
      <section className="py-20 bg-[#F8FAFC]">
        {/* Container disamakan max-w-7xl */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Visi & Misi
            </h2>
            <p className="text-gray-500 text-[15px] max-w-xl mx-auto">
              Arah langkah kami untuk membangun ekosistem rental mobil yang
              terpercaya di Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Visi (Dark Card) */}
            <div className="bg-[#0F172A] rounded-3xl p-10 md:p-14 flex flex-col justify-center text-white h-full">
              <div className="w-12 h-12 bg-white/10 rounded-full mb-8"></div>
              <h3 className="text-2xl font-bold mb-4">Visi Kami</h3>
              <p className="text-gray-300 leading-relaxed text-[15px]">
                Menjadi wadah komunitas dan kolaborasi terbesar bagi pengusaha
                rental mobil di Indonesia yang menjunjung tinggi
                profesionalisme, solidaritas, dan kebersamaan dalam melayani
                masyarakat luas.
              </p>
            </div>

            {/* Misi (Light List) */}
            <div className="flex flex-col gap-4 justify-center">
              {/* Point 1 */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm flex gap-5 items-start">
                <div className="w-8 h-8 rounded-full bg-gray-100 shrink-0"></div>
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
              {/* Point 2 */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm flex gap-5 items-start">
                <div className="w-8 h-8 rounded-full bg-gray-100 shrink-0"></div>
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
              {/* Point 3 */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm flex gap-5 items-start">
                <div className="w-8 h-8 rounded-full bg-gray-100 shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900 text-[15px] mb-1.5">
                    Edukasi & Profesionalisme
                  </h4>
                  <p className="text-gray-500 text-[13px] leading-relaxed">
                    Meningkatkan standar layanan dan manajemen usaha melalui
                    pelatihan, seminar, dan diskusi antar anggota yang
                    terstruktur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === TEAM SECTION === */}
      <section className="py-20 bg-white">
        {/* Container disamakan max-w-7xl */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pengurus Organisasi Aktif
            </h2>
            <p className="text-gray-500 text-[15px] max-w-xl mx-auto">
              Sosok di balik dedikasi untuk menjalankan roda pergerakan
              komunitas BRN.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="group">
                {/* Photo */}
                <div className="rounded-[24px] overflow-hidden bg-gray-100 aspect-[4/5] mb-5">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0"
                  />
                </div>
                {/* Details */}
                <h4 className="font-bold text-gray-900 text-lg mb-1">
                  {member.name}
                </h4>
                <p className="text-[#F5C800] text-[11px] font-bold tracking-wider mb-3">
                  {member.role}
                </p>
                <p className="text-gray-500 text-[13px] leading-relaxed">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
