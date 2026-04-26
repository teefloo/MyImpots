export interface TaxBox {
    id: string;
    number: string;
    label: string;
    formId: string;
    categoryId: string;
    description: string;
    examples?: string[];
    eligibility?: string;
    relatedBoxes?: string[];
    officialRef?: string;
    keywords: string[];
}

export const taxBoxes: TaxBox[] = [
    // ═══════════════════════════════════════
    // FORMULAIRE 2042 — SITUATION DU FOYER
    // ═══════════════════════════════════════
    {
        id: '2042-0AM',
        number: '0AM',
        label: 'Marié(e)s',
        formId: '2042',
        categoryId: 'situation',
        description: 'Cochez cette case si vous étiez marié(e) au 1er janvier 2025 ou si vous vous êtes marié(e) en cours d\'année 2025. En cas de mariage en 2025, vous pouvez opter pour l\'imposition commune (par défaut) ou séparée.',
        examples: ['Couple marié depuis 2020 : cocher 0AM', 'Mariage le 15 juin 2025 : cocher 0AM et indiquer la date en case 0DA'],
        keywords: ['marié', 'mariage', 'couple', 'situation matrimoniale'],
    },
    {
        id: '2042-0AC',
        number: '0AC',
        label: 'Pacsé(e)s',
        formId: '2042',
        categoryId: 'situation',
        description: 'Cochez cette case si vous étiez lié(e) par un PACS au 1er janvier 2025 ou si vous avez conclu un PACS en cours d\'année 2025.',
        keywords: ['pacsé', 'pacs', 'partenaire', 'union civile'],
    },
    {
        id: '2042-0AD',
        number: '0AD',
        label: 'Divorcé(e)s / Séparé(e)s',
        formId: '2042',
        categoryId: 'situation',
        description: 'Cochez cette case si vous étiez divorcé(e), séparé(e) de corps ou de fait au 1er janvier 2025, ou si un jugement de divorce ou une rupture de PACS est intervenu en 2025.',
        keywords: ['divorce', 'séparation', 'séparé'],
    },
    {
        id: '2042-0AV',
        number: '0AV',
        label: 'Veuf(ve)',
        formId: '2042',
        categoryId: 'situation',
        description: 'Cochez cette case si votre conjoint est décédé avant le 1er janvier 2025 et que vous ne vous êtes pas remarié(e). Si le décès est survenu en 2025, cochez 0AZ.',
        keywords: ['veuf', 'veuve', 'décès', 'conjoint décédé'],
    },
    {
        id: '2042-F',
        number: 'F',
        label: 'Nombre d\'enfants à charge',
        formId: '2042',
        categoryId: 'situation',
        description: 'Indiquez le nombre d\'enfants mineurs ou handicapés quel que soit leur âge, vivant chez vous au 1er janvier 2025. Chaque enfant à charge donne droit à 0,5 part (1 part à partir du 3ème enfant).',
        examples: ['2 enfants mineurs = 2 à inscrire en case F', '1 enfant handicapé majeur rattaché = 1 en case F + cocher case G'],
        keywords: ['enfants', 'charge', 'parts fiscales', 'quotient familial', 'mineurs'],
    },
    {
        id: '2042-J',
        number: 'J',
        label: 'Nombre d\'enfants en résidence alternée',
        formId: '2042',
        categoryId: 'situation',
        description: 'Nombre d\'enfants mineurs en résidence alternée suite à séparation. Chaque enfant en garde alternée donne droit à 0,25 part (0,5 part à partir du 3ème enfant).',
        keywords: ['garde alternée', 'résidence alternée', 'enfants séparés'],
    },
    {
        id: '2042-L',
        number: 'L',
        label: 'Parent isolé',
        formId: '2042',
        categoryId: 'situation',
        description: 'Cochez si vous êtes célibataire, divorcé(e), séparé(e) ou veuf(ve) et que vous vivez seul(e) au 1er janvier 2025 avec au moins un enfant à charge ou rattaché. Donne droit à une part supplémentaire.',
        eligibility: 'Vivre seul(e) au 1er janvier 2025 avec au moins un enfant à charge.',
        keywords: ['parent isolé', 'mère isolée', 'père isolé', 'célibataire enfant'],
    },
    {
        id: '2042-W',
        number: 'W',
        label: 'Invalidité du déclarant 1 (carte mobilité)',
        formId: '2042',
        categoryId: 'situation',
        description: 'Cochez si le déclarant 1 est titulaire de la carte mobilité inclusion mention invalidité (ou ancienne carte d\'invalidité ≥ 80%). Donne droit à une demi-part supplémentaire.',
        keywords: ['invalidité', 'handicap', 'carte mobilité', 'demi-part'],
    },

    // ═══════════════════════════════════════
    // FORMULAIRE 2042 — SALAIRES ET PENSIONS
    // ═══════════════════════════════════════
    {
        id: '2042-1AJ',
        number: '1AJ',
        label: 'Salaires, traitements — Déclarant 1',
        formId: '2042',
        categoryId: 'revenus-salaires',
        description: 'Montant net imposable des salaires et traitements perçus en 2025 par le déclarant 1. Ce montant figure sur le bulletin de salaire de décembre (cumul net imposable). Il inclut les heures supplémentaires au-delà de 7 500 € exonérés, les primes, les avantages en nature. L\'abattement de 10 % pour frais professionnels est appliqué automatiquement (sauf option frais réels).',
        examples: [
            'Salarié ayant perçu 30 000 € net imposable en 2025 → inscrire 30 000 en case 1AJ',
            'Inclut les indemnités de congés payés, primes, 13ème mois'
        ],
        relatedBoxes: ['1BJ', '1AK', '1GH'],
        officialRef: 'BOFiP BOI-RSA-CHAMP',
        keywords: ['salaire', 'traitement', 'net imposable', 'bulletin paie', 'rémunération', 'salaires'],
    },
    {
        id: '2042-1BJ',
        number: '1BJ',
        label: 'Salaires, traitements — Déclarant 2',
        formId: '2042',
        categoryId: 'revenus-salaires',
        description: 'Montant net imposable des salaires et traitements perçus en 2025 par le déclarant 2 (conjoint ou partenaire de PACS). Mêmes règles que la case 1AJ.',
        relatedBoxes: ['1AJ'],
        keywords: ['salaire', 'conjoint', 'déclarant 2'],
    },
    {
        id: '2042-1AK',
        number: '1AK',
        label: 'Frais réels — Déclarant 1',
        formId: '2042',
        categoryId: 'revenus-salaires',
        description: 'Si vous optez pour la déduction des frais réels au lieu de l\'abattement de 10%, inscrivez ici le montant total de vos frais professionnels justifiés. Vous devez joindre le détail de vos frais. Les principaux frais déductibles sont : frais de transport domicile-travail, frais de repas (part excédant 5,35 €), frais de double résidence, frais de formation.',
        examples: [
            'Trajet domicile-travail 40 km A/R × 220 jours avec barème kilométrique',
            'Repas hors domicile : (coût réel − 5,35 €) × nombre de jours'
        ],
        eligibility: 'Justificatifs obligatoires à conserver pendant 3 ans.',
        relatedBoxes: ['1AJ', '1BK'],
        keywords: ['frais réels', 'frais professionnels', 'transport', 'kilométrique', 'repas'],
    },
    {
        id: '2042-1BK',
        number: '1BK',
        label: 'Frais réels — Déclarant 2',
        formId: '2042',
        categoryId: 'revenus-salaires',
        description: 'Frais réels du déclarant 2. Même fonctionnement que la case 1AK.',
        relatedBoxes: ['1BJ', '1AK'],
        keywords: ['frais réels', 'conjoint'],
    },
    {
        id: '2042-1GH',
        number: '1GH',
        label: 'Heures supplémentaires exonérées',
        formId: '2042',
        categoryId: 'revenus-salaires',
        description: 'Rémunération des heures supplémentaires et complémentaires exonérées d\'impôt dans la limite de 7 500 € par an. Ce montant n\'est pas inclus dans la case 1AJ. Au-delà de 7 500 €, l\'excédent est imposable et doit être ajouté en case 1AJ.',
        keywords: ['heures supplémentaires', 'exonération', 'heures complémentaires'],
    },
    {
        id: '2042-1AS',
        number: '1AS',
        label: 'Pensions de retraite — Déclarant 1',
        formId: '2042',
        categoryId: 'revenus-salaires',
        description: 'Total des pensions de retraite et rentes viagères à titre gratuit perçues en 2025 (régime général, complémentaire AGIRC-ARRCO, etc.). Un abattement de 10 % est appliqué automatiquement (minimum 442 €, maximum 4 321 € par foyer).',
        relatedBoxes: ['1BS'],
        keywords: ['pension', 'retraite', 'CNAV', 'AGIRC', 'ARRCO'],
    },
    {
        id: '2042-1BS',
        number: '1BS',
        label: 'Pensions de retraite — Déclarant 2',
        formId: '2042',
        categoryId: 'revenus-salaires',
        description: 'Pensions de retraite du déclarant 2. Mêmes règles que 1AS.',
        relatedBoxes: ['1AS'],
        keywords: ['pension', 'retraite', 'conjoint'],
    },
    {
        id: '2042-1AO',
        number: '1AO',
        label: 'Pensions alimentaires reçues — Déclarant 1',
        formId: '2042',
        categoryId: 'revenus-salaires',
        description: 'Pensions alimentaires reçues en vertu d\'une décision de justice ou d\'une convention. Elles sont imposables en totalité.',
        keywords: ['pension alimentaire', 'reçue', 'divorce'],
    },

    // ═══════════════════════════════════════
    // FORMULAIRE 2042 — CAPITAUX MOBILIERS
    // ═══════════════════════════════════════
    {
        id: '2042-2DC',
        number: '2DC',
        label: 'Revenus des actions et parts — Dividendes',
        formId: '2042',
        categoryId: 'revenus-capitaux',
        description: 'Dividendes et distributions perçus de sociétés françaises ou étrangères. Par défaut soumis au PFU (prélèvement forfaitaire unique) de 30 % (12,8 % IR + 17,2 % PS). Option possible pour le barème progressif avec abattement de 40 %.',
        examples: ['Dividendes reçus de votre SCI : reporter le montant en 2DC', 'Le montant est pré-rempli par la banque via l\'IFU'],
        relatedBoxes: ['2OP'],
        keywords: ['dividendes', 'actions', 'PFU', 'flat tax', 'distribution'],
    },
    {
        id: '2042-2TR',
        number: '2TR',
        label: 'Intérêts et autres produits de placement',
        formId: '2042',
        categoryId: 'revenus-capitaux',
        description: 'Intérêts de comptes courants, obligations, comptes à terme et autres produits de placement à revenu fixe. Soumis au PFU de 30 % par défaut. Les intérêts de livrets réglementés (Livret A, LDDS, LEP) sont exonérés et ne doivent pas être déclarés.',
        keywords: ['intérêts', 'placement', 'obligations', 'compte courant'],
    },
    {
        id: '2042-2OP',
        number: '2OP',
        label: 'Option pour le barème progressif',
        formId: '2042',
        categoryId: 'revenus-capitaux',
        description: 'Cochez cette case si vous souhaitez que vos revenus du capital (dividendes, intérêts, plus-values) soient imposés au barème progressif de l\'IR au lieu du PFU à 12,8 %. Cette option est globale : elle s\'applique à TOUS les revenus du capital. Avantageuse si votre TMI ≤ 11 %.',
        eligibility: 'Option irrévocable pour l\'année. S\'applique à l\'ensemble des revenus mobiliers du foyer.',
        keywords: ['option barème', 'PFU', 'flat tax', 'barème progressif'],
    },
    {
        id: '2042-2AB',
        number: '2AB',
        label: 'Crédits d\'impôt sur valeurs étrangères',
        formId: '2042',
        categoryId: 'revenus-capitaux',
        description: 'Crédit d\'impôt représentatif de l\'impôt retenu à la source à l\'étranger sur les dividendes et intérêts de source étrangère, en application des conventions fiscales internationales.',
        keywords: ['crédit impôt étranger', 'retenue source', 'convention fiscale'],
    },

    // ═══════════════════════════════════════
    // FORMULAIRE 2042 — CHARGES DÉDUCTIBLES
    // ═══════════════════════════════════════
    {
        id: '2042-6DE',
        number: '6DE',
        label: 'CSG déductible sur les revenus du patrimoine',
        formId: '2042',
        categoryId: 'charges-deductibles',
        description: 'Part de la CSG payée en 2025 sur les revenus du patrimoine de 2024 qui est déductible du revenu global. Le montant figure sur l\'avis d\'imposition de 2025. Concerne uniquement les contribuables ayant opté pour le barème progressif.',
        keywords: ['CSG', 'déductible', 'patrimoine', 'contributions sociales'],
    },
    {
        id: '2042-6GU',
        number: '6GU',
        label: 'Pension alimentaire versée à un enfant majeur',
        formId: '2042',
        categoryId: 'charges-deductibles',
        description: 'Pension alimentaire versée en 2025 à un enfant majeur non rattaché au foyer fiscal. Déductible dans la limite de 6 674 € par enfant (13 348 € si l\'enfant est chargé de famille). L\'enfant doit être dans le besoin et ne pas être rattaché à votre foyer fiscal.',
        examples: ['Versement de 500 €/mois à un enfant étudiant = 6 000 € déductibles'],
        eligibility: 'Enfant majeur dans le besoin, non rattaché au foyer fiscal.',
        keywords: ['pension alimentaire', 'enfant majeur', 'déductible', 'versée'],
    },
    {
        id: '2042-6GP',
        number: '6GP',
        label: 'Pension alimentaire versée à un ascendant',
        formId: '2042',
        categoryId: 'charges-deductibles',
        description: 'Pension alimentaire versée à un parent ou beau-parent dans le besoin. Déductible sans plafond si justifiée par l\'état de besoin. Comprend les versements en espèces et la valeur du logement fourni (forfait hébergement + nourriture : 3 968 € par personne en 2025).',
        keywords: ['pension alimentaire', 'ascendant', 'parent', 'hébergement'],
    },
    {
        id: '2042-6RS',
        number: '6RS',
        label: 'Cotisations épargne retraite PER — Déclarant 1',
        formId: '2042',
        categoryId: 'charges-deductibles',
        description: 'Cotisations versées sur un Plan d\'Épargne Retraite (PER individuel) en 2025. Déductibles du revenu global dans la limite du plafond épargne retraite (10 % des revenus professionnels nets de l\'année précédente, avec un minimum de 4 399 € et un maximum de 35 194 €).',
        relatedBoxes: ['6RT', '6QS'],
        keywords: ['PER', 'épargne retraite', 'PERP', 'déduction', 'cotisations'],
    },

    // ═══════════════════════════════════════
    // FORMULAIRE 2042 — REVENUS FONCIERS
    // ═══════════════════════════════════════
    {
        id: '2042-4BE',
        number: '4BE',
        label: 'Revenus fonciers — Régime micro-foncier',
        formId: '2042',
        categoryId: 'revenus-fonciers',
        description: 'Revenus bruts fonciers de 2025 si vous relevez du régime micro-foncier (revenus bruts ≤ 15 000 €). Un abattement forfaitaire de 30 % pour charges est appliqué automatiquement. Le revenu net imposable est donc 70 % du montant déclaré.',
        examples: ['Loyers perçus : 12 000 € → inscrire 12 000 en 4BE → revenu net = 8 400 €'],
        eligibility: 'Revenus fonciers bruts ≤ 15 000 € et pas de dispositif spécial (Pinel, Malraux, etc.).',
        relatedBoxes: ['4BA'],
        keywords: ['revenus fonciers', 'micro-foncier', 'loyers', 'location nue'],
    },
    {
        id: '2042-4BA',
        number: '4BA',
        label: 'Revenus fonciers — Régime réel (bénéfice)',
        formId: '2042',
        categoryId: 'revenus-fonciers',
        description: 'Bénéfice foncier net déterminé sur la déclaration 2044, après déduction des charges réelles (travaux, intérêts d\'emprunt, taxe foncière, assurances, frais de gestion). Reporter ici le résultat positif de la ligne 420 de la 2044.',
        relatedBoxes: ['4BE', '4BB', '4BC'],
        keywords: ['revenus fonciers', 'régime réel', 'bénéfice foncier', '2044'],
    },
    {
        id: '2042-4BB',
        number: '4BB',
        label: 'Déficit foncier imputable sur les revenus fonciers',
        formId: '2042',
        categoryId: 'revenus-fonciers',
        description: 'Part du déficit foncier 2025 provenant des charges autres que les intérêts d\'emprunt, imputable sur le revenu global dans la limite de 10 700 € par an.',
        keywords: ['déficit foncier', 'imputation', 'travaux'],
    },

    // ═══════════════════════════════════════
    // FORMULAIRE 2042-C-PRO — BIC MICRO
    // ═══════════════════════════════════════
    {
        id: '2042CPRO-5KO',
        number: '5KO',
        label: 'Micro-BIC — Ventes de marchandises (CA)',
        formId: '2042-C-PRO',
        categoryId: 'revenus-pro',
        description: 'Chiffre d\'affaires brut HT des activités de vente de marchandises, objets, fournitures et denrées, pour les micro-entrepreneurs BIC. Abattement forfaitaire de 71 %. Plafond : 188 700 €.',
        examples: ['Auto-entrepreneur e-commerce : CA 2025 = 45 000 € → inscrire 45 000 en 5KO → bénéfice imposable = 13 050 €'],
        eligibility: 'CA ≤ 188 700 € pour les activités d\'achat-revente.',
        keywords: ['micro-BIC', 'vente', 'marchandises', 'auto-entrepreneur', 'chiffre affaires'],
    },
    {
        id: '2042CPRO-5KP',
        number: '5KP',
        label: 'Micro-BIC — Prestations de services (CA)',
        formId: '2042-C-PRO',
        categoryId: 'revenus-pro',
        description: 'Chiffre d\'affaires brut HT des prestations de services BIC pour micro-entrepreneurs. Abattement forfaitaire de 50 %. Plafond : 77 700 €.',
        examples: ['Artisan prestataire de services : CA = 35 000 € → bénéfice imposable = 17 500 €'],
        eligibility: 'CA ≤ 77 700 € pour les prestations de services BIC.',
        keywords: ['micro-BIC', 'services', 'prestation', 'auto-entrepreneur'],
    },
    {
        id: '2042CPRO-5HQ',
        number: '5HQ',
        label: 'Micro-BNC — Recettes (CA)',
        formId: '2042-C-PRO',
        categoryId: 'revenus-pro',
        description: 'Recettes brutes HT des activités libérales (BNC) pour micro-entrepreneurs. Abattement forfaitaire de 34 %. Plafond : 77 700 €.',
        examples: ['Consultant freelance BNC : recettes 2025 = 55 000 € → bénéfice imposable = 36 300 €'],
        eligibility: 'Recettes ≤ 77 700 € pour les activités libérales.',
        keywords: ['micro-BNC', 'libéral', 'recettes', 'consultant', 'freelance'],
    },
    {
        id: '2042CPRO-5KC',
        number: '5KC',
        label: 'BIC réel — Bénéfice net (Déclarant 1)',
        formId: '2042-C-PRO',
        categoryId: 'revenus-pro',
        description: 'Bénéfice net imposable des activités BIC au régime réel simplifié ou normal, avant CGA/viseur. Report du résultat de la liasse fiscale 2031.',
        keywords: ['BIC réel', 'bénéfice', 'liasse fiscale'],
    },
    {
        id: '2042CPRO-5QC',
        number: '5QC',
        label: 'BNC réel — Bénéfice net (Déclarant 1)',
        formId: '2042-C-PRO',
        categoryId: 'revenus-pro',
        description: 'Bénéfice net imposable des activités BNC au régime de la déclaration contrôlée. Report du résultat de la déclaration 2035.',
        keywords: ['BNC réel', 'bénéfice', 'déclaration contrôlée', '2035'],
    },
    {
        id: '2042CPRO-5HY',
        number: '5HY',
        label: 'Versement libératoire IR micro-entrepreneur',
        formId: '2042-C-PRO',
        categoryId: 'revenus-pro',
        description: 'Cochez si vous avez opté pour le versement libératoire de l\'impôt sur le revenu (prélèvement trimestriel ou mensuel calculé sur le CA). Le CA est tout de même à déclarer pour le calcul du taux effectif et des prestations sociales.',
        eligibility: 'Revenu fiscal de référence N-2 ≤ 28 797 € (1 part) pour bénéficier du versement libératoire.',
        keywords: ['versement libératoire', 'micro-entrepreneur', 'option', 'prélèvement'],
    },

    // ═══════════════════════════════════════
    // FORMULAIRE 2042-RICI — RÉDUCTIONS
    // ═══════════════════════════════════════
    {
        id: '2042RICI-7UF',
        number: '7UF',
        label: 'Dons aux organismes d\'intérêt général — 66%',
        formId: '2042-RICI',
        categoryId: 'reductions',
        description: 'Sommes versées en 2025 à des organismes d\'intérêt général (associations reconnues d\'utilité publique, fondations, etc.). Réduction d\'impôt de 66 % dans la limite de 20 % du revenu imposable. L\'excédent est reportable sur 5 ans.',
        examples: ['Don de 500 € à une association culturelle → réduction de 330 €'],
        relatedBoxes: ['7UD'],
        keywords: ['dons', 'association', 'réduction', '66%', 'intérêt général', 'mécénat'],
    },
    {
        id: '2042RICI-7UD',
        number: '7UD',
        label: 'Dons Coluche — Aide aux personnes en difficulté — 75%',
        formId: '2042-RICI',
        categoryId: 'reductions',
        description: 'Dons aux organismes d\'aide aux personnes en difficulté (Restos du Cœur, Secours Populaire, Croix-Rouge, etc.). Réduction de 75 % dans la limite de 2 000 € de dons (soit 1 500 € de réduction max). Au-delà, la fraction excédentaire bénéficie de la réduction de 66 %.',
        examples: ['Don de 1 000 € aux Restos du Cœur → réduction de 750 €', 'Don de 3 000 € : 75% × 2 000 = 1 500 € + 66% × 1 000 = 660 € → total 2 160 €'],
        relatedBoxes: ['7UF'],
        keywords: ['dons', 'Coluche', 'aide', '75%', 'Restos du Cœur', 'personnes en difficulté'],
    },
    {
        id: '2042RICI-7DB',
        number: '7DB',
        label: 'Emploi d\'un salarié à domicile',
        formId: '2042-RICI',
        categoryId: 'credits',
        description: 'Sommes versées en 2025 pour l\'emploi d\'un salarié à domicile (ménage, repassage, jardinage, aide aux personnes âgées, soutien scolaire, garde d\'enfants à domicile). Crédit d\'impôt de 50 % des dépenses, plafond 12 000 € (+ 1 500 €/pers. à charge, max 15 000 €). Première année : plafond 15 000 € (max 18 000 €).',
        examples: ['8 000 € versés à une aide ménagère en 2025 → crédit d\'impôt de 4 000 €'],
        keywords: ['emploi domicile', 'salarié', 'ménage', 'aide', 'services personne', 'CESU'],
    },
    {
        id: '2042RICI-7GA',
        number: '7GA',
        label: 'Frais de garde — 1er enfant',
        formId: '2042-RICI',
        categoryId: 'credits',
        description: 'Frais de garde hors du domicile du 1er enfant de moins de 6 ans au 1er janvier 2025. Crédit d\'impôt de 50 % des dépenses retenues dans la limite de 3 500 € par enfant, soit un crédit maximum de 1 750 €.',
        eligibility: 'Enfant < 6 ans au 01/01/2025. Garde en crèche, halte-garderie, assistante maternelle agréée, garderie périscolaire.',
        relatedBoxes: ['7GB', '7GC'],
        keywords: ['garde enfants', 'crèche', 'assistante maternelle', 'frais garde'],
    },
    {
        id: '2042RICI-7GB',
        number: '7GB',
        label: 'Frais de garde — 2ème enfant',
        formId: '2042-RICI',
        categoryId: 'credits',
        description: 'Mêmes conditions que 7GA pour le 2ème enfant de moins de 6 ans.',
        relatedBoxes: ['7GA'],
        keywords: ['garde enfants', '2ème enfant'],
    },
    {
        id: '2042RICI-7EA',
        number: '7EA',
        label: 'Enfants au collège',
        formId: '2042-RICI',
        categoryId: 'reductions',
        description: 'Nombre d\'enfants à charge poursuivant des études au collège au 31 décembre 2025. Réduction d\'impôt forfaitaire de 61 € par enfant.',
        relatedBoxes: ['7EC', '7EF'],
        keywords: ['scolarité', 'collège', 'études', 'enfants'],
    },
    {
        id: '2042RICI-7EC',
        number: '7EC',
        label: 'Enfants au lycée',
        formId: '2042-RICI',
        categoryId: 'reductions',
        description: 'Nombre d\'enfants à charge poursuivant des études au lycée au 31 décembre 2025. Réduction d\'impôt forfaitaire de 153 € par enfant.',
        relatedBoxes: ['7EA', '7EF'],
        keywords: ['scolarité', 'lycée', 'études'],
    },
    {
        id: '2042RICI-7EF',
        number: '7EF',
        label: 'Enfants dans l\'enseignement supérieur',
        formId: '2042-RICI',
        categoryId: 'reductions',
        description: 'Nombre d\'enfants à charge poursuivant des études supérieures au 31 décembre 2025. Réduction d\'impôt forfaitaire de 183 € par enfant.',
        relatedBoxes: ['7EA', '7EC'],
        keywords: ['scolarité', 'études supérieures', 'université', 'étudiant'],
    },

    // ═══════════════════════════════════════
    // FORMULAIRE 2042-C — PLUS-VALUES
    // ═══════════════════════════════════════
    {
        id: '2042C-3VG',
        number: '3VG',
        label: 'Plus-values de cession de valeurs mobilières',
        formId: '2042-C',
        categoryId: 'plus-values',
        description: 'Montant net des plus-values de cession de valeurs mobilières (actions, obligations, OPCVM) réalisées en 2025. Soumises au PFU de 30 % par défaut, ou au barème progressif sur option (case 2OP). En cas d\'option barème, abattement pour durée de détention possible pour les titres acquis avant 2018.',
        examples: ['Vente d\'actions avec gain de 5 000 € → inscrire 5 000 en 3VG', 'PFU : IR 12,8% + PS 17,2% = 1 500 €'],
        relatedBoxes: ['3VH', '2OP'],
        keywords: ['plus-values', 'cession', 'actions', 'valeurs mobilières', 'bourse'],
    },
    {
        id: '2042C-3VH',
        number: '3VH',
        label: 'Moins-values de cession',
        formId: '2042-C',
        categoryId: 'plus-values',
        description: 'Montant net des moins-values de cession de valeurs mobilières. Les moins-values sont imputables sur les plus-values de même nature réalisées la même année ou les 10 années suivantes.',
        keywords: ['moins-values', 'pertes', 'cession', 'report'],
    },
    {
        id: '2042C-3AN',
        number: '3AN',
        label: 'Plus-values en report d\'imposition',
        formId: '2042-C',
        categoryId: 'plus-values',
        description: 'Plus-values dont l\'imposition a été reportée en application de dispositifs spécifiques (apport-cession art. 150-0 B ter du CGI, contribution à une société contrôlée, etc.).',
        keywords: ['report', 'imposition', 'apport-cession', '150-0 B ter'],
    },

    // ═══════════════════════════════════════
    // FORMULAIRE 2044 — REVENUS FONCIERS
    // ═══════════════════════════════════════
    {
        id: '2044-211',
        number: '211',
        label: 'Recettes brutes (Loyers encaissés)',
        formId: '2044',
        categoryId: 'revenus-fonciers',
        description: 'Total des loyers encaissés au cours de l\'année 2025, hors charges récupérables.',
        examples: ['Loyer mensuel 800€ hors charges × 12 mois = 9 600€ en ligne 211'],
        keywords: ['loyers', 'recettes', 'brutes', 'encaissement'],
    },
    {
        id: '2044-212',
        number: '212',
        label: 'Dépenses mises par convention à la charge des locataires',
        formId: '2044',
        categoryId: 'revenus-fonciers',
        description: 'Dépenses incombant au propriétaire mais mises à la charge du locataire par une convention (exemple : taxe foncière, grosses réparations). Ces montants doivent avoir été remboursés par le locataire.',
        keywords: ['dépenses', 'locataire', 'convention'],
    },
    {
        id: '2044-213',
        number: '213',
        label: 'Recettes exceptionnelles',
        formId: '2044',
        categoryId: 'revenus-fonciers',
        description: 'Subventions de l\'ANAH, indemnités d\'assurance suite à un sinistre (dégât des eaux, incendie, etc.).',
        keywords: ['subventions', 'ANAH', 'assurance', 'sinistre'],
    },
    {
        id: '2044-221',
        number: '221',
        label: 'Frais d\'administration et de gestion',
        formId: '2044',
        categoryId: 'revenus-fonciers',
        description: 'Rémunération des concierges et gardiens, honoraires versés à un tiers pour la gestion de l\'immeuble (syndic, agence de location) et procédure (frais d\'avocat, d\'huissier). Un forfait de 20 € par local est accordé de droit pour les autres frais de gestion (case 222).',
        examples: ['Frais d\'agence de gestion locative : 8% des loyers → inscrire en ligne 221'],
        keywords: ['administration', 'gestion', 'syndic', 'agence', 'gardien'],
    },
    {
        id: '2044-222',
        number: '222',
        label: 'Autres frais de gestion',
        formId: '2044',
        categoryId: 'revenus-fonciers',
        description: 'Déduction forfaitaire annuelle de 20 € par bien loué pour couvrir les frais de correspondance, téléphone, frais de matériel de bureau.',
        keywords: ['frais', 'correspondance', 'forfait 20€'],
    },
    {
        id: '2044-223',
        number: '223',
        label: 'Primes d\'assurance',
        formId: '2044',
        categoryId: 'revenus-fonciers',
        description: 'Primes d\'assurance propriétaire non occupant (PNO), garantie loyers impayés (GLI), etc. payées dans l\'année.',
        keywords: ['assurance', 'PNO', 'GLI', 'loyers impayés'],
    },
    {
        id: '2044-224',
        number: '224',
        label: 'Dépenses de réparation et d\'entretien',
        formId: '2044',
        categoryId: 'revenus-fonciers',
        description: 'Dépenses ayant pour objet de maintenir ou remettre le bien en bon état d\'usage sans en modifier la consistance (réparation chaudière, toiture, plomberie). Ne concerne pas les travaux d\'agrandissement ou de construction.',
        eligibility: 'Factures acquittées en 2025. Ne comprend pas le travail personnel du propriétaire.',
        keywords: ['réparation', 'entretien', 'travaux', 'plomberie', 'toiture'],
    },
    {
        id: '2044-225',
        number: '225',
        label: 'Dépenses d\'amélioration',
        formId: '2044',
        categoryId: 'revenus-fonciers',
        description: 'Travaux apportant un équipement ou un élément de confort nouveau au local (chauffage central, isolation, cuisine aménagée).',
        keywords: ['amélioration', 'travaux', 'isolation', 'confort'],
    },
    {
        id: '2044-227',
        number: '227',
        label: 'Taxes foncières et taxes annexes',
        formId: '2044',
        categoryId: 'revenus-fonciers',
        description: 'Taxe foncière (hors taxe d\'enlèvement des ordures ménagères si elle est récupérable sur le locataire) payée en 2025.',
        keywords: ['taxe foncière', 'impôts locaux'],
    },
    {
        id: '2044-250',
        number: '250',
        label: 'Intérêts d\'emprunt',
        formId: '2044',
        categoryId: 'revenus-fonciers',
        description: 'Intérêts des emprunts contractés pour l\'acquisition, la construction, la réparation ou l\'amélioration du bien, ainsi que les frais d\'emprunt (assurance emprunteur, frais de dossier, frais de constitution de garantie).',
        examples: ['Intérêts annuels + assurance du prêt immo → inscrire en ligne 250'],
        keywords: ['intérêts', 'emprunt', 'crédit immobilier', 'assurance prêt'],
    },
    {
        id: '2044-420',
        number: '420',
        label: 'Bénéfice foncier',
        formId: '2044',
        categoryId: 'revenus-fonciers',
        description: 'Résultat positif de la soustraction : Recettes - Charges. Ce montant est à reporter sur la déclaration principale 2042 à la case 4BA.',
        relatedBoxes: ['4BA'],
        keywords: ['bénéfice', 'résultat', 'report'],
    },
    {
        id: '2044-440',
        number: '440',
        label: 'Déficit imputable sur le revenu global',
        formId: '2044',
        categoryId: 'revenus-fonciers',
        description: 'Part du déficit (hors intérêts d\'emprunt) imputable sur le revenu global, dans la limite de 10 700 €. À reporter en case 4BC de la 2042.',
        relatedBoxes: ['4BC'],
        keywords: ['déficit', 'imputable', 'revenu global'],
    },
    {
        id: '2044-441',
        number: '441',
        label: 'Déficit imputable sur les revenus fonciers',
        formId: '2044',
        categoryId: 'revenus-fonciers',
        description: 'Part du déficit excédant 10 700 € ou provenant des intérêts d\'emprunt. Il est reportable sur les revenus fonciers des 10 années suivantes. À reporter en case 4BB de la 2042.',
        relatedBoxes: ['4BB'],
        keywords: ['déficit', 'reportable', 'intérêts'],
    },

    // ═══════════════════════════════════════
    // FORMULAIRE 2047 — REVENUS ÉTRANGERS
    // ═══════════════════════════════════════
    {
        id: '2047-1',
        number: 'Rubrique 1',
        label: 'Traitements, salaires, pensions',
        formId: '2047',
        categoryId: 'revenus-etrangers',
        description: 'Salaires et pensions de source étrangère. Ces montants doivent ensuite être reportés sur la déclaration 2042 en case 1AF à 1DF.',
        relatedBoxes: ['1AF', '1AG', '1AL', '1AM'],
        keywords: ['salaires', 'pensions', 'étranger', 'frontaliers'],
    },
    {
        id: '2047-2',
        number: 'Rubrique 2',
        label: 'Revenus des valeurs mobilières',
        formId: '2047',
        categoryId: 'revenus-etrangers',
        description: 'Dividendes, intérêts et autres produits de source étrangère. À reporter ensuite sur la 2042 (cases 2DC, 2TR, etc.) et/ou pour le calcul du crédit d\'impôt (case 2AB).',
        relatedBoxes: ['2DC', '2TR', '2AB'],
        keywords: ['dividendes', 'intérêts', 'étranger', 'comptes titres'],
    },
    {
        id: '2047-8',
        number: 'Rubrique 8',
        label: 'Revenus exonérés retenus pour le calcul du taux effectif',
        formId: '2047',
        categoryId: 'revenus-etrangers',
        description: 'Revenus exonérés en France en vertu d\'une convention fiscale mais retenus pour déterminer le taux d\'imposition applicable aux autres revenus (taux effectif). À reporter en case 8TI de la 2042-C.',
        relatedBoxes: ['8TI'],
        keywords: ['exonération', 'taux effectif', 'convention fiscale'],
    },
];

export function searchTaxBoxes(query: string): TaxBox[] {
    const q = query.toLowerCase().trim();
    if (!q) return [];

    return taxBoxes.filter((box) => {
        if (box.number.toLowerCase() === q) return true;
        if (box.number.toLowerCase().includes(q)) return true;
        if (box.label.toLowerCase().includes(q)) return true;
        if (box.description.toLowerCase().includes(q)) return true;
        if (box.keywords.some((k) => k.toLowerCase().includes(q))) return true;
        return false;
    }).sort((a, b) => {
        const aExact = a.number.toLowerCase() === q ? 0 : 1;
        const bExact = b.number.toLowerCase() === q ? 0 : 1;
        if (aExact !== bExact) return aExact - bExact;
        const aStartsWith = a.number.toLowerCase().startsWith(q) ? 0 : 1;
        const bStartsWith = b.number.toLowerCase().startsWith(q) ? 0 : 1;
        return aStartsWith - bStartsWith;
    });
}

export function getTaxBoxById(id: string): TaxBox | undefined {
    return taxBoxes.find((b) => b.id === id);
}

export function getTaxBoxesByForm(formId: string): TaxBox[] {
    return taxBoxes.filter((b) => b.formId === formId);
}

export function getTaxBoxesByCategory(categoryId: string): TaxBox[] {
    return taxBoxes.filter((b) => b.categoryId === categoryId);
}
