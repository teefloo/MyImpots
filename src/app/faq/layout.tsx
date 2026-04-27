import type { Metadata } from 'next';
import { faqEntries } from '@/data/faq';

export const metadata: Metadata = {
    title: 'FAQ Impôts 2025 | Toutes les réponses à vos questions fiscales',
    description: 'Concubinage, frais réels, délais, tranches : trouvez toutes les réponses aux questions les plus fréquentes sur la déclaration de revenus 2025 en France.',
    openGraph: {
        title: 'FAQ Impôts 2025 | MyImpots',
        description: 'Toutes les réponses à vos questions sur la déclaration d\'impôt sur les revenus.',
        images: [{ url: '/og-faq.png', width: 1200, height: 630, alt: 'MyImpots — FAQ' }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'FAQ Impôts 2025 | MyImpots',
        description: 'Trouvez rapidement une réponse à vos questions fiscales.',
        images: ['/og-faq.png'],
    },
    alternates: {
        canonical: '/faq',
    },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqEntries.map(entry => ({
            '@type': 'Question',
            name: entry.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: entry.answer,
            },
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            {children}
        </>
    );
}
