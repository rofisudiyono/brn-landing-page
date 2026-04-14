import type {
  FeaturedEvent,
  PastEventItem,
  UpcomingEvent,
} from "@/types/eventPage";

export const FEATURED_EVENT: FeaturedEvent = {
  category: "Musyawarah Nasional",
  dateText: "12 - 14 Okt 2025",
  title: "Munas BRN Ke-5 Jakarta 2025",
  description:
    "Perkumpulan seluruh anggota dan pengurus dari 38 Korda se-Indonesia untuk membahas arah kebijakan dan strategi komunitas di masa mendatang.",
  location: "Hotel Grand Mercure Kemayoran, Jakarta",
  time: "08:00 WIB - Selesai",
  image:
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
};

export const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    id: 1,
    category: "KOPDAR REGIONAL",
    title: "Kopdar BRN Jabar & Banten",
    location: "Bandung, Jawa Barat",
    time: "10:00 - 15:00 WIB",
    dateMonth: "Okt",
    dateDay: "05",
    attendees: "+45",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "PELATIHAN",
    title: "Manajemen Armada Digital",
    location: "Zoom Meeting (Online)",
    time: "19:00 - 21:00 WIB",
    dateMonth: "Okt",
    dateDay: "20",
    attendees: "+120",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "GATHERING",
    title: "Family Gathering Akhir Tahun",
    location: "Yogyakarta, Jawa Tengah",
    time: "09:00 WIB - Selesai",
    dateMonth: "Des",
    dateDay: "15",
    attendees: "+85",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop",
  },
];

export const PAST_EVENTS: PastEventItem[] = [
  {
    id: 1,
    date: "12 Agu 2025",
    title: "Kopdar Korda Jatim Hebat",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    date: "05 Jul 2025",
    title: "Seminar Legalitas Usaha",
    image:
      "https://images.unsplash.com/photo-1475721025505-c315a6ab5345?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    date: "14 Jun 2025",
    title: "Bakti Sosial BRN Peduli",
    image:
      "https://images.unsplash.com/photo-1593113565637-51c5d58dc886?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    date: "21 Mei 2025",
    title: "HUT BRN Ke-4 Nasional",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop",
  },
];
