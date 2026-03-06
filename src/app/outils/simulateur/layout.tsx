import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Simulateur d\'impôt sur le revenu 2026',
    description: 'Calculez votre impôt sur le revenu avec le barème 2026 (revenus 2025). Détail par tranche, taux marginal, taux moyen et décote.',
    openGraph: {
        title: 'Simulateur d\'Impôt 2026 | MyImpots',
        description: 'Calculez gratuitement votre impôt sur le revenu 2025. Barème officiel, décote, taux marginal et taux moyen.',
        images: [
            {
                url: '/og-simulateur.png',
                width: 1200,
                height: 630,
                alt: 'MyImpots — Simulateur d\'impôt sur le revenu',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Simulateur d\'Impôt 2026 | MyImpots',
        description: 'Calculez gratuitement votre impôt sur le revenu avec le barème 2026.',
        images: ['/og-simulateur.png'],
    },
};

export default function SimulateurLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
