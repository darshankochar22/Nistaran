import { Check, X } from "lucide-react";

const ROWS = [
  {
    label: "Origin",
    generic: "Built for a generic market, sold as-is",
    ours: "Built and field-tested inside a real school/business first",
  },
  {
    label: "Fit",
    generic: "One dashboard, every industry",
    ours: "Tailored to your actual metrics — batches, stages, stock, not generic fields",
  },
  {
    label: "Pricing",
    generic: "Recurring per-seat SaaS fees",
    ours: "Tiered engagement matched to your data maturity",
  },
  {
    label: "Support",
    generic: "Distant ticket queue, generic scripts",
    ours: "Direct access to the team that built it, based in Chhattisgarh",
  },
  {
    label: "Change requests",
    generic: "Locked feature set, wait for the roadmap",
    ours: "Rebuilt/rebranded per client — see how the same system powers Nahta, Taparia, and NSCC differently",
  },
];

export function Differentiation() {
  return (
    <section className="bg-ink py-20 text-paper">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold-light">Why not just buy software</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-paper">
            Generic software vs. NISTARAN
          </h2>
          <p className="mt-3 text-white/70">
            Most tools are built for everyone and fit no one. Ours are built
            inside a real institution first, then adapted to yours.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto">
          <div className="min-w-[640px] overflow-hidden rounded-xl border border-white/15">
            <div className="grid grid-cols-[1.1fr_1fr_1fr] border-b border-white/15 bg-white/5">
              <div className="p-4" />
              <div className="p-4 font-mono text-xs uppercase tracking-[0.1em] text-white/50">
                Generic software
              </div>
              <div className="p-4 font-mono text-xs uppercase tracking-[0.1em] text-white/50">
                NISTARAN
              </div>
            </div>
            {ROWS.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[1.1fr_1fr_1fr] border-b border-white/15 last:border-b-0"
              >
                <div className="p-4 text-sm font-medium text-white/80">
                  {row.label}
                </div>
                <div className="flex items-start gap-2 border-l border-white/15 p-4 text-sm text-white/50">
                  <X size={14} className="mt-0.5 shrink-0 text-coral" />
                  {row.generic}
                </div>
                <div className="flex items-start gap-2 border-l border-white/15 p-4 text-sm text-paper">
                  <Check size={14} className="mt-0.5 shrink-0 text-gold-light" />
                  {row.ours}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
