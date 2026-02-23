'use client';

import { useState } from 'react';
import { profiles, documentCategories, getDocumentsForProfile } from '@/data/documents-checklist';

export default function DocumentsPage() {
    const [selectedProfile, setSelectedProfile] = useState('tous');
    const [checked, setChecked] = useState<Set<string>>(new Set());

    const filteredCategories = getDocumentsForProfile(selectedProfile);
    const totalDocs = filteredCategories.reduce((sum, cat) => sum + cat.documents.length, 0);
    const checkedCount = checked.size;

    function toggleCheck(id: string) {
        setChecked((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    }

    return (
        <>
            <div className="page-header">
                <h1 className="page-title">📋 Documents nécessaires</h1>
                <p className="page-description">
                    Sélectionnez votre profil et cochez les documents au fur et à mesure
                </p>
            </div>

            <div className="container" style={{ paddingBottom: 'var(--space-16)' }}>
                {/* Profile selection */}
                <div className="tab-filters mb-6">
                    {profiles.map((p) => (
                        <button
                            key={p.id}
                            className={`tab-filter ${selectedProfile === p.id ? 'active' : ''}`}
                            onClick={() => { setSelectedProfile(p.id); setChecked(new Set()); }}
                        >
                            {p.icon} {p.label}
                        </button>
                    ))}
                </div>

                {/* Progress */}
                <div className="card mb-6" style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-2)' }}>
                        Progression
                    </div>
                    <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: checkedCount === totalDocs && totalDocs > 0 ? 'var(--color-success)' : 'var(--color-primary)' }}>
                        {checkedCount} / {totalDocs}
                    </div>
                    <div style={{ height: 8, background: 'var(--color-bg-tertiary)', borderRadius: 'var(--radius-full)', marginTop: 'var(--space-3)', overflow: 'hidden' }}>
                        <div style={{
                            height: '100%',
                            width: `${totalDocs > 0 ? (checkedCount / totalDocs) * 100 : 0}%`,
                            background: checkedCount === totalDocs && totalDocs > 0 ? 'var(--color-success)' : 'var(--color-primary)',
                            borderRadius: 'var(--radius-full)',
                            transition: 'width 0.3s ease',
                        }} />
                    </div>
                </div>

                {/* Document lists */}
                {filteredCategories.map((cat) => (
                    <div key={cat.id} className="card mb-6">
                        <h3 style={{ fontWeight: 600, marginBottom: 'var(--space-4)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                            {cat.icon} {cat.label}
                        </h3>
                        {cat.documents.map((doc) => (
                            <div key={doc.id} className="checklist-item" onClick={() => toggleCheck(doc.id)} style={{ cursor: 'pointer' }}>
                                <input
                                    type="checkbox"
                                    className="checklist-checkbox"
                                    checked={checked.has(doc.id)}
                                    onChange={() => toggleCheck(doc.id)}
                                    onClick={(e) => e.stopPropagation()}
                                />
                                <div>
                                    <div className="checklist-label" style={{ textDecoration: checked.has(doc.id) ? 'line-through' : 'none', opacity: checked.has(doc.id) ? 0.5 : 1 }}>
                                        {doc.label}
                                    </div>
                                    <div className="checklist-description">{doc.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
}
