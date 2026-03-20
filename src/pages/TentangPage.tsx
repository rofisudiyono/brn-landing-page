import { TEAM_MEMBERS } from '@/data'

export default function TentangPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h1
            className="text-4xl font-black text-[#1A2332] mb-4 animate-fade-in-up"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Tentang BRN
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed animate-fade-in-up delay-1">
            Mengenal lebih dekat Buser Rental Nasional, komunitas solidaritas pengusaha rental mobil yang
            berdedikasi untuk keamanan, kenyamanan, dan kemajuan bersama di seluruh Indonesia.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-[#1A2332]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80"
                alt="Tim BRN"
                className="w-full h-72 object-cover"
              />
            </div>
            <div className="text-white">
              <p className="text-sm leading-relaxed text-gray-300 mb-4">
                Buser Rental Nasional (BRN) didirikan dari keresahan bersama para pengusaha rental mobil di
                Indonesia terkait maraknya tindak kejahatan seperti penggelapan dan pencurian armada.
                Berangkat dari rasa solidaritas yang tinggi, sekumpulan pengusaha rental berinisiatif
                membentuk sebuah wadah komunikasi dan pergerakan.
              </p>
              <p className="text-sm leading-relaxed text-gray-300 mb-4">
                Pada awalnya, kami hanya komunitas kecil yang saling bertukar informasi. Namun, seiring
                berjalannya waktu dan meningkatnya tingkat keberhasilan kami dalam mengamankan armada
                anggota, BRN berkembang menjadi organisasi nasional yang diakui.
              </p>
              <p className="text-sm leading-relaxed text-gray-300">
                Kini, BRN bukan hanya sekadar tim "buser" untuk mencari kendaraan hilang, melainkan sebuah
                ekosistem bisnis yang saling mendukung, berbagi ilmu manajemen, dan membangun standar
                profesionalisme industri rental mobil di tanah air.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-10">
          <h2
            className="text-3xl font-black text-[#1A2332] mb-3"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Visi & Misi
          </h2>
          <p className="text-gray-500 text-sm">
            Landasan pergerakan komunitas kami untuk memajukan industri rental mobil Indonesia.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Visi */}
          <div className="border border-gray-100 rounded-2xl p-8 text-center shadow-sm">
            <div className="w-12 h-12 bg-[#1A2332] rounded-full flex items-center justify-center mx-auto mb-5">
              <span className="text-[#F5C800] text-xl">👁</span>
            </div>
            <h3 className="font-bold text-[#1A2332] text-lg mb-4">Visi</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Menjadi organisasi komunitas pengusaha rental mobil terbesar, terkuat, dan paling terpercaya
              di Indonesia yang mampu memberikan rasa aman dan kemakmuran bagi seluruh anggotanya serta
              memberikan pelayanan terbaik bagi masyarakat.
            </p>
          </div>

          {/* Misi */}
          <div className="border border-gray-100 rounded-2xl p-8 shadow-sm">
            <div className="w-12 h-12 bg-[#1A2332] rounded-full flex items-center justify-center mx-auto mb-5">
              <span className="text-[#F5C800] text-xl">🎯</span>
            </div>
            <h3 className="font-bold text-[#1A2332] text-lg mb-4 text-center">Misi</h3>
            <ul className="space-y-2.5 text-sm text-gray-500">
              {[
                'Membangun solidaritas tanpa batas antar pengusaha rental mobil.',
                'Menciptakan sistem keamanan terpadu berbasis informasi dan pergerakan cepat.',
                'Meningkatkan kompetensi dan profesionalisme anggota melalui edukasi.',
                'Menjalin sinergi yang kuat dengan pihak berwajib dan instansi terkait.',
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-0.5 text-[#F5C800] font-bold">{i + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-[#1A2332]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-400 text-sm mb-10">
            Dedikasi mereka adalah kunci dari berjalannya roda organisasi Buser Rental Nasional.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="flex flex-col items-center gap-3">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-white/20"
                />
                <p className="text-[#F5C800] text-sm font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
