import type { Metadata } from 'next';
import CreditsImpotClient from './CreditsImpotClient';

export const metadata: Metadata = {
    title: 'Simulateur crédits et réductions d\'impôt',
    description: 'Estimez vos crédits et réductions d\'impôt : emploi à domicile, garde d\'enfants, dons, investissements PME. Vérifiez le plafonnement des niches fiscales.',
    openGraph: {
        title: 'Crédits et Réductions d\'Impôt | MyImpots',
        description: 'Simulez vos avantages fiscaux : emploi à domicile, garde, dons, PME. Plafonnement des niches fiscales inclus.',
        images: [{ url: 'https://myimpots.com/logo.png', width: 1200, height: 630, alt: 'MyImpots — Simulateur crédits d\'impôt' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Crédits et Réductions d\'Impôt | MyImpots',
        description: 'Estimez vos avantages fiscaux et vérifiez le plafonnement des niches fiscales.',
        images: ['https://myimpots.com/logo.png'],
    },
    alternates: {
        canonical: '/outils/credits-impot',
    },
};

export default function CreditsImpotPage() {
    const appSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Simulateur Crédits et Réductions d\'Impôt — MyImpots',
        applicationCategory: 'FinanceApplication',
        url: 'https://myimpots.com/outils/credits-impot',
        description: 'Outil gratuit pour estimer vos crédits et réductions d\'impôt : emploi à domicile, garde d\'enfants, dons et investissements PME.',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
        operatingSystem: 'Web',
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://myimpots.com' },
            { '@type': 'ListItem', position: 2, name: 'Outils', item: 'https://myimpots.com/outils' },
            { '@type': 'ListItem', position: 3, name: 'Crédits d\'impôt', item: 'https://myimpots.com/outils/credits-impot' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="page-header">
                <h1 className="page-title">Simulateur de crédits et réductions d&apos;impôt</h1>
                <p className="page-description">
                    Estimez le montant total de vos avantages fiscaux en entrant vos dépenses éligibles. Vérifiez automatiquement le plafonnement des niches fiscales.
                </p>
            </div>
            <div className="container" style={{ paddingBottom: 'var(--space-16)' }}>
                <CreditsImpotClient />
            </div>
        </>
    );
}
