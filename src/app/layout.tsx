import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Agentation } from 'agentation';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL
    || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : null)
    || 'https://www.myimpots.com'
  ),
  title: {
    default: 'MyImpots — Déclaration de revenus 2025 : Simulateur et aide aux cases',
    template: '%s | MyImpots',
  },
  description:
    'Optimisez vos impôts 2025 avec MyImpots. Trouvez la bonne case fiscale 2042, calculez votre impôt net grâce à notre simulateur gratuit et réduisez vos impôts en toute simplicité.',
  keywords: [
    'impôts 2025',
    'déclaration impots france',
    'cases fiscales 2042',
    'simulateur impôt gratuit',
    'calcul impôt 2025',
    'tranches impots',
    'déduction frais réels',
    'micro-BIC ou réel',
    'micro-BNC',
    "crédits d'impôt",
    'réduction impôt',
    'optimisation fiscale france',
  ],
  openGraph: {
    title: 'MyImpots — Optimisez et simplifiez votre déclaration de revenus 2025',
    description: 'Ne payez plus un centime de trop ! Simulez vos impôts, trouvez les cases 2042 et optimisez votre fiscalité avec le guide gratuit MyImpots.',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'MyImpots',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'MyImpots — Votre déclaration de revenus, simplifiée',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MyImpots — Optimisez et simplifiez votre déclaration de revenus 2025',
    description: 'Simulateur gratuit, dictionnaire complet des cases 2042 et conseils fiscaux. Payez le juste impôt en 2025 au lieu de surpayer.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLdWebSite = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://www.myimpots.com/#website',
      name: 'MyImpots',
      url: 'https://www.myimpots.com',
      description: 'Guide complet pour comprendre vos impôts en France et remplir facilement votre déclaration de revenus 2025.',
      publisher: {
        '@id': 'https://myimpots.com/#organization',
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://www.myimpots.com/cases?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
      inLanguage: 'fr-FR',
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.myimpots.com/#organization',
      name: 'MyImpots',
      url: 'https://www.myimpots.com',
      logo: 'https://www.myimpots.com/logo.png',
      description: "Outils gratuits et guides pour la déclaration d'impôts en France.",
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
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
        <Analytics />
      </body>
    </html>
  );
}
