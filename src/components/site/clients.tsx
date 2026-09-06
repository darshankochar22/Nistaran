import Image from "next/image";

const CLIENTS = [
  { name: "Nahta Classes", logo: "/images/clients/nahta-classes.jpg" },
  { name: "Taparia Institute", logo: "/images/clients/taparia-institute.jpg" },
  { name: "NSCC Anupam", logo: "/images/clients/nscc.jpg" },
  { name: "NSCC Avanti", logo: "/images/clients/nscc.jpg" },
  { name: "Mahaveer Nx" },
  { name: "Linen House", logo: "/images/clients/linen-house.jpg" },
];

function ClientMark({ client }: { client: (typeof CLIENTS)[number] }) {
  if (client.logo) {
    return (
      <Image
        src={client.logo}
        alt={client.name}
        width={120}
        height={40}
        className="h-9 w-auto shrink-0 object-contain grayscale opacity-50 transition-opacity hover:opacity-90"
      />
    );
  }
  return (
    <span className="shrink-0 whitespace-nowrap text-2xl font-semibold text-neutral-300 transition-colors hover:text-neutral-500">
      {client.name}
    </span>
  );
}

export function Clients() {
  const track = [...CLIENTS, ...CLIENTS];

  return (
    <section id="clients" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm text-neutral-400">
          Live, working software — not mockups — trusted by these
          businesses today
        </p>
      </div>

      <div className="marquee-mask relative mt-8 overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-16 [animation-play-state:running] hover:[animation-play-state:paused]">
          {track.map((client, i) => (
            <ClientMark key={`${client.name}-${i}`} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
