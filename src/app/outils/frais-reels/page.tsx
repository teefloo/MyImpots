import type { Metadata } from 'next';
import FraisReelsClient from './FraisReelsClient';

export const metadata: Metadata = {
    title: 'Frais réels vs abattement 10 % — Comparateur',
    description: 'Comparez la déduction forfaitaire de 10 % avec la déduction des frais réels pour déterminer l\'option la plus avantageuse.',
    openGraph: {
        title: 'Frais réels vs abattement 10 % | MyImpots',
        description: 'Déterminez s\'il est plus avantageux de déduire vos frais réels ou de garder l\'abattement forfaitaire de 10 %.',
        images: [{ url: '/og-outils.png', width: 1200, height: 630, alt: 'MyImpots — Comparateur frais réels' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Frais réels vs abattement 10 % | MyImpots',
        description: 'Comparez frais réels et abattement forfaitaire pour optimiser votre déclaration.',
        images: ['/og-outils.png'],
    },
};

export default function FraisReelsPage() {
    return <FraisReelsClient />;
}
