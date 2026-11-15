import Container from './Container';
import SectionHeading from './SectionHeading';

const steps = [
  {
    number: '01',
    title: 'Diagnóstico',
    description:
      'Entiendo el negocio, el alcance y los riesgos antes de proponer una línea de código.',
  },
  {
    number: '02',
    title: 'Arquitectura',
    description:
      'Elijo las piezas que el producto necesita hoy y dejan sitio a lo que viene después.',
  },
  {
    number: '03',
    title: 'Entrega',
    description:
      'Trabajo en ciclos cortos con software funcionando, revisión continua y decisiones documentadas.',
  },
];

const Process = () => {
  return (
    <section className="section border-b border-rule">
      <Container>
        <SectionHeading
          eyebrow="Método"
          title="Cómo trabajo"
          lead="Un proceso corto, explícito y medible. Menos ceremonia, más decisiones que se pueden revisar."
        />

        <ol className="mt-14 grid gap-0 md:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.number}
              className={`border-t border-rule py-7 md:pr-8 ${
                index > 0 ? 'md:border-l md:pl-8' : ''
              }`}
            >
              <p className="font-mono text-label tracking-[0.14em] text-accent-strong">
                {step.number}
              </p>
              <h3 className="mt-4 text-h3 font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-small text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
};

export default Process;
