export interface TaxForm {
    id: string;
    cerfa: string;
    title: string;
    description: string;
    officialUrl: string;
    categoryIds: string[];
}

export const forms: TaxForm[] = [
    {
        id: '2042',
        cerfa: 'Cerfa n° 2042',
        title: 'Déclaration des revenus',
        description:
            'Formulaire principal de déclaration de revenus. Il regroupe la situation du foyer fiscal, les traitements et salaires, les pensions et retraites, les revenus de capitaux mobiliers, et les charges déductibles du revenu global.',
        officialUrl: 'https://www.impots.gouv.fr/formulaire/2042/declaration-des-revenus',
        categoryIds: ['situation', 'revenus-salaires', 'revenus-capitaux', 'charges-deductibles', 'prelevement-source'],
    },
    {
        id: '2042-C',
        cerfa: 'Cerfa n° 2042-C',
        title: 'Déclaration complémentaire des revenus',
        description:
            'Formulaire complémentaire pour déclarer certains revenus spécifiques : plus-values mobilières et immobilières, revenus encaissés à l\'étranger, et certaines situations particulières non couvertes par le formulaire principal.',
        officialUrl: 'https://www.impots.gouv.fr/formulaire/2042/declaration-des-revenus',
        categoryIds: ['plus-values', 'revenus-etrangers', 'revenus-capitaux'],
    },
    {
        id: '2042-C-PRO',
        cerfa: 'Cerfa n° 2042-C-PRO',
        title: 'Déclaration complémentaire des professions non salariées',
        description:
            'Formulaire dédié aux travailleurs indépendants, auto-entrepreneurs et professions libérales. Il permet de déclarer les bénéfices industriels et commerciaux (BIC), les bénéfices non commerciaux (BNC) et les bénéfices agricoles (BA).',
        officialUrl: 'https://www.impots.gouv.fr/formulaire/2042/declaration-des-revenus',
        categoryIds: ['revenus-pro'],
    },
    {
        id: '2042-RICI',
        cerfa: 'Cerfa n° 2042-RICI',
        title: 'Réductions et crédits d\'impôt',
        description:
            'Formulaire annexe pour déclarer l\'ensemble des réductions et crédits d\'impôt : dons aux associations, emploi d\'un salarié à domicile, frais de garde d\'enfants, investissements locatifs (Pinel, Denormandie), et bien d\'autres dispositifs fiscaux.',
        officialUrl: 'https://www.impots.gouv.fr/formulaire/2042/declaration-des-revenus',
        categoryIds: ['reductions', 'credits'],
    },
    {
        id: '2044',
        cerfa: 'Cerfa n° 2044',
        title: 'Déclaration des revenus fonciers',
        description:
            'Formulaire pour déclarer les revenus provenant de la location de biens immobiliers non meublés au régime réel. Permet de détailler les charges déductibles (intérêts d\'emprunt, travaux, taxes foncières, etc.) pour déterminer le revenu foncier net.',
        officialUrl: 'https://www.impots.gouv.fr/formulaire/2044/declaration-des-revenus-fonciers',
        categoryIds: ['revenus-fonciers'],
    },
    {
        id: '2047',
        cerfa: 'Cerfa n° 2047',
        title: 'Déclaration des revenus encaissés à l\'étranger',
        description:
            'Formulaire pour déclarer les revenus de source étrangère percus par un résident fiscal français. Les montants déclarés sont ensuite reportés sur la déclaration 2042 ou 2042-C selon leur nature, avec application des conventions fiscales internationales.',
        officialUrl: 'https://www.impots.gouv.fr/recherche/2047',
        categoryIds: ['revenus-etrangers'],
    },
];

export function getFormById(id: string): TaxForm | undefined {
    return forms.find((f) => f.id === id);
}
