import Link from 'next/link';
import React from 'react';

interface ToolCardProps {
    href: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    color?: string;
    showButton?: boolean;
}

export default function ToolCard({ href, icon, title, description, color, showButton = true }: ToolCardProps) {
    return (
        <Link href={href} className="card-link">
            <div className="card" style={{
                borderLeft: color ? `4px solid ${color}` : undefined,
                '--card-color': color || 'var(--color-primary)',
                '--card-glow': color ? `${color}66` : 'rgba(242, 132, 130, 0.4)'
            } as React.CSSProperties}>
                <div className="card-icon" style={color ? { backgroundColor: `${color}1A`, color: color } : undefined}>
                    {icon}
                </div>
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                {showButton && <span className="btn btn-primary mt-4">Ouvrir l&apos;outil →</span>}
            </div>
        </Link>
    );
}
