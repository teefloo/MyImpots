'use client';

import { useState } from 'react';
import Link from 'next/link';

import SearchBar from './SearchBar';
import { ReceiptIcon } from './SVGIcons';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="container header-inner">
                <Link href="/" className="header-logo">
                    <span className="header-logo-icon">
                        <ReceiptIcon size={28} />
                    </span>
                    <span>MyImpots</span>
                </Link>

                <div className="header-search-wrapper" style={{ flex: 1, maxWidth: '400px', margin: '0 var(--space-4)' }}>
                    <SearchBar />
                </div>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu de navigation"
                >
                    {menuOpen ? '✕' : '☰'}
                </button>

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
    );
}
