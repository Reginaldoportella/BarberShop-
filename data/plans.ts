import type { Plan, PlanId, StoredPlanSelection } from "@/types/plan";

export const PLAN_STORAGE_KEY = "barberflow:club-plan";

export const plans: Plan[] = [
  {
    id: "essencial",
    name: "Essencial",
    description: "Constância para manter o corte sempre em dia.",
    price: "R$ 129/mês",
    creditsLabel: "2 cortes por mês",
    benefits: ["2 cortes por mês", "5% de desconto em serviços adicionais"],
    discount: 5,
  },
  {
    id: "completo",
    name: "Completo",
    description: "Cabelo e barba com mais flexibilidade na agenda.",
    price: "R$ 219/mês",
    creditsLabel: "2 cortes + 2 barbas por mês",
    benefits: [
      "2 cortes por mês",
      "2 serviços de barba por mês",
      "10% de desconto em serviços adicionais",
      "Prioridade de horários",
    ],
    discount: 10,
    featured: true,
  },
  {
    id: "prime",
    name: "Prime",
    description: "Liberdade para escolher seus cuidados a cada mês.",
    price: "R$ 299/mês",
    creditsLabel: "4 créditos mensais",
    benefits: [
      "4 créditos mensais",
      "15% de desconto em serviços adicionais",
      "Prioridade de horários",
      "Benefícios exclusivos",
    ],
    discount: 15,
  },
];

export function getPlanById(id: PlanId | string | null): Plan | undefined {
  return plans.find((plan) => plan.id === id);
}

export function parseStoredPlan(value: string | null): Plan | undefined {
  if (!value) return undefined;

  try {
    const selection = JSON.parse(value) as Partial<StoredPlanSelection>;
    if (selection.version !== 1 || typeof selection.planId !== "string") return undefined;
    return getPlanById(selection.planId);
  } catch {
    return undefined;
  }
}
