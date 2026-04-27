import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Calendrier fiscal 2026',
    description: 'Toutes les dates clés pour la déclaration des revenus 2025 : ouverture, fermeture par zone, avis d\'imposition.',
    openGraph: {
        title: 'Calendrier Fiscal 2026 | MyImpots',
        description: 'Ne ratez aucune échéance pour votre déclaration de revenus. Vérifiez les dates de votre département.',
        images: [{ url: '/og-calendrier.png', width: 1200, height: 630, alt: 'MyImpots — Calendrier fiscal' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Calendrier Fiscal 2026 | MyImpots',
        description: 'Trouvez votre date limite de déclaration selon votre zone.',
        images: ['/og-calendrier.png'],
    },
    alternates: {
        canonical: '/calendrier',
    },
};

export default function CalendrierLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
