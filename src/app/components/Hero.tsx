import Image from 'next/image';
import Container from './Container';
import ButtonLink from './ButtonLink';

const Hero = () => {
  return (
    <section className="border-b border-rule">
      <Container className="grid min-h-[calc(100svh-72px)] items-center gap-12 py-16 md:grid-cols-12 md:gap-8 md:py-24">
        <div className="md:col-span-7">
          <div className="hero-enter">
            <p className="label">Ricuesta · Ingeniero de software</p>

            <h1 className="mt-6 max-w-3xl font-display text-display text-ink">
              Software que aguanta el crecimiento.
            </h1>

            <p className="mt-7 max-w-xl text-body text-muted">
              Llevo 20 años construyendo productos web: de la primera idea al
              sistema en producción, con decisiones técnicas que el equipo puede
              sostener.
            </p>

            <p className="mt-6 flex items-center gap-2 font-mono text-label uppercase tracking-[0.14em] text-muted">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-accent"
              />
              Disponible para nuevos proyectos
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/projects">
                Ver proyectos <span aria-hidden="true">→</span>
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline">
                Hablemos
              </ButtonLink>
            </div>
          </div>
        </div>

        <div className="hero-portrait md:col-span-5 md:justify-self-end">
          <div className="relative w-full max-w-[380px] overflow-hidden border border-rule bg-surface md:ml-auto">
            <Image
              src="/imagen/imagen1.jpeg"
              width={800}
              height={1000}
              sizes="(max-width: 767px) 90vw, 380px"
              alt="Retrato de Ricuesta, ingeniero de software"
              className="aspect-[4/5] w-full object-cover grayscale"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
