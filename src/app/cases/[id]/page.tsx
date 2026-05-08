import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';

import { taxBoxes, getTaxBoxById } from '@/data/tax-boxes';
import type { TaxBox } from '@/data/tax-boxes';
import BoxDetailClient from './BoxDetailClient';

export function generateStaticParams() {
    return taxBoxes.map((box) => ({ id: box.id }));
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
    const description = box.description.substring(0, 155) + (box.description.length > 155 ? '…' : '');

    return {
        title,
        description,
        openGraph: {
            title: `Case ${box.number} — ${box.label} | MyImpots`,
            description,
            images: [{ url: '/logo.png', width: 1200, height: 630, alt: `MyImpots — Case ${box.number} : ${box.label}` }],
        },
        twitter: {
            card: 'summary_large_image',
            title: `Case ${box.number} — ${box.label} | MyImpots`,
            description,
            images: ['/logo.png'],
        },
        alternates: {
            canonical: `/cases/${id}`,
        },
    };
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

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <BoxDetailClient box={box} />
        </>
    );
}
