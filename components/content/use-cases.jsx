export default function PageContent() {
  return (
<div>
  <div id="scroll-progress" />
  <main>
    <section className="hero-bg relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-purple-100/70">
      <div className="pointer-events-none absolute -top-24 right-1/4 w-[600px] h-[400px] bg-purple-400/20 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div data-anim="fade-up" className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/80 border border-purple-300/60 shadow-xs mb-4">
          <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-700">PROVEN TRANSFORMATION BLUEPRINTS</span>
        </div>
        <h1 data-anim="fade-up" data-delay={1} className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[46px] text-[#110c22] leading-[1.15] tracking-tight max-w-4xl mx-auto">
          Real-World Systems Engineering for <span className="bg-gradient-to-r from-purple-700 via-brand-600 to-indigo-600 bg-clip-text text-transparent">Every High-Growth Industry</span>
        </h1>
        <p data-anim="fade-up" data-delay={2} className="text-base sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto mt-4">
          Explore how we deploy clean-code WordPress architectures, custom Laravel portals, GoHighLevel pipeline automations, and autonomous AI agents tailored to specific industry business models.
        </p>
        <div data-anim="fade-up" data-delay={3} className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto pt-8">
          <div className="bg-white/85 backdrop-blur-md p-4 rounded-2xl border border-purple-100/90 shadow-sm">
            <div className="font-display font-extrabold text-2xl text-brand-700">45+</div>
            <div className="text-[11px] text-gray-500 font-medium mt-0.5">Enterprise Deliveries</div>
          </div>
          <div className="bg-white/85 backdrop-blur-md p-4 rounded-2xl border border-purple-100/90 shadow-sm">
            <div className="font-display font-extrabold text-2xl text-emerald-600">-28%</div>
            <div className="text-[11px] text-gray-500 font-medium mt-0.5">Checkout Abandonment</div>
          </div>
          <div className="bg-white/85 backdrop-blur-md p-4 rounded-2xl border border-purple-100/90 shadow-sm">
            <div className="font-display font-extrabold text-2xl text-indigo-600">94%</div>
            <div className="text-[11px] text-gray-500 font-medium mt-0.5">Manual Tasks Automated</div>
          </div>
          <div className="bg-white/85 backdrop-blur-md p-4 rounded-2xl border border-purple-100/90 shadow-sm">
            <div className="font-display font-extrabold text-2xl text-amber-600">&lt;60s</div>
            <div className="text-[11px] text-gray-500 font-medium mt-0.5">Lead Response Latency</div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16" data-anim="fade-up">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-600 block mb-2">INDUSTRY BLUEPRINTS</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-gray-900 tracking-tight">
            Tailored Engineering for Your Business Model
          </h2>
          <p className="text-base text-base text-gray-500 mt-2">
            Select your industry to explore architecture blueprints, before/after transformations, and technical deliverables.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div data-anim="fade-up" data-delay={1} className="rounded-3xl border border-purple-100 bg-[#faf8ff] p-6 lg:p-7 flex flex-col justify-between hover:shadow-xl hover:border-brand-300 transition group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-brand-600 flex items-center justify-center text-xl group-hover:scale-105 group-hover:bg-brand-600 group-hover:text-white transition">
                  <i className="fa-solid fa-cart-shopping" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">95+ Speed</span>
              </div>
              <h3 className="font-display font-extrabold text-xl text-gray-900 group-hover:text-brand-600 transition">
                High-Growth E-Commerce Brands
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Frictionless 1-step checkout funnels, sub-second WooCommerce catalog browsing, Stripe global payments, and automated abandoned cart nurture via GHL/Klaviyo.
              </p>
              <ul className="pt-2 space-y-2 text-[11px] text-gray-600">
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500 text-xs" /> 1-Click Apple/Google Pay</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500 text-xs" /> -28% Cart Abandonment</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500 text-xs" /> Redis Object Caching (&lt;0.5s TTFB)</li>
              </ul>
            </div>
            <div className="mt-8 pt-5 border-t border-purple-100">
              <a href="/use-case-ecommerce.html" className="w-full btn-purple text-white text-xs font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm">
                <span>View E-Commerce Blueprint</span>
              </a>
            </div>
          </div>
          <div data-anim="fade-up" data-delay={2} className="rounded-3xl border border-purple-100 bg-[#faf8ff] p-6 lg:p-7 flex flex-col justify-between hover:shadow-xl hover:border-brand-300 transition group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-brand-600 flex items-center justify-center text-xl group-hover:scale-105 group-hover:bg-brand-600 group-hover:text-white transition">
                  <i className="fa-solid fa-server" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-purple-100 text-brand-700 border border-purple-200 text-[10px] font-bold">Enterprise SaaS</span>
              </div>
              <h3 className="font-display font-extrabold text-xl text-gray-900 group-hover:text-brand-600 transition">
                SaaS Founders &amp; B2B Enterprises
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Custom full-stack portals built with Laravel and Next.js. Featuring multi-tenant databases, role-based access control, Stripe subscriptions, and high-concurrency APIs.
              </p>
              <ul className="pt-2 space-y-2 text-[11px] text-gray-600">
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500 text-xs" /> Multi-Tenant Data Isolation</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500 text-xs" /> Granular RBAC Permissions</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500 text-xs" /> Automated Tiered Billing &amp; Invoices</li>
              </ul>
            </div>
            <div className="mt-8 pt-5 border-t border-purple-100">
              <a href="/use-case-saas-b2b.html" className="w-full btn-purple text-white text-xs font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm">
                <span>View SaaS &amp; B2B Blueprint</span>
              </a>
            </div>
          </div>
          <div data-anim="fade-up" data-delay={3} className="rounded-3xl border border-purple-100 bg-[#faf8ff] p-6 lg:p-7 flex flex-col justify-between hover:shadow-xl hover:border-brand-300 transition group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-brand-600 flex items-center justify-center text-xl group-hover:scale-105 group-hover:bg-brand-600 group-hover:text-white transition">
                  <i className="fa-solid fa-cubes-stacked" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-bold">100% White-Label</span>
              </div>
              <h3 className="font-display font-extrabold text-xl text-gray-900 group-hover:text-brand-600 transition">
                Digital &amp; Creative Agencies
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Your silent engineering arm. We deliver sub-account GHL snapshot setups, custom WordPress sites, and automation pipelines under strict bilateral NDAs inside your tools.
              </p>
              <ul className="pt-2 space-y-2 text-[11px] text-gray-600">
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500 text-xs" /> Complete Invisible Delivery</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500 text-xs" /> 1-Click Agency Snapshots</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500 text-xs" /> 50–100% Client Markup Margins</li>
              </ul>
            </div>
            <div className="mt-8 pt-5 border-t border-purple-100">
              <a href="/use-case-agencies.html" className="w-full btn-purple text-white text-xs font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm">
                <span>View Agency Blueprint</span>
              </a>
            </div>
          </div>
          <div data-anim="fade-up" data-delay={4} className="rounded-3xl border border-purple-100 bg-[#faf8ff] p-6 lg:p-7 flex flex-col justify-between hover:shadow-xl hover:border-brand-300 transition group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-brand-600 flex items-center justify-center text-xl group-hover:scale-105 group-hover:bg-brand-600 group-hover:text-white transition">
                  <i className="fa-solid fa-brain" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-fuchsia-50 text-fuchsia-700 border border-fuchsia-200 text-[10px] font-bold">24/7 AI Booking</span>
              </div>
              <h3 className="font-display font-extrabold text-xl text-gray-900 group-hover:text-brand-600 transition">
                Coaches &amp; Service Businesses
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Autonomous AI voice receptionists and WhatsApp chatbots that qualify leads and schedule sales appointments into GHL calendars around the clock.
              </p>
              <ul className="pt-2 space-y-2 text-[11px] text-gray-600">
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500 text-xs" /> 24/7 Autonomous Lead Qualifier</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500 text-xs" /> &lt;30s Speed-to-Lead Dialing</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500 text-xs" /> Two-Way Course &amp; Member Sync</li>
              </ul>
            </div>
            <div className="mt-8 pt-5 border-t border-purple-100">
              <a href="/use-case-coaches-creators.html" className="w-full btn-purple text-white text-xs font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm">
                <span>View Coaches &amp; Services Blueprint</span>
              </a>
            </div>
          </div>
          <div data-anim="fade-up" data-delay={5} className="rounded-3xl border border-purple-100 bg-[#faf8ff] p-6 lg:p-7 flex flex-col justify-between hover:shadow-xl hover:border-brand-300 transition group md:col-span-2 lg:col-span-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 text-brand-600 flex items-center justify-center text-xl group-hover:scale-105 group-hover:bg-brand-600 group-hover:text-white transition">
                    <i className="fa-solid fa-rocket" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-[10px] font-bold">2-4 Week Delivery</span>
                </div>
                <h3 className="font-display font-extrabold text-xl text-gray-900 group-hover:text-brand-600 transition">
                  Fast-Moving Startups &amp; MVPs
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Turn your pitch deck into a production-grade software prototype in weeks, not months. Zero tech debt, pitch-ready Figma prototypes, and clean scalable code.
                </p>
                <ul className="pt-1 space-y-2 text-[11px] text-gray-600">
                  <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500 text-xs" /> 2–4 Week Turnaround to Production</li>
                  <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500 text-xs" /> Complete Source Code Transfer</li>
                  <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500 text-xs" /> Pitch-Ready Interactive UI</li>
                </ul>
              </div>
              <div className="flex flex-col justify-between h-full pt-4 lg:pt-0">
                <div className="p-5 rounded-2xl bg-white border border-purple-100/90 shadow-sm space-y-2.5">
                  <div className="text-xs font-bold text-gray-900">Startup Guarantee</div>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    We architect MVPs with modular clean code so you don’t have to throw everything away after your seed round.
                  </p>
                </div>
                <div className="mt-6">
                  <a href="/use-case-startups.html" className="w-full btn-purple text-white text-xs font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm">
                    <span>View Startup MVP Blueprint</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 dark-cosmic-bg text-white relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-20 right-1/4 w-96 h-96 bg-brand-600/30 rounded-full blur-3xl" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6" data-anim="fade-up">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-400/30 text-purple-200 text-[10px] font-extrabold uppercase tracking-widest">
          NEED A CUSTOM SOLUTION FOR YOUR BUSINESS?
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
          Let's Engineer Your Competitive Advantage
        </h2>
        <p className="text-base text-base text-purple-200/80 max-w-2xl mx-auto leading-relaxed">
          Book a 30-minute discovery call with our senior technical leads. We will review your workflow challenges and deliver an actionable architecture roadmap.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a href="/index.html#contact" className="btn-purple magnetic-btn text-white text-xs font-semibold px-7 py-3.5 rounded-full inline-flex items-center gap-2 shadow-glow">
            <span>Schedule Discovery Call</span>
          </a>
          <a href="/index.html#estimator" className="px-6 py-3.5 rounded-full text-xs font-semibold text-purple-100 bg-white/10 hover:bg-white/20 border border-white/15 transition inline-flex items-center gap-2">
            <span>Launch Live Price Estimator</span>
            <i className="fa-solid fa-calculator text-[10px] text-amber-300" />
          </a>
        </div>
      </div>
    </section>
  </main>
  
  <button id="scrollTopBtn" onClick={(event) => { window.scrollTo({top: 0, behavior: 'smooth'}); }} aria-label="Scroll back to top" className="fixed bottom-6 right-6 w-11 h-11 rounded-2xl bg-brand-600 text-white shadow-glow flex items-center justify-center transition hover:bg-brand-700 active:scale-95 z-40 border border-purple-400/40">
    <i className="fa-solid fa-arrow-up text-xs" />
  </button>
</div>

  );
}
