import Image from "next/image";

import { Card } from "@/components/ui/card";
import {
  MiniBadges,
  MiniCalendar,
  MiniFunnel,
  MiniNetwork,
  MiniTarget,
} from "@/components/site/mini-illustrations";

const PRODUCTS = [
  {
    image: "/images/catalogue/admission-support.png",
    title: "Admission Support",
    tagline: "Problem identification · Suggestion · Follow-up",
    lead: "A structured admissions cycle, mainly December–May,",
    rest: " that finds where enquiries are lost and follows through on the fix.",
    illustration: MiniFunnel,
  },
  {
    image: "/images/catalogue/portal.png",
    title: "Student-Parent-Teacher Portal",
    tagline: "Dashboards that build the bond between all three",
    lead: "A shared dashboard connecting students, parents, and teachers",
    rest: " — one connected loop instead of three separate conversations.",
    illustration: MiniNetwork,
  },
  {
    image: "/images/catalogue/academic-support.png",
    title: "Academic Support",
    tagline: "Subject enrichment · Student & teacher training",
    lead: "Enrichment portal, need-based batching, teacher training,",
    rest: " and the NISTARAN Model of Teaching — for Classes 6–8 and 9–10.",
    illustration: MiniCalendar,
  },
  {
    image: "/images/catalogue/counselling.png",
    title: "Student Counselling & Guidance",
    tagline: "The need of the hour",
    lead: "Emotional, career & social counselling, meditation & mindfulness,",
    rest: " and parent/teacher orientation — a complete guidance layer around each student.",
    illustration: MiniTarget,
  },
];

const ALL_IN_ONE = {
  image: "/images/catalogue/all-in-one.png",
  title: "All-in-One",
  tagline: "Every pillar of a student's success, combined",
  lead: "All four products above, as a single plan",
  rest: " — or pick any two or three and their fees simply add up.",
  illustration: MiniBadges,
};

export function Catalogue() {
  return (
    <section id="catalogue" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-2xl">
        <p className="eyebrow">Our products</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
          Our products, at a glance
        </h2>
        <p className="mt-3 text-neutral-500">
          Five products built around one goal — a student&rsquo;s full,
          supported success.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((p) => (
          <Card
            key={p.title}
            className="flex flex-col gap-3 rounded-xl border-neutral-200 p-5 shadow-none"
          >
            <Image
              src={p.image}
              alt=""
              width={52}
              height={52}
              className="size-11 grayscale"
            />
            <div>
              <h3 className="font-medium text-black">{p.title}</h3>
              <p className="accent-serif mt-0.5 text-sm">{p.tagline}</p>
            </div>
            <p className="text-sm leading-relaxed text-neutral-500">
              <strong className="font-semibold text-black">{p.lead}</strong>
              {p.rest}
            </p>
            <p.illustration />
          </Card>
        ))}

        <Card className="relative flex flex-col gap-3 rounded-xl border-2 border-nistaran p-5 shadow-none">
          <span className="absolute -top-3 left-5 rounded-full bg-nistaran px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.08em] text-white">
            Best value
          </span>
          <Image
            src={ALL_IN_ONE.image}
            alt=""
            width={52}
            height={52}
            className="size-11 grayscale"
          />
          <div>
            <h3 className="font-medium text-black">{ALL_IN_ONE.title}</h3>
            <p className="accent-serif mt-0.5 text-sm">{ALL_IN_ONE.tagline}</p>
          </div>
          <p className="text-sm leading-relaxed text-neutral-500">
            <strong className="font-semibold text-black">
              {ALL_IN_ONE.lead}
            </strong>
            {ALL_IN_ONE.rest}
          </p>
          <ALL_IN_ONE.illustration />
        </Card>
      </div>

      <p className="mt-6 text-sm italic text-neutral-400">
        Prices vary by institute size and scope — GST applicable as per
        current rates.
      </p>
    </section>
  );
}
