export function Contact() {
  return (
    <section id="contato" className="bg-barber-light pb-20 text-barber-darkText sm:pb-28">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl border border-barber-subtle/20 bg-barber-card p-6 text-center shadow-2xl shadow-black/10 sm:p-10">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-barber-gold">
            Reserve já
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase tracking-[0.08em] sm:text-5xl">
            Pronto para abrir a agenda
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-barber-subtle">
            Entraremos em contato em até 24 horas para confirmar seu
            agendamento. A estrutura está pronta para receber disponibilidade,
            barbeiros e pagamentos nas próximas fases.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-8 text-center md:grid-cols-3">
          {[
            ["Localização", "Rua Premium, 120", "Centro"],
            ["Telefone", "(11) 99999-0000", "WhatsApp"],
            ["Horas", "Seg-Sab: 9h-20h", "Dom: 10h-16h"],
          ].map(([title, lineOne, lineTwo]) => (
            <div key={title}>
              <div className="mx-auto grid size-14 place-items-center rounded-full bg-barber-gold text-xl font-black text-barber-black">
                +
              </div>
              <p className="mt-4 font-bold">{title}</p>
              <p className="mt-3 text-sm leading-6 text-barber-subtle">
                {lineOne}
                <br />
                {lineTwo}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
