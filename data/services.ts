export type Service = {
  name: string;
  description: string;
  duration: string;
  price: string;
};

export const services: Service[] = [
  {
    name: "Corte Signature",
    description: "Consultoria de estilo, corte preciso na tesoura e finalização premium.",
    duration: "45 min",
    price: "R$ 80",
  },
  {
    name: "Barba Navalhada",
    description: "Toalha quente, desenho de barba, navalha e balm de acabamento.",
    duration: "35 min",
    price: "R$ 55",
  },
  {
    name: "Combo Executivo",
    description: "Corte, barba, sobrancelha e finalização para uma rotina sem atrito.",
    duration: "75 min",
    price: "R$ 125",
  },
  {
    name: "Tratamento Capilar",
    description: "Higienização, hidratação e styling para manter o cabelo no ponto.",
    duration: "40 min",
    price: "R$ 70",
  },
];
