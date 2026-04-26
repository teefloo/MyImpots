import Link from 'next/link';
import { forms } from '@/data/forms';
import { taxBoxes } from '@/data/tax-boxes';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Formulaires fiscaux',
    description: 'Tous les formulaires fiscaux français : 2042, 2042-C, 2042-C-PRO, 2042-RICI, 2044, 2047.',
    openGraph: {
        title: 'Formulaires Fiscaux | MyImpots',
        description: 'Retrouvez tous les formulaires de la déclaration de revenus : 2042, 2042-C, 2042-C-PRO, 2042-RICI, 2044, 2047.',
        images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'MyImpots — Formulaires fiscaux' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Formulaires Fiscaux | MyImpots',
        description: 'Tous les formulaires de la déclaration de revenus 2025.',
        images: ['/logo.png'],
    },
    alternates: {
        canonical: '/formulaires',
    },
};

export default function FormulairesPage() {
    return (
        <>
            <div className="page-header">
                <h1 className="page-title">Formulaires fiscaux</h1>
                <p className="page-description">
                    Tous les formulaires de la déclaration de revenus 2025
                </p>
            </div>

            <div className="container" style={{ paddingBottom: 'var(--space-16)' }}>
                <div className="cards-grid">
                    {forms.map((form) => {
                        const boxCount = taxBoxes.filter((b) => b.formId === form.id).length;
                        return (
                            <div key={form.id} className="card">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-3)' }}>
                                    <span className="badge badge-primary" style={{ fontSize: 'var(--text-sm)', padding: 'var(--space-2) var(--space-3)' }}>
                                        {form.id}
                                    </span>
                                    <span className="badge badge-accent">{boxCount} cases</span>
                                </div>
                                <h3 className="card-title">{form.title}</h3>
                                <p className="card-description" style={{ fontSize: 'var(--text-xs)' }}>{form.cerfa}</p>
                                <p className="card-description mt-2">{form.description}</p>
                                <div style={{ display: 'flex', gap: 'var(--space-2)', marginTop: 'var(--space-4)', flexWrap: 'wrap' }}>
                                    <Link href={`/cases?form=${form.id}`} className="btn btn-primary" style={{ flex: 1 }}>
                                        Voir les cases
                                    </Link>
                                    <a href={form.officialUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ flex: 1 }}>
                                        Officiel ↗
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
