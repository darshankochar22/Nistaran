"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

import { BrandMark } from "@/components/brand-mark";
import { Button } from "@/components/supabase/Button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "#approach", label: "Approach" },
  { href: "#verticals", label: "Verticals" },
  { href: "#programs", label: "Programs" },
  { href: "#catalogue", label: "Catalogue" },
  { href: "#tiers", label: "Tiers" },
  { href: "#clients", label: "Clients" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" aria-label="NISTARAN Solutions — home">
          <BrandMark />
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 text-sm text-neutral-500 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="primary" size="small">
            <a href="#contact">Book a free analytics</a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="small"
              className="md:hidden"
              aria-label="Open menu"
            >
              <Menu size={18} />
            </Button>
          </SheetTrigger>
          <SheetContent side="top">
            <SheetHeader>
              <SheetTitle>
                <BrandMark size="sm" />
              </SheetTitle>
            </SheetHeader>
            <nav aria-label="Mobile" className="flex flex-col px-4 pb-6">
              {NAV_LINKS.map((link) => (
                <SheetClose asChild key={link.href}>
                  <a
                    href={link.href}
                    className="border-t border-neutral-200 py-3 text-base font-medium text-neutral-600 first:border-t-0 hover:text-black"
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button asChild variant="primary" className="mt-4 w-full">
                  <a href="#contact">Book a free analytics</a>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
