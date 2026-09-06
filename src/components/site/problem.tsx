const PROBLEMS = [
  {
    num: "01",
    text: "Admissions or footfall dips, and nobody can point to which stage of the funnel actually broke.",
  },
  {
    num: "02",
    text: "Marketing spend goes up every season. Enquiries stay flat, or grow slower than the spend did.",
  },
  {
    num: "03",
    text: "The competitor across the road is winning on a claim your own data could out-prove — if anyone looked at it.",
  },
];

const FUNNEL_STAGES = [
  { x: 0, y: 26, w: 140, h: 72, opacity: 0.9, label: "Enquiry", value: 100, stage: "Stage 1" },
  { x: 160, y: 35, w: 140, h: 54, opacity: 0.7, label: "Visit", value: 62, stage: "Stage 2" },
  { x: 320, y: 44, w: 140, h: 36, opacity: 0.5, label: "Form", value: 31, stage: "Stage 3" },
  { x: 480, y: 50, w: 140, h: 24, opacity: 0.32, label: "Admission", value: 18, stage: "Stage 4" },
];

function FunnelDiagram() {
  return (
    <svg
      viewBox="0 0 640 150"
      role="img"
      aria-label="Funnel: 100 enquiries drop to 18 admissions, with the biggest leak between visit and application"
      className="block w-full"
    >
      <defs>
        <linearGradient id="fg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#12946B" />
          <stop offset="1" stopColor="#F2A93D" />
        </linearGradient>
      </defs>
      <g fontFamily="var(--font-mono)" fontSize="11" fill="#D8CBB5">
        {FUNNEL_STAGES.map((s) => (
          <rect
            key={s.label}
            x={s.x}
            y={s.y}
            width={s.w}
            height={s.h}
            rx="6"
            fill="url(#fg)"
            opacity={s.opacity}
          />
        ))}
        {FUNNEL_STAGES.map((s) => (
          <text key={s.label + "t"} x={s.x} y="16">
            {s.label} &nbsp;{s.value}
          </text>
        ))}
        {FUNNEL_STAGES.map((s) => (
          <text key={s.stage} x={s.x} y="122" fill="#B8AE9D">
            {s.stage}
          </text>
        ))}
      </g>
      <g stroke="#E14E2F" strokeWidth="2" fill="none">
        <path d="M300 62 L 320 62" strokeDasharray="4 4" />
        <circle cx="310" cy="62" r="13" strokeDasharray="3 4" />
      </g>
      <text x="248" y="146" fontFamily="var(--font-mono)" fontSize="10.5" fill="#E14E2F">
        biggest leak sits here
      </text>
    </svg>
  );
}

export function Problem() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-paper sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-32 h-[320px] w-[320px] rounded-full bg-saffron/15 blur-[90px]"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="max-w-[28ch] text-2xl font-medium text-paper sm:text-3xl">
          Most institutes and businesses in Chhattisgarh compete on gut
          feeling — not on numbers their competitor already has.
        </h2>
        <div className="mt-10 grid gap-7 sm:grid-cols-3">
          {PROBLEMS.map((p) => (
            <div
              key={p.num}
              className="border-t border-white/15 pt-4 transition-colors hover:border-saffron"
            >
              <div className="font-mono text-sm text-saffron">{p.num}</div>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                {p.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid items-center gap-8 border-t border-white/15 pt-8 lg:grid-cols-[1fr_auto]">
          <FunnelDiagram />
          <div className="max-w-[24ch] text-sm text-white/70">
            <b className="mb-1.5 block font-mono text-[0.7rem] uppercase tracking-[0.12em] text-saffron">
              What a diagnostic looks like
            </b>
            Every institute loses people between stages. The question is
            which stage — and your own records already answer it.
          </div>
        </div>
      </div>
    </section>
  );
}
