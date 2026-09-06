"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/supabase/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const VISIT_COUNTER_KEY = "nistaran-edgeone-2026-marketing-site-visits";

type Lead = {
  name?: string;
  business?: string;
  sector?: string;
  tier?: string;
  contact?: string;
  createdAt?: { toDate?: () => Date };
};

export function AdminPanel() {
  const [open, setOpen] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [checking, setChecking] = useState(false);
  const [visits, setVisits] = useState<string>("…");
  const [leads, setLeads] = useState<Lead[] | null>(null);

  useEffect(() => {
    function checkHash() {
      if (window.location.hash === "#admin") {
        setOpen(true);
      }
    }
    checkHash();
    window.addEventListener("hashchange", checkHash);

    if (window.location.hash !== "#admin") {
      fetch(`https://countapi.mileshilliard.com/api/v1/hit/${VISIT_COUNTER_KEY}`).catch(
        () => {}
      );
    }

    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  async function unlock() {
    setChecking(true);
    setError("");
    try {
      const res = await fetch("/api/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        setError("Incorrect password.");
        return;
      }
      setUnlocked(true);
      loadVisits();
      loadLeads();
    } finally {
      setChecking(false);
    }
  }

  async function loadVisits() {
    try {
      const res = await fetch(
        `https://countapi.mileshilliard.com/api/v1/get/${VISIT_COUNTER_KEY}`
      );
      const data = await res.json();
      setVisits(typeof data?.value === "number" ? String(data.value) : "0");
    } catch {
      setVisits("0");
    }
  }

  async function loadLeads() {
    try {
      const { db } = await import("@/lib/firebase");
      const { collection, query, orderBy, limit, getDocs } = await import(
        "firebase/firestore"
      );
      const q = query(
        collection(db, "catalogue_leads"),
        orderBy("createdAt", "desc"),
        limit(50)
      );
      const snap = await getDocs(q);
      setLeads(snap.docs.map((d) => d.data() as Lead));
    } catch (err) {
      console.error(err);
      setLeads([]);
    }
  }

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next) {
      setUnlocked(false);
      setPassword("");
      setError("");
      setLeads(null);
      if (window.location.hash === "#admin") {
        history.replaceState(null, "", window.location.pathname);
      }
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>NISTARAN Solutions · Admin</DialogTitle>
          <DialogDescription>
            {unlocked
              ? "Live site metrics and recent diagnostic requests."
              : "Enter the admin password to continue."}
          </DialogDescription>
        </DialogHeader>

        {!unlocked ? (
          <div className="flex flex-col gap-3 px-4 pb-6 md:px-7">
            <Label htmlFor="admin-pass">Password</Label>
            <Input
              id="admin-pass"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && unlock()}
              autoFocus
            />
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button
              variant="primary"
              onClick={unlock}
              loading={checking}
              className="mt-1"
            >
              Unlock
            </Button>
          </div>
        ) : (
          <div className="flex flex-col gap-6 px-4 pb-6 md:px-7">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-foreground-lighter">
                Total site visits
              </p>
              <p className="font-heading text-4xl font-semibold text-foreground">
                {visits}
              </p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-foreground-lighter">
                Recent leads
              </p>
              <div className="mt-2 flex max-h-64 flex-col gap-2 overflow-y-auto text-sm">
                {leads === null && (
                  <p className="text-foreground-lighter">Loading…</p>
                )}
                {leads?.length === 0 && (
                  <p className="text-foreground-lighter">No leads yet.</p>
                )}
                {leads?.map((lead, i) => (
                  <div
                    key={i}
                    className="border-t border-default pt-2 first:border-t-0 first:pt-0"
                  >
                    <p className="font-medium text-foreground">
                      {lead.name} <span className="text-foreground-light">· {lead.business}</span>
                    </p>
                    <p className="text-foreground-light">
                      {lead.sector} / {lead.tier} · {lead.contact}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
