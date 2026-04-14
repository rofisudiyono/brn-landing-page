import { lazy, Suspense } from "react";
import type { PartnerMapItem } from "@/components/peta/PartnerMap";

const PartnerMap = lazy(() => import("@/components/peta/PartnerMap"));

interface PartnerMapLoaderProps {
  partners: PartnerMapItem[];
  selectedId: number | null;
  selectedPosition: [number, number] | null;
  onMarkerClick: (id: number) => void;
}

export function PartnerMapLoader({
  partners,
  selectedId,
  selectedPosition,
  onMarkerClick,
}: PartnerMapLoaderProps) {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center bg-[#F5F5F5]">
          <div className="flex flex-col items-center gap-3">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-[#F5C800]" />
            <p className="text-sm font-medium text-gray-500">
              Memuat peta...
            </p>
          </div>
        </div>
      }
    >
      <PartnerMap
        partners={partners}
        selectedId={selectedId}
        selectedPosition={selectedPosition}
        onMarkerClick={onMarkerClick}
      />
    </Suspense>
  );
}
