export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'hardknocks-black': '#0a0a0a',
                'hardknocks-red': '#cc0000',
                'hardknocks-gold': '#ffb700',
                'ibelieve-blue': '#0055ff',
            },
            fontFamily: {
                'impact': ['"Bebas Neue"', 'sans-serif'],
                'body': ['"Inter"', 'sans-serif'],
            },
            backgroundImage: {
                'cinder-block': "url('https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/f294fb90-806d-4dca-e8a5-1b685d01a100/public')",
            }
        },
    },
    plugins: [],
}
