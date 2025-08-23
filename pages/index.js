import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Calculator from '../components/Calculator';
import Services from '../components/Services';
import FAQ from '../components/FAQ';
import About from '../components/About';
import WhyUs from '../components/WhyUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

/**
 * Homepage for the Korbies Tech website.
 *
 * All sections of the single page site are composed here. Meta
 * information in the <Head> component improves SEO and social
 * sharing. The order of the components matches the navigation.
 */
export default function Home() {
  return (
    <>
      <Head>
        <title>Korbies Tech — Local IT Support for Ipswich & Suffolk</title>
        <meta
          name="description"
          content="Korbies Tech delivers robust, secure and scalable IT services for SMBs in Ipswich & Suffolk. Proactive support, UK‑based helpdesk and peace of mind—every day."
        />
        <meta property="og:title" content="Korbies Tech — Local IT Support for Ipswich & Suffolk" />
        <meta
          property="og:description"
          content="Robust, secure and scalable IT services for UK SMBs. Experience proactive support and peace of mind—every day."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/hero-bg.png" />
        <meta property="og:url" content="https://msp.korbies.uk/" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Schema.org LocalBusiness JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Korbies Tech',
              url: 'https://msp.korbies.uk/',
              image: '/hero-bg.png',
              description:
                'Managed IT, Cybersecurity, Cloud, and IT Consulting for UK SMBs.',
              telephone: '+44 1400 000000',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Ipswich',
                addressRegion: 'Suffolk',
                addressCountry: 'GB'
              },
              areaServed: { '@type': 'Place', name: 'Ipswich and Suffolk' },
              sameAs: ['https://www.linkedin.com/company/korbies-tech'],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'sales',
                email: 'hello@korbies.uk'
              }
            })
          }}
        />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <Calculator />
        <Services />
        <FAQ />
        <About />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}