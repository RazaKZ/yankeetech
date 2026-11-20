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
          <span className="text-brand-600 font-bold">GoHighLevel (GHL) Funnels, Pipelines &amp; Snapshots</span>
        </nav>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div data-anim="fade-up" className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/80 border border-purple-300/60 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-700">CORE 03 • SALES PIPELINES</span>
            </div>
            <h1 data-anim="fade-up" data-delay={1} className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-[#110c22] leading-[1.15] tracking-tight">
              Put your customer journey in one place.
            </h1>
            <p data-anim="fade-up" data-delay={2} className="text-base sm:text-base text-gray-600 leading-relaxed max-w-2xl">
              Set up GoHighLevel funnels, pipelines and follow-up workflows around how your team captures leads and manages customer relationships.
            </p>
            <div data-anim="fade-up" data-delay={3} className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-white/85 backdrop-blur-md p-3.5 rounded-2xl border border-purple-100/90 shadow-sm">
                <div className="font-display font-extrabold text-xl sm:text-2xl text-brand-700">&lt;60s</div>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5">Speed-to-Lead Response</div>
              </div>
              <div className="bg-white/85 backdrop-blur-md p-3.5 rounded-2xl border border-purple-100/90 shadow-sm">
                <div className="font-display font-extrabold text-xl sm:text-2xl text-brand-700">3.2x</div>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5">Average Booking Rate</div>
              </div>
              <div className="bg-white/85 backdrop-blur-md p-3.5 rounded-2xl border border-purple-100/90 shadow-sm">
                <div className="font-display font-extrabold text-xl sm:text-2xl text-brand-700">1-Click</div>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5">Agency Snapshot Deploy</div>
              </div>
              <div className="bg-white/85 backdrop-blur-md p-3.5 rounded-2xl border border-purple-100/90 shadow-sm">
                <div className="font-display font-extrabold text-xl sm:text-2xl text-brand-700">100%</div>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5">Calendar Synchronization</div>
              </div>
            </div>
            <div data-anim="fade-up" data-delay={4} className="flex flex-wrap items-center gap-4 pt-3">
              <a href="/index.html#estimator" onClick={(event) => { window.selectEstimatorPreset('ghl'); }} className="btn-purple magnetic-btn text-white text-xs font-semibold px-6 py-3.5 rounded-full inline-flex items-center gap-2 shadow-md">
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
                <span className="text-[10px] font-mono text-purple-300">service-ghl-funnels.svg</span>
                <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full">SPEC VERIFIED</span>
              </div>
              <div className="py-4">
                <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-md">
                  <rect x={20} y={20} width={360} height={200} rx={20} fill="#13072b" stroke="#843dff" strokeWidth="1.5" />
                  <polygon points="50,45 350,45 310,85 90,85" fill="#2a0f55" stroke="#843dff" strokeWidth={1} />
                  <text x={200} y={68} textAnchor="middle" fill="#ffffff" fontSize={10} fontWeight={700}>1. Web Form / Ad Lead Ingestion (&lt;60s)</text>
                  <polygon points="90,92 310,92 275,130 125,130" fill="#230d47" stroke="#38bdf8" strokeWidth={1} />
                  <text x={200} y={114} textAnchor="middle" fill="#7dd3fc" fontSize={10} fontWeight={700}>2. Automated SMS + Email Nurture</text>
                  <polygon points="125,137 275,137 240,175 160,175" fill="#1c0b38" stroke="#f59e0b" strokeWidth={1} />
                  <text x={200} y={159} textAnchor="middle" fill="#fcd34d" fontSize={10} fontWeight={700}>3. Calendar Booking</text>
                  <rect x={160} y={182} width={80} height={28} rx={8} fill="#064e3b" stroke="#10b981" strokeWidth="1.5" />
                  <text x={200} y={200} textAnchor="middle" fill="#6ee7b7" fontSize={9} fontWeight={800}>4. REVENUE WON</text>
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
                <i className="fa-solid fa-filter-circle-dollar" />
              </div>
              <h3 className="font-display font-bold text-base text-gray-900">Multi-Stage Opportunity Pipelines</h3>
              <p className="text-base text-gray-600 leading-relaxed">Custom deal stages, automated win/loss tagging, revenue forecasting, and visual Kanban boards for sales teams.</p>
            </div>
          </div>
          <div data-anim="fade-up" data-delay={2} className="rounded-3xl p-6 service-card-bg border border-purple-100 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-lg shadow-xs">
                <i className="fa-solid fa-comments" />
              </div>
              <h3 className="font-display font-bold text-base text-gray-900">Conversational SMS &amp; Email Sequences</h3>
              <p className="text-base text-gray-600 leading-relaxed">Two-way conversational messaging, missed-call text-back, appointment reminders, and long-term re-engagement drip campaigns.</p>
            </div>
          </div>
          <div data-anim="fade-up" data-delay={3} className="rounded-3xl p-6 service-card-bg border border-purple-100 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-lg shadow-xs">
                <i className="fa-solid fa-calendar-check" />
              </div>
              <h3 className="font-display font-bold text-base text-gray-900">Smart Calendar &amp; Round-Robin Routing</h3>
              <p className="text-base text-gray-600 leading-relaxed">Automated sales rep routing based on availability or territory, time-zone detection, and two-way Google/Outlook sync.</p>
            </div>
          </div>
          <div data-anim="fade-up" data-delay={4} className="rounded-3xl p-6 service-card-bg border border-purple-100 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-lg shadow-xs">
                <i className="fa-solid fa-boxes-packing" />
              </div>
              <h3 className="font-display font-bold text-base text-gray-900">Custom Snapshots &amp; SaaS Mode Provisioning</h3>
              <p className="text-base text-gray-600 leading-relaxed">Deployable 1-click snapshots pre-configured with funnels, triggers, tags, custom fields, and email templates for agency scale.</p>
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
            <h4 className="font-display font-bold text-sm text-gray-900">Funnel Strategy &amp; Audit</h4>
            <p className="text-base text-gray-500 mt-2 leading-relaxed">Dissecting target buyer personas, offer architecture, and conversion qualification criteria.</p>
          </div>
          <div data-anim="fade-up" data-delay={2} className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm relative group hover:border-brand-300 transition">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-bold text-purple-400">STAGE 02</span>
              <span className="w-7 h-7 rounded-lg bg-purple-50 text-brand-600 flex items-center justify-center text-[10px] font-bold">✓</span>
            </div>
            <h4 className="font-display font-bold text-sm text-gray-900">Pipeline &amp; Workflow Build</h4>
            <p className="text-base text-gray-500 mt-2 leading-relaxed">Configuring custom fields, triggers, SMS templates, and automated stage rules in GHL.</p>
          </div>
          <div data-anim="fade-up" data-delay={3} className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm relative group hover:border-brand-300 transition">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-bold text-purple-400">STAGE 03</span>
              <span className="w-7 h-7 rounded-lg bg-purple-50 text-brand-600 flex items-center justify-center text-[10px] font-bold">✓</span>
            </div>
            <h4 className="font-display font-bold text-sm text-gray-900">Calendar &amp; Webhook Wiring</h4>
            <p className="text-base text-gray-500 mt-2 leading-relaxed">Hooking up booking forms, round-robin teams, and payment gateways with automated receipts.</p>
          </div>
          <div data-anim="fade-up" data-delay={4} className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm relative group hover:border-brand-300 transition">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-bold text-purple-400">STAGE 04</span>
              <span className="w-7 h-7 rounded-lg bg-purple-50 text-brand-600 flex items-center justify-center text-[10px] font-bold">✓</span>
            </div>
            <h4 className="font-display font-bold text-sm text-gray-900">Live Testing &amp; Staff Training</h4>
            <p className="text-base text-gray-500 mt-2 leading-relaxed">Simulating full lead journeys and providing Loom tutorials for your sales reps.</p>
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
                <td className="py-3.5 px-5 font-semibold text-gray-900">CRM Platform</td>
                <td className="py-3.5 px-5 font-mono font-bold text-brand-700 bg-purple-50/40">GoHighLevel (Agency Pro / SaaS Mode)</td>
              </tr>
              <tr>
                <td className="py-3.5 px-5 font-semibold text-gray-900">Telephony &amp; SMS</td>
                <td className="py-3.5 px-5 font-mono font-bold text-brand-700 bg-purple-50/40">LC Phone / Twilio Native Configuration</td>
              </tr>
              <tr>
                <td className="py-3.5 px-5 font-semibold text-gray-900">Email Deliverability</td>
                <td className="py-3.5 px-5 font-mono font-bold text-brand-700 bg-purple-50/40">LC Email / Mailgun with DKIM, SPF &amp; DMARC</td>
              </tr>
              <tr>
                <td className="py-3.5 px-5 font-semibold text-gray-900">Calendar Integration</td>
                <td className="py-3.5 px-5 font-mono font-bold text-brand-700 bg-purple-50/40">Round-Robin, Class &amp; Event Calendars</td>
              </tr>
              <tr>
                <td className="py-3.5 px-5 font-semibold text-gray-900">Snapshot Portability</td>
                <td className="py-3.5 px-5 font-mono font-bold text-brand-700 bg-purple-50/40">1-Click Deployable to Infinite Sub-Accounts</td>
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
              <span>Can you build a complete turnkey snapshot for my marketing agency?</span>
              <i id="faq-icon-0" className="fa-solid fa-plus text-xs text-gray-400 shrink-0 ml-2 transition-transform" />
            </button>
            <div id="faq-body-0" className=" pt-3 text-xs text-gray-600 leading-relaxed border-t border-purple-100/80 mt-2.5">
              Yes! We have designed specialized GHL snapshots for real estate, dental clinics, MedSpas, e-commerce brands, and B2B consultants that can be duplicated into any new sub-account in 30 seconds.
            </div>
          </div>
          <div className="p-4 rounded-2xl border border-purple-100 bg-purple-50/20">
            <button type="button" onClick={(event) => { window.toggleFaq(1); }} className="w-full flex items-center justify-between text-left text-xs sm:text-sm font-bold text-gray-900">
              <span>Will the automated SMS triggers comply with A2P 10DLC regulations?</span>
              <i id="faq-icon-1" className="fa-solid fa-plus text-xs text-gray-400 shrink-0 ml-2 transition-transform" />
            </button>
            <div id="faq-body-1" className="hidden pt-3 text-xs text-gray-600 leading-relaxed border-t border-purple-100/80 mt-2.5">
              Yes. We guide you through brand and campaign registration for A2P 10DLC compliance to ensure maximum SMS deliverability and prevent carrier filtering.
            </div>
          </div>
          <div className="p-4 rounded-2xl border border-purple-100 bg-purple-50/20">
            <button type="button" onClick={(event) => { window.toggleFaq(2); }} className="w-full flex items-center justify-between text-left text-xs sm:text-sm font-bold text-gray-900">
              <span>Can this connect to our existing WordPress or custom website?</span>
              <i id="faq-icon-2" className="fa-solid fa-plus text-xs text-gray-400 shrink-0 ml-2 transition-transform" />
            </button>
            <div id="faq-body-2" className="hidden pt-3 text-xs text-gray-600 leading-relaxed border-t border-purple-100/80 mt-2.5">
              Absolutely. We configure seamless 2-way webhooks and embed forms directly into your web pages with zero styling mismatch.
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
          Ready to Start Your GoHighLevel (GHL) Funnels, Pipelines &amp; Snapshots?
        </h2>
        <p className="text-base text-base text-purple-200/80 max-w-2xl mx-auto leading-relaxed">
          Get an instant price estimate with our live calculator or schedule a 30-minute discovery call with our senior architects.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a href="/index.html#estimator" onClick={(event) => { window.selectEstimatorPreset('ghl'); }} className="btn-purple magnetic-btn text-white text-xs font-semibold px-7 py-3.5 rounded-full inline-flex items-center gap-2 shadow-glow">
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
