export default function PageContent() {
  return (
<div>
  <div id="scroll-progress" />
  <main>
    <section className="hero-bg relative overflow-hidden pt-12 pb-14 lg:pt-16 lg:pb-20 border-b border-purple-100/70">
      <div className="pointer-events-none absolute -top-24 right-1/4 w-[600px] h-[400px] bg-purple-400/20 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div data-anim="fade-up" className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/80 border border-purple-300/60 shadow-xs mb-4">
          <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-700">6 CORE ENGINEERING PILLARS</span>
        </div>
        <h1 data-anim="fade-up" data-delay={1} className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[46px] text-[#110c22] leading-[1.15] tracking-tight max-w-4xl mx-auto">
          Full-Stack Web Engineering, <span className="bg-gradient-to-r from-purple-700 via-brand-600 to-indigo-600 bg-clip-text text-transparent">AI Automation</span> &amp; GHL Ecosystems
        </h1>
        <p data-anim="fade-up" data-delay={2} className="text-base sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto mt-4">
          We architect high-performance digital systems for high-growth enterprises, agencies, and e-commerce leaders. Zero fragile hacks, zero plugin clutter — pure production-grade engineering.
        </p>
        <div data-anim="fade-up" data-delay={3} className="flex flex-wrap items-center justify-center gap-2.5 pt-8 max-w-4xl mx-auto">
          <a href="#wordpress" className="px-3.5 py-2 rounded-full bg-white border border-purple-200 text-xs font-semibold text-gray-700 hover:text-brand-600 hover:border-brand-400 hover:shadow-xs transition flex items-center gap-1.5">
            <i className="fa-brands fa-wordpress text-brand-600" />
            <span>WordPress &amp; Woo</span>
          </a>
          <a href="#fullstack" className="px-3.5 py-2 rounded-full bg-white border border-purple-200 text-xs font-semibold text-gray-700 hover:text-brand-600 hover:border-brand-400 hover:shadow-xs transition flex items-center gap-1.5">
            <i className="fa-brands fa-laravel text-brand-600" />
            <span>Full-Stack Web Apps</span>
          </a>
          <a href="#ghl" className="px-3.5 py-2 rounded-full bg-white border border-purple-200 text-xs font-semibold text-gray-700 hover:text-brand-600 hover:border-brand-400 hover:shadow-xs transition flex items-center gap-1.5">
            <i className="fa-solid fa-filter-circle-dollar text-brand-600" />
            <span>GoHighLevel CRM</span>
          </a>
          <a href="#ai" className="px-3.5 py-2 rounded-full bg-white border border-purple-200 text-xs font-semibold text-gray-700 hover:text-brand-600 hover:border-brand-400 hover:shadow-xs transition flex items-center gap-1.5">
            <i className="fa-solid fa-brain text-brand-600" />
            <span>AI Agents &amp; Bots</span>
          </a>
          <a href="#sync" className="px-3.5 py-2 rounded-full bg-white border border-purple-200 text-xs font-semibold text-gray-700 hover:text-brand-600 hover:border-brand-400 hover:shadow-xs transition flex items-center gap-1.5">
            <i className="fa-solid fa-arrows-rotate text-brand-600" />
            <span>2-Way GHL Sync</span>
          </a>
          <a href="#design" className="px-3.5 py-2 rounded-full bg-white border border-purple-200 text-xs font-semibold text-gray-700 hover:text-brand-600 hover:border-brand-400 hover:shadow-xs transition flex items-center gap-1.5">
            <i className="fa-solid fa-pen-ruler text-brand-600" />
            <span>Figma Design Systems</span>
          </a>
        </div>
      </div>
    </section>
    <section id="wordpress" className="py-20 bg-white border-b border-purple-100/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div data-anim="fade-up" className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-sm font-bold">01</span>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-600">WEB &amp; COMMERCE</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">95+ PageSpeed SLA</span>
            </div>
            <h2 data-anim="fade-up" data-delay={1} className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-gray-900 tracking-tight">
              WordPress &amp; High-Performance WooCommerce Architecture
            </h2>
            <p data-anim="fade-up" data-delay={2} className="text-base text-base text-gray-600 leading-relaxed">
              We engineer custom WordPress themes and high-converting WooCommerce storefronts that score 95+ on Google PageSpeed Insights. We replace the standard 45-plugin bloat with clean PHP templates, Tailwind CSS utilities, and native Redis caching.
            </p>
            <div data-anim="fade-up" data-delay={3} className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-3.5 rounded-2xl bg-purple-50/40 border border-purple-100/80">
                <div className="flex items-center gap-2 font-display font-bold text-xs text-gray-900">
                  <i className="fa-solid fa-code text-brand-600" />
                  <span>Custom Themes &amp; Elementor</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">
                  Pixel-perfect implementation, dynamic custom fields (ACF/CPT), and editable marketing sections.
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-purple-50/40 border border-purple-100/80">
                <div className="flex items-center gap-2 font-display font-bold text-xs text-gray-900">
                  <i className="fa-solid fa-cart-shopping text-brand-600" />
                  <span>WooCommerce 1-Click Checkout</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">
                  Streamlined checkout flows, Stripe/PayPal payment integrations, and automated receipts.
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-purple-50/40 border border-purple-100/80">
                <div className="flex items-center gap-2 font-display font-bold text-xs text-gray-900">
                  <i className="fa-solid fa-gauge-high text-brand-600" />
                  <span>Core Web Vitals Optimization</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">
                  Sub-second Time To First Byte (TTFB), critical CSS inlining, WebP conversion, and CDN setups.
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-purple-50/40 border border-purple-100/80">
                <div className="flex items-center gap-2 font-display font-bold text-xs text-gray-900">
                  <i className="fa-solid fa-shield-halved text-brand-600" />
                  <span>Enterprise Security Hardening</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">
                  Database prefix obfuscation, strict CORS/CSP headers, 2FA, and automated encrypted backups.
                </p>
              </div>
            </div>
            <div data-anim="fade-up" data-delay={4} className="pt-2 flex items-center gap-4">
              <a href="/index.html#estimator" onClick={(event) => { window.selectEstimatorPreset('wordpress'); }} className="btn-purple magnetic-btn text-white text-xs font-semibold px-5 py-3 rounded-full inline-flex items-center gap-2 shadow-sm">
                <span>Configure WordPress Estimate</span>
              </a>
              <span className="text-[11px] text-gray-400">Typical build: 1–3 weeks</span>
            </div>
          </div>
          <div className="lg:col-span-5" data-anim="scale-in" data-delay={2}>
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#13072b] via-[#1c0a3d] to-[#2b0c5a] border border-purple-500/30 text-white shadow-xl relative overflow-hidden tilt-card">
              <div className="flex items-center justify-between pb-3 border-b border-purple-500/20">
                <span className="text-[10px] font-mono text-purple-300">wordpress-speed-metric.svg</span>
                <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full">PAGE SPEED AUDIT</span>
              </div>
              <div className="py-6 flex flex-col items-center justify-center">
                <svg viewBox="0 0 200 120" className="w-48 h-auto">
                  <path d="M 20 100 A 80 80 0 0 1 180 100" stroke="#381b67" strokeWidth={16} fill="none" strokeLinecap="round" />
                  <path d="M 20 100 A 80 80 0 0 1 176 90" stroke="#10b981" strokeWidth={16} fill="none" strokeLinecap="round" strokeDasharray={245} strokeDashoffset={15} />
                  <text x={100} y={78} textAnchor="middle" fill="#ffffff" fontSize={28} fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight={900}>99</text>
                  <text x={100} y={96} textAnchor="middle" fill="#34d399" fontSize={10} fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight={700}>MOBILE SCORE</text>
                </svg>
                <div className="grid grid-cols-3 gap-2 w-full mt-4 pt-4 border-t border-purple-500/20 text-center">
                  <div className="bg-purple-900/40 p-2 rounded-xl">
                    <div className="text-emerald-400 font-bold text-xs font-mono">0.4s</div>
                    <div className="text-[9px] text-purple-200/70">LCP</div>
                  </div>
                  <div className="bg-purple-900/40 p-2 rounded-xl">
                    <div className="text-emerald-400 font-bold text-xs font-mono">0.00</div>
                    <div className="text-[9px] text-purple-200/70">CLS</div>
                  </div>
                  <div className="bg-purple-900/40 p-2 rounded-xl">
                    <div className="text-emerald-400 font-bold text-xs font-mono">18ms</div>
                    <div className="text-[9px] text-purple-200/70">FID</div>
                  </div>
                </div>
              </div>
              <div className="text-[10px] text-center text-purple-300/80 font-mono">
                Sub-second load times verified on Google Lighthouse
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="fullstack" className="py-20 bg-[#faf8ff] border-b border-purple-100/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1" data-anim="scale-in" data-delay={2}>
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#13072b] via-[#1c0a3d] to-[#2b0c5a] border border-purple-500/30 text-white shadow-xl relative overflow-hidden tilt-card">
              <div className="flex items-center justify-between pb-3 border-b border-purple-500/20">
                <span className="text-[10px] font-mono text-purple-300">laravel-react-api.svg</span>
                <span className="text-[9px] font-mono text-purple-300 bg-purple-500/20 px-2 py-0.5 rounded-full">REST / GRAPHQL</span>
              </div>
              <div className="py-5 space-y-3">
                <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center text-xs">
                      <i className="fa-brands fa-react" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">React 18 / Next.js</div>
                      <div className="text-[9px] text-gray-400">Interactive UI &amp; State Management</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">Client Layer</span>
                </div>
                <div className="flex justify-center text-purple-400">
                </div>
                <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center text-xs">
                      <i className="fa-brands fa-laravel" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Laravel 11 Core</div>
                      <div className="text-[9px] text-gray-400">Authentication, Queues &amp; RBAC</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">API Gateway</span>
                </div>
                <div className="flex justify-center text-purple-400">
                </div>
                <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">
                      <i className="fa-solid fa-database" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">PostgreSQL &amp; Redis</div>
                      <div className="text-[9px] text-gray-400">High-Concurrency Data Store</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">Data Tier</span>
                </div>
              </div>
              <div className="text-[10px] text-center text-purple-300/80 font-mono pt-2 border-t border-purple-500/20">
                100% Type-Safe API contracts &amp; multi-tenant architecture
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div data-anim="fade-up" className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-sm font-bold">02</span>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-600">BESPOKE PLATFORMS</span>
              <span className="px-2 py-0.5 rounded-full bg-purple-100 text-brand-700 border border-purple-200 text-[10px] font-bold">Enterprise Grade</span>
            </div>
            <h2 data-anim="fade-up" data-delay={1} className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-gray-900 tracking-tight">
              Custom Full-Stack Web Applications (Laravel &amp; React/Next.js)
            </h2>
            <p data-anim="fade-up" data-delay={2} className="text-base text-base text-gray-600 leading-relaxed">
              When off-the-shelf software falls short, we engineer custom web applications that scale effortlessly. From client billing portals to complex B2B workflow SaaS tools, our full-stack solutions combine resilient Laravel backends with snappy React/Next.js frontends.
            </p>
            <div data-anim="fade-up" data-delay={3} className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-3.5 rounded-2xl bg-white border border-purple-100 shadow-xs">
                <div className="flex items-center gap-2 font-display font-bold text-xs text-gray-900">
                  <i className="fa-solid fa-layer-group text-brand-600" />
                  <span>Multi-Tenant Architecture</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">
                  Isolated client databases or scoped multi-tenancy with seamless self-service onboarding.
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-purple-100 shadow-xs">
                <div className="flex items-center gap-2 font-display font-bold text-xs text-gray-900">
                  <i className="fa-solid fa-lock text-brand-600" />
                  <span>Role-Based Access Control (RBAC)</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">
                  Granular permissions, secure JWT authentication, team hierarchies, and audit logging.
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-purple-100 shadow-xs">
                <div className="flex items-center gap-2 font-display font-bold text-xs text-gray-900">
                  <i className="fa-solid fa-network-wired text-brand-600" />
                  <span>High-Load REST &amp; WebSockets</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">
                  Real-time event broadcasting, notifications, and webhooks processing millions of hits.
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-purple-100 shadow-xs">
                <div className="flex items-center gap-2 font-display font-bold text-xs text-gray-900">
                  <i className="fa-solid fa-credit-card text-brand-600" />
                  <span>Subscription &amp; Stripe Billing</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">
                  Automated recurring billing, tiered subscriptions, seat management, and invoice receipts.
                </p>
              </div>
            </div>
            <div data-anim="fade-up" data-delay={4} className="pt-2 flex items-center gap-4">
              <a href="/index.html#estimator" onClick={(event) => { window.selectEstimatorPreset('fullstack'); }} className="btn-purple magnetic-btn text-white text-xs font-semibold px-5 py-3 rounded-full inline-flex items-center gap-2 shadow-sm">
                <span>Configure Full-Stack Estimate</span>
              </a>
              <span className="text-[11px] text-gray-400">Typical build: 3–6 weeks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="ghl" className="py-20 bg-white border-b border-purple-100/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div data-anim="fade-up" className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-sm font-bold">03</span>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-600">CRM &amp; AUTOMATION</span>
              <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-bold">High Demand</span>
            </div>
            <h2 data-anim="fade-up" data-delay={1} className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-gray-900 tracking-tight">
              GoHighLevel (GHL) Sub-Account &amp; Pipeline Architecture
            </h2>
            <p data-anim="fade-up" data-delay={2} className="text-base text-base text-gray-600 leading-relaxed">
              We turn GoHighLevel into an automated client acquisition machine. From custom white-label snapshots to complex multi-step pipelines and automated SMS/Email follow-ups, we engineer setups that never drop a lead.
            </p>
            <div data-anim="fade-up" data-delay={3} className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-3.5 rounded-2xl bg-purple-50/40 border border-purple-100/80">
                <div className="flex items-center gap-2 font-display font-bold text-xs text-gray-900">
                  <i className="fa-solid fa-filter text-brand-600" />
                  <span>Multi-Stage Lead Pipelines</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">
                  Custom opportunity stages, automated win/loss tagging, and deal value projections.
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-purple-50/40 border border-purple-100/80">
                <div className="flex items-center gap-2 font-display font-bold text-xs text-gray-900">
                  <i className="fa-solid fa-comments text-brand-600" />
                  <span>SMS &amp; Email Follow-Up Sequences</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">
                  Speed-to-lead under 60 seconds with conversational SMS reminders and missed-call text-back.
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-purple-50/40 border border-purple-100/80">
                <div className="flex items-center gap-2 font-display font-bold text-xs text-gray-900">
                  <i className="fa-solid fa-calendar-check text-brand-600" />
                  <span>Smart Calendar &amp; Round-Robin</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">
                  Automated sales team scheduling, time-zone detection, and Google/Outlook calendar sync.
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-purple-50/40 border border-purple-100/80">
                <div className="flex items-center gap-2 font-display font-bold text-xs text-gray-900">
                  <i className="fa-solid fa-boxes-packing text-brand-600" />
                  <span>Snapshot Architecture &amp; SaaS Mode</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">
                  Deployable 1-click snapshots tailored for niche agencies, SaaS agencies, and multi-location franchises.
                </p>
              </div>
            </div>
            <div data-anim="fade-up" data-delay={4} className="pt-2 flex items-center gap-4">
              <a href="/index.html#estimator" onClick={(event) => { window.selectEstimatorPreset('ghl'); }} className="btn-purple magnetic-btn text-white text-xs font-semibold px-5 py-3 rounded-full inline-flex items-center gap-2 shadow-sm">
                <span>Configure GHL Estimate</span>
              </a>
              <span className="text-[11px] text-gray-400">Typical build: 1–2 weeks</span>
            </div>
          </div>
          <div className="lg:col-span-5" data-anim="scale-in" data-delay={2}>
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#13072b] via-[#1c0a3d] to-[#2b0c5a] border border-purple-500/30 text-white shadow-xl relative overflow-hidden tilt-card">
              <div className="flex items-center justify-between pb-3 border-b border-purple-500/20">
                <span className="text-[10px] font-mono text-purple-300">ghl-lead-funnel.svg</span>
                <span className="text-[9px] font-mono text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded-full">ACTIVE AUTOMATION</span>
              </div>
              <div className="py-5 space-y-3">
                <div className="p-3 rounded-xl bg-purple-900/40 border border-purple-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-purple-500/30 text-purple-300 flex items-center justify-center text-[10px] font-bold">1</span>
                    <span className="text-xs font-bold text-white">Lead Ingestion (Web Form / Ad)</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">&lt;60s Trigger</span>
                </div>
                <div className="p-3 rounded-xl bg-purple-900/40 border border-purple-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-purple-500/30 text-purple-300 flex items-center justify-center text-[10px] font-bold">2</span>
                    <span className="text-xs font-bold text-white">Automated SMS + Email Nurture</span>
                  </div>
                  <span className="text-[10px] font-mono text-purple-300">Drip Active</span>
                </div>
                <div className="p-3 rounded-xl bg-purple-900/40 border border-purple-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-purple-500/30 text-purple-300 flex items-center justify-center text-[10px] font-bold">3</span>
                    <span className="text-xs font-bold text-white">AI Calendar Qualification</span>
                  </div>
                  <span className="text-[10px] font-mono text-amber-400">Auto-Booked</span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/30 text-emerald-300 flex items-center justify-center text-[10px] font-bold">4</span>
                    <span className="text-xs font-bold text-white">Deal Closed &amp; WP Access Granted</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-300">Revenue Won</span>
                </div>
              </div>
              <div className="text-[10px] text-center text-purple-300/80 font-mono pt-2 border-t border-purple-500/20">
                Guaranteed zero lost leads with multi-channel fallbacks
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="ai" className="py-20 bg-[#faf8ff] border-b border-purple-100/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1" data-anim="scale-in" data-delay={2}>
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#13072b] via-[#1c0a3d] to-[#2b0c5a] border border-purple-500/30 text-white shadow-xl relative overflow-hidden tilt-card">
              <div className="flex items-center justify-between pb-3 border-b border-purple-500/20">
                <span className="text-[10px] font-mono text-purple-300">ai-agent-rag.svg</span>
                <span className="text-[9px] font-mono text-fuchsia-400 bg-fuchsia-500/20 px-2 py-0.5 rounded-full">LLM EMBEDDINGS</span>
              </div>
              <div className="py-6 flex flex-col items-center">
                <div className="w-20 h-20 rounded-2xl bg-fuchsia-500/20 border-2 border-fuchsia-400 flex items-center justify-center text-3xl text-fuchsia-300 shadow-glow mb-4">
                  <i className="fa-solid fa-brain" />
                </div>
                <div className="text-sm font-bold text-white">RAG Knowledge Engine</div>
                <div className="text-[11px] text-purple-300 mt-1 text-center max-w-xs">
                  Context-aware replies retrieved from your knowledge base, FAQs, and CRM history in real-time.
                </div>
                <div className="w-full grid grid-cols-2 gap-2 mt-5 pt-4 border-t border-purple-500/20 text-center">
                  <div className="bg-purple-900/40 p-2 rounded-xl">
                    <div className="text-fuchsia-300 font-bold text-xs font-mono">&lt;850ms</div>
                    <div className="text-[9px] text-purple-200/70">Response Speed</div>
                  </div>
                  <div className="bg-purple-900/40 p-2 rounded-xl">
                    <div className="text-emerald-400 font-bold text-xs font-mono">24/7/365</div>
                    <div className="text-[9px] text-purple-200/70">Autonomous Uptime</div>
                  </div>
                </div>
              </div>
              <div className="text-[10px] text-center text-purple-300/80 font-mono pt-2 border-t border-purple-500/20">
                Trained with guardrails to never hallucinate pricing or terms
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div data-anim="fade-up" className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-sm font-bold">04</span>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-600">AUTONOMOUS INTELLIGENCE</span>
              <span className="px-2 py-0.5 rounded-full bg-fuchsia-50 text-fuchsia-700 border border-fuchsia-200 text-[10px] font-bold">2026 AI Ready</span>
            </div>
            <h2 data-anim="fade-up" data-delay={1} className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-gray-900 tracking-tight">
              Autonomous AI Agents &amp; Intelligent Voice/Chat Integrations
            </h2>
            <p data-anim="fade-up" data-delay={2} className="text-base text-base text-gray-600 leading-relaxed">
              Replace rigid chatbots with intelligent autonomous agents fine-tuned on your exact brand knowledge. Our AI agents qualify incoming inquiries, handle support objections, and book qualified meetings on your calendar 24/7.
            </p>
            <div data-anim="fade-up" data-delay={3} className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-3.5 rounded-2xl bg-white border border-purple-100 shadow-xs">
                <div className="flex items-center gap-2 font-display font-bold text-xs text-gray-900">
                  <i className="fa-solid fa-file-contract text-brand-600" />
                  <span>Custom RAG Knowledge Bases</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">
                  Indexed from your PDF docs, website pages, and internal manuals for 100% factual accuracy.
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-purple-100 shadow-xs">
                <div className="flex items-center gap-2 font-display font-bold text-xs text-gray-900">
                  <i className="fa-solid fa-phone-volume text-brand-600" />
                  <span>AI Voice Calling &amp; Booking</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">
                  Human-like latency voice agents calling web form leads within 30 seconds to confirm appointments.
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-purple-100 shadow-xs">
                <div className="flex items-center gap-2 font-display font-bold text-xs text-gray-900">
                  <i className="fa-brands fa-whatsapp text-brand-600" />
                  <span>WhatsApp &amp; Live Webchat</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">
                  Seamless multi-channel presence on website widgets, WhatsApp Business API, and Instagram DMs.
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-purple-100 shadow-xs">
                <div className="flex items-center gap-2 font-display font-bold text-xs text-gray-900">
                  <i className="fa-solid fa-headset text-brand-600" />
                  <span>Human Escalation Protocol</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">
                  Smart intent detection that immediately routes complex or high-ticket leads to live human agents.
                </p>
              </div>
            </div>
            <div data-anim="fade-up" data-delay={4} className="pt-2 flex items-center gap-4">
              <a href="/index.html#estimator" onClick={(event) => { window.selectEstimatorPreset('ai'); }} className="btn-purple magnetic-btn text-white text-xs font-semibold px-5 py-3 rounded-full inline-flex items-center gap-2 shadow-sm">
                <span>Configure AI Agent Estimate</span>
              </a>
              <span className="text-[11px] text-gray-400">Typical build: 1–2 weeks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="sync" className="py-20 bg-white border-b border-purple-100/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div data-anim="fade-up" className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-sm font-bold">05</span>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-600">DATA SYNCHRONIZATION</span>
              <span className="px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-[10px] font-bold">Zero-Lag Synapse</span>
            </div>
            <h2 data-anim="fade-up" data-delay={1} className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-gray-900 tracking-tight">
              2-Way Real-Time GHL + WordPress Data Synchronization
            </h2>
            <p data-anim="fade-up" data-delay={2} className="text-base text-base text-gray-600 leading-relaxed">
              Stop maintaining two separate worlds. We build robust, encrypted bidirectional webhooks and n8n workflows that keep WordPress user accounts, WooCommerce order statuses, and GoHighLevel CRM contacts completely synchronized.
            </p>
            <div data-anim="fade-up" data-delay={3} className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-3.5 rounded-2xl bg-purple-50/40 border border-purple-100/80">
                <div className="flex items-center gap-2 font-display font-bold text-xs text-gray-900">
                  <i className="fa-solid fa-arrows-rotate text-brand-600" />
                  <span>Instant Lead &amp; Form Relays</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">
                  Every submission on Elementor, Gravity Forms, or custom React forms lands in GHL in &lt;1.2s.
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-purple-50/40 border border-purple-100/80">
                <div className="flex items-center gap-2 font-display font-bold text-xs text-gray-900">
                  <i className="fa-solid fa-id-card-clip text-brand-600" />
                  <span>Membership &amp; Course Access</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">
                  GHL stage changes automatically create WordPress member accounts or revoke expired access.
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-purple-50/40 border border-purple-100/80">
                <div className="flex items-center gap-2 font-display font-bold text-xs text-gray-900">
                  <i className="fa-solid fa-bag-shopping text-brand-600" />
                  <span>WooCommerce Purchase Webhooks</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">
                  Purchases immediately tag contacts in GHL, schedule post-purchase upsells, and trigger receipts.
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-purple-50/40 border border-purple-100/80">
                <div className="flex items-center gap-2 font-display font-bold text-xs text-gray-900">
                  <i className="fa-solid fa-shield-virus text-brand-600" />
                  <span>Retry Queues &amp; Error Logging</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">
                  Exponential backoff retries guarantee that no webhook is ever lost during third-party API downtime.
                </p>
              </div>
            </div>
            <div data-anim="fade-up" data-delay={4} className="pt-2 flex items-center gap-4">
              <a href="/index.html#contact" className="btn-purple magnetic-btn text-white text-xs font-semibold px-5 py-3 rounded-full inline-flex items-center gap-2 shadow-sm">
                <span>Request Custom Sync Plan</span>
              </a>
              <span className="text-[11px] text-gray-400">Setup time: 3–7 days</span>
            </div>
          </div>
          <div className="lg:col-span-5" data-anim="scale-in" data-delay={2}>
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#13072b] via-[#1c0a3d] to-[#2b0c5a] border border-purple-500/30 text-white shadow-xl relative overflow-hidden tilt-card">
              <div className="flex items-center justify-between pb-3 border-b border-purple-500/20">
                <span className="text-[10px] font-mono text-purple-300">bidirectional-sync.svg</span>
                <span className="text-[9px] font-mono text-sky-400 bg-sky-500/20 px-2 py-0.5 rounded-full">REAL-TIME BUS</span>
              </div>
              <div className="py-6 flex items-center justify-center">
                <svg viewBox="0 0 240 180" className="w-full max-w-xs h-auto">
                  <defs>
                    <linearGradient id="syncGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#843dff" />
                    </linearGradient>
                  </defs>
                  <rect x={15} y={55} width={70} height={70} rx={16} fill="#1f0e3f" stroke="#843dff" strokeWidth={2} />
                  <text x={50} y={88} textAnchor="middle" fill="#c084fc" fontSize={10} fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight={800}>WordPress</text>
                  <text x={50} y={103} textAnchor="middle" fill="#a78bfa" fontSize={8} fontFamily="monospace">Forms &amp; Woo</text>
                  <rect x={155} y={55} width={70} height={70} rx={16} fill="#1f0e3f" stroke="#38bdf8" strokeWidth={2} />
                  <text x={190} y={88} textAnchor="middle" fill="#7dd3fc" fontSize={10} fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight={800}>GoHighLevel</text>
                  <text x={190} y={103} textAnchor="middle" fill="#38bdf8" fontSize={8} fontFamily="monospace">Pipelines</text>
                  <path d="M 85 75 Q 120 40 155 75" fill="none" stroke="url(#syncGrad)" strokeWidth="2.5" strokeDasharray="4 3" />
                  <polygon points="152,70 157,76 150,78" fill="#843dff" />
                  <path d="M 155 105 Q 120 140 85 105" fill="none" stroke="url(#syncGrad)" strokeWidth="2.5" strokeDasharray="4 3" />
                  <polygon points="88,110 83,104 90,102" fill="#38bdf8" />
                  <circle cx={120} cy={90} r={12} fill="#120727" stroke="#e879f9" strokeWidth="1.5" />
                  <text x={120} y={94} textAnchor="middle" fill="#ffffff" fontSize={8} fontFamily="monospace">SYNC</text>
                </svg>
              </div>
              <div className="text-[10px] text-center text-purple-300/80 font-mono pt-2 border-t border-purple-500/20">
                Encrypted HMAC webhooks with automatic replay buffers
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="design" className="py-20 bg-[#faf8ff] border-b border-purple-100/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1" data-anim="scale-in" data-delay={2}>
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#13072b] via-[#1c0a3d] to-[#2b0c5a] border border-purple-500/30 text-white shadow-xl relative overflow-hidden tilt-card">
              <div className="flex items-center justify-between pb-3 border-b border-purple-500/20">
                <span className="text-[10px] font-mono text-purple-300">figma-design-token.svg</span>
                <span className="text-[9px] font-mono text-pink-400 bg-pink-500/20 px-2 py-0.5 rounded-full">DESIGN TOKENS</span>
              </div>
              <div className="py-5 space-y-3">
                <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/30">
                  <div className="flex items-center justify-between text-xs font-bold text-white mb-1.5">
                    <span className="flex items-center gap-1.5"><i className="fa-solid fa-swatchbook text-pink-400" /> Token Palette</span>
                    <span className="font-mono text-[10px] text-purple-300">8 Colors &amp; Gradients</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="w-6 h-6 rounded-lg bg-[#5309c4]" />
                    <span className="w-6 h-6 rounded-lg bg-[#7c1fff]" />
                    <span className="w-6 h-6 rounded-lg bg-[#c4a6ff]" />
                    <span className="w-6 h-6 rounded-lg bg-[#10b981]" />
                    <span className="w-6 h-6 rounded-lg bg-[#0f172a]" />
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-shapes text-brand-400 text-sm" />
                    <div>
                      <div className="text-xs font-bold text-white">Atomic Component Tree</div>
                      <div className="text-[9px] text-gray-400">Buttons, Navbars, Cards &amp; Hero variants</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">Auto-Layout 5.0</span>
                </div>
                <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-mobile-screen text-indigo-400 text-sm" />
                    <div>
                      <div className="text-xs font-bold text-white">Adaptive Breakpoints</div>
                      <div className="text-[9px] text-gray-400">Mobile 360px, Tablet 768px, Desktop 1440px</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">Tailwind Ready</span>
                </div>
              </div>
              <div className="text-[10px] text-center text-purple-300/80 font-mono pt-2 border-t border-purple-500/20">
                100% Dev-ready Figma variables matching Tailwind CSS
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div data-anim="fade-up" className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-sm font-bold">06</span>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-600">DESIGN &amp; PROTOTYPING</span>
              <span className="px-2 py-0.5 rounded-full bg-pink-50 text-pink-700 border border-pink-200 text-[10px] font-bold">Pixel Precision</span>
            </div>
            <h2 data-anim="fade-up" data-delay={1} className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-gray-900 tracking-tight">
              UI/UX Figma Design Systems &amp; Conversion Prototyping
            </h2>
            <p data-anim="fade-up" data-delay={2} className="text-base text-base text-gray-600 leading-relaxed">
              Before writing a line of code, we design structured, high-conversion interfaces in Figma. We craft complete design tokens, typography scales, and responsive auto-layout components mapped directly to Tailwind CSS classes for rapid implementation.
            </p>
            <div data-anim="fade-up" data-delay={3} className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-3.5 rounded-2xl bg-white border border-purple-100 shadow-xs">
                <div className="flex items-center gap-2 font-display font-bold text-xs text-gray-900">
                  <i className="fa-solid fa-cubes text-brand-600" />
                  <span>Atomic Design Component Libraries</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">
                  Modular buttons, inputs, pills, cards, and modal dialogs organized into variant sets.
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-purple-100 shadow-xs">
                <div className="flex items-center gap-2 font-display font-bold text-xs text-gray-900">
                  <i className="fa-solid fa-play text-brand-600" />
                  <span>Interactive High-Fidelity Prototypes</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">
                  Clickable user flows showing real interactions, dropdown states, and mobile transitions.
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-purple-100 shadow-xs">
                <div className="flex items-center gap-2 font-display font-bold text-xs text-gray-900">
                  <i className="fa-solid fa-universal-access text-brand-600" />
                  <span>WCAG 2.1 AA Accessibility</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">
                  Verified color contrast ratios, accessible touch targets, and legible typography scales.
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-purple-100 shadow-xs">
                <div className="flex items-center gap-2 font-display font-bold text-xs text-gray-900">
                  <i className="fa-solid fa-laptop-code text-brand-600" />
                  <span>1:1 Tailwind CSS Dev Handoff</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">
                  Zero design-to-development drift. All spacing, paddings, and colors map directly to Tailwind tokens.
                </p>
              </div>
            </div>
            <div data-anim="fade-up" data-delay={4} className="pt-2 flex items-center gap-4">
              <a href="/index.html#contact" className="btn-purple magnetic-btn text-white text-xs font-semibold px-5 py-3 rounded-full inline-flex items-center gap-2 shadow-sm">
                <span>Request UI/UX Design Audit</span>
              </a>
              <span className="text-[11px] text-gray-400">Typical audit: 2–4 days</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14" data-anim="fade-up">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-600 block mb-2">PRODUCTION STANDARDS</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-gray-900 tracking-tight">
            What Every Yankee Tech Project Includes
          </h2>
          <p className="text-base text-base text-gray-500 mt-2">
            No asterisks, no surprise fees. These deliverables are standard across all engineering engagements.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-anim="fade-up">
          <div className="p-6 rounded-3xl bg-purple-50/40 border border-purple-100 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-lg mb-3">
                <i className="fa-solid fa-shield-halved" />
              </div>
              <h4 className="font-display font-extrabold text-base text-gray-900">30-Day Post-Launch SLA</h4>
              <p className="text-base text-gray-500 mt-2 leading-relaxed">
                We monitor your live site or application for 30 full days post-launch. Any functional bug or performance regression is resolved immediately at zero additional cost.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-purple-100 text-[11px] font-bold text-brand-600">
              Zero-risk warranty included
            </div>
          </div>
          <div className="p-6 rounded-3xl bg-purple-50/40 border border-purple-100 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-lg mb-3">
                <i className="fa-solid fa-key" />
              </div>
              <h4 className="font-display font-extrabold text-base text-gray-900">100% Code &amp; Asset Ownership</h4>
              <p className="text-base text-gray-500 mt-2 leading-relaxed">
                You retain complete ownership of all repositories, Figma files, database dumps, and hosting credentials. We never trap our clients in proprietary lock-ins.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-purple-100 text-[11px] font-bold text-brand-600">
              Full GitHub repo transfer
            </div>
          </div>
          <div className="p-6 rounded-3xl bg-purple-50/40 border border-purple-100 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-lg mb-3">
                <i className="fa-solid fa-video" />
              </div>
              <h4 className="font-display font-extrabold text-base text-gray-900">Loom Video Documentation</h4>
              <p className="text-base text-gray-500 mt-2 leading-relaxed">
                We record step-by-step Loom walkthroughs guiding your non-technical marketing and sales team on how to manage leads, edit copy, and add new products.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-purple-100 text-[11px] font-bold text-brand-600">
              Complete team enablement
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 bg-[#faf8ff] border-t border-purple-100/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#120727] via-[#1a083a] to-[#2b0c57] text-white p-8 sm:p-10 border border-purple-500/30 shadow-2xl relative overflow-hidden" data-anim="fade-up">
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-brand-500/30 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/25 border border-brand-400/40 text-[10px] font-bold uppercase tracking-wider text-purple-200">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Instant Live Calculation
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                Get an Instant Fixed-Price Estimate for Your Project
              </h3>
              <p className="text-base text-base text-purple-200/80 leading-relaxed max-w-xl">
                Select your service track, adjust page counts, add GoHighLevel pipelines or AI agents, and view real-time estimates in USD, PKR, or GBP in 30 seconds.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a href="/index.html#estimator" className="w-full btn-purple text-white text-xs font-bold py-3.5 px-5 rounded-xl flex items-center justify-center gap-2 shadow-glow transition">
                <span>Launch Price Estimator</span>
                <i className="fa-solid fa-calculator text-xs" />
              </a>
              <a href="/index.html#contact" className="w-full text-center py-3 px-5 rounded-xl text-xs font-semibold text-purple-200 bg-white/5 hover:bg-white/10 border border-white/15 transition">
                <span>Speak with an Architect →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 bg-white border-t border-purple-100/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12" data-anim="fade-up">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-600 block mb-2">COMMON QUESTIONS</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight">
            Frequently Asked Questions About Our Services
          </h2>
          <p className="text-base text-base text-gray-500 mt-2">
            Everything you need to know about working with Yankee Tech.
          </p>
        </div>
        <div className="space-y-3" data-anim="fade-up">
          <div className="p-4 rounded-2xl border border-purple-100 bg-purple-50/20">
            <button type="button" onClick={(event) => { window.toggleFaq(0); }} className="w-full flex items-center justify-between text-left text-xs sm:text-sm font-bold text-gray-900">
              <span>Do you work on fixed-price contracts or hourly billing?</span>
              <i id="faq-icon-0" className="fa-solid fa-plus text-xs text-gray-400 shrink-0 ml-2 transition-transform" />
            </button>
            <div id="faq-body-0" className="hidden pt-3 text-xs text-gray-600 leading-relaxed border-t border-purple-100/80 mt-2.5">
              We operate predominantly on transparent, fixed-price milestone contracts. Once we agree on the scope via our discovery blueprint or live price estimator, that price is locked — no surprise billable hours or hidden scope bloat. For ongoing enterprise maintenance, we offer structured monthly SLA retainers.
            </div>
          </div>
          <div className="p-4 rounded-2xl border border-purple-100 bg-purple-50/20">
            <button type="button" onClick={(event) => { window.toggleFaq(1); }} className="w-full flex items-center justify-between text-left text-xs sm:text-sm font-bold text-gray-900">
              <span>Can you fix our slow, existing WordPress site without rebuilding from scratch?</span>
              <i id="faq-icon-1" className="fa-solid fa-plus text-xs text-gray-400 shrink-0 ml-2 transition-transform" />
            </button>
            <div id="faq-body-1" className="hidden pt-3 text-xs text-gray-600 leading-relaxed border-t border-purple-100/80 mt-2.5">
              Yes. If your current WordPress theme and layout are acceptable, we perform in-depth speed surgeries: removing unused plugin assets, optimizing heavy database tables, setting up Redis object caching, and tuning image assets to hit 90+ PageSpeed without altering your visual front-end.
            </div>
          </div>
          <div className="p-4 rounded-2xl border border-purple-100 bg-purple-50/20">
            <button type="button" onClick={(event) => { window.toggleFaq(2); }} className="w-full flex items-center justify-between text-left text-xs sm:text-sm font-bold text-gray-900">
              <span>Do you provide white-label development for digital agencies?</span>
              <i id="faq-icon-2" className="fa-solid fa-plus text-xs text-gray-400 shrink-0 ml-2 transition-transform" />
            </button>
            <div id="faq-body-2" className="hidden pt-3 text-xs text-gray-600 leading-relaxed border-t border-purple-100/80 mt-2.5">
              Yes! More than 40% of our builds are delivered under strict white-label agreements for marketing agencies in the US, UK, and Europe. We work directly inside your Slack or ClickUp, commit to your GitHub repositories, and deliver under your agency brand.
            </div>
          </div>
          <div className="p-4 rounded-2xl border border-purple-100 bg-purple-50/20">
            <button type="button" onClick={(event) => { window.toggleFaq(3); }} className="w-full flex items-center justify-between text-left text-xs sm:text-sm font-bold text-gray-900">
              <span>How does the 2-way GoHighLevel + WordPress integration work?</span>
              <i id="faq-icon-3" className="fa-solid fa-plus text-xs text-gray-400 shrink-0 ml-2 transition-transform" />
            </button>
            <div id="faq-body-3" className="hidden pt-3 text-xs text-gray-600 leading-relaxed border-t border-purple-100/80 mt-2.5">
              We deploy custom webhook endpoints and n8n middleware that bridge your WordPress database with the GoHighLevel API v2. When a user registers or purchases on WordPress, their contact record, tags, and custom fields are instantly updated in GHL. Conversely, if a deal stage changes in GHL, access permissions update on WordPress in under 2 seconds.
            </div>
          </div>
          <div className="p-4 rounded-2xl border border-purple-100 bg-purple-50/20">
            <button type="button" onClick={(event) => { window.toggleFaq(4); }} className="w-full flex items-center justify-between text-left text-xs sm:text-sm font-bold text-gray-900">
              <span>What AI models and chatbot architectures do you deploy?</span>
              <i id="faq-icon-4" className="fa-solid fa-plus text-xs text-gray-400 shrink-0 ml-2 transition-transform" />
            </button>
            <div id="faq-body-4" className="hidden pt-3 text-xs text-gray-600 leading-relaxed border-t border-purple-100/80 mt-2.5">
              We utilize state-of-the-art models including OpenAI GPT-4o and Anthropic Claude 3.5 Sonnet, combined with custom RAG (Retrieval-Augmented Generation) vector databases. This ensures the bot only answers from your approved company materials, with strict fallback triggers that escalate to human staff when necessary.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 dark-cosmic-bg text-white relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-20 right-1/4 w-96 h-96 bg-brand-600/30 rounded-full blur-3xl" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6" data-anim="fade-up">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-400/30 text-purple-200 text-[10px] font-extrabold uppercase tracking-widest">
          LET'S ARCHITECT YOUR SOLUTION
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
          Ready to Elevate Your Web &amp; Automation Stack?
        </h2>
        <p className="text-base text-base text-purple-200/80 max-w-2xl mx-auto leading-relaxed">
          Book a 30-minute discovery call with our senior engineering team. We'll audit your existing infrastructure and provide a clear, fixed-price proposal.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a href="/index.html#contact" className="btn-purple magnetic-btn text-white text-xs font-semibold px-7 py-3.5 rounded-full inline-flex items-center gap-2 shadow-glow">
            <span>Schedule Discovery Call</span>
          </a>
          <a href="/index.html#estimator" className="px-6 py-3.5 rounded-full text-xs font-semibold text-purple-100 bg-white/10 hover:bg-white/20 border border-white/15 transition inline-flex items-center gap-2">
            <span>Calculate Live Estimate</span>
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
