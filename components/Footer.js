import { useEffect, useState } from 'react';

/**
 * Footer component.
 *
 * Displays copyright information, a privacy link and a back‑to‑top
 * anchor. The current year is computed client side to keep it
 * up‑to‑date without manual changes. A subtle border separates the
 * footer from the main content.
 */
export default function Footer() {
  const [year, setYear] = useState('');
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="border-t border-border py-6 bg-dark text-muted text-sm">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span>
          © {year} Korbies Tech — Local IT Support for Ipswich &amp; Suffolk ·{' '}
          <a className="underline hover:text-white" href="/privacy-policy.html">
            Privacy
          </a>
        </span>
        <a
          href="#hero"
          className="inline-block border border-text text-text px-4 py-2 rounded-md hover:bg-text hover:text-dark transition-colors"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}