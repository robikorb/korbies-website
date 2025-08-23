import Image from 'next/image';

/**
 * Hero section.
 *
 * Presents a bold introduction along with a call to action. A
 * full‑screen background image sets the tone while overlay text
 * remains legible thanks to a dark overlay. The secondary tagline
 * conveys the company's ethos in a concise manner.
 */
export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-24 text-center text-white">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-bg.png"
          alt="Abstract gradient background"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-md">
          Local IT Support for Ipswich &amp; Suffolk
        </h1>
        <p className="text-lg md:text-xl mb-6 text-muted">
          Korbies Tech delivers robust, secure, and scalable IT services to empower your growth. Experience seamless technology, proactive support, and peace of mind—every day.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 mb-6">
          <a
            href="#contact"
            className="px-6 py-3 rounded-md text-sm font-semibold bg-gradient-to-r from-primary to-secondary text-white shadow-soft hover:brightness-110"
          >
            Book Your Free IT Consultation
          </a>
          <span className="text-muted">Where Complexity Flows to Clarity</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted mt-4">
          <span className="flex items-center gap-2">
            <span role="img" aria-label="Headset">🎧</span> UK‑based helpdesk
          </span>
          <span className="flex items-center gap-2">
            <span role="img" aria-label="Shield">🛡️</span> Security‑first
          </span>
          <span className="flex items-center gap-2">
            <span role="img" aria-label="Bolt">⚡</span> Fast response
          </span>
        </div>
      </div>
    </section>
  );
}