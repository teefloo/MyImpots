# Graph Report - MyImpots  (2026-09-12)

## Corpus Check
- Corpus is ~25,377 words - fits in a single context window. You may not need a graph.

## Summary
- 348 nodes · 589 edges · 22 communities (15 shown, 3 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 22 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Tax Cases & Forms
- Tax Tools & Rates
- Package Dependencies
- Tool Catalog & Icons
- Project Documentation
- Framework Config & SEO
- Developer Guide & Integrations
- Case Search UI
- TypeScript Configuration
- Calendar & Checklist
- FAQ Content
- Brand Identity
- Document Checklist Tool
- Link Validation
- Window Icon Assets
- ESLint Configuration
- Document Icon
- Globe Icon

## God Nodes (most connected - your core abstractions)
1. `next` - 20 edges
2. `AGENTS.md Guide for AI Agents` - 20 edges
3. `MyImpots README` - 17 edges
4. `createPageMetadata()` - 16 edges
5. `compilerOptions` - 16 edges
6. `react` - 15 edges
7. `getCategoryPagePath()` - 10 edges
8. `taxBoxes` - 9 edges
9. `Static Data and Business Logic Directory` - 8 edges
10. `scripts` - 6 edges

## Surprising Connections (you probably didn't know these)
- `Next.js logo` --semantically_similar_to--> `Next.js 15`  [INFERRED] [semantically similar]
  public/next.svg → README.md
- `Vercel Logo — White Triangle Mark` --semantically_similar_to--> `Vercel`  [INFERRED] [semantically similar]
  public/vercel.svg → README.md
- `French Tax Guidance` --semantically_similar_to--> `Personal Taxation in France`  [INFERRED] [semantically similar]
  AGENTS.md → README.md
- `Next.js 16` --semantically_similar_to--> `Next.js 15`  [INFERRED] [semantically similar]
  AGENTS.md → README.md
- `React 19` --semantically_similar_to--> `React 19`  [INFERRED] [semantically similar]
  AGENTS.md → README.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **ImpôtsClairs Implementation Stack** — agents_next_js_16, agents_react_19, agents_typescript, agents_jimp, agents_sharp, agents_agentation [EXTRACTED 1.00]
- **MyImpots Application Stack** — readme_next_js_15, readme_react_19, readme_tailwind_css, readme_vercel_analytics [EXTRACTED 1.00]
- **MyImpots Tax Filing Support Features** — readme_income_tax_simulator, readme_micro_foncier_vs_reel, readme_real_expenses_calculator, readme_tax_credit_calculator, readme_declaration_box_explorer, readme_tax_calendar, readme_document_checklist, readme_tax_faq, readme_official_forms [EXTRACTED 1.00]
- **Finance-and-Growth Logo Motif** — public_logo_logo, public_logo_euro_symbol, public_logo_leaf_sprout_motif [EXTRACTED 1.00]
- **Financial growth logo composition** — src_app_icon_logo, src_app_icon_euro_symbol, src_app_icon_plant_motif, src_app_icon_financial_growth_theme [INFERRED 0.85]

## Communities (22 total, 3 thin omitted)

### Community 0 - "Tax Cases & Forms"
Cohesion: 0.08
Nodes (34): CategoryPage(), CategoryPageProps, generateMetadata(), getCategoryData(), BoxDetailClient(), BoxDetailPage(), generateMetadata(), getBoxDisplayName() (+26 more)

### Community 1 - "Tax Tools & Rates"
Cohesion: 0.06
Nodes (31): Décote, Micro Regimes, Tax Brackets, CreditsImpotClient(), metadata, FraisReelsClient(), metadata, metadata (+23 more)

### Community 2 - "Package Dependencies"
Cohesion: 0.05
Nodes (37): main(), sharp, dependencies, jimp, next, react, react-dom, sharp (+29 more)

### Community 3 - "Tool Catalog & Icons"
Cohesion: 0.12
Nodes (25): Next.js App Directory, metadata, metadata, BarChartIcon(), BriefcaseIcon(), BuildingIcon(), CalculatorIcon(), CalendarIcon() (+17 more)

### Community 4 - "Project Documentation"
Cohesion: 0.08
Nodes (26): French Tax Guidance, ImpôtsClairs Project, React 19, Vercel Logo — White Triangle Mark, MyImpots README, CERFA Forms, Tax Declaration Box Explorer, Employees (+18 more)

### Community 5 - "Framework Config & SEO"
Cohesion: 0.10
Nodes (14): nextConfig, securityHeaders, next, jsonLdWebSite, metadata, MicroVsReelClient(), metadata, Analytics (+6 more)

### Community 6 - "Developer Guide & Integrations"
Cohesion: 0.11
Nodes (21): AGENTS.md Guide for AI Agents, Agentation, Next.js Core Web Vitals ESLint Rules, .env.local, eslint-config-next, Explicit Parameter and Return Types, Global CSS Styling, Jimp (+13 more)

### Community 7 - "Case Search UI"
Cohesion: 0.14
Nodes (10): Reusable Components Directory, CasesClient(), CasesContent(), metadata, baseMetadata, Header(), SearchBar(), SearchBarProps (+2 more)

### Community 8 - "TypeScript Configuration"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 9 - "Calendar & Checklist"
Cohesion: 0.17
Nodes (11): src/data/categories.ts, Static Data and Business Logic Directory, src/data/documents-checklist.ts, Declaration Document Checklist, Tax Calendar, CalendrierClient(), metadata, HomeIcon() (+3 more)

### Community 10 - "FAQ Content"
Cohesion: 0.21
Nodes (10): Tax FAQ, react, FaqClient(), metadata, Accordion(), AccordionProps, HelpCircleIcon(), faqCategories (+2 more)

### Community 11 - "Brand Identity"
Cohesion: 0.28
Nodes (9): Euro Currency Symbol, Financial Growth Theme, Leaf and Sprout Motif, Euro-and-Leaf Logo, Soft Pastel Color Palette, Euro symbol, Financial growth theme, ImpôtsClairs logo icon (+1 more)

### Community 12 - "Document Checklist Tool"
Cohesion: 0.32
Nodes (4): DocumentsClient(), metadata, getDocumentsForProfile(), profiles

### Community 13 - "Link Validation"
Cohesion: 0.47
Nodes (5): checkLinks(), __dirname, __filename, getFiles(), srcDir

### Community 14 - "Window Icon Assets"
Cohesion: 0.67
Nodes (3): Three-Dot Controls, Window Frame, Window Icon

## Knowledge Gaps
- **131 isolated node(s):** `eslintConfig`, `securityHeaders`, `nextConfig`, `name`, `version` (+126 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 168 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Framework Config & SEO` to `Tax Cases & Forms`, `Tax Tools & Rates`, `Package Dependencies`, `Tool Catalog & Icons`, `Case Search UI`, `Calendar & Checklist`, `FAQ Content`, `Document Checklist Tool`?**
  _High betweenness centrality (0.157) - this node is a cross-community bridge._
- **Why does `react` connect `FAQ Content` to `Tax Tools & Rates`, `Package Dependencies`, `Tool Catalog & Icons`, `Framework Config & SEO`, `Case Search UI`, `Calendar & Checklist`, `Document Checklist Tool`?**
  _High betweenness centrality (0.133) - this node is a cross-community bridge._
- **Why does `AGENTS.md Guide for AI Agents` connect `Developer Guide & Integrations` to `Calendar & Checklist`, `Tool Catalog & Icons`, `Project Documentation`, `Case Search UI`?**
  _High betweenness centrality (0.109) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `securityHeaders`, `nextConfig` to the rest of the system?**
  _131 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Tax Cases & Forms` be split into smaller, more focused modules?**
  _Cohesion score 0.08078431372549019 - nodes in this community are weakly interconnected._
- **Should `Tax Tools & Rates` be split into smaller, more focused modules?**
  _Cohesion score 0.06097560975609756 - nodes in this community are weakly interconnected._
- **Should `Package Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.05263157894736842 - nodes in this community are weakly interconnected._