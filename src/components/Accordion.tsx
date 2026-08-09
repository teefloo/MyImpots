'use client';

import React from 'react';

export interface AccordionProps {
    id: string;
    title: string;
    content: React.ReactNode;
    isOpen: boolean;
    onClick: () => void;
}

export function Accordion({ id, title, content, isOpen, onClick }: AccordionProps) {
    const contentId = `accordion-content-${id}`;

    return (
        <div className="accordion-item">
            <button
                type="button"
                className="accordion-header"
                onClick={onClick}
                aria-expanded={isOpen}
                aria-controls={contentId}
            >
                <span>{title}</span>
                <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>▼</span>
            </button>
            <div id={contentId} className="accordion-content" hidden={!isOpen}>
                {content}
            </div>
        </div>
    );
}
