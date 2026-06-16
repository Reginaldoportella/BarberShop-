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
    specialty: "Degradê, cortes clássicos e visagismo masculino",
    experience: "9 anos",
  },
  {
    name: "Bruno Almeida",
    role: "Especialista em barba",
    specialty: "Barba navalhada, pigmentação e acabamento executivo",
    experience: "7 anos",
  },
  {
    name: "Diego Martins",
    role: "Stylist",
    specialty: "Textura, finalização e cortes modernos",
    experience: "6 anos",
  },
];
