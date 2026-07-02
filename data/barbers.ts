export type Barber = {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
};

export const barbers: Barber[] = [
  {
    id: "rafael-costa",
    name: "Rafael Costa",
    role: "Barbeiro master",
    specialty: "Degradê, cortes clássicos e visagismo masculino",
    experience: "9 anos",
  },
  {
    id: "bruno-almeida",
    name: "Bruno Almeida",
    role: "Especialista em barba",
    specialty: "Barba navalhada, pigmentação e acabamento executivo",
    experience: "7 anos",
  },
  {
    id: "diego-martins",
    name: "Diego Martins",
    role: "Stylist",
    specialty: "Textura, finalização e cortes modernos",
    experience: "6 anos",
  },
];
