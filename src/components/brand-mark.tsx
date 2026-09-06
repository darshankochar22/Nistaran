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
    size === "lg" ? "size-16" : size === "sm" ? "size-9" : "size-12";
  const textSize =
    size === "lg" ? "text-xl" : size === "sm" ? "text-sm" : "text-base";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        src="/images/logo.png"
        alt="NISTARAN Solutions logo"
        width={64}
        height={64}
        priority
        className={cn("shrink-0 object-contain", boxSize)}
      />
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span className={cn("font-semibold tracking-tight text-black", textSize)}>
            NISTARAN
          </span>
          <span className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-neutral-400">
            Solutions
          </span>
        </div>
      )}
    </div>
  );
}
