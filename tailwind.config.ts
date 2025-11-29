import { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                title: '#d4d4d4',
                text: '#a1a1a1',
                border: '#ffffff1a',
                yellow: '#facc15',
                green: '#52881a',
                red: '#ff6467',
                blue: '#2b7fff',
                bg: '#0a0a0a',
            },
            animation: {
                enter: 'enter 0.2s forwards',
                leave: 'leave 0.2s forwards',
                'loop-scroll': 'loop-scroll 24s linear infinite',
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
                'loop-scroll': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-101%)' },
                },
            },
        },
    },
    plugins: [require('daisyui')],
};

export default config;
