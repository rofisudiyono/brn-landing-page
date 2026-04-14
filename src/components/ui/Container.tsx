import { memo } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = memo(({ children, className }: ContainerProps) => {
  return (
    <div className={cn("max-w-6xl mx-auto px-4 sm:px-6", className)}>
      {children}
    </div>
  );
});

Container.displayName = "Container";
