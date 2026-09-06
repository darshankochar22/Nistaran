import { GraduationCap, HeartHandshake, ShoppingBag, SquareStack } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { IconBackground } from "@/components/supabase/Icon/IconBackground";

const VERTICALS = [
  {
    id: "education",
    icon: GraduationCap,
    eyebrow: "Education",
    title: "Coaching institutes, schools & EdTech",
    text: "We read enrollment funnels, batch-wise dropout, and result-based positioning to show you where enquiries are being lost and where your results aren't being said loudly enough.",
    bullets: [
      "Enrollment funnel & batch retention audit",
      "Marketing spend vs. actual conversion",
      "Result-based positioning against nearby competitors",
    ],
  },
  {
    id: "sales",
    icon: ShoppingBag,
    eyebrow: "Sales",
    title: "Retail, franchise & D2C businesses",
    text: "We look at lead-source ROI, regional performance gaps, and where your sales funnel actually drops off, then hand you one fix worth acting on first.",
    bullets: [
      "Lead-source return on ad spend",
      "Region-wise sales performance gap",
      "Funnel drop-off diagnosis",
    ],
  },
  {
    id: "academic",
    icon: SquareStack,
    eyebrow: "Academic Batch Management",
    title: "Classes 6–10 — curriculum planning & monitoring",
    text: "A dedicated technical vertical: how batches are formed, how the syllabus is implemented year on year, and how it's monitored through the session — so your academic calendar runs on a system, not improvisation.",
    bullets: [
      "Batch formation for Classes 6–10",
      "Year-on-year syllabus implementation planning",
      "Ongoing monitoring through the session",
    ],
  },
  {
    id: "counselling",
    icon: HeartHandshake,
    eyebrow: "Student Counselling & Guidance",
    title: "Led personally by one of our Directors",
    text: "Performance and retention are rarely just a numbers problem. One of the company's own Directors personally leads a full guidance layer around each student — emotional, career, and social counselling, meditation & mindfulness, and parent/teacher orientation.",
    bullets: [
      "One-on-one student diagnosis",
      "Career, social & emotional counselling, plus mindfulness sessions",
      "Parent & teacher orientation and induction",
    ],
  },
];

export function Verticals() {
  return (
    <section id="verticals" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-2xl">
        <p className="eyebrow">Who we work with</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
          Four ways we work with you.
        </h2>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {VERTICALS.map((v) => (
          <Card
            key={v.id}
            className="flex flex-col gap-4 rounded-xl border-neutral-200 p-6 shadow-none"
          >
            <div className="flex items-start gap-3.5">
              <IconBackground>
                <v.icon size={16} className="text-nistaran" />
              </IconBackground>
              <div>
                <p className="eyebrow">{v.eyebrow}</p>
                <h3 className="mt-1.5 text-lg font-medium text-black">
                  {v.title}
                </h3>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-neutral-500">
              {v.text}
            </p>
            <Accordion type="single" collapsible>
              <AccordionItem value={v.id} className="border-none">
                <AccordionTrigger className="py-0 text-sm text-nistaran hover:no-underline">
                  Details
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="mt-2 flex flex-col gap-2">
                    {v.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-2 border-t border-neutral-200 pt-2 text-sm text-neutral-500 first:border-t-0 first:pt-0"
                      >
                        <span aria-hidden className="text-nistaran">
                          &rarr;
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        ))}
      </div>
    </section>
  );
}
