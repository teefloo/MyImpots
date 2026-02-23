'use client';

interface CategoryBadgeProps {
    categoryId: string;
    icon?: React.ReactNode;
    label?: string;
    color?: string;
}

export default function CategoryBadge({ categoryId, icon, label, color = 'accent' }: CategoryBadgeProps) {
    const badgeStyle = {
        backgroundColor: `var(--color-${color}-light)`,
        color: `var(--color-${color})`,
        borderColor: `var(--color-${color}-light)`,
        borderWidth: '1px',
        borderStyle: 'solid'
    };

    return (
        <span className="badge" style={badgeStyle}>
            {icon} {label || categoryId}
        </span>
    );
}
