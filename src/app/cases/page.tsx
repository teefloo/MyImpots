import type { Metadata } from 'next';
import CasesClient from './CasesClient';
import { createPageMetadata } from '@/lib/seo';

const baseMetadata = createPageMetadata({
    title: 'Dictionnaire des cases fiscales 2042 — revenus 2025',
    description: 'Recherchez une case fiscale 2042 par numéro ou mot-clé. Comprenez son rôle, les conditions à remplir et le formulaire concerné.',
    path: '/cases',
    imageAlt: 'MyImpots — Dictionnaire des cases fiscales 2042',
});

export async function generateMetadata({ searchParams }: {
    searchParams?: Promise<Record<string, string | string[] | undefined>>;
}): Promise<Metadata> {
    const params = await searchParams;
    const hasFilter = Boolean(params && Object.values(params).some((value) => value !== undefined));

    return hasFilter
        ? { ...baseMetadata, robots: { index: false, follow: true } }
        : baseMetadata;
}

export default function CasesPage() {
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Accueil',
                item: 'https://myimpots.com'
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Cases fiscales',
                item: 'https://myimpots.com/cases'
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <CasesClient />
        </>
    );
}

