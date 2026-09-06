import Image from "next/image";

import { cn } from "@/lib/utils";

export function BrandMark({
  size = "md",
  showWordmark = true,
  className,
}: {
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  className?: string;
}) {
  const boxSize =
    size === "lg" ? "size-11" : size === "sm" ? "size-7" : "size-9";
  const textSize =
    size === "lg" ? "text-lg" : size === "sm" ? "text-xs" : "text-sm";

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <Image
        src="/images/logo.png"
        alt="NISTARAN Solutions logo"
        width={44}
        height={44}
        priority
        className={cn("shrink-0 object-contain", boxSize)}
      />
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span className={cn("font-heading font-semibold text-foreground", textSize)}>
            NISTARAN
          </span>
          <span className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground-lighter">
            Solutions
          </span>
        </div>
      )}
    </div>
  );
}
