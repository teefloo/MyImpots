'use client';

import { useState } from 'react';
import { calendarEvents, getDepartmentZone } from '@/data/calendar';

export default function CalendrierPage() {
    const [dept, setDept] = useState('');
    const zone = dept ? getDepartmentZone(dept) : null;

    const formatDate = (dateStr: string) => {
        const d = new Date(dateStr);
        return d.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    };

    return (
        <>
            <div className="page-header">
                <h1 className="page-title">📅 Calendrier fiscal 2026</h1>
                <p className="page-description">
                    Toutes les dates clés pour la déclaration des revenus 2025
                </p>
            </div>

            <div className="container" style={{ paddingBottom: 'var(--space-16)', maxWidth: 800 }}>
                {/* Department selector */}
                <div className="card mb-8">
                    <h3 style={{ fontWeight: 600, marginBottom: 'var(--space-3)' }}>🏠 Votre date limite personnelle</h3>
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
