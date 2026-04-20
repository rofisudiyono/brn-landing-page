import { MapPin, Mail, Phone, Map, Tag } from "lucide-react";
import { KATEGORI_COLOR } from "@/constant/partnerKategori";
import type { Kategori, Partner } from "@/types/partner";
import { toWhatsAppHref } from "@/utils/partnerMap";

type PartnerCardProps = {
  partner: Partner;
  isSelected: boolean;
  onSelect: () => void;
};

export function PartnerCard({ partner, isSelected, onSelect }: PartnerCardProps) {
  const badgeClass =
    KATEGORI_COLOR[partner.kategori as Kategori] ??
    "bg-gray-100 text-gray-600";

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      className={`rounded-[16px] p-5 cursor-pointer transition-all duration-200 border-2 ${
        isSelected
          ? "border-[#F5C800] shadow-[0_4px_20px_-5px_rgba(245,200,0,0.25)] bg-yellow-50/30"
          : "border-transparent shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] hover:border-gray-100 hover:shadow-md bg-white"
      }`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 border border-gray-100">
          <img
            src={partner.avatar}
            alt={partner.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center min-w-0">
          <h3 className="font-bold text-gray-900 text-[15px] leading-tight mb-0.5 truncate">
            {partner.name}
          </h3>
          <p className="text-[12px] text-gray-400 font-medium truncate">
            {partner.owner}
          </p>
        </div>
      </div>

      <div className="mb-3">
        <span
          className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-lg ${badgeClass}`}
        >
          <Tag size={10} />
          {partner.kategori}
        </span>
      </div>

      <div className="flex flex-col gap-1.5 mb-5">
        <div className="flex items-center gap-2 text-[12px] font-bold text-gray-600">
          <MapPin size={13} className="text-gray-400 shrink-0" />
          {partner.city},{" "}
          <span className="font-normal text-gray-500">{partner.province}</span>
        </div>
        <div className="flex items-start gap-2 text-[12px] text-gray-400 leading-relaxed pl-5">
          {partner.address}
        </div>
        <div className="flex items-center gap-2 text-[12px] text-gray-400 pl-5">
          <Mail size={11} className="shrink-0" />
          {partner.email}
        </div>
      </div>

      <div className="flex gap-2.5">
        <a
          href={toWhatsAppHref(partner.whatsapp)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex-1 bg-[#10B981] hover:bg-[#059669] text-white text-[13px] font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
        >
          <Phone size={14} fill="currentColor" />
          Hubungi
        </a>
        <a
          href={partner.mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.stopPropagation();
            onSelect();
          }}
          title="Lihat di Google Maps"
          className="w-[46px] h-[46px] border border-gray-200 rounded-xl hover:bg-gray-50 flex items-center justify-center transition-colors shadow-sm shrink-0"
        >
          <Map size={18} className="text-gray-600" />
        </a>
      </div>
    </div>
  );
}
