import type { Metadata } from 'next';
import DocumentsClient from './DocumentsClient';

export const metadata: Metadata = {
    title: 'Checklist des documents nécessaires',
    description: 'Liste complète des documents à réunir pour votre déclaration de revenus 2025. Sélectionnez votre profil et cochez au fur et à mesure.',
    openGraph: {
        title: 'Documents Nécessaires | MyImpots',
        description: 'Préparez votre déclaration : la checklist des documents à réunir selon votre profil.',
        images: [{ url: '/og-outils.png', width: 1200, height: 630, alt: 'MyImpots — Checklist documents' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Documents Nécessaires | MyImpots',
        description: 'Checklist interactive des documents pour votre déclaration de revenus.',
        images: ['/og-outils.png'],
    },
};

export default function DocumentsPage() {
    return <DocumentsClient />;
}
