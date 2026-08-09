import type { Metadata } from 'next';
import FaqClient from './FaqClient';
import { faqEntries } from '@/data/faq';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
    title: 'FAQ impôts 2026 — déclaration des revenus 2025',
    description: 'Réponses aux questions fréquentes sur les cases fiscales, les dates, les frais réels, le prélèvement à la source et la déclaration 2026.',
    path: '/faq',
    imageAlt: 'MyImpots — FAQ impôts 2026',
});

export default function FaqPage() {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqEntries.map(entry => ({
            '@type': 'Question',
            name: entry.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: entry.answer
            }
        }))
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Accueil',
                item: 'https://myimpots.com'
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'FAQ',
                item: 'https://myimpots.com/faq'
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <FaqClient />
        </>
    );
}

