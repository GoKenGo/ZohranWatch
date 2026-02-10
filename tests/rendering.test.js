import { describe, it, expect } from 'vitest';
import { renderPromiseCardHTML } from '../src/logic.js';

describe('renderPromiseCardHTML', () => {
    const samplePromise = {
        id: 1,
        category: 'housing',
        title: 'Rent Freeze',
        description: 'Implement a citywide rent freeze.',
        status: 'pending',
        lastUpdate: 'February 9, 2026',
    };

    it('includes the category in uppercase', () => {
        const html = renderPromiseCardHTML(samplePromise);
        expect(html).toContain('HOUSING');
    });

    it('includes the title', () => {
        const html = renderPromiseCardHTML(samplePromise);
        expect(html).toContain('Rent Freeze');
    });

    it('includes the description', () => {
        const html = renderPromiseCardHTML(samplePromise);
        expect(html).toContain('Implement a citywide rent freeze.');
    });

    it('includes the last update date', () => {
        const html = renderPromiseCardHTML(samplePromise);
        expect(html).toContain('Last updated: February 9, 2026');
    });

    it('includes the correct status badge class', () => {
        const html = renderPromiseCardHTML(samplePromise);
        expect(html).toContain('status-pending');
    });

    it('displays status text with hyphens replaced by spaces', () => {
        const inProgressPromise = { ...samplePromise, status: 'in-progress' };
        const html = renderPromiseCardHTML(inProgressPromise);
        expect(html).toContain('status-in-progress');
        expect(html).toContain('>in progress<');
    });

    it('renders all valid statuses correctly', () => {
        const statuses = ['pending', 'in-progress', 'delivered', 'blocked', 'compromised', 'tbd'];
        statuses.forEach(status => {
            const promise = { ...samplePromise, status };
            const html = renderPromiseCardHTML(promise);
            expect(html).toContain(`status-${status}`);
        });
    });

    it('renders different categories correctly', () => {
        const categories = ['housing', 'transit', 'childcare', 'food', 'wages', 'taxes', 'governance'];
        categories.forEach(category => {
            const promise = { ...samplePromise, category };
            const html = renderPromiseCardHTML(promise);
            expect(html).toContain(category.toUpperCase());
        });
    });

    it('contains expected HTML structure elements', () => {
        const html = renderPromiseCardHTML(samplePromise);
        expect(html).toContain('promise-header');
        expect(html).toContain('promise-category');
        expect(html).toContain('promise-title');
        expect(html).toContain('status-badge');
        expect(html).toContain('promise-description');
        expect(html).toContain('promise-meta');
        expect(html).toContain('last-update');
    });
});
