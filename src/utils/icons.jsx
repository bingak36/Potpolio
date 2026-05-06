export const icons = {
    mail: (props) => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
            <path
                d="M4 6h16v12H4V6zm0 0 8 6 8-6"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    pin: (props) => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
            <path
                d="M12 21s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10z"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.75" />
        </svg>
    ),

    download: (props) => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
            <path
                d="M12 4v12m0 0 4-4m-4 4-4-4M5 19h14"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
            />
        </svg>
    ),

    github: (props) => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
            <path d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.481 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.855 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z" />
        </svg>
    ),

    user: (props) => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
            <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.75" />
            <path
                d="M5 20v-1c0-2.5 2.5-4.5 7-4.5s7 2 7 4.5v1"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
            />
        </svg>
    ),

    heart: (props) => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
    ),

    briefcase: (props) => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
            <rect x="3" y="7" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.75" />
            <path
                d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                stroke="currentColor"
                strokeWidth="1.75"
            />
        </svg>
    ),

    graduation: (props) => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
            <path d="M4 10 12 6l8 4-8 4-8-4z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
            <path
                d="M8 12v5c0 1 2 3 4 3s4-2 4-3v-5"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
            />
        </svg>
    ),

    bolt: (props) => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
            <path
                d="M13 2 3 14h8l-1 8 10-12h-8l1-8z"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinejoin="round"
            />
        </svg>
    ),

    shield: (props) => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
            <path
                d="M12 3 5 6v6c0 5 3.5 8 7 9 3.5-1 7-4 7-9V6l-7-3z"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinejoin="round"
            />
        </svg>
    ),

    users: (props) => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
            <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.75" />
            <path d="M3 20v-1a5 5 0 0 1 5-5h2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            <circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.75" />
            <path d="M21 20v-1a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
    ),

    trend: (props) => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
            <path
                d="M4 16v3h3m13-7v3h-3M5 19l5-5m4-4 5-5"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
            />
            <path d="M15 14h6v-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
    ),
    external: (props) => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
            <path
                d="M14 3h7v7m0-7L10 14M5 5l14 14"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    star: (props) => (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
            <path
                d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6L12 2z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
        </svg>
    ),
    sparkle: (props) => (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
            <path d="M12 2l1.09 4.26L17 7.27l-3.18 2.55L15.18 14 12 11.77 8.82 14l1.36-4.18L7 7.27l3.91-.99L12 2zm0 10l1.09 4.26L17 17.27l-3.18 2.55L15.18 24 12 21.77 8.82 24l1.36-4.18L7 17.27l3.91-.99L12 12z" />
        </svg>
    ),

    monitor: (props) => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
            <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.75" />
            <path d="M8 20h8M12 16v4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
    ),

    server: (props) => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
            <rect x="4" y="4" width="16" height="5" rx="1" stroke="currentColor" strokeWidth="1.75" />
            <rect x="4" y="10" width="16" height="5" rx="1" stroke="currentColor" strokeWidth="1.75" />
            <circle cx="8" cy="6.5" r="0.75" fill="currentColor" />
            <circle cx="8" cy="12.5" r="0.75" fill="currentColor" />
        </svg>
    ),

    flask: (props) => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
            <path
                d="M10 2h4v5l4 9a3 3 0 0 1-2.65 4.45H8.65A3 3 0 0 1 6 16l4-9V2z"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinejoin="round"
            />
            <path d="M8 14h8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
    ),

    cloud: (props) => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
            <path
                d="M18 17h1a4 4 0 0 0 0-8 6 6 0 0 0-11.5-1.5A4 4 0 0 0 6 17h12"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

}