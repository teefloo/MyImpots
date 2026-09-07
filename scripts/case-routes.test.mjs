import assert from 'node:assert/strict';
import test from 'node:test';

import {
    getCategoryPagePath,
    getCategoryPathFromSearchParams,
} from '../src/lib/case-routes.ts';

test('builds a clean, indexable URL for a tax-box category', () => {
    assert.equal(getCategoryPagePath('revenus-pro'), '/cases/categorie/revenus-pro');
});

test('redirects only a standalone known category filter', () => {
    const knownCategories = new Set(['revenus-pro', 'revenus-salaires']);

    assert.equal(
        getCategoryPathFromSearchParams(new URLSearchParams('category=revenus-pro'), knownCategories),
        '/cases/categorie/revenus-pro',
    );
    assert.equal(
        getCategoryPathFromSearchParams(new URLSearchParams('category=revenus-pro&q=bic'), knownCategories),
        null,
    );
    assert.equal(
        getCategoryPathFromSearchParams(new URLSearchParams('category=inconnu'), knownCategories),
        null,
    );
});
