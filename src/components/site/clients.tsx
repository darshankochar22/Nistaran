import Image from "next/image";

import { Card } from "@/components/ui/card";

const CLIENTS = [
  {
    name: "Nahta Classes",
    tag: "CA / CS / CMA coaching, Raipur",
    desc: "CMA Raipur landing page plus a Task & Efficiency Management System for staff.",
    logo: "/images/clients/nahta-classes.jpg",
  },
  {
    name: "Taparia Institute",
    tag: "CBSE / ICSE coaching, Classes VIII–X",
    desc: "Attendance & performance portal across 6 batches.",
    logo: "/images/clients/taparia-institute.jpg",
  },
  {
    name: "NSCC Anupam",
    tag: "Commerce coaching, Class XI",
    desc: "Attendance-vs-performance dashboard with subject-wise bands.",
    logo: "/images/clients/nscc.jpg",
  },
  {
    name: "NSCC Avanti",
    tag: "Commerce coaching, Class XII",
    desc: "Attendance-vs-performance dashboard with subject-wise bands.",
    logo: "/images/clients/nscc.jpg",
  },
  {
    name: "Mahaveer Nx",
    tag: "Family clothing store, Kawardha",
    desc: "Analytics portal for purchase planning, demand-supply, and dead-stock diagnosis.",
    initials: "MN",
  },
  {
    name: "Linen House",
    tag: "Linen & uniform supply, hospitals & hotels",
    desc: "Full ERP with analytics built for their brand.",
    logo: "/images/clients/linen-house.jpg",
  },
];

export function Clients() {
  return (
    <section id="clients" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-2xl">
        <p className="eyebrow">Who trusts us</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
          Our loving clients
        </h2>
        <p className="mt-3 text-foreground-light">
          Live, working software — not mockups — running inside these
          businesses today.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CLIENTS.map((c) => (
          <Card
            key={c.name}
            className="flex flex-col items-center gap-3 p-6 text-center transition-colors hover:border-strong"
          >
            <div
              className="flex size-14 items-center justify-center overflow-hidden rounded-full font-heading text-base font-semibold text-white shadow-sm"
              style={
                c.initials
                  ? { background: "linear-gradient(135deg,#7a1f2b,#c9a24a)" }
                  : undefined
              }
            >
              {c.logo ? (
                <Image
                  src={c.logo}
                  alt={`${c.name} logo`}
                  width={56}
                  height={56}
                  className="size-full bg-white object-contain"
                />
              ) : (
                c.initials
              )}
            </div>
            <h3 className="font-heading text-base font-semibold text-foreground">
              {c.name}
            </h3>
            <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-brand-600">
              {c.tag}
            </p>
            <p className="text-sm leading-relaxed text-foreground-light">
              {c.desc}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
