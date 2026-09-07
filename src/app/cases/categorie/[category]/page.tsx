import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import BoxCard from '@/components/BoxCard';
import { categories, getCategoryById } from '@/data/categories';
import { taxBoxes } from '@/data/tax-boxes';
import { getCategoryPagePath } from '@/lib/case-routes';
import { createPageMetadata, SITE_URL } from '@/lib/seo';

interface CategoryPageProps {
    params: Promise<{ category: string }>;
}

function getCategoryData(categoryId: string) {
    const category = getCategoryById(categoryId);
    const boxes = taxBoxes.filter((box) => box.categoryId === categoryId);

    if (!category || boxes.length === 0) {
        notFound();
    }

    return { category, boxes };
}

export function generateStaticParams() {
    return categories
        .filter((category) => taxBoxes.some((box) => box.categoryId === category.id))
        .map((category) => ({ category: category.id }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
    const { category } = getCategoryData((await params).category);

    return createPageMetadata({
        title: `Cases 2042 — ${category.label}`,
        description: `Découvrez les cases fiscales 2042 liées à ${category.label.toLowerCase()}. Explications, conditions et formulaire à remplir.`,
        path: getCategoryPagePath(category.id),
        imageAlt: `MyImpots — ${category.label}`,
    });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { category, boxes } = getCategoryData((await params).category);
    const categoryPath = getCategoryPagePath(category.id);
    const categoryLabel = category.label.toLowerCase();

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Cases fiscales', item: `${SITE_URL}/cases` },
            { '@type': 'ListItem', position: 3, name: category.label, item: `${SITE_URL}${categoryPath}` },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <div className="page-header">
                <div className="container">
                    <nav aria-label="Fil d’Ariane" style={{ marginBottom: 'var(--space-4)' }}>
                        <Link href="/cases" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>
                            ← Toutes les cases fiscales
                        </Link>
                    </nav>
                    <h1 className="page-title">{category.label}</h1>
                    <p className="page-description">{category.description}</p>
                </div>
            </div>

            <div className="container" style={{ paddingBottom: 'var(--space-16)' }}>
                <h2 className="section-title">Cases fiscales 2042 : {categoryLabel}</h2>
                <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                    Retrouvez les {boxes.length} case{boxes.length !== 1 ? 's' : ''} de la déclaration de revenus consacrées à {categoryLabel}.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                    {boxes.map((box) => (
                        <BoxCard key={box.id} box={box} />
                    ))}
                </div>
            </div>
        </>
    );
}
