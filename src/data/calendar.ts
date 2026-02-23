export interface CalendarEvent {
    id: string;
    date: string;
    endDate?: string;
    title: string;
    description: string;
    type: 'deadline' | 'payment' | 'info' | 'opening';
    zone?: string;
    important: boolean;
}

export const calendarEvents: CalendarEvent[] = [
    {
        id: 'avance-credits-janvier',
        date: '2026-01-15',
        title: 'Versement de l\'avance sur les réductions et crédits d\'impôt',
        description:
            'Les foyers fiscaux ayant bénéficié de réductions ou crédits d\'impôt en 2025 reçoivent une avance de 60 % du montant de l\'année précédente. Concerne notamment l\'emploi à domicile, les dons, la garde d\'enfants.',
        type: 'payment',
        important: true,
    },
    {
        id: 'ouverture-declaration',
        date: '2026-04-09',
        title: 'Ouverture du service de déclaration en ligne',
        description:
            'Le service de déclaration des revenus 2025 en ligne ouvre sur impots.gouv.fr. Vous pouvez accéder à votre déclaration pré-remplie et la compléter.',
        type: 'opening',
        important: true,
    },
    {
        id: 'limite-papier',
        date: '2026-05-20',
        title: 'Date limite — Déclaration papier',
        description:
            'Date limite pour déposer votre déclaration de revenus au format papier, quel que soit votre département de résidence. Cachet de la poste faisant foi.',
        type: 'deadline',
        important: true,
    },
    {
        id: 'limite-zone1',
        date: '2026-05-21',
        title: 'Date limite en ligne — Zone 1 (départements 01 à 19)',
        description:
            'Date limite à 23h59 pour la déclaration en ligne des contribuables résidant dans les départements 01 (Ain) à 19 (Corrèze) et les non-résidents.',
        type: 'deadline',
        zone: 'Zone 1 — Départements 01 à 19 et non-résidents',
        important: true,
    },
    {
        id: 'limite-zone2',
        date: '2026-05-28',
        title: 'Date limite en ligne — Zone 2 (départements 20 à 54)',
        description:
            'Date limite à 23h59 pour la déclaration en ligne des contribuables résidant dans les départements 20 (Corse-du-Sud) à 54 (Meurthe-et-Moselle).',
        type: 'deadline',
        zone: 'Zone 2 — Départements 20 à 54',
        important: true,
    },
    {
        id: 'limite-zone3',
        date: '2026-06-04',
        title: 'Date limite en ligne — Zone 3 (départements 55 à 976)',
        description:
            'Date limite à 23h59 pour la déclaration en ligne des contribuables résidant dans les départements 55 (Meuse) à 976 (Mayotte), y compris l\'Outre-mer.',
        type: 'deadline',
        zone: 'Zone 3 — Départements 55 à 974/976',
        important: true,
    },
    {
        id: 'rectification',
        date: '2026-06-30',
        title: 'Possibilité de rectifier la déclaration initiale',
        description:
            'Si vous avez commis une erreur dans votre déclaration, vous pouvez la corriger directement en ligne. Cette possibilité est ouverte dès la fin de la période de déclaration.',
        type: 'info',
        important: false,
    },
    {
        id: 'avis-imposition',
        date: '2026-07-01',
        endDate: '2026-08-31',
        title: 'Réception des avis d\'imposition',
        description:
            'Les avis d\'imposition sont mis en ligne progressivement entre juillet et août. Les contribuables non imposables ou bénéficiaires d\'un remboursement reçoivent leur avis en premier.',
        type: 'info',
        important: true,
    },
    {
        id: 'remboursement-trop-percu',
        date: '2026-07-15',
        endDate: '2026-08-15',
        title: 'Remboursement du trop-perçu',
        description:
            'Si le montant prélevé à la source en 2025 est supérieur à l\'impôt dû, le trop-perçu est remboursé par virement bancaire, généralement entre mi-juillet et mi-août.',
        type: 'payment',
        important: true,
    },
    {
        id: 'correction-en-ligne',
        date: '2026-08-01',
        endDate: '2026-12-15',
        title: 'Service de correction en ligne ouvert',
        description:
            'La période de correction en ligne est ouverte. Vous pouvez modifier votre déclaration après réception de l\'avis d\'imposition si vous constatez une erreur ou un oubli.',
        type: 'info',
        important: false,
    },
    {
        id: 'nouveau-taux-pas',
        date: '2026-09-01',
        title: 'Application du nouveau taux de prélèvement à la source',
        description:
            'Le nouveau taux de prélèvement à la source, calculé sur la base de vos revenus 2025 déclarés en 2026, s\'applique à partir du 1er septembre. Il remplace le taux précédent.',
        type: 'info',
        important: true,
    },
    {
        id: 'solde-impot',
        date: '2026-09-15',
        title: 'Date limite de paiement du solde de l\'impôt',
        description:
            'Si votre impôt dépasse les sommes déjà prélevées à la source, le solde est à régler avant cette date. Pour les soldes supérieurs à 300 €, l\'administration procède à un étalement sur les derniers mois de l\'année (prélèvements de septembre à décembre).',
        type: 'payment',
        important: true,
    },
];

export function getDepartmentZone(departement: string): { zone: string; deadline: string } {
    const num = parseInt(departement, 10);
    if (isNaN(num)) {
        return { zone: 'Zone 1', deadline: '21 mai 2026' };
    }
    if (num >= 1 && num <= 19) {
        return { zone: 'Zone 1 — Dépts 01 à 19', deadline: '21 mai 2026' };
    }
    if (num >= 20 && num <= 54) {
        return { zone: 'Zone 2 — Dépts 20 à 54', deadline: '28 mai 2026' };
    }
    return { zone: 'Zone 3 — Dépts 55 à 976', deadline: '4 juin 2026' };
}

export function getUpcomingEvents(): CalendarEvent[] {
    const now = new Date();
    return calendarEvents
        .filter((e) => new Date(e.date) >= now)
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}
