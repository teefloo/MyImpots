import type { Metadata } from 'next';
import CasesClient from './CasesClient';

export const metadata: Metadata = {
    title: 'Dictionnaire des cases fiscales 2042 — Impôts 2025',
    description: 'Recherchez une case fiscale par numéro (ex: 1AJ, 2CG, 7FF) ou mot-clé. Découvrez comment chaque case modifie votre impôt : salaire, revenus fonciers, cryptos...',
    openGraph: {
        title: 'Dictionnaire Complet des Cases Fiscales 2042',
        description: 'Trouvez, comprenez et optimisez n’importe quelle case fiscale pour votre déclaration.',
        url: '/cases',
    },
    alternates: {
        canonical: '/cases',
    },
};

export default function CasesPage() {
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Accueil',
                item: 'https://www.myimpots.com'
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Cases fiscales',
                item: 'https://www.myimpots.com/cases'
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <CasesClient />
        </>
    );
}

