import { BrandMark } from "@/components/brand-mark";

const LINKS = [
  { href: "#approach", label: "Approach" },
  { href: "#verticals", label: "Verticals" },
  { href: "#programs", label: "Programs" },
  { href: "#catalogue", label: "Catalogue" },
  { href: "#tiers", label: "Tiers" },
  { href: "#clients", label: "Clients" },
];

export function Footer() {
  return (
    <footer className="border-t border-default bg-surface-75">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-2">
            <BrandMark />
            <p className="max-w-xs text-sm text-foreground-light">
              Positioning diagnostics for education and sales businesses —
              turning the data you already have into one clear repositioning
              move.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-foreground-light sm:grid-cols-3"
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col-reverse items-center gap-3 border-t border-default pt-6 text-xs text-foreground-lighter sm:flex-row sm:justify-between">
          <span>&copy; {new Date().getFullYear()} NISTARAN Solutions — Chhattisgarh, India</span>
          <span className="font-mono">Data into decisions.</span>
        </div>
      </div>
    </footer>
  );
}
