import Link from 'next/link';

import { SearchIcon } from '@/components/SVGIcons';

export default function CaseNotFound() {
    return (
        <div className="container text-center" style={{ padding: 'var(--space-16) 0' }}>
            <div className="flex-center mb-4">
                <SearchIcon size={48} className="text-primary" style={{ opacity: 0.5 }} />
            </div>
            <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700 }} className="mb-2">Case non trouvée</h1>
            <p style={{ color: 'var(--color-text-secondary)' }}>La case demandée n&apos;existe pas dans notre base.</p>
            <Link href="/cases" className="btn btn-primary mt-6">Retour aux cases fiscales</Link>
        </div>
    );
}
