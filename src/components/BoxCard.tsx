'use client';

import Link from 'next/link';
import { TaxBox } from '@/data/tax-boxes';
import { getCategoryById } from '@/data/categories';
import CategoryBadge from '@/components/CategoryBadge';

interface BoxCardProps {
    box: TaxBox;
}

export default function BoxCard({ box }: BoxCardProps) {
    const cat = getCategoryById(box.categoryId);
    return (
        <Link href={`/cases/${box.id}`} className="box-card">
            <div className="box-number">{box.number}</div>
            <div className="box-content">
                <div className="box-label">{box.label}</div>
                <div className="box-description-preview">{box.description}</div>
                <div className="box-meta">
                    <span className="badge badge-primary">{box.formId}</span>
                    {cat && <CategoryBadge categoryId={cat.id} icon={cat.icon} label={cat.label} color={cat.color} />}
                </div>
            </div>
        </Link>
    );
}
