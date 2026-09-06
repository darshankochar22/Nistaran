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

const PROGRAMS = [
  {
    icon: BookOpenCheck,
    eyebrow: "Bridge Course",
    title: "Bridge Course Workbooks",
    text: "Structured workbooks that bridge previous-class gaps for the students who need it most — built to run inside the regular academic calendar.",
  },
  {
    icon: Zap,
    eyebrow: "Operations",
    title: "Faster Operations for Daily Business",
    text: "Streamlined daily workflows — attendance, reporting, internal communication — so running the school takes less manual effort.",
  },
  {
    icon: LineChart,
    eyebrow: "Analysis",
    title: "Timely Institutional Analysis",
    text: "Periodic review across principal & management, admin operations, teacher performance, student needs, and infrastructure — so problems are caught while small.",
  },
  {
    icon: ClipboardCheck,
    eyebrow: "Teacher Tracking",
    title: "Teacher Performance & Syllabus Execution Tracking",
    text: "We track the gap between the syllabus planner and its real classroom execution, and run structured feedback cycles that give increments and decrements a clear, data-backed basis.",
  },
  {
    icon: Users2,
    eyebrow: "Parent Access",
    title: "Student-Parent Portal",
    text: "Parent involvement in most coaching institutes is minimal today. We build a portal that makes a student's performance genuinely easy for parents to access and understand.",
  },
  {
    icon: UserSquare2,
    eyebrow: "Faculty",
    title: "Faculty Development Program",
    text: "Structured training and workshops for teaching staff — building classroom capability and a more collaborative, motivated staff culture together.",
  },
];

export function Programs() {
  return (
    <section
      id="programs"
      className="border-t border-default bg-surface-75/60"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <p className="eyebrow">For education clients</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            School Development Programs
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((p) => (
            <Card key={p.title} className="flex flex-col gap-3 p-5">
              <IconBackground>
                <p.icon size={16} className="text-brand-600" />
              </IconBackground>
              <div>
                <p className="eyebrow">{p.eyebrow}</p>
                <h3 className="mt-1.5 font-medium text-foreground">
                  {p.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-foreground-light">
                {p.text}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
