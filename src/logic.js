import { CATEGORY_LABELS, termEnd } from './data.js';

// Calculate stats from a promises array
export function calculateStats(promises) {
    const total = promises.length;
    const delivered = promises.filter(p => p.status === 'delivered').length;
    const inProgress = promises.filter(p => p.status === 'in-progress').length;
    const percentage = total > 0 ? ((delivered / total) * 100).toFixed(0) : 0;

    return { total, delivered, inProgress, percentage };
}

// Calculate countdown from now until term end
export function calculateCountdown(now = new Date()) {
    const diff = termEnd - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
}

// Calculate progress for each category
export function calculateCategoryProgress(promises) {
    return Object.entries(CATEGORY_LABELS).map(([key, name]) => {
        const categoryPromises = promises.filter(p => p.category === key);
        const delivered = categoryPromises.filter(p => p.status === 'delivered').length;
        const total = categoryPromises.length;
        const percentage = total > 0 ? ((delivered / total) * 100).toFixed(0) : 0;

        return { key, name, delivered, total, percentage };
    });
}

// Apply filters to promises array
export function filterPromises(promises, { categoryFilter = 'all', statusFilter = 'all', searchQuery = '' } = {}) {
    let filtered = promises;

    if (categoryFilter !== 'all') {
        filtered = filtered.filter(p => p.category === categoryFilter);
    }

    if (statusFilter !== 'all') {
        filtered = filtered.filter(p => p.status === statusFilter);
    }

    if (searchQuery) {
        filtered = filtered.filter(p =>
            p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    return filtered;
}

// Generate HTML for a promise card
export function renderPromiseCardHTML(promise, index = 0) {
    return `
        <div class="promise-header">
            <div>
                <div class="promise-category">${promise.category.toUpperCase()}</div>
                <div class="promise-title">${promise.title}</div>
            </div>
            <span class="status-badge status-${promise.status}">${promise.status.replace('-', ' ')}</span>
        </div>
        <div class="promise-description">${promise.description}</div>
        <div class="promise-meta">
            <span class="last-update">Last updated: ${promise.lastUpdate}</span>
        </div>
    `;
}
