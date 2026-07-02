import type { Booking } from "@/types/booking";
import type { Plan, PlanPaymentMode } from "@/types/plan";

type BookingSuccessProps = {
  booking: Booking;
  onNewBooking: () => void;
  plan?: Plan;
  paymentMode: PlanPaymentMode;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
}

export function BookingSuccess({
  booking,
  onNewBooking,
  plan,
  paymentMode,
}: BookingSuccessProps) {
  return (
    <section
      aria-labelledby="booking-success-title"
      className="mx-auto max-w-2xl rounded-3xl border border-barber-gold/30 bg-barber-graphite p-6 text-center shadow-gold sm:p-10"
    >
      <div
        aria-hidden="true"
        className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-barber-gold text-2xl text-barber-black"
      >
        ✓
      </div>
      <p className="luxury-label mt-6">Solicitação registrada</p>
      <h2 id="booking-success-title" className="mt-3 text-3xl font-semibold text-barber-cream">
        Obrigado, {booking.clientName}.
      </h2>
      <p className="mt-4 leading-7 text-barber-muted">
        Sua solicitação para <strong className="text-barber-cream">{booking.service}</strong>{" "}
        com{" "}
        <strong className="text-barber-cream">
          {booking.barber || "barbeiro sem preferência"}
        </strong>{" "}
        foi registrada para {formatDate(booking.date)}, às {booking.time}.
      </p>
      <p className="mt-5 rounded-2xl border border-barber-gold/20 bg-barber-black/40 p-4 text-sm leading-6 text-barber-goldSoft">
        Esta solicitação foi registrada apenas como demonstração e não representa uma reserva real.
      </p>
      {plan && paymentMode === "benefit" ? (
        <p className="mt-3 text-sm leading-6 text-barber-muted">
          Benefício do plano {plan.name} simulado sem consumo real de créditos.
        </p>
      ) : null}
      <button
        type="button"
        onClick={onNewBooking}
        className="mt-8 rounded-full bg-barber-gold px-7 py-3 text-sm font-bold text-barber-black transition hover:bg-barber-goldSoft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-barber-gold"
      >
        Fazer novo agendamento
      </button>
    </section>
  );
}
