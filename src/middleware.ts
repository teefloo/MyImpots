import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const host = request.headers.get('host');
    // Regex matches www. at the beginning of the host string
    const wwwRegex = /^www\./i;

    if (host && wwwRegex.test(host)) {
        // Strip out the www.
        const newHost = host.replace(wwwRegex, '');
        const newUrl = new URL(request.url);
        newUrl.host = newHost;
        
        // 301 Permanent Redirect to transfer SEO authority
        return NextResponse.redirect(newUrl, 301);
    }

    return NextResponse.next();
}

export const config = {
    // Only run middleware on non-static/non-api pages to save resources
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
