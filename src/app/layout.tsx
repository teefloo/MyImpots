import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Agentation } from 'agentation';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL
    || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : null)
    || 'https://myimpots.fr'
  ),
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
    description: 'Trouvez les cases fiscales, simulez votre impôt, comparez les régimes fiscaux. Tous les outils pour simplifier votre déclaration.',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'MyImpots',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MyImpots — Votre déclaration de revenus, simplifiée',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MyImpots — Votre déclaration de revenus, simplifiée',
    description: 'Trouvez les cases fiscales, simulez votre impôt, comparez les régimes. Outils gratuits pour votre déclaration 2025.',
    images: ['/og-image.png'],
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
        <div style={{ overflowX: 'clip', position: 'relative', width: '100%' }}>
          <div className="bg-blobs-container">
            {/* Animated Liquid Blobs */}
            <div className="bg-blob blob-1" />
            <div className="bg-blob blob-2" />
            <div className="bg-blob blob-3" />
          </div>

          <Header />
          <main className="main-content">{children}</main>
          <Footer />
        </div>
        {process.env.NODE_ENV === 'development' && !process.env.VERCEL && (
          <Agentation endpoint="http://localhost:4747" />
        )}
      </body>
    </html>
  );
}
