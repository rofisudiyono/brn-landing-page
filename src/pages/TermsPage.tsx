const SECTIONS = [
  {
    title: '1. Pendahuluan',
    content: `Selamat datang di platform Buser Rental Nasional (BRN). Syarat dan Ketentuan ini mengatur akses dan penggunaan Anda terhadap situs web, aplikasi, dan layanan yang disediakan oleh BRN.

Dengan mendaftar, mengakses, atau menggunakan layanan kami, Anda menyatakan bahwa Anda telah membaca, memahami, dan menyetujui untuk terikat oleh Syarat dan Ketentuan ini serta Kebijakan Privasi kami. Jika Anda tidak menyetujui salah satu bagian dari ketentuan ini, Anda tidak diperkenankan untuk menggunakan layanan kami.`,
  },
  {
    title: '2. Definisi',
    list: [
      'BRN adalah Buser Rental Nasional, sebuah komunitas dan platform bagi pengusaha rental mobil di Indonesia.',
      'Platform merujuk pada situs web, aplikasi mobile, dan sistem terkait yang dikelola oleh BRN.',
      'Partner/Anggota adalah pengusaha rental mobil yang telah mendaftar, diverifikasi, dan diterima sebagai bagian dari komunitas BRN.',
      'Layanan adalah semua fitur, informasi, dan fasilitas yang disediakan melalui Platform BRN, termasuk namun tidak terbatas pada Peta Partner dan sistem informasi keamanan.',
    ],
  },
  {
    title: '3. Pendaftaran dan Akun Partner',
    content: 'Untuk menjadi Partner BRN dan ditampilkan dalam Peta Partner, Anda harus memenuhi persyaratan berikut:',
    list: [
      'Memiliki usaha rental mobil yang sah dan beroperasi di wilayah Indonesia.',
      'Mengisi formulir pendaftaran dengan informasi yang akurat, lengkap, dan terkini.',
      'Menyelesaikan proses verifikasi yang mungkin melibatkan pengecekan dokumen usaha.',
      'Membayar biaya pendaftaran atau iuran keanggotaan (jika ada) melalui metode pembayaran resmi yang disediakan, yaitu Xendit.',
    ],
    footer: 'Anda bertanggung jawab penuh atas kerahasiaan kata sandi akun Anda dan semua aktivitas yang terjadi di bawah akun Anda.',
  },
  {
    title: '4. Kewajiban Partner',
    content: 'Sebagai Partner BRN, Anda diwajibkan untuk:',
    list: [
      'Menjaga standar pelayanan yang baik dan profesional kepada pelanggan.',
      'Turut serta aktif dalam menjaga keamanan dan solidaritas sesama anggota BRN.',
      'Tidak menyalahgunakan informasi yang diperoleh dari Platform BRN untuk kepentingan pribadi yang merugikan pihak lain.',
      'Memperbarui informasi usaha Anda di Platform jika terdapat perubahan alamat, kontak, atau armada.',
    ],
  },
  {
    title: '5. Pembayaran',
    content: 'Beberapa layanan di BRN, termasuk pendaftaran awal sebagai Partner, mungkin memerlukan biaya. Ketentuan pembayaran adalah sebagai berikut:',
    list: [
      'Semua transaksi pembayaran dilakukan melalui payment gateway resmi kami, Xendit.',
      'Tagihan akan diterbitkan setelah Anda melengkapi data pendaftaran.',
      'Status Partner Anda akan aktif dan ditampilkan di Peta Partner setelah sistem kami memverifikasi bahwa pembayaran telah berhasil diterima.',
      'Biaya yang telah dibayarkan tidak dapat dikembalikan (non-refundable) kecuali ditentukan lain oleh kebijakan khusus BRN.',
    ],
  },
  {
    title: '6. Batasan Tanggung Jawab',
    content: 'BRN bertindak sebagai penyedia platform dan komunitas. Kami tidak bertanggung jawab atas:',
    list: [
      'Kerugian finansial, kerusakan armada, atau masalah hukum yang timbul antara Partner dengan pelanggan mereka.',
      'Ketidakakuratan data yang diberikan oleh Partner lain di dalam sistem.',
      'Gangguan teknis sementara pada Platform yang berada di luar kendali wajar kami.',
    ],
  },
  {
    title: '7. Perubahan Syarat dan Ketentuan',
    content: `BRN berhak untuk mengubah, memodifikasi, menambah, atau menghapus bagian dari Syarat dan Ketentuan ini kapan saja. Perubahan akan berlaku segera setelah dipublikasikan di Platform. Penggunaan Anda atas Layanan setelah adanya perubahan merupakan penerimaan Anda terhadap Syarat dan Ketentuan yang direvisi.`,
  },
  {
    title: '8. Hubungi Kami',
    content: `Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami di:

Email: legal@buserrentalnasional.id
Telepon: +62 811-XXXX-XXXX`,
  },
]

export default function TermsPage() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1
            className="text-4xl font-black text-[#1A2332] mb-3"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Syarat & Ketentuan
          </h1>
          <p className="text-sm text-gray-400">Terakhir diperbarui: 24 Oktober 2025</p>
        </div>

        <div className="space-y-10">
          {SECTIONS.map((section, i) => (
            <div key={i}>
              <h2 className="font-bold text-[#1A2332] text-lg mb-3">{section.title}</h2>
              {section.content && (
                <p className="text-sm text-gray-600 leading-relaxed mb-3 whitespace-pre-line">
                  {section.content}
                </p>
              )}
              {section.list && (
                <ol className="space-y-2">
                  {section.list.map((item, j) => (
                    <li key={j} className="flex gap-2 text-sm text-gray-600">
                      <span className="font-semibold text-[#1A2332] flex-shrink-0">{j + 1}.</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ol>
              )}
              {section.footer && (
                <p className="text-sm text-gray-600 leading-relaxed mt-3">{section.footer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
