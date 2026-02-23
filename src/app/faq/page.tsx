'use client';

import { useState } from 'react';
import { faqEntries, faqCategories } from '@/data/faq';
import { Accordion } from '@/components/Accordion';

export default function FaqPage() {
    const [openId, setOpenId] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const filtered = faqEntries.filter((e) => {
        if (selectedCategory && e.category !== selectedCategory) return false;
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            return e.question.toLowerCase().includes(q) || e.answer.toLowerCase().includes(q);
        }
        return true;
    });

    return (
        <>
            <div className="page-header">
                <h1 className="page-title">❓ Foire aux questions</h1>
                <p className="page-description">
                    Réponses aux questions les plus fréquentes sur la déclaration de revenus
                </p>
            </div>

            <div className="container" style={{ paddingBottom: 'var(--space-16)', maxWidth: 800 }}>
                {/* Search */}
                <div className="search-container mb-6">
                    <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        className="search-input-page"
                        placeholder="Rechercher dans la FAQ..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Category filters */}
                <div className="tab-filters mb-6">
                    <button
                        className={`tab-filter ${!selectedCategory ? 'active' : ''}`}
                        onClick={() => setSelectedCategory('')}
                    >
                        Toutes
                    </button>
                    {faqCategories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`tab-filter ${selectedCategory === cat.id ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(selectedCategory === cat.id ? '' : cat.id)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Accordion */}
                <div className="accordion">
                    {filtered.map((entry) => (
                        <Accordion
                            key={entry.id}
                            id={entry.id}
                            title={entry.question}
                            content={entry.answer}
                            isOpen={openId === entry.id}
                            onClick={() => setOpenId(openId === entry.id ? null : entry.id)}
                        />
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="text-center" style={{ padding: 'var(--space-12) 0', color: 'var(--color-text-secondary)' }}>
                        <p style={{ fontSize: 'var(--text-xl)' }}>🔍</p>
                        <p>Aucune question ne correspond à votre recherche</p>
                    </div>
                )}
            </div>
        </>
    );
}
