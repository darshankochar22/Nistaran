"use client";

import { ArrowRight } from "lucide-react";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/supabase/Button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const WHATSAPP_NUMBER = "917024565602";
const CONTACT_EMAIL = "solutions@nistaran.in";

export function CTA() {
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const business = String(data.get("business") ?? "");
    const sector = String(data.get("sector") ?? "Education");
    const tier = String(data.get("tier") ?? "Tier-1");
    const contact = String(data.get("contact") ?? "");

    setSubmitting(true);
    try {
      const { db } = await import("@/lib/firebase");
      const { collection, addDoc, serverTimestamp } = await import(
        "firebase/firestore"
      );
      await addDoc(collection(db, "catalogue_leads"), {
        name,
        business,
        sector,
        tier,
        contact,
        createdAt: serverTimestamp(),
      });
      toast.success("Request received — we'll follow up shortly.");
    } catch (err) {
      console.error("Lead save failed", err);
      toast.error("Couldn't save your request, but we've opened WhatsApp for you.");
    } finally {
      setSubmitting(false);
    }

    const details = `Name: ${name}\nBusiness: ${business}\nSector: ${sector}\nCity tier: ${tier}\nContact: ${contact}`;
    const waText = encodeURIComponent(`New diagnostic request\n${details}`);
    const subject = encodeURIComponent(`Diagnostic request — ${business}`);
    const body = encodeURIComponent(details);

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`, "_blank");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    form.reset();
  }

  return (
    <section id="contact" className="bg-ink py-20 text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-start">
        <div>
          <h2 className="max-w-[16ch] text-3xl font-semibold tracking-tight text-paper">
            Ready to see your own diagnostic?
          </h2>
          <p className="mt-4 max-w-[40ch] text-white/70">
            Tell us about your business and which tier of city you operate
            in. We&rsquo;ll get back to you to schedule a free first
            diagnostic.
          </p>
          <a
            href="https://nistaransample.edgeone.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 font-medium text-saffron hover:text-gold-light"
          >
            View a live sample dashboard <ArrowRight size={14} />
          </a>
        </div>

        <Card className="border-white/15 bg-white/[0.04] p-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="name" className="text-white/60">
                Your name
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Full name"
                required
                className="border-white/15 bg-white/5 text-paper placeholder:text-white/30"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="business" className="text-white/60">
                Business / institute name
              </Label>
              <Input
                id="business"
                name="business"
                placeholder="e.g. ABC Coaching Centre"
                required
                className="border-white/15 bg-white/5 text-paper placeholder:text-white/30"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="sector" className="text-white/60">
                  Sector
                </Label>
                <Select name="sector" defaultValue="Education">
                  <SelectTrigger
                    id="sector"
                    className="border-white/15 bg-white/5 text-paper"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Education">Education</SelectItem>
                    <SelectItem value="Sales / Retail">
                      Sales / Retail
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="tier" className="text-white/60">
                  City tier
                </Label>
                <Select name="tier" defaultValue="Tier-1">
                  <SelectTrigger
                    id="tier"
                    className="border-white/15 bg-white/5 text-paper"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Tier-1">Tier-1</SelectItem>
                    <SelectItem value="Tier-2">Tier-2</SelectItem>
                    <SelectItem value="Tier-3">Tier-3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="contact" className="text-white/60">
                Phone or email
              </Label>
              <Input
                id="contact"
                name="contact"
                placeholder="Where should we reach you?"
                required
                className="border-white/15 bg-white/5 text-paper placeholder:text-white/30"
              />
            </div>
            <Button
              type="submit"
              variant="primary"
              size="large"
              loading={submitting}
              className="mt-1 self-start"
            >
              Request a diagnostic
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
