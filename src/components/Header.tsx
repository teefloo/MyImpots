'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import SearchBar from './SearchBar';
import { EuroIcon } from './SVGIcons';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(true);
    const pathname = usePathname();

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

    return (
        <header className="header" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="header-inner" style={{
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                width: showSearch ? '100%' : 'fit-content',
                maxWidth: 'var(--max-width)'
            }}>
                <Link href="/" className="header-logo">
                    <span className="header-logo-icon">
                        <EuroIcon size={28} />
                    </span>
                    <span>MyImpots</span>
                </Link>

                <div className="header-search-wrapper" style={{
                    width: showSearch ? '100%' : '0px',
                    maxWidth: showSearch ? '400px' : '0px',
                    margin: showSearch ? '0 var(--space-4)' : '0',
                    opacity: showSearch ? 1 : 0,
                    overflow: 'hidden',
                    pointerEvents: showSearch ? 'auto' : 'none',
                    transform: showSearch ? 'translateY(0)' : 'translateY(-10px)',
                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <div style={{ width: '100%', minWidth: 'min(400px, 40vw)', flexShrink: 0 }}>
                        <SearchBar />
                    </div>
                </div>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu de navigation"
                >
                    {menuOpen ? '✕' : '☰'}
                </button>

                <nav className={`header-nav ${menuOpen ? 'open' : ''}`} style={menuOpen ? {
                    background: 'var(--color-bg-card)',
                    backdropFilter: 'blur(24px) saturate(1.4)',
                    WebkitBackdropFilter: 'blur(24px) saturate(1.4)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-xl)',
                    marginTop: 'var(--space-2)',
                    boxShadow: 'var(--shadow-xl), var(--glass-highlight)'
                } : {}}>
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
    );
}
