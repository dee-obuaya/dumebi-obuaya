/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './js/**/*.js',
    ],
    theme: {
        extend: {
            // tokens mapped to utilities
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },

            container: {
                center: true,
                padding: {
                    DEFAULT: '1.25rem', // 20px
                    sm: '1.5rem',      // 24px
                    lg: '2rem',        // 32px
                    xl: '2.5rem',      // 40px
                    '2xl': '3rem',     // 48px
                }
            },

            transitionDuration: {
                fast: 'var(--motion-fast)',
                base: 'var(--motion-base)',
                slow: 'var(--motion-slow)',
            },
            transitionTimingFunction: {
                out: 'var(--ease-out)',
                soft: 'var(--ease-soft)',
            },
            translate: {
                'y-small': 'var(--motion-y-small)',
                'y-base': 'var(--motion-y-base)',
            },
        },
    },
    plugins: [],
}
