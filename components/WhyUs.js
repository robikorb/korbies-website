/**
 * Why Us section.
 *
 * Highlights four reasons to choose Korbies Tech. Each card uses
 * simple emojis to represent the core values rather than relying on
 * external icon libraries. A dark card background unifies the look
 * with the rest of the site.
 */
export default function WhyUs() {
  const items = [
    {
      title: 'Certified Experts',
      description: 'Certified, experienced professionals',
      emoji: '🧑‍💻'
    },
    {
      title: 'Always Watching',
      description: '24/7 monitoring & support',
      emoji: '👀'
    },
    {
      title: 'Tailored Fit',
      description: 'Customised solutions for your business',
      emoji: '🎛️'
    },
    {
      title: 'Transparent',
      description: 'Clear, honest pricing',
      emoji: '🧾'
    }
  ];
  return (
    <section id="why" className="py-16">
      <div className="max-w-6xl mx-auto px-4 text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-text mb-2">Why Choose Us?</h2>
        <p className="text-muted max-w-3xl mx-auto">
          Expertise, reliability and trust. We combine technical excellence with a personal touch. From fast response times to proactive support and transparent communication, we're committed to your success every step of the way.
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map(({ title, description, emoji }) => (
          <div key={title} className="bg-card border border-border rounded-xl shadow-soft p-6 text-center h-full flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-md bg-gradient-to-br from-primary via-secondary to-card shadow-soft">
                <span className="text-xl" role="img" aria-label={title}>{emoji}</span>
              </div>
              <h4 className="font-semibold mb-1 text-text">{title}</h4>
            </div>
            <p className="text-muted text-sm mt-2">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}