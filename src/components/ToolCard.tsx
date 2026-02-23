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

export default function ToolCard({ href, icon, title, description, color = 'primary', showButton = true }: ToolCardProps) {
    return (
        <Link href={href} className="card-link">
            <div className="card" style={{
                borderLeft: `4px solid var(--color-${color})`,
                '--card-color': `var(--color-${color})`,
                '--card-glow': `var(--color-${color}-light)`
            } as React.CSSProperties}>
                <div className="card-icon" style={{ backgroundColor: `var(--color-${color}-light)`, color: `var(--color-${color})` }}>
                    {icon}
                </div>
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                {showButton && (
                    <span
                        className="btn mt-4"
                        style={{
                            backgroundColor: `var(--color-${color})`,
                            borderColor: `var(--color-${color})`,
                            color: '#ffffff',
                            boxShadow: `0 4px 12px var(--color-${color}-light)`
                        }}
                    >
                        Ouvrir l&apos;outil →
                    </span>
                )}
            </div>
        </Link>
    );
}
