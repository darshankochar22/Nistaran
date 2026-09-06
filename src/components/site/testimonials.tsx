import { Button } from "@/components/supabase/Button";

const TESTIMONIALS = [
  {
    quote:
      "The Task & Efficiency Management System means our staff's daily work is finally visible in one place, not scattered across registers.",
    name: "Nahta Classes",
    tag: "CA / CS / CMA coaching, Raipur",
  },
  {
    quote:
      "Attendance and performance for all 6 batches, on one screen. We catch a slipping student weeks earlier than before.",
    name: "Taparia Institute",
    tag: "CBSE / ICSE coaching",
  },
  {
    quote: "The subject-wise bands tell us who needs help before the results do.",
    name: "NSCC Anupam",
    tag: "Commerce coaching, Class XI",
  },
  {
    quote:
      "We finally know what's dead stock and what's just slow-moving. That distinction alone paid for the system.",
    name: "Mahaveer Nx",
    tag: "Family clothing store, Kawardha",
  },
  {
    quote: "Same dashboard, same clarity. Rolling it out for Class XII was the easy part.",
    name: "NSCC Avanti",
    tag: "Commerce coaching, Class XII",
  },
  {
    quote:
      "Built around how we actually run the business, not a generic template with our logo stuck on it.",
    name: "Linen House",
    tag: "Linen & uniform supply",
  },
  {
    quote: "Direct access to the team that built it. No ticket queue.",
    name: "Taparia Institute",
    tag: "CBSE / ICSE coaching",
  },
  {
    quote:
      "Every purchase entry now shows up in the analytics the same day, not at month-end.",
    name: "Mahaveer Nx",
    tag: "Family clothing store, Kawardha",
  },
];

const AVATAR_COLORS = [
  { bg: "#eaf1ea", fg: "#1a381a" },
  { bg: "#f4ede0", fg: "#8a6a2f" },
  { bg: "#eef2f5", fg: "#3a4b57" },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section className="border-t border-neutral-200 bg-white py-20">
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

        <div className="mx-auto mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {TESTIMONIALS.map((t, i) => {
            const color = AVATAR_COLORS[i % AVATAR_COLORS.length];
            return (
              <div
                key={`${t.name}-${i}`}
                className="mb-4 break-inside-avoid rounded-xl border border-neutral-200 bg-white p-5 transition-shadow hover:shadow-[0_20px_40px_-28px_rgba(0,0,0,0.25)]"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold"
                    style={{ background: color.bg, color: color.fg }}
                  >
                    {initials(t.name)}
                  </span>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold text-black">
                      {t.name}
                    </p>
                    <p className="text-xs text-neutral-400">{t.tag}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {t.quote}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
