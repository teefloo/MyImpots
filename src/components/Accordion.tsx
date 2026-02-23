'use client';

import React from 'react';

export interface AccordionProps {
    id: string;
    title: string;
    content: React.ReactNode;
    isOpen: boolean;
    onClick: () => void;
}

export function Accordion({ title, content, isOpen, onClick }: AccordionProps) {
    return (
        <div className="accordion-item">
            <button
                className="accordion-header"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span>{title}</span>
                <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>▼</span>
            </button>
            {isOpen && (
                <div className="accordion-content">
                    {content}
                </div>
            )}
        </div>
    );
}
