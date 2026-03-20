import { useState } from "react";

const SECTIONS = [
  {
    id: "pendahuluan",
    title: "1. Pendahuluan",
    content: `Selamat datang di Buser Rentcar Nasional (BRN). Dokumen ini mengatur syarat dan ketentuan penggunaan platform dan layanan kami. Dengan mengakses, menggunakan layanan, atau mendaftar sebagai Partner BRN, Anda menyatakan setuju untuk terikat secara hukum oleh seluruh Syarat dan Ketentuan yang tercantum di halaman ini.

Jika Anda tidak menyetujui salah satu, sebagian, atau seluruh isi Syarat & Ketentuan ini, maka Anda tidak diperkenankan untuk menggunakan layanan yang kami sediakan.`,
  },
  {
    id: "definisi",
    title: "2. Definisi",
    content:
      "Dalam Syarat dan Ketentuan ini, kecuali konteksnya menentukan lain, istilah-istilah di bawah ini memiliki makna sebagai berikut:",
    list: [
      "BRN adalah organisasi dan platform Buser Rentcar Nasional.",
      "Platform merujuk pada website, aplikasi mobile, dan sistem terkait yang dikelola oleh BRN.",
      "Partner adalah pengusaha rental mobil yang telah mendaftar, terverifikasi, dan aktif di dalam sistem BRN.",
      "Pengguna adalah setiap orang yang mengakses platform BRN, baik yang terdaftar maupun tidak terdaftar.",
    ],
  },
  {
    id: "pendaftaran",
    title: "3. Pendaftaran & Keanggotaan",
    content:
      "Untuk menjadi Partner BRN, Anda diwajibkan untuk mengisi formulir pendaftaran dengan data yang valid, akurat, dan dapat dipertanggungjawabkan. Ketentuan pendaftaran meliputi:",
    list: [
      "Calon partner wajib melampirkan identitas diri yang sah (KTP) dan memiliki legalitas atau bukti usaha rental kendaraan yang beroperasi di wilayah hukum Indonesia.",
      "Form pendaftaran wajib diisi oleh pihak yang dapat didefinisikan untuk bertindak atas partner.",
      "BRN berhak melakukan verifikasi lanjutan terhadap lokasi usaha dan dokumen yang dilampirkan.",
      "BRN berhak menerima atau menolak permohonan pendaftaran tanpa kewajiban memberikan alasan secara spesifik apabila ditemukan indikasi pelanggaran atau data yang tidak valid.",
    ],
  },
  {
    id: "hak-kewajiban",
    title: "4. Hak & Kewajiban Partner",
    content:
      "Setelah resmi menjadi Partner BRN, Anda memiliki hak dan kewajiban yang harus ditaati demi menjaga kualitas layanan bersama.",
    highlight: {
      title: "Kewajiban Utama:",
      list: [
        "Menjaga nama baik organisasi BRN di setiap kegiatan operasional penyewaan kendaraan.",
        "Mematuhi aturan dan pedoman keamanan yang berlaku, dan turut serta dalam solidaritas yang ada.",
        "Memberikan pelayanan terbaik, profesional, dan ramah kepada konsumen/penyewa.",
        "Tidak melakukan tindakan penipuan, manipulasi harga, atau kegiatan melanggar hukum lainnya.",
      ],
    },
  },
  {
    id: "biaya",
    title: "5. Biaya & Pembayaran",
    content:
      "Keanggotaan Partner BRN tidak dikenakan biaya iuran perpanjangan tahunan. Adapun kebijakan mengenai pembayaran pendaftaran adalah:",
    list: [
      "Biaya langganan dan biaya verifikasi pendaftaran dapat dikembalikan (non-refundable) dengan alasan khusus dan melalui persetujuan admin berbasis dikemukakan.",
      "Pembayaran wajib diselesaikan secara online melalui payment gateway resmi yang telah bermitra dengan BRN (misalnya: Xendit).",
      "Partner wajib memastikan tagihan dibayar lunas sebelum masuk ke dalam daftar tayang terdaftar di sistem Peta Partner BRN.",
    ],
  },
  {
    id: "privasi",
    title: "6. Privasi & Keamanan Data",
    content: `Kami sangat menghargai privasi Anda. Data pribadi yang dikumpulkan selama proses pendaftaran akan disimpan dengan aman dan hanya digunakan untuk kepentingan operasional BRN, verifikasi partner, dan kepatuhan hukum. BRN tidak akan menjual atau membagikan data Anda kepada pihak ketiga di luar keperluan operasional platform tanpa persetujuan tertulis dari Anda.`,
  },
];

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState("pendahuluan");

  // Fungsi untuk scroll halus ke section saat link daftar isi diklik
  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      // Offset untuk header yang sticky jika ada
      const yOffset = -100;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* === HEADER SECTION === */}
      <section className="bg-[#0F172A] pt-24 pb-24 text-center px-4 sm:px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {/* Garis Kuning */}
          <div className="w-12 h-1 bg-[#F5C800] mb-8"></div>

          <h1 className="text-4xl md:text-[2.5rem] font-bold text-white mb-6 tracking-tight">
            Syarat & Ketentuan
          </h1>

          <p className="text-gray-400 text-[15px] leading-relaxed max-w-xl">
            Pembaruan terakhir: 24 Oktober 2025. Silakan baca Syarat dan
            Ketentuan ini dengan saksama sebelum menggunakan layanan Buser
            Rentcar Nasional (BRN).
          </p>
        </div>
      </section>

      {/* === CONTENT SECTION (SPLIT LAYOUT) === */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* SIDEBAR - DAFTAR ISI (Sticky) */}
          <aside className="w-full lg:w-[280px] shrink-0 lg:sticky lg:top-28">
            <div className="mb-10">
              <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4 px-4">
                Daftar Isi
              </h3>
              <nav className="flex flex-col">
                {SECTIONS.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`text-left px-4 py-3 text-[13px] font-semibold transition-all border-l-2 ${
                      activeSection === sec.id
                        ? "border-[#F5C800] bg-yellow-50/50 text-[#0F172A]"
                        : "border-transparent text-gray-500 hover:text-[#0F172A] hover:bg-gray-50"
                    }`}
                  >
                    {sec.title}
                  </button>
                ))}
              </nav>
            </div>

            {/* Bantuan Box */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h4 className="font-bold text-[#0F172A] text-sm mb-2">
                Butuh Bantuan?
              </h4>
              <p className="text-gray-500 text-[12px] leading-relaxed mb-5">
                Jika Anda memiliki pertanyaan terkait syarat dan ketentuan kami,
                silakan hubungi tim support.
              </p>
              <button className="w-full bg-white border border-gray-200 text-[#0F172A] text-[13px] font-bold py-2.5 rounded-xl hover:bg-gray-100 transition-colors shadow-sm">
                Hubungi Kami
              </button>
            </div>
          </aside>

          {/* MAIN CONTENT - PENJELASAN PASAL */}
          <main className="flex-1 max-w-3xl">
            <div className="space-y-14">
              {SECTIONS.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-[#0F172A] mb-5">
                    {section.title}
                  </h2>

                  {/* Teks Paragraf */}
                  {section.content && (
                    <p className="text-[15px] text-gray-600 leading-[1.8] whitespace-pre-line mb-4">
                      {section.content}
                    </p>
                  )}

                  {/* List Standard (Bullet Hitam) */}
                  {section.list && (
                    <ul className="space-y-3 mt-4">
                      {section.list.map((item, j) => (
                        <li
                          key={j}
                          className="flex gap-3 text-[15px] text-gray-600 leading-[1.7]"
                        >
                          <span className="text-gray-800 mt-2.5 text-[6px]">
                            ●
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Highlight Box (Untuk Kewajiban Utama) */}
                  {section.highlight && (
                    <div className="mt-6 bg-[#F8FAFC] rounded-2xl p-6 md:p-8 border-l-4 border-[#F5C800]">
                      <h4 className="font-bold text-[#0F172A] text-[15px] mb-4">
                        {section.highlight.title}
                      </h4>
                      <ul className="space-y-3">
                        {section.highlight.list.map((item, j) => (
                          <li
                            key={j}
                            className="flex gap-3 text-[14px] text-gray-600 leading-[1.7]"
                          >
                            <span className="text-gray-400 mt-2.5 text-[6px]">
                              ●
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
