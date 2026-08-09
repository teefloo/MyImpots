import type { Metadata } from 'next';
import DocumentsClient from './DocumentsClient';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
    title: 'Checklist des documents — déclaration 2026',
    description: 'Préparez votre déclaration de revenus 2025 avec une checklist personnalisée des pièces d’identité, revenus et justificatifs nécessaires.',
    path: '/outils/documents',
    imageAlt: 'MyImpots — Checklist des documents fiscaux',
});

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
                <h1 className="page-title">Checklist des documents pour la déclaration 2026</h1>
                <p className="page-description">
                    Sélectionnez votre profil et obtenez la liste personnalisée des documents à réunir pour déclarer vos revenus 2025.
                </p>
            </div>
            <div className="container" style={{ paddingBottom: 'var(--space-16)' }}>
                <DocumentsClient />
            </div>
        </>
    );
}
