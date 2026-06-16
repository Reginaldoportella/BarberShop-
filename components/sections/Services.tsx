import Image from "next/image";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="servicos" className="bg-[#061111] py-20 sm:py-28">
      <div className="section-shell">
        <div className="relative min-h-[520px] overflow-hidden">
          <Image
            src="/images/hero-tools-minimal.jpg"
            alt="Ferramentas de barbearia em composicao minimalista sobre bancada"
            fill
            className="object-cover object-center opacity-90 brightness-[0.74] contrast-105 saturate-75 sepia-[0.18]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1),rgba(0,0,0,0.76)_74%),linear-gradient(180deg,rgba(0,0,0,0.16),rgba(0,0,0,0.5))]" />
          <div className="relative flex min-h-[520px] items-center justify-center px-4 text-center">
            <div>
              <h2 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.03em] text-white sm:text-6xl">
                <span className="text-barber-gold">
                  Viva uma experiência premium.
                </span>
                <br />
                Saia com presença, estilo e confiança.
              </h2>
              <div className="mx-auto mt-7 h-1 w-20 bg-barber-gold" />
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.name}
              className="premium-card-motion border border-white/10 bg-black/55 p-6 hover:border-barber-gold/60"
            >
              <p className="luxury-label">{service.duration}</p>
              <h3 className="mt-5 text-2xl font-semibold text-white">
                {service.name}
              </h3>
              <p className="mt-4 min-h-24 text-sm leading-6 text-barber-muted">
                {service.description}
              </p>
              <p className="mt-7 text-2xl font-semibold text-barber-gold">
                {service.price}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
