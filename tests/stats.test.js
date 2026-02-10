import { describe, it, expect } from 'vitest';
import { calculateStats } from '../src/logic.js';
import { promises } from '../src/data.js';

describe('calculateStats', () => {
    it('returns correct stats for the actual promises data', () => {
        const stats = calculateStats(promises);
        expect(stats.total).toBe(14);
        expect(stats.delivered).toBe(0);
        expect(stats.inProgress).toBe(1);
        expect(stats.percentage).toBe('0');
    });

    it('returns zero for an empty array', () => {
        const stats = calculateStats([]);
        expect(stats.total).toBe(0);
        expect(stats.delivered).toBe(0);
        expect(stats.inProgress).toBe(0);
        expect(stats.percentage).toBe(0);
    });

    it('calculates correct percentage when some are delivered', () => {
        const testPromises = [
            { status: 'delivered' },
            { status: 'delivered' },
            { status: 'pending' },
            { status: 'in-progress' },
        ];
        const stats = calculateStats(testPromises);
        expect(stats.total).toBe(4);
        expect(stats.delivered).toBe(2);
        expect(stats.inProgress).toBe(1);
        expect(stats.percentage).toBe('50');
    });

    it('calculates 100% when all are delivered', () => {
        const testPromises = [
            { status: 'delivered' },
            { status: 'delivered' },
            { status: 'delivered' },
        ];
        const stats = calculateStats(testPromises);
        expect(stats.total).toBe(3);
        expect(stats.delivered).toBe(3);
        expect(stats.inProgress).toBe(0);
        expect(stats.percentage).toBe('100');
    });

    it('rounds percentage to nearest integer', () => {
        const testPromises = [
            { status: 'delivered' },
            { status: 'pending' },
            { status: 'pending' },
        ];
        const stats = calculateStats(testPromises);
        // 1/3 * 100 = 33.333... → "33"
        expect(stats.percentage).toBe('33');
    });

    it('counts only in-progress status for inProgress', () => {
        const testPromises = [
            { status: 'in-progress' },
            { status: 'in-progress' },
            { status: 'pending' },
            { status: 'blocked' },
            { status: 'tbd' },
        ];
        const stats = calculateStats(testPromises);
        expect(stats.inProgress).toBe(2);
    });

    it('does not count blocked/compromised/tbd as delivered or in-progress', () => {
        const testPromises = [
            { status: 'blocked' },
            { status: 'compromised' },
            { status: 'tbd' },
        ];
        const stats = calculateStats(testPromises);
        expect(stats.delivered).toBe(0);
        expect(stats.inProgress).toBe(0);
        expect(stats.percentage).toBe('0');
    });
});
