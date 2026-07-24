import type { Metadata } from 'next';
import DocumentsClient from './DocumentsClient';

export const metadata: Metadata = {
    title: 'Checklist des documents nécessaires',
    description: 'Liste complète des documents à réunir pour votre déclaration de revenus 2025 : pièces d\'identité, justificatifs de revenus, attestations. Sélectionnez votre profil.',
    openGraph: {
        title: 'Documents Nécessaires | MyImpots',
        description: 'Préparez votre déclaration : la checklist des documents à réunir selon votre profil.',
        images: [{ url: 'https://myimpots.com/logo.png', width: 1200, height: 630, alt: 'MyImpots — Checklist documents' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Documents Nécessaires | MyImpots',
        description: 'Checklist interactive des documents pour votre déclaration de revenus.',
        images: ['https://myimpots.com/logo.png'],
    },
    alternates: {
        canonical: '/outils/documents',
    },
};

export default function DocumentsPage() {
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://myimpots.com' },
            { '@type': 'ListItem', position: 2, name: 'Outils', item: 'https://myimpots.com/outils' },
            { '@type': 'ListItem', position: 3, name: 'Documents', item: 'https://myimpots.com/outils/documents' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="page-header">
                <h1 className="page-title">Checklist des documents</h1>
                <p className="page-description">
                    Sélectionnez votre profil et obtenez la liste personnalisée des documents à réunir avant de commencer votre déclaration de revenus 2025.
                </p>
            </div>
            <div className="container" style={{ paddingBottom: 'var(--space-16)' }}>
                <DocumentsClient />
            </div>
        </>
    );
}
