import Image from "next/image";
import { barbers } from "@/data/barbers";

export function Barbers() {
  return (
    <section id="barbeiros" className="bg-white py-20 text-black sm:py-28">
      <div className="section-shell">
        <div className="text-center">
          <h2 className="text-4xl font-black uppercase tracking-[0.14em] sm:text-5xl">
            Os mestres
          </h2>
          <div className="mx-auto mt-5 h-1 w-20 bg-barber-gold" />
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-neutral-600">
            Conheça os artesãos por trás da arte. Cada mestre traz anos de
            experiência, precisão e paixão por cada serviço.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="relative overflow-hidden bg-neutral-100">
            <Image
              src="/images/master-barber.png"
              alt="Retrato editorial de barbeiro master"
              width={1200}
              height={1500}
              className="aspect-[4/5] w-full object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
          <div className="grid gap-4">
            {barbers.map((barber) => (
              <article
                key={barber.name}
                className="premium-card-motion border border-neutral-200 p-6 hover:border-barber-gold/50"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-barber-gold">
                      {barber.role}
                    </p>
                    <h3 className="mt-3 text-2xl font-bold">{barber.name}</h3>
                    <p className="mt-3 leading-7 text-neutral-600">{barber.specialty}</p>
                  </div>
                  <span className="shrink-0 text-sm font-bold uppercase tracking-[0.2em] text-neutral-500">
                    {barber.experience}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
