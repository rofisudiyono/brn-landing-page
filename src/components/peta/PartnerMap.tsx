import { useEffect, memo, useMemo } from "react";
import { createPortal } from "react-dom";
import L from "leaflet";
import {
  MapContainer,
  Marker,
  ScaleControl,
  TileLayer,
  Tooltip,
  useMap,
} from "react-leaflet";
import { Plus, Minus, Crosshair } from "lucide-react";
import type { PartnerMapItem } from "@/types/partner";

export type { PartnerMapItem };

type PartnerMapProps = {
  partners: PartnerMapItem[];
  selectedId: number | null;
  /** Titik untuk flyTo (dari data lengkap, agar tetap akurat jika filter menyembunyikan kartu) */
  selectedPosition: [number, number] | null;
  onMarkerClick: (id: number) => void;
};

const BR_CENTER: [number, number] = [-7.5, 111];
const DEFAULT_ZOOM = 6;

function createPinIcon(isSelected: boolean) {
  const bg = isSelected ? "#10B981" : "#F5C800";
  const size = isSelected ? 40 : 32;
  const iconPx = isSelected ? 18 : 14;
  return L.divIcon({
    className: "partner-map-pin",
    html: `<div style="width:${size}px;height:${size}px;border-radius:9999px;background:${bg};border:2px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,0.15);display:flex;align-items:center;justify-content:center;">
      <svg xmlns="http://www.w3.org/2000/svg" width="${iconPx}" height="${iconPx}" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
    </div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

const PIN_ICON_DEFAULT = createPinIcon(false);
const PIN_ICON_SELECTED = createPinIcon(true);

function MapViewSync({
  selectedPosition,
}: {
  selectedPosition: [number, number] | null;
}) {
  const map = useMap();

  useEffect(() => {
    if (selectedPosition == null) return;
    map.flyTo(selectedPosition, 12, { duration: 0.55 });
  }, [selectedPosition, map]);

  return null;
}

function MapToolbar() {
  const map = useMap();

  return createPortal(
    <div className="pointer-events-auto absolute bottom-6 right-6 z-[1000] flex flex-col gap-2">
      <div className="flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md">
        <button
          type="button"
          aria-label="Perbesar"
          className="flex h-10 w-10 items-center justify-center border-b border-gray-100 text-gray-600 transition-colors hover:bg-gray-50"
          onClick={() => map.zoomIn()}
        >
          <Plus size={16} />
        </button>
        <button
          type="button"
          aria-label="Perkecil"
          className="flex h-10 w-10 items-center justify-center text-gray-600 transition-colors hover:bg-gray-50"
          onClick={() => map.zoomOut()}
        >
          <Minus size={16} />
        </button>
      </div>
      <button
        type="button"
        aria-label="Lokasi saya"
        className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl border border-gray-100 bg-white text-gray-600 shadow-md transition-colors hover:bg-gray-50"
        onClick={() => {
          map.locate({ setView: true, maxZoom: 14 });
        }}
      >
        <Crosshair size={16} />
      </button>
    </div>,
    map.getContainer(),
  );
}

const PartnerMarker = memo(function PartnerMarker({
  partner,
  isSelected,
  onMarkerClick,
}: {
  partner: PartnerMapItem;
  isSelected: boolean;
  onMarkerClick: (id: number) => void;
}) {
  const eventHandlers = useMemo(
    () => ({
      click: () => onMarkerClick(partner.id),
    }),
    [onMarkerClick, partner.id],
  );

  return (
    <Marker
      position={[partner.lat, partner.lng]}
      icon={isSelected ? PIN_ICON_SELECTED : PIN_ICON_DEFAULT}
      eventHandlers={eventHandlers}
    >
      {isSelected ? (
        <Tooltip
          permanent
          direction="top"
          offset={[0, -24]}
          opacity={1}
          className="!rounded-xl !border !border-gray-100 !bg-white !p-0 !shadow-lg [&_.leaflet-tooltip-tip]:!bg-white"
        >
          <div className="rounded-xl px-4 py-2.5 text-center">
            <span className="block text-[12px] font-bold leading-tight text-gray-900">
              {partner.name}
            </span>
            <span className="text-[10px] font-medium text-gray-400">
              {partner.kategori}
            </span>
          </div>
        </Tooltip>
      ) : null}
    </Marker>
  );
});

function PartnerMap({
  partners,
  selectedId,
  selectedPosition,
  onMarkerClick,
}: PartnerMapProps) {
  return (
    <MapContainer
      center={BR_CENTER}
      zoom={DEFAULT_ZOOM}
      className="z-0 h-full w-full min-h-[400px]"
      scrollWheelZoom
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapViewSync selectedPosition={selectedPosition} />
      <MapToolbar />
      <ScaleControl position="bottomleft" imperial={false} />
      {partners.map((partner) => (
        <PartnerMarker
          key={partner.id}
          partner={partner}
          isSelected={selectedId === partner.id}
          onMarkerClick={onMarkerClick}
        />
      ))}
    </MapContainer>
  );
}

export default memo(PartnerMap);
