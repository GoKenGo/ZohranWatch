import { describe, it, expect } from 'vitest';
import { calculateCountdown } from '../src/logic.js';

describe('calculateCountdown', () => {
    it('returns days, hours, minutes, seconds', () => {
        const result = calculateCountdown(new Date('2026-06-15T12:00:00'));
        expect(result).toHaveProperty('days');
        expect(result).toHaveProperty('hours');
        expect(result).toHaveProperty('minutes');
        expect(result).toHaveProperty('seconds');
    });

    it('calculates exactly 4 years from term start', () => {
        const result = calculateCountdown(new Date('2026-01-01T00:00:00'));
        // 2026-01-01 to 2030-01-01 = 1461 days (includes leap year 2028)
        expect(result.days).toBe(1461);
        expect(result.hours).toBe(0);
        expect(result.minutes).toBe(0);
        expect(result.seconds).toBe(0);
    });

    it('calculates countdown for a specific date/time', () => {
        // 2029-12-31T00:00:00 → 1 day, 0 hours, 0 minutes, 0 seconds until 2030-01-01
        const result = calculateCountdown(new Date('2029-12-31T00:00:00'));
        expect(result.days).toBe(1);
        expect(result.hours).toBe(0);
        expect(result.minutes).toBe(0);
        expect(result.seconds).toBe(0);
    });

    it('returns zero at the exact term end', () => {
        const result = calculateCountdown(new Date('2030-01-01T00:00:00'));
        expect(result.days).toBe(0);
        expect(result.hours).toBe(0);
        expect(result.minutes).toBe(0);
        expect(result.seconds).toBe(0);
    });

    it('correctly splits hours, minutes, seconds', () => {
        // 2029-12-31T20:30:45 → remaining = 3h 29m 15s + 0 days
        const result = calculateCountdown(new Date('2029-12-31T20:30:45'));
        expect(result.days).toBe(0);
        expect(result.hours).toBe(3);
        expect(result.minutes).toBe(29);
        expect(result.seconds).toBe(15);
    });

    it('handles mid-term date correctly', () => {
        // 2028-01-01 → 2 years remain (730 or 731 days)
        const result = calculateCountdown(new Date('2028-01-01T00:00:00'));
        // 2028-01-01 to 2030-01-01 = 731 days (2028 is a leap year)
        expect(result.days).toBe(731);
        expect(result.hours).toBe(0);
    });

    it('returns negative values after term end', () => {
        const result = calculateCountdown(new Date('2030-06-01T00:00:00'));
        expect(result.days).toBeLessThan(0);
    });

    it('uses current time when no argument provided', () => {
        const result = calculateCountdown();
        // Should return positive values since we're before 2030
        expect(result.days).toBeGreaterThan(0);
    });
});
