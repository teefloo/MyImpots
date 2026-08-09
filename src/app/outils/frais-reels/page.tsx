import type { Metadata } from 'next';
import FraisReelsClient from './FraisReelsClient';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
    title: 'Frais réels ou abattement de 10 % — comparateur',
    description: 'Comparez la déduction forfaitaire de 10 % avec vos frais réels pour choisir l’option la plus avantageuse dans votre déclaration.',
    path: '/outils/frais-reels',
    imageAlt: 'MyImpots — Comparateur frais réels',
});

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
