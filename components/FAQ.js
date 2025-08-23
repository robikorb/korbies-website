/**
 * FAQ section.
 *
 * Uses semantic <details> and <summary> elements to provide an
 * accessible accordion. Each entry is independent, so multiple
 * questions can be open at once. Styling cues such as bold text for
 * questions and subtle borders help delineate items.
 */
export default function FAQ() {
  return (
    <section id="faq" className="py-16">
      <div className="max-w-4xl mx-auto px-4 text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-text mb-2">Frequently Asked Questions</h2>
        <p className="text-muted">
          Straight answers to help you decide with confidence.
        </p>
      </div>
      <div className="max-w-4xl mx-auto px-4 space-y-4">
        <details className="bg-card border border-border rounded-md p-4">
          <summary className="cursor-pointer font-medium text-text">
            Is Managed IT right for my small business?
          </summary>
          <div className="mt-2 text-muted text-sm">
            Yes—our services are tailored for small teams who need expert IT without the overhead.
          </div>
        </details>
        <details className="bg-card border border-border rounded-md p-4">
          <summary className="cursor-pointer font-medium text-text">
            How fast is your response time?
          </summary>
          <div className="mt-2 text-muted text-sm">
            Most requests are resolved within the hour by our local UK‑based helpdesk.
          </div>
        </details>
        <details className="bg-card border border-border rounded-md p-4">
          <summary className="cursor-pointer font-medium text-text">
            Will you work with our current setup?
          </summary>
          <div className="mt-2 text-muted text-sm">
            Absolutely. We support your existing tools and suggest improvements where needed.
          </div>
        </details>
        <details className="bg-card border border-border rounded-md p-4">
          <summary className="cursor-pointer font-medium text-text">
            What about data security?
          </summary>
          <div className="mt-2 text-muted text-sm">
            We include multilayered security—firewalls, AV, patches and more—to keep your data safe.
          </div>
        </details>
      </div>
    </section>
  );
}