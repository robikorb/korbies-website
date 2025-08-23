import { useState, useEffect } from 'react';

/**
 * Navigation bar component.
 *
 * Implements a responsive menu that collapses into a hamburger on
 * smaller screens. Each link anchors to a section on the page. A call
 * to action button encourages users to book a free consultation.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu when the viewport is resized beyond the
  // mobile breakpoint. This keeps the menu in sync with the layout.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close the menu when a navigation link is clicked.
  const handleLinkClick = () => {
    setOpen(false);
  };

  // Determine the nav menu classes based on the open state. This
  // approach avoids template strings with JSX curly braces in the
  // patch context.
  const navBase =
    'absolute md:static top-full right-0 w-full md:w-auto md:block bg-dark md:bg-transparent md:ml-auto px-4 md:px-0 py-4 md:py-0 border-b md:border-none border-border md:border-0';
  const navClass = open ? `${navBase} block` : `${navBase} hidden`;

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-dark/70 border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center h-16">
        <a
          href="#hero"
          className="flex items-center gap-2 font-bold text-text hover:text-white transition-colors"
          aria-label="Korbies Tech"
        >
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-primary via-secondary to-card grid place-items-center shadow-soft">
            <span className="text-lg font-bold">K</span>
          </div>
          <span className="hidden sm:block">Korbies Tech</span>
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="ml-auto flex md:hidden flex-col justify-center items-center w-8 h-8 text-text hover:text-white focus:outline-none"
          aria-label="Toggle navigation"
        >
          {/* Hamburger icon */}
          <span
            className={`block w-6 h-0.5 bg-current transform transition duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-current my-1 transition-opacity duration-300 ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transform transition duration-300 ${open ? '-rotate-45 -translate-y-1.5' : ''}`}
          />
        </button>
        <nav className={navClass}>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6">
            <li>
              <a
                onClick={handleLinkClick}
                href="#hero"
                className="block py-1 px-2 text-text hover:text-white transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={handleLinkClick}
                href="#calculator"
                className="block py-1 px-2 text-text hover:text-white transition-colors"
              >
                Calculator
              </a>
            </li>
            <li>
              <a
                onClick={handleLinkClick}
                href="#services"
                className="block py-1 px-2 text-text hover:text-white transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                onClick={handleLinkClick}
                href="#faq"
                className="block py-1 px-2 text-text hover:text-white transition-colors"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                onClick={handleLinkClick}
                href="/blog"
                className="block py-1 px-2 text-text hover:text-white transition-colors"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                onClick={handleLinkClick}
                href="#about"
                className="block py-1 px-2 text-text hover:text-white transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={handleLinkClick}
                href="#why"
                className="block py-1 px-2 text-text hover:text-white transition-colors"
              >
                Why Us
              </a>
            </li>
            <li>
              <a
                onClick={handleLinkClick}
                href="#contact"
                className="block py-1 px-2 text-text hover:text-white transition-colors"
              >
                Contact
              </a>
            </li>
            <li className="md:ml-4">
              <a
                onClick={handleLinkClick}
                href="#contact"
                className="inline-block whitespace-nowrap bg-gradient-to-r from-primary to-secondary text-white font-semibold px-4 py-2 rounded-md shadow-soft hover:brightness-110"
              >
                Book Free Consultation
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}