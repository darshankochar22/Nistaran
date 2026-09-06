import Image from "next/image";

export function MottoStrip() {
  return (
    <section className="border-y border-default bg-ink py-5 text-paper">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 px-4 sm:px-6">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-paper shadow-sm">
          <Image
            src="/images/logo.png"
            alt=""
            width={36}
            height={38}
            className="h-8 w-auto"
          />
        </span>
        <p className="font-heading text-xl font-medium sm:text-2xl">
          Data into <em className="italic text-gold-light">decisions</em>.
        </p>
      </div>
    </section>
  );
}
