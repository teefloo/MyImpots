import { BriefcaseIcon, BuildingIcon, UserIcon, HomeIcon, TrendingUpIcon, GlobeIcon, FileTextIcon, CoinsIcon, BarChartIcon, EditIcon } from '../components/SVGIcons';

export interface DocumentItem {
    id: string;
    label: string;
    description: string;
    profiles: string[];
}

export interface DocumentCategory {
    id: string;
    label: string;
    icon: React.ReactNode;
    documents: DocumentItem[];
}

export const profiles = [
    { id: 'salarie', label: 'Salarié(e)', icon: <BriefcaseIcon /> },
    { id: 'independant', label: 'Indépendant / Auto-entrepreneur', icon: <BuildingIcon /> },
    { id: 'retraite', label: 'Retraité(e)', icon: <UserIcon /> },
    { id: 'proprietaire', label: 'Propriétaire bailleur', icon: <HomeIcon /> },
    { id: 'investisseur', label: 'Investisseur (valeurs mobilières)', icon: <TrendingUpIcon /> },
    { id: 'etranger', label: 'Revenus étrangers', icon: <GlobeIcon /> },
    { id: 'tous', label: 'Tous les contribuables', icon: <UserIcon /> },
];

export const documentCategories: DocumentCategory[] = [
    {
        id: 'identite',
        label: 'Documents d\'identité et informations personnelles',
        icon: <FileTextIcon />,
        documents: [
            {
                id: 'numero-fiscal',
                label: 'Numéro fiscal (SPI)',
                description: 'Votre numéro d\'identification fiscale à 13 chiffres, figurant sur votre avis d\'imposition ou courrier de l\'administration fiscale.',
                profiles: ['tous'],
            },
            {
                id: 'acces-en-ligne',
                label: 'Identifiants impots.gouv.fr',
                description: 'Numéro fiscal, mot de passe et éventuellement numéro d\'accès en ligne pour la déclaration sur internet.',
                profiles: ['tous'],
            },
            {
                id: 'rib',
                label: 'RIB (Relevé d\'Identité Bancaire)',
                description: 'Coordonnées bancaires pour le remboursement éventuel ou le prélèvement de l\'impôt.',
                profiles: ['tous'],
            },
            {
                id: 'changement-situation',
                label: 'Justificatifs de changement de situation',
                description: 'Acte de mariage, PACS, jugement de divorce, certificat de décès le cas échéant.',
                profiles: ['tous'],
            },
        ],
    },
    {
        id: 'revenus-activite',
        label: 'Revenus d\'activité',
        icon: <CoinsIcon />,
        documents: [
            {
                id: 'bulletins-salaire',
                label: 'Bulletins de salaire de décembre 2025',
                description: 'Le cumul annuel figurant sur le bulletin de décembre permet de vérifier le montant pré-rempli. Conservez tous les bulletins de l\'année.',
                profiles: ['salarie'],
            },
            {
                id: 'attestation-employeur',
                label: 'Attestation fiscale de l\'employeur',
                description: 'Document récapitulatif des salaires, avantages en nature et retenues de l\'année. Parfois appelé certificat de revenus.',
                profiles: ['salarie'],
            },
            {
                id: 'indemnites-chomage',
                label: 'Attestation Pôle Emploi / France Travail',
                description: 'Relevé des indemnités chômage perçues en 2025. Les allocations sont imposables et pré-remplies.',
                profiles: ['salarie'],
            },
            {
                id: 'ca-micro',
                label: 'Relevé de chiffre d\'affaires annuel',
                description: 'Récapitulatif du chiffre d\'affaires déclaré à l\'URSSAF en 2025, par trimestre ou par mois.',
                profiles: ['independant'],
            },
            {
                id: 'comptabilite',
                label: 'Bilan et compte de résultat (régime réel)',
                description: 'Documents comptables de l\'exercice : grand livre, balance, bilan, compte de résultat, annexes.',
                profiles: ['independant'],
            },
            {
                id: 'liasse-fiscale',
                label: 'Liasse fiscale (formulaires 2031, 2035, 2065)',
                description: 'Déclaration professionnelle des résultats de votre activité, à remplir séparément selon votre régime.',
                profiles: ['independant'],
            },
        ],
    },
    {
        id: 'pensions',
        label: 'Pensions et retraites',
        icon: <UserIcon />,
        documents: [
            {
                id: 'releve-pension',
                label: 'Relevé annuel de pensions de retraite',
                description: 'Document émis par chaque caisse de retraite (CNAV, AGIRC-ARRCO, etc.) indiquant le montant brut imposable versé en 2025.',
                profiles: ['retraite'],
            },
            {
                id: 'pension-invalidite',
                label: 'Attestation de pension d\'invalidité',
                description: 'Si vous percevez une pension d\'invalidité, le relevé annuel de la CPAM ou de votre organisme.',
                profiles: ['retraite'],
            },
            {
                id: 'pension-alimentaire-recue',
                label: 'Justificatifs de pensions alimentaires reçues',
                description: 'Relevés bancaires ou décision de justice attestant des pensions alimentaires perçues en 2025 (imposables).',
                profiles: ['tous'],
            },
        ],
    },
    {
        id: 'revenus-patrimoine',
        label: 'Revenus du patrimoine',
        icon: <BarChartIcon />,
        documents: [
            {
                id: 'ifu',
                label: 'IFU — Imprimé Fiscal Unique',
                description: 'Document émis par votre banque récapitulant dividendes, intérêts, plus-values mobilières et prélèvements sociaux de l\'année.',
                profiles: ['investisseur'],
            },
            {
                id: 'releve-comptes',
                label: 'Relevés de comptes titres et PEA',
                description: 'Détail des opérations sur vos comptes titres ordinaires, PEA, PEA-PME, assurance-vie.',
                profiles: ['investisseur'],
            },
            {
                id: 'quittances-loyer',
                label: 'Quittances de loyer / Relevé des loyers perçus',
                description: 'Récapitulatif mensuel des loyers encaissés en 2025 pour chaque bien immobilier donné en location.',
                profiles: ['proprietaire'],
            },
            {
                id: 'charges-foncier',
                label: 'Justificatifs de charges foncières',
                description: 'Factures de travaux, avis de taxe foncière, attestation d\'intérêts d\'emprunt, quittances d\'assurance, frais de gestion.',
                profiles: ['proprietaire'],
            },
            {
                id: 'declaration-2044',
                label: 'Déclaration 2044 des revenus fonciers',
                description: 'Si vous relevez du régime réel, cette déclaration annexe détaille vos revenus et charges foncières.',
                profiles: ['proprietaire'],
            },
        ],
    },
    {
        id: 'charges-deductions',
        label: 'Charges déductibles et réductions d\'impôt',
        icon: <EditIcon />,
        documents: [
            {
                id: 'pension-versee',
                label: 'Justificatifs de pension alimentaire versée',
                description: 'Décision de justice et relevés bancaires prouvant le versement de pensions alimentaires déductibles du revenu global.',
                profiles: ['tous'],
            },
            {
                id: 'epargne-retraite',
                label: 'Attestation d\'épargne retraite (PER, PERP, Madelin)',
                description: 'Relevé annuel de vos versements sur un plan d\'épargne retraite. Les cotisations sont déductibles du revenu global dans certaines limites.',
                profiles: ['tous'],
            },
            {
                id: 'recus-dons',
                label: 'Reçus fiscaux de dons',
                description: 'Reçus émis par les associations et organismes bénéficiaires de vos dons. Nécessaires pour la réduction d\'impôt de 66 % ou 75 %.',
                profiles: ['tous'],
            },
            {
                id: 'emploi-domicile',
                label: 'Attestation emploi à domicile',
                description: 'Attestation CESU, Pajemploi ou de l\'organisme prestataire récapitulant les sommes versées pour l\'emploi d\'un salarié à domicile.',
                profiles: ['tous'],
            },
            {
                id: 'garde-enfants',
                label: 'Attestation de frais de garde',
                description: 'Attestation de la crèche, halte-garderie ou assistante maternelle agréée indiquant les frais de garde payés en 2025.',
                profiles: ['tous'],
            },
            {
                id: 'frais-reels',
                label: 'Justificatifs de frais réels',
                description: 'Factures de transport, tickets de repas, attestation de double résidence, frais de formation. À conserver en cas de contrôle.',
                profiles: ['salarie'],
            },
            {
                id: 'investissement-locatif',
                label: 'Justificatifs d\'investissement locatif',
                description: 'Acte d\'acquisition, engagement de location, attestation de loyer pour les dispositifs Pinel, Denormandie, etc.',
                profiles: ['proprietaire'],
            },
        ],
    },
    {
        id: 'etranger',
        label: 'Revenus de source étrangère',
        icon: <GlobeIcon />,
        documents: [
            {
                id: 'revenus-etrangers-justif',
                label: 'Justificatifs de revenus étrangers',
                description: 'Bulletins de salaire, relevés de pension, IFU étrangers, attestation de l\'employeur étranger.',
                profiles: ['etranger'],
            },
            {
                id: 'impot-etranger',
                label: 'Attestation d\'impôt payé à l\'étranger',
                description: 'Preuve du paiement de l\'impôt dans le pays source, nécessaire pour bénéficier du crédit d\'impôt ou de l\'exonération.',
                profiles: ['etranger'],
            },
            {
                id: 'comptes-etrangers',
                label: 'Déclaration de comptes bancaires à l\'étranger',
                description: 'Formulaire 3916 : déclaration obligatoire de chaque compte bancaire, contrat d\'assurance-vie ou compte d\'actifs numériques détenu à l\'étranger.',
                profiles: ['etranger'],
            },
        ],
    },
];

export function getDocumentsForProfile(profileId: string): DocumentCategory[] {
    return documentCategories
        .map((cat) => ({
            ...cat,
            documents: cat.documents.filter(
                (doc) => doc.profiles.includes(profileId) || doc.profiles.includes('tous')
            ),
        }))
        .filter((cat) => cat.documents.length > 0);
}
