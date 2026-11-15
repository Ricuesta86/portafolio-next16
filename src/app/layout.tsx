import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ThemeProvider } from './components/ThemeProvider';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';

const inter = localFont({
  src: './fonts/inter-latin.woff2',
  variable: '--font-inter',
  display: 'swap',
  weight: '100 900',
});

const newsreader = localFont({
  src: [
    {
      path: './fonts/newsreader-latin.woff2',
      weight: '200 800',
      style: 'normal',
    },
    {
      path: './fonts/newsreader-latin-italic.woff2',
      weight: '200 800',
      style: 'italic',
    },
  ],
  variable: '--font-newsreader',
  display: 'swap',
});

const jetbrainsMono = localFont({
  src: './fonts/jetbrains-mono-latin.woff2',
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: '400 800',
});

export const metadata: Metadata = {
  title: {
    default: 'Ricuesta | Ingeniero de Software',
    template: '%s | Ricuesta',
  },
  description:
    'Portafolio de Ricuesta, Ingeniero de Software y Full Stack Developer. Especialista en React, Node.js, TypeScript y Python.',
  keywords: [
    'ingeniero de software',
    'full stack developer',
    'react',
    'typescript',
    'node.js',
    'python',
    'portafolio',
  ],
  openGraph: {
    title: 'Ricuesta | Ingeniero de Software',
    description:
      'Portafolio profesional de Ricuesta - Ingeniero de Software especializado en React, Node.js, TypeScript y Python.',
    type: 'website',
    locale: 'es_ES',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${newsreader.variable} ${jetbrainsMono.variable} font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a href="#contenido" className="skip-link">
            Saltar al contenido
          </a>
          <div className="flex min-h-screen flex-col bg-paper text-ink">
            <Header />
            <main id="contenido" tabIndex={-1} className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
