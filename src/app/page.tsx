import type { Metadata } from 'next';
import Link from 'next/link';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Calcul, simulateur et guide des impôts 2026 | MyImpots',
  description: 'Comprenez votre déclaration de revenus 2025, trouvez les cases 2042 et utilisez nos simulateurs gratuits pour préparer vos impôts 2026.',
  path: '/',
  imageAlt: 'MyImpots — Guide de la déclaration de revenus 2025',
});
import SearchBar from '@/components/SearchBar';
import { taxBoxes } from '@/data/tax-boxes';
import { categories } from '@/data/categories';
import { forms } from '@/data/forms';
import { faqEntries } from '@/data/faq';
import { CalculatorIcon, ScaleIcon, BuildingIcon, CoinsIcon, FileIcon, CalendarIcon, BarChartIcon, FileTextIcon } from '@/components/SVGIcons';
import ToolCard from '@/components/ToolCard';
import { getCategoryPagePath } from '@/lib/case-routes';

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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqEntries.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <>
      {/* JSON-LD definition for Enhancements / Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Déclaration de revenus 2025 en 2026
          </h1>
          <p>
            Trouvez instantanément le numéro d&apos;une case fiscale, comprenez son impact sur vos impôts,
            et utilisez nos simulateurs gratuits pour optimiser votre déclaration.
          </p>

          <div className="hero-search">
            <SearchBar variant="hero" />
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">{taxBoxes.length}+</div>
              <div className="hero-stat-label">Cases 2042 référencées</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">{forms.length}</div>
              <div className="hero-stat-label">Formulaires Cerfa couverts</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">5</div>
              <div className="hero-stat-label">Simulateurs gratuits</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">16</div>
              <div className="hero-stat-label">Questions FAQ répondues</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Nos Outils et Simulateurs d&apos;Impôts</h2>
          <p className="section-subtitle">
            Calculateurs, comparateurs et ressources incontournables pour limiter vos impôts.
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
          <h2 className="section-title">Explorer les Cases Fiscales par Thématique</h2>
          <p className="section-subtitle">
            Toutes les cases de la déclaration 2042 expliquées simplement et classées par catégorie.
          </p>
          <div className="cards-grid">
            {categories.filter((cat) => taxBoxes.some((box) => box.categoryId === cat.id)).map((cat) => (
              <ToolCard
                key={cat.id}
                href={getCategoryPagePath(cat.id)}
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

      {/* Popular Cases - Internal Linking for SEO Indexation */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)', padding: 'var(--space-12) 0' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="section-title text-center" style={{ fontSize: 'var(--text-xl)' }}>
            Les cases les plus recherchées
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', justifyContent: 'center', maxWidth: 800, margin: '0 auto' }}>
            {['1AJ', '1AS', '7UF', '8SH', '2OP', '3VG', '5ND', '6DD', '7EA', '8TM'].map(boxNum => {
              const box = taxBoxes.find(b => b.number === boxNum);
              if (!box) return null;
              return (
                <Link key={boxNum} href={`/cases/${box.id}`} className="badge text-primary" style={{ background: 'var(--color-primary-light)', padding: 'var(--space-3) var(--space-4)', borderRadius: 'var(--radius-full)', fontWeight: 600, border: '1px solid var(--color-border)', textDecoration: 'none' }}>
                  Case {boxNum} <span style={{ opacity: 0.7, fontWeight: 400, marginLeft: 4 }}>- {box.label.substring(0, 30)}...</span>
                </Link>
              );
            })}
            <Link href="/cases" className="badge" style={{ padding: 'var(--space-3) var(--space-4)', borderRadius: 'var(--radius-full)', fontWeight: 600, border: '1px solid var(--color-border)', textDecoration: 'none' }}>
              Voir toutes les cases →
            </Link>
          </div>
        </div>
      </section>

      {/* Key Info Section */}
      <section className="section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="section-title">Informations essentielles et barème 2026</h2>
          <p className="section-subtitle">Les seuils, dates et chiffres clés officiels pour votre déclaration.</p>

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
              <p className="text-xs" style={{ color: 'var(--color-text-secondary)', marginTop: 'var(--space-3)' }}>
                Source : <a href="https://www.impots.gouv.fr/particulier/questions/comment-est-calcule-limpot-sur-le-revenu" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>impots.gouv.fr</a> — Barème officiel revenus 2025
              </p>
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
                  <span className="result-row-value">19 mai</span>
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
              <p className="text-xs" style={{ color: 'var(--color-text-secondary)', marginTop: 'var(--space-3)' }}>
                Source : <a href="https://www.impots.gouv.fr/particulier/la-declaration-de-revenus-en-ligne" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>impots.gouv.fr</a> — Campagne déclaration 2026
              </p>
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
              <p className="text-xs" style={{ color: 'var(--color-text-secondary)', marginTop: 'var(--space-3)' }}>
                Source : <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048941766" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Légifrance</a> — Art. 50-0 du CGI
              </p>
              <Link href="/outils/micro-vs-reel" className="btn btn-primary mt-4 w-full">
                Comparer micro vs réel →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)', padding: 'var(--space-16) 0' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="section-title text-center">Questions Fréquentes sur les Impôts (FAQ)</h2>
          <p className="section-subtitle text-center" style={{ maxWidth: '640px', margin: '0 auto var(--space-8)' }}>
            Les réponses aux questions les plus courantes pour vous aider lors de votre déclaration de revenus.
          </p>
          <div className="faq-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-6)' }}>
            {faqEntries.map((faq) => (
              <div key={faq.id} className="card" style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--color-text)' }}>
                  {faq.question}
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-md)', lineHeight: '1.7' }}>
                  {faq.answer}
                </p>
                {faq.sourceUrl && (
                  <p className="text-xs" style={{ color: 'var(--color-text-secondary)', marginTop: 'auto' }}>
                    Source : <a href={faq.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>{faq.sourceLabel || 'source officielle'}</a>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
