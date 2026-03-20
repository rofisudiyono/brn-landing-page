import { useState } from 'react'
import { MapPin, Clock, Search } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { EVENTS } from '@/data'

const MONTHS = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
]

export default function EventPage() {
  const [search, setSearch] = useState('')
  const [location, setLocation] = useState('')
  const [month, setMonth] = useState('')

  const filtered = EVENTS.filter((e) => {
    const matchSearch = e.title.toLowerCase().includes(search.toLowerCase())
    const matchLocation = !location || e.location.toLowerCase().includes(location.toLowerCase())
    const matchMonth = !month || e.date.includes(month)
    return matchSearch && matchLocation && matchMonth
  })

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1A2332] py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-gray-300 text-base leading-relaxed animate-fade-in-up">
            Ikuti berbagai acara kopdar, seminar, dan gathering komunitas Buser Rental Nasional di seluruh
            Indonesia.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row gap-3 items-end">
            <div className="flex-1 relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Cari nama event..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#F5C800] focus:border-[#F5C800]"
              />
            </div>
            <div className="flex-1 relative">
              <MapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Semua Lokasi"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#F5C800] focus:border-[#F5C800]"
              />
            </div>
            <div className="flex-1">
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#F5C800] text-gray-500"
              >
                <option value="">Pilih Bulan</option>
                {MONTHS.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
            <Button onClick={() => {}} size="md">Cari Event</Button>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-bold text-[#1A2332] text-xl mb-6">Event Mendatang</h2>
          {filtered.length === 0 ? (
            <p className="text-center text-gray-400 py-16">Tidak ada event yang ditemukan.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filtered.map((event, i) => (
                <div
                  key={event.id}
                  className="rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <img src={event.image} alt={event.title} className="w-full h-44 object-cover" />
                  <div className="p-5">
                    <Badge className="mb-3">{event.date}</Badge>
                    <h3 className="font-bold text-[#1A2332] text-base mb-2 leading-snug">{event.title}</h3>
                    <p className="text-xs text-gray-500 mb-4 leading-relaxed">{event.description}</p>
                    <div className="flex flex-col gap-1.5 text-xs text-gray-400 mb-4">
                      <span className="flex items-center gap-1.5"><MapPin size={12} /> {event.location}</span>
                      <span className="flex items-center gap-1.5"><Clock size={12} /> {event.time}</span>
                    </div>
                    <button className="w-full border border-gray-200 text-sm font-medium py-2 rounded-lg hover:bg-gray-50 transition-colors">
                      Daftar Event
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
