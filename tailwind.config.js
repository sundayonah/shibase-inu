/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic':
               'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            hero: "url('/images/hero.png')",
            services: "url('/images/services.png')",
            teams: "url('/images/BG_OurTeam.png')",
            'footer-texture': "url('/img/footer-texture.png')",
         },
      },
   },
   plugins: [],
};
