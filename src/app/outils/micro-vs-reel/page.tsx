'use client';

import { useState } from 'react';
import { microRegimes } from '@/data/tax-rates';

export default function MicroVsReelPage() {
    const [ca, setCa] = useState('');
    const [charges, setCharges] = useState('');
    const [regime, setRegime] = useState('bnc');

    const caNum = parseFloat(ca) || 0;
    const chargesNum = parseFloat(charges) || 0;

    const selectedRegime = microRegimes.find((r) => r.type === regime);
    const abattement = selectedRegime ? selectedRegime.abattement : 0.34;
    const plafond = selectedRegime ? selectedRegime.plafond : 77700;

    const deductionMicro = Math.max(caNum * abattement, selectedRegime?.abattementMin || 305);
    const beneficeMicro = Math.max(0, caNum - deductionMicro);
    const beneficeReel = Math.max(0, caNum - chargesNum);

    const depassePlafond = caNum > plafond;
    const reelMieux = chargesNum > deductionMicro;

    const formatMoney = (n: number) =>
        new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n);

    return (
        <>
            <div className="page-header">
                <h1 className="page-title">🏢 Micro-BIC/BNC vs régime réel</h1>
                <p className="page-description">
                    Comparez le régime micro (abattement forfaitaire) avec le régime réel (déduction des charges)
                </p>
            </div>

            <div className="container" style={{ paddingBottom: 'var(--space-16)' }}>
                <div className="calculator">
                    <div className="calculator-input">
                        <h2 style={{ fontWeight: 600, marginBottom: 'var(--space-6)' }}>Vos informations</h2>

                        <div className="form-group">
                            <label className="form-label">Type d&apos;activité</label>
                            <select className="form-select" value={regime} onChange={(e) => setRegime(e.target.value)}>
                                {microRegimes.map((r) => (
                                    <option key={r.type} value={r.type}>{r.label} (abattement {(r.abattement * 100).toFixed(0)} %)</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Chiffre d&apos;affaires annuel HT (€)</label>
                            <input type="number" className="form-input" placeholder="Ex : 50000" value={ca} onChange={(e) => setCa(e.target.value)} min="0" />
                            <p className="form-hint">Plafond micro : {formatMoney(plafond)}</p>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Charges réelles annuelles (€)</label>
                            <input type="number" className="form-input" placeholder="Ex : 20000" value={charges} onChange={(e) => setCharges(e.target.value)} min="0" />
                            <p className="form-hint">Total de vos charges professionnelles déductibles au régime réel</p>
                        </div>

                        {depassePlafond && (
                            <div className="card" style={{ background: 'var(--color-warning-light)', border: 'none', marginTop: 'var(--space-4)' }}>
                                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-warning)' }}>
                                    ⚠️ Votre CA dépasse le plafond micro ({formatMoney(plafond)}). Le régime réel est obligatoire.
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="calculator-result">
                        <h2 style={{ fontWeight: 600, marginBottom: 'var(--space-6)' }}>Comparaison</h2>

                        <div style={{
                            textAlign: 'center', marginBottom: 'var(--space-6)', padding: 'var(--space-6)',
                            background: reelMieux ? 'var(--color-success-light)' : 'var(--color-primary-light)',
                            borderRadius: 'var(--radius-lg)',
                        }}>
                            <div className="result-label">{reelMieux ? '✅ Le régime réel est plus avantageux' : '📋 Le régime micro est plus avantageux'}</div>
                            {caNum > 0 && (
                                <div className="result-value" style={{ color: reelMieux ? 'var(--color-success)' : 'var(--color-primary)' }}>
                                    Économie : {formatMoney(Math.abs(beneficeMicro - beneficeReel))} de bénéfice imposable
                                </div>
                            )}
                        </div>

                        <table className="comparison-table">
                            <thead>
                                <tr><th></th><th>Micro</th><th>Réel</th></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Chiffre d&apos;affaires</td>
                                    <td>{formatMoney(caNum)}</td>
                                    <td>{formatMoney(caNum)}</td>
                                </tr>
                                <tr>
                                    <td>Déduction</td>
                                    <td>{formatMoney(deductionMicro)} ({(abattement * 100).toFixed(0)} %)</td>
                                    <td>{formatMoney(chargesNum)} (réel)</td>
                                </tr>
                                <tr>
                                    <td style={{ fontWeight: 700 }}>Bénéfice imposable</td>
                                    <td className={!reelMieux ? 'winner' : ''}>{formatMoney(beneficeMicro)}</td>
                                    <td className={reelMieux ? 'winner' : ''}>{formatMoney(beneficeReel)}</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="card mt-6" style={{ background: 'var(--color-bg-tertiary)', border: 'none' }}>
                            <h3 style={{ fontWeight: 600, fontSize: 'var(--text-sm)', marginBottom: 'var(--space-2)' }}>💡 Rappel</h3>
                            <ul style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', lineHeight: 1.8, paddingLeft: 'var(--space-4)' }}>
                                <li>Le régime micro est intéressant si vos charges réelles sont inférieures à l&apos;abattement forfaitaire</li>
                                <li>Le régime réel nécessite une comptabilité (obligations déclaratives plus lourdes)</li>
                                <li>L&apos;option pour le réel est valable 1 an et reconduite tacitement</li>
                                <li>Le dépassement du plafond 2 années consécutives entraîne le basculement au réel</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
