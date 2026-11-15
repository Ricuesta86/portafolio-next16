import type { Metadata } from 'next';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import SkillsSection from '../components/SkillsSection';
import Timeline from '../components/Timeline';
import { skills } from '@/data/skills';
import { experiences } from '@/data/experience';

export const metadata: Metadata = {
  title: 'Sobre mí',
  description:
    'Trayectoria de Ricuesta como ingeniero de software: 20 años construyendo productos web, liderando equipos y tomando decisiones de arquitectura.',
};

const pillars = [
  {
    number: '01',
    title: 'Perfil full stack',
    description:
      'React, Next.js, Node.js y Python. Trabajo del frontend al modelo de datos y a la infraestructura que lo sostiene.',
  },
  {
    number: '02',
    title: '20 años de experiencia',
    description:
      'De sitios para agencias en 2005 a plataformas SaaS, fintech y healthtech con equipos distribuidos.',
  },
  {
    number: '03',
    title: 'Enfoque en resultados',
    description:
      'MVPs en seis semanas con alcance explícito, métricas claras y deuda técnica bajo control.',
  },
  {
    number: '04',
    title: 'Liderazgo técnico',
    description:
      'Equipos de hasta ocho desarrolladores, mentoring, code reviews y decisiones de arquitectura documentadas.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="section border-b border-rule">
        <Container>
          <p className="label">Sobre mí</p>
          <h1 className="mt-5 max-w-4xl font-display text-display text-ink">
            20 años tomando decisiones técnicas.
            <span className="block text-muted">
              Estas son las que importan.
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-body text-muted">
            Soy ingeniero de software. Mi trabajo no es acumular tecnología:
            es reducir la incertidumbre de un producto hasta que el equipo
            pueda construirlo, medirlo y mantenerlo sin depender de una sola
            persona.
          </p>
        </Container>
      </section>

      <section className="section border-b border-rule">
        <Container className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="label">Trayectoria</p>
          </div>
          <div className="grid gap-6 text-body text-muted md:col-span-8 md:grid-cols-2">
            <p>
              Empecé en 2005 construyendo sitios y aplicaciones para agencias
              digitales. Desde entonces he pasado por e-commerce, SaaS, fintech
              y salud, casi siempre en equipos pequeños con problemas grandes.
              Hoy lidero equipos de hasta ocho desarrolladores, reviso
              arquitectura y acompaño a startups de incubación desde el primer
              MVP hasta producción.
            </p>
            <p>
              Trabajo con React, TypeScript y Node.js, con Python cuando el
              problema lo pide. Me interesa la parte del oficio que no se ve:
              límites claros entre módulos, contratos explícitos, pruebas donde
              aportan y despliegues que no dependen de heroísmos. Un MVP en seis
              semanas no es una promesa de marketing; es una restricción de
              diseño.
            </p>
          </div>
        </Container>
      </section>

      <section className="section border-b border-rule">
        <Container>
          <SectionHeading
            eyebrow="Práctica"
            title="Cuatro cosas que sostienen el trabajo"
          />
          <ol className="mt-14 grid gap-0 md:grid-cols-2">
            {pillars.map((pillar, index) => (
              <li
                key={pillar.number}
                className={`border-t border-rule py-7 md:pr-10 ${
                  index % 2 === 1 ? 'md:border-l md:pl-10 md:pr-0' : ''
                }`}
              >
                <p className="font-mono text-label tracking-[0.14em] text-accent-strong">
                  {pillar.number}
                </p>
                <h3 className="mt-4 text-h3 font-semibold text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-3 max-w-md text-small text-muted">
                  {pillar.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="section border-b border-rule">
        <Container>
          <SectionHeading
            eyebrow="Herramientas"
            title="Habilidades técnicas"
            lead="Niveles cualitativos, no porcentajes. Lo que puedo sostener en un equipo y lo que todavía estoy profundizando."
          />
          <div className="mt-14">
            <SkillsSection skills={skills} />
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Cronología"
            title="Experiencia y educación"
            lead="Dónde he trabajado, qué construí y qué aprendí en cada etapa."
          />
          <div className="mt-14">
            <Timeline experiences={experiences} />
          </div>
        </Container>
      </section>
    </>
  );
}
