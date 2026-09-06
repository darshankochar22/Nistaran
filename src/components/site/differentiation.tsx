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
    <section className="border-t border-neutral-200 bg-neutral-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="eyebrow">Why not just buy software</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-black">
            Generic software vs. NISTARAN
          </h2>
          <p className="mt-3 text-neutral-500">
            Most tools are built for everyone and fit no one. Ours are built
            inside a real institution first, then adapted to yours.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto">
          <div className="min-w-[640px] overflow-hidden rounded-xl border border-neutral-200 bg-white">
            <div className="grid grid-cols-[1.1fr_1fr_1fr] border-b border-neutral-200 bg-neutral-50">
              <div className="p-4" />
              <div className="p-4 text-xs font-medium uppercase tracking-[0.1em] text-neutral-400">
                Generic software
              </div>
              <div className="p-4 text-xs font-medium uppercase tracking-[0.1em] text-nistaran">
                NISTARAN
              </div>
            </div>
            {ROWS.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[1.1fr_1fr_1fr] border-b border-neutral-200 last:border-b-0"
              >
                <div className="p-4 text-sm font-medium text-black">
                  {row.label}
                </div>
                <div className="flex items-start gap-2 border-l border-neutral-200 p-4 text-sm text-neutral-400">
                  <X size={14} className="mt-0.5 shrink-0 text-neutral-300" />
                  {row.generic}
                </div>
                <div className="flex items-start gap-2 border-l border-neutral-200 p-4 text-sm text-black">
                  <Check size={14} className="mt-0.5 shrink-0 text-nistaran" />
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
