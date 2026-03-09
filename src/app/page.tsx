import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};
import SearchBar from '@/components/SearchBar';
import { taxBoxes } from '@/data/tax-boxes';
import { categories } from '@/data/categories';
import { forms } from '@/data/forms';
import { CalculatorIcon, ScaleIcon, BuildingIcon, CoinsIcon, FileIcon, CalendarIcon, BarChartIcon, FileTextIcon } from '@/components/SVGIcons';
import ToolCard from '@/components/ToolCard';

export default function HomePage() {



  const tools = [
    {
      icon: <CalculatorIcon />,
      title: 'Simulateur d\'impôt',
      description: 'Calculez votre impôt sur le revenu avec le barème 2026 (revenus 2025)',
      href: '/outils/simulateur',
      color: 'info',
    },
    {
      icon: <ScaleIcon />,
      title: 'Frais réels vs 10%',
      description: 'Comparez la déduction forfaitaire et les frais réels',
      href: '/outils/frais-reels',
      color: 'primary',
    },
    {
      icon: <BuildingIcon />,
      title: 'Micro vs Réel',
      description: 'Micro-BIC/BNC ou régime réel ? Trouvez le plus avantageux',
      href: '/outils/micro-vs-reel',
      color: 'warning',
    },
    {
      icon: <CoinsIcon />,
      title: 'Crédits d\'impôt',
      description: 'Simulez vos réductions et crédits d\'impôt',
      href: '/outils/credits-impot',
      color: 'success',
    },
    {
      icon: <FileIcon />,
      title: 'Documents nécessaires',
      description: 'Checklist des pièces à réunir avant de déclarer',
      href: '/outils/documents',
      color: 'error',
    },
    {
      icon: <CalendarIcon />,
      title: 'Calendrier fiscal',
      description: 'Toutes les dates clés de la déclaration 2026',
      href: '/calendrier',
      color: 'accent',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1>Votre déclaration de revenus, simplifiée</h1>
          <p>
            Trouvez instantanément le numéro d&apos;une case fiscale, comprenez ce qu&apos;elle
            signifie, et utilisez nos outils pour optimiser votre déclaration.
          </p>


          <div className="hero-search">
            <SearchBar variant="hero" />
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">{taxBoxes.length}+</div>
              <div className="hero-stat-label">Cases référencées</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">{forms.length}</div>
              <div className="hero-stat-label">Formulaires couverts</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">5</div>
              <div className="hero-stat-label">Outils interactifs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Outils pour votre déclaration</h2>
          <p className="section-subtitle">
            Calculateurs, comparateurs et ressources pour faciliter votre déclaration
          </p>
          <div className="cards-grid">
            {tools.map((tool) => (
              <ToolCard key={tool.href} {...tool} showButton={false} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="section-title">Explorer par catégorie</h2>
          <p className="section-subtitle">
            Parcourez les cases fiscales par thématique
          </p>
          <div className="cards-grid">
            {categories.map((cat) => (
              <ToolCard
                key={cat.id}
                href={`/cases?category=${cat.id}`}
                icon={cat.icon}
                title={cat.label}
                description={cat.description}
                color={cat.color}
                showButton={false}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Key Info Section */}
      <section className="section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="section-title">Informations essentielles — Revenus 2025</h2>
          <p className="section-subtitle">Les chiffres clés pour votre déclaration</p>

          <div className="cards-grid">
            <div className="card">
              <h3 className="card-title flex-align-center gap-2">
                <BarChartIcon size={24} className="text-primary" />
                Barème de l&apos;impôt 2026
              </h3>
              <div className="text-sm" style={{ lineHeight: 1.8 }}>
                <div className="result-row">
                  <span className="result-row-label">Jusqu&apos;à 11 600 €</span>
                  <span className="result-row-value text-success">0 %</span>
                </div>
                <div className="result-row">
                  <span className="result-row-label">11 601 € à 29 579 €</span>
                  <span className="result-row-value">11 %</span>
                </div>
                <div className="result-row">
                  <span className="result-row-label">29 580 € à 84 577 €</span>
                  <span className="result-row-value">30 %</span>
                </div>
                <div className="result-row">
                  <span className="result-row-label">84 578 € à 181 917 €</span>
                  <span className="result-row-value">41 %</span>
                </div>
                <div className="result-row">
                  <span className="result-row-label">Au-delà de 181 917 €</span>
                  <span className="result-row-value text-error">45 %</span>
                </div>
              </div>
              <Link href="/outils/simulateur" className="btn btn-primary mt-4 w-full">
                Simuler mon impôt →
              </Link>
            </div>

            <div className="card">
              <h3 className="card-title flex-align-center gap-2">
                <CalendarIcon size={24} className="text-primary" />
                Dates limites 2026
              </h3>
              <div className="text-sm" style={{ lineHeight: 1.8 }}>
                <div className="result-row">
                  <span className="result-row-label">Ouverture en ligne</span>
                  <span className="result-row-value">9 avril</span>
                </div>
                <div className="result-row">
                  <span className="result-row-label">Déclaration papier</span>
                  <span className="result-row-value">20 mai</span>
                </div>
                <div className="result-row">
                  <span className="result-row-label">Zone 1 (01-19)</span>
                  <span className="result-row-value">21 mai</span>
                </div>
                <div className="result-row">
                  <span className="result-row-label">Zone 2 (20-54)</span>
                  <span className="result-row-value">28 mai</span>
                </div>
                <div className="result-row">
                  <span className="result-row-label">Zone 3 (55-976)</span>
                  <span className="result-row-value">4 juin</span>
                </div>
              </div>
              <Link href="/calendrier" className="btn btn-primary mt-4 w-full">
                Voir le calendrier complet →
              </Link>
            </div>

            <div className="card">
              <h3 className="card-title flex-align-center gap-2">
                <FileTextIcon size={24} className="text-primary" />
                Seuils micro-entreprise
              </h3>
              <div className="text-sm" style={{ lineHeight: 1.8 }}>
                <div className="result-row">
                  <span className="result-row-label">Micro-BIC vente</span>
                  <span className="result-row-value">188 700 €</span>
                </div>
                <div className="result-row">
                  <span className="result-row-label">Micro-BIC services</span>
                  <span className="result-row-value">77 700 €</span>
                </div>
                <div className="result-row">
                  <span className="result-row-label">Micro-BNC</span>
                  <span className="result-row-value">77 700 €</span>
                </div>
                <div className="result-row">
                  <span className="result-row-label">Abattement vente</span>
                  <span className="result-row-value">71 %</span>
                </div>
                <div className="result-row">
                  <span className="result-row-label">Abattement BNC</span>
                  <span className="result-row-value">34 %</span>
                </div>
              </div>
              <Link href="/outils/micro-vs-reel" className="btn btn-primary mt-4 w-full">
                Comparer micro vs réel →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
