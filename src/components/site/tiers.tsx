import { cn } from "@/lib/utils";

const TIERS = [
  {
    tag: "Tier-1",
    title: "Data-rich, competitive markets",
    desc: "Larger institutes and businesses with existing CRM or admission data, competing against several well-funded players.",
    depth: 5,
    model: "Full analytics + live dashboard, monthly retainer.",
    highlight: false,
  },
  {
    tag: "Tier-2",
    title: "Growing local markets",
    desc: "Established local institutes and businesses with some records, one or two serious local competitors.",
    depth: 3,
    model: "One-time positioning audit + quarterly check-in.",
    highlight: true,
  },
  {
    tag: "Tier-3",
    title: "Emerging markets, thin data",
    desc: "Small or newer businesses with minimal recorded data, where word-of-mouth still decides most outcomes.",
    depth: 1,
    model: "Fixed-fee, template-based diagnostic.",
    highlight: false,
  },
];

export function Tiers() {
  return (
    <section id="tiers" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <p className="eyebrow">The model</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-black">
            A different engagement for a different market.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {TIERS.map((t) => (
            <div
              key={t.tag}
              className={cn(
                "relative flex flex-col gap-4 rounded-xl border p-7",
                t.highlight
                  ? "border-2 border-nistaran"
                  : "border-neutral-200"
              )}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-7 rounded-full bg-nistaran px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.08em] text-white">
                  Most common
                </span>
              )}
              <p className="text-xs font-medium uppercase tracking-[0.1em] text-neutral-400">
                {t.tag}
              </p>
              <h3 className="text-xl font-medium text-black">{t.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-500">
                {t.desc}
              </p>
              <div className="flex gap-1.5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span
                    key={idx}
                    className={cn(
                      "h-1.5 flex-1 rounded-full",
                      idx < t.depth ? "bg-nistaran" : "bg-neutral-200"
                    )}
                  />
                ))}
              </div>
              <span className="text-[11px] uppercase tracking-[0.08em] text-neutral-400">
                Data depth available
              </span>
              <div className="mt-2 border-t border-dashed border-neutral-200 pt-4 text-sm font-medium text-black">
                {t.model}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
