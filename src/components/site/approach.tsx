import { Compass, Search, Target, TrendingUp } from "lucide-react";

import { IconBackground } from "@/components/supabase/Icon/IconBackground";

const STEPS = [
  {
    icon: Search,
    num: "01",
    title: "Audit",
    text: "We pull the numbers you already have — enquiries, admissions, footfall, ad spend, retention — no new software, no new process.",
  },
  {
    icon: Compass,
    num: "02",
    title: "Diagnose",
    text: "We find exactly where the market misreads you, or where your own funnel is leaking, and put a number on it.",
  },
  {
    icon: Target,
    num: "03",
    title: "Position",
    text: "One clear repositioning move, built from your data — not a generic marketing playbook copied across every client.",
  },
  {
    icon: TrendingUp,
    num: "04",
    title: "Track",
    text: "A short follow-up cycle to confirm the move actually shifted the number it was meant to shift.",
  },
];

export function Approach() {
  return (
    <section id="approach" className="border-t border-default bg-surface-75/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <p className="eyebrow">The process</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Four steps, run in order, on your data.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step.num} className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <IconBackground>
                  <step.icon size={16} className="text-brand-600" />
                </IconBackground>
                <span className="font-heading text-xl italic text-brand-600">
                  {step.num}
                </span>
              </div>
              <h3 className="font-medium text-foreground">{step.title}</h3>
              <p className="text-sm leading-relaxed text-foreground-light">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
