import { Container } from "@/components/ui/Container";
import { StatCard } from "@/components/ui/StatCard";
import { HERO_STATS } from "@/data";

export function TentangStorySection() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-gray-600 text-[12px] font-semibold mb-6">
            Tentang Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Mengenal Lebih Dekat BRN
          </h2>
          <div className="text-gray-500 text-[15px] leading-relaxed space-y-4 max-w-3xl mx-auto">
            <p>
              Buser Rentcar Nasional (BRN) adalah wadah bagi para pengusaha
              rental mobil di seluruh Indonesia untuk bersatu, berkomunikasi,
              dan membangun standarisasi pelayanan. Berdiri dari keresahan
              bersama, kini kami tumbuh sebagai ekosistem solidaritas antar
              pengusaha.
            </p>
            <p>
              Sejak didirikan, kami berfokus pada keamanan komunitas, edukasi
              antar anggota, serta peningkatan <i>branding presence</i> di mata
              calon pelanggan. Visi ini jaringan yang terus berkembang kami
              berkomitmen untuk menjadi standar kualitas industri rental mobil
              nasional.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HERO_STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}
