import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-[#1A2332] text-white pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="text-xl font-black mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>BRN</p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Buser Rental Nasional adalah komunitas solidaritas pengusaha rental mobil seluruh Indonesia untuk
              keamanan dan kemajuan bersama.
            </p>
          </div>

          {/* Perusahaan */}
          <div>
            <p className="font-semibold text-sm mb-4">Perusahaan</p>
            <ul className="space-y-2.5">
              {['Tentang Kami', 'Kontak', 'Karir'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <p className="font-semibold text-sm mb-4">Layanan</p>
            <ul className="space-y-2.5">
              {[
                { label: 'Peta Partner', href: '/peta-partner' },
                { label: 'Bantuan Buser', href: '#' },
                { label: 'Event', href: '/event' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="font-semibold text-sm mb-4">Legal</p>
            <ul className="space-y-2.5">
              {[
                { label: 'Syarat & Ketentuan', href: '/terms' },
                { label: 'Kebijakan Privasi', href: '#' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 pt-8">
          © 2025 Buser Rental Nasional. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
