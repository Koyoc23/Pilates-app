/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pilates: {
          cream: '#F9F6F0',   
          sage: '#9CAF88',    
          terra: '#C86F5E',   
          dark: '#2D3748',    
          light: '#FFFFFF',   
        }
      }
    },
  },
  plugins: [],
}
