'use client';

interface CategoryBadgeProps {
    categoryId: string;
    icon?: React.ReactNode;
    label?: string;
    color?: string;
}

export default function CategoryBadge({ categoryId, icon, label, color }: CategoryBadgeProps) {
    const badgeStyle = color ? {
        backgroundColor: `${color}1A`,
        color: color,
        borderColor: `${color}33`,
        borderWidth: '1px',
        borderStyle: 'solid'
    } : {};

    return (
        <span className={`badge ${!color ? 'badge-accent' : ''}`} style={badgeStyle}>
            {icon} {label || categoryId}
        </span>
    );
}
