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
        <div className="bg-blobs-container">
          {/* Animated Liquid Blobs */}
          <div className="bg-blob blob-1" />
          <div className="bg-blob blob-2" />
          <div className="bg-blob blob-3" />
        </div>

        <Header />
        <main className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
