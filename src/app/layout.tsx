import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from './components/ThemeProvider';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
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
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}