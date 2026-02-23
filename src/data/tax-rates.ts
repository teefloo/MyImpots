export interface TaxBracket {
    min: number;
    max: number | null;
    rate: number;
}

export const ANNEE_REVENUS = 2025;
export const ANNEE_DECLARATION = 2026;

export const taxBrackets: TaxBracket[] = [
    { min: 0, max: 11600, rate: 0 },
    { min: 11601, max: 29579, rate: 0.11 },
    { min: 29580, max: 84577, rate: 0.30 },
    { min: 84578, max: 181917, rate: 0.41 },
    { min: 181918, max: null, rate: 0.45 },
];

export const PLAFOND_QUOTIENT_FAMILIAL = 1807;
export const DECOTE_SEUIL_CELIBATAIRE = 1929;
export const DECOTE_SEUIL_COUPLE = 3191;
export const PLAFOND_AVANTAGES_FISCAUX = 10000;
export const PLAFOND_AVANTAGES_FISCAUX_OUTREMER = 18000;

export const SEUIL_IMPOSITION_CELIBATAIRE = 17604;

export const CDHR_SEUIL_CELIBATAIRE = 250000;
export const CDHR_SEUIL_COUPLE = 500000;
export const CDHR_TAUX_MINIMUM = 0.20;

export const ABATTEMENT_10_POURCENT_MIN = 495;
export const ABATTEMENT_10_POURCENT_MAX = 14171;

export interface MicroRegime {
    type: string;
    label: string;
    plafond: number;
    abattement: number;
    abattementMin: number;
}

export const microRegimes: MicroRegime[] = [
    {
        type: 'bic-vente',
        label: 'Micro-BIC — Achat/revente, vente de denrées',
        plafond: 188700,
        abattement: 0.71,
        abattementMin: 305,
    },
    {
        type: 'bic-service',
        label: 'Micro-BIC — Prestations de services',
        plafond: 77700,
        abattement: 0.50,
        abattementMin: 305,
    },
    {
        type: 'bnc',
        label: 'Micro-BNC — Activités libérales',
        plafond: 77700,
        abattement: 0.34,
        abattementMin: 305,
    },
    {
        type: 'meuble-non-classe',
        label: 'Meublé de tourisme non classé',
        plafond: 15000,
        abattement: 0.30,
        abattementMin: 305,
    },
    {
        type: 'meuble-classe',
        label: 'Meublé de tourisme classé / Chambres d\'hôtes',
        plafond: 77700,
        abattement: 0.50,
        abattementMin: 305,
    },
];

export interface CotisationSociale {
    type: string;
    label: string;
    taux2025: number;
    taux2026: number;
    tauxAcre2025: number;
    tauxAcre2026: number;
}

export const cotisationsSociales: CotisationSociale[] = [
    {
        type: 'bic-vente',
        label: 'BIC — Achat/revente',
        taux2025: 0.123,
        taux2026: 0.123,
        tauxAcre2025: 0.062,
        tauxAcre2026: 0.062,
    },
    {
        type: 'bic-service',
        label: 'BIC — Prestations de services',
        taux2025: 0.213,
        taux2026: 0.213,
        tauxAcre2025: 0.107,
        tauxAcre2026: 0.107,
    },
    {
        type: 'bnc',
        label: 'BNC — Activités libérales (hors CIPAV)',
        taux2025: 0.246,
        taux2026: 0.256,
        tauxAcre2025: 0.123,
        tauxAcre2026: 0.131,
    },
];

export interface CreditImpot {
    id: string;
    label: string;
    taux: number;
    plafondDepenses: number;
    creditMax: number;
    type: 'credit' | 'reduction';
    description: string;
    majorations?: string;
}

export const creditsImpots: CreditImpot[] = [
    {
        id: 'emploi-domicile',
        label: 'Emploi d\'un salarié à domicile',
        taux: 0.50,
        plafondDepenses: 12000,
        creditMax: 6000,
        type: 'credit',
        description:
            'Crédit d\'impôt de 50 % des dépenses engagées pour l\'emploi d\'un salarié à domicile (ménage, jardinage, aide aux personnes, soutien scolaire, etc.).',
        majorations:
            '+1 500 € par personne à charge (max 15 000 €). Première année d\'emploi direct : 15 000 € (max 18 000 € avec majorations).',
    },
    {
        id: 'garde-enfants',
        label: 'Frais de garde d\'enfants',
        taux: 0.50,
        plafondDepenses: 3500,
        creditMax: 1750,
        type: 'credit',
        description:
            'Crédit d\'impôt de 50 % des frais de garde hors du domicile pour les enfants de moins de 6 ans au 1er janvier 2025. Plafond de 3 500 € par enfant (1 750 € en garde alternée).',
    },
    {
        id: 'dons-interet-general',
        label: 'Dons aux organismes d\'intérêt général',
        taux: 0.66,
        plafondDepenses: -1,
        creditMax: -1,
        type: 'reduction',
        description:
            'Réduction d\'impôt de 66 % des sommes versées aux organismes d\'intérêt général, dans la limite de 20 % du revenu imposable.',
    },
    {
        id: 'dons-aide-personnes',
        label: 'Dons aux organismes d\'aide aux personnes en difficulté (Coluche)',
        taux: 0.75,
        plafondDepenses: 2000,
        creditMax: 1500,
        type: 'reduction',
        description:
            'Réduction d\'impôt de 75 % des dons effectués au profit d\'organismes venant en aide aux personnes en difficulté, dans la limite de 2 000 € (doublé depuis octobre 2025). Au-delà, réduction de 66 %.',
    },
    {
        id: 'investissement-pinel',
        label: 'Investissement locatif Pinel / Pinel+',
        taux: 0.12,
        plafondDepenses: 300000,
        creditMax: 36000,
        type: 'reduction',
        description:
            'Réduction d\'impôt pour investissement locatif dans le neuf. Taux variable selon durée d\'engagement : 12 % sur 6 ans, 18 % sur 9 ans, 21 % sur 12 ans. Plafond : 300 000 € et 5 500 €/m².',
    },
    {
        id: 'transition-energetique',
        label: 'Travaux de rénovation énergétique (MaPrimeRénov\')',
        taux: 0.30,
        plafondDepenses: 0,
        creditMax: 0,
        type: 'credit',
        description:
            'Depuis 2020, le CITE est remplacé par MaPrimeRénov\'. Certains foyers peuvent encore bénéficier d\'un crédit d\'impôt résiduel pour des travaux engagés en transition.',
    },
    {
        id: 'pme-capital',
        label: 'Souscription au capital de PME',
        taux: 0.25,
        plafondDepenses: 50000,
        creditMax: 12500,
        type: 'reduction',
        description:
            'Réduction d\'impôt de 25 % des sommes investies dans le capital de PME, dans la limite de 50 000 € (personne seule) ou 100 000 € (couple). Plafond doublé pour un couple.',
    },
    {
        id: 'frais-comptabilite',
        label: 'Frais de comptabilité et d\'adhésion à un CGA/AGA',
        taux: 1.0,
        plafondDepenses: 915,
        creditMax: 915,
        type: 'reduction',
        description:
            'Réduction d\'impôt égale aux 2/3 des frais de comptabilité et d\'adhésion à un centre de gestion agréé ou une association agréée, dans la limite de 915 € par an.',
    },
];

export function calculateTax(revenuImposable: number, parts: number): {
    impotBrut: number;
    impotNet: number;
    tauxMarginal: number;
    tauxMoyen: number;
    tranchesDetail: { bracket: TaxBracket; montantImpose: number; impot: number }[];
    decote: number;
} {
    const quotient = revenuImposable / parts;
    let impotParPart = 0;
    const tranchesDetail: { bracket: TaxBracket; montantImpose: number; impot: number }[] = [];
    let tauxMarginal = 0;

    for (const bracket of taxBrackets) {
        const max = bracket.max ?? Infinity;
        if (quotient > bracket.min) {
            const montantImpose = Math.min(quotient, max) - bracket.min;
            const impot = montantImpose * bracket.rate;
            impotParPart += impot;
            tauxMarginal = bracket.rate;
            tranchesDetail.push({
                bracket,
                montantImpose: Math.round(montantImpose * parts),
                impot: Math.round(impot * parts),
            });
        }
    }

    const impotBrut = Math.round(impotParPart * parts);

    let decote = 0;
    if (parts <= 1 && impotBrut < DECOTE_SEUIL_CELIBATAIRE) {
        decote = Math.max(0, Math.round(873 - impotBrut * 0.4525));
    } else if (parts > 1 && impotBrut < DECOTE_SEUIL_COUPLE) {
        decote = Math.max(0, Math.round(1444 - impotBrut * 0.4525));
    }

    const impotNet = Math.max(0, impotBrut - decote);
    const tauxMoyen = revenuImposable > 0 ? impotNet / revenuImposable : 0;

    return {
        impotBrut,
        impotNet,
        tauxMarginal,
        tauxMoyen,
        tranchesDetail,
        decote,
    };
}
