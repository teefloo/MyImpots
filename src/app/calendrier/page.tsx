import type { Metadata } from 'next';
import CalendrierClient from './CalendrierClient';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
    title: 'Calendrier fiscal 2026 — déclaration des revenus 2025',
    description: 'Retrouvez l’ouverture, la date papier du 19 mai, les dates en ligne par zone et les principales échéances fiscales 2026.',
    path: '/calendrier',
    imageAlt: 'MyImpots — Calendrier fiscal 2026',
});

export default function CalendrierPage() {
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://myimpots.com' },
            { '@type': 'ListItem', position: 2, name: 'Calendrier', item: 'https://myimpots.com/calendrier' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="page-header">
                <h1 className="page-title">Calendrier fiscal 2026</h1>
                <p className="page-description">
                    Toutes les dates clés de la déclaration de revenus 2025 : ouverture le 9 avril, date papier le 19 mai, puis dates limites en ligne par zone.
                </p>
            </div>
            <div className="container" style={{ paddingBottom: 'var(--space-16)' }}>
                <CalendrierClient />
            </div>
        </>
    );
}

