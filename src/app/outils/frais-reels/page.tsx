import type { Metadata } from 'next';
import FraisReelsClient from './FraisReelsClient';

export const metadata: Metadata = {
    title: 'Frais réels vs abattement 10 % — Comparateur',
    description: 'Comparez la déduction forfaitaire de 10 % avec la déduction des frais réels pour déterminer l\'option la plus avantageuse. Calcul en temps réel.',
    openGraph: {
        title: 'Frais réels vs abattement 10 % | MyImpots',
        description: 'Déterminez s\'il est plus avantageux de déduire vos frais réels ou de garder l\'abattement forfaitaire de 10 %.',
        images: [{ url: 'https://myimpots.com/logo.png', width: 1200, height: 630, alt: 'MyImpots — Comparateur frais réels' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Frais réels vs abattement 10 % | MyImpots',
        description: 'Comparez frais réels et abattement forfaitaire pour optimiser votre déclaration.',
        images: ['https://myimpots.com/logo.png'],
    },
    alternates: {
        canonical: '/outils/frais-reels',
    },
};

export default function FraisReelsPage() {
    const appSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Comparateur Frais Réels vs Abattement 10% — MyImpots',
        applicationCategory: 'FinanceApplication',
        url: 'https://myimpots.com/outils/frais-reels',
        description: 'Outil gratuit pour comparer la déduction forfaitaire de 10% et les frais réels professionnels afin de choisir l\'option la plus avantageuse.',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
        operatingSystem: 'Web',
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://myimpots.com' },
            { '@type': 'ListItem', position: 2, name: 'Outils', item: 'https://myimpots.com/outils' },
            { '@type': 'ListItem', position: 3, name: 'Frais réels', item: 'https://myimpots.com/outils/frais-reels' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="page-header">
                <h1 className="page-title">Frais réels vs abattement 10 %</h1>
                <p className="page-description">
                    Entrez vos dépenses professionnelles et comparez immédiatement l&apos;économie entre la déduction forfaitaire de 10 % et vos frais réels.
                </p>
            </div>
            <div className="container" style={{ paddingBottom: 'var(--space-16)' }}>
                <FraisReelsClient />
            </div>
        </>
    );
}
