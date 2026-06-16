export function Footer() {
  return (
    <footer className="bg-black">
      <div className="section-shell grid gap-12 py-16 md:grid-cols-[1.3fr_0.8fr_0.9fr]">
        <div>
          <p className="font-serif text-3xl font-semibold uppercase tracking-[0.34em] text-barber-gold">
            BarberFlow
          </p>
          <p className="mt-7 max-w-md text-sm leading-7 text-barber-muted">
            O novo padrão em cuidados masculinos. Um espaço onde estilo,
            precisão e sofisticação se encontram para oferecer uma experiência
            exclusiva.
          </p>
        </div>
        <div>
          <p className="font-bold text-white">Links rapidos</p>
          <div className="mt-4 grid gap-2 text-sm text-barber-muted">
            <a href="#servicos">Servicos</a>
            <a href="#galeria">Galeria</a>
            <a href="#barbeiros">Barbeiros</a>
            <a href="#avaliacoes">Avaliacoes</a>
          </div>
        </div>
        <div>
          <p className="font-bold text-white">Informacoes de contato</p>
          <p className="mt-4 text-sm leading-6 text-barber-muted">
            Rua Jd Social Av, 120
            <br />
            Centro
            <br />
            (11) 99999-0000
            <br />
            Aberto ate as 20h
          </p>
        </div>
      </div>
    </footer>
  );
}
