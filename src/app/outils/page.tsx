
import type { Metadata } from 'next';
import { CalculatorIcon, ScaleIcon, BuildingIcon, CoinsIcon, FileIcon } from '@/components/SVGIcons';
import ToolCard from '@/components/ToolCard';

export const metadata: Metadata = {
    title: 'Simulateurs et Outils Fiscaux 2025 (Impôts et Déclaration)',
    description: 'Simulateur d\'impôt sur le revenu gratuit, comparateur frais réels, calcul micro-entreprise (BIC/BNC). Tous nos outils pour réduire vos impôts 2025 en France.',
    openGraph: {
        title: 'Outils Fiscaux | MyImpots',
        description: 'Simulateur d\'impôt, comparateurs frais réels vs 10%, micro vs réel, crédits d\'impôt. Tous les outils pour optimiser votre déclaration.',
        images: [{ url: '/og-outils.png', width: 1200, height: 630, alt: 'MyImpots — Outils pour votre déclaration' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Outils Fiscaux | MyImpots',
        description: 'Simulateurs et comparateurs gratuits pour votre déclaration de revenus 2025.',
        images: ['/og-outils.png'],
    },
    alternates: {
        canonical: '/outils',
    },
};

export default function OutilsPage() {
    const tools = [
        {
            icon: <CalculatorIcon />,
            title: 'Simulateur de tranches d\'imposition',
            description: 'Calculez votre impôt sur le revenu avec le barème 2026 applicable aux revenus 2025. Visualisez le détail par tranche, le taux marginal, le taux moyen et la décote éventuelle.',
            href: '/outils/simulateur',
            color: 'info',
        },
        {
            icon: <ScaleIcon />,
            title: 'Frais réels vs abattement 10%',
            description: 'Comparez la déduction forfaitaire de 10 % avec la déduction des frais réels pour déterminer l\'option la plus avantageuse selon vos dépenses professionnelles.',
            href: '/outils/frais-reels',
            color: 'success',
        },
        {
            icon: <BuildingIcon />,
            title: 'Micro-BIC/BNC vs régime réel',
            description: 'Auto-entrepreneurs et indépendants : comparez le régime micro (abattement forfaitaire) et le régime réel (déduction des charges) pour optimiser votre imposition.',
            href: '/outils/micro-vs-reel',
            color: 'warning',
        },
        {
            icon: <CoinsIcon />,
            title: 'Simulateur de crédits et réductions d\'impôt',
            description: 'Estimez le montant de vos réductions et crédits d\'impôt : emploi à domicile, dons, garde d\'enfants, investissements. Vérifiez le plafonnement des niches fiscales.',
            href: '/outils/credits-impot',
            color: 'error',
        },
        {
            icon: <FileIcon />,
            title: 'Checklist des documents nécessaires',
            description: 'Sélectionnez votre profil et obtenez la liste complète des documents à réunir avant de commencer votre déclaration. Cochez au fur et à mesure.',
            href: '/outils/documents',
            color: 'primary',
        },
    ];

    const softwareSchema = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Simulateurs Fiscaux MyImpots',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'EUR'
        },
        description: "Ensemble d'outils interactifs pour calculer et optimiser ses impôts sur le revenu en France: simulateur, comparateur frais réels, micro-entreprise, etc.",
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '124'
        }
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Accueil',
                item: 'https://www.myimpots.com'
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Outils',
                item: 'https://www.myimpots.com/outils'
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <div className="page-header">
                <h1 className="page-title">Outils fiscaux</h1>
                <p className="page-description">
                    Calculateurs, comparateurs et ressources pour faciliter votre déclaration
                </p>
            </div>

            <div className="container" style={{ paddingBottom: 'var(--space-16)' }}>
                <div className="cards-grid">
                    {tools.map((tool) => (
                        <ToolCard key={tool.href} {...tool} />
                    ))}
                </div>
            </div>
        </>
    );
}
