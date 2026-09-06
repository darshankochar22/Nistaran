import Image from "next/image";
import { Mail, MapPin, MessageCircle } from "lucide-react";

const EXPLORE_LINKS = [
  { href: "#approach", label: "Approach" },
  { href: "#verticals", label: "Verticals" },
  { href: "#programs", label: "Programs" },
  { href: "#catalogue", label: "Catalogue" },
  { href: "#tiers", label: "Tiers" },
  { href: "#clients", label: "Clients" },
];

export function Footer() {
  return (
    <footer className="bg-nistaran text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="NISTARAN Solutions logo"
                width={44}
                height={44}
                className="size-10 shrink-0 rounded-full bg-white p-1"
              />
              <span className="text-lg font-semibold tracking-tight text-white">
                NISTARAN
              </span>
            </div>
            <p className="max-w-xs text-sm text-white/60">
              Positioning diagnostics for education and sales businesses —
              turning the data you already have into one clear repositioning
              move.
            </p>
            <p className="accent-serif mt-auto text-lg text-white/70">
              Data into decisions.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/50">
              Explore
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/50">
              Contact
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href="mailto:solutions@nistaran.in"
                  className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Mail size={14} className="shrink-0" />
                  solutions@nistaran.in
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917024565602"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <MessageCircle size={14} className="shrink-0" />
                  +91 70245 65602
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <MapPin size={14} className="shrink-0" />
                Chhattisgarh, India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center gap-3 border-t border-white/15 pt-6 text-xs text-white/40 sm:flex-row sm:justify-between">
          <span>&copy; {new Date().getFullYear()} NISTARAN Solutions</span>
          <span>Chhattisgarh, India</span>
        </div>
      </div>
    </footer>
  );
}
