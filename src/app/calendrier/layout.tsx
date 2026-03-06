import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Calendrier Fiscal 2026 — Dates limites de déclaration',
    description: 'Toutes les dates clés pour votre déclaration de revenus 2026 : ouverture en ligne, dates limites par zone, déclaration papier.',
    openGraph: {
        title: 'Calendrier Fiscal 2026 | MyImpots',
        description: 'Ne ratez aucune date ! Calendrier complet des échéances fiscales pour la déclaration de revenus 2025.',
        images: [
            {
                url: '/og-calendrier.png',
                width: 1200,
                height: 630,
                alt: 'MyImpots — Calendrier fiscal 2026 : toutes les dates clés',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Calendrier Fiscal 2026 | MyImpots',
        description: 'Toutes les dates limites de déclaration 2026 en un coup d\'œil.',
        images: ['/og-calendrier.png'],
    },
};

export default function CalendrierLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
