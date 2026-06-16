import Link from "next/link";

const navItems = [
  { label: "SERVIÇOS", href: "#servicos" },
  { label: "GALERIA", href: "#galeria" },
  { label: "EQUIPE", href: "#barbeiros" },
  { label: "AVALIAÇÕES", href: "#avaliacoes" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/95 backdrop-blur-md">
      <div className="section-shell flex h-16 items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3" aria-label="BarberFlow">
          <span className="font-serif text-base font-semibold uppercase tracking-[0.22em] text-barber-gold sm:text-xl sm:tracking-[0.34em]">
            BarberFlow
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-xs font-medium tracking-[0.28em] text-barber-cream/90 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-barber-gold">
              {item.label}
            </a>
          ))}
        </nav>

        <Link
          href="/agendamento"
          className="whitespace-nowrap rounded-full border border-barber-gold px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-barber-gold transition hover:bg-barber-gold hover:text-black sm:text-[11px] sm:tracking-[0.28em]"
        >
          Reserve
        </Link>
      </div>
    </header>
  );
}
