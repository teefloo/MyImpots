import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { taxBoxes } from '@/data/tax-boxes';

const canonicalCaseIds = new Map(taxBoxes.map((box) => [box.id.toLowerCase(), box.id]));

export function proxy(request: NextRequest) {
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
    matcher: '/cases/:id',
};
