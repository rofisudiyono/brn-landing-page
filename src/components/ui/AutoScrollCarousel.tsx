import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AutoScrollCarouselProps {
  children: React.ReactNode;
  /** Interval in ms between each auto-scroll step (default: 2000) */
  interval?: number;
  /** Pixels to scroll per step (default: 320) */
  scrollAmount?: number;
  className?: string;
}

export function AutoScrollCarousel({
  children,
  interval = 2000,
  scrollAmount = 320,
  className,
}: AutoScrollCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const isEnd = scrollLeft + clientWidth >= scrollWidth - 10;
        if (isEnd) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
        }
      }
    }, interval);
    return () => clearInterval(timer);
  }, [interval, scrollAmount, isPaused]);

  return (
    <div
      ref={scrollRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      className={cn(
        "flex overflow-x-auto snap-x snap-mandatory scroll-smooth",
        "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
        className,
      )}
    >
      {children}
    </div>
  );
}
