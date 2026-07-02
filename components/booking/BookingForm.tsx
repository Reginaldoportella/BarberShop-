"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { BookingSuccess } from "@/components/booking/BookingSuccess";
import { BookingSummary } from "@/components/booking/BookingSummary";
import { barbers } from "@/data/barbers";
import { parseStoredPlan, PLAN_STORAGE_KEY } from "@/data/plans";
import { services } from "@/data/services";
import { timeSlots } from "@/data/time-slots";
import { bookingSchema, type BookingFormData } from "@/lib/validations";
import type { Booking, BookingStep } from "@/types/booking";
import type { Plan, PlanPaymentMode } from "@/types/plan";

const defaultValues: BookingFormData = {
  clientName: "",
  phone: "",
  service: "",
  barber: "",
  date: "",
  time: "",
  notes: "",
};

const fieldClassName =
  "mt-2 w-full rounded-2xl border border-barber-cream/15 bg-barber-black/60 px-4 py-3 text-barber-cream outline-none transition placeholder:text-barber-subtle focus:border-barber-gold focus:ring-2 focus:ring-barber-gold/20";

function getToday() {
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60_000;

  return new Date(now.getTime() - offset).toISOString().slice(0, 10);
}

function FieldError({ message }: { message?: string }) {
  return message ? <p className="mt-2 text-sm text-red-300">{message}</p> : null;
}

export function BookingForm() {
  const [step, setStep] = useState<BookingStep>("form");
  const [booking, setBooking] = useState<Booking | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan>();
  const [paymentMode, setPaymentMode] = useState<PlanPaymentMode>("benefit");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues,
  });

  useEffect(() => {
    setSelectedPlan(parseStoredPlan(window.localStorage.getItem(PLAN_STORAGE_KEY)));
  }, []);

  function reviewBooking(data: BookingFormData) {
    setBooking(data);
    setStep("review");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function confirmBooking() {
    if (!booking) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    reset(defaultValues);
    setIsSubmitting(false);
    setStep("success");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function startNewBooking() {
    setBooking(null);
    setStep("form");
  }

  if (step === "success" && booking) {
    return (
      <BookingSuccess
        booking={booking}
        onNewBooking={startNewBooking}
        plan={selectedPlan}
        paymentMode={paymentMode}
      />
    );
  }

  if (step === "review" && booking) {
    return (
      <BookingSummary
        booking={booking}
        isSubmitting={isSubmitting}
        onBack={() => setStep("form")}
        onConfirm={confirmBooking}
        plan={selectedPlan}
        paymentMode={paymentMode}
      />
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit(reviewBooking)} className="space-y-10">
      <section
        aria-labelledby="club-selection-title"
        className="rounded-2xl border border-barber-gold/20 bg-barber-black/40 p-5 sm:p-6"
      >
        <p className="luxury-label">Clube BarberFlow</p>
        <h2 id="club-selection-title" className="mt-3 text-xl font-semibold text-barber-cream">
          {selectedPlan ? `Plano ${selectedPlan.name} selecionado` : "Nenhum plano selecionado"}
        </h2>
        {selectedPlan ? (
          <>
            <p className="mt-3 text-sm leading-6 text-barber-muted">
              {selectedPlan.creditsLabel} · {selectedPlan.discount}% de desconto adicional
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <label className="flex cursor-pointer gap-3 rounded-2xl border border-barber-cream/10 p-4 text-sm text-barber-cream has-[:checked]:border-barber-gold has-[:checked]:bg-barber-gold/5">
                <input
                  type="radio"
                  name="plan-payment-mode"
                  value="benefit"
                  checked={paymentMode === "benefit"}
                  onChange={() => setPaymentMode("benefit")}
                  className="accent-barber-gold"
                />
                Usar benefício do plano
              </label>
              <label className="flex cursor-pointer gap-3 rounded-2xl border border-barber-cream/10 p-4 text-sm text-barber-cream has-[:checked]:border-barber-gold has-[:checked]:bg-barber-gold/5">
                <input
                  type="radio"
                  name="plan-payment-mode"
                  value="regular"
                  checked={paymentMode === "regular"}
                  onChange={() => setPaymentMode("regular")}
                  className="accent-barber-gold"
                />
                Pagar normalmente
              </label>
            </div>
            <p className="mt-4 text-xs leading-5 text-barber-goldSoft">
              Simulação apenas: nenhum crédito será descontado.
            </p>
          </>
        ) : (
          <p className="mt-3 text-sm leading-6 text-barber-muted">
            Você pode agendar normalmente ou escolher um plano na página do Clube.
          </p>
        )}
        <p className="mt-5 border-t border-barber-cream/10 pt-4 text-xs leading-5 text-barber-subtle">
          Os planos e benefícios estão em modo demonstrativo. Pagamentos, assinaturas e
          controle real de créditos serão implementados em fases futuras.
        </p>
      </section>
      <fieldset className="space-y-5">
        <legend className="text-xl font-semibold text-barber-cream">
          1. Escolha seu atendimento
        </legend>

        <div>
          <label htmlFor="service" className="text-sm font-medium text-barber-cream">
            Serviço <span className="text-barber-gold">*</span>
          </label>
          <select
            id="service"
            aria-invalid={Boolean(errors.service)}
            className={fieldClassName}
            {...register("service")}
          >
            <option value="">Selecione um serviço</option>
            {services.map((service) => (
              <option key={service.name} value={service.name}>
                {service.name} — {service.duration} — {service.price}
              </option>
            ))}
          </select>
          <FieldError message={errors.service?.message} />
        </div>

        <div>
          <label htmlFor="barber" className="text-sm font-medium text-barber-cream">
            Barbeiro (opcional)
          </label>
          <select id="barber" className={fieldClassName} {...register("barber")}>
            <option value="">Sem preferência</option>
            {barbers.map((barber) => (
              <option key={barber.id} value={barber.name}>
                {barber.name} — {barber.specialty}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="date" className="text-sm font-medium text-barber-cream">
              Data <span className="text-barber-gold">*</span>
            </label>
            <input
              id="date"
              type="date"
              min={getToday()}
              aria-invalid={Boolean(errors.date)}
              className={fieldClassName}
              {...register("date")}
            />
            <FieldError message={errors.date?.message} />
          </div>
          <div>
            <label htmlFor="time" className="text-sm font-medium text-barber-cream">
              Horário <span className="text-barber-gold">*</span>
            </label>
            <select
              id="time"
              aria-invalid={Boolean(errors.time)}
              className={fieldClassName}
              {...register("time")}
            >
              <option value="">Selecione um horário</option>
              {timeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            <FieldError message={errors.time?.message} />
          </div>
        </div>
        <p className="text-xs leading-5 text-barber-subtle">
          Horários ilustrativos. Nenhuma disponibilidade real é consultada ou bloqueada.
        </p>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="text-xl font-semibold text-barber-cream">2. Seus dados</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="clientName" className="text-sm font-medium text-barber-cream">
              Nome <span className="text-barber-gold">*</span>
            </label>
            <input
              id="clientName"
              type="text"
              autoComplete="name"
              placeholder="Seu nome completo"
              aria-invalid={Boolean(errors.clientName)}
              className={fieldClassName}
              {...register("clientName")}
            />
            <FieldError message={errors.clientName?.message} />
          </div>
          <div>
            <label htmlFor="phone" className="text-sm font-medium text-barber-cream">
              Telefone <span className="text-barber-gold">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="(11) 99999-0000"
              aria-invalid={Boolean(errors.phone)}
              className={fieldClassName}
              {...register("phone")}
            />
            <FieldError message={errors.phone?.message} />
          </div>
        </div>
        <div>
          <label htmlFor="notes" className="text-sm font-medium text-barber-cream">
            Observação (opcional)
          </label>
          <textarea
            id="notes"
            rows={4}
            maxLength={300}
            placeholder="Preferências ou informações úteis para o atendimento"
            aria-invalid={Boolean(errors.notes)}
            className={`${fieldClassName} resize-y`}
            {...register("notes")}
          />
          <FieldError message={errors.notes?.message} />
          <p className="mt-2 text-xs text-barber-subtle">Máximo de 300 caracteres.</p>
        </div>
      </fieldset>

      <button
        type="submit"
        className="w-full rounded-full bg-barber-gold px-7 py-4 text-sm font-bold text-barber-black transition hover:bg-barber-goldSoft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-barber-gold"
      >
        Revisar agendamento
      </button>
    </form>
  );
}
