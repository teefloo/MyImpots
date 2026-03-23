import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Calcul, Simulateur et Guide des Impôts en France 2025 | MyImpots',
  description: 'Le site n°1 pour comprendre, simuler et optimiser vos impôts en France. Accédez au dictionnaire complet des cases fiscales (2042) et à nos simulateurs 100% gratuits.',
  openGraph: {
    title: 'Calcul, Simulateur et Guide des Impôts en France 2025',
    description: 'Comprendre, simuler et optimiser vos impôts en France facilement avec MyImpots.',
    url: '/',
  },
  twitter: {
    title: 'Calcul, Simulateur et Guide des Impôts en France 2025',
    description: 'Comprendre, simuler et optimiser vos impôts en France facilement avec MyImpots.',
  },
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

  const faqs = [
    {
      question: "Comment corriger une erreur sur ma déclaration d'impôts 2024 (revenus 2023) ou 2025 ?",
      answer: "Si vous constatez une erreur après avoir validé votre déclaration en ligne, vous pouvez utiliser le service de correction en ligne sur le site impots.gouv.fr. Ce service est généralement ouvert à partir de mi-août jusqu'à fin novembre pour la campagne de l'année en cours."
    },
    {
      question: "Quelles sont les dates limites de la déclaration de revenus en 2025 ?",
      answer: "La campagne ouvre courant avril. La date limite pour la déclaration en ligne varie ensuite selon votre numéro de département (Zone 1 : départements 01 à 19 fin mai, Zone 2 : départements 20 à 54 fin mai/début juin, Zone 3 : départements 55 à 976 début juin). La déclaration au format papier a une date limite unique fixée en mai."
    },
    {
      question: "Quelle est la principale différence entre la déduction forfaitaire de 10 % et les frais réels ?",
      answer: "Un abattement forfaitaire de 10 % est automatiquement appliqué sur vos salaires pour couvrir vos frais professionnels. Cependant, si vos frais réels (télétravail, repas, trajets réguliers domicile-travail) sont supérieurs à ce montant de 10 %, il est plus avantageux de renoncer à l'abattement et de déclarer vos frais au réel."
    },
    {
      question: "Vaut-il mieux choisir le régime Micro-BIC/BNC ou le régime réel pour mon activité ?",
      answer: "Le régime Micro est le plus simple et applique un abattement forfaitaire sur vos recettes pour calculer votre bénéfice imposé (34 % pour le BNC, 50 % ou 71 % pour le BIC selon l'activité). Si vos charges réelles (achats, frais de fonctionnement, loyers pro) excèdent cet abattement, le régime réel sera financièrement plus intéressant face aux impôts."
    }
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
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
            Déclaration de Revenus & Impôts en France 2025
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
          <h2 className="section-title">Informations Essentielles & Barème Impôt 2025</h2>
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

      {/* FAQ Section */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)', padding: 'var(--space-16) 0' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="section-title text-center">Questions Fréquentes sur les Impôts (FAQ)</h2>
          <p className="section-subtitle text-center" style={{ maxWidth: '800px', margin: '0 auto var(--space-8)' }}>
            Les réponses aux questions les plus courantes pour vous aider lors de votre déclaration de revenus.
          </p>
          <div className="faq-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-6)' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} className="card" style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--color-text)' }}>
                  {faq.question}
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-md)', lineHeight: '1.7' }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
