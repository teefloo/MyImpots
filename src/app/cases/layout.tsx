import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cases Fiscales — Guide complet des cases de la déclaration',
    description: 'Trouvez le numéro de votre case fiscale, comprenez à quoi elle correspond et comment la remplir. Guide complet du formulaire 2042.',
    openGraph: {
        title: 'Guide des Cases Fiscales | MyImpots',
        description: 'Recherchez et comprenez chaque case de votre déclaration de revenus.',
        images: [
            {
                url: '/og-cases.png',
                width: 1200,
                height: 630,
                alt: 'MyImpots — Guide des cases fiscales : 1AJ, 2BH, 7UF...',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Guide des Cases Fiscales | MyImpots',
        description: 'Trouvez et comprenez chaque case de votre déclaration de revenus.',
        images: ['/og-cases.png'],
    },
};

export default function CasesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
