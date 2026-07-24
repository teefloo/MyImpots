import type { Metadata } from 'next';
import CalendrierClient from './CalendrierClient';

export const metadata: Metadata = {
    title: 'Calendrier fiscal 2026 | Dates importantes de la déclaration',
    description: 'Ouverture, date limite selon votre département (zones 1, 2, 3), délais de correction. Tout le calendrier de la déclaration de revenus 2025 (en 2026).',
    openGraph: {
        title: 'Calendrier fiscal 2026 : les dates à ne pas manquer',
        description: 'Toutes les dates de la déclaration des revenus en France.',
        url: '/calendrier',
        images: [{ url: 'https://myimpots.com/logo.png', width: 1200, height: 630, alt: 'MyImpots — Calendrier fiscal' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Calendrier fiscal 2026 | MyImpots',
        description: 'Ouverture, date limite par zone, délais de correction. Ne manquez aucune échéance.',
        images: ['https://myimpots.com/logo.png'],
    },
    alternates: {
        canonical: '/calendrier',
    },
};

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
                    Toutes les dates clés de la déclaration de revenus 2025 : ouverture le 10 avril, date limite par zone (1er, 26 mai, 8 juin) et délais de télédéclaration.
                </p>
            </div>
            <div className="container" style={{ paddingBottom: 'var(--space-16)' }}>
                <CalendrierClient />
            </div>
        </>
    );
}

