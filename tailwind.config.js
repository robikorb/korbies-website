/**
 * Tailwind CSS configuration for the Korbies Tech Next.js project.
 *
 * This config extends the default Tailwind palette to include the
 * colours used throughout the original Korbies Tech site. It also
 * scans files in the pages and components directories for classes.
 */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2d5bff',
        secondary: '#19b5fe',
        dark: '#0b132b',
        dark2: '#1c2541',
        card: '#111a33',
        border: '#203057',
        muted: '#9fb0c7',
        text: '#e9eef7'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.35)'
      }
    }
  },
  plugins: []
};