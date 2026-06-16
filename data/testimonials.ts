export type Testimonial = {
  name: string;
  text: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Lucas Ferreira",
    text: "Atendimento pontual, corte muito bem feito e ambiente acima da media.",
    rating: 5,
  },
  {
    name: "Henrique Souza",
    text: "O combo corte e barba virou compromisso fixo. A experiencia e impecavel.",
    rating: 5,
  },
  {
    name: "Marcos Lima",
    text: "Equipe tecnica, agenda organizada e resultado consistente toda semana.",
    rating: 5,
  },
];
