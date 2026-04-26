'use client';

import { useState } from 'react';
import { ABATTEMENT_10_POURCENT_MIN, ABATTEMENT_10_POURCENT_MAX } from '@/data/tax-rates';
import { ScaleIcon } from '@/components/SVGIcons';

export default function FraisReelsClient() {
    const [salaire, setSalaire] = useState('');
    const [transport, setTransport] = useState('');
    const [repas, setRepas] = useState('');
    const [autres, setAutres] = useState('');

    const salaireNum = parseFloat(salaire) || 0;
    const transportNum = parseFloat(transport) || 0;
    const repasNum = parseFloat(repas) || 0;
    const autresNum = parseFloat(autres) || 0;

    const totalFraisReels = transportNum + repasNum + autresNum;

    const abattement10 = Math.min(
        Math.max(salaireNum * 0.1, ABATTEMENT_10_POURCENT_MIN),
        ABATTEMENT_10_POURCENT_MAX
    );

    const revenuAbattement = Math.max(0, salaireNum - abattement10);
    const revenuFraisReels = Math.max(0, salaireNum - totalFraisReels);

    const economie = revenuAbattement - revenuFraisReels;
    const fraisReelsMieux = totalFraisReels > abattement10;

    const formatMoney = (n: number) =>
        new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n);

    return (
        <>
            <div className="page-header">
                <h1 className="page-title flex-center gap-3">
                    <ScaleIcon size={32} className="text-primary" />
                    Frais réels vs abattement 10 %
                </h1>
                <p className="page-description">
                    Déterminez s&apos;il est plus avantageux de déduire vos frais réels ou de garder l&apos;abattement forfaitaire
                </p>
            </div>

            <div className="container" style={{ paddingBottom: 'var(--space-16)' }}>
                <div className="calculator">
                    <div className="calculator-input">
                        <h2 style={{ fontWeight: 600, marginBottom: 'var(--space-6)' }}>Vos informations</h2>

                        <div className="form-group">
                            <label className="form-label">Salaire net imposable annuel (€)</label>
                            <input type="number" className="form-input" placeholder="Ex : 30000" value={salaire} onChange={(e) => setSalaire(e.target.value)} min="0" />
                            <p className="form-hint">Figurant sur votre bulletin de décembre (cumul net imposable)</p>
                        </div>

                        <h3 style={{ fontWeight: 600, fontSize: 'var(--text-sm)', marginTop: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                            Détail des frais réels
                        </h3>

                        <div className="form-group">
                            <label className="form-label">Frais de transport domicile-travail (€)</label>
                            <input type="number" className="form-input" placeholder="Ex : 3500" value={transport} onChange={(e) => setTransport(e.target.value)} min="0" />
                            <p className="form-hint">Calculés selon le barème kilométrique ou transports en commun</p>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Frais de repas (€)</label>
                            <input type="number" className="form-input" placeholder="Ex : 1200" value={repas} onChange={(e) => setRepas(e.target.value)} min="0" />
                            <p className="form-hint">Part excédant 5,35 € par repas pris hors du domicile</p>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Autres frais professionnels (€)</label>
                            <input type="number" className="form-input" placeholder="Ex : 800" value={autres} onChange={(e) => setAutres(e.target.value)} min="0" />
                            <p className="form-hint">Double résidence, vêtements professionnels, formation, cotisations syndicales...</p>
                        </div>
                    </div>

                    <div className="calculator-result">
                        <h2 style={{ fontWeight: 600, marginBottom: 'var(--space-6)' }}>Comparaison</h2>

                        <div style={{
                            textAlign: 'center', marginBottom: 'var(--space-6)', padding: 'var(--space-6)',
                            background: fraisReelsMieux ? 'var(--color-success-light)' : 'var(--color-primary-light)',
                            borderRadius: 'var(--radius-lg)',
                        }}>
                            <div className="result-label">{fraisReelsMieux ? '✅ Les frais réels sont plus avantageux' : '📋 L\'abattement de 10 % est plus avantageux'}</div>
                            {salaireNum > 0 && (
                                <div className="result-value" style={{ color: fraisReelsMieux ? 'var(--color-success)' : 'var(--color-primary)' }}>
                                    {fraisReelsMieux ? `Économie : ${formatMoney(economie)} de revenu imposable` : 'Gardez l\'abattement forfaitaire'}
                                </div>
                            )}
                        </div>

                        <table className="comparison-table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Abattement 10 %</th>
                                    <th>Frais réels</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Salaire net imposable</td>
                                    <td>{formatMoney(salaireNum)}</td>
                                    <td>{formatMoney(salaireNum)}</td>
                                </tr>
                                <tr>
                                    <td>Déduction</td>
                                    <td>{formatMoney(abattement10)}</td>
                                    <td>{formatMoney(totalFraisReels)}</td>
                                </tr>
                                <tr>
                                    <td style={{ fontWeight: 700 }}>Revenu imposable</td>
                                    <td className={!fraisReelsMieux ? 'winner' : ''}>{formatMoney(revenuAbattement)}</td>
                                    <td className={fraisReelsMieux ? 'winner' : ''}>{formatMoney(revenuFraisReels)}</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="card mt-6" style={{ background: 'var(--color-bg-tertiary)', border: 'none' }}>
                            <h3 style={{ fontWeight: 600, fontSize: 'var(--text-sm)', marginBottom: 'var(--space-2)' }}>💡 Bon à savoir</h3>
                            <ul style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', lineHeight: 1.8, paddingLeft: 'var(--space-4)' }}>
                                <li>L&apos;abattement de 10 % est appliqué automatiquement : min {formatMoney(ABATTEMENT_10_POURCENT_MIN)}, max {formatMoney(ABATTEMENT_10_POURCENT_MAX)}</li>
                                <li>L&apos;option pour les frais réels doit être demandée (case 1AK ou 1BK)</li>
                                <li>Vous devez pouvoir justifier chaque dépense en cas de contrôle</li>
                                <li>Le choix est fait par déclarant : un couple peut faire un choix différent pour chacun</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
