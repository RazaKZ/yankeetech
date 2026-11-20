export default function PageContent() {
  return (
<div>
  <div id="scroll-progress" />
  <main>
    <section className="hero-bg relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-purple-100/70">
      <div className="pointer-events-none absolute -top-24 right-1/4 w-[600px] h-[400px] bg-purple-400/20 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <nav className="flex items-center gap-2 text-[11px] text-gray-500 font-medium mb-6">
          <a href="/index.html" className="hover:text-brand-600 transition">Home</a>
          <span className="text-gray-300">/</span>
          <a href="/use-cases.html" className="hover:text-brand-600 transition">Use Cases</a>
          <span className="text-gray-300">/</span>
          <span className="text-brand-600 font-bold">SaaS Founders &amp; B2B Enterprises</span>
        </nav>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div data-anim="fade-up" className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/80 border border-purple-300/60 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-700">INDUSTRY 02 • B2B &amp; SOFTWARE FOUNDERS</span>
            </div>
            <h1 data-anim="fade-up" data-delay={1} className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-[#110c22] leading-[1.15] tracking-tight">
              Custom Full-Stack Web Applications Engineered for High Concurrency
            </h1>
            <p data-anim="fade-up" data-delay={2} className="text-base sm:text-base text-gray-600 leading-relaxed max-w-2xl">
              We partner with B2B founders and software enterprises to build robust, multi-tenant customer portals, internal billing dashboards, and high-concurrency SaaS applications using Laravel 11, React 18, and Next.js.
            </p>
            <div data-anim="fade-up" data-delay={3} className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-white/85 backdrop-blur-md p-3.5 rounded-2xl border border-purple-100/90 shadow-sm">
                <div className="font-display font-extrabold text-xl sm:text-2xl text-brand-700">99.9%</div>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5">Uptime Reliability SLA</div>
              </div>
              <div className="bg-white/85 backdrop-blur-md p-3.5 rounded-2xl border border-purple-100/90 shadow-sm">
                <div className="font-display font-extrabold text-xl sm:text-2xl text-brand-700">&lt;100ms</div>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5">Average API Response</div>
              </div>
              <div className="bg-white/85 backdrop-blur-md p-3.5 rounded-2xl border border-purple-100/90 shadow-sm">
                <div className="font-display font-extrabold text-xl sm:text-2xl text-brand-700">100%</div>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5">Multi-Tenant Isolation</div>
              </div>
              <div className="bg-white/85 backdrop-blur-md p-3.5 rounded-2xl border border-purple-100/90 shadow-sm">
                <div className="font-display font-extrabold text-xl sm:text-2xl text-brand-700">REST &amp; GraphQL</div>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5">Documented Endpoints</div>
              </div>
            </div>
            <div data-anim="fade-up" data-delay={4} className="flex flex-wrap items-center gap-4 pt-3">
              <a href="/index.html#estimator" onClick={(event) => { window.selectEstimatorPreset('fullstack'); }} className="btn-purple magnetic-btn text-white text-xs font-semibold px-6 py-3.5 rounded-full inline-flex items-center gap-2 shadow-md">
                <span>Configure Industry Estimate</span>
              </a>
              <a href="/index.html#contact" className="px-5 py-3.5 rounded-full text-xs font-semibold text-gray-700 bg-white/90 hover:bg-white border border-purple-200/80 transition hover:border-brand-400 inline-flex items-center gap-2 shadow-xs">
                <span>Book Discovery Call</span>
                <i className="fa-solid fa-calendar-check text-[10px] text-brand-600" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-5" data-anim="scale-in" data-delay={2}>
            <div className="rounded-3xl bg-gradient-to-br from-[#120727] via-[#1a0938] to-[#280c54] p-6 text-white border border-purple-500/30 shadow-2xl relative overflow-hidden tilt-card">
              <div className="flex items-center justify-between pb-3 border-b border-purple-500/20">
                <span className="text-[10px] font-mono text-purple-300">use-case-saas-b2b-pipeline.svg</span>
                <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full">LIVE BLUEPRINT</span>
              </div>
              <div className="py-5 space-y-3">
                <div className="p-3.5 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand-500/30 text-purple-200 flex items-center justify-center text-[10px] font-mono font-bold">1</span>
                    <div>
                      <div className="text-xs font-bold text-white">Frontend UI</div>
                      <div className="text-[10px] text-purple-200/70">React 18 / Next.js Server-Side</div>
                    </div>
                  </div>
                  <i className="fa-solid fa-check text-emerald-400 text-xs" />
                </div>
                <div className="p-3.5 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand-500/30 text-purple-200 flex items-center justify-center text-[10px] font-mono font-bold">2</span>
                    <div>
                      <div className="text-xs font-bold text-white">API Gateway</div>
                      <div className="text-[10px] text-purple-200/70">Laravel 11 Auth, RBAC &amp; Queues</div>
                    </div>
                  </div>
                  <i className="fa-solid fa-check text-emerald-400 text-xs" />
                </div>
                <div className="p-3.5 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand-500/30 text-purple-200 flex items-center justify-center text-[10px] font-mono font-bold">3</span>
                    <div>
                      <div className="text-xs font-bold text-white">Database Store</div>
                      <div className="text-[10px] text-purple-200/70">PostgreSQL Multi-Tenant Schema</div>
                    </div>
                  </div>
                  <i className="fa-solid fa-check text-emerald-400 text-xs" />
                </div>
                <div className="p-3.5 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand-500/30 text-purple-200 flex items-center justify-center text-[10px] font-mono font-bold">4</span>
                    <div>
                      <div className="text-xs font-bold text-white">Background Workers</div>
                      <div className="text-[10px] text-purple-200/70">Redis Asynchronous Task Runner</div>
                    </div>
                  </div>
                  <i className="fa-solid fa-check text-emerald-400 text-xs" />
                </div>
              </div>
              <div className="pt-3 border-t border-purple-500/20 flex items-center justify-between text-[10px] text-purple-300 font-mono">
                <span>Yankee Tech Production Standard</span>
                <span>Verified 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14" data-anim="fade-up">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-600 block mb-2">BEFORE VS AFTER</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight">
            How We Solve Core Industry Bottlenecks
          </h2>
          <p className="text-base text-base text-gray-500 mt-2">
            Eliminating technical debt, dropped leads, and sluggish architectures.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div data-anim="fade-up" data-delay={1} className="p-6 rounded-3xl bg-white border border-purple-100 shadow-sm space-y-4">
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✕</span>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-rose-500">Traditional Fragile Setup</div>
                <p className="text-base text-gray-500 mt-1 leading-relaxed">Spaghetti code from previous offshore agency with zero documentation.</p>
              </div>
            </div>
            <div className="pt-3 border-t border-purple-50 flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Yankee Tech Architecture</div>
                <p className="text-base text-gray-900 font-medium mt-1 leading-relaxed">Clean modular architecture with complete OpenAPI v3 Swagger specs and unit tests.</p>
              </div>
            </div>
          </div>
          <div data-anim="fade-up" data-delay={2} className="p-6 rounded-3xl bg-white border border-purple-100 shadow-sm space-y-4">
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✕</span>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-rose-500">Traditional Fragile Setup</div>
                <p className="text-base text-gray-500 mt-1 leading-relaxed">Database slowdowns when multiple enterprise clients query data simultaneously.</p>
              </div>
            </div>
            <div className="pt-3 border-t border-purple-50 flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Yankee Tech Architecture</div>
                <p className="text-base text-gray-900 font-medium mt-1 leading-relaxed">Optimized PostgreSQL schemas with read/write separation and Redis caching.</p>
              </div>
            </div>
          </div>
          <div data-anim="fade-up" data-delay={3} className="p-6 rounded-3xl bg-white border border-purple-100 shadow-sm space-y-4">
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✕</span>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-rose-500">Traditional Fragile Setup</div>
                <p className="text-base text-gray-500 mt-1 leading-relaxed">Clunky manual billing and invoice reconciliation at month-end.</p>
              </div>
            </div>
            <div className="pt-3 border-t border-purple-50 flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Yankee Tech Architecture</div>
                <p className="text-base text-gray-900 font-medium mt-1 leading-relaxed">Fully automated Stripe billing engine with tiered seats and usage metrics.</p>
              </div>
            </div>
          </div>
          <div data-anim="fade-up" data-delay={4} className="p-6 rounded-3xl bg-white border border-purple-100 shadow-sm space-y-4">
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✕</span>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-rose-500">Traditional Fragile Setup</div>
                <p className="text-base text-gray-500 mt-1 leading-relaxed">Security vulnerabilities and lack of granular team permissions.</p>
              </div>
            </div>
            <div className="pt-3 border-t border-purple-50 flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Yankee Tech Architecture</div>
                <p className="text-base text-gray-900 font-medium mt-1 leading-relaxed">Enterprise-grade Role-Based Access Control (RBAC) and audit event logging.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 bg-[#faf8ff] border-y border-purple-100/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#120727] via-[#1a083a] to-[#2b0c57] text-white p-8 sm:p-12 border border-purple-500/30 shadow-2xl relative overflow-hidden" data-anim="fade-up">
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-brand-500/30 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-purple-500/30">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-300">FLAGSHIP CASE STUDY SPOTLIGHT</span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-[9px] font-mono">VERIFIED RESULTS</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                  B2B Logistics SaaS Platform (12,000+ Active Fleet Drivers)
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-purple-200/80 leading-relaxed">
                  <p><strong>The Challenge:</strong> Their previous MVP collapsed under peak morning load, experiencing 8-second page timeouts and frequent data synchronization conflicts.</p>
                  <p><strong>The Solution:</strong> Yankee Tech re-engineered the backend in Laravel 11 with Redis background queues, optimized PostgreSQL indexes, and built a snappy Next.js dashboard.</p>
                </div>
              </div>
              <div className="lg:col-span-5 bg-white/5 border border-purple-400/20 rounded-2xl p-5 space-y-3">
                <div className="text-xs font-bold text-white uppercase tracking-wider">Measurable Business Impact</div>
                <ul className="space-y-2 pt-1">
                  <li className="flex items-start gap-2.5 text-xs text-purple-100">
                    <i className="fa-solid fa-circle-check text-emerald-400 text-xs mt-0.5 shrink-0" />
                    <span>Average API latency dropped from 8,200ms to 92ms.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-purple-100">
                    <i className="fa-solid fa-circle-check text-emerald-400 text-xs mt-0.5 shrink-0" />
                    <span>Zero downtime recorded across 6 consecutive months.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-purple-100">
                    <i className="fa-solid fa-circle-check text-emerald-400 text-xs mt-0.5 shrink-0" />
                    <span>Reduced client server hosting costs by 45% through query optimization.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12" data-anim="fade-up">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-600 block mb-2">INDUSTRY STANDARDS</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight">
            Technical Stack &amp; Deliverables
          </h2>
        </div>
        <div className="bg-white rounded-3xl border border-purple-100 shadow-md overflow-hidden" data-anim="fade-up">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-purple-100 bg-purple-50/60">
                <th className="py-4 px-5 font-bold text-gray-700 uppercase tracking-wider text-[10px]">Architecture Component</th>
                <th className="py-4 px-5 font-bold text-brand-700 uppercase tracking-wider text-[10px]">Yankee Tech Production Standard</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-50">
              <tr>
                <td className="py-3.5 px-5 font-semibold text-gray-900">Backend Architecture</td>
                <td className="py-3.5 px-5 font-mono font-bold text-brand-700 bg-purple-50/40">Laravel 11 / PHP 8.3 with Scoped Multi-Tenancy</td>
              </tr>
              <tr>
                <td className="py-3.5 px-5 font-semibold text-gray-900">Frontend Architecture</td>
                <td className="py-3.5 px-5 font-mono font-bold text-brand-700 bg-purple-50/40">React 18 / Next.js 14 + Tailwind UI</td>
              </tr>
              <tr>
                <td className="py-3.5 px-5 font-semibold text-gray-900">Database &amp; Caching</td>
                <td className="py-3.5 px-5 font-mono font-bold text-brand-700 bg-purple-50/40">PostgreSQL + Redis Queue Workers</td>
              </tr>
              <tr>
                <td className="py-3.5 px-5 font-semibold text-gray-900">Subscription Billing</td>
                <td className="py-3.5 px-5 font-mono font-bold text-brand-700 bg-purple-50/40">Stripe Billing &amp; Metered Usage API</td>
              </tr>
              <tr>
                <td className="py-3.5 px-5 font-semibold text-gray-900">Deployment Target</td>
                <td className="py-3.5 px-5 font-mono font-bold text-brand-700 bg-purple-50/40">AWS, DigitalOcean, Forge or Dockerized Infrastructure</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <section className="py-16 bg-[#faf8ff] border-t border-purple-100/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10" data-anim="fade-up">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-600 block mb-2">INDUSTRY QUESTIONS</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-3" data-anim="fade-up">
          <div className="p-4 rounded-2xl border border-purple-100 bg-purple-50/20">
            <button type="button" onClick={(event) => { window.toggleFaq(0); }} className="w-full flex items-center justify-between text-left text-xs sm:text-sm font-bold text-gray-900">
              <span>Who owns the intellectual property and code repository?</span>
              <i id="faq-icon-0" className="fa-solid fa-plus text-xs text-gray-400 shrink-0 ml-2 transition-transform" />
            </button>
            <div id="faq-body-0" className=" pt-3 text-xs text-gray-600 leading-relaxed border-t border-purple-100/80 mt-2.5">
              You own 100% of all code, git commits, documentation, and database schemas upon milestone completion with zero licensing fees.
            </div>
          </div>
          <div className="p-4 rounded-2xl border border-purple-100 bg-purple-50/20">
            <button type="button" onClick={(event) => { window.toggleFaq(1); }} className="w-full flex items-center justify-between text-left text-xs sm:text-sm font-bold text-gray-900">
              <span>Can you work with our existing in-house technical team?</span>
              <i id="faq-icon-1" className="fa-solid fa-plus text-xs text-gray-400 shrink-0 ml-2 transition-transform" />
            </button>
            <div id="faq-body-1" className="hidden pt-3 text-xs text-gray-600 leading-relaxed border-t border-purple-100/80 mt-2.5">
              Yes! We frequently integrate with internal engineering teams, taking ownership of specific modules, APIs, or frontends via Git PR workflows.
            </div>
          </div>
          <div className="p-4 rounded-2xl border border-purple-100 bg-purple-50/20">
            <button type="button" onClick={(event) => { window.toggleFaq(2); }} className="w-full flex items-center justify-between text-left text-xs sm:text-sm font-bold text-gray-900">
              <span>Do you provide enterprise SLA maintenance after launch?</span>
              <i id="faq-icon-2" className="fa-solid fa-plus text-xs text-gray-400 shrink-0 ml-2 transition-transform" />
            </button>
            <div id="faq-body-2" className="hidden pt-3 text-xs text-gray-600 leading-relaxed border-t border-purple-100/80 mt-2.5">
              Yes, we provide structured monthly retainers covering continuous deployment, security patching, and on-call server monitoring.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 dark-cosmic-bg text-white relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-20 right-1/4 w-96 h-96 bg-brand-600/30 rounded-full blur-3xl" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6" data-anim="fade-up">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-400/30 text-purple-200 text-[10px] font-extrabold uppercase tracking-widest">
          LET'S ARCHITECT YOUR INDUSTRY SOLUTION
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
          Ready to Modernize for SaaS Founders &amp; B2B Enterprises?
        </h2>
        <p className="text-base text-base text-purple-200/80 max-w-2xl mx-auto leading-relaxed">
          Book a 30-minute discovery call or configure an instant estimate using our live price calculator.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a href="/index.html#estimator" onClick={(event) => { window.selectEstimatorPreset('fullstack'); }} className="btn-purple magnetic-btn text-white text-xs font-semibold px-7 py-3.5 rounded-full inline-flex items-center gap-2 shadow-glow">
            <span>Calculate Project Estimate</span>
            <i className="fa-solid fa-calculator text-[10px] text-amber-300" />
          </a>
          <a href="/index.html#contact" className="px-6 py-3.5 rounded-full text-xs font-semibold text-purple-100 bg-white/10 hover:bg-white/20 border border-white/15 transition inline-flex items-center gap-2">
            <span>Schedule Discovery Call</span>
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
