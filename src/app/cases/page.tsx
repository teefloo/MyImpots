'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { searchTaxBoxes, taxBoxes, TaxBox } from '@/data/tax-boxes';
import { categories } from '@/data/categories';
import { forms } from '@/data/forms';
import BoxCard from '@/components/BoxCard';
import { SearchIcon } from '@/components/SVGIcons';

function CasesContent() {
    const searchParams = useSearchParams();
    const initialQuery = searchParams.get('q') || '';
    const initialCategory = searchParams.get('category') || '';

    const [query, setQuery] = useState(initialQuery);
    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [selectedForm, setSelectedForm] = useState('');
    const [displayedBoxes, setDisplayedBoxes] = useState<TaxBox[]>([]);

    useEffect(() => {
        let filtered = taxBoxes;

        if (query.trim()) {
            filtered = searchTaxBoxes(query);
        }

        if (selectedCategory) {
            filtered = filtered.filter((b) => b.categoryId === selectedCategory);
        }

        if (selectedForm) {
            filtered = filtered.filter((b) => b.formId === selectedForm);
        }

        setDisplayedBoxes(filtered);
    }, [query, selectedCategory, selectedForm]);

    return (
        <>
            <div className="search-container mb-8">
                <span className="search-icon"><SearchIcon size={20} /></span>
                <input
                    type="text"
                    className="search-input-page"
                    placeholder="Rechercher par numéro (ex: 1AJ) ou mot-clé (ex: salaire, dividende, pension)..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            <div className="mb-6">
                <div className="tab-filters">
                    <button className={`tab-filter ${!selectedCategory ? 'active' : ''}`} onClick={() => setSelectedCategory('')}>
                        Toutes les catégories
                    </button>
                    {categories.map((cat) => (
                        <button key={cat.id} className={`tab-filter ${selectedCategory === cat.id ? 'active' : ''}`} onClick={() => setSelectedCategory(selectedCategory === cat.id ? '' : cat.id)}>
                            {cat.icon} {cat.label}
                        </button>
                    ))}
                </div>

                <div className="tab-filters">
                    <button className={`tab-filter ${!selectedForm ? 'active' : ''}`} onClick={() => setSelectedForm('')}>
                        Tous les formulaires
                    </button>
                    {forms.map((form) => (
                        <button key={form.id} className={`tab-filter ${selectedForm === form.id ? 'active' : ''}`} onClick={() => setSelectedForm(selectedForm === form.id ? '' : form.id)}>
                            {form.id}
                        </button>
                    ))}
                </div>
            </div>

            <p className="mb-4" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>
                {displayedBoxes.length} case{displayedBoxes.length !== 1 ? 's' : ''} trouvée{displayedBoxes.length !== 1 ? 's' : ''}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {displayedBoxes.map((box) => (
                    <BoxCard key={box.id} box={box} />
                ))}

                {displayedBoxes.length === 0 && (
                    <div className="text-center" style={{ padding: 'var(--space-16) 0', color: 'var(--color-text-secondary)' }}>
                        <div className="flex-center mb-4">
                            <SearchIcon size={48} className="text-primary" style={{ opacity: 0.5 }} />
                        </div>
                        <p style={{ fontSize: 'var(--text-lg)', fontWeight: 600 }}>Aucune case trouvée</p>
                        <p style={{ fontSize: 'var(--text-sm)' }}>Essayez un autre terme de recherche ou modifiez les filtres</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default function CasesPage() {
    return (
        <>
            <div className="page-header">
                <h1 className="page-title">Cases fiscales</h1>
                <p className="page-description">
                    Recherchez par numéro de case ou par mot-clé, filtrez par catégorie ou formulaire
                </p>
            </div>

            <div className="container" style={{ paddingBottom: 'var(--space-16)' }}>
                <Suspense fallback={<div className="text-center" style={{ padding: 'var(--space-8)' }}>Chargement...</div>}>
                    <CasesContent />
                </Suspense>
            </div>
        </>
    );
}
