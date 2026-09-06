import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/supabase/Button";

const DATA_ROWS = [
  { y: 10, label: "Enquiries", ty: 27 },
  { y: 52, label: "Admissions", ty: 69 },
  { y: 94, label: "Footfall", ty: 111 },
  { y: 136, label: "Ad spend", ty: 153 },
  { y: 178, label: "Retention", ty: 195 },
];

const FLOW_PATHS = [
  { d: "M118 23 C 170 23, 190 100, 236 116", cls: "" },
  { d: "M118 65 C 170 65, 196 104, 236 116", cls: "d2" },
  { d: "M118 107 C 172 107, 200 112, 236 116", cls: "d3" },
  { d: "M118 149 C 170 149, 196 128, 236 116", cls: "d4" },
  { d: "M118 191 C 170 191, 190 132, 236 116", cls: "d5" },
];

function DataFlowDiagram() {
  return (
    <svg
      viewBox="0 0 360 236"
      role="img"
      aria-label="Diagram: scattered business data converging into one decision"
      className="block w-full"
    >
      <defs>
        <linearGradient id="gl" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#12946B" stopOpacity="0.3" />
          <stop offset="1" stopColor="#F2A93D" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      <g fontFamily="var(--font-mono)" fontSize="10.5" fill="#D8CBB5">
        {DATA_ROWS.map((row) => (
          <g key={row.label}>
            <rect
              x="4"
              y={row.y}
              width="112"
              height="26"
              rx="5"
              fill="rgba(255,255,255,0.06)"
              stroke="rgba(255,255,255,0.16)"
            />
            <text x="16" y={row.ty}>
              {row.label}
            </text>
          </g>
        ))}
      </g>
      <g fill="none" stroke="url(#gl)" strokeWidth="2" strokeLinecap="round">
        {FLOW_PATHS.map((p) => (
          <path key={p.d} className={`flowline ${p.cls}`} d={p.d} />
        ))}
      </g>
      <circle
        cx="258"
        cy="116"
        r="52"
        fill="rgba(227,190,106,0.1)"
        stroke="rgba(227,190,106,0.4)"
        strokeDasharray="3 6"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/3 h-[420px] w-[420px] rounded-full bg-coral/10 blur-[90px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-20 h-[360px] w-[360px] rounded-full bg-brand-400/20 blur-[90px]"
      />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-16 sm:px-6 sm:pt-24 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:pb-20 lg:pt-28">
        <div className="min-w-0">
          <Badge
            variant="success"
            className="whitespace-normal px-2.5 py-1 text-left text-[10px]"
          >
            <Sparkles size={11} className="mt-0.5 shrink-0" />
            Positioning diagnostics for Education &amp; Sales businesses
          </Badge>
          <h1 className="mt-5 max-w-xl text-[2.1rem] font-medium leading-[1.12] tracking-tight text-foreground sm:text-5xl md:text-[3.4rem]">
            Your market position isn&rsquo;t a guess.{" "}
            <span className="italic text-brand-600">
              It&rsquo;s a number you already have.
            </span>
          </h1>
          <p className="mt-6 max-w-[46ch] text-lg text-foreground-light">
            NISTARAN reads the data your institute or business already
            collects — enquiries, admissions, footfall, retention, spend —
            and shows you the one gap quietly costing you position against
            the business next door.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              asChild
              variant="primary"
              size="large"
              iconRight={<ArrowRight size={16} />}
            >
              <a href="#contact">Book a free analytics</a>
            </Button>
            <Button asChild variant="outline" size="large">
              <a href="#approach">See how it works</a>
            </Button>
            <Button asChild variant="outline" size="large">
              <a
                href="https://nistaransample.edgeone.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View live sample dashboard
              </a>
            </Button>
          </div>
          <div className="mt-6 inline-flex items-center gap-2.5 rounded-r-full border-l-2 border-gold bg-gradient-to-r from-gold/15 to-transparent py-2 pl-3 pr-5 font-heading italic text-foreground">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
              className="shrink-0 text-gold"
            >
              <path d="M3 17l5-5 4 4 8-8" />
              <path d="M15 8h6v6" />
            </svg>
            Data into decisions
          </div>
        </div>

        <div className="relative min-w-0 overflow-hidden rounded-2xl bg-ink px-5 pb-5 pt-5 text-paper shadow-[0_40px_70px_-30px_rgba(22,50,42,0.55)]">
          <div
            aria-hidden
            className="absolute left-6 right-6 top-0 h-1 rounded-b bg-gradient-to-r from-gold to-brand-600"
          />
          <div className="mb-2 flex items-center gap-2.5 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-white/50">
            <span>Your existing numbers</span>
            <b className="font-medium text-gold-light">&rarr;</b>
            <span>one move</span>
          </div>
          <div className="relative">
            <DataFlowDiagram />
            <Image
              src="/images/logo.png"
              alt=""
              width={110}
              height={114}
              className="absolute left-[72%] top-1/2 w-[29%] max-w-[110px] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_6px_16px_rgba(0,0,0,0.45)]"
            />
          </div>
          <div className="mt-3 flex items-center justify-between gap-3 border-t border-dashed border-white/15 pt-3">
            <span className="font-mono text-[0.64rem] uppercase tracking-[0.12em] text-white/50">
              Output
            </span>
            <span className="font-heading text-[1rem] text-gold-light">
              One repositioning move, with a number on it
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
