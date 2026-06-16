import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { services } from "@/data/services";

export default function SchedulingPage() {
  return (
    <>
      <Header />
      <main className="section-shell min-h-[70vh] py-16 sm:py-24">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-barber-gold">
            Agendamento
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-barber-cream sm:text-6xl">
            Escolha o serviço para iniciar sua reserva.
          </h1>
          <p className="mt-5 text-lg leading-8 text-barber-muted">
            Fase 1: rota preparada com dados mockados. Banco, Prisma e regras de
            disponibilidade entram em fases futuras.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.name} className="rounded-3xl bg-barber-graphite p-6">
              <h2 className="text-xl font-semibold text-barber-cream">{service.name}</h2>
              <p className="mt-3 text-sm leading-6 text-barber-muted">{service.description}</p>
              <div className="mt-5 flex items-center justify-between text-sm">
                <span className="text-barber-gold">{service.duration}</span>
                <span className="font-semibold text-barber-cream">{service.price}</span>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
