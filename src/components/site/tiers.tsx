import { Card } from "@/components/ui/card";
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
    <section id="tiers" className="border-t border-default bg-surface-75/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <p className="eyebrow">The model</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            A different engagement for a different market.
          </h2>
        </div>

        <div className="mt-10 grid overflow-hidden rounded-xl border border-default sm:grid-cols-3">
          {TIERS.map((t, i) => (
            <Card
              key={t.tag}
              className={cn(
                "flex flex-col gap-4 rounded-none border-0 p-7",
                i !== TIERS.length - 1 &&
                  "border-b border-default sm:border-b-0 sm:border-r",
                t.highlight && "bg-ink text-paper"
              )}
            >
              <p
                className={cn(
                  "font-mono text-xs uppercase tracking-[0.1em]",
                  t.highlight ? "text-saffron" : "text-brand-600"
                )}
              >
                {t.tag}
              </p>
              <h3 className="font-heading text-xl font-medium">{t.title}</h3>
              <p
                className={cn(
                  "text-sm leading-relaxed",
                  t.highlight ? "text-white/70" : "text-foreground-light"
                )}
              >
                {t.desc}
              </p>
              <div className="flex gap-1.5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span
                    key={idx}
                    className={cn(
                      "h-1.5 flex-1 rounded-full",
                      idx < t.depth
                        ? t.highlight
                          ? "bg-saffron"
                          : "bg-brand-600"
                        : t.highlight
                          ? "bg-white/15"
                          : "bg-surface-300"
                    )}
                  />
                ))}
              </div>
              <span
                className={cn(
                  "font-mono text-[11px] uppercase tracking-[0.08em]",
                  t.highlight ? "text-white/50" : "text-foreground-lighter"
                )}
              >
                Data depth available
              </span>
              <div
                className={cn(
                  "mt-2 border-t pt-4 font-mono text-sm",
                  t.highlight ? "border-white/15" : "border-dashed border-default"
                )}
              >
                {t.model}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
