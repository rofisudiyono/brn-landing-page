import {
  AlertTriangle,
  FileText,
  MessageSquare,
  Crosshair,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AppStoreButtons } from "@/components/ui/AppStoreButtons";
import type { LucideIcon } from "lucide-react";

interface AppFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const APP_FEATURES: AppFeature[] = [
  {
    icon: AlertTriangle,
    title: "Laporkan penipuan lebih cepat",
    description:
      "Alur pelaporan dibuat lebih jelas agar anggota dapat mengirim dokumentasi dan kronologi dengan lebih rapi.",
  },
  {
    icon: FileText,
    title: "Cek blacklist instan",
    description:
      "Pencarian informasi penting disusun agar keputusan sebelum transaksi bisa dilakukan dengan lebih cepat.",
  },
  {
    icon: MessageSquare,
    title: "Terhubung dengan komunitas",
    description:
      "Memperkuat perlindungan usaha melalui jaringan anggota yang aktif berbagi informasi dan pengalaman lapangan.",
  },
  {
    icon: Crosshair,
    title: "Pantau armada lebih aman",
    description:
      "Suatu referensi penting untuk menjaga kendaraan dan memastikan risiko operasional bisnis rental harian.",
  },
];

export function AppSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        {/* Main Wrapper: Dibuat seperti card besar dengan sudut membulat */}
        <div className="flex flex-col lg:flex-row rounded-[32px] overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          {/* === LEFT SIDE: Dark Section === */}
          <div className="bg-[#111827] lg:w-1/2 w-full p-8 md:p-12 lg:p-16 flex flex-col">
            {/* Badge */}
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[13px] font-medium text-gray-400 mb-8 w-fit">
              Download aplikasi
            </span>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold leading-[1.2] text-white mb-6 tracking-tight">
              Aplikasi BRN lebih ringkas, modern, dan siap mendukung kebutuhan
              komunitas.
            </h2>

            {/* Subtitle */}
            <p className="text-gray-400 text-[15px] leading-relaxed mb-10">
              Tinggal section aplikasi diperkecil agar halaman terasa lebih
              seimbang, tetap kuat secara visual, dan fokus pada fitur utama.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mt-auto">
              {APP_FEATURES.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="bg-white rounded-[20px] p-5 shadow-sm flex flex-col"
                  >
                    <div className="w-10 h-10 bg-[#111827] rounded-xl flex items-center justify-center mb-4 shrink-0">
                      <IconComponent size={20} className="text-[#F5C800]" />
                    </div>
                    <h3 className="text-[14px] font-bold text-gray-900 mb-2 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-[12px] text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* === RIGHT SIDE: Light Section === */}
          <div className="bg-[#F8FAFC] lg:w-1/2 w-full p-8 md:p-12 lg:p-16 flex flex-col items-center lg:items-start relative">
            {/* Badge */}
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-gray-200 text-gray-600 text-[13px] font-medium mb-6 w-fit shadow-sm">
              Preview aplikasi
            </span>

            {/* Title */}
            <h2 className="text-3xl lg:text-[2.2rem] font-bold text-gray-900 leading-[1.2] mb-12 tracking-tight text-center lg:text-left">
              Antarmuka baru yang terasa lebih premium, lebih tegas, dan tetap
              mudah digunakan.
            </h2>

            {/* Phone Mockup Container */}
            <div className="relative w-full max-w-[260px] mx-auto mb-12">
              <div className="relative z-10 bg-black rounded-[36px] p-2.5 shadow-2xl">
                <div className="rounded-[28px] overflow-hidden bg-white aspect-[9/19.5] relative">
                  {/* Dynamic Island / Notch */}
                  <div className="absolute top-0 inset-x-0 h-5 flex justify-center z-20">
                    <div className="w-28 h-5 bg-black rounded-b-2xl"></div>
                  </div>
                  {/* App Screen Image */}
                  <img
                    src="https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=600&auto=format&fit=crop"
                    alt="BRN App Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* App Store Buttons */}
            <AppStoreButtons />
          </div>
        </div>
      </Container>
    </section>
  );
}
