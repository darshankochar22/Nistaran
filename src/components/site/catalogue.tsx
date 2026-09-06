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
              {p.text}
            </p>
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
            {ALL_IN_ONE.text}
          </p>
        </Card>
      </div>

      <p className="mt-6 text-sm italic text-neutral-400">
        Prices vary by institute size and scope — GST applicable as per
        current rates.
      </p>
    </section>
  );
}
