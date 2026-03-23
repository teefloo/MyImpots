import type { Metadata } from 'next';
import CalendrierClient from './CalendrierClient';

export const metadata: Metadata = {
    title: 'Calendrier fiscal 2026 | Dates importantes de la déclaration',
    description: 'Ouverture, date limite selon votre département (zones 1, 2, 3), délais de correction. Tout le calendrier de la déclaration de revenus 2025 (en 2026).',
    openGraph: {
        title: 'Calendrier fiscal 2026 : les dates à ne pas manquer',
        description: 'Toutes les dates de la déclaration des revenus en France.',
        url: '/calendrier',
    },
    alternates: {
        canonical: '/calendrier',
    },
};

export default function CalendrierPage() {
    return <CalendrierClient />;
}

