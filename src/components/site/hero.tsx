import { ArrowRight, Sparkles } from "lucide-react";

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
      <g fontFamily="var(--font-mono)" fontSize="10.5" fill="#737373">
        {DATA_ROWS.map((row) => (
          <g key={row.label}>
            <rect
              x="4"
              y={row.y}
              width="112"
              height="26"
              rx="5"
              fill="#fafafa"
              stroke="#e5e5e5"
            />
            <text x="16" y={row.ty}>
              {row.label}
            </text>
          </g>
        ))}
      </g>
      <g fill="none" stroke="#1a381a" strokeWidth="1.5" strokeLinecap="round">
        {FLOW_PATHS.map((p) => (
          <path key={p.d} className={`flowline ${p.cls}`} d={p.d} opacity={0.45} />
        ))}
      </g>
      <circle cx="258" cy="116" r="52" fill="#eaf1ea" stroke="#1a381a" strokeOpacity="0.25" strokeDasharray="3 6" />
      <text
        x="258"
        y="112"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="9"
        fill="#6b8a6b"
      >
        ONE
      </text>
      <text
        x="258"
        y="124"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="9"
        fill="#1a381a"
      >
        MOVE
      </text>
    </svg>
  );
}

export function Hero() {
  return (
    <section id="top" className="bg-white">
      <div className="mx-auto max-w-4xl px-4 pb-16 pt-20 text-center sm:px-6 sm:pt-28">
        <div className="flex justify-center">
          <Badge variant="success" className="px-3 py-1.5 text-[10px]">
            <Sparkles size={11} />
            Positioning diagnostics for education &amp; sales businesses
          </Badge>
        </div>
        <h1 className="mx-auto mt-5 max-w-3xl text-[2.4rem] font-semibold leading-[1.08] tracking-tight text-black sm:text-5xl md:text-6xl">
          Your market position
          <br />
          isn&rsquo;t a guess.
        </h1>
        <p className="accent-serif mt-2 text-2xl sm:text-3xl md:text-4xl">
          It&rsquo;s a number you already have.
        </p>
        <p className="mx-auto mt-6 max-w-xl text-base text-neutral-500 sm:text-lg">
          NISTARAN reads the data your institute or business already
          collects — enquiries, admissions, footfall, retention, spend —
          and shows you the one gap quietly costing you position against
          the business next door.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
        </div>
        <p className="mt-4 text-sm text-neutral-400">
          <a
            href="https://nistaransample.edgeone.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-neutral-300 underline-offset-4 hover:text-nistaran hover:decoration-nistaran"
          >
            View a live sample dashboard
          </a>
        </p>
      </div>

      <div className="mx-auto max-w-2xl px-4 pb-20 sm:px-6">
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.15)] sm:p-8">
          <div className="mb-4 flex items-center justify-between font-mono text-[0.68rem] uppercase tracking-[0.16em] text-neutral-400">
            <span>Your existing numbers</span>
            <span className="flex items-center gap-2 text-nistaran">
              <ArrowRight size={12} /> one move
            </span>
          </div>
          <div className="mx-auto max-w-xs sm:max-w-sm">
            <DataFlowDiagram />
          </div>
          <div className="mt-4 flex items-center justify-between gap-3 border-t border-dashed border-neutral-200 pt-4">
            <span className="font-mono text-[0.64rem] uppercase tracking-[0.12em] text-neutral-400">
              Output
            </span>
            <span className="text-sm font-medium text-black">
              One repositioning move, with a number on it
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
