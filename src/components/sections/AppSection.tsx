import {
  AlertTriangle,
  FileText,
  MessageSquare,
  Crosshair,
} from "lucide-react";

const APP_FEATURES = [
  {
    icon: <AlertTriangle size={20} className="text-[#F5C800]" />,
    title: "Laporkan penipuan lebih cepat",
    description:
      "Alur pelaporan dibuat lebih jelas agar anggota dapat mengirim dokumentasi dan kronologi dengan lebih rapi.",
  },
  {
    icon: <FileText size={20} className="text-[#F5C800]" />,
    title: "Cek blacklist instan",
    description:
      "Pencarian informasi penting disusun agar keputusan sebelum transaksi bisa dilakukan dengan lebih cepat.",
  },
  {
    icon: <MessageSquare size={20} className="text-[#F5C800]" />,
    title: "Terhubung dengan komunitas",
    description:
      "Memperkuat perlindungan usaha melalui jaringan anggota yang aktif berbagi informasi dan pengalaman lapangan.",
  },
  {
    icon: <Crosshair size={20} className="text-[#F5C800]" />,
    title: "Pantau armada lebih aman",
    description:
      "Suatu referensi penting untuk menjaga kendaraan dan memastikan risiko operasional bisnis rental harian.",
  },
];

export function AppSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      {/* Container max-width disamakan dengan section lain */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
              {APP_FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-[20px] p-5 shadow-sm flex flex-col"
                >
                  <div className="w-10 h-10 bg-[#111827] rounded-xl flex items-center justify-center mb-4 shrink-0">
                    {feature.icon}
                  </div>
                  <h3 className="text-[14px] font-bold text-gray-900 mb-2 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
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
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start w-full">
              <a
                href="#"
                className="flex items-center gap-3 bg-white border border-gray-200 text-gray-900 rounded-2xl px-5 py-3 hover:bg-gray-50 transition-colors shadow-sm"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-black shrink-0"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 font-medium leading-none mb-1">
                    Download on the
                  </span>
                  <span className="text-[13px] font-bold leading-none">
                    App Store
                  </span>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 bg-white border border-gray-200 text-gray-900 rounded-2xl px-5 py-3 hover:bg-gray-50 transition-colors shadow-sm"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-black shrink-0"
                >
                  <path d="M3.18 23.76a1.49 1.49 0 0 0 1.68-.17l.09-.07 9.43-9.43-2.43-2.43zM20.1 10.73l-2.46-1.41-2.71 2.71 2.71 2.7 2.49-1.42a1.5 1.5 0 0 0 0-2.58zM2.14.62a1.5 1.5 0 0 0-.14.64v21.48a1.5 1.5 0 0 0 .14.64l.07.07 12.04-12.04v-.28L2.21.55zM12.95 14.27 3.95 23.27l-.09-.06 9.09-9.09 2.43 2.43z" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 font-medium leading-none mb-1">
                    Get it on
                  </span>
                  <span className="text-[13px] font-bold leading-none">
                    Play Store
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
