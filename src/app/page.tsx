// app/page.tsx
import Hero from './components/Hero';
import Statistics from './components/Statistics';

export default function Home() {
  return (
    <main>
      <Hero />
      <Statistics />
      {/* Aquí irán otros componentes como ProjectsPreview, etc. */}
    </main>
  );
}