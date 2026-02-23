import Link from 'next/link';
import type { Metadata } from 'next';
import { CalculatorIcon, ScaleIcon, BuildingIcon, CoinsIcon, FileIcon } from '@/components/SVGIcons';

export const metadata: Metadata = {
    title: 'Outils fiscaux',
    description: 'Calculateurs et comparateurs pour optimiser votre déclaration de revenus 2025.',
};

export default function OutilsPage() {
    const tools = [
        {
            icon: <CalculatorIcon />,
            title: 'Simulateur de tranches d\'imposition',
            description: 'Calculez votre impôt sur le revenu avec le barème 2026 applicable aux revenus 2025. Visualisez le détail par tranche, le taux marginal, le taux moyen et la décote éventuelle.',
            href: '/outils/simulateur',
            color: '#3b82f6',
        },
        {
            icon: <ScaleIcon />,
            title: 'Frais réels vs abattement 10%',
            description: 'Comparez la déduction forfaitaire de 10 % avec la déduction des frais réels pour déterminer l\'option la plus avantageuse selon vos dépenses professionnelles.',
            href: '/outils/frais-reels',
            color: '#10b981',
        },
        {
            icon: <BuildingIcon />,
            title: 'Micro-BIC/BNC vs régime réel',
            description: 'Auto-entrepreneurs et indépendants : comparez le régime micro (abattement forfaitaire) et le régime réel (déduction des charges) pour optimiser votre imposition.',
            href: '/outils/micro-vs-reel',
            color: '#f59e0b',
        },
        {
            icon: <CoinsIcon />,
            title: 'Simulateur de crédits et réductions d\'impôt',
            description: 'Estimez le montant de vos réductions et crédits d\'impôt : emploi à domicile, dons, garde d\'enfants, investissements. Vérifiez le plafonnement des niches fiscales.',
            href: '/outils/credits-impot',
            color: '#ef4444',
        },
        {
            icon: <FileIcon />,
            title: 'Checklist des documents nécessaires',
            description: 'Sélectionnez votre profil et obtenez la liste complète des documents à réunir avant de commencer votre déclaration. Cochez au fur et à mesure.',
            href: '/outils/documents',
            color: '#8b5cf6',
        },
    ];

    return (
        <>
            <div className="page-header">
                <h1 className="page-title">Outils fiscaux</h1>
                <p className="page-description">
                    Calculateurs, comparateurs et ressources pour faciliter votre déclaration
                </p>
            </div>

            <div className="container" style={{ paddingBottom: 'var(--space-16)' }}>
                <div className="cards-grid">
                    {tools.map((tool) => (
                        <Link key={tool.href} href={tool.href} className="card-link">
                            <div className="card" style={{ borderLeft: `4px solid ${tool.color}` }}>
                                <div className="card-icon">{tool.icon}</div>
                                <h3 className="card-title">{tool.title}</h3>
                                <p className="card-description">{tool.description}</p>
                                <span className="btn btn-primary mt-4">Ouvrir l&apos;outil →</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
