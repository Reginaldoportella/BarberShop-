export type PlanId = "essencial" | "completo" | "prime";

export type Plan = {
  id: PlanId;
  name: string;
  description: string;
  price: string;
  creditsLabel: string;
  benefits: string[];
  discount: number;
  featured?: boolean;
};

export type PlanPaymentMode = "benefit" | "regular";

export type StoredPlanSelection = {
  version: 1;
  planId: PlanId;
};
