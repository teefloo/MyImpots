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
    color: 'primary',
  },
  {
    id: 'revenus-salaires',
    label: 'Traitements, salaires, pensions et rentes',
    description: 'Salaires, traitements, pensions de retraite, rentes viagères',
    icon: <BriefcaseIcon />,
    color: 'info',
  },
  {
    id: 'revenus-capitaux',
    label: 'Revenus des valeurs et capitaux mobiliers',
    description: 'Dividendes, intérêts, plus-values mobilières',
    icon: <TrendingUpIcon />,
    color: 'success',
  },
  {
    id: 'revenus-fonciers',
    label: 'Revenus fonciers',
    description: 'Revenus de locations immobilières',
    icon: <HomeIcon />,
    color: 'warning',
  },
  {
    id: 'revenus-pro',
    label: 'Revenus des professions non salariées',
    description: 'BIC, BNC, BA — Bénéfices industriels, non commerciaux, agricoles',
    icon: <BuildingIcon />,
    color: 'error',
  },
  {
    id: 'plus-values',
    label: 'Plus-values et gains divers',
    description: 'Plus-values immobilières, mobilières et gains exceptionnels',
    icon: <BarChartIcon />,
    color: 'accent',
  },
  {
    id: 'charges-deductibles',
    label: 'Charges déductibles',
    description: 'CSG déductible, pensions alimentaires, épargne retraite',
    icon: <FileTextIcon />,
    color: 'primary',
  },
  {
    id: 'reductions',
    label: 'Réductions d\'impôt',
    description: 'Dons, investissements locatifs, souscriptions au capital de PME',
    icon: <TagIcon />,
    color: 'info',
  },
  {
    id: 'credits',
    label: 'Crédits d\'impôt',
    description: 'Emploi à domicile, garde d\'enfants, transition énergétique',
    icon: <CoinsIcon />,
    color: 'warning',
  },
  {
    id: 'revenus-etrangers',
    label: 'Revenus encaissés à l\'étranger',
    description: 'Revenus de source étrangère, conventions fiscales internationales',
    icon: <GlobeIcon />,
    color: 'success',
  },
  {
    id: 'prelevement-source',
    label: 'Prélèvement à la source',
    description: 'Acomptes, retenues à la source déjà prélevées',
    icon: <RefreshCwIcon />,
    color: 'error',
  },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function getCategoryColor(id: string): string {
  return getCategoryById(id)?.color ?? 'accent';
}
