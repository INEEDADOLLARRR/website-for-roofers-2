import { Suspense, lazy } from 'react';
import { Hero } from './components/Hero';
import { TrustTicker } from './components/TrustTicker';
import { ValueGrid } from './components/ValueGrid';
import { Process } from './components/Process';
import WhyChooseUs from './components/ConversionBlueprint';
import { ExpertiseGallery } from './components/ExpertiseGallery';
import { InteractiveOrb } from './components/InteractiveOrb';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { LatestArticles } from './components/LatestArticles';
import { SEOHead } from './components/SEOHead';

// Lazy-load heavier below-fold sections for performance
const Diagnostic = lazy(() => import('./components/Diagnostic').then(m => ({ default: m.Diagnostic })));

const homepageJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Verrazano Roofing',
    url: 'https://verrazanoroofing.com',
    logo: 'https://verrazanoroofing.com/logo.png',
    description: 'Elite commercial roofing services specializing in premium performance coatings and comprehensive structural repairs.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1234 Bay Ridge Ave',
      addressLocality: 'Brooklyn',
      addressRegion: 'NY',
      postalCode: '11209',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-718-555-0123',
      contactType: 'customer service',
    },
    sameAs: [
      'https://www.instagram.com/verrazanoroofing',
      'https://www.linkedin.com/company/verrazanoroofing',
      'https://twitter.com/verrazanoroofing',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Verrazano Roofing',
    url: 'https://verrazanoroofing.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://verrazanoroofing.com/blog?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  },
];

export default function App() {
  return (
    <>
      <SEOHead jsonLd={homepageJsonLd} />
      <div className="bg-brand-black text-brand-white font-sans selection:bg-brand-blue/30 selection:text-brand-white relative">
        {/* Skip to content for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand-white focus:text-brand-black focus:rounded-lg focus:text-sm focus:font-semibold">
          Skip to content
        </a>

        {/* Hero stays sticky so the next section covers it on scroll */}
        <div className="sticky top-0 h-screen overflow-hidden z-0">
          <Hero />
        </div>

        {/* All remaining sections flow naturally */}
        <main id="main-content" className="relative z-10 bg-brand-black">
          <Process />
          <TrustTicker />
          <ValueGrid />
          <InteractiveOrb />
          <ExpertiseGallery />
          <Suspense fallback={<div className="min-h-[50vh]" />}>
            <Diagnostic />
          </Suspense>
          <Testimonials />
          <WhyChooseUs />
          <LatestArticles />
          <Footer />
        </main>
      </div>
    </>
  );
}
