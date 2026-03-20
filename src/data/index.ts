export const NAV_LINKS = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/tentang" },
  { label: "Event", href: "/event" },
  { label: "Peta Partner", href: "/peta-partner" },
  { label: "Terms & Conditions", href: "/terms" },
];

export const FEATURES = [
  {
    id: 1,
    icon: "🗺️",
    title: "Tampil di Peta Nasional",
    description:
      "Bisnis rental Anda akan terdaftar dan tampil di peta aplikasi BRN, memudahkan pelanggan menemukan Anda di seluruh Indonesia.",
  },
  {
    id: 2,
    icon: "✅",
    title: "Kredibilitas Terjamin",
    description:
      "Menjadi anggota BRN meningkatkan kepercayaan pelanggan terhadap layanan Anda sebagai rental mobil yang profesional dan aman.",
  },
  {
    id: 3,
    icon: "🤝",
    title: "Jaringan & Komunitas",
    description:
      "Akses ke jaringan pengusaha rental seluruh nusantara, berbagi pengalaman, dan dukungan perlindungan armada (Buser).",
  },
];

export const EVENTS = [
  {
    id: 1,
    date: "15 Agustus 2025",
    title: "Kopdar Nasional BRN 2025",
    description:
      "Pertemuan akbar tahunan seluruh anggota BRN se-Indonesia. Membahas strategi bisnis rental masa depan dan pemilihan pengurus baru.",
    location: "Jakarta Convention Center",
    time: "09:00 - 17:00 WIB",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
  },
  {
    id: 2,
    date: "02 September 2025",
    title: "Seminar Manajemen & Keamanan Armada",
    description:
      "Pelatihan khusus cara mengelola armada rental agar efisien, instalasi GPS tracking, dan mitigasi risiko penggelapan unit.",
    location: "Hotel Aston, Bandung",
    time: "10:00 - 15:00 WIB",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
  },
  {
    id: 3,
    date: "20 Oktober 2025",
    title: "Kopdar Regional & Family Gathering Jabar",
    description:
      "Ajang silaturahmi pengusaha rental khusus area Jawa Barat beserta keluarga. Membangun solidaritas antar anggota regional.",
    location: "Lembang Park & Zoo",
    time: "08:00 - Selesai",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80",
  },
];

export const PRICING_PLANS = [
  { id: "1", label: "1 Tahun", price: "Rp 200.000", years: 1 },
  { id: "3", label: "3 Tahun", price: "Rp 500.000", years: 3 },
  { id: "6", label: "6 Tahun", price: "Rp 900.000", years: 6 },
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Ketua Umum",
    role: "Ketua Umum",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 2,
    name: "Wakil Ketua",
    role: "Wakil Ketua",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 3,
    name: "Sekretaris Jenderal",
    role: "Sekretaris Jenderal",
    avatar: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: 4,
    name: "Bendahara Umum",
    role: "Bendahara Umum",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
];

export const PARTNERS = [
  {
    id: 1,
    name: "Berkah Jaya Trans",
    owner: "Bpk. Agus Santoso",
    armada: 12,
    city: "Jakarta Selatan",
    address: "Jl. Raya Pasar Minggu No. 45, Pancoran, Jakarta Selatan",
    lat: -6.2607,
    lng: 106.8372,
    whatsapp: "081234567890",
  },
  {
    id: 2,
    name: "Nusantara Rent Car",
    owner: "Ibu Susi Susanti",
    armada: 8,
    city: "Bandung",
    address: "Jl. Pasteur No. 120, Sukajadi, Kota Bandung, Jawa Barat",
    lat: -6.8996,
    lng: 107.5994,
    whatsapp: "081298765432",
  },
  {
    id: 3,
    name: "Bintang Transport",
    owner: "Bpk. Budi Setiawan",
    armada: 25,
    city: "Surabaya",
    address: "Jl. Ahmad Yani No. 88, Wonokromo, Surabaya",
    lat: -7.2575,
    lng: 112.7521,
    whatsapp: "081311223344",
  },
];

export const PARTNER_CITIES = [
  "Jakarta",
  "Surabaya",
  "Denpasar",
  "Semarang",
] as const;

export const PARTNERS_BY_CITY: Record<
  string,
  Array<{ id: number; name: string; description: string }>
> = {
  Jakarta: [
    {
      id: 1,
      name: "Bintang Rentcar",
      description:
        "Partner aktif dan selalu hadir dalam setiap kopdar dan selalu mengutamakan layanan dan pelayanan profesional.",
    },
    {
      id: 2,
      name: "Jatim Premium Car",
      description:
        "Melayani pelanggan setia dan terpercaya dari kalangan dan pelanggan profesional yang taat dan terpercaya.",
    },
    {
      id: 3,
      name: "Bali Trans Rental",
      description:
        "Hadir untuk melayani dan memberikan layanan dan pelayanan yang baik dan pelayanan yang terpercaya.",
    },
    {
      id: 4,
      name: "Java Mobility",
      description:
        "Salah satu mitra kota besar dengan fokus pada pelayanan profesional untuk kepuasan pelanggan.",
    },
  ],
  Surabaya: [
    {
      id: 5,
      name: "Jatim Premium Car",
      description:
        "Melayani pelanggan setia dan terpercaya dari kalangan dan pelanggan profesional yang taat dan terpercaya.",
    },
    {
      id: 6,
      name: "Surabaya Rent",
      description:
        "Partner aktif di kota Surabaya dengan armada berkualitas dan layanan terpercaya.",
    },
    {
      id: 7,
      name: "East Java Trans",
      description:
        "Menyediakan armada premium untuk kebutuhan rental di seluruh Jawa Timur.",
    },
    {
      id: 8,
      name: "SBY Mobility",
      description:
        "Layanan rental mobil terpercaya dengan fokus pada kenyamanan pelanggan.",
    },
  ],
  Denpasar: [
    {
      id: 9,
      name: "Bali Trans Rental",
      description:
        "Hadir untuk melayani pelanggan dan memberikan layanan yang maksimal dan profesional di seluruh Bali.",
    },
    {
      id: 10,
      name: "Paradise Rent",
      description:
        "Armada premium untuk kebutuhan wisata dan bisnis di Pulau Dewata.",
    },
    {
      id: 11,
      name: "Dewata Car",
      description:
        "Menyediakan layanan rental mobil terpercaya untuk wisatawan dan pelaku bisnis.",
    },
    {
      id: 12,
      name: "Bali Drive",
      description:
        "Partner terpercaya untuk kebutuhan mobilitas di seluruh area Bali.",
    },
  ],
  Semarang: [
    {
      id: 13,
      name: "Java Mobility",
      description:
        "Salah satu mitra kota besar dengan fokus pada layanan armada premium yang terpercaya dan profesional.",
    },
    {
      id: 14,
      name: "Central Java Rent",
      description:
        "Melayani kebutuhan rental mobil di seluruh area Jawa Tengah.",
    },
    {
      id: 15,
      name: "SMG Trans",
      description:
        "Partner aktif dengan layanan terpercaya dan armada yang selalu terawat.",
    },
    {
      id: 16,
      name: "Semarang Car",
      description:
        "Layanan rental mobil profesional untuk bisnis dan keperluan pribadi.",
    },
  ],
};

export const KORDA_DATA = [
  {
    id: 1,
    name: "Korda Jatim",
    region: "Jawa Timur",
    coverage: "Surabaya & Sekitarnya...",
    pengurus: 24,
    anggota: 312,
  },
  {
    id: 2,
    name: "Korda Bali",
    region: "Bali",
    coverage: "Denpasar & Badung",
    pengurus: 18,
    anggota: 245,
  },
  {
    id: 3,
    name: "Korda Jateng",
    region: "Jateng",
    coverage: "Semarang & Solo",
    pengurus: 21,
    anggota: 289,
  },
  {
    id: 4,
    name: "Korda DKI",
    region: "DKI & Sekitar",
    coverage: "Jakarta & Sekitarnya...",
    pengurus: 32,
    anggota: 450,
  },
];

export const INDONESIAN_PROVINCES = [
  "DKI Jakarta",
  "Jawa Barat",
  "Jawa Tengah",
  "Jawa Timur",
  "Banten",
  "DIY Yogyakarta",
  "Sumatera Utara",
  "Sumatera Selatan",
  "Bali",
  "Kalimantan Timur",
  "Sulawesi Selatan",
  "Riau",
  "Lampung",
  "Nusa Tenggara Barat",
];
