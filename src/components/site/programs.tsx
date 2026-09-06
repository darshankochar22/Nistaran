import {
  BookOpenCheck,
  ClipboardCheck,
  LineChart,
  Users2,
  UserSquare2,
  Zap,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { IconBackground } from "@/components/supabase/Icon/IconBackground";
import {
  MiniBadges,
  MiniChart,
  MiniChecklist,
  MiniGrowth,
  MiniNetwork,
  MiniTarget,
} from "@/components/site/mini-illustrations";

const PROGRAMS = [
  {
    icon: BookOpenCheck,
    eyebrow: "Bridge Course",
    title: "Bridge Course Workbooks",
    lead: "Structured workbooks that bridge previous-class gaps",
    rest: " for the students who need it most — built to run inside the regular academic calendar.",
    illustration: MiniChecklist,
  },
  {
    icon: Zap,
    eyebrow: "Operations",
    title: "Faster Operations for Daily Business",
    lead: "Streamlined daily workflows",
    rest: " — attendance, reporting, internal communication — so running the school takes less manual effort.",
    illustration: MiniChart,
  },
  {
    icon: LineChart,
    eyebrow: "Analysis",
    title: "Timely Institutional Analysis",
    lead: "Periodic review across principal & management, admin operations, teacher performance, student needs, and infrastructure",
    rest: " — so problems are caught while small.",
    illustration: MiniGrowth,
  },
  {
    icon: ClipboardCheck,
    eyebrow: "Teacher Tracking",
    title: "Teacher Performance & Syllabus Execution Tracking",
    lead: "We track the gap between the syllabus planner and its real classroom execution",
    rest: ", and run structured feedback cycles that give increments and decrements a clear, data-backed basis.",
    illustration: MiniTarget,
  },
  {
    icon: Users2,
    eyebrow: "Parent Access",
    title: "Student-Parent Portal",
    lead: "Parent involvement in most coaching institutes is minimal today.",
    rest: " We build a portal that makes a student's performance genuinely easy for parents to access and understand.",
    illustration: MiniNetwork,
  },
  {
    icon: UserSquare2,
    eyebrow: "Faculty",
    title: "Faculty Development Program",
    lead: "Structured training and workshops for teaching staff",
    rest: " — building classroom capability and a more collaborative, motivated staff culture together.",
    illustration: MiniBadges,
  },
];

export function Programs() {
  return (
    <section id="programs" className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <p className="eyebrow">For education clients</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-black">
            School Development Programs
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((p) => (
            <Card
              key={p.title}
              className="flex flex-col gap-3 rounded-xl border-neutral-200 bg-white p-5 shadow-none"
            >
              <IconBackground>
                <p.icon size={16} className="text-nistaran" />
              </IconBackground>
              <div>
                <p className="eyebrow">{p.eyebrow}</p>
                <h3 className="mt-1.5 font-medium text-black">{p.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-neutral-500">
                <strong className="font-semibold text-black">{p.lead}</strong>
                {p.rest}
              </p>
              <p.illustration />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
