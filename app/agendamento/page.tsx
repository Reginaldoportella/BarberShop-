import { BookingForm } from "@/components/booking/BookingForm";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function SchedulingPage() {
  return (
    <>
      <Header />
      <main className="min-h-[75vh] bg-[radial-gradient(circle_at_top_right,rgba(200,155,60,0.10),transparent_32%)] py-14 sm:py-20">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="luxury-label">Agendamento</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-barber-cream sm:text-6xl">
              Reserve seu próximo cuidado.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-barber-muted sm:text-lg">
              Escolha o serviço, profissional e horário. Você poderá revisar tudo antes de
              confirmar.
            </p>
            <p className="mt-5 border-l-2 border-barber-gold pl-4 text-sm leading-6 text-barber-goldSoft">
              Fase atual: agendamento simulado com dados mockados. Banco, Prisma e
              disponibilidade real entram nas próximas fases.
            </p>
          </div>

          <div className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
            <section className="rounded-3xl border border-barber-cream/10 bg-barber-graphite/90 p-5 shadow-2xl shadow-black/30 sm:p-8">
              <BookingForm />
            </section>
            <aside className="rounded-3xl border border-barber-gold/20 bg-barber-black/70 p-6 lg:sticky lg:top-24">
              <p className="luxury-label">Como funciona</p>
              <ol className="mt-5 space-y-4 text-sm leading-6 text-barber-muted">
                <li>
                  <span className="mr-2 text-barber-gold">01</span> Preencha suas preferências e
                  dados.
                </li>
                <li>
                  <span className="mr-2 text-barber-gold">02</span> Revise a solicitação em um
                  resumo separado.
                </li>
                <li>
                  <span className="mr-2 text-barber-gold">03</span> Confirme para ver a
                  demonstração concluída.
                </li>
              </ol>
              <div className="gold-line my-6" />
              <p className="text-xs leading-5 text-barber-subtle">
                Nenhuma informação é salva. Os horários são exemplos e não indicam
                disponibilidade.
              </p>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
