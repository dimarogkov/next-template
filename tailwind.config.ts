import type { Config } from 'tailwindcss';

const config: Config = {
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
                red: '#f1003a',
                gray: '#e5e5e5',
                white: '#fff',
            },
        },
    },
    plugins: [require('daisyui')],
};

export default config;
