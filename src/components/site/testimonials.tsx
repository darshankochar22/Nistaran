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
    quote:
      "The subject-wise bands make it obvious which students need help before the results do.",
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
    quote:
      "Same dashboard, same clarity — rolling it out for Class XII was the easy part.",
    name: "NSCC Avanti",
    tag: "Commerce coaching, Class XII",
  },
  {
    quote:
      "Built around how we actually run the business, not a generic template with our logo stuck on it.",
    name: "Linen House",
    tag: "Linen & uniform supply",
  },
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
    <section className="border-t border-neutral-200 bg-neutral-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl text-center sm:mx-auto sm:text-center">
          <p className="eyebrow justify-center">Who trusts us</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-black">
            Discover what our clients have to say.
          </h2>
        </div>

        <div className="mx-auto mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="mb-4 break-inside-avoid rounded-xl border border-neutral-200 bg-white p-5"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-nistaran-light text-xs font-semibold text-nistaran">
                  {initials(t.name)}
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-medium text-black">{t.name}</p>
                  <p className="text-xs text-neutral-400">{t.tag}</p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {t.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
