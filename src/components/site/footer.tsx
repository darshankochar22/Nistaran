import Image from "next/image";
import { Mail, MapPin, MessageCircle } from "lucide-react";

const SOLUTIONS_LINKS = [
  { href: "#verticals", label: "Coaching & Schools" },
  { href: "#verticals", label: "Retail & D2C" },
  { href: "#verticals", label: "Academic Batch Management" },
  { href: "#verticals", label: "Student Counselling" },
];

const PRODUCT_LINKS = [
  { href: "#catalogue", label: "Admission Support" },
  { href: "#catalogue", label: "Student-Parent-Teacher Portal" },
  { href: "#catalogue", label: "Academic Support" },
  { href: "#catalogue", label: "Counselling & Guidance" },
  { href: "#catalogue", label: "All-in-One" },
];

const PROGRAM_LINKS = [
  { href: "#programs", label: "Bridge Course Workbooks" },
  { href: "#programs", label: "Daily Operations" },
  { href: "#programs", label: "Institutional Analysis" },
  { href: "#programs", label: "Teacher Tracking" },
  { href: "#programs", label: "Student-Parent Portal" },
  { href: "#programs", label: "Faculty Development" },
];

const COMPANY_LINKS = [
  { href: "#approach", label: "Our approach" },
  { href: "#tiers", label: "Engagement tiers" },
  { href: "#clients", label: "Clients" },
  { href: "#contact", label: "Book a diagnostic" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/50">
        {title}
      </p>
      <ul className="mt-4 flex flex-col gap-2.5">
        {links.map((link, i) => (
          <li key={`${link.href}-${i}`}>
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
  );
}

export function Footer() {
  return (
    <footer className="bg-nistaran text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="flex flex-col gap-4 lg:col-span-1">
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
            <p className="max-w-[22ch] text-sm text-white/60">
              Positioning diagnostics for education and sales businesses in
              Chhattisgarh.
            </p>
            <p className="accent-serif mt-auto text-lg text-white/70">
              Data into decisions.
            </p>
          </div>

          <FooterColumn title="Solutions" links={SOLUTIONS_LINKS} />
          <FooterColumn title="Products" links={PRODUCT_LINKS} />
          <FooterColumn title="Programs" links={PROGRAM_LINKS} />
          <FooterColumn title="Company" links={COMPANY_LINKS} />

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

        <div className="mt-14 flex flex-col-reverse items-center gap-3 border-t border-white/15 pt-6 text-xs text-white/40 sm:flex-row sm:justify-between">
          <span>&copy; {new Date().getFullYear()} NISTARAN Solutions</span>
          <span>Chhattisgarh, India</span>
        </div>
      </div>
    </footer>
  );
}
