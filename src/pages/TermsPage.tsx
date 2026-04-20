import { useState } from "react";
import { TERMS_SECTIONS } from "@/constant/termsSections";
import { scrollToElementById } from "@/utils/scroll";

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState("pendahuluan");

  function scrollToSection(id: string) {
    setActiveSection(id);
    scrollToElementById(id, -100);
  }

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-[#0F172A] pt-24 pb-24 text-center px-4 sm:px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="w-12 h-1 bg-[#F5C800] mb-8" />

          <h1 className="text-4xl md:text-[2.5rem] font-bold text-white mb-6 tracking-tight">
            Syarat & Ketentuan
          </h1>

          <p className="text-gray-400 text-[15px] leading-relaxed max-w-xl">
            Pembaruan terakhir: 24 Oktober 2025. Silakan baca Syarat dan
            Ketentuan ini dengan saksama sebelum menggunakan layanan Buser
            Rentcar Nasional (BRN).
          </p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          <aside className="w-full lg:w-[280px] shrink-0 lg:sticky lg:top-28">
            <div className="mb-10">
              <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4 px-4">
                Daftar Isi
              </h3>
              <nav className="flex flex-col">
                {TERMS_SECTIONS.map((sec) => (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => scrollToSection(sec.id)}
                    className={`text-left px-4 py-3 text-[13px] font-semibold transition-all border-l-2 ${
                      activeSection === sec.id
                        ? "border-[#F5C800] bg-yellow-50/50 text-[#0F172A]"
                        : "border-transparent text-gray-500 hover:text-[#0F172A] hover:bg-gray-50"
                    }`}
                  >
                    {sec.title}
                  </button>
                ))}
              </nav>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h4 className="font-bold text-[#0F172A] text-sm mb-2">
                Butuh Bantuan?
              </h4>
              <p className="text-gray-500 text-[12px] leading-relaxed mb-5">
                Jika Anda memiliki pertanyaan terkait syarat dan ketentuan kami,
                silakan hubungi tim support.
              </p>
              <button
                type="button"
                className="w-full bg-white border border-gray-200 text-[#0F172A] text-[13px] font-bold py-2.5 rounded-xl hover:bg-gray-100 transition-colors shadow-sm"
              >
                Hubungi Kami
              </button>
            </div>
          </aside>

          <main className="flex-1 max-w-3xl">
            <div className="space-y-14">
              {TERMS_SECTIONS.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-[#0F172A] mb-5">
                    {section.title}
                  </h2>

                  {section.content ? (
                    <p className="text-[15px] text-gray-600 leading-[1.8] whitespace-pre-line mb-4">
                      {section.content}
                    </p>
                  ) : null}

                  {section.list ? (
                    <ul className="space-y-3 mt-4">
                      {section.list.map((item, j) => (
                        <li
                          key={j}
                          className="flex gap-3 text-[15px] text-gray-600 leading-[1.7]"
                        >
                          <span className="text-gray-800 mt-2.5 text-[6px]">
                            ●
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {section.highlight ? (
                    <div className="mt-6 bg-[#F8FAFC] rounded-2xl p-6 md:p-8 border-l-4 border-[#F5C800]">
                      <h4 className="font-bold text-[#0F172A] text-[15px] mb-4">
                        {section.highlight.title}
                      </h4>
                      <ul className="space-y-3">
                        {section.highlight.list.map((item, j) => (
                          <li
                            key={j}
                            className="flex gap-3 text-[14px] text-gray-600 leading-[1.7]"
                          >
                            <span className="text-gray-400 mt-2.5 text-[6px]">
                              ●
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
