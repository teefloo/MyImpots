import type { Metadata } from 'next';
import { faqEntries } from '@/data/faq';

export const metadata: Metadata = {
    title: 'FAQ — Questions fréquentes sur la déclaration de revenus',
    description: 'Réponses aux questions les plus courantes sur la déclaration de revenus, les cases fiscales, les délais et les calculs.',
    openGraph: {
        title: 'FAQ Impôts | MyImpots',
        description: 'Toutes les réponses à vos questions sur la déclaration de revenus 2025.',
        images: [
            {
                url: '/og-faq.png',
                width: 1200,
                height: 630,
                alt: 'MyImpots — Questions fréquentes sur les impôts',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'FAQ Impôts | MyImpots',
        description: 'Vos questions, nos réponses. Guide pratique pour la déclaration de revenus.',
        images: ['/og-faq.png'],
    },
};

const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqEntries.map((entry) => ({
        '@type': 'Question',
        name: entry.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: entry.answer,
        },
    })),
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
            />
            {children}
        </>
    );
}
