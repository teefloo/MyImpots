import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cases fiscales 2025',
    description: 'Recherchez par numéro de case ou par mot-clé, filtrez par catégorie ou formulaire pour votre déclaration de revenus.',
    openGraph: {
        title: 'Cases fiscales 2025 | MyImpots',
        description: 'Trouvez facilement la définition d\'une case fiscale pour votre déclaration de revenus. Explications claires et conseils.',
        images: [{ url: '/og-cases.png', width: 1200, height: 630, alt: 'MyImpots — Dictionnaire des cases fiscales' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cases fiscales 2025 | MyImpots',
        description: 'Recherchez par numéro de case ou par mot-clé pour réussir votre déclaration.',
        images: ['/og-cases.png'],
    },
    alternates: {
        canonical: '/cases',
    },
};

export default function CasesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
