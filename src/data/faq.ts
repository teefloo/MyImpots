export interface FaqEntry {
    id: string;
    question: string;
    answer: string;
    category: string;
}

export const faqCategories = [
    { id: 'general', label: 'Questions générales' },
    { id: 'declaration', label: 'Déclaration de revenus' },
    { id: 'calcul', label: 'Calcul de l\'impôt' },
    { id: 'deductions', label: 'Déductions et réductions' },
    { id: 'situation', label: 'Situations particulières' },
    { id: 'paiement', label: 'Paiement et prélèvement' },
];

export const faqEntries: FaqEntry[] = [
    {
        id: 'qui-doit-declarer',
        question: 'Qui doit déclarer ses revenus ?',
        answer:
            'Toute personne domiciliée fiscalement en France doit déclarer ses revenus, même si elle n\'est pas imposable. Les personnes âgées de 18 ans et plus au 1er janvier 2025 qui n\'étaient pas rattachées au foyer fiscal de leurs parents doivent effectuer leur propre déclaration. Les non-résidents percevant des revenus de source française doivent également déclarer.',
        category: 'general',
    },
    {
        id: 'premiere-declaration',
        question: 'Comment faire ma première déclaration de revenus ?',
        answer:
            'Si vous aviez 18 ans ou plus au 1er janvier 2025 et que vous n\'étiez pas rattaché au foyer fiscal de vos parents, vous devez effectuer votre première déclaration. Rendez-vous sur impots.gouv.fr, rubrique « Votre espace particulier ». Vous aurez besoin de votre numéro fiscal (figurant sur le courrier envoyé par l\'administration), de votre numéro d\'accès en ligne et de votre revenu fiscal de référence (0 pour une première déclaration). Vous pouvez également déposer une déclaration papier au centre des finances publiques de votre domicile.',
        category: 'general',
    },
    {
        id: 'declaration-obligatoire-en-ligne',
        question: 'La déclaration en ligne est-elle obligatoire ?',
        answer:
            'Oui, la déclaration en ligne est obligatoire pour tous les contribuables disposant d\'un accès à internet à leur résidence principale. Des exceptions existent si vous résidez dans une zone blanche (absence de couverture internet), si vous ne savez pas utiliser internet, ou si vous effectuez votre toute première déclaration. Dans ces cas, la déclaration papier reste possible.',
        category: 'declaration',
    },
    {
        id: 'dates-limites',
        question: 'Quelles sont les dates limites de déclaration en 2026 ?',
        answer:
            'Pour la déclaration des revenus 2025 :\n• Déclaration papier : 20 mai 2026\n• En ligne, zone 1 (départements 01-19 et non-résidents) : 21 mai 2026 à 23h59\n• En ligne, zone 2 (départements 20-54) : 28 mai 2026 à 23h59\n• En ligne, zone 3 (départements 55-976) : 4 juin 2026 à 23h59',
        category: 'declaration',
    },
    {
        id: 'declaration-pre-remplie',
        question: 'Ma déclaration est pré-remplie : dois-je quand même la vérifier ?',
        answer:
            'Absolument ! La déclaration pré-remplie reprend les informations transmises par les employeurs, caisses de retraite et organismes. Cependant, des erreurs peuvent se glisser. Vérifiez soigneusement chaque montant, notamment les salaires, pensions, et revenus de capitaux mobiliers. Ajoutez les revenus non pré-remplis (revenus fonciers, BIC/BNC, revenus étrangers) et les charges/réductions qui ne figurent pas automatiquement.',
        category: 'declaration',
    },
    {
        id: 'quotient-familial',
        question: 'Comment fonctionne le quotient familial ?',
        answer:
            'Le quotient familial divise le revenu imposable par le nombre de parts fiscales du foyer pour atténuer la progressivité de l\'impôt. Un célibataire sans enfant a 1 part. Un couple marié/pacsé a 2 parts. Chaque enfant à charge ajoute 0,5 part (1 part à partir du 3ème enfant). L\'avantage fiscal est plafonné à 1 807 € par demi-part supplémentaire au-delà de celles accordées pour la situation matrimoniale.',
        category: 'calcul',
    },
    {
        id: 'tranches-imposition',
        question: 'Quelles sont les tranches d\'imposition pour les revenus 2025 ?',
        answer:
            'Le barème 2026 (revenus 2025) est le suivant, par part de quotient familial :\n• Jusqu\'à 11 600 € : 0 %\n• De 11 601 € à 29 579 € : 11 %\n• De 29 580 € à 84 577 € : 30 %\n• De 84 578 € à 181 917 € : 41 %\n• Au-delà de 181 917 € : 45 %\n\nAttention : le taux marginal d\'imposition (TMI) ne s\'applique qu\'à la fraction de revenus qui tombe dans cette tranche, pas à l\'ensemble des revenus.',
        category: 'calcul',
    },
    {
        id: 'taux-marginal-vs-moyen',
        question: 'Quelle est la différence entre le taux marginal et le taux moyen ?',
        answer:
            'Le taux marginal d\'imposition (TMI) est le taux qui s\'applique à la dernière tranche de vos revenus. C\'est le taux qui s\'appliquera à chaque euro supplémentaire gagné. Le taux moyen d\'imposition est le rapport entre l\'impôt total et le revenu total. Par exemple, un célibataire gagnant 35 000 € a un TMI de 30 %, mais son taux moyen est d\'environ 9,7 %. Le TMI est utile pour évaluer l\'impact fiscal d\'un revenu supplémentaire, tandis que le taux moyen reflète votre charge fiscale réelle.',
        category: 'calcul',
    },
    {
        id: 'frais-reels-ou-abattement',
        question: 'Dois-je opter pour les frais réels ou l\'abattement de 10 % ?',
        answer:
            'Par défaut, une déduction forfaitaire de 10 % est appliquée sur vos salaires pour tenir compte des frais professionnels (minimum 495 €, maximum 14 171 €). Si vos frais réels (transports domicile-travail, repas, formations, double résidence, etc.) dépassent ce forfait, vous avez intérêt à opter pour la déduction des frais réels. Dans ce cas, vous devez pouvoir justifier chaque dépense. Utilisez notre comparateur pour déterminer la meilleure option.',
        category: 'deductions',
    },
    {
        id: 'micro-vs-reel',
        question: 'Auto-entrepreneur : micro-BIC/BNC ou régime réel ?',
        answer:
            'En micro-BIC ou micro-BNC, un abattement forfaitaire est appliqué à votre chiffre d\'affaires (71 % pour la vente, 50 % pour les services BIC, 34 % pour les BNC). Si vos charges réelles dépassent cet abattement, le régime réel peut être plus avantageux. Par exemple, un consultant BNC avec 50 000 € de CA et 25 000 € de charges réelles : en micro-BNC, son bénéfice imposable est 50 000 × (1 - 34 %) = 33 000 €. Au réel, il est de 50 000 - 25 000 = 25 000 €. Le régime réel est ici plus intéressant.',
        category: 'deductions',
    },
    {
        id: 'plafonnement-niches',
        question: 'Qu\'est-ce que le plafonnement des niches fiscales ?',
        answer:
            'Le total de vos réductions et crédits d\'impôt est plafonné à 10 000 € par an (18 000 € pour les investissements Outre-mer et le cinéma/audiovisuel). Ce plafond s\'applique par foyer fiscal. Certains dispositifs ne sont pas concernés : dons aux associations, emploi à domicile (crédit d\'impôt, non soumis au plafonnement mais ayant ses propres limites), et certaines anciennes réductions. La part excédentaire n\'ouvre pas droit à avantage fiscal et ne peut être reportée.',
        category: 'deductions',
    },
    {
        id: 'revenus-fonciers-micro-reel',
        question: 'Revenus fonciers : micro-foncier ou régime réel ?',
        answer:
            'Si vos revenus fonciers bruts annuels ne dépassent pas 15 000 €, vous pouvez bénéficier du régime micro-foncier avec un abattement forfaitaire de 30 %. Au-delà, ou sur option, le régime réel (déclaration 2044) permet de déduire les charges réelles : travaux, intérêts d\'emprunt, assurances, taxes foncières, frais de gestion. Le régime réel est souvent plus avantageux si les charges dépassent 30 % des revenus bruts, notamment en cas de travaux importants.',
        category: 'situation',
    },
    {
        id: 'prelevement-source',
        question: 'Comment fonctionne le prélèvement à la source ?',
        answer:
            'Depuis janvier 2019, l\'impôt est prélevé directement sur vos revenus chaque mois. Le taux est calculé à partir de votre dernière déclaration et actualisé en septembre. La déclaration annuelle reste obligatoire : elle permet de régulariser votre situation (remboursement si trop prélevé, complément si pas assez). Vous pouvez moduler votre taux en cours d\'année sur impots.gouv.fr si votre situation change significativement.',
        category: 'paiement',
    },
    {
        id: 'erreur-declaration',
        question: 'J\'ai fait une erreur dans ma déclaration, que faire ?',
        answer:
            'Si vous constatez une erreur après avoir validé votre déclaration en ligne :\n• Avant la date limite : vous pouvez modifier et revalider votre déclaration autant de fois que nécessaire\n• Après la date limite mais avant réception de l\'avis : contactez votre centre des finances publiques\n• Après réception de l\'avis : utilisez le service de correction en ligne (ouvert d\'août à décembre) ou déposez une déclaration rectificative\n\nEn cas d\'erreur de bonne foi, aucune pénalité n\'est appliquée.',
        category: 'declaration',
    },
    {
        id: 'rattachement-enfant-majeur',
        question: 'Dois-je rattacher mon enfant majeur à mon foyer fiscal ?',
        answer:
            'Un enfant majeur (18-24 ans, ou 25 ans s\'il est étudiant) peut demander à rester rattaché au foyer fiscal de ses parents. Avantages : augmentation du quotient familial (+0,5 ou +1 part). Inconvénient : ses revenus s\'ajoutent aux vôtres. Alternative : l\'enfant fait sa propre déclaration et les parents peuvent déduire une pension alimentaire (jusqu\'à 6 674 € par enfant, ou 13 348 € si l\'enfant est marié ou pacsé et demande le rattachement des deux conjoints). Comparez les deux options.',
        category: 'situation',
    },
    {
        id: 'couple-imposition',
        question: 'Mariage ou PACS en cours d\'année : comment déclarer ?',
        answer:
            'En cas de mariage ou PACS en 2025, vous avez deux options :\n1. Déclaration commune : une seule déclaration pour le couple sur la totalité de l\'année 2025 (option par défaut)\n2. Déclarations séparées : chacun déclare ses propres revenus pour l\'année entière\n\nL\'option la plus avantageuse dépend de l\'écart de revenus entre les conjoints. Plus l\'écart est important, plus la déclaration commune est avantageuse grâce au quotient familial. Utilisez notre simulateur pour comparer.',
        category: 'situation',
    },
    {
        id: 'revenus-etrangers',
        question: 'Comment déclarer des revenus perçus à l\'étranger ?',
        answer:
            'Les résidents fiscaux français doivent déclarer l\'ensemble de leurs revenus mondiaux. Les revenus de source étrangère sont à déclarer sur le formulaire 2047, puis reportés sur la 2042 ou 2042-C. En fonction de la convention fiscale entre la France et le pays source, les revenus peuvent être :\n• Exonérés en France avec prise en compte pour le taux effectif (méthode du taux effectif)\n• Imposés en France avec un crédit d\'impôt égal à l\'impôt étranger (méthode du crédit d\'impôt)\n\nConsultez la convention fiscale applicable pour connaître le traitement de chaque type de revenu.',
        category: 'situation',
    },
    {
        id: 'acompte-janvier',
        question: 'Je n\'ai pas reçu l\'acompte de janvier, est-ce normal ?',
        answer:
            'L\'avance de 60 % versée en janvier concerne uniquement les foyers qui ont bénéficié de certaines réductions ou crédits d\'impôt l\'année précédente : emploi à domicile, garde d\'enfants, dons, investissements locatifs. Si vous n\'avez pas bénéficié de ces dispositifs ou si vous avez demandé à ne pas recevoir l\'avance, c\'est normal de ne rien recevoir. Le montant définitif sera régularisé lors du calcul de votre impôt après la déclaration.',
        category: 'paiement',
    },
];
