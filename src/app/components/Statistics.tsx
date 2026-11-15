import { statistics } from '../lib/statistics';
import Container from './Container';

const Statistics = () => {
  return (
    <section className="border-b border-rule bg-surface">
      <Container>
        <h2 className="sr-only">Impacto en números</h2>
        <dl className="grid md:grid-cols-3">
          {statistics.map((stat, index) => (
            <div
              key={stat.id}
              className={`py-8 md:px-8 md:py-10 ${
                index > 0 ? 'border-t border-rule md:border-l md:border-t-0' : ''
              } ${index === 0 ? 'md:pl-0' : ''}`}
            >
              <dt className="label">{stat.label}</dt>
              <dd className="mt-3 font-display text-5xl leading-none tracking-tight text-ink">
                {stat.prefix}
                {stat.value}
                {stat.suffix}
              </dd>
              {stat.description && (
                <p className="mt-3 max-w-xs text-small text-muted">
                  {stat.description}
                </p>
              )}
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
};

export default Statistics;
