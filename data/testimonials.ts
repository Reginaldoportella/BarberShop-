export type Testimonial = {
  name: string;
  text: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Lucas Ferreira",
    text: "Atendimento pontual, corte muito bem feito e ambiente acima da média.",
    rating: 5,
  },
  {
    name: "Henrique Souza",
    text: "O combo corte e barba virou compromisso fixo. A experiência é impecável.",
    rating: 5,
  },
  {
    name: "Marcos Lima",
    text: "Equipe técnica, agenda organizada e resultado consistente toda semana.",
    rating: 5,
  },
];
