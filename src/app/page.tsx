import { AdminPanel } from "@/components/site/admin-panel";
import { Approach } from "@/components/site/approach";
import { Catalogue } from "@/components/site/catalogue";
import { Clients } from "@/components/site/clients";
import { CTA } from "@/components/site/cta";
import { Differentiation } from "@/components/site/differentiation";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { MottoStrip } from "@/components/site/motto-strip";
import { Problem } from "@/components/site/problem";
import { Programs } from "@/components/site/programs";
import { SiteNav } from "@/components/site/site-nav";
import { Tiers } from "@/components/site/tiers";
import { Verticals } from "@/components/site/verticals";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteNav />
      <main id="main-content" className="flex-1">
        <Hero />
        <MottoStrip />
        <Problem />
        <Clients />
        <Approach />
        <Verticals />
        <Programs />
        <Catalogue />
        <Tiers />
        <Differentiation />
        <CTA />
      </main>
      <Footer />
      <AdminPanel />
    </div>
  );
}
