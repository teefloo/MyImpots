import type { Metadata } from 'next';
import Link from 'next/link';
import { taxBoxes, getTaxBoxById } from '@/data/tax-boxes';
import { SearchIcon } from '@/components/SVGIcons';
import BoxDetailClient from './BoxDetailClient';

export function generateStaticParams() {
    return taxBoxes.map((box) => ({ id: box.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const box = getTaxBoxById(id);

    if (!box) {
        return {
            title: 'Case non trouvée',
            description: 'La case fiscale demandée n\'existe pas dans notre base.',
        };
    }

    const title = `Case ${box.number} — ${box.label}`;
    const description = box.description.substring(0, 155) + (box.description.length > 155 ? '…' : '');

    return {
        title,
        description,
        openGraph: {
            title: `Case ${box.number} — ${box.label} | MyImpots`,
            description,
            images: [{ url: '/og-cases.png', width: 1200, height: 630, alt: `MyImpots — Case ${box.number} : ${box.label}` }],
        },
        twitter: {
            card: 'summary_large_image',
            title: `Case ${box.number} — ${box.label} | MyImpots`,
            description,
            images: ['/og-cases.png'],
        },
        alternates: {
            canonical: `/cases/${id}`,
        },
    };
}

export default async function BoxDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const box = getTaxBoxById(id);

    if (!box) {
        return (
            <div className="container text-center" style={{ padding: 'var(--space-16) 0' }}>
                <div className="flex-center mb-4">
                    <SearchIcon size={48} className="text-primary" style={{ opacity: 0.5 }} />
                </div>
                <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700 }} className="mb-2">Case non trouvée</h1>
                <p style={{ color: 'var(--color-text-secondary)' }}>La case demandée n&apos;existe pas dans notre base.</p>
                <Link href="/cases" className="btn btn-primary mt-6">Retour aux cases fiscales</Link>
            </div>
        );
    }

    return <BoxDetailClient box={box} />;
}
