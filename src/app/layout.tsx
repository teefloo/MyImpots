import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Agentation } from 'agentation';
import { Analytics } from '@vercel/analytics/react';
import { OG_IMAGE_PATH, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL
    || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : null)
    || 'https://myimpots.com'
  ),
  title: {
    default: 'MyImpots — Déclaration de revenus 2025 et impôts 2026',
    template: '%s | MyImpots',
  },
  description:
    'Préparez votre déclaration de revenus 2025 avec MyImpots : trouvez les cases fiscales 2042 et utilisez nos simulateurs gratuits pour vos impôts 2026.',
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
        url: `${SITE_URL}${OG_IMAGE_PATH}`,
        width: 640,
        height: 640,
        alt: 'MyImpots — Votre déclaration de revenus, simplifiée',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MyImpots — Déclaration de revenus 2025 et impôts 2026',
    description: 'Simulateur gratuit, dictionnaire des cases 2042 et aide pour préparer la déclaration 2026.',
    images: ['https://myimpots.com/logo.png'],
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
      '@id': 'https://myimpots.com/#website',
      name: 'MyImpots',
      url: 'https://myimpots.com',
      description: 'Guide complet pour comprendre vos impôts en France et remplir facilement votre déclaration de revenus 2025.',
      publisher: {
        '@id': 'https://myimpots.com/#organization',
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://myimpots.com/cases?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
      inLanguage: 'fr-FR',
    },
    {
      '@type': 'Organization',
      '@id': 'https://myimpots.com/#organization',
      name: 'MyImpots',
      url: 'https://myimpots.com',
      logo: `${SITE_URL}${OG_IMAGE_PATH}`,
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
