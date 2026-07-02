const benefits = [
  ["Rotina sem improviso", "Créditos mensais simulados ajudam a visualizar uma rotina de cuidados mais previsível."],
  ["Mais valor em cada visita", "Cada plano demonstra descontos progressivos para serviços contratados além da franquia."],
  ["Experiência prioritária", "Os planos Completo e Prime simulam preferência na escolha de horários."],
];

export function PlanBenefits() {
  return (
    <section aria-labelledby="benefits-title" className="py-20 sm:py-28">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="luxury-label">Benefícios do clube</p>
          <h2 id="benefits-title" className="mt-4 text-3xl font-semibold text-barber-cream sm:text-5xl">
            Seu cuidado como parte da rotina.
          </h2>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-barber-cream/10 bg-barber-cream/10 md:grid-cols-3">
          {benefits.map(([title, text], index) => (
            <article key={title} className="bg-barber-black p-7 sm:p-9">
              <span className="font-mono text-xs text-barber-gold">0{index + 1}</span>
              <h3 className="mt-7 text-xl font-semibold text-barber-cream">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-barber-muted">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
