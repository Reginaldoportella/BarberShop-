export type Barber = {
  name: string;
  role: string;
  specialty: string;
  experience: string;
};

export const barbers: Barber[] = [
  {
    name: "Rafael Costa",
    role: "Barbeiro master",
    specialty: "Degrade, cortes classicos e visagismo masculino",
    experience: "9 anos",
  },
  {
    name: "Bruno Almeida",
    role: "Especialista em barba",
    specialty: "Barba navalhada, pigmentacao e acabamento executivo",
    experience: "7 anos",
  },
  {
    name: "Diego Martins",
    role: "Stylist",
    specialty: "Textura, finalizacao e cortes modernos",
    experience: "6 anos",
  },
];
