import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { PRICING_PLANS, INDONESIAN_PROVINCES } from '@/data'
import { cn } from '@/lib/utils'

export default function DaftarPage() {
  const [selectedPlan, setSelectedPlan] = useState('1')
  const [province, setProvince] = useState('')

  const plan = PRICING_PLANS.find((p) => p.id === selectedPlan)!

  return (
    <>
      {/* Header */}
      <section className="py-12 bg-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h1
            className="text-3xl font-black text-[#1A2332] mb-3 animate-fade-in-up"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Pendaftaran Partner BRN
          </h1>
          <p className="text-sm text-gray-500 animate-fade-in-up delay-1">
            Bergabunglah dengan jaringan rental mobil nasional. Daftarkan usaha Anda untuk tampil di Peta
            Partner kami.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="pb-16 bg-white">
        <div className="max-w-xl mx-auto px-4">
          <div className="border border-gray-100 rounded-2xl p-7 shadow-sm">
            {/* Data Pemilik */}
            <h2 className="font-bold text-[#1A2332] text-base mb-5">Data Pemilik</h2>

            <div className="space-y-4 mb-7">
              <Input label="Nama Lengkap Sesuai KTP" placeholder="Masukkan nama lengkap" />
              <div className="grid grid-cols-2 gap-4">
                <Input label="Nomor WhatsApp" placeholder="Contoh: 081234567890" type="tel" />
                <Input label="Alamat Email" placeholder="Contoh: email@domain.com" type="email" />
              </div>
            </div>

            {/* Data Usaha */}
            <h2 className="font-bold text-[#1A2332] text-base mb-5">Data Usaha Rental</h2>

            <div className="space-y-4 mb-7">
              <Input label="Nama Usaha / Rental" placeholder="Masukkan nama usaha" />
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">Provinsi</label>
                  <select
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#F5C800] text-gray-500"
                  >
                    <option value="">Pilih Provinsi</option>
                    {INDONESIAN_PROVINCES.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
                <Input label="Kota / Kabupaten" placeholder="Pilih Kota/Kabupaten" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">Alamat Lengkap Usaha</label>
                <textarea
                  placeholder="Masukkan alamat lengkap usaha Anda"
                  rows={3}
                  className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#F5C800] resize-none placeholder:text-gray-400"
                />
              </div>

              <Input label="Link Google Maps" placeholder="Tempelkan link lokasi Google Maps usaha Anda" />
            </div>

            {/* Pricing */}
            <h2 className="font-bold text-[#1A2332] text-base mb-4">Informasi Pembayaran</h2>

            <div className="bg-[#1A2332] rounded-xl p-5 mb-5">
              {/* Plan selector */}
              <div className="flex gap-3 mb-5">
                {PRICING_PLANS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPlan(p.id)}
                    className={cn(
                      'flex-1 py-3 rounded-xl text-left px-4 transition-all',
                      selectedPlan === p.id
                        ? 'bg-[#F5C800]'
                        : 'bg-white/10 hover:bg-white/15',
                    )}
                  >
                    <p
                      className={cn(
                        'font-bold text-sm',
                        selectedPlan === p.id ? 'text-[#1A2332]' : 'text-white',
                      )}
                    >
                      {p.label}
                    </p>
                    <p
                      className={cn(
                        'text-xs mt-0.5',
                        selectedPlan === p.id ? 'text-[#1A2332]/70' : 'text-gray-400',
                      )}
                    >
                      {p.price}
                    </p>
                  </button>
                ))}
              </div>

              {/* Breakdown */}
              <div className="space-y-2 border-t border-white/10 pt-4">
                <div className="flex justify-between text-sm text-white">
                  <span>Paket Partner BRN ({plan.label})</span>
                  <span>Rp 150.000</span>
                </div>
                <div className="flex justify-between text-sm text-white">
                  <span>Biaya Verifikasi Peta</span>
                  <span>Rp 50.000</span>
                </div>
              </div>

              <p className="text-xs text-gray-400 mt-4 leading-relaxed">
                *Pilih paket 1 tahun, 3 tahun, atau 6 tahun. Setelah klik tombol di bawah, Anda akan
                diarahkan ke halaman pembayaran aman oleh Xendit untuk menyelesaikan registrasi.
              </p>
            </div>

            <Button className="w-full" size="lg">
              Lanjutkan ke Pembayaran
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
