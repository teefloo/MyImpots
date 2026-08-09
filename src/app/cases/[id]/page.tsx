import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';

import { taxBoxes, getTaxBoxById } from '@/data/tax-boxes';
import type { TaxBox } from '@/data/tax-boxes';
import Link from 'next/link';
import { createPageMetadata } from '@/lib/seo';
import BoxDetailClient from './BoxDetailClient';

export function generateStaticParams() {
    return taxBoxes.map((box) => ({ id: box.id }));
}

function truncateAtWordBoundary(text: string, maxLength: number): string {
    if (text.length <= maxLength) {
        return text;
    }

    const truncated = text.substring(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');

    return `${truncated.substring(0, lastSpace)}…`;
}

function getTaxBoxByCanonicalId(id: string): TaxBox {
    const exactBox = getTaxBoxById(id);

    if (exactBox) {
        return exactBox;
    }

    const canonicalBox = taxBoxes.find((box) => box.id.toLowerCase() === id.toLowerCase());

    if (canonicalBox) {
        permanentRedirect(`/cases/${canonicalBox.id}`);
    }

    notFound();
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const box = getTaxBoxByCanonicalId(id);

    const title = `Case ${box.number} — ${box.label}`;
    const description = truncateAtWordBoundary(box.description, 155);

    return createPageMetadata({
        title,
        description,
        path: `/cases/${box.id}`,
        imageAlt: `MyImpots — Case ${box.number} : ${box.label}`,
    });
}

export default async function BoxDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const box = getTaxBoxByCanonicalId(id);

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
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: `Case ${box.number}`,
                item: `https://myimpots.com/cases/${id}`
            }
        ]
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: `Qu'est-ce que la case ${box.number} — ${box.label} ?`,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: box.description,
                },
            },
            ...(box.eligibility
                ? [
                    {
                        '@type': 'Question',
                        name: `Qui est éligible à la case ${box.number} ?`,
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: box.eligibility,
                        },
                    },
                ]
                : []),
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <section className="section" style={{ paddingBottom: 0 }}>
                <div className="container" style={{ maxWidth: 800 }}>
                    <nav style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)' }}>
                        <Link href="/" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Accueil</Link>
                        <span style={{ margin: '0 var(--space-2)' }}>/</span>
                        <Link href="/cases" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Cases fiscales</Link>
                        <span style={{ margin: '0 var(--space-2)' }}>/</span>
                        <span>Case {box.number}</span>
                    </nav>
                    <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, marginBottom: 'var(--space-3)' }}>
                        Case {box.number} : {box.label}
                    </h1>
                    <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-2)' }}>
                        La case <strong>{box.number}</strong> du formulaire 2042 est utilisée pour déclarer {box.label.toLowerCase()}. Retrouvez ci-dessous les conditions d&apos;éligibilité, les montants à renseigner et les conseils pour compléter votre déclaration.
                    </p>
                    <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                        Référence officielle : <a href="https://www.impots.gouv.fr/formulaire/2042/declaration-des-revenus" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>formulaire 2042 — impots.gouv.fr</a>
                    </p>
                </div>
            </section>
            <BoxDetailClient box={box} />
        </>
    );
}
