const CATEGORY_PATH_PREFIX = '/cases/categorie';

export function getCategoryPagePath(categoryId: string): string {
    return `${CATEGORY_PATH_PREFIX}/${encodeURIComponent(categoryId)}`;
}

export function getCategoryPathFromSearchParams(
    searchParams: URLSearchParams,
    knownCategories: ReadonlySet<string>,
): string | null {
    const keys = Array.from(searchParams.keys());

    if (keys.length !== 1 || keys[0] !== 'category') {
        return null;
    }

    const categoryId = searchParams.get('category');

    if (!categoryId || !knownCategories.has(categoryId)) {
        return null;
    }

    return getCategoryPagePath(categoryId);
}
