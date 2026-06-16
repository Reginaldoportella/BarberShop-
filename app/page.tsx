import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { Barbers } from "@/components/sections/Barbers";
import { Contact } from "@/components/sections/Contact";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Reveal>
          <Services />
        </Reveal>
        <Reveal delay={80}>
          <Barbers />
        </Reveal>
        <Reveal delay={120}>
          <Gallery />
        </Reveal>
        <Reveal delay={80}>
          <Testimonials />
        </Reveal>
        <Reveal delay={120}>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
