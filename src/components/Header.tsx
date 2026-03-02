'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(true);
    const pathname = usePathname();
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (pathname !== '/') {
            setShowSearch(true);
            return;
        }

        const handleScroll = () => {
            setShowSearch(window.scrollY > 350);
        };

        handleScroll(); // Check initial scroll position
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <>
            {menuOpen && (
                <div
                    className="mobile-menu-overlay"
                    onClick={() => setMenuOpen(false)}
                />
            )}
            <header className="header flex-center" ref={headerRef}>
                <div className="header-inner" style={{
                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    width: (showSearch || menuOpen) ? '100%' : 'fit-content',
                    maxWidth: 'var(--max-width)'
                }}>
                    <Link href="/" className="header-logo">
                        <span className="header-logo-icon">
                            <Image src="/logo.png" alt="MyImpots Logo" width={64} height={64} priority />
                        </span>
                        <span>MyImpots</span>
                    </Link>

                    <div className="header-actions">
                        <Link
                            href="/cases"
                            className="header-search-btn"
                            aria-label="Rechercher une case"
                            style={{
                                opacity: showSearch ? 1 : 0,
                                pointerEvents: showSearch ? 'auto' : 'none',
                                transform: showSearch ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.95)',
                            }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </Link>

                        <button
                            className="mobile-menu-btn"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Menu de navigation"
                        >
                            {menuOpen ? '✕' : '☰'}
                        </button>
                    </div>

                    <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
                        <Link href="/cases" onClick={() => setMenuOpen(false)}>
                            Cases fiscales
                        </Link>
                        <Link href="/formulaires" onClick={() => setMenuOpen(false)}>
                            Formulaires
                        </Link>
                        <Link href="/outils" onClick={() => setMenuOpen(false)}>
                            Outils
                        </Link>
                        <Link href="/calendrier" onClick={() => setMenuOpen(false)}>
                            Calendrier
                        </Link>
                        <Link href="/faq" onClick={() => setMenuOpen(false)}>
                            FAQ
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    );
}
