import { UserIcon, BriefcaseIcon, TrendingUpIcon, HomeIcon, BuildingIcon, BarChartIcon, FileTextIcon, TagIcon, CoinsIcon, GlobeIcon, RefreshCwIcon } from '../components/SVGIcons';

export interface Category {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  parentId?: string;
}

export const categories: Category[] = [
  {
    id: 'situation',
    label: 'Situation du foyer fiscal',
    description: 'Informations personnelles, état civil, personnes à charge',
    icon: <UserIcon />,
    color: '#6366f1',
  },
  {
    id: 'revenus-salaires',
    label: 'Traitements, salaires, pensions et rentes',
    description: 'Salaires, traitements, pensions de retraite, rentes viagères',
    icon: <BriefcaseIcon />,
    color: '#3b82f6',
  },
  {
    id: 'revenus-capitaux',
    label: 'Revenus des valeurs et capitaux mobiliers',
    description: 'Dividendes, intérêts, plus-values mobilières',
    icon: <TrendingUpIcon />,
    color: '#10b981',
  },
  {
    id: 'revenus-fonciers',
    label: 'Revenus fonciers',
    description: 'Revenus de locations immobilières',
    icon: <HomeIcon />,
    color: '#f59e0b',
  },
  {
    id: 'revenus-pro',
    label: 'Revenus des professions non salariées',
    description: 'BIC, BNC, BA — Bénéfices industriels, non commerciaux, agricoles',
    icon: <BuildingIcon />,
    color: '#ef4444',
  },
  {
    id: 'plus-values',
    label: 'Plus-values et gains divers',
    description: 'Plus-values immobilières, mobilières et gains exceptionnels',
    icon: <BarChartIcon />,
    color: '#8b5cf6',
  },
  {
    id: 'charges-deductibles',
    label: 'Charges déductibles',
    description: 'CSG déductible, pensions alimentaires, épargne retraite',
    icon: <FileTextIcon />,
    color: '#ec4899',
  },
  {
    id: 'reductions',
    label: 'Réductions d\'impôt',
    description: 'Dons, investissements locatifs, souscriptions au capital de PME',
    icon: <TagIcon />,
    color: '#14b8a6',
  },
  {
    id: 'credits',
    label: 'Crédits d\'impôt',
    description: 'Emploi à domicile, garde d\'enfants, transition énergétique',
    icon: <CoinsIcon />,
    color: '#f97316',
  },
  {
    id: 'revenus-etrangers',
    label: 'Revenus encaissés à l\'étranger',
    description: 'Revenus de source étrangère, conventions fiscales internationales',
    icon: <GlobeIcon />,
    color: '#06b6d4',
  },
  {
    id: 'prelevement-source',
    label: 'Prélèvement à la source',
    description: 'Acomptes, retenues à la source déjà prélevées',
    icon: <RefreshCwIcon />,
    color: '#84cc16',
  },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function getCategoryColor(id: string): string {
  return getCategoryById(id)?.color ?? '#6b7280';
}
