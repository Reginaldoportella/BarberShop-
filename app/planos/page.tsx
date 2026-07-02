"use client";

import { useRouter } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PlanBenefits } from "@/components/plans/PlanBenefits";
import { PlanCard } from "@/components/plans/PlanCard";
import { PlanComparison } from "@/components/plans/PlanComparison";
import { PlanFAQ } from "@/components/plans/PlanFAQ";
import { PLAN_STORAGE_KEY, plans } from "@/data/plans";
import type { Plan, StoredPlanSelection } from "@/types/plan";

const demoMessage =
  "Os planos e benefícios estão em modo demonstrativo. Pagamentos, assinaturas e controle real de créditos serão implementados em fases futuras.";

export default function PlansPage() {
  const router = useRouter();

  function selectPlan(plan: Plan) {
    const selection: StoredPlanSelection = { version: 1, planId: plan.id };
    window.localStorage.setItem(PLAN_STORAGE_KEY, JSON.stringify(selection));
    router.push("/agendamento");
  }

  return (
    <>
      <Header />
      <main className="overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(200,155,60,0.14),transparent_30%)]">
        <section className="border-b border-barber-cream/10 py-20 sm:py-28">
          <div className="section-shell">
            <div className="max-w-4xl">
              <p className="luxury-label">Clube BarberFlow</p>
              <h1 className="mt-5 text-5xl font-semibold leading-[1.05] text-barber-cream sm:text-7xl">
                Cuidado premium, todos os meses.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-barber-muted sm:text-lg">
                Escolha uma rotina de cuidado que combina com você e simule seus benefícios
                diretamente no agendamento.
              </p>
            </div>
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {plans.map((plan) => (
                <PlanCard key={plan.id} plan={plan} onSelect={selectPlan} />
              ))}
            </div>
            <p className="mt-8 rounded-2xl border border-barber-gold/25 bg-barber-gold/5 p-5 text-sm leading-6 text-barber-goldSoft">
              {demoMessage}
            </p>
          </div>
        </section>
        <PlanBenefits />
        <PlanComparison />
        <PlanFAQ />
      </main>
      <Footer />
    </>
  );
}
