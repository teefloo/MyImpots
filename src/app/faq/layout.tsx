import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Foire aux questions',
    description: 'Réponses aux questions les plus fréquentes sur la déclaration de revenus 2025. Dates, cases, concubinage, mariage, etc.',
    openGraph: {
        title: 'FAQ | MyImpots',
        description: 'Toutes les réponses à vos questions sur la déclaration d\'impôt sur les revenus.',
        images: [{ url: '/og-faq.png', width: 1200, height: 630, alt: 'MyImpots — FAQ' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'FAQ | MyImpots',
        description: 'Trouvez rapidement une réponse à vos questions fiscales.',
        images: ['/og-faq.png'],
    },
    alternates: {
        canonical: '/faq',
    },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
