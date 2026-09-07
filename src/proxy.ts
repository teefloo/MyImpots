import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { taxBoxes } from '@/data/tax-boxes';
import { getCategoryPathFromSearchParams } from '@/lib/case-routes';

const canonicalCaseIds = new Map(taxBoxes.map((box) => [box.id.toLowerCase(), box.id]));
const categoryIds = new Set(taxBoxes.map((box) => box.categoryId));

export function proxy(request: NextRequest) {
    if (request.nextUrl.pathname === '/cases') {
        const categoryPath = getCategoryPathFromSearchParams(request.nextUrl.searchParams, categoryIds);

        if (categoryPath) {
            const redirectUrl = request.nextUrl.clone();
            redirectUrl.pathname = categoryPath;
            redirectUrl.search = '';

            return NextResponse.redirect(redirectUrl, 308);
        }

        return NextResponse.next();
    }

    const requestedId = request.nextUrl.pathname.replace('/cases/', '');
    const canonicalId = canonicalCaseIds.get(requestedId.toLowerCase());

    if (canonicalId && requestedId !== canonicalId) {
        const redirectUrl = request.nextUrl.clone();
        redirectUrl.pathname = `/cases/${canonicalId}`;

        return NextResponse.redirect(redirectUrl, 308);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/cases', '/cases/:id'],
};
