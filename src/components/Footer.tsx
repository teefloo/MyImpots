import Link from 'next/link';
import { FileTextIcon } from './SVGIcons';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="footer-brand-title flex-align-center gap-2">
                            <span className="text-primary flex-center"><FileTextIcon size={24} /></span> MyImpots
                        </div>
                        <p>
                            Trouvez facilement le numéro d&apos;une case fiscale et comprenez précisément
                            à quoi elle correspond. Tous les outils et ressources pour faciliter votre
                            déclaration de revenus 2025.
                        </p>
                    </div>

                    <nav aria-label="Menu de navigation secondaire">
                        <h4 className="footer-heading">Navigation</h4>
                        <ul className="footer-links">
                            <li><Link href="/cases">Cases fiscales</Link></li>
                            <li><Link href="/formulaires">Formulaires</Link></li>
                            <li><Link href="/outils">Outils</Link></li>
                            <li><Link href="/calendrier">Calendrier fiscal</Link></li>
                            <li><Link href="/faq">FAQ</Link></li>
                        </ul>
                    </nav>

                    <nav aria-label="Outils et simulateurs fiscaux">
                        <h4 className="footer-heading">Outils</h4>
                        <ul className="footer-links">
                            <li><Link href="/outils/simulateur">Simulateur d&apos;impôt</Link></li>
                            <li><Link href="/outils/frais-reels">Frais réels vs 10%</Link></li>
                            <li><Link href="/outils/micro-vs-reel">Micro vs Réel</Link></li>
                            <li><Link href="/outils/credits-impot">Crédits d&apos;impôt</Link></li>
                            <li><Link href="/outils/documents">Documents nécessaires</Link></li>
                        </ul>
                    </nav>

                    <nav aria-label="Ressources gouvernementales et officielles">
                        <h4 className="footer-heading">Ressources officielles</h4>
                        <ul className="footer-links">
                            <li>
                                <a href="https://www.impots.gouv.fr" target="_blank" rel="noopener noreferrer">
                                    impots.gouv.fr ↗
                                </a>
                            </li>
                            <li>
                                <a href="https://bofip.impots.gouv.fr" target="_blank" rel="noopener noreferrer">
                                    BOFiP ↗
                                </a>
                            </li>
                            <li>
                                <a href="https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006069577" target="_blank" rel="noopener noreferrer">
                                    Code Général des Impôts ↗
                                </a>
                            </li>
                            <li>
                                <a href="https://www.service-public.fr/particuliers/vosdroits/N247" target="_blank" rel="noopener noreferrer">
                                    Service Public ↗
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="footer-bottom">
                    <p className="footer-disclaimer">
                        ⚠️ Ce site est un outil d&apos;information non officiel. Les données présentées sont
                        fournies à titre indicatif et ne se substituent pas aux informations officielles de
                        l&apos;administration fiscale. Consultez toujours{' '}
                        <a href="https://www.impots.gouv.fr" target="_blank" rel="noopener noreferrer">
                            impots.gouv.fr
                        </a>{' '}
                        pour les informations officielles.
                    </p>
                    <p className="footer-copyright">
                        © {new Date().getFullYear()} MyImpots — Revenus 2025
                    </p>
                </div>
            </div>
        </footer>
    );
}
