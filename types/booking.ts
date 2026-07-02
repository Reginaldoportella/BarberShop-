import type { BookingFormData } from "@/lib/validations";

export type Booking = BookingFormData;

export type BookingStep = "form" | "review" | "success";
