"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateParallax = () => {
      if (!sectionRef.current) {
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.max(-1, Math.min(1, rect.top / window.innerHeight));
      setParallaxY(progress * -56);
    };

    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-black"
    >
      <video
        className="absolute inset-x-0 -top-16 h-[calc(100%+8rem)] w-full scale-110 object-cover object-center brightness-[0.72] contrast-110 saturate-125 sepia-[0.12]"
        style={{ transform: `translate3d(0, ${parallaxY}px, 0) scale(1.1)` }}
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-editorial.png"
        aria-label="Cena de barbearia em movimento como fundo premium"
      >
        <source src="/videos/hero-motion.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.06),rgba(0,0,0,0.58)_76%),linear-gradient(180deg,rgba(0,0,0,0.2),rgba(0,0,0,0.68))]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.44),transparent_34%,transparent_66%,rgba(0,0,0,0.44))]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(215,166,74,0.08),transparent_42%,rgba(0,0,0,0.18))]" />

      <div className="section-shell relative flex min-h-[calc(100vh-4rem)] items-center justify-center py-20 text-center">
        <div className="max-w-5xl">
          <h1 className="text-[2.35rem] font-black uppercase leading-[0.92] tracking-[0.12em] text-barber-gold sm:text-7xl sm:tracking-[0.22em] lg:text-8xl">
            BarberFlow
          </h1>
          <p className="mt-5 font-serif text-3xl uppercase tracking-[0.18em] text-white sm:text-6xl sm:tracking-[0.26em] lg:text-7xl">
            ELEGÂNCIA
          </p>
          <p className="mx-auto mt-7 max-w-sm text-xs font-bold leading-7 tracking-[0.16em] text-white sm:max-w-none sm:text-base sm:tracking-[0.34em]">
            Cortes clássicos, modernos com acabamento profisional e experiência
            única
          </p>
          <div className="mt-10">
            <Link
              href="/agendamento"
              className="inline-flex rounded-full border border-barber-gold/80 px-8 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-barber-gold transition hover:bg-barber-gold hover:text-black"
            >
              Agendar consulta
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
