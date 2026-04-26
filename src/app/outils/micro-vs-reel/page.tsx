import type { Metadata } from 'next';
import MicroVsReelClient from './MicroVsReelClient';

export const metadata: Metadata = {
    title: 'Micro-BIC/BNC vs régime réel — Comparateur',
    description: 'Auto-entrepreneurs : comparez le régime micro (abattement forfaitaire) et le régime réel (déduction des charges) pour optimiser votre imposition.',
    openGraph: {
        title: 'Micro vs Réel | MyImpots',
        description: 'Comparez le régime micro-BIC/BNC et le régime réel pour déterminer le plus avantageux.',
        images: [{ url: '/og-outils.png', width: 1200, height: 630, alt: 'MyImpots — Comparateur micro vs réel' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Micro vs Réel | MyImpots',
        description: 'Auto-entrepreneurs : quel régime fiscal choisir ? Comparez micro et réel.',
        images: ['/og-outils.png'],
    },
    alternates: {
        canonical: '/outils/micro-vs-reel',
    },
};

export default function MicroVsReelPage() {
    return <MicroVsReelClient />;
}
