import type { Metadata } from 'next';
import SimulateurClient from './SimulateurClient';

export const metadata: Metadata = {
    title: 'Simulateur Impôt sur le Revenu France 2025 (Barème 2026)',
    description: 'Calculez facilement votre impôt sur le revenu avec notre simulateur gratuit et anonyme. Obtenez votre taux marginal d\'imposition (TMI) et taux moyen.',
    openGraph: {
        title: 'Simulateur Gratuit Impôt sur le Revenu 2025',
        description: 'Simulez en 2 clics le montant de votre impôt sur le revenu et votre taux marginal.',
        url: '/outils/simulateur',
    },
    alternates: {
        canonical: '/outils/simulateur',
    },
};

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
                <h1 className="page-title">Simulateur d&apos;impôt sur le revenu</h1>
                <p className="page-description">
                    Estimez votre impôt en quelques secondes grâce au barème officiel 2026 (revenus 2025). Gratuit, anonyme et sans inscription.
                </p>
            </div>
            <div className="container" style={{ paddingBottom: 'var(--space-16)' }}>
                <SimulateurClient />
            </div>
        </>
    );
}

