import type { Booking } from "@/types/booking";
import type { Plan, PlanPaymentMode } from "@/types/plan";

type BookingSummaryProps = {
  booking: Booking;
  isSubmitting: boolean;
  onBack: () => void;
  onConfirm: () => void;
  plan?: Plan;
  paymentMode: PlanPaymentMode;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
}

export function BookingSummary({
  booking,
  isSubmitting,
  onBack,
  onConfirm,
  plan,
  paymentMode,
}: BookingSummaryProps) {
  const items = [
    ["Cliente", booking.clientName],
    ["Telefone", booking.phone],
    ["Serviço", booking.service],
    ["Barbeiro", booking.barber || "Sem preferência"],
    ["Data", formatDate(booking.date)],
    ["Horário", booking.time],
  ];

  return (
    <section
      aria-labelledby="booking-summary-title"
      className="rounded-3xl border border-barber-gold/25 bg-barber-graphite p-6 shadow-gold sm:p-8"
    >
      <p className="luxury-label">Revisão</p>
      <h2 id="booking-summary-title" className="mt-3 text-2xl font-semibold text-barber-cream">
        Confira sua solicitação
      </h2>

      <dl className="mt-7 divide-y divide-barber-cream/10">
        {items.map(([label, value]) => (
          <div key={label} className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr] sm:gap-4">
            <dt className="text-sm text-barber-subtle">{label}</dt>
            <dd className="text-sm font-medium text-barber-cream">{value}</dd>
          </div>
        ))}
        {booking.notes ? (
          <div className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr] sm:gap-4">
            <dt className="text-sm text-barber-subtle">Observação</dt>
            <dd className="whitespace-pre-wrap text-sm leading-6 text-barber-cream">
              {booking.notes}
            </dd>
          </div>
        ) : null}
      </dl>

      {plan ? (
        <div className="mt-6 rounded-2xl border border-barber-gold/20 bg-barber-black/40 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-barber-gold">
            Clube BarberFlow · {plan.name}
          </p>
          <p className="mt-3 text-sm leading-6 text-barber-cream">
            {paymentMode === "benefit"
              ? `Benefício simulado: ${plan.creditsLabel} e ${plan.discount}% de desconto em serviços adicionais.`
              : "Pagamento normal selecionado. Nenhum benefício do plano será simulado neste atendimento."}
          </p>
          <p className="mt-2 text-xs leading-5 text-barber-subtle">
            Nenhum crédito será descontado. Esta é apenas uma demonstração.
          </p>
        </div>
      ) : null}

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={onBack}
          disabled={isSubmitting}
          className="rounded-full border border-barber-cream/25 px-6 py-3 text-sm font-semibold text-barber-cream transition hover:border-barber-cream/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-barber-gold disabled:cursor-not-allowed disabled:opacity-50"
        >
          Voltar e editar
        </button>
        <button
          type="button"
          onClick={onConfirm}
          disabled={isSubmitting}
          className="rounded-full bg-barber-gold px-6 py-3 text-sm font-bold text-barber-black transition hover:bg-barber-goldSoft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-barber-gold disabled:cursor-wait disabled:opacity-70"
        >
          {isSubmitting ? "Registrando..." : "Confirmar agendamento"}
        </button>
      </div>
      <p aria-live="polite" className="mt-4 min-h-5 text-center text-xs text-barber-muted">
        {isSubmitting ? "Aguarde enquanto registramos a demonstração." : ""}
      </p>
    </section>
  );
}
