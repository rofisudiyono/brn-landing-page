import type { TermsSection } from "@/types/terms";

export const TERMS_SECTIONS: TermsSection[] = [
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
