import type { Plan } from "@/types/plan";

type PlanCardProps = {
  plan: Plan;
  onSelect: (plan: Plan) => void;
};

export function PlanCard({ plan, onSelect }: PlanCardProps) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 sm:p-8 ${
        plan.featured
          ? "border-barber-gold bg-barber-graphite shadow-gold"
          : "border-barber-cream/10 bg-barber-graphite/70 hover:border-barber-gold/50"
      }`}
    >
      {plan.featured ? (
        <p className="absolute right-6 top-6 text-[10px] font-bold uppercase tracking-[0.24em] text-barber-gold">
          Mais escolhido
        </p>
      ) : null}
      <p className="luxury-label">Plano mensal</p>
      <h2 className="mt-5 text-3xl font-semibold text-barber-cream">{plan.name}</h2>
      <p className="mt-3 min-h-12 text-sm leading-6 text-barber-muted">{plan.description}</p>
      <p className="mt-7 font-serif text-2xl text-barber-goldSoft">{plan.price}</p>
      <div className="gold-line my-7" />
      <ul className="flex-1 space-y-4 text-sm leading-6 text-barber-cream/90">
        {plan.benefits.map((benefit) => (
          <li key={benefit} className="flex gap-3">
            <span aria-hidden="true" className="text-barber-gold">✓</span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => onSelect(plan)}
        className={`mt-8 w-full rounded-full px-6 py-3 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-barber-gold ${
          plan.featured
            ? "bg-barber-gold text-barber-black hover:bg-barber-goldSoft"
            : "border border-barber-gold text-barber-gold hover:bg-barber-gold hover:text-barber-black"
        }`}
      >
        Escolher plano
      </button>
    </article>
  );
}
