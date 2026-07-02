const questions = [
  ["Os planos já podem ser contratados?", "Não. Esta etapa é uma demonstração visual e não realiza assinatura, cobrança ou pagamento."],
  ["Os créditos são descontados ao agendar?", "Não. O agendamento apenas simula a aplicação do benefício. Nenhum crédito é consumido ou persistido."],
  ["A prioridade garante um horário?", "Não nesta demonstração. Os horários exibidos são mockados e não representam disponibilidade real."],
  ["Posso trocar ou cancelar o plano?", "A gestão de assinatura, renovação e cancelamento será definida em fases futuras."],
];

export function PlanFAQ() {
  return (
    <section aria-labelledby="faq-title" className="py-20 sm:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="luxury-label">Perguntas frequentes</p>
          <h2 id="faq-title" className="mt-4 text-3xl font-semibold text-barber-cream sm:text-5xl">Antes de escolher.</h2>
        </div>
        <div className="divide-y divide-barber-cream/10 border-y border-barber-cream/10">
          {questions.map(([question, answer]) => (
            <details key={question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold text-barber-cream">
                {question}
                <span aria-hidden="true" className="text-xl text-barber-gold transition group-open:rotate-45">+</span>
              </summary>
              <p className="max-w-2xl pt-4 text-sm leading-6 text-barber-muted">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
