/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"
  ],
  theme: {
    extend: {
      colors: {
        main: "#2E3845",       // primary text & headings
        grey: "#757C84",       // H3/H4, side menu, tags
        line: "#E7EBF0",       // divider lines, boxes
        bg: "#FAFCFD",         // main background
        light: "#F5FAFF",      // minor details
      },
      fontFamily: {
        primary: ['Space Grotesk', 'sans-serif'],   
        secondary: ['Hanken Grotesk', 'sans-serif'], 
        mono: ['Space Mono', 'monospace'],         
        hero: ['Anton', 'sans-serif'],             
      },
      fontSize: {
        h1: ['28px', '35px'],      
        h2: ['24px', '30px'],
        h3: ['18px', '23px'],
        h4: ['16px', '20px'],
        body: ['18px', '27px'],    
        bodySmall: ['16px', '24px'],
        meta: ['16px', '24px'],
        nav: ['18px', '27px'],
        hero: ['96px', '105px'],   
      },
    },
  },
  plugins: [],
}
