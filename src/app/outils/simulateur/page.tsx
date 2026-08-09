import type { Metadata } from 'next';
import SimulateurClient from './SimulateurClient';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
    title: 'Simulateur d’impôt 2026 — revenus 2025',
    description: 'Calculez gratuitement votre impôt sur le revenu 2025 avec le barème 2026. Obtenez votre taux marginal et votre taux moyen.',
    path: '/outils/simulateur',
    imageAlt: 'MyImpots — Simulateur d’impôt 2026',
});

export default function SimulateurPage() {
    const appSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Simulateur d\'Impôt sur le Revenu MyImpots',
        applicationCategory: 'FinanceApplication',
        url: 'https://myimpots.com/outils/simulateur',
        description: 'Simulateur gratuit pour calculer votre impôt sur le revenu en France avec le barème 2026 applicable aux revenus 2025.',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'EUR',
        },
        operatingSystem: 'Web',
        permissions: 'Aucune inscription requise',
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://myimpots.com' },
            { '@type': 'ListItem', position: 2, name: 'Outils', item: 'https://myimpots.com/outils' },
            { '@type': 'ListItem', position: 3, name: 'Simulateur', item: 'https://myimpots.com/outils/simulateur' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="page-header">
                <h1 className="page-title">Simulateur d&apos;impôt sur le revenu 2026</h1>
                <p className="page-description">
                    Estimez votre impôt sur les revenus 2025 avec le barème officiel 2026. Gratuit, anonyme et sans inscription.
                </p>
            </div>
            <div className="container" style={{ paddingBottom: 'var(--space-16)' }}>
                <SimulateurClient />
            </div>
        </>
    );
}

