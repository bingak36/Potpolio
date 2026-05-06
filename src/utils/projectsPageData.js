export const projectFilters = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web app' },
    { id: 'api', label: 'API / Backend' },
    { id: 'oss', label: 'Open source' },
    { id: 'mobile', label: 'Mobile' },
]
export const projectsPageItems = [
    {
        id: 'saas-dashboard',
        categories: ['web', 'api'],
        gradient: 'violet',
        title: 'SaaS analytics dashboard',
        description:
            'Role-based reporting, saved views, and exports for B2B teams. Built for clarity under real data volume and strict access rules.',
        tags: [
            { label: 'React', variant: 'neutral' },
            { label: 'Node.js', variant: 'info' },
            { label: 'PostgreSQL', variant: 'success' },
        ],
        status: { type: 'featured', label: 'Featured' },
        meta: [
            { type: 'users', text: '12k+ MAU' },
            { type: 'stars', text: '1.2k stars' },
        ],
        demoHref: '#',
        codeHref: 'https://github.com',
        demoLabel: 'Live demo',
    },
    {
        id: 'design-tokens',
        categories: ['oss', 'web'],
        gradient: 'emerald',
        title: 'Design tokens toolkit',
        description:
            'Open-source CLI and UI to sync tokens across Figma and code. Keeps teams aligned without slowing down shipping.',
        tags: [
            { label: 'TypeScript', variant: 'neutral' },
            { label: 'Vite', variant: 'warning' },
        ],
        status: { type: 'live', label: 'In production' },
        meta: [{ type: 'stars', text: '3.4k stars' }],
        demoHref: '#',
        codeHref: 'https://github.com',
        demoLabel: 'Live demo',
    },
    {
        id: 'commerce-api',
        categories: ['api'],
        gradient: 'sunset',
        title: 'Commerce checkout API',
        description:
            'Idempotent payments webhooks, inventory reservations, and observability hooks operators can trust during peak traffic.',
        tags: [
            { label: 'Node.js', variant: 'info' },
            { label: 'Redis', variant: 'warning' },
        ],
        status: { type: 'featured', label: 'Featured' },
        meta: [{ type: 'users', text: '2.1M tx / mo' }],
        demoHref: '#',
        codeHref: 'https://github.com',
        demoLabel: 'Live demo',
    },
    {
        id: 'field-notes',
        categories: ['mobile', 'web'],
        gradient: 'sky',
        title: 'Field notes companion',
        description:
            'Offline-first mobile capture with sync when connectivity returns. Paired with a lightweight web console for managers.',
        tags: [
            { label: 'React Native', variant: 'neutral' },
            { label: 'REST', variant: 'info' },
        ],
        status: { type: 'live', label: 'In production' },
        meta: [{ type: 'stars', text: '480 stars' }],
        demoHref: '#',
        codeHref: 'https://github.com',
        demoLabel: 'App store',
    },
    {
        id: 'docs-site',
        categories: ['oss', 'web'],
        gradient: 'amber',
        title: 'Documentation platform',
        description:
            'Search-first docs with versioning, code samples, and contribution flows that keep community PRs reviewable.',
        tags: [
            { label: 'React', variant: 'neutral' },
            { label: 'MDX', variant: 'success' },
        ],
        status: null,
        meta: [{ type: 'users', text: '80k readers / mo' }],
        demoHref: '#',
        codeHref: 'https://github.com',
        demoLabel: 'Live demo',
    },
    {
        id: 'auth-service',
        categories: ['api', 'oss'],
        gradient: 'rose',
        title: 'Auth microservice',
        description:
            'Session rotation, device binding, and audit trails designed for regulated environments without vendor lock-in.',
        tags: [
            { label: 'Go', variant: 'info' },
            { label: 'gRPC', variant: 'neutral' },
        ],
        status: { type: 'live', label: 'In production' },
        meta: [
            { type: 'stars', text: '890 stars' },
            { type: 'users', text: 'Used by 4 teams' },
        ],
        demoHref: '#',
        codeHref: 'https://github.com',
        demoLabel: 'Live demo',
    },
]
