/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'], // Custom font family
        heading: ['Poppins', 'sans-serif'], // Custom font for headings
      },
      colors: {
        // Custom color palette
        primary: '#1E40AF',    // Custom blue color
        secondary: '#F59E0B',  // Custom yellow color
        accent: '#10B981',     // Custom green color
        dark: '#0F172A',       // Custom dark color
        light: '#F3F4F6',      // Custom light color
      },
      spacing: {
        '72': '18rem',  // Custom spacing value
        '84': '21rem',
      },
      borderRadius: {
        '4xl': '2rem',  // Custom border-radius
      },
    },
  },
  plugins: [],
}

