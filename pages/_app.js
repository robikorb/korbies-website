import '../styles/globals.css';

/**
 * Custom App component for Next.js. This file wraps every page and
 * imports global CSS. It ensures Tailwind styles are available
 * throughout the application.
 */
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;