import type { Metadata } from 'next';
import CreditsImpotClient from './CreditsImpotClient';

export const metadata: Metadata = {
    title: 'Simulateur crédits et réductions d\'impôt',
    description: 'Estimez vos crédits et réductions d\'impôt : emploi à domicile, garde d\'enfants, dons, investissements PME. Vérifiez le plafonnement des niches fiscales.',
    openGraph: {
        title: 'Crédits et Réductions d\'Impôt | MyImpots',
        description: 'Simulez vos avantages fiscaux : emploi à domicile, garde, dons, PME. Plafonnement des niches fiscales inclus.',
        images: [{ url: '/og-outils.png', width: 1200, height: 630, alt: 'MyImpots — Simulateur crédits d\'impôt' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Crédits et Réductions d\'Impôt | MyImpots',
        description: 'Estimez vos avantages fiscaux et vérifiez le plafonnement des niches fiscales.',
        images: ['/og-outils.png'],
    },
    alternates: {
        canonical: '/outils/credits-impot',
    },
};

export default function CreditsImpotPage() {
    return <CreditsImpotClient />;
}
