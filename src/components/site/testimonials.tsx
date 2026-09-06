import Image from "next/image";

import { Button } from "@/components/supabase/Button";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    quote:
      "The Task & Efficiency Management System means our staff's daily work is finally visible in one place, not scattered across registers.",
    name: "Nahta Classes",
    tag: "CA / CS / CMA coaching, Raipur",
    logo: "/images/clients/nahta-classes.jpg",
  },
  {
    quote:
      "Attendance and performance for all 6 batches, on one screen. We catch a slipping student weeks earlier than before.",
    name: "Taparia Institute",
    tag: "CBSE / ICSE coaching",
    logo: "/images/clients/taparia-institute.jpg",
  },
  {
    quote: "The subject-wise bands tell us who needs help before the results do.",
    name: "NSCC Anupam",
    tag: "Commerce coaching, Class XI",
    logo: "/images/clients/nscc.jpg",
  },
  {
    quote:
      "We finally know what's dead stock and what's just slow-moving. That distinction alone paid for the system.",
    name: "Mahaveer Nx",
    tag: "Family clothing store, Kawardha",
    gradient: "linear-gradient(135deg,#7a1f2b,#c9a24a)",
  },
  {
    quote: "Same dashboard, same clarity. Rolling it out for Class XII was the easy part.",
    name: "NSCC Avanti",
    tag: "Commerce coaching, Class XII",
    logo: "/images/clients/nscc.jpg",
  },
  {
    quote:
      "Built around how we actually run the business, not a generic template with our logo stuck on it.",
    name: "Linen House",
    tag: "Linen & uniform supply",
    logo: "/images/clients/linen-house.jpg",
  },
  {
    quote: "Direct access to the team that built it. No ticket queue.",
    name: "Taparia Institute",
    tag: "CBSE / ICSE coaching",
    logo: "/images/clients/taparia-institute.jpg",
  },
  {
    quote:
      "Every purchase entry now shows up in the analytics the same day, not at month-end.",
    name: "Mahaveer Nx",
    tag: "Family clothing store, Kawardha",
    gradient: "linear-gradient(135deg,#6b8494,#1a381a)",
  },
  {
    quote: "A CMA Raipur landing page that actually looks like the results we get.",
    name: "Nahta Classes",
    tag: "CA / CS / CMA coaching, Raipur",
    logo: "/images/clients/nahta-classes.jpg",
  },
  {
    quote: "One repositioning move, backed by a number. That's all we needed.",
    name: "NSCC Anupam",
    tag: "Commerce coaching, Class XI",
    logo: "/images/clients/nscc.jpg",
  },
];

// Distributed across 5 desktop columns so the outer two can be faded.
const COLUMNS = [
  [TESTIMONIALS[0], TESTIMONIALS[5]],
  [TESTIMONIALS[1], TESTIMONIALS[6]],
  [TESTIMONIALS[2], TESTIMONIALS[8]],
  [TESTIMONIALS[3], TESTIMONIALS[7]],
  [TESTIMONIALS[4], TESTIMONIALS[9]],
];

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function Avatar({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  if (t.logo) {
    return (
      <span className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-neutral-200 bg-white">
        <Image
          src={t.logo}
          alt=""
          width={40}
          height={40}
          className="size-full object-contain"
        />
      </span>
    );
  }
  return (
    <span
      className="flex size-10 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white shadow-inner"
      style={{ backgroundImage: t.gradient }}
    >
      {initials(t.name)}
    </span>
  );
}

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-5 transition-shadow hover:shadow-[0_20px_40px_-28px_rgba(0,0,0,0.25)]">
      <div className="flex items-center gap-3">
        <Avatar t={t} />
        <div className="leading-tight">
          <p className="text-sm font-semibold text-black">{t.name}</p>
          <p className="text-xs text-neutral-400">{t.tag}</p>
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-neutral-600">
        {t.quote}
      </p>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="overflow-hidden border-t border-neutral-200 bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-black">
            Loved by businesses across Chhattisgarh.
          </h2>
          <p className="mt-3 text-neutral-500">
            Discover what our clients have to say about working with
            NISTARAN.
          </p>
          <div className="mt-6 flex justify-center">
            <Button asChild variant="outline" size="small">
              <a
                href="https://wa.me/917024565602"
                target="_blank"
                rel="noopener noreferrer"
              >
                Talk to us on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile / tablet: simple stacked masonry, fully legible */}
      <div className="mx-auto mt-12 max-w-6xl columns-1 gap-4 px-4 sm:columns-2 sm:px-6 lg:hidden">
        {TESTIMONIALS.map((t, i) => (
          <div key={`m-${i}`} className="mb-4 break-inside-avoid">
            <TestimonialCard t={t} />
          </div>
        ))}
      </div>

      {/* Desktop: 5-column wall with the outer columns faded/blurred */}
      <div className="marquee-mask relative mt-12 hidden lg:block">
        <div className="mx-auto grid max-w-7xl grid-cols-5 gap-4 px-6">
          {COLUMNS.map((col, ci) => (
            <div
              key={ci}
              className={cn(
                "flex flex-col gap-4",
                (ci === 0 || ci === COLUMNS.length - 1) &&
                  "opacity-40 blur-[1.5px]"
              )}
            >
              {col.map((t, ti) => (
                <TestimonialCard key={ti} t={t} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
