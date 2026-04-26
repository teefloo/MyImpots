import type { Metadata } from 'next';
import FaqClient from './FaqClient';
import { faqEntries } from '@/data/faq';

export const metadata: Metadata = {
    title: 'Foire Aux Questions (FAQ) — Impôts France 2025',
    description: 'Toutes les réponses à vos questions sur la déclaration de revenus, les dates clés, les frais réels, le prélèvement à la source et plus encore.',
    openGraph: {
        title: 'Foire Aux Questions (FAQ) — Impôts France',
        description: 'Toutes les réponses à vos questions sur la déclaration de revenus.',
        url: '/faq',
    },
    alternates: {
        canonical: '/faq',
    },
};

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

