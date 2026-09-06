function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 flex h-28 items-center justify-center overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 px-4">
      {children}
    </div>
  );
}

export function MiniFunnel() {
  return (
    <Frame>
      <svg viewBox="0 0 160 70" className="h-full w-full">
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x={i * 38}
            y={10 + i * 6}
            width="32"
            height={50 - i * 12}
            rx="4"
            fill="#1a381a"
            opacity={1 - i * 0.2}
          />
        ))}
      </svg>
    </Frame>
  );
}

export function MiniChart() {
  const bars = [22, 34, 28, 46, 58];
  return (
    <Frame>
      <svg viewBox="0 0 160 70" className="h-full w-full">
        {bars.map((h, i) => (
          <rect
            key={i}
            x={8 + i * 32}
            y={64 - h}
            width="18"
            height={h}
            rx="3"
            fill={i === bars.length - 1 ? "#1a381a" : "#e5e5e5"}
          />
        ))}
      </svg>
    </Frame>
  );
}

export function MiniChecklist() {
  return (
    <Frame>
      <svg viewBox="0 0 160 70" className="h-full w-full">
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <circle
              cx="14"
              cy={10 + i * 17}
              r="6"
              fill={i < 2 ? "#1a381a" : "none"}
              stroke={i < 2 ? "none" : "#d4d4d4"}
              strokeWidth="1.5"
            />
            {i < 2 && (
              <path
                d={`M11 ${10 + i * 17} l2 2 l4 -4`}
                stroke="white"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
            )}
            <rect
              x="28"
              y={7 + i * 17}
              width={i % 2 === 0 ? 118 : 90}
              height="6"
              rx="3"
              fill="#e5e5e5"
            />
          </g>
        ))}
      </svg>
    </Frame>
  );
}

export function MiniTarget() {
  return (
    <Frame>
      <svg viewBox="0 0 70 70" className="h-16 w-16">
        <circle cx="35" cy="35" r="30" fill="none" stroke="#e5e5e5" strokeWidth="6" />
        <circle cx="35" cy="35" r="19" fill="none" stroke="#d4d4d4" strokeWidth="6" />
        <circle cx="35" cy="35" r="8" fill="#1a381a" />
      </svg>
    </Frame>
  );
}

export function MiniNetwork() {
  const points = [
    [30, 15],
    [12, 45],
    [48, 45],
    [30, 60],
  ];
  return (
    <Frame>
      <svg viewBox="0 0 60 70" className="h-full">
        <line x1={30} y1={15} x2={12} y2={45} stroke="#d4d4d4" strokeWidth="1.5" />
        <line x1={30} y1={15} x2={48} y2={45} stroke="#d4d4d4" strokeWidth="1.5" />
        <line x1={12} y1={45} x2={30} y2={60} stroke="#d4d4d4" strokeWidth="1.5" />
        <line x1={48} y1={45} x2={30} y2={60} stroke="#d4d4d4" strokeWidth="1.5" />
        <line x1={12} y1={45} x2={48} y2={45} stroke="#d4d4d4" strokeWidth="1.5" />
        {points.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={i === 3 ? 7 : 5}
            fill={i === 3 ? "#1a381a" : "#a3a3a3"}
          />
        ))}
      </svg>
    </Frame>
  );
}

export function MiniCalendar() {
  return (
    <Frame>
      <svg viewBox="0 0 160 70" className="h-full w-full">
        <rect x="20" y="8" width="120" height="54" rx="6" fill="white" stroke="#e5e5e5" strokeWidth="1.5" />
        <rect x="20" y="8" width="120" height="14" rx="6" fill="#1a381a" />
        {Array.from({ length: 21 }).map((_, i) => {
          const col = i % 7;
          const row = Math.floor(i / 7);
          const highlighted = i === 10;
          return (
            <rect
              key={i}
              x={28 + col * 15.5}
              y={30 + row * 12}
              width="11"
              height="8"
              rx="2"
              fill={highlighted ? "#1a381a" : "#eeeeee"}
            />
          );
        })}
      </svg>
    </Frame>
  );
}

export function MiniBadges() {
  const widths = [46, 60, 38];
  return (
    <Frame>
      <div className="flex flex-col items-start gap-2">
        {widths.map((w, i) => (
          <span
            key={i}
            className="flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white py-1 pl-1.5 pr-3 text-[10px] font-medium text-neutral-500"
            style={{ width: w + 40 }}
          >
            <span className="size-3.5 shrink-0 rounded-full bg-nistaran-light" />
            <span
              className="block h-2 rounded-full bg-neutral-200"
              style={{ width: w }}
            />
          </span>
        ))}
      </div>
    </Frame>
  );
}

export function MiniGrowth() {
  return (
    <Frame>
      <svg viewBox="0 0 160 70" className="h-full w-full">
        <polyline
          points="6,58 40,42 74,48 108,20 154,10"
          fill="none"
          stroke="#1a381a"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {[
          [6, 58],
          [40, 42],
          [74, 48],
          [108, 20],
          [154, 10],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i === 4 ? 4 : 2.5} fill="#1a381a" />
        ))}
      </svg>
    </Frame>
  );
}
