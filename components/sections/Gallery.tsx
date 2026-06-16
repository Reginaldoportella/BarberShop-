import Image from "next/image";

const galleryItems = [
  {
    title: "Precisao no detalhe",
    image: "/images/gallery/cut-detail.jpg",
    span: "lg:col-span-2",
  },
  {
    title: "Finalizacao premium",
    image: "/images/gallery/styling-chair.jpg",
    span: "",
  },
  {
    title: "Acabamento classico",
    image: "/images/gallery/classic-finish.jpg",
    span: "",
  },
  {
    title: "Linha precisa",
    image: "/images/gallery/fade-line.jpg",
    span: "lg:col-span-2",
  },
  {
    title: "Ritual de barba",
    image: "/images/gallery/beard-ritual.jpg",
    span: "lg:col-span-2",
  },
  {
    title: "Barba sob medida",
    image: "/images/gallery/beard-trim.jpg",
    span: "",
  },
  {
    title: "Ambiente autoral",
    image: "/images/gallery/salon-chair.jpg",
    span: "",
  },
  {
    title: "Espaco do cliente",
    image: "/images/gallery/barber-interior.jpg",
    span: "lg:col-span-2",
  },
];

export function Gallery() {
  return (
    <section id="galeria" className="bg-[#061111] py-20 sm:py-28">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="luxury-label">Galeria</p>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-[0.08em] text-white sm:text-5xl">
              A assinatura visual
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-barber-muted">
            A assinatura visual Cada imagem do BarberFlow foi pensada para
            transmitir uma experiência de barbearia premium, com visual
            elegante, moderno e sofisticado.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <article
              key={item.title}
              className={`premium-card-motion group relative min-h-[340px] overflow-hidden bg-black sm:min-h-[420px] ${item.span}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover brightness-[0.78] contrast-110 saturate-90 transition duration-700 group-hover:scale-105 group-hover:brightness-90"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/12 to-black/10" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
