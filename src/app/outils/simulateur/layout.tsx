import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Simulateur d\'impôt sur le revenu 2026',
    description: 'Calculez rapidement votre impôt sur le revenu avec le nouveau barème 2026 (revenus 2025). Obtenez votre taux marginal et taux moyen.',
    openGraph: {
        title: 'Simulateur d\'Impôt 2026 | MyImpots',
        description: 'Estimez votre impôt, identifiez votre tranche marginale et comparez votre taux moyen. Gratuit et sans inscription.',
        images: [{ url: '/og-simulateur.png', width: 1200, height: 630, alt: 'MyImpots — Simulateur d\'impôt' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Simulateur d\'Impôt 2026 | MyImpots',
        description: 'Calculez votre impôt sur le revenu en 1 minute chrono.',
        images: ['/og-simulateur.png'],
    },
    alternates: {
        canonical: '/outils/simulateur',
    },
};

export default function SimulateurLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
