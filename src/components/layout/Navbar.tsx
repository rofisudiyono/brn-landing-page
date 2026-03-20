import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    // Background diubah menjadi putih kebiruan pucat sesuai gambar
    <header className="sticky top-0 z-50 bg-[#F8FAFC] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section - Mengikuti visual gambar */}
          <Link to="/" className="flex items-center gap-3">
            {/* <img
              src="/logo-brn-bulat.png" // Sesuaikan path logo bulat kuning Anda
              alt="BRN Logo"
              className="w-10 h-10 object-contain"
            /> */}
            <div className="flex flex-col leading-none">
              <span
                className="text-2xl font-bold tracking-tighter text-gray-900"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                BRN<span className="text-gray-400 font-light">+</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav - Teks lebih gelap dan spacing lebih lebar */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-[15px] font-medium transition-colors",
                  location.pathname === link.href
                    ? "text-gray-900 font-bold" // Active state
                    : "text-gray-600 hover:text-gray-900",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Button - Navy Gelap sesuai gambar */}
          <div className="hidden md:block">
            <Link to="/daftar">
              <Button className="bg-[#0F1E35] hover:bg-[#1a2e4d] text-white px-8 py-6 rounded-full text-sm font-bold transition-all">
                Daftar Partner
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 py-6 flex flex-col gap-4 bg-white px-4 shadow-xl">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-base font-medium px-2 py-2 rounded-md",
                  location.pathname === link.href
                    ? "bg-gray-50 text-gray-900 font-bold"
                    : "text-gray-600",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/daftar"
              onClick={() => setIsOpen(false)}
              className="mt-2"
            >
              <Button className="w-full bg-[#0F1E35] rounded-full py-6">
                Daftar Partner
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
