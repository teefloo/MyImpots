'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { searchTaxBoxes, TaxBox } from '@/data/tax-boxes';

interface SearchBarProps {
    isHero?: boolean;
}

export default function SearchBar({ isHero = false }: SearchBarProps) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<TaxBox[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        if (query.trim().length > 1) {
            setResults(searchTaxBoxes(query).slice(0, 5));
            setIsOpen(true);
        } else {
            setResults([]);
            setIsOpen(false);
        }
    }, [query]);

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
            <span className="search-icon">🔍</span>
            <input
                type="text"
                className={isHero ? 'search-input' : 'search-input-page'}
                placeholder="Ex. 1AJ, frais réels, dons..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => {
                    if (query.trim().length > 1) setIsOpen(true);
                }}
                onKeyDown={handleKeyDown}
                role="combobox"
                aria-expanded={isOpen}
                aria-controls="search-dropdown"
                aria-autocomplete="list"
            />
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
                        className="search-result-item"
                        style={{ justifyContent: 'center', color: 'var(--color-primary)', fontWeight: 500 }}
                        onClick={() => setIsOpen(false)}
                    >
                        Voir tous les résultats ({searchTaxBoxes(query).length})
                    </Link>
                </div>
            )}
            {isOpen && query.trim().length > 1 && results.length === 0 && (
                <div id="search-dropdown" className="search-results-dropdown">
                    <div className="search-result-item" style={{ color: 'var(--color-text-secondary)', justifyContent: 'center' }}>
                        Aucune case trouvée pour "{query}"
                    </div>
                </div>
            )}
        </div>
    );
}
