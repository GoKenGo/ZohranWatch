import { describe, it, expect, beforeEach } from 'vitest';
import { calculateStats, calculateCategoryProgress, filterPromises } from '../src/logic.js';
import { promises } from '../src/data.js';

// These tests verify that our logic functions produce correct output
// that can be used to drive DOM updates (integration-style tests)

describe('DOM integration: overall progress', () => {
    it('stats can drive progress bar width', () => {
        const stats = calculateStats(promises);
        const width = `${stats.percentage}%`;
        expect(width).toBe('0%');
    });

    it('stats format correctly for text content', () => {
        const stats = calculateStats(promises);
        expect(String(stats.total)).toBe('14');
        expect(String(stats.delivered)).toBe('0');
        expect(String(stats.inProgress)).toBe('1');
        expect(`${stats.percentage}%`).toBe('0%');
    });

    it('delivered promises update progress bar width', () => {
        const testPromises = [
            { status: 'delivered' },
            { status: 'delivered' },
            { status: 'pending' },
            { status: 'pending' },
        ];
        const stats = calculateStats(testPromises);
        expect(`${stats.percentage}%`).toBe('50%');
    });
});

describe('DOM integration: category progress bars', () => {
    it('generates data for all 7 category progress bars', () => {
        const categoryData = calculateCategoryProgress(promises);
        expect(categoryData).toHaveLength(7);
    });

    it('each category entry has data for rendering a progress bar', () => {
        const categoryData = calculateCategoryProgress(promises);
        categoryData.forEach(entry => {
            expect(entry).toHaveProperty('name');
            expect(entry).toHaveProperty('percentage');
            // Verify it can be used for style width
            const width = `${entry.percentage}%`;
            expect(width).toMatch(/^\d+%$/);
        });
    });
});

describe('DOM integration: filtering and rendering pipeline', () => {
    it('filtering produces array that can be iterated for card rendering', () => {
        const filtered = filterPromises(promises, { categoryFilter: 'housing' });
        expect(filtered).toBeInstanceOf(Array);
        expect(filtered.length).toBeGreaterThan(0);
        filtered.forEach(p => {
            expect(p).toHaveProperty('title');
            expect(p).toHaveProperty('category');
            expect(p).toHaveProperty('status');
        });
    });

    it('empty filter result triggers empty state', () => {
        const filtered = filterPromises(promises, { statusFilter: 'delivered' });
        expect(filtered).toHaveLength(0);
        // The DOM code checks: if (filteredPromises.length === 0) → show "No promises match your filters."
    });

    it('animation delay can be calculated from index', () => {
        const filtered = filterPromises(promises);
        filtered.forEach((_, index) => {
            const delay = `${0.1 + (index * 0.05)}s`;
            expect(delay).toMatch(/^\d+\.?\d*s$/);
        });
    });
});

describe('DOM integration: page navigation data flow', () => {
    it('valid page IDs can construct element IDs', () => {
        const pageIds = ['home', 'about'];
        pageIds.forEach(pageId => {
            const elementId = pageId + 'Page';
            expect(elementId).toMatch(/^(homePage|aboutPage)$/);
        });
    });

    it('data-page attribute values map to page IDs', () => {
        const validPages = ['home', 'about'];
        validPages.forEach(page => {
            expect(['home', 'about']).toContain(page);
        });
    });
});
