import { useState } from 'react'
import { MapPin, Phone, Search } from 'lucide-react'
import { PARTNERS } from '@/data'

export default function PetaPartnerPage() {
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<number | null>(null)

  const filtered = PARTNERS.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.city.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-64px)]">
      {/* Sidebar */}
      <div className="w-full md:w-96 flex-shrink-0 border-r border-gray-100 overflow-y-auto">
        <div className="p-5 border-b border-gray-100">
          <h2 className="font-bold text-[#1A2332] text-lg mb-4">Cari Partner BRN</h2>
          {/* Search */}
          <div className="relative mb-3">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Cari nama rental atau kota..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#F5C800]"
            />
          </div>
          <div className="flex gap-2">
            <input
              placeholder="Provinsi"
              className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#F5C800]"
            />
            <input
              placeholder="Kota"
              className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#F5C800]"
            />
          </div>
        </div>

        {/* Partner List */}
        <div className="divide-y divide-gray-50">
          {filtered.map((partner) => (
            <div
              key={partner.id}
              onClick={() => setSelected(partner.id === selected ? null : partner.id)}
              className={`p-5 cursor-pointer transition-colors hover:bg-gray-50 ${
                selected === partner.id ? 'border-l-4 border-[#F5C800] bg-yellow-50/30' : ''
              }`}
            >
              <div className="flex items-start gap-3 mb-2">
                <div className="w-10 h-10 bg-[#1A2332] rounded-xl flex-shrink-0" />
                <div>
                  <p className="font-bold text-[#1A2332] text-sm">{partner.name}</p>
                  <p className="text-xs text-gray-500">{partner.owner}</p>
                </div>
              </div>
              <div className="flex gap-4 text-xs text-gray-500 mb-2 ml-13">
                <span>{partner.armada} Armada</span>
                <span>{partner.city}</span>
              </div>
              <p className="text-xs text-gray-400 mb-3 ml-0 flex items-start gap-1">
                <MapPin size={11} className="mt-0.5 flex-shrink-0" /> {partner.address}
              </p>
              <div className="flex gap-2">
                <a
                  href={`https://wa.me/62${partner.whatsapp.slice(1)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white text-xs font-semibold py-2 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone size={12} /> Hubungi
                </a>
                <button className="w-10 h-9 border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center justify-center">
                  <MapPin size={14} className="text-gray-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map placeholder */}
      <div className="flex-1 bg-gray-100 relative min-h-64 md:min-h-0">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#1A2332] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MapPin size={32} className="text-[#F5C800]" />
            </div>
            <p className="font-semibold text-[#1A2332] mb-1">Peta Partner BRN</p>
            <p className="text-sm text-gray-500">Integrasi Google Maps</p>
            <p className="text-xs text-gray-400 mt-1">Tambahkan Google Maps API key untuk menampilkan peta</p>
          </div>
        </div>
        {/* Partner pins overlay */}
        {selected && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl p-4 w-72">
            {(() => {
              const p = PARTNERS.find((x) => x.id === selected)!
              return (
                <>
                  <p className="font-bold text-[#1A2332] text-sm mb-1">{p.name}</p>
                  <p className="text-xs text-gray-500 mb-1">{p.owner}</p>
                  <p className="text-xs text-gray-400 flex items-start gap-1">
                    <MapPin size={11} className="mt-0.5" /> {p.address}
                  </p>
                </>
              )
            })()}
          </div>
        )}
      </div>
    </div>
  )
}
