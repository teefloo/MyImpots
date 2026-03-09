import type { MetadataRoute } from 'next';
import { taxBoxes } from '@/data/tax-boxes';

const BASE_URL = 'https://myimpots.fr';

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${BASE_URL}/cases`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/outils`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/outils/simulateur`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/outils/frais-reels`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/outils/micro-vs-reel`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/outils/credits-impot`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/outils/documents`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/formulaires`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/calendrier`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/faq`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
    ];

    // Dynamic pages: one per tax box
    const taxBoxPages: MetadataRoute.Sitemap = taxBoxes.map((box) => ({
        url: `${BASE_URL}/cases/${box.id}`,
        lastModified: now,
        changeFrequency: 'yearly' as const,
        priority: 0.5,
    }));

    return [...staticPages, ...taxBoxPages];
}
