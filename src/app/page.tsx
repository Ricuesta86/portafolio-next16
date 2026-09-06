import Hero from './components/Hero';
import Statistics from './components/Statistics';
import ProjectsPreview from './components/ProjectsPreview';
import ContactCTA from './components/ContactCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <ProjectsPreview />
      <ContactCTA />
    </>
  );
}