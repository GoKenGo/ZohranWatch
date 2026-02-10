// Campaign Promises Data
export const promises = [
    {
        id: 1,
        category: 'housing',
        title: 'Rent Freeze',
        description: 'Implement a citywide rent freeze to protect tenants from displacement and stabilize housing costs.',
        status: 'pending',
        lastUpdate: 'February 9, 2026'
    },
    {
        id: 2,
        category: 'housing',
        title: 'Eviction Enforcement',
        description: 'Strengthen eviction protections and create a tenant advocacy office to prevent illegal evictions.',
        status: 'tbd',
        lastUpdate: 'February 9, 2026'
    },
    {
        id: 3,
        category: 'housing',
        title: 'Affordable Housing Stock',
        description: 'Build and preserve 100,000 units of permanently affordable housing through public development.',
        status: 'tbd',
        lastUpdate: 'February 9, 2026'
    },
    {
        id: 4,
        category: 'transit',
        title: 'Free Buses',
        description: 'Make all NYC buses free to ride, starting with the busiest routes serving working-class neighborhoods.',
        status: 'pending',
        lastUpdate: 'February 9, 2026'
    },
    {
        id: 5,
        category: 'transit',
        title: 'Transit Pilot Expansion',
        description: 'Expand free transit pilot programs to demonstrate feasibility of fare-free public transportation.',
        status: 'tbd',
        lastUpdate: 'February 9, 2026'
    },
    {
        id: 6,
        category: 'childcare',
        title: 'Universal Childcare',
        description: 'Guarantee free, high-quality childcare for all NYC families regardless of income.',
        status: 'tbd',
        lastUpdate: 'February 9, 2026'
    },
    {
        id: 7,
        category: 'childcare',
        title: 'Childcare Worker Wages',
        description: 'Raise wages for childcare workers to reflect the value of their essential work.',
        status: 'tbd',
        lastUpdate: 'February 9, 2026'
    },
    {
        id: 8,
        category: 'food',
        title: 'City Grocery Stores',
        description: 'Establish publicly-owned grocery stores in underserved neighborhoods to provide affordable, healthy food.',
        status: 'tbd',
        lastUpdate: 'February 9, 2026'
    },
    {
        id: 9,
        category: 'food',
        title: 'Eliminate Food Deserts',
        description: 'End food deserts by ensuring every neighborhood has access to affordable fresh produce within walking distance.',
        status: 'tbd',
        lastUpdate: 'February 9, 2026'
    },
    {
        id: 10,
        category: 'wages',
        title: '$30 Minimum Wage by 2030',
        description: 'Raise the minimum wage to $30/hour by 2030 for all workers in New York City.',
        status: 'tbd',
        lastUpdate: 'February 9, 2026'
    },
    {
        id: 11,
        category: 'taxes',
        title: 'Tax the Wealthy',
        description: 'Implement progressive taxation on high earners and luxury properties to fund public services.',
        status: 'pending',
        lastUpdate: 'February 9, 2026'
    },
    {
        id: 12,
        category: 'taxes',
        title: 'Corporate Tax Reform',
        description: 'Close corporate tax loopholes and ensure large businesses pay their fair share.',
        status: 'tbd',
        lastUpdate: 'February 9, 2026'
    },
    {
        id: 13,
        category: 'governance',
        title: 'Clean Break from Adams',
        description: 'Reverse harmful Adams-era policies and restore accountability to city government.',
        status: 'in-progress',
        lastUpdate: 'February 9, 2026'
    },
    {
        id: 14,
        category: 'governance',
        title: 'Transparent Budget',
        description: 'Make the city budget fully transparent and accessible, with participatory budgeting expanded citywide.',
        status: 'pending',
        lastUpdate: 'February 9, 2026'
    }
];

export const VALID_CATEGORIES = ['housing', 'transit', 'childcare', 'food', 'wages', 'taxes', 'governance'];

export const VALID_STATUSES = ['pending', 'in-progress', 'delivered', 'blocked', 'compromised', 'tbd'];

export const CATEGORY_LABELS = {
    'housing': 'Housing',
    'transit': 'Transit',
    'childcare': 'Childcare',
    'food': 'Food',
    'wages': 'Wages',
    'taxes': 'Taxes',
    'governance': 'Governance'
};

export const termStart = new Date('2026-01-01T00:00:00');
export const termEnd = new Date('2030-01-01T00:00:00');
