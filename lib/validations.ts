import { z } from "zod";

function getToday() {
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60_000;

  return new Date(now.getTime() - offset).toISOString().slice(0, 10);
}

export const bookingSchema = z.object({
  clientName: z.string().trim().min(3, "Informe um nome com pelo menos 3 caracteres."),
  phone: z
    .string()
    .trim()
    .refine(
      (value) => value.replace(/\D/g, "").length >= 10,
      "Informe um telefone com pelo menos 10 números.",
    ),
  service: z.string().min(1, "Escolha um serviço."),
  barber: z.string().optional(),
  date: z
    .string()
    .min(1, "Escolha uma data.")
    .refine((value) => !value || value >= getToday(), "Escolha uma data a partir de hoje."),
  time: z.string().min(1, "Escolha um horário."),
  notes: z.string().trim().max(300, "A observação deve ter no máximo 300 caracteres."),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
