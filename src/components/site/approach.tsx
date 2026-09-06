import { Compass, Search, Target, TrendingUp } from "lucide-react";

import { IconBackground } from "@/components/supabase/Icon/IconBackground";
import { Card } from "@/components/ui/card";
import {
  MiniChecklist,
  MiniGrowth,
  MiniNetwork,
  MiniTarget,
} from "@/components/site/mini-illustrations";

const STEPS = [
  {
    icon: Search,
    num: "01",
    title: "Audit",
    lead: "We pull the numbers you already have",
    rest: " — enquiries, admissions, footfall, ad spend, retention — no new software, no new process.",
    illustration: MiniChecklist,
  },
  {
    icon: Compass,
    num: "02",
    title: "Diagnose",
    lead: "We find exactly where the market misreads you",
    rest: ", or where your own funnel is leaking, and put a number on it.",
    illustration: MiniNetwork,
  },
  {
    icon: Target,
    num: "03",
    title: "Position",
    lead: "One clear repositioning move, built from your data",
    rest: " — not a generic marketing playbook copied across every client.",
    illustration: MiniTarget,
  },
  {
    icon: TrendingUp,
    num: "04",
    title: "Track",
    lead: "A short follow-up cycle",
    rest: " to confirm the move actually shifted the number it was meant to shift.",
    illustration: MiniGrowth,
  },
];

export function Approach() {
  return (
    <section id="approach" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <p className="eyebrow">The process</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-black">
            Four steps, run in order, on your data.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <Card
              key={step.num}
              className="flex flex-col gap-3 rounded-xl border-neutral-200 p-5 shadow-none"
            >
              <div className="flex items-center gap-3">
                <IconBackground>
                  <step.icon size={16} className="text-nistaran" />
                </IconBackground>
                <span className="accent-serif text-xl">{step.num}</span>
              </div>
              <h3 className="font-medium text-black">{step.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-500">
                <strong className="font-semibold text-black">
                  {step.lead}
                </strong>
                {step.rest}
              </p>
              <step.illustration />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
