'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { searchTaxBoxes } from '@/data/tax-boxes';
import { SearchIcon } from './SVGIcons';

interface SearchBarProps {
    variant?: 'hero' | 'page' | 'header';
}

export default function SearchBar({ variant = 'page' }: SearchBarProps) {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const results = query.trim().length > 1 ? searchTaxBoxes(query).slice(0, 5) : [];

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && query.trim()) {
            setIsOpen(false);
            router.push(`/cases?q=${encodeURIComponent(query)}`);
        }
    };

    return (
        <div className="search-container" ref={wrapperRef}>
            <input
                type="text"
                aria-label="Rechercher une case fiscale ou un mot-clé"
                className={variant === 'hero' ? 'search-input' : `search-input-${variant}`}
                placeholder="Ex. 1AJ, frais réels, dons..."
                value={query}
                onChange={(e) => {
                    const newQuery = e.target.value;
                    setQuery(newQuery);
                    if (newQuery.trim().length > 1) setIsOpen(true);
                    else setIsOpen(false);
                }}
                onFocus={() => {
                    if (query.trim().length > 1) setIsOpen(true);
                }}
                onClick={(e) => {
                    // On mobile header, the input acts as a button leading to cases page
                    if (variant === 'header' && window.innerWidth <= 900) {
                        e.preventDefault();
                        router.push('/cases');
                    }
                }}
                onKeyDown={handleKeyDown}
                role="combobox"
                aria-expanded={isOpen}
                aria-controls="search-dropdown"
                aria-autocomplete="list"
            />
            <span className="search-icon"><SearchIcon size={20} /></span>
            {isOpen && results.length > 0 && (
                <div id="search-dropdown" className="search-results-dropdown" role="listbox">
                    {results.map((box) => (
                        <Link
                            key={box.id}
                            href={`/cases/${box.id}`}
                            className="search-result-item"
                            onClick={() => {
                                setIsOpen(false);
                                setQuery('');
                            }}
                            role="option"
                            aria-selected={false}
                        >
                            <span className="search-result-number">{box.number}</span>
                            <span className="search-result-label">{box.label}</span>
                        </Link>
                    ))}
                    <Link
                        href={`/cases?q=${encodeURIComponent(query)}`}
                        className="search-result-item flex-center text-primary"
                        style={{ fontWeight: 500 }}
                        onClick={() => setIsOpen(false)}
                    >
                        Voir tous les résultats ({searchTaxBoxes(query).length})
                    </Link>
                </div>
            )}
            {isOpen && query.trim().length > 1 && results.length === 0 && (
                <div id="search-dropdown" className="search-results-dropdown">
                    <div className="search-result-item flex-center text-secondary">
                        Aucune case trouvée pour &quot;{query}&quot;
                    </div>
                </div>
            )}
        </div>
    );
}
