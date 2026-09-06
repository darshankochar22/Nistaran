import Image from "next/image";

const CLIENTS = [
  {
    name: "Nahta Classes",
    tag: "CA / CS / CMA coaching, Raipur",
    logo: "/images/clients/nahta-classes.jpg",
  },
  {
    name: "Taparia Institute",
    tag: "CBSE / ICSE coaching, Classes VIII–X",
    logo: "/images/clients/taparia-institute.jpg",
  },
  {
    name: "NSCC Anupam",
    tag: "Commerce coaching, Class XI",
    logo: "/images/clients/nscc.jpg",
  },
  {
    name: "NSCC Avanti",
    tag: "Commerce coaching, Class XII",
    logo: "/images/clients/nscc.jpg",
  },
  {
    name: "Mahaveer Nx",
    tag: "Family clothing store, Kawardha",
    initials: "MN",
  },
  {
    name: "Linen House",
    tag: "Linen & uniform supply, hospitals & hotels",
    logo: "/images/clients/linen-house.jpg",
  },
];

function ClientPill({ client }: { client: (typeof CLIENTS)[number] }) {
  return (
    <div className="flex shrink-0 items-center gap-3 rounded-full border border-neutral-200 bg-white py-2 pl-2 pr-5 shadow-sm">
      <div
        className="flex size-9 items-center justify-center overflow-hidden rounded-full text-xs font-semibold text-white"
        style={client.initials ? { background: "#171717" } : undefined}
      >
        {client.logo ? (
          <Image
            src={client.logo}
            alt=""
            width={36}
            height={36}
            className="size-full bg-white object-contain grayscale"
          />
        ) : (
          client.initials
        )}
      </div>
      <div className="leading-tight">
        <p className="text-sm font-medium text-black">{client.name}</p>
        <p className="text-xs text-neutral-400">{client.tag}</p>
      </div>
    </div>
  );
}

export function Clients() {
  const track = [...CLIENTS, ...CLIENTS];

  return (
    <section id="clients" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="eyebrow">Who trusts us</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-black">
            Our loving clients
          </h2>
          <p className="mt-3 text-neutral-500">
            Live, working software — not mockups — running inside these
            businesses today.
          </p>
        </div>
      </div>

      <div className="marquee-mask relative mt-10 overflow-hidden">
        <div className="marquee-track flex w-max gap-4 [animation-play-state:running] hover:[animation-play-state:paused]">
          {track.map((client, i) => (
            <ClientPill key={`${client.name}-${i}`} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
