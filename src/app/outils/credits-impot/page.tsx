'use client';

import { useState } from 'react';
import { PLAFOND_AVANTAGES_FISCAUX } from '@/data/tax-rates';
import { CoinsIcon } from '@/components/SVGIcons';

export default function CreditsImpotPage() {
    const [emploiDomicile, setEmploiDomicile] = useState('');
    const [gardeEnfants, setGardeEnfants] = useState('');
    const [nbEnfantsGarde, setNbEnfantsGarde] = useState('1');
    const [donsColuche, setDonsColuche] = useState('');
    const [donsInteret, setDonsInteret] = useState('');
    const [revenuImposable, setRevenuImposable] = useState('');
    const [pme, setPme] = useState('');

    const emploiNum = parseFloat(emploiDomicile) || 0;
    const gardeNum = parseFloat(gardeEnfants) || 0;
    const nbEnfants = parseInt(nbEnfantsGarde) || 1;
    const colucheNum = parseFloat(donsColuche) || 0;
    const interetNum = parseFloat(donsInteret) || 0;
    const revenuNum = parseFloat(revenuImposable) || 0;
    const pmeNum = parseFloat(pme) || 0;

    // Emploi à domicile: 50%, max 12 000 €
    const emploiCredit = Math.min(emploiNum, 12000) * 0.5;

    // Garde enfants: 50%, max 3 500 € par enfant
    const gardeCredit = Math.min(gardeNum, 3500 * nbEnfants) * 0.5;

    // Dons Coluche: 75% jusqu'à 2 000 € + 66% au-delà
    const coluche75 = Math.min(colucheNum, 2000) * 0.75;
    const colucheExtra = Math.max(0, colucheNum - 2000) * 0.66;
    const colucheReduction = coluche75 + colucheExtra;

    // Dons intérêt général: 66%, max 20% du revenu imposable
    const plafondDonsIG = revenuNum * 0.2;
    const interetReduction = Math.min(interetNum, plafondDonsIG > 0 ? plafondDonsIG : interetNum) * 0.66;

    // PME: 25%, max 50 000 €
    const pmeReduction = Math.min(pmeNum, 50000) * 0.25;

    const totalCredits = emploiCredit + gardeCredit;
    const totalReductions = colucheReduction + interetReduction + pmeReduction;
    const totalAvantages = totalCredits + totalReductions;

    const depasse = totalAvantages > PLAFOND_AVANTAGES_FISCAUX;

    const formatMoney = (n: number) =>
        new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n);

    return (
        <>
            <div className="page-header">
                <h1 className="page-title flex-center gap-3">
                    <CoinsIcon size={32} className="text-primary" />
                    Simulateur de crédits et réductions d&apos;impôt
                </h1>
                <p className="page-description">
                    Estimez vos avantages fiscaux et vérifiez le plafonnement des niches fiscales
                </p>
            </div>

            <div className="container" style={{ paddingBottom: 'var(--space-16)' }}>
                <div className="calculator">
                    <div className="calculator-input">
                        <h2 style={{ fontWeight: 600, marginBottom: 'var(--space-4)' }}>Vos dépenses</h2>

                        <div className="form-group">
                            <label className="form-label">Revenu net imposable (€) — pour le plafond des dons</label>
                            <input type="number" className="form-input" placeholder="Ex : 40000" value={revenuImposable} onChange={(e) => setRevenuImposable(e.target.value)} min="0" />
                        </div>

                        <h3 className="text-primary mt-4 mb-3" style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>
                            Crédits d&apos;impôt
                        </h3>

                        <div className="form-group">
                            <label className="form-label">Emploi à domicile (€)</label>
                            <input type="number" className="form-input" placeholder="Ex : 8000" value={emploiDomicile} onChange={(e) => setEmploiDomicile(e.target.value)} min="0" />
                            <p className="form-hint">Crédit de 50 %, plafond 12 000 € de dépenses</p>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Frais de garde d&apos;enfants (€)</label>
                            <input type="number" className="form-input" placeholder="Ex : 3000" value={gardeEnfants} onChange={(e) => setGardeEnfants(e.target.value)} min="0" />
                            <p className="form-hint">Crédit de 50 %, plafond 3 500 € par enfant (&lt; 6 ans)</p>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Nombre d&apos;enfants (&lt; 6 ans)</label>
                            <select className="form-select" value={nbEnfantsGarde} onChange={(e) => setNbEnfantsGarde(e.target.value)}>
                                {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n}</option>)}
                            </select>
                        </div>

                        <h3 className="text-accent mt-4 mb-3" style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>
                            Réductions d&apos;impôt
                        </h3>

                        <div className="form-group">
                            <label className="form-label">Dons Coluche — aide aux personnes (€)</label>
                            <input type="number" className="form-input" placeholder="Ex : 500" value={donsColuche} onChange={(e) => setDonsColuche(e.target.value)} min="0" />
                            <p className="form-hint">75 % jusqu&apos;à 2 000 €, puis 66 %</p>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Dons intérêt général (€)</label>
                            <input type="number" className="form-input" placeholder="Ex : 1000" value={donsInteret} onChange={(e) => setDonsInteret(e.target.value)} min="0" />
                            <p className="form-hint">66 %, limité à 20 % du revenu imposable</p>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Capital PME souscrit (€)</label>
                            <input type="number" className="form-input" placeholder="Ex : 10000" value={pme} onChange={(e) => setPme(e.target.value)} min="0" />
                            <p className="form-hint">25 %, plafond 50 000 € (100 000 € couple)</p>
                        </div>
                    </div>

                    <div className="calculator-result">
                        <h2 style={{ fontWeight: 600, marginBottom: 'var(--space-6)' }}>Résultats</h2>

                        <div style={{
                            textAlign: 'center', marginBottom: 'var(--space-6)', padding: 'var(--space-6)',
                            background: 'var(--color-primary-light)', borderRadius: 'var(--radius-lg)',
                        }}>
                            <div className="result-label">Total des avantages fiscaux</div>
                            <div className="result-value">{formatMoney(totalAvantages)}</div>
                        </div>

                        {depasse && (
                            <div className="card mb-4" style={{ background: 'var(--color-warning-light)', border: 'none' }}>
                                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-warning)' }}>
                                    ⚠️ Attention : le total dépasse le plafonnement global de {formatMoney(PLAFOND_AVANTAGES_FISCAUX)}. Certains avantages ne seront pas pris en compte.
                                </p>
                            </div>
                        )}

                        <h3 style={{ fontWeight: 600, fontSize: 'var(--text-sm)', marginBottom: 'var(--space-3)' }}>Crédits d&apos;impôt</h3>
                        <div className="result-row">
                            <span className="result-row-label">Emploi à domicile (50 %)</span>
                            <span className="result-row-value" style={{ color: 'var(--color-success)' }}>{formatMoney(emploiCredit)}</span>
                        </div>
                        <div className="result-row">
                            <span className="result-row-label">Garde enfants (50 %)</span>
                            <span className="result-row-value" style={{ color: 'var(--color-success)' }}>{formatMoney(gardeCredit)}</span>
                        </div>
                        <div className="result-row" style={{ fontWeight: 700 }}>
                            <span className="result-row-label">Sous-total crédits</span>
                            <span className="result-row-value">{formatMoney(totalCredits)}</span>
                        </div>

                        <h3 style={{ fontWeight: 600, fontSize: 'var(--text-sm)', marginTop: 'var(--space-4)', marginBottom: 'var(--space-3)' }}>Réductions d&apos;impôt</h3>
                        <div className="result-row">
                            <span className="result-row-label">Dons Coluche (75 % / 66 %)</span>
                            <span className="result-row-value" style={{ color: 'var(--color-success)' }}>{formatMoney(colucheReduction)}</span>
                        </div>
                        <div className="result-row">
                            <span className="result-row-label">Dons intérêt général (66 %)</span>
                            <span className="result-row-value" style={{ color: 'var(--color-success)' }}>{formatMoney(interetReduction)}</span>
                        </div>
                        <div className="result-row">
                            <span className="result-row-label">Capital PME (25 %)</span>
                            <span className="result-row-value" style={{ color: 'var(--color-success)' }}>{formatMoney(pmeReduction)}</span>
                        </div>
                        <div className="result-row" style={{ fontWeight: 700 }}>
                            <span className="result-row-label">Sous-total réductions</span>
                            <span className="result-row-value">{formatMoney(totalReductions)}</span>
                        </div>

                        <div className="result-row mt-4" style={{ fontWeight: 700, fontSize: 'var(--text-base)' }}>
                            <span className="result-row-label">Plafonnement global</span>
                            <span className="result-row-value">{formatMoney(PLAFOND_AVANTAGES_FISCAUX)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
