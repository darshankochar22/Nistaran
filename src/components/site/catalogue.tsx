import Image from "next/image";

import { Card } from "@/components/ui/card";

const PRODUCTS = [
  {
    image: "/images/catalogue/admission-support.png",
    title: "Admission Support",
    tagline: "Problem identification · Suggestion · Follow-up",
    text: "A structured admissions cycle, mainly December–May, that finds where enquiries are lost and follows through on the fix.",
  },
  {
    image: "/images/catalogue/portal.png",
    title: "Student-Parent-Teacher Portal",
    tagline: "Dashboards that build the bond between all three",
    text: "A shared dashboard connecting students, parents, and teachers — one connected loop instead of three separate conversations.",
  },
  {
    image: "/images/catalogue/academic-support.png",
    title: "Academic Support",
    tagline: "Subject enrichment · Student & teacher training",
    text: "Enrichment portal, need-based batching, teacher training, and the NISTARAN Model of Teaching — for Classes 6–8 and 9–10.",
  },
  {
    image: "/images/catalogue/counselling.png",
    title: "Student Counselling & Guidance",
    tagline: "The need of the hour",
    text: "Emotional, career & social counselling, meditation & mindfulness, and parent/teacher orientation — a complete guidance layer around each student.",
  },
];

const ALL_IN_ONE = {
  image: "/images/catalogue/all-in-one.png",
  title: "All-in-One",
  tagline: "Every pillar of a student's success, combined",
  text: "All four products above, as a single plan — or pick any two or three and their fees simply add up.",
};

export function Catalogue() {
  return (
    <section id="catalogue" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-2xl">
        <p className="eyebrow">Our products</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
          Our products, at a glance
        </h2>
        <p className="mt-3 text-foreground-light">
          Five products built around one goal — a student&rsquo;s full,
          supported success.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((p) => (
          <Card key={p.title} className="flex flex-col gap-3 p-5">
            <Image
              src={p.image}
              alt=""
              width={52}
              height={52}
              className="size-11"
            />
            <div>
              <h3 className="font-medium text-foreground">{p.title}</h3>
              <p className="mt-0.5 font-heading text-sm italic text-brand-600">
                {p.tagline}
              </p>
            </div>
            <p className="text-sm leading-relaxed text-foreground-light">
              {p.text}
            </p>
          </Card>
        ))}

        <Card className="flex flex-col gap-4 bg-ink p-6 text-paper sm:col-span-2 sm:flex-row sm:items-center sm:justify-between lg:col-span-3">
          <div className="flex items-center gap-5">
            <Image
              src={ALL_IN_ONE.image}
              alt=""
              width={56}
              height={56}
              className="size-12 shrink-0"
            />
            <div>
              <h3 className="font-heading text-lg font-medium text-paper">
                {ALL_IN_ONE.title}
              </h3>
              <p className="mt-0.5 font-heading text-sm italic text-saffron">
                {ALL_IN_ONE.tagline}
              </p>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-white/70">
                {ALL_IN_ONE.text}
              </p>
            </div>
          </div>
        </Card>
      </div>

      <p className="mt-6 text-sm italic text-foreground-lighter">
        Prices vary by institute size and scope — GST applicable as per
        current rates.
      </p>
    </section>
  );
}
