import Container from './Container';
import ButtonLink from './ButtonLink';

const ContactCTA = () => {
  return (
    <section className="section">
      <Container>
        <div className="border-t-2 border-accent bg-surface px-6 py-10 sm:px-10 md:flex md:items-end md:justify-between md:gap-12">
          <div className="max-w-2xl">
            <p className="label">Siguiente paso</p>
            <h2 className="mt-4 font-display text-h2 text-ink">
              ¿Tienes un producto que necesita criterio técnico?
            </h2>
            <p className="mt-4 text-body text-muted">
              Cuéntame qué estás construyendo, dónde está el riesgo y qué
              decisión tienes pendiente. Te respondo con una primera lectura
              concreta.
            </p>
          </div>
          <ButtonLink href="/contact" className="mt-8 shrink-0 md:mt-0">
            Hablemos de tu proyecto <span aria-hidden="true">→</span>
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
};

export default ContactCTA;
