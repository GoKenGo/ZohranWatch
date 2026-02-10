import { describe, it, expect } from 'vitest';
import { calculateCategoryProgress } from '../src/logic.js';
import { promises, VALID_CATEGORIES } from '../src/data.js';

describe('calculateCategoryProgress', () => {
    it('returns an entry for each of the 7 categories', () => {
        const result = calculateCategoryProgress(promises);
        expect(result).toHaveLength(7);
    });

    it('includes all valid category keys', () => {
        const result = calculateCategoryProgress(promises);
        const keys = result.map(r => r.key);
        VALID_CATEGORIES.forEach(category => {
            expect(keys).toContain(category);
        });
    });

    it('includes human-readable names', () => {
        const result = calculateCategoryProgress(promises);
        const names = result.map(r => r.name);
        expect(names).toContain('Housing');
        expect(names).toContain('Transit');
        expect(names).toContain('Childcare');
        expect(names).toContain('Food');
        expect(names).toContain('Wages');
        expect(names).toContain('Taxes');
        expect(names).toContain('Governance');
    });

    it('calculates correct totals per category', () => {
        const result = calculateCategoryProgress(promises);
        const byKey = Object.fromEntries(result.map(r => [r.key, r]));

        expect(byKey.housing.total).toBe(3);
        expect(byKey.transit.total).toBe(2);
        expect(byKey.childcare.total).toBe(2);
        expect(byKey.food.total).toBe(2);
        expect(byKey.wages.total).toBe(1);
        expect(byKey.taxes.total).toBe(2);
        expect(byKey.governance.total).toBe(2);
    });

    it('shows 0 delivered for all categories (current data)', () => {
        const result = calculateCategoryProgress(promises);
        result.forEach(entry => {
            expect(entry.delivered).toBe(0);
            expect(entry.percentage).toBe('0');
        });
    });

    it('calculates percentage correctly when some are delivered', () => {
        const testPromises = [
            { category: 'housing', status: 'delivered' },
            { category: 'housing', status: 'pending' },
            { category: 'transit', status: 'delivered' },
            { category: 'transit', status: 'delivered' },
        ];
        const result = calculateCategoryProgress(testPromises);
        const byKey = Object.fromEntries(result.map(r => [r.key, r]));

        expect(byKey.housing.delivered).toBe(1);
        expect(byKey.housing.total).toBe(2);
        expect(byKey.housing.percentage).toBe('50');

        expect(byKey.transit.delivered).toBe(2);
        expect(byKey.transit.total).toBe(2);
        expect(byKey.transit.percentage).toBe('100');
    });

    it('handles categories with no promises (0 total = 0%)', () => {
        const testPromises = [
            { category: 'housing', status: 'delivered' },
        ];
        const result = calculateCategoryProgress(testPromises);
        const byKey = Object.fromEntries(result.map(r => [r.key, r]));

        // Categories with no matching promises get numeric 0 (not string)
        expect(byKey.transit.total).toBe(0);
        expect(byKey.transit.percentage).toBe(0);
    });

    it('handles empty promises array', () => {
        const result = calculateCategoryProgress([]);
        expect(result).toHaveLength(7);
        result.forEach(entry => {
            expect(entry.total).toBe(0);
            expect(entry.delivered).toBe(0);
            expect(entry.percentage).toBe(0);
        });
    });
});
