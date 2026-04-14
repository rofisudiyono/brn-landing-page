import { Container } from "@/components/ui/Container";
import { TENTANG_TEAM_MEMBERS } from "@/constant/tentangTeam";

export function TentangTeamSection() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Pengurus Organisasi Aktif
          </h2>
          <p className="text-gray-500 text-[15px] max-w-xl mx-auto">
            Sosok di balik dedikasi untuk menjalankan roda pergerakan komunitas
            BRN.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {TENTANG_TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="group">
              <div className="rounded-[24px] overflow-hidden bg-gray-100 aspect-[4/5] mb-5">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0"
                />
              </div>
              <h4 className="font-bold text-gray-900 text-lg mb-1">
                {member.name}
              </h4>
              <p className="text-[#F5C800] text-[11px] font-bold tracking-wider mb-3">
                {member.role}
              </p>
              <p className="text-gray-500 text-[13px] leading-relaxed">
                {member.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
