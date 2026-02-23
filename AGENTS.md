# AGENTS.md — Guide for AI Agents Working on ImpôtsClairs

## Project Overview

This is a **Next.js 16 + React 19 + TypeScript** application that provides French tax guidance. The app helps users understand tax form boxes, use simulators, and navigate tax-related information for French income tax declarations.

---

## Build & Development Commands

### Core Commands
```bash
npm run dev       # Start development server (http://localhost:3000)
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```

### Running a Single Test
**No test framework is currently configured.** To add tests:
```bash
# Install a test framework (e.g., Vitest)
npm install -D vitest @vitejs/plugin-react

# Run a single test file
npx vitest run src/data/tax-rates.test.ts

# Run tests in watch mode
npx vitest
```

### Type Checking
```bash
npx tsc --noEmit    # TypeScript type checking only
```

---

## Code Style Guidelines

### General Principles
- **Strict TypeScript**: All code must pass `strict: true` in tsconfig
- **No `any` types**: Avoid `any`; use `unknown` or proper typing
- **Prefer explicit types** for function parameters and return types

### Naming Conventions

| Element | Convention | Example |
|---------|------------|---------|
| Components | PascalCase | `Header.tsx`, `BoxCard.tsx` |
| Functions/variables | camelCase | `calculateTax()`, `menuOpen` |
| Constants (exported) | UPPER_SNAKE_CASE | `ANNEE_REVENUS`, `taxBrackets` |
| Interfaces/types | PascalCase | `TaxBracket`, `CreditImpot` |
| Files (components) | PascalCase | `Header.tsx`, `SearchBar.tsx` |
| Files (utilities) | camelCase | `supabase.ts` |

### Import Order

```typescript
// 1. React/Next imports
import { useState } from 'react';
import Link from 'next/link';

// 2. Internal components
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';

// 3. Data imports
import { taxBrackets, calculateTax } from '@/data/tax-rates';

// 4. Types/interfaces (if separate file)
import type { TaxBracket } from '@/data/tax-rates';
```

### Path Aliases
Use `@/` for absolute imports from `src/`:
```typescript
import Header from '@/components/Header';  // ✅
import Header from '../../components/Header';  // ❌
```

### Component Structure

```typescript
'use client';  // Only if using hooks (useState, useEffect, etc.)

import { useState } from 'react';
import Link from 'next/link';

import SearchBar from './SearchBar';

export default function ComponentName() {
    const [state, setState] = useState(false);

    return (
        <element className="class-name">
            {/* JSX content */}
        </element>
    );
}
```

### Event Handlers
```typescript
// ✅ Preferred: inline arrow function for simple handlers
<button onClick={() => setMenuOpen(!menuOpen)}>

// ✅ For complex handlers: define function
const handleClick = () => { /* ... */ };
<button onClick={handleClick}>
```

### Type Definitions

```typescript
// For data structures
export interface TaxBracket {
    min: number;
    max: number | null;  // Use null, not undefined for optional
    rate: number;
}

// For function returns
export function calculateTax(revenuImposable: number, parts: number): {
    impotBrut: number;
    impotNet: number;
    tauxMarginal: number;
} {
    // ...
}
```

### Error Handling
- Use try/catch for async operations
- Provide meaningful error messages
- Handle null/undefined explicitly with optional chaining (`?.`) or nullish coalescing (`??`)

### CSS / Styling
- This project uses **global CSS** (`src/app/globals.css`)
- Avoid inline styles; use CSS classes
- Follow existing class naming conventions (e.g., `.header`, `.header-inner`)

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx           # Home page
│   ├── faq/               # Route: /faq
│   ├── cases/             # Route: /cases
│   ├── outils/            # Route: /outils
│   └── ...
├── components/             # Reusable React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── SearchBar.tsx
│   └── ...
├── data/                  # Static data & business logic
│   ├── tax-rates.ts       # Tax brackets, calculations
│   ├── tax-boxes.ts       # Tax form boxes data
│   ├── faq.ts             # FAQ content
│   └── ...
└── lib/                   # Utilities & integrations
    └── supabase.ts        # Supabase client (not yet active)
```

---

## ESLint Configuration

The project uses `eslint-config-next` with TypeScript:
- Config file: `eslint.config.mjs`
- Runs automatically with `npm run lint`
- Extends: `eslint-config-next/core-web-vitals` + `eslint-config-next/typescript`

---

## Environment Variables

Create a `.env.local` file for local development:
```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

---

## Key Data Files

- **`src/data/tax-rates.ts`**: Core tax calculation logic (brackets, decote, micro regimes)
- **`src/data/tax-boxes.ts`**: French tax form box definitions
- **`src/data/faq.ts`**: Frequently asked questions
- **`src/data/calendar.ts`**: Tax calendar events
- **`src/data/forms.ts`**: Tax form information
- **`src/data/categories.ts`**: Content categories
- **`src/data/documents-checklist.ts`**: Required documents checklist
