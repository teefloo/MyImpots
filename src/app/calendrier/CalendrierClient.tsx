'use client';

import { useState } from 'react';
import { calendarEvents, getDepartmentZone } from '@/data/calendar';
import { CalendarIcon, HomeIcon } from '@/components/SVGIcons';

export default function CalendrierClient() {
    const [dept, setDept] = useState('');
    const zone = dept ? getDepartmentZone(dept) : null;

    const formatDate = (dateStr: string) => {
        const d = new Date(dateStr);
        return d.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    };

    return (
        <>
            <div className="page-header">
                <h1 className="page-title flex-center gap-3">
                    <CalendarIcon size={32} className="text-primary" />
                    Calendrier fiscal 2026
                </h1>
                <p className="page-description">
                    Toutes les dates clés pour la déclaration des revenus 2025
                </p>
            </div>

            <div className="container" style={{ paddingBottom: 'var(--space-16)', maxWidth: 800 }}>
                {/* Department selector */}
                <div className="card mb-8">
                    <h3 className="flex-align-center gap-2 mb-3" style={{ fontWeight: 600 }}>
                        <HomeIcon size={20} className="text-primary" />
                        Votre date limite personnelle
                    </h3>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                        <label className="form-label">Numéro de votre département</label>
                        <input
                            type="text"
                            className="form-input"
                            placeholder="Ex : 75 pour Paris"
                            value={dept}
                            onChange={(e) => setDept(e.target.value)}
                            maxLength={3}
                            style={{ maxWidth: 200 }}
                        />
                    </div>
                    {zone && (
                        <div style={{ marginTop: 'var(--space-3)', padding: 'var(--space-3)', background: 'var(--color-primary-light)', borderRadius: 'var(--radius-md)' }}>
                            <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-primary)' }}>
                                {zone.zone}
                            </p>
                            <p style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--color-primary)' }}>
                                Date limite : {zone.deadline}
                            </p>
                        </div>
                    )}
                </div>

                {/* SEO: Zones and Departments detailed table */}
                <div className="card mb-8">
                    <h2 className="flex-align-center gap-2 mb-4" style={{ fontWeight: 700, fontSize: 'var(--text-xl)', color: 'var(--color-text)' }}>
                        Calendrier déclaration impôts 2026 : zones et départements
                    </h2>
                    <p className="mb-4" style={{ lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
                        La date limite de votre déclaration de revenus dépend de votre département de résidence principale. La France est divisée en 3 zones fiscales officielles pour réguler l&apos;afflux sur les serveurs de l&apos;administration. Voici la répartition officielle par département :
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--space-4)' }}>
                        <div style={{ borderLeft: '4px solid var(--color-primary)', paddingLeft: 'var(--space-3)' }}>
                            <h4 style={{ fontWeight: 600, color: 'var(--color-primary)' }}>Zone 1</h4>
                            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>Départements 01 à 19 (Ain à Corrèze) + Étranger</p>
                            <p style={{ fontWeight: 600, marginTop: 'var(--space-1)' }}>Date limite : 21 mai 2026</p>
                        </div>
                        <div style={{ borderLeft: '4px solid var(--color-warning)', paddingLeft: 'var(--space-3)' }}>
                            <h4 style={{ fontWeight: 600, color: 'var(--color-warning)' }}>Zone 2</h4>
                            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>Départements 20 à 54 (Corse à Meurthe-et-Moselle)</p>
                            <p style={{ fontWeight: 600, marginTop: 'var(--space-1)' }}>Date limite : 28 mai 2026</p>
                        </div>
                        <div style={{ borderLeft: '4px solid var(--color-error)', paddingLeft: 'var(--space-3)' }}>
                            <h4 style={{ fontWeight: 600, color: 'var(--color-error)' }}>Zone 3</h4>
                            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>Départements 55 à 974/976 (Meuse à La Réunion)</p>
                            <p style={{ fontWeight: 600, marginTop: 'var(--space-1)' }}>Date limite : 4 juin 2026</p>
                        </div>
                    </div>
                </div>

                {/* Timeline */}
                <div className="timeline">
                    {calendarEvents.map((event) => (
                        <div key={event.id} className="timeline-item">
                            <div className={`timeline-dot ${event.type}`} />
                            <div className="timeline-date">{formatDate(event.date)}{event.endDate ? ` → ${formatDate(event.endDate)}` : ''}</div>
                            <div className="timeline-title">{event.title}</div>
                            <div className="timeline-description">{event.description}</div>
                            {event.zone && (
                                <span className="badge badge-warning mt-2">{event.zone}</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
