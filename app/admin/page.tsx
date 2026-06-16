import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

const adminCards = [
  { label: "Agendamentos", value: "0", helper: "Modulo futuro" },
  { label: "Servicos", value: "4", helper: "Mock local" },
  { label: "Barbeiros", value: "3", helper: "Mock local" },
];

export default function AdminPage() {
  return (
    <>
      <Header />
      <main className="section-shell min-h-[70vh] py-16 sm:py-24">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-barber-gold">
            Admin
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-barber-cream sm:text-6xl">
            Painel inicial do BarberFlow.
          </h1>
          <p className="mt-5 text-lg leading-8 text-barber-muted">
            Estrutura visual pronta para evoluir para autenticacao, agenda,
            cadastro de servicos e gestao da equipe.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {adminCards.map((card) => (
            <article key={card.label} className="rounded-3xl bg-barber-graphite p-6">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-barber-gold">
                {card.label}
              </p>
              <p className="mt-6 text-5xl font-semibold text-barber-cream">{card.value}</p>
              <p className="mt-3 text-sm text-barber-muted">{card.helper}</p>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
