import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                black: '#222831',
                green: '#52881a',
                blue: '#5356ff',
                yellow: '#fab12f',
                red: '#f1003a',
                gray: '#e5e5e5',
                white: '#fff',
            },
            animation: {
                enter: 'enter 0.2s forwards',
                leave: 'leave 0.2s forwards',
            },
            keyframes: {
                enter: {
                    '0%': { opacity: '0', visibility: 'hidden', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', visibility: 'visible', transform: 'translateY(0)' },
                },
                leave: {
                    '0%': { opacity: '1', visibility: 'visible', transform: 'translateY(0)' },
                    '100%': { opacity: '0', visibility: 'hidden', transform: 'translateY(20px)' },
                },
            },
        },
    },
    plugins: [require('daisyui')],
};

export default config;
