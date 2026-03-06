import type { Metadata } from 'next';

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

export default function FAQLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
