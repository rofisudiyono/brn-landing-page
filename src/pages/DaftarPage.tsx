import { useState, type ChangeEvent } from "react";
import { User, Store } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { INITIAL_PARTNER_REGISTRATION } from "@/constant/daftarForm";
import { PRICING_PLANS, INDONESIAN_PROVINCES } from "@/data";
import { cn } from "@/lib/utils";
import type { PartnerRegistrationForm } from "@/types/daftar";

export default function DaftarPage() {
  const [selectedPlan, setSelectedPlan] = useState("1");
  const [formData, setFormData] = useState<PartnerRegistrationForm>(
    INITIAL_PARTNER_REGISTRATION,
  );

  const plan =
    PRICING_PLANS.find((p) => p.id === selectedPlan) || PRICING_PLANS[0];

  const handleChange =
    (field: keyof PartnerRegistrationForm) =>
    (
      e: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-12 md:py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-[32px] p-8 md:p-14 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] border border-gray-100">
        {/* === HEADER FORM === */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-[2.5rem] font-black text-[#1A2332] mb-4 tracking-tight">
            Pendaftaran Partner BRN
          </h1>
          <p className="text-[15px] text-gray-500 max-w-lg mx-auto leading-relaxed">
            Lengkapi data diri dan usaha Anda untuk bergabung dengan jaringan
            terbesar pengusaha rental mobil di Indonesia.
          </p>
        </div>

        {/* === FORM SECTION === */}
        <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
          {/* 1. Data Pemilik */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <User size={18} className="text-[#F5C800]" strokeWidth={2.5} />
              <h2 className="font-bold text-[#1A2332] text-lg">Data Pemilik</h2>
            </div>

            <div className="space-y-5">
              {/* Nama Lengkap */}
              <div>
                <label className="block text-[13px] font-bold text-gray-900 mb-2">
                  Nama Lengkap Sesuai KTP{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Masukkan nama lengkap"
                  value={formData.namaLengkap}
                  onChange={handleChange("namaLengkap")}
                  className="w-full px-4 py-3.5 text-[14px] border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#F5C800]/50 focus:border-[#F5C800] placeholder:text-gray-400 transition-all"
                />
              </div>

              {/* Grid WA & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[13px] font-bold text-gray-900 mb-2">
                    Nomor WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Contoh: 081234567890"
                    value={formData.whatsapp}
                    onChange={handleChange("whatsapp")}
                    className="w-full px-4 py-3.5 text-[14px] border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#F5C800]/50 focus:border-[#F5C800] placeholder:text-gray-400 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-gray-900 mb-2">
                    Alamat Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Contoh: email@domain.com"
                    value={formData.email}
                    onChange={handleChange("email")}
                    className="w-full px-4 py-3.5 text-[14px] border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#F5C800]/50 focus:border-[#F5C800] placeholder:text-gray-400 transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* 2. Data Usaha */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <Store size={18} className="text-[#F5C800]" strokeWidth={2.5} />
              <h2 className="font-bold text-[#1A2332] text-lg">
                Data Usaha Rental
              </h2>
            </div>

            <div className="space-y-5">
              {/* Nama Usaha */}
              <div>
                <label className="block text-[13px] font-bold text-gray-900 mb-2">
                  Nama Usaha / Rental <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Masukkan nama usaha"
                  value={formData.namaUsaha}
                  onChange={handleChange("namaUsaha")}
                  className="w-full px-4 py-3.5 text-[14px] border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#F5C800]/50 focus:border-[#F5C800] placeholder:text-gray-400 transition-all"
                />
              </div>

              {/* Grid Provinsi & Kota */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[13px] font-bold text-gray-900 mb-2">
                    Provinsi <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={formData.provinsi}
                      onChange={handleChange("provinsi")}
                      className="w-full appearance-none px-4 py-3.5 text-[14px] border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#F5C800]/50 focus:border-[#F5C800] text-gray-600 bg-white transition-all cursor-pointer"
                    >
                      <option value="">Pilih Provinsi</option>
                      {INDONESIAN_PROVINCES?.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-gray-900 mb-2">
                    Kota / Kabupaten <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={formData.kota}
                      onChange={handleChange("kota")}
                      className="w-full appearance-none px-4 py-3.5 text-[14px] border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#F5C800]/50 focus:border-[#F5C800] text-gray-400 bg-white transition-all cursor-pointer"
                    >
                      <option value="">Pilih Kota/Kabupaten</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alamat Lengkap */}
              <div>
                <label className="block text-[13px] font-bold text-gray-900 mb-2">
                  Alamat Lengkap Usaha <span className="text-red-500">*</span>
                </label>
                <textarea
                  placeholder="Masukkan alamat lengkap usaha Anda"
                  rows={3}
                  value={formData.alamatLengkap}
                  onChange={handleChange("alamatLengkap")}
                  className="w-full px-4 py-3.5 text-[14px] border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#F5C800]/50 focus:border-[#F5C800] placeholder:text-gray-400 transition-all resize-none"
                />
              </div>

              {/* Link Google Maps */}
              <div>
                <label className="block text-[13px] font-bold text-gray-900 mb-2">
                  Link Google Maps <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  placeholder="Tempelkan link lokasi Google Maps usaha Anda"
                  value={formData.mapsLink}
                  onChange={handleChange("mapsLink")}
                  className="w-full px-4 py-3.5 text-[14px] border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#F5C800]/50 focus:border-[#F5C800] placeholder:text-gray-400 transition-all"
                />
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* 3. Pricing & Pembayaran */}
          <div>
            <h2 className="font-bold text-[#1A2332] text-lg mb-6">
              Informasi Pembayaran
            </h2>

            <div className="bg-[#1A2332] rounded-2xl p-6 md:p-8">
              {/* Plan selector */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                {PRICING_PLANS?.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPlan(p.id)}
                    className={cn(
                      "flex-1 py-4 rounded-xl text-left px-5 transition-all border",
                      selectedPlan === p.id
                        ? "bg-[#F5C800] border-[#F5C800] shadow-md"
                        : "bg-white/5 border-white/10 hover:bg-white/10",
                    )}
                  >
                    <p
                      className={cn(
                        "font-bold text-[15px]",
                        selectedPlan === p.id ? "text-[#1A2332]" : "text-white",
                      )}
                    >
                      {p.label}
                    </p>
                    <p
                      className={cn(
                        "text-[13px] mt-1 font-medium",
                        selectedPlan === p.id
                          ? "text-[#1A2332]/80"
                          : "text-gray-400",
                      )}
                    >
                      {p.price}
                    </p>
                  </button>
                ))}
              </div>

              {/* Breakdown */}
              <div className="space-y-3 border-t border-white/10 pt-6 mb-8">
                <div className="flex justify-between text-[15px] font-medium text-white">
                  <span>Paket Partner BRN ({plan?.label})</span>
                  <span>Rp 150.000</span>
                </div>
                <div className="flex justify-between text-[15px] font-medium text-white">
                  <span>Biaya Verifikasi Peta</span>
                  <span>Rp 50.000</span>
                </div>
                <div className="flex justify-between text-[16px] font-bold text-[#F5C800] pt-2">
                  <span>Total Pembayaran</span>
                  <span>Rp 200.000</span>
                </div>
              </div>

              <Button className="w-full bg-white hover:bg-gray-100 text-[#1A2332] rounded-xl py-6 text-[15px] font-bold transition-colors">
                Lanjutkan ke Pembayaran
              </Button>
              <p className="text-[12px] text-gray-400 mt-4 leading-relaxed text-center">
                *Setelah klik tombol di atas, Anda akan diarahkan ke halaman
                pembayaran aman oleh Xendit untuk menyelesaikan registrasi.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
