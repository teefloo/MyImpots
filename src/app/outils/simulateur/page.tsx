import type { Metadata } from 'next';
import SimulateurClient from './SimulateurClient';

export const metadata: Metadata = {
    title: 'Simulateur Impôt sur le Revenu France 2025 (Barème 2026)',
    description: 'Calculez facilement votre impôt sur le revenu avec notre simulateur gratuit et anonyme. Obtenez votre taux marginal d\'imposition (TMI) et taux moyen.',
    openGraph: {
        title: 'Simulateur Gratuit Impôt sur le Revenu 2025',
        description: 'Simulez en 2 clics le montant de votre impôt sur le revenu et votre taux marginal.',
        url: '/outils/simulateur',
    },
    alternates: {
        canonical: '/outils/simulateur',
    },
};

export default function SimulateurPage() {
    return <SimulateurClient />;
}

