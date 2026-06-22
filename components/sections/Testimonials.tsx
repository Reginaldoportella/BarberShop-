import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section id="avaliacoes" className="bg-barber-light py-20 text-barber-darkText sm:py-28">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-barber-gold">
              Avaliações
            </p>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-[0.08em] sm:text-5xl">
              Clientes exigentes, rotina simples.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="premium-card-motion border border-barber-subtle/20 bg-barber-card p-6 hover:border-barber-gold/50"
              >
                <div className="text-barber-gold">
                  {"★".repeat(testimonial.rating)}
                </div>
                <p className="mt-5 text-sm leading-6 text-barber-subtle">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <p className="mt-6 font-semibold text-barber-darkText">
                  {testimonial.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
