'use client';

import { use } from 'react';
import Link from 'next/link';
import { taxBoxes, getTaxBoxById } from '@/data/tax-boxes';
import { categories } from '@/data/categories';
import { forms } from '@/data/forms';
import { SearchIcon } from '@/components/SVGIcons';

export default function BoxDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
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

    const category = categories.find((c) => c.id === box.categoryId);
    const form = forms.find((f) => f.id === box.formId);
    const relatedBoxes = (box.relatedBoxes || [])
        .map((ref) => taxBoxes.find((b) => b.number === ref || b.id === ref))
        .filter(Boolean);

    return (
        <div className="container" style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-16)' }}>
            <Link href="/cases" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)', display: 'inline-block' }}>
                ← Retour aux cases fiscales
            </Link>

            <div className="detail-layout">
                <div>
                    <div className="detail-header">
                        <div className="detail-number">{box.number}</div>
                        <div>
                            <h1 className="detail-title">{box.label}</h1>
                            <div className="flex-align-center gap-2" style={{ flexWrap: 'wrap' }}>
                                <span className="badge badge-primary">{box.formId}</span>
                                {category && <span className="badge badge-accent">{category.icon} {category.label}</span>}
                            </div>
                        </div>
                    </div>

                    <div className="detail-section">
                        <h2 className="detail-section-title">📄 Description</h2>
                        <p className="detail-description">{box.description}</p>
                    </div>

                    {box.examples && box.examples.length > 0 && (
                        <div className="detail-section">
                            <h2 className="detail-section-title">💡 Exemples</h2>
                            {box.examples.map((example, i) => (
                                <div key={i} className="detail-example">{example}</div>
                            ))}
                        </div>
                    )}

                    {box.eligibility && (
                        <div className="detail-section">
                            <h2 className="detail-section-title">✅ Conditions d&apos;éligibilité</h2>
                            <p className="detail-description">{box.eligibility}</p>
                        </div>
                    )}

                    {relatedBoxes.length > 0 && (
                        <div className="detail-section">
                            <h2 className="detail-section-title">🔗 Cases liées</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                                {relatedBoxes.map((rb) => rb && (
                                    <Link key={rb.id} href={`/cases/${rb.id}`} className="box-card">
                                        <div className="box-number">{rb.number}</div>
                                        <div className="box-content">
                                            <div className="box-label">{rb.label}</div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="detail-sidebar">
                    <h3 style={{ fontWeight: 600, marginBottom: 'var(--space-4)' }}>Informations</h3>
                    <div className="result-row">
                        <span className="result-row-label">Case</span>
                        <span className="result-row-value">{box.number}</span>
                    </div>
                    <div className="result-row">
                        <span className="result-row-label">Formulaire</span>
                        <span className="result-row-value">{box.formId}</span>
                    </div>
                    {category && (
                        <div className="result-row">
                            <span className="result-row-label">Catégorie</span>
                            <span className="result-row-value">{category.label}</span>
                        </div>
                    )}
                    {box.officialRef && (
                        <div className="result-row">
                            <span className="result-row-label">Référence</span>
                            <span className="result-row-value" style={{ fontSize: 'var(--text-xs)' }}>{box.officialRef}</span>
                        </div>
                    )}
                    {form && (
                        <div style={{ marginTop: 'var(--space-6)' }}>
                            <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-2)', fontSize: 'var(--text-sm)' }}>
                                Formulaire {form.id}
                            </h4>
                            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                                {form.description.substring(0, 200)}…
                            </p>
                            <a href={form.officialUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary mt-4" style={{ width: '100%', fontSize: 'var(--text-xs)' }}>
                                Formulaire officiel ↗
                            </a>
                        </div>
                    )}
                    <div className="mt-4">
                        <h4 style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }} className="mb-2">Mots-clés</h4>
                        <div className="flex-align-center gap-1" style={{ flexWrap: 'wrap' }}>
                            {box.keywords.map((kw) => (
                                <span key={kw} className="badge badge-primary">{kw}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
