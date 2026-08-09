import type { Metadata } from 'next';

export const SITE_URL = 'https://myimpots.com';
export const OG_IMAGE_PATH = '/logo.png';

interface PageMetadataOptions {
    title: string;
    description: string;
    path: string;
    imageAlt: string;
}

export function createPageMetadata({
    title,
    description,
    path,
    imageAlt,
}: PageMetadataOptions): Metadata {
    const url = `${SITE_URL}${path}`;
    const socialTitle = `${title} | MyImpots`;

    return {
        title,
        description,
        openGraph: {
            title: socialTitle,
            description,
            url,
            type: 'website',
            locale: 'fr_FR',
            siteName: 'MyImpots',
            images: [{
                url: OG_IMAGE_PATH,
                width: 640,
                height: 640,
                alt: imageAlt,
            }],
        },
        twitter: {
            card: 'summary_large_image',
            title: socialTitle,
            description,
            images: [OG_IMAGE_PATH],
        },
        alternates: {
            canonical: path,
        },
    };
}
