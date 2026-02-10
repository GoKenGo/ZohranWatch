import { describe, it, expect } from 'vitest';
import { promises, VALID_CATEGORIES, VALID_STATUSES, CATEGORY_LABELS, termStart, termEnd } from '../src/data.js';

describe('Promise data integrity', () => {
    it('contains exactly 14 promises', () => {
        expect(promises).toHaveLength(14);
    });

    it('every promise has all required fields', () => {
        const requiredFields = ['id', 'category', 'title', 'description', 'status', 'lastUpdate'];
        promises.forEach(promise => {
            requiredFields.forEach(field => {
                expect(promise).toHaveProperty(field);
                expect(promise[field]).toBeDefined();
            });
        });
    });

    it('all IDs are unique', () => {
        const ids = promises.map(p => p.id);
        expect(new Set(ids).size).toBe(ids.length);
    });

    it('IDs are sequential from 1 to 14', () => {
        const ids = promises.map(p => p.id).sort((a, b) => a - b);
        expect(ids).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
    });

    it('all categories are valid', () => {
        promises.forEach(promise => {
            expect(VALID_CATEGORIES).toContain(promise.category);
        });
    });

    it('all statuses are valid', () => {
        promises.forEach(promise => {
            expect(VALID_STATUSES).toContain(promise.status);
        });
    });

    it('all titles are non-empty strings', () => {
        promises.forEach(promise => {
            expect(typeof promise.title).toBe('string');
            expect(promise.title.trim().length).toBeGreaterThan(0);
        });
    });

    it('all descriptions are non-empty strings', () => {
        promises.forEach(promise => {
            expect(typeof promise.description).toBe('string');
            expect(promise.description.trim().length).toBeGreaterThan(0);
        });
    });

    it('all lastUpdate fields are non-empty strings', () => {
        promises.forEach(promise => {
            expect(typeof promise.lastUpdate).toBe('string');
            expect(promise.lastUpdate.trim().length).toBeGreaterThan(0);
        });
    });
});

describe('Category distribution', () => {
    it('has promises in every valid category', () => {
        VALID_CATEGORIES.forEach(category => {
            const count = promises.filter(p => p.category === category).length;
            expect(count).toBeGreaterThan(0);
        });
    });

    it('has the expected number of promises per category', () => {
        const counts = {};
        promises.forEach(p => {
            counts[p.category] = (counts[p.category] || 0) + 1;
        });
        expect(counts.housing).toBe(3);
        expect(counts.transit).toBe(2);
        expect(counts.childcare).toBe(2);
        expect(counts.food).toBe(2);
        expect(counts.wages).toBe(1);
        expect(counts.taxes).toBe(2);
        expect(counts.governance).toBe(2);
    });
});

describe('Constants', () => {
    it('VALID_CATEGORIES contains all 7 categories', () => {
        expect(VALID_CATEGORIES).toHaveLength(7);
        expect(VALID_CATEGORIES).toEqual(
            expect.arrayContaining(['housing', 'transit', 'childcare', 'food', 'wages', 'taxes', 'governance'])
        );
    });

    it('VALID_STATUSES contains all 6 statuses', () => {
        expect(VALID_STATUSES).toHaveLength(6);
        expect(VALID_STATUSES).toEqual(
            expect.arrayContaining(['pending', 'in-progress', 'delivered', 'blocked', 'compromised', 'tbd'])
        );
    });

    it('CATEGORY_LABELS maps every valid category to a label', () => {
        VALID_CATEGORIES.forEach(category => {
            expect(CATEGORY_LABELS).toHaveProperty(category);
            expect(typeof CATEGORY_LABELS[category]).toBe('string');
        });
    });

    it('term dates are correct', () => {
        expect(termStart.getFullYear()).toBe(2026);
        expect(termEnd.getFullYear()).toBe(2030);
        expect(termEnd > termStart).toBe(true);
    });
});
