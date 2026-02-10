import { describe, it, expect } from 'vitest';
import { filterPromises } from '../src/logic.js';
import { promises } from '../src/data.js';

describe('filterPromises', () => {
    describe('with no filters', () => {
        it('returns all promises with default options', () => {
            const result = filterPromises(promises);
            expect(result).toHaveLength(14);
        });

        it('returns all promises when all filters are "all"', () => {
            const result = filterPromises(promises, {
                categoryFilter: 'all',
                statusFilter: 'all',
                searchQuery: '',
            });
            expect(result).toHaveLength(14);
        });
    });

    describe('category filter', () => {
        it('filters by housing category', () => {
            const result = filterPromises(promises, { categoryFilter: 'housing' });
            expect(result).toHaveLength(3);
            result.forEach(p => expect(p.category).toBe('housing'));
        });

        it('filters by transit category', () => {
            const result = filterPromises(promises, { categoryFilter: 'transit' });
            expect(result).toHaveLength(2);
            result.forEach(p => expect(p.category).toBe('transit'));
        });

        it('filters by wages category (single promise)', () => {
            const result = filterPromises(promises, { categoryFilter: 'wages' });
            expect(result).toHaveLength(1);
            expect(result[0].title).toBe('$30 Minimum Wage by 2030');
        });

        it('returns empty for non-existent category', () => {
            const result = filterPromises(promises, { categoryFilter: 'nonexistent' });
            expect(result).toHaveLength(0);
        });
    });

    describe('status filter', () => {
        it('filters by pending status', () => {
            const result = filterPromises(promises, { statusFilter: 'pending' });
            expect(result.length).toBeGreaterThan(0);
            result.forEach(p => expect(p.status).toBe('pending'));
        });

        it('filters by in-progress status', () => {
            const result = filterPromises(promises, { statusFilter: 'in-progress' });
            expect(result).toHaveLength(1);
            expect(result[0].title).toBe('Clean Break from Adams');
        });

        it('filters by tbd status', () => {
            const result = filterPromises(promises, { statusFilter: 'tbd' });
            expect(result.length).toBeGreaterThan(0);
            result.forEach(p => expect(p.status).toBe('tbd'));
        });

        it('returns empty for delivered (none currently delivered)', () => {
            const result = filterPromises(promises, { statusFilter: 'delivered' });
            expect(result).toHaveLength(0);
        });
    });

    describe('search filter', () => {
        it('matches by title (case-insensitive)', () => {
            const result = filterPromises(promises, { searchQuery: 'rent freeze' });
            expect(result.length).toBeGreaterThan(0);
            expect(result.some(p => p.title === 'Rent Freeze')).toBe(true);
        });

        it('matches by description', () => {
            const result = filterPromises(promises, { searchQuery: 'childcare workers' });
            expect(result.length).toBeGreaterThan(0);
        });

        it('is case-insensitive', () => {
            const lower = filterPromises(promises, { searchQuery: 'free buses' });
            const upper = filterPromises(promises, { searchQuery: 'FREE BUSES' });
            const mixed = filterPromises(promises, { searchQuery: 'Free Buses' });
            expect(lower).toEqual(upper);
            expect(lower).toEqual(mixed);
        });

        it('matches partial strings', () => {
            const result = filterPromises(promises, { searchQuery: 'bus' });
            expect(result.length).toBeGreaterThan(0);
        });

        it('returns empty for non-matching search', () => {
            const result = filterPromises(promises, { searchQuery: 'xyznonexistent123' });
            expect(result).toHaveLength(0);
        });

        it('handles empty search query', () => {
            const result = filterPromises(promises, { searchQuery: '' });
            expect(result).toHaveLength(14);
        });
    });

    describe('combined filters', () => {
        it('category + status filter', () => {
            const result = filterPromises(promises, {
                categoryFilter: 'housing',
                statusFilter: 'pending',
            });
            expect(result.length).toBeGreaterThan(0);
            result.forEach(p => {
                expect(p.category).toBe('housing');
                expect(p.status).toBe('pending');
            });
        });

        it('category + search filter', () => {
            const result = filterPromises(promises, {
                categoryFilter: 'governance',
                searchQuery: 'Adams',
            });
            expect(result).toHaveLength(1);
            expect(result[0].title).toBe('Clean Break from Adams');
        });

        it('status + search filter', () => {
            const result = filterPromises(promises, {
                statusFilter: 'in-progress',
                searchQuery: 'Adams',
            });
            expect(result).toHaveLength(1);
        });

        it('all three filters combined', () => {
            const result = filterPromises(promises, {
                categoryFilter: 'governance',
                statusFilter: 'in-progress',
                searchQuery: 'Adams',
            });
            expect(result).toHaveLength(1);
            expect(result[0].id).toBe(13);
        });

        it('combined filters that yield no results', () => {
            const result = filterPromises(promises, {
                categoryFilter: 'housing',
                statusFilter: 'delivered',
            });
            expect(result).toHaveLength(0);
        });
    });

    describe('edge cases', () => {
        it('handles empty promises array', () => {
            const result = filterPromises([], { categoryFilter: 'housing' });
            expect(result).toHaveLength(0);
        });

        it('does not mutate original array', () => {
            const original = [...promises];
            filterPromises(promises, { categoryFilter: 'housing' });
            expect(promises).toEqual(original);
        });
    });
});
