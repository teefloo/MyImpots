import type { MetadataRoute } from 'next';
import { taxBoxes } from '@/data/tax-boxes';

const BASE_URL = 'https://myimpots.com';

// Last-modified dates reflect the actual date each page's content was last
// changed (per git history), not the build date — an always-"today" value
// trains crawlers to distrust the freshness signal. Update the relevant date
// here when you meaningfully change a page's content.
const LAST_MODIFIED = {
    home: new Date('2026-03-23'),
    tools: new Date('2026-04-27'),
    taxBoxes: new Date('2026-04-27'),
};

export default function sitemap(): MetadataRoute.Sitemap {
    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: LAST_MODIFIED.home,
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${BASE_URL}/cases`,
            lastModified: LAST_MODIFIED.tools,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/outils`,
            lastModified: LAST_MODIFIED.tools,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/outils/simulateur`,
            lastModified: LAST_MODIFIED.tools,
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/outils/frais-reels`,
            lastModified: LAST_MODIFIED.tools,
            changeFrequency: 'yearly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/outils/micro-vs-reel`,
            lastModified: LAST_MODIFIED.tools,
            changeFrequency: 'yearly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/outils/credits-impot`,
            lastModified: LAST_MODIFIED.tools,
            changeFrequency: 'yearly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/outils/documents`,
            lastModified: LAST_MODIFIED.tools,
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/formulaires`,
            lastModified: LAST_MODIFIED.tools,
            changeFrequency: 'yearly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/calendrier`,
            lastModified: LAST_MODIFIED.tools,
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/faq`,
            lastModified: LAST_MODIFIED.tools,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
    ];

    // Dynamic pages: one per tax box
    const taxBoxPages: MetadataRoute.Sitemap = taxBoxes.map((box) => ({
        url: `${BASE_URL}/cases/${box.id}`,
        lastModified: LAST_MODIFIED.taxBoxes,
        changeFrequency: 'yearly' as const,
        priority: 0.5,
    }));

    return [...staticPages, ...taxBoxPages];
}
