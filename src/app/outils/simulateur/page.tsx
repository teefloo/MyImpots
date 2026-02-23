'use client';

import { useState } from 'react';
import { calculateTax, taxBrackets } from '@/data/tax-rates';
import { CalculatorIcon } from '@/components/SVGIcons';

const BRACKET_COLORS = ['var(--color-success)', 'var(--color-info)', 'var(--color-warning)', 'var(--color-error)', 'var(--color-primary)'];

export default function SimulateurPage() {
    const [revenu, setRevenu] = useState('');
    const [parts, setParts] = useState('1');

    const revenuNum = parseFloat(revenu) || 0;
    const partsNum = parseFloat(parts) || 1;
    const result = calculateTax(revenuNum, partsNum);

    const formatMoney = (n: number) =>
        new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n);

    const formatPercent = (n: number) =>
        new Intl.NumberFormat('fr-FR', { style: 'percent', minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(n);

    return (
        <>
            <div className="page-header">
                <h1 className="page-title flex-center gap-3">
                    <CalculatorIcon size={32} className="text-primary" />
                    Simulateur d&apos;impôt sur le revenu
                </h1>
                <p className="page-description">
                    Barème 2026 applicable aux revenus 2025 — Calculez votre impôt, taux marginal et taux moyen
                </p>
            </div>

            <div className="container" style={{ paddingBottom: 'var(--space-16)' }}>
                <div className="calculator">
                    {/* Input */}
                    <div className="calculator-input">
                        <h2 style={{ fontWeight: 600, marginBottom: 'var(--space-6)' }}>Vos informations</h2>

                        <div className="form-group">
                            <label className="form-label">Revenu net imposable annuel (€)</label>
                            <input
                                type="number"
                                className="form-input"
                                placeholder="Ex : 35000"
                                value={revenu}
                                onChange={(e) => setRevenu(e.target.value)}
                                min="0"
                            />
                            <p className="form-hint">
                                Montant après abattement de 10 % ou frais réels. Figurant sur votre avis d&apos;imposition.
                            </p>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Nombre de parts fiscales</label>
                            <select className="form-select" value={parts} onChange={(e) => setParts(e.target.value)}>
                                <option value="1">1 — Célibataire</option>
                                <option value="1.5">1,5 — Célibataire + 1 enfant</option>
                                <option value="2">2 — Couple sans enfant</option>
                                <option value="2.5">2,5 — Couple + 1 enfant</option>
                                <option value="3">3 — Couple + 2 enfants</option>
                                <option value="4">4 — Couple + 3 enfants</option>
                                <option value="5">5 — Couple + 4 enfants</option>
                            </select>
                        </div>

                        <div className="card mt-6" style={{ background: 'var(--color-bg-tertiary)', border: 'none' }}>
                            <h3 style={{ fontWeight: 600, fontSize: 'var(--text-sm)', marginBottom: 'var(--space-3)' }}>
                                Barème 2026 (revenus 2025)
                            </h3>
                            {taxBrackets.map((b, i) => (
                                <div key={i} className="result-row">
                                    <span className="result-row-label">
                                        {b.max ? `${b.min.toLocaleString('fr-FR')} – ${b.max.toLocaleString('fr-FR')} €` : `> ${b.min.toLocaleString('fr-FR')} €`}
                                    </span>
                                    <span className="result-row-value" style={{ color: BRACKET_COLORS[i] }}>
                                        {(b.rate * 100).toFixed(0)} %
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Result */}
                    <div className="calculator-result">
                        <h2 style={{ fontWeight: 600, marginBottom: 'var(--space-6)' }}>Résultats</h2>

                        <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)', padding: 'var(--space-6)', background: 'var(--color-primary-light)', borderRadius: 'var(--radius-lg)' }}>
                            <div className="result-label">Impôt sur le revenu</div>
                            <div className="result-value">{formatMoney(result.impotNet)}</div>
                            {result.decote > 0 && (
                                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-success)', marginTop: 'var(--space-1)' }}>
                                    Décote appliquée : -{formatMoney(result.decote)}
                                </div>
                            )}
                        </div>

                        <div className="result-row">
                            <span className="result-row-label">Revenu imposable</span>
                            <span className="result-row-value">{formatMoney(revenuNum)}</span>
                        </div>
                        <div className="result-row">
                            <span className="result-row-label">Quotient familial</span>
                            <span className="result-row-value">{formatMoney(revenuNum / partsNum)} / part</span>
                        </div>
                        <div className="result-row">
                            <span className="result-row-label">Impôt brut</span>
                            <span className="result-row-value">{formatMoney(result.impotBrut)}</span>
                        </div>
                        {result.decote > 0 && (
                            <div className="result-row">
                                <span className="result-row-label">Décote</span>
                                <span className="result-row-value" style={{ color: 'var(--color-success)' }}>-{formatMoney(result.decote)}</span>
                            </div>
                        )}
                        <div className="result-row">
                            <span className="result-row-label">Taux marginal d&apos;imposition</span>
                            <span className="result-row-value">{formatPercent(result.tauxMarginal)}</span>
                        </div>
                        <div className="result-row">
                            <span className="result-row-label">Taux moyen d&apos;imposition</span>
                            <span className="result-row-value">{formatPercent(result.tauxMoyen)}</span>
                        </div>
                        <div className="result-row">
                            <span className="result-row-label">Revenu mensuel net d&apos;impôt</span>
                            <span className="result-row-value">{formatMoney((revenuNum - result.impotNet) / 12)}/mois</span>
                        </div>

                        {/* Bracket visualization */}
                        {revenuNum > 0 && (
                            <div style={{ marginTop: 'var(--space-6)' }}>
                                <h3 style={{ fontWeight: 600, fontSize: 'var(--text-sm)', marginBottom: 'var(--space-3)' }}>
                                    Détail par tranche
                                </h3>
                                {result.tranchesDetail.map((t, i) => {
                                    const pct = revenuNum > 0 ? (t.montantImpose / revenuNum) * 100 : 0;
                                    return (
                                        <div key={i} style={{ marginBottom: 'var(--space-3)' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-xs)', marginBottom: '2px' }}>
                                                <span>{(t.bracket.rate * 100).toFixed(0)} % — {formatMoney(t.montantImpose)}</span>
                                                <span>{formatMoney(t.impot)}</span>
                                            </div>
                                            <div className="bracket-bar" style={{ background: 'var(--color-bg-tertiary)' }}>
                                                <div
                                                    className="bracket-fill"
                                                    style={{
                                                        width: `${Math.max(pct, 2)}%`,
                                                        background: BRACKET_COLORS[i] || BRACKET_COLORS[4],
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
