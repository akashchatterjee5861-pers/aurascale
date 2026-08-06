import {
  MapPin,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  TrendingUp,
  Clock,
  ExternalLink,
} from "lucide-react";

export default function SinglePagePortfolio() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER; // Update with your actual WhatsApp number
  const agentName =
    process.env.NEXT_PUBLIC_WHATSAPP_NAME || "Growth Consultant";

  const whatsappMessage = encodeURIComponent(
    `Hi ${agentName}, I'd like to book a free audit for my skin/dental clinic. `,
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white font-sans antialiased relative">
      {/* Sticky Top Notification Bar */}
      <div className="bg-neutral-900 text-white px-4 py-2.5 text-center text-xs sm:text-sm font-medium tracking-wide flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>Accepting 3 New Skin & Dental Clinic Partners for Q3 Growth</span>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-semibold text-base sm:text-lg tracking-tight flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-neutral-900"></span>
            AuraScale<span className="text-neutral-400">.agency</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#portfolio"
              className="hidden sm:inline-block text-sm font-medium text-neutral-600 hover:text-neutral-900 transition"
            >
              Case Demo
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-neutral-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-800 transition shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400" />
              <span>WhatsApp Audit</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 text-neutral-700 text-xs sm:text-sm font-medium mb-8 border border-neutral-200/60">
          <MapPin className="w-4 h-4 text-neutral-900" />
          <span>Local SEO & Mobile Funnels for Healthcare Providers</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-normal tracking-tight text-neutral-900 leading-[1.12] mb-6">
          We Help Skin & Dental Clinics Get More{" "}
          <span className="italic font-light">Local Patients</span> via Google
          Map & GEO .
        </h1>

        <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto font-light mb-10 leading-relaxed">
          Stop losing high-value cosmetic and dental patients to competitors
          ranking higher. We use hyper-local Google Maps and GEO to turn your
          local profile into an automated patient-booking machine.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-neutral-900 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-neutral-800 transition shadow-sm"
          >
            <span>Book a Free Clinic Audit</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-neutral-200 text-neutral-900 px-8 py-4 rounded-full text-base font-medium hover:bg-neutral-50 transition"
          >
            <span>View Live Mobile Demo</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-10 border-t border-neutral-100 grid grid-cols-2 md:grid-cols-3 gap-6 text-left max-w-3xl mx-auto text-sm text-neutral-600">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span>Google Maps Top 5 Focus</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>1-Second Mobile Load Times</span>
          </div>
          <div className="flex items-center gap-3 col-span-2 md:col-span-1">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Instant WhatsApp Booking</span>
          </div>
        </div>
      </section>

      {/* Pain / Problem Section */}
      <section className="bg-neutral-50 border-y border-neutral-200/60 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-3">
              The Problem
            </h2>
            <p className="text-3xl sm:text-4xl font-normal tracking-tight text-neutral-900">
              Why most aesthetic & dental clinics bleed patient leads every
              single day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-neutral-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-900 mb-6 font-semibold">
                  01
                </div>
                <h3 className="text-lg font-medium text-neutral-900 mb-3">
                  Invisible on Google Maps
                </h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">
                  Patients searching for "best skin clinic near me" or "best
                  botox clinic near me" don't look after the top 5 or max 1st
                  page in map results.if you are not there , you practically
                  invisible to high-intent patients actively looking to spend
                  money.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-neutral-100 text-xs font-medium text-rose-600 flex items-center gap-1.5">
                <span>Result: Competitors take your local market share</span>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-neutral-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-900 mb-6 font-semibold">
                  02
                </div>
                <h3 className="text-lg font-medium text-neutral-900 mb-3">
                  Slow, Clunky Mobile Sites
                </h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">
                  Over 80% of healthcare searches happen on mobile phones. If
                  your website takes more than 3 seconds to load or requires
                  pinching and zooming to find a phone number, users bounce
                  immediately.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-neutral-100 text-xs font-medium text-rose-600 flex items-center gap-1.5">
                <span>Result: 70% potential patient drop-off</span>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-neutral-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-900 mb-6 font-semibold">
                  03
                </div>
                <h3 className="text-lg font-medium text-neutral-900 mb-3">
                  No Direct Chat Triggers
                </h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">
                  Modern patients don't want to fill generic contact forms and
                  waiting 24 hours for a callback. If a fast, one-tap WhatsApp
                  or contact booking option isn't there , high-intent leads give
                  up and look elsewhere.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-neutral-100 text-xs font-medium text-rose-600 flex items-center gap-1.5">
                <span>Result: Low conversion rates on paid traffic</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio / Sample Work Section */}
      <section id="portfolio" className="py-24 max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-3">
            Live Sample Work
          </h2>
          <p className="text-3xl sm:text-4xl font-normal tracking-tight text-neutral-900">
            See our high-converting mobile funnel framework in action.
          </p>
        </div>

        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8 sm:p-12 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-semibold">
              Live Interactive Prototype
            </div>
            <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-900">
              AuraSkin Clinic Mobile Funnel Demo
            </h3>
            <p className="text-neutral-600 font-light leading-relaxed">
              Designed specifically for dermatology and aesthetic practices.
              Features lightning-fast static architecture, dynamic treatment
              tabs, trust-building before/after modules, and a floating one-tap
              WhatsApp booking trigger.
            </p>
            <ul className="space-y-3 text-sm text-neutral-700">
              <li className="flex items-center gap-3">
                <Smartphone className="w-4 h-4 text-neutral-900" />
                <span>Optimized exclusively for mobile thumb-scrolling</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-neutral-900" />
                <span>Sub-1 second page load speed via Next.js</span>
              </li>
              <li className="flex items-center gap-3">
                <TrendingUp className="w-4 h-4 text-neutral-900" />
                <span>Average 34% increase in consultation bookings</span>
              </li>
            </ul>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="https://aurascale-umber.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-800 transition shadow-sm"
              >
                <span>Explore Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <span className="text-xs text-neutral-400 font-mono">
                Hosted on Vercel Edge
              </span>
            </div>
          </div>

          {/* Visual Device Mockup Representation */}
          <div className="w-full lg:w-[380px] bg-neutral-900 p-4 rounded-3xl shadow-xl text-white">
            <div className="bg-neutral-800 rounded-2xl p-6 space-y-6 border border-neutral-700/50">
              <div className="flex items-center justify-between border-b border-neutral-700/60 pb-4">
                <span className="text-xs font-mono text-neutral-400">
                  auraskin-demo.vercel.app
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              </div>
              <div className="space-y-3">
                <div className="text-xs text-emerald-400 font-medium">
                  Aesthetic Dermatology
                </div>
                <div className="text-lg font-normal leading-snug">
                  Advanced Laser & Anti-Aging Treatments
                </div>
                <p className="text-xs text-neutral-400 font-light">
                  Book your skin consultation in under 30 seconds via WhatsApp.
                </p>
              </div>
              <div className="bg-emerald-500 text-neutral-900 py-3 px-4 rounded-xl font-medium text-xs text-center flex items-center justify-center gap-2 shadow-md">
                <MessageCircle className="w-4 h-4 fill-neutral-900" />
                <span>Chat with Clinic Coordinator</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Contact / Footer Section */}
      <footer className="bg-neutral-900 text-white py-20 border-t border-neutral-800">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neutral-800 text-white mb-2">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight">
            Ready to dominate your local clinic market?
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto font-light text-base">
            Let's review your current Google Maps ranking and mobile funnel
            performance together on a quick, no-pressure call or chat.
          </p>
          <div className="pt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 text-neutral-900 px-8 py-4 rounded-full text-base font-semibold hover:bg-emerald-400 transition shadow-lg"
            >
              <MessageCircle className="w-5 h-5 fill-neutral-900" />
              <span>Start Instant WhatsApp Chat</span>
            </a>
          </div>
          <div className="pt-16 border-t border-neutral-800 text-xs text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>
              &copy; {new Date().getFullYear()} AuraScale.local. All rights
              reserved.
            </p>
            <p className="font-mono">
              Built for Skin & Dental Growth Consultants
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile WhatsApp Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50 sm:hidden">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-emerald-500 text-neutral-900 p-4 rounded-full shadow-2xl font-medium hover:bg-emerald-400 transition"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-neutral-900" />
          <span className="text-sm font-semibold pr-2">Quick Audit</span>
        </a>
      </div>
    </div>
  );
}
