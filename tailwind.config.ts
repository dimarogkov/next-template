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
                showToastAnimation: 'showToast 0.3s ease-in-out',
            },
            keyframes: {
                showToast: {
                    from: { opacity: '0', transform: 'translateX(30%)' },
                    to: { opacity: '1', transform: 'translateX(0)' },
                },
            },
        },
    },
    plugins: [require('daisyui')],
};

export default config;
