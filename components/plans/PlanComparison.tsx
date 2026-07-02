import { plans } from "@/data/plans";

const rows = [
  ["Créditos mensais", "2 cortes", "2 cortes + 2 barbas", "4 créditos"],
  ["Desconto adicional", "5%", "10%", "15%"],
  ["Prioridade de horários", "—", "Incluída", "Incluída"],
  ["Benefícios exclusivos", "—", "—", "Incluídos"],
];

export function PlanComparison() {
  return (
    <section aria-labelledby="comparison-title" className="border-y border-barber-cream/10 bg-barber-graphite/40 py-20 sm:py-28">
      <div className="section-shell">
        <p className="luxury-label">Compare</p>
        <h2 id="comparison-title" className="mt-4 text-3xl font-semibold text-barber-cream sm:text-5xl">
          Encontre o plano para o seu ritmo.
        </h2>
        <div className="mt-12 overflow-x-auto rounded-3xl border border-barber-cream/10">
          <table className="w-full min-w-[700px] border-collapse text-left text-sm">
            <thead className="bg-barber-black/80">
              <tr>
                <th className="p-5 font-medium text-barber-subtle">Benefício</th>
                {plans.map((plan) => <th key={plan.id} className="p-5 text-base font-semibold text-barber-cream">{plan.name}</th>)}
              </tr>
            </thead>
            <tbody className="divide-y divide-barber-cream/10">
              {rows.map(([label, ...values]) => (
                <tr key={label} className="bg-barber-graphite/70">
                  <th className="p-5 font-medium text-barber-muted">{label}</th>
                  {values.map((value, index) => (
                    <td key={`${label}-${plans[index].id}`} className="p-5 text-barber-cream">{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
