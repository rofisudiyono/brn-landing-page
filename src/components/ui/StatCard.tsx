import { memo } from "react";

interface StatCardProps {
  value: string;
  label: string;
  sub: string;
  /** compact: HeroSection style (smaller padding, shadow-sm)
   *  default: TentangPage style (larger padding, border)  */
  variant?: "default" | "compact";
}

export const StatCard = memo(
  ({ value, label, sub, variant = "default" }: StatCardProps) => {
    if (variant === "compact") {
      return (
        <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col justify-center">
          <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
            {value}
          </p>
          <p className="text-xs font-bold text-gray-900 mb-1">{label}</p>
          <p className="text-gray-500 text-[10px] leading-normal">{sub}</p>
        </div>
      );
    }

    return (
      <div className="border border-gray-100 rounded-2xl p-8 bg-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] text-center md:text-left">
        <h3 className="text-4xl font-bold text-gray-900 mb-2">{value}</h3>
        <p className="font-bold text-sm text-gray-900 mb-2">{label}</p>
        <p className="text-[12px] text-gray-500">{sub}</p>
      </div>
    );
  },
);

StatCard.displayName = "StatCard";
