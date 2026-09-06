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
  { x: 0, y: 26, w: 140, h: 72, opacity: 1, label: "Enquiry", value: 100, stage: "Stage 1" },
  { x: 160, y: 35, w: 140, h: 54, opacity: 0.75, label: "Visit", value: 62, stage: "Stage 2" },
  { x: 320, y: 44, w: 140, h: 36, opacity: 0.5, label: "Form", value: 31, stage: "Stage 3" },
  { x: 480, y: 50, w: 140, h: 24, opacity: 0.3, label: "Admission", value: 18, stage: "Stage 4" },
];

function FunnelDiagram() {
  return (
    <svg
      viewBox="0 0 640 150"
      role="img"
      aria-label="Funnel: 100 enquiries drop to 18 admissions, with the biggest leak between visit and application"
      className="block w-full"
    >
      <g fontFamily="var(--font-mono)" fontSize="11" fill="#737373">
        {FUNNEL_STAGES.map((s) => (
          <rect
            key={s.label}
            x={s.x}
            y={s.y}
            width={s.w}
            height={s.h}
            rx="6"
            fill="#0a0a0a"
            opacity={s.opacity}
          />
        ))}
        {FUNNEL_STAGES.map((s) => (
          <text key={s.label + "t"} x={s.x} y="16">
            {s.label} &nbsp;{s.value}
          </text>
        ))}
        {FUNNEL_STAGES.map((s) => (
          <text key={s.stage} x={s.x} y="122" fill="#a3a3a3">
            {s.stage}
          </text>
        ))}
      </g>
      <g stroke="#0a0a0a" strokeWidth="1.5" fill="none">
        <path d="M300 62 L 320 62" strokeDasharray="4 4" />
        <circle cx="310" cy="62" r="13" strokeDasharray="3 4" />
      </g>
      <text x="248" y="146" fontFamily="var(--font-mono)" fontSize="10.5" fill="#0a0a0a">
        biggest leak sits here
      </text>
    </svg>
  );
}

export function Problem() {
  return (
    <section className="border-t border-neutral-200 bg-neutral-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="max-w-[28ch] text-2xl font-semibold tracking-tight text-black sm:text-3xl">
          Most institutes and businesses in Chhattisgarh compete on gut
          feeling — not on numbers their competitor already has.
        </h2>
        <div className="mt-10 grid gap-7 sm:grid-cols-3">
          {PROBLEMS.map((p) => (
            <div key={p.num} className="border-t border-neutral-300 pt-4">
              <div className="font-mono text-sm text-neutral-400">{p.num}</div>
              <p className="mt-2.5 text-sm leading-relaxed text-neutral-600">
                {p.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid items-center gap-8 border-t border-neutral-200 pt-8 lg:grid-cols-[1fr_auto]">
          <FunnelDiagram />
          <div className="max-w-[24ch] text-sm text-neutral-500">
            <b className="mb-1.5 block text-xs uppercase tracking-[0.12em] text-black">
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
