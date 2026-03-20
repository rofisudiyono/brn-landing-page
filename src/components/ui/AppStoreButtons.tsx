export function AppStoreButtons() {
  return (
    <div className="flex flex-wrap gap-3 justify-center lg:justify-start w-full">
      <a
        href="#"
        className="flex items-center gap-3 bg-white border border-gray-200 text-gray-900 rounded-2xl px-5 py-3 hover:bg-gray-50 transition-colors shadow-sm"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-black shrink-0">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-500 font-medium leading-none mb-1">
            Download on the
          </span>
          <span className="text-[13px] font-bold leading-none">App Store</span>
        </div>
      </a>

      <a
        href="#"
        className="flex items-center gap-3 bg-white border border-gray-200 text-gray-900 rounded-2xl px-5 py-3 hover:bg-gray-50 transition-colors shadow-sm"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-black shrink-0">
          <path d="M3.18 23.76a1.49 1.49 0 0 0 1.68-.17l.09-.07 9.43-9.43-2.43-2.43zM20.1 10.73l-2.46-1.41-2.71 2.71 2.71 2.7 2.49-1.42a1.5 1.5 0 0 0 0-2.58zM2.14.62a1.5 1.5 0 0 0-.14.64v21.48a1.5 1.5 0 0 0 .14.64l.07.07 12.04-12.04v-.28L2.21.55zM12.95 14.27 3.95 23.27l-.09-.06 9.09-9.09 2.43 2.43z" />
        </svg>
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-500 font-medium leading-none mb-1">
            Get it on
          </span>
          <span className="text-[13px] font-bold leading-none">Play Store</span>
        </div>
      </a>
    </div>
  );
}
