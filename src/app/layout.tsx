import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'MyImpots — Guide des cases fiscales et outils pour votre déclaration de revenus 2025',
    template: '%s | MyImpots',
  },
  description:
    'Trouvez facilement le numéro d\'une case fiscale, comprenez à quoi elle correspond, et utilisez nos outils (simulateur, comparateurs) pour remplir votre déclaration de revenus 2025.',
  keywords: [
    'impôts',
    'déclaration revenus',
    'cases fiscales',
    'formulaire 2042',
    'simulateur impôt',
    'frais réels',
    'micro-BIC',
    'micro-BNC',
    'crédits impôt',
    'revenus 2025',
  ],
  openGraph: {
    title: 'MyImpots — Guide complet de la déclaration de revenus 2025',
    description: 'Trouvez les cases fiscales, simulez votre impôt, comparez les régimes fiscaux.',
    type: 'website',
    locale: 'fr_FR',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -2,
          overflow: 'hidden',
          background: 'var(--color-bg)',
          pointerEvents: 'none'
        }}>
          {/* Animated Liquid Blobs */}
          <div style={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '60vw',
            height: '60vw',
            background: 'var(--color-primary-light)',
            borderRadius: 'var(--radius-organic-1)',
            filter: 'blur(60px)',
            opacity: 0.8
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-20%',
            right: '-10%',
            width: '70vw',
            height: '70vw',
            background: 'var(--color-accent-light)',
            borderRadius: 'var(--radius-organic-2)',
            filter: 'blur(80px)',
            opacity: 0.6
          }} />
          <div style={{
            position: 'absolute',
            top: '30%',
            left: '40%',
            width: '40vw',
            height: '40vw',
            background: 'var(--color-info-light)',
            borderRadius: 'var(--radius-organic-1)',
            filter: 'blur(50px)',
            opacity: 0.5
          }} />
        </div>

        <Header />
        <main style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
