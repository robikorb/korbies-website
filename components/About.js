import Image from 'next/image';

/**
 * About section.
 *
 * Shares the company's story and mission. A mission callout and
 * location card provide additional context about what drives
 * Korbies Tech and where it operates. Icons or emojis help to
 * visualise the concepts without external dependencies.
 */
export default function About() {
  return (
    <section id="about" className="py-16 bg-dark2 text-text">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">About Korbies Tech</h2>
            <p className="text-muted mb-6 max-w-2xl">
              Korbies Tech is a team of passionate IT professionals dedicated to helping businesses thrive in a digital world. With years of experience and a relentless focus on customer satisfaction, we deliver solutions that are reliable, secure and tailored to your needs.
            </p>
            <div className="bg-card border border-border rounded-xl shadow-soft p-5 flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-gradient-to-br from-primary via-secondary to-card shadow-soft">
                <span role="img" aria-label="mission" className="text-xl">🎯</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Mission</h3>
                <p className="text-muted text-sm">
                  To simplify technology for our clients—so you can focus on what you do best.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full lg:max-w-sm">
            <div className="bg-card border border-border rounded-xl shadow-soft p-5 text-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-gradient-to-br from-primary via-secondary to-card shadow-soft mb-3 mx-auto">
                <span role="img" aria-label="location" className="text-xl">📍</span>
              </div>
              <p className="text-muted text-sm mb-0">
                Proudly serving <strong>Ipswich &amp; Suffolk</strong> and surrounding areas across the UK.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}