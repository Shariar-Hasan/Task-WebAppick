/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                brand: '#CB8461',
                primary: '#245D51',
            },
        },
    },
    plugins: [],
};
