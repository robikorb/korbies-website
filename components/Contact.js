import { useState } from 'react';

/**
 * Contact section.
 *
 * Provides a form for potential clients to reach out. The form posts
 * directly to FormSubmit.co using hidden fields for spam prevention
 * and an autoresponse. A small consent checkbox ensures visitors
 * agree to be contacted. A local success message appears once the
 * form is submitted, while still allowing the POST request to go
 * through.
 */
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    // Hide the success message after a few seconds
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="py-16 bg-dark2 text-text">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Get in Touch</h2>
            <p className="text-muted mb-4">
              Ready to elevate your IT? Contact us today and let's start a conversation.
            </p>
            <ul className="text-muted space-y-2 text-sm">
              <li><span role="img" aria-label="location">📍</span> Local service area: Ipswich & Suffolk</li>
              <li><span role="img" aria-label="helpdesk">🎧</span> UK‑based helpdesk</li>
            </ul>
          </div>
          <div>
            <form
              id="contactForm"
              name="contact"
              action="https://formsubmit.co/robi@korbies.uk"
              method="POST"
              className="space-y-4"
              onSubmit={handleSubmit}
            >
              {/* Hidden spam fields */}
              <input type="text" name="website" className="hidden" tabIndex="-1" autoComplete="off" aria-hidden="true" />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_autoresponse"
                value="Thank you for contacting Korbies Tech! We'll get back to you soon."
              />
              <input type="text" name="_honey" className="hidden" tabIndex="-1" autoComplete="off" aria-hidden="true" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-sm mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="rounded-md border border-border bg-dark p-2 text-text"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="company" className="text-sm mb-1">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="rounded-md border border-border bg-dark p-2 text-text"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-sm mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="rounded-md border border-border bg-dark p-2 text-text"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-sm mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="rounded-md border border-border bg-dark p-2 text-text"
                  />
                </div>
                <div className="col-span-full flex flex-col">
                  <label htmlFor="interest" className="text-sm mb-1">Service Interest</label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    className="rounded-md border border-border bg-dark p-2 text-text"
                  >
                    <option value="" disabled selected>
                      Choose…
                    </option>
                    <option>Managed IT Services</option>
                    <option>Cybersecurity</option>
                    <option>Cloud &amp; Email</option>
                    <option>Backups &amp; DR</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
                <div className="col-span-full flex flex-col">
                  <label htmlFor="message" className="text-sm mb-1">How can we help?</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    className="rounded-md border border-border bg-dark p-2 text-text"
                  ></textarea>
                </div>
                <div className="col-span-full flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    value="yes"
                    required
                    className="mt-1"
                  />
                  <label htmlFor="consent" className="text-sm">
                    I agree to be contacted about my enquiry.
                  </label>
                </div>
                <div className="col-span-full">
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold px-4 py-3 rounded-md shadow-soft hover:brightness-110"
                  >
                    <span role="img" aria-label="send">📨</span> Send Message
                  </button>
                </div>
              </div>
              {submitted && (
                <div className="mt-4 bg-green-600/20 border border-green-600 text-green-200 text-sm rounded-md p-3" role="alert">
                  Thanks—your message has been queued. We'll get back to you shortly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}