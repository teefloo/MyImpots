import type { Metadata } from 'next';
import MicroVsReelClient from './MicroVsReelClient';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
    title: 'Micro-BIC/BNC ou régime réel — comparateur',
    description: 'Comparez le régime micro et le régime réel selon votre chiffre d’affaires et vos charges pour éclairer votre choix fiscal.',
    path: '/outils/micro-vs-reel',
    imageAlt: 'MyImpots — Comparateur micro-BIC/BNC et réel',
});

export default function MicroVsReelPage() {
    const appSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Comparateur Micro vs Régime Réel — MyImpots',
        applicationCategory: 'FinanceApplication',
        url: 'https://myimpots.com/outils/micro-vs-reel',
        description: 'Outil gratuit pour comparer le régime micro-BIC/BNC et le régime réel et choisir le plus avantageux pour votre activité.',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
        operatingSystem: 'Web',
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://myimpots.com' },
            { '@type': 'ListItem', position: 2, name: 'Outils', item: 'https://myimpots.com/outils' },
            { '@type': 'ListItem', position: 3, name: 'Micro vs Réel', item: 'https://myimpots.com/outils/micro-vs-reel' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="page-header">
                <h1 className="page-title">Micro-BIC/BNC vs régime réel</h1>
                <p className="page-description">
                    Indépendants et auto-entrepreneurs : saisissez votre chiffre d&apos;affaires et vos charges pour comparer le régime micro et le régime réel en temps réel.
                </p>
            </div>
            <div className="container" style={{ paddingBottom: 'var(--space-16)' }}>
                <MicroVsReelClient />
            </div>
        </>
    );
}
