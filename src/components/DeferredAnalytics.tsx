'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Analytics = dynamic(
    () => import('@vercel/analytics/react').then((module) => module.Analytics),
    { ssr: false },
);

export default function DeferredAnalytics() {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const timeoutId = window.setTimeout(() => setIsReady(true), 2000);

        return () => window.clearTimeout(timeoutId);
    }, []);

    return isReady ? <Analytics /> : null;
}
