import { memo } from "react";
import { cn } from "@/lib/utils";
import type { CSSProperties, ReactNode } from "react";

interface SectionHeaderProps {
  label?: string;
  labelClassName?: string;
  title: string;
  titleClassName?: string;
  titleStyle?: CSSProperties;
  description?: string;
  descriptionClassName?: string;
  align?: "center" | "left";
  className?: string;
  children?: ReactNode;
}

export const SectionHeader = memo(
  ({
    label,
    labelClassName,
    title,
    titleClassName,
    titleStyle,
    description,
    descriptionClassName,
    align = "center",
    className,
    children,
  }: SectionHeaderProps) => {
    return (
      <div
        className={cn(
          align === "center" && "flex flex-col items-center text-center",
          className,
        )}
      >
        {label && (
          <span
            className={cn(
              "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-4",
              labelClassName,
            )}
          >
            {label}
          </span>
        )}
        <h2
          className={cn("font-bold tracking-tight", titleClassName)}
          style={titleStyle}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "text-gray-500 leading-relaxed",
              descriptionClassName,
            )}
          >
            {description}
          </p>
        )}
        {children}
      </div>
    );
  },
);

SectionHeader.displayName = "SectionHeader";
