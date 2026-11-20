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
          <a href="/services.html" className="hover:text-brand-600 transition">Services</a>
          <span className="text-gray-300">/</span>
          <span className="text-brand-600 font-bold">2-Way Real-Time GoHighLevel &amp; WordPress Synchronization</span>
        </nav>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div data-anim="fade-up" className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/80 border border-purple-300/60 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-700">CORE 05 • ZERO-LAG SYNAPSE</span>
            </div>
            <h1 data-anim="fade-up" data-delay={1} className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-[#110c22] leading-[1.15] tracking-tight">
              Bring WordPress and GoHighLevel together.
            </h1>
            <p data-anim="fade-up" data-delay={2} className="text-base sm:text-base text-gray-600 leading-relaxed max-w-2xl">
              Connect website enquiries and customer activity with your CRM. Define which data moves, when it updates and how your team handles exceptions.
            </p>
            <div data-anim="fade-up" data-delay={3} className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-white/85 backdrop-blur-md p-3.5 rounded-2xl border border-purple-100/90 shadow-sm">
                <div className="font-display font-extrabold text-xl sm:text-2xl text-brand-700">&lt;1.2s</div>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5">Data Relay Latency</div>
              </div>
              <div className="bg-white/85 backdrop-blur-md p-3.5 rounded-2xl border border-purple-100/90 shadow-sm">
                <div className="font-display font-extrabold text-xl sm:text-2xl text-brand-700">100%</div>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5">Bidirectional Integrity</div>
              </div>
              <div className="bg-white/85 backdrop-blur-md p-3.5 rounded-2xl border border-purple-100/90 shadow-sm">
                <div className="font-display font-extrabold text-xl sm:text-2xl text-brand-700">0</div>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5">Manual Copy-Pasting</div>
              </div>
              <div className="bg-white/85 backdrop-blur-md p-3.5 rounded-2xl border border-purple-100/90 shadow-sm">
                <div className="font-display font-extrabold text-xl sm:text-2xl text-brand-700">HMAC</div>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5">Encrypted Security</div>
              </div>
            </div>
            <div data-anim="fade-up" data-delay={4} className="flex flex-wrap items-center gap-4 pt-3">
              <a href="/index.html#estimator" onClick={(event) => { window.selectEstimatorPreset('ai'); }} className="btn-purple magnetic-btn text-white text-xs font-semibold px-6 py-3.5 rounded-full inline-flex items-center gap-2 shadow-md">
                <span>Configure Live Project Estimate</span>
              </a>
              <a href="/index.html#contact" className="px-5 py-3.5 rounded-full text-xs font-semibold text-gray-700 bg-white/90 hover:bg-white border border-purple-200/80 transition hover:border-brand-400 inline-flex items-center gap-2 shadow-xs">
                <span>Book Discovery Call</span>
                <i className="fa-solid fa-calendar-check text-[10px] text-brand-600" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-5" data-anim="scale-in" data-delay={2}>
            <div className="rounded-3xl bg-gradient-to-br from-[#120727] via-[#1a0938] to-[#280c54] p-5 text-white border border-purple-500/30 shadow-2xl relative overflow-hidden tilt-card">
              <div className="flex items-center justify-between pb-3 border-b border-purple-500/20">
                <span className="text-[10px] font-mono text-purple-300">service-ghl-wordpress-sync.svg</span>
                <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full">SPEC VERIFIED</span>
              </div>
              <div className="py-4">
                <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-md">
                  <rect x={20} y={20} width={360} height={200} rx={20} fill="#13072b" stroke="#843dff" strokeWidth="1.5" />
                  <rect x={50} y={80} width={100} height={70} rx={14} fill="#1e0a40" stroke="#843dff" strokeWidth={2} />
                  <text x={100} y={112} textAnchor="middle" fill="#ffffff" fontSize={11} fontWeight={800}>WordPress</text>
                  <text x={100} y={127} textAnchor="middle" fill="#c084fc" fontSize={8} fontFamily="monospace">Forms &amp; Woo</text>
                  <rect x={250} y={80} width={100} height={70} rx={14} fill="#1e0a40" stroke="#38bdf8" strokeWidth={2} />
                  <text x={300} y={112} textAnchor="middle" fill="#ffffff" fontSize={11} fontWeight={800}>GoHighLevel</text>
                  <text x={300} y={127} textAnchor="middle" fill="#7dd3fc" fontSize={8} fontFamily="monospace">CRM Pipelines</text>
                  <path d="M 150 95 Q 200 60 250 95" fill="none" stroke="#843dff" strokeWidth="2.5" strokeDasharray="4 3" />
                  <polygon points="245,90 252,96 245,102" fill="#843dff" />
                  <path d="M 250 135 Q 200 170 150 135" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="4 3" />
                  <polygon points="155,140 148,134 155,128" fill="#38bdf8" />
                  <circle cx={200} cy={115} r={16} fill="#120727" stroke="#e879f9" strokeWidth="1.5" />
                  <text x={200} y={119} textAnchor="middle" fill="#ffffff" fontSize={9} fontFamily="monospace">SYNC</text>
                </svg>
              </div>
              <div className="pt-2 border-t border-purple-500/20 flex items-center justify-between text-[10px] text-purple-300 font-mono">
                <span>Yankee Tech Production Standard</span>
                <span>2026 Core</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14" data-anim="fade-up">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-600 block mb-2">TECHNICAL HIGHLIGHTS</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight">
            What Sets Our Engineering Apart
          </h2>
          <p className="text-base text-base text-gray-500 mt-2">
            Engineered with strict code integrity, high scalability, and measurable commercial results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div data-anim="fade-up" data-delay={1} className="rounded-3xl p-6 service-card-bg border border-purple-100 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-lg shadow-xs">
                <i className="fa-solid fa-arrows-rotate" />
              </div>
              <h3 className="font-display font-bold text-base text-gray-900">Instant Form-to-CRM Relays</h3>
              <p className="text-base text-gray-600 leading-relaxed">Submissions on Elementor, Gravity Forms, or custom React forms immediately update contacts, custom fields, and tags in GHL.</p>
            </div>
          </div>
          <div data-anim="fade-up" data-delay={2} className="rounded-3xl p-6 service-card-bg border border-purple-100 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-lg shadow-xs">
                <i className="fa-solid fa-id-card-clip" />
              </div>
              <h3 className="font-display font-bold text-base text-gray-900">Membership &amp; Course Access Sync</h3>
              <p className="text-base text-gray-600 leading-relaxed">GHL pipeline stage changes automatically grant, tier, or revoke WordPress membership and course permissions instantly.</p>
            </div>
          </div>
          <div data-anim="fade-up" data-delay={3} className="rounded-3xl p-6 service-card-bg border border-purple-100 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-lg shadow-xs">
                <i className="fa-solid fa-bag-shopping" />
              </div>
              <h3 className="font-display font-bold text-base text-gray-900">WooCommerce Purchase Webhooks</h3>
              <p className="text-base text-gray-600 leading-relaxed">Purchases immediately tag customer records in GHL, trigger post-purchase nurture sequences, and update lifetime customer value.</p>
            </div>
          </div>
          <div data-anim="fade-up" data-delay={4} className="rounded-3xl p-6 service-card-bg border border-purple-100 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-lg shadow-xs">
                <i className="fa-solid fa-shield-virus" />
              </div>
              <h3 className="font-display font-bold text-base text-gray-900">Fail-Safe Retry Queues &amp; Audit Logs</h3>
              <p className="text-base text-gray-600 leading-relaxed">Exponential backoff retry queues guarantee that even during third-party API outages, no lead or transaction is ever dropped.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 bg-[#faf8ff] border-y border-purple-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14" data-anim="fade-up">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-600 block mb-2">OUR FRAMEWORK</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight">
            How We Execute This Service
          </h2>
          <p className="text-base text-base text-gray-500 mt-2">
            A 4-step agile lifecycle ensuring on-time delivery with zero technical surprises.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div data-anim="fade-up" data-delay={1} className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm relative group hover:border-brand-300 transition">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-bold text-purple-400">STAGE 01</span>
              <span className="w-7 h-7 rounded-lg bg-purple-50 text-brand-600 flex items-center justify-center text-[10px] font-bold">✓</span>
            </div>
            <h4 className="font-display font-bold text-sm text-gray-900">Data Schema Mapping</h4>
            <p className="text-base text-gray-500 mt-2 leading-relaxed">Matching custom fields, tags, and trigger conditions between WordPress and GoHighLevel.</p>
          </div>
          <div data-anim="fade-up" data-delay={2} className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm relative group hover:border-brand-300 transition">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-bold text-purple-400">STAGE 02</span>
              <span className="w-7 h-7 rounded-lg bg-purple-50 text-brand-600 flex items-center justify-center text-[10px] font-bold">✓</span>
            </div>
            <h4 className="font-display font-bold text-sm text-gray-900">Webhook &amp; Middleware Build</h4>
            <p className="text-base text-gray-500 mt-2 leading-relaxed">Developing custom REST API webhooks, n8n orchestrations, and HMAC security tokens.</p>
          </div>
          <div data-anim="fade-up" data-delay={3} className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm relative group hover:border-brand-300 transition">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-bold text-purple-400">STAGE 03</span>
              <span className="w-7 h-7 rounded-lg bg-purple-50 text-brand-600 flex items-center justify-center text-[10px] font-bold">✓</span>
            </div>
            <h4 className="font-display font-bold text-sm text-gray-900">Bidirectional Loop Testing</h4>
            <p className="text-base text-gray-500 mt-2 leading-relaxed">Verifying that data updates in both directions without recursive infinite loops.</p>
          </div>
          <div data-anim="fade-up" data-delay={4} className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm relative group hover:border-brand-300 transition">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-bold text-purple-400">STAGE 04</span>
              <span className="w-7 h-7 rounded-lg bg-purple-50 text-brand-600 flex items-center justify-center text-[10px] font-bold">✓</span>
            </div>
            <h4 className="font-display font-bold text-sm text-gray-900">Queue Hardening &amp; Go-Live</h4>
            <p className="text-base text-gray-500 mt-2 leading-relaxed">Setting up error logging, automated failure notifications, and live production deployment.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12" data-anim="fade-up">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-600 block mb-2">SERVICE SPECIFICATIONS</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight">
            Technical Deliverables &amp; Standards
          </h2>
        </div>
        <div className="bg-white rounded-3xl border border-purple-100 shadow-md overflow-hidden" data-anim="fade-up">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-purple-100 bg-purple-50/60">
                <th className="py-4 px-5 font-bold text-gray-700 uppercase tracking-wider text-[10px]">Specification / Deliverable</th>
                <th className="py-4 px-5 font-bold text-brand-700 uppercase tracking-wider text-[10px]">Yankee Tech Deliverable</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-50">
              <tr>
                <td className="py-3.5 px-5 font-semibold text-gray-900">Sync Direction</td>
                <td className="py-3.5 px-5 font-mono font-bold text-brand-700 bg-purple-50/40">2-Way Bidirectional Real-Time</td>
              </tr>
              <tr>
                <td className="py-3.5 px-5 font-semibold text-gray-900">Middleware Architecture</td>
                <td className="py-3.5 px-5 font-mono font-bold text-brand-700 bg-purple-50/40">Custom REST Webhooks + n8n / Make Engine</td>
              </tr>
              <tr>
                <td className="py-3.5 px-5 font-semibold text-gray-900">Authentication</td>
                <td className="py-3.5 px-5 font-mono font-bold text-brand-700 bg-purple-50/40">HMAC SHA-256 Signatures &amp; GHL API v2 OAuth</td>
              </tr>
              <tr>
                <td className="py-3.5 px-5 font-semibold text-gray-900">Fail-Safe Guarantee</td>
                <td className="py-3.5 px-5 font-mono font-bold text-brand-700 bg-purple-50/40">Automated 5-Stage Retry Queue</td>
              </tr>
              <tr>
                <td className="py-3.5 px-5 font-semibold text-gray-900">Latency SLA</td>
                <td className="py-3.5 px-5 font-mono font-bold text-brand-700 bg-purple-50/40">&lt;1.5 Seconds Form-to-Contact Sync</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <section className="py-16 bg-[#faf8ff] border-t border-purple-100/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10" data-anim="fade-up">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-600 block mb-2">QUESTIONS &amp; ANSWERS</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-3" data-anim="fade-up">
          <div className="p-4 rounded-2xl border border-purple-100 bg-purple-50/20">
            <button type="button" onClick={(event) => { window.toggleFaq(0); }} className="w-full flex items-center justify-between text-left text-xs sm:text-sm font-bold text-gray-900">
              <span>What happens if GoHighLevel API is temporarily down?</span>
              <i id="faq-icon-0" className="fa-solid fa-plus text-xs text-gray-400 shrink-0 ml-2 transition-transform" />
            </button>
            <div id="faq-body-0" className=" pt-3 text-xs text-gray-600 leading-relaxed border-t border-purple-100/80 mt-2.5">
              Our webhook middleware holds pending events in a secure Redis retry queue. Once GHL connectivity resumes, all queued contacts and orders are processed sequentially with zero loss of data.
            </div>
          </div>
          <div className="p-4 rounded-2xl border border-purple-100 bg-purple-50/20">
            <button type="button" onClick={(event) => { window.toggleFaq(1); }} className="w-full flex items-center justify-between text-left text-xs sm:text-sm font-bold text-gray-900">
              <span>Can this synchronize WooCommerce subscription renewals?</span>
              <i id="faq-icon-1" className="fa-solid fa-plus text-xs text-gray-400 shrink-0 ml-2 transition-transform" />
            </button>
            <div id="faq-body-1" className="hidden pt-3 text-xs text-gray-600 leading-relaxed border-t border-purple-100/80 mt-2.5">
              Yes! Renewal payments, cancellations, and failed payments on WooCommerce are immediately synced to GHL to pause or renew services and trigger automated retention emails.
            </div>
          </div>
          <div className="p-4 rounded-2xl border border-purple-100 bg-purple-50/20">
            <button type="button" onClick={(event) => { window.toggleFaq(2); }} className="w-full flex items-center justify-between text-left text-xs sm:text-sm font-bold text-gray-900">
              <span>Will this slow down our WordPress site?</span>
              <i id="faq-icon-2" className="fa-solid fa-plus text-xs text-gray-400 shrink-0 ml-2 transition-transform" />
            </button>
            <div id="faq-body-2" className="hidden pt-3 text-xs text-gray-600 leading-relaxed border-t border-purple-100/80 mt-2.5">
              Not at all. All webhook dispatches occur asynchronously via background queue workers, meaning your visitors experience zero delay when submitting forms.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 dark-cosmic-bg text-white relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-20 right-1/4 w-96 h-96 bg-brand-600/30 rounded-full blur-3xl" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6" data-anim="fade-up">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-400/30 text-purple-200 text-[10px] font-extrabold uppercase tracking-widest">
          LET'S BUILD SOMETHING EXTRAORDINARY
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
          Ready to Start Your 2-Way Real-Time GoHighLevel &amp; WordPress Synchronization?
        </h2>
        <p className="text-base text-base text-purple-200/80 max-w-2xl mx-auto leading-relaxed">
          Get an instant price estimate with our live calculator or schedule a 30-minute discovery call with our senior architects.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a href="/index.html#estimator" onClick={(event) => { window.selectEstimatorPreset('ai'); }} className="btn-purple magnetic-btn text-white text-xs font-semibold px-7 py-3.5 rounded-full inline-flex items-center gap-2 shadow-glow">
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
