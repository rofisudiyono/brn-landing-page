import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS } from "@/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-[#F8FAFC] border-b border-gray-100">
      {/* Container disamakan dengan Hero (max-w-6xl) agar sejajar rapi */}
      <Container>
        {/* Tinggi navbar dikurangi menjadi h-[72px] */}
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2">
            <div
              className="flex flex-col leading-none"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <span className="text-2xl font-bold tracking-tight text-gray-900">
                BRN<span className="text-gray-400 font-light">+</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav - Ukuran font diperkecil dan dirapikan */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-[13px] font-semibold transition-colors",
                  location.pathname === link.href
                    ? "text-gray-900" // Active state
                    : "text-gray-500 hover:text-gray-900",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Button - Padding dikurangi drastis agar lebih compact */}
          <div className="hidden md:block">
            <Link to="/daftar">
              <Button className="bg-[#0F172A] hover:bg-[#1e293b] text-white px-6 py-2.5 rounded-full text-[13px] font-semibold transition-all shadow-sm">
                Daftar Partner
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen ? (
          <div className="md:hidden border-t border-gray-100 py-4 flex flex-col gap-3 bg-white px-4 shadow-xl">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-sm font-medium px-3 py-2 rounded-md",
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
              <Button className="w-full bg-[#0F172A] rounded-full py-3 text-sm">
                Daftar Partner
              </Button>
            </Link>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
