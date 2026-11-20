export default function PageContent() {
  return (
<div>
  <div id="scroll-progress" />
  <main>
    <section className="hero-bg relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-purple-100/70">
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-gradient-to-b from-purple-400/20 via-fuchsia-300/10 to-transparent rounded-full blur-3xl" />
      <div className="pointer-events-none absolute top-1/4 right-0 w-[420px] h-[360px] bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div data-anim="fade-up" className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/80 border border-purple-300/60 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-700">ABOUT YANKEE TECH</span>
            </div>
            <h1 data-anim="fade-up" data-delay={1} className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[46px] text-[#110c22] leading-[1.15] tracking-tight">
              Engineering High-Performance <span className="bg-gradient-to-r from-purple-700 via-brand-600 to-indigo-600 bg-clip-text text-transparent">Digital Architecture</span> &amp; Autonomous AI
            </h1>
            <p data-anim="fade-up" data-delay={2} className="text-base sm:text-base text-gray-600 leading-relaxed max-w-2xl">
              We bridge the gap between high-converting front-end web platforms and intelligent backend CRM automations. From custom sub-second WordPress builds to enterprise Laravel SaaS portals and autonomous AI booking agents, Yankee Tech engineers software that turns traffic into continuous enterprise revenue.
            </p>
            <div data-anim="fade-up" data-delay={3} className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-white/85 backdrop-blur-md p-3.5 rounded-2xl border border-purple-100/90 shadow-sm">
                <div className="font-display font-extrabold text-xl sm:text-2xl text-brand-700">
                  <span className="counter-num" data-count={45} data-suffix="+">45+</span>
                </div>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5">Launches in 2024-26</div>
              </div>
              <div className="bg-white/85 backdrop-blur-md p-3.5 rounded-2xl border border-purple-100/90 shadow-sm">
                <div className="font-display font-extrabold text-xl sm:text-2xl text-emerald-600">
                  <span className="counter-num" data-count={99} data-suffix=".8%">99.8%</span>
                </div>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5">Uptime SLA Standard</div>
              </div>
              <div className="bg-white/85 backdrop-blur-md p-3.5 rounded-2xl border border-purple-100/90 shadow-sm">
                <div className="font-display font-extrabold text-xl sm:text-2xl text-indigo-600">
                  <span className="counter-num" data-count={95} data-suffix="+">95+</span>
                </div>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5">Mobile PageSpeed</div>
              </div>
              <div className="bg-white/85 backdrop-blur-md p-3.5 rounded-2xl border border-purple-100/90 shadow-sm">
                <div className="font-display font-extrabold text-xl sm:text-2xl text-amber-600">
                  &lt;24h
                </div>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5">Engineering Turnaround</div>
              </div>
            </div>
            <div data-anim="fade-up" data-delay={4} className="flex flex-wrap items-center gap-4 pt-2">
              <a href="/index.html#contact" className="btn-purple magnetic-btn text-white text-xs font-semibold px-6 py-3.5 rounded-full inline-flex items-center gap-2 shadow-md">
                <span>Start a Project Consultation</span>
              </a>
              <a href="/services.html" className="px-5 py-3 rounded-full text-xs font-semibold text-gray-700 bg-white/90 hover:bg-white border border-purple-200/80 transition hover:border-brand-400 inline-flex items-center gap-2 shadow-xs">
                <span>Explore Technical Services</span>
                <i className="fa-solid fa-chevron-right text-[10px] text-gray-400" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 relative" data-anim="scale-in" data-delay={2}>
            <div className="relative w-full rounded-3xl bg-gradient-to-br from-[#120727] via-[#1a0938] to-[#280c54] p-6 lg:p-7 text-white border border-purple-500/30 shadow-2xl overflow-hidden tilt-card">
              <div className="absolute -top-16 -right-16 w-44 h-44 bg-brand-500/25 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-44 h-44 bg-indigo-500/25 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center justify-between pb-4 border-b border-purple-500/20 relative z-10">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="text-[10px] font-mono text-purple-300 ml-1">yankee-system-v2.6.svg</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-[9px] font-mono text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> LIVE CLUSTER
                </div>
              </div>
              <div className="py-4 relative z-10">
                <svg viewBox="0 0 420 310" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-md">
                  <defs>
                    <linearGradient id="vectorGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#843dff" />
                      <stop offset="100%" stopColor="#5b0cd4" />
                    </linearGradient>
                    <linearGradient id="vectorGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#047857" />
                    </linearGradient>
                    <linearGradient id="vectorGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#1d4ed8" />
                    </linearGradient>
                    <filter id="vectorGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation={4} result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  <path d="M 10 30 H 410 M 10 90 H 410 M 10 155 H 410 M 10 220 H 410 M 10 280 H 410" stroke="#372063" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
                  <path d="M 50 10 V 300 M 130 10 V 300 M 210 10 V 300 M 290 10 V 300 M 370 10 V 300" stroke="#372063" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
                  <path d="M 100 80 C 150 80, 160 155, 210 155" stroke="url(#vectorGrad1)" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 100 230 C 150 230, 160 155, 210 155" stroke="url(#vectorGrad3)" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 210 155 C 260 155, 270 80, 320 80" stroke="url(#vectorGrad2)" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 210 155 C 260 155, 270 230, 320 230" stroke="#c084fc" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx={150} cy={115} r="3.5" fill="#c084fc" filter="url(#vectorGlow)" />
                  <circle cx={155} cy={195} r="3.5" fill="#38bdf8" filter="url(#vectorGlow)" />
                  <circle cx={265} cy={115} r="3.5" fill="#34d399" filter="url(#vectorGlow)" />
                  <circle cx={265} cy={195} r="3.5" fill="#e879f9" filter="url(#vectorGlow)" />
                  <g transform="translate(40, 50)">
                    <rect width={115} height={60} rx={12} fill="#1b0d36" stroke="#843dff" strokeWidth="1.5" />
                    <circle cx={24} cy={30} r={14} fill="#31145f" />
                    <path d="M 24 21 C 19 21 15 25 15 30 C 15 35 19 39 24 39 C 29 39 33 35 33 30 C 33 25 29 21 24 21 Z M 16.5 30 C 16.5 28 17.2 26.2 18.4 24.8 L 22.2 35.2 C 18.9 34.3 16.5 32.4 16.5 30 Z M 24 37.5 C 22.8 37.5 21.7 37.1 20.7 36.5 L 23.3 29 L 25.8 36.3 C 25.2 37.1 24.6 37.5 24 37.5 Z" fill="#c084fc" />
                    <text x={46} y={27} fill="#ffffff" fontSize={10} fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight={700}>Web / Woo</text>
                    <text x={46} y={41} fill="#a78bfa" fontSize={8} fontFamily="monospace">98 PageSpeed</text>
                  </g>
                  <g transform="translate(40, 200)">
                    <rect width={115} height={60} rx={12} fill="#1b0d36" stroke="#38bdf8" strokeWidth="1.5" />
                    <circle cx={24} cy={30} r={14} fill="#0d2b45" />
                    <path d="M 17 23 L 31 23 L 26 29 L 26 35 L 22 37 L 22 29 Z" fill="#38bdf8" />
                    <text x={46} y={27} fill="#ffffff" fontSize={10} fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight={700}>GHL Engine</text>
                    <text x={46} y={41} fill="#7dd3fc" fontSize={8} fontFamily="monospace">2-Way Sync</text>
                  </g>
                  <g transform="translate(170, 115)">
                    <rect width={80} height={80} rx={18} fill="url(#vectorGrad1)" stroke="#d8b4fe" strokeWidth={2} filter="url(#vectorGlow)" />
                    <circle cx={40} cy={34} r={15} fill="#170830" />
                    <text x={40} y={38} textAnchor="middle" fill="#d8b4fe" fontSize={12} fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight={900}>YT</text>
                    <text x={40} y={62} textAnchor="middle" fill="#ffffff" fontSize={9} fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight={700}>API Gateway</text>
                    <text x={40} y={72} textAnchor="middle" fill="#e9d5ff" fontSize={7} fontFamily="monospace">0.12ms LATENCY</text>
                  </g>
                  <g transform="translate(265, 50)">
                    <rect width={115} height={60} rx={12} fill="#1b0d36" stroke="#10b981" strokeWidth="1.5" />
                    <circle cx={24} cy={30} r={14} fill="#063826" />
                    <circle cx={24} cy={30} r={4} fill="#34d399" />
                    <path d="M 24 20 V 23 M 24 37 V 40 M 14 30 H 17 M 31 30 H 34" stroke="#34d399" strokeWidth="1.8" strokeLinecap="round" />
                    <text x={46} y={27} fill="#ffffff" fontSize={10} fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight={700}>AI Agents</text>
                    <text x={46} y={41} fill="#6ee7b7" fontSize={8} fontFamily="monospace">GPT-4o / RAG</text>
                  </g>
                  <g transform="translate(265, 200)">
                    <rect width={115} height={60} rx={12} fill="#1b0d36" stroke="#c084fc" strokeWidth="1.5" />
                    <circle cx={24} cy={30} r={14} fill="#371556" />
                    <ellipse cx={24} cy={24} rx={7} ry="2.5" fill="#e879f9" />
                    <path d="M 17 24 V 29 C 17 30.5 20.1 31.5 24 31.5 C 27.9 31.5 31 30.5 31 29 V 24" stroke="#e879f9" strokeWidth="1.2" fill="none" />
                    <path d="M 17 29 V 34 C 17 35.5 20.1 36.5 24 36.5 C 27.9 36.5 31 35.5 31 34 V 29" stroke="#e879f9" strokeWidth="1.2" fill="none" />
                    <text x={46} y={27} fill="#ffffff" fontSize={10} fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight={700}>n8n / Webhooks</text>
                    <text x={46} y={41} fill="#f0abfc" fontSize={8} fontFamily="monospace">Automated SLAs</text>
                  </g>
                </svg>
              </div>
              <div className="pt-3 border-t border-purple-500/20 flex items-center justify-between text-[11px] text-purple-200/80">
                <span className="flex items-center gap-1.5">
                  <i className="fa-solid fa-shield-halved text-emerald-400 text-xs" />
                  <span>Zero-bloat code integrity</span>
                </span>
                <span className="font-mono text-purple-300">Continuous 2-Way Sync</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14" data-anim="fade-up">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-600 block mb-2">OUR CORE PHILOSOPHY</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-gray-900 tracking-tight">
            The Engineering Standards Behind Every Yankee Tech Build
          </h2>
          <p className="text-base text-base text-gray-500 mt-2">
            Most agencies deploy bloated themes, paste fragile third-party plugins, and disappear after delivery. We build scalable software assets engineered for years of reliable operation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div data-anim="fade-up" data-delay={1} className="rounded-3xl p-7 service-card-bg border border-purple-100 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-brand-600 flex items-center justify-center text-xl shadow-xs">
                <i className="fa-solid fa-bolt-lightning" />
              </div>
              <h3 className="font-display font-extrabold text-lg text-gray-900">Zero-Bloat Architecture</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                We eliminate redundant scripts, junk CSS, and memory-leaking plugins. Every WordPress theme and web application is custom-compiled with Tailwind CSS and modular PHP/React components for sub-second page loads.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-purple-100/80 space-y-2">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-gray-500 font-medium">PageSpeed Mobile Target</span>
                <span className="font-bold text-emerald-600 font-mono">95–100 / 100</span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-gray-500 font-medium">Plugin Dependency</span>
                <span className="font-bold text-brand-600 font-mono">&lt;8 Essential Plugins</span>
              </div>
            </div>
          </div>
          <div data-anim="fade-up" data-delay={2} className="rounded-3xl p-7 service-card-bg border border-purple-100 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-brand-600 flex items-center justify-center text-xl shadow-xs">
                <i className="fa-solid fa-arrows-split-up-and-left" />
              </div>
              <h3 className="font-display font-extrabold text-lg text-gray-900">Autonomous Operations First</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                A website is incomplete if your staff spends hours manually copy-pasting leads. We establish automatic two-way data pipelines connecting forms, WooCommerce purchases, and GoHighLevel CRM funnels instantly.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-purple-100/80 space-y-2">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-gray-500 font-medium">Lead Routing Latency</span>
                <span className="font-bold text-emerald-600 font-mono">&lt;1.5 Seconds</span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-gray-500 font-medium">Manual Entry Reduction</span>
                <span className="font-bold text-brand-600 font-mono">94% Automated</span>
              </div>
            </div>
          </div>
          <div data-anim="fade-up" data-delay={3} className="rounded-3xl p-7 service-card-bg border border-purple-100 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-brand-600 flex items-center justify-center text-xl shadow-xs">
                <i className="fa-solid fa-chart-line" />
              </div>
              <h3 className="font-display font-extrabold text-lg text-gray-900">Commercial Velocity</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                We engineer code with clear business goals: decreasing bounce rates, maximizing conversion funnels, and empowering non-technical clients to update copy without breaking layouts.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-purple-100/80 space-y-2">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-gray-500 font-medium">Checkout Abandonment</span>
                <span className="font-bold text-emerald-600 font-mono">-28% Average</span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-gray-500 font-medium">Client Autonomy</span>
                <span className="font-bold text-brand-600 font-mono">100% Full Access</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 bg-[#faf8ff] border-y border-purple-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16" data-anim="fade-up">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-600 block mb-2">OUR ENGINEERING LIFECYCLE</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-gray-900 tracking-tight">
            How We Execute Projects With Zero Surprises
          </h2>
          <p className="text-base text-base text-gray-500 mt-2">
            A battle-tested 4-step framework guaranteeing fixed timelines, transparent deliverables, and rock-solid software stability.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div data-anim="fade-up" data-delay={1} className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm relative group hover:border-brand-300 transition">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs font-bold text-purple-400">STAGE 01</span>
              <span className="w-8 h-8 rounded-xl bg-purple-50 text-brand-600 flex items-center justify-center text-xs font-bold">1-3d</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-base mb-3 group-hover:scale-110 transition">
              <i className="fa-solid fa-compass-drafting" />
            </div>
            <h4 className="font-display font-extrabold text-base text-gray-900">Blueprint &amp; Discovery</h4>
            <p className="text-base text-gray-500 mt-2 leading-relaxed">
              We dissect your existing tech stack, map customer journeys, define database schemas, and align on exact conversion milestones.
            </p>
            <ul className="mt-4 pt-3 border-t border-purple-50 space-y-1.5 text-[11px] text-gray-600">
              <li className="flex items-center gap-1.5"><i className="fa-solid fa-check text-emerald-500 text-[10px]" /> Scope &amp; Architecture Map</li>
              <li className="flex items-center gap-1.5"><i className="fa-solid fa-check text-emerald-500 text-[10px]" /> Figma Wireframe Validation</li>
            </ul>
          </div>
          <div data-anim="fade-up" data-delay={2} className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm relative group hover:border-brand-300 transition">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs font-bold text-purple-400">STAGE 02</span>
              <span className="w-8 h-8 rounded-xl bg-purple-50 text-brand-600 flex items-center justify-center text-xs font-bold">1-2w</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-base mb-3 group-hover:scale-110 transition">
              <i className="fa-solid fa-code" />
            </div>
            <h4 className="font-display font-extrabold text-base text-gray-900">Clean-Code Crafting</h4>
            <p className="text-base text-gray-500 mt-2 leading-relaxed">
              We build using modular components, semantic HTML5, Tailwind CSS styling, and high-performance backend logic without bloated builders.
            </p>
            <ul className="mt-4 pt-3 border-t border-purple-50 space-y-1.5 text-[11px] text-gray-600">
              <li className="flex items-center gap-1.5"><i className="fa-solid fa-check text-emerald-500 text-[10px]" /> Custom Component System</li>
              <li className="flex items-center gap-1.5"><i className="fa-solid fa-check text-emerald-500 text-[10px]" /> 100% Mobile Fluid Layouts</li>
            </ul>
          </div>
          <div data-anim="fade-up" data-delay={3} className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm relative group hover:border-brand-300 transition">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs font-bold text-purple-400">STAGE 03</span>
              <span className="w-8 h-8 rounded-xl bg-purple-50 text-brand-600 flex items-center justify-center text-xs font-bold">3-5d</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-base mb-3 group-hover:scale-110 transition">
              <i className="fa-solid fa-robot" />
            </div>
            <h4 className="font-display font-extrabold text-base text-gray-900">Ecosystem &amp; AI Integration</h4>
            <p className="text-base text-gray-500 mt-2 leading-relaxed">
              We connect GoHighLevel pipelines, automated SMS/email triggers, OpenAI RAG chatbots, and webhook synchronization loops.
            </p>
            <ul className="mt-4 pt-3 border-t border-purple-50 space-y-1.5 text-[11px] text-gray-600">
              <li className="flex items-center gap-1.5"><i className="fa-solid fa-check text-emerald-500 text-[10px]" /> Bidirectional CRM Webhooks</li>
              <li className="flex items-center gap-1.5"><i className="fa-solid fa-check text-emerald-500 text-[10px]" /> Autonomous Lead Qualifiers</li>
            </ul>
          </div>
          <div data-anim="fade-up" data-delay={4} className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm relative group hover:border-brand-300 transition">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs font-bold text-purple-400">STAGE 04</span>
              <span className="w-8 h-8 rounded-xl bg-purple-50 text-brand-600 flex items-center justify-center text-xs font-bold">2-4d</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-base mb-3 group-hover:scale-110 transition">
              <i className="fa-solid fa-rocket" />
            </div>
            <h4 className="font-display font-extrabold text-base text-gray-900">QA, Speed &amp; Handoff</h4>
            <p className="text-base text-gray-500 mt-2 leading-relaxed">
              We benchmark Core Web Vitals, audit cross-browser rendering, harden security headers, and provide complete documentation.
            </p>
            <ul className="mt-4 pt-3 border-t border-purple-50 space-y-1.5 text-[11px] text-gray-600">
              <li className="flex items-center gap-1.5"><i className="fa-solid fa-check text-emerald-500 text-[10px]" /> 95+ PageSpeed Guarantee</li>
              <li className="flex items-center gap-1.5"><i className="fa-solid fa-check text-emerald-500 text-[10px]" /> 30-Day Post-Launch SLA</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div data-anim="fade-up">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-600 block mb-2">MODERN TECH ECOSYSTEM</span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-gray-900 tracking-tight">
              Tools &amp; Frameworks We Master
            </h2>
            <p className="text-base text-base text-gray-500 mt-1">
              Zero legacy junk. We build with modern, battle-tested production technologies.
            </p>
          </div>
          <div data-anim="fade-up" data-delay={1}>
            <a href="/services.html" className="inline-flex items-center gap-2 text-xs font-bold text-brand-600 hover:text-brand-700 transition">
              <span>View detailed capabilities</span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <div data-anim="fade-up" data-delay={1} className="p-4 rounded-2xl border border-purple-100 hover:border-purple-300 bg-purple-50/30 hover:bg-white transition text-center group shadow-xs">
            <div className="w-10 h-10 mx-auto rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-xl mb-2.5 group-hover:scale-110 transition">
              <i className="fa-brands fa-wordpress" />
            </div>
            <h5 className="font-display font-bold text-xs text-gray-900">WordPress</h5>
            <p className="text-[10px] text-gray-500 mt-0.5">Custom &amp; Elementor</p>
          </div>
          <div data-anim="fade-up" data-delay={2} className="p-4 rounded-2xl border border-purple-100 hover:border-purple-300 bg-purple-50/30 hover:bg-white transition text-center group shadow-xs">
            <div className="w-10 h-10 mx-auto rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-xl mb-2.5 group-hover:scale-110 transition">
              <i className="fa-brands fa-laravel" />
            </div>
            <h5 className="font-display font-bold text-xs text-gray-900">Laravel</h5>
            <p className="text-[10px] text-gray-500 mt-0.5">SaaS &amp; REST APIs</p>
          </div>
          <div data-anim="fade-up" data-delay={3} className="p-4 rounded-2xl border border-purple-100 hover:border-purple-300 bg-purple-50/30 hover:bg-white transition text-center group shadow-xs">
            <div className="w-10 h-10 mx-auto rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-xl mb-2.5 group-hover:scale-110 transition">
              <i className="fa-brands fa-react" />
            </div>
            <h5 className="font-display font-bold text-xs text-gray-900">React &amp; Next.js</h5>
            <p className="text-[10px] text-gray-500 mt-0.5">Modern Frontends</p>
          </div>
          <div data-anim="fade-up" data-delay={4} className="p-4 rounded-2xl border border-purple-100 hover:border-purple-300 bg-purple-50/30 hover:bg-white transition text-center group shadow-xs">
            <div className="w-10 h-10 mx-auto rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-xl mb-2.5 group-hover:scale-110 transition">
              <i className="fa-solid fa-filter-circle-dollar" />
            </div>
            <h5 className="font-display font-bold text-xs text-gray-900">GoHighLevel</h5>
            <p className="text-[10px] text-gray-500 mt-0.5">Snapshots &amp; Pipelines</p>
          </div>
          <div data-anim="fade-up" data-delay={5} className="p-4 rounded-2xl border border-purple-100 hover:border-purple-300 bg-purple-50/30 hover:bg-white transition text-center group shadow-xs">
            <div className="w-10 h-10 mx-auto rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-xl mb-2.5 group-hover:scale-110 transition">
              <i className="fa-solid fa-brain" />
            </div>
            <h5 className="font-display font-bold text-xs text-gray-900">OpenAI &amp; Claude</h5>
            <p className="text-[10px] text-gray-500 mt-0.5">Autonomous RAG</p>
          </div>
          <div data-anim="fade-up" data-delay={6} className="p-4 rounded-2xl border border-purple-100 hover:border-purple-300 bg-purple-50/30 hover:bg-white transition text-center group shadow-xs">
            <div className="w-10 h-10 mx-auto rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-xl mb-2.5 group-hover:scale-110 transition">
              <i className="fa-solid fa-diagram-project" />
            </div>
            <h5 className="font-display font-bold text-xs text-gray-900">n8n &amp; Webhooks</h5>
            <p className="text-[10px] text-gray-500 mt-0.5">Event Automation</p>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 bg-[#faf8ff] border-t border-purple-100/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14" data-anim="fade-up">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-600 block mb-2">WHY CHOOSE US</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-gray-900 tracking-tight">
            The Yankee Tech Difference
          </h2>
          <p className="text-base text-base text-gray-500 mt-2">
            See how our engineering approach outperforms traditional slow web design agencies.
          </p>
        </div>
        <div className="bg-white rounded-3xl border border-purple-100 shadow-md overflow-hidden" data-anim="fade-up">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-purple-100 bg-purple-50/50">
                  <th className="py-4 px-5 font-bold text-gray-700 uppercase tracking-wider text-[10px]">Key Capability / Deliverable</th>
                  <th className="py-4 px-5 font-extrabold text-brand-700 bg-purple-100/60 uppercase tracking-wider text-[10px]">Yankee Tech Engineering</th>
                  <th className="py-4 px-5 font-bold text-gray-400 uppercase tracking-wider text-[10px]">Standard Freelancer / Agency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-50">
                <tr>
                  <td className="py-3.5 px-5 font-medium text-gray-900">Performance Guarantee</td>
                  <td className="py-3.5 px-5 font-bold text-emerald-600 bg-purple-50/30 flex items-center gap-1.5">
                    <i className="fa-solid fa-circle-check text-xs" /> 95+ Mobile PageSpeed Guaranteed
                  </td>
                  <td className="py-3.5 px-5 text-gray-500">Unoptimized (often 40–60/100)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-medium text-gray-900">CRM &amp; GHL Integration</td>
                  <td className="py-3.5 px-5 font-bold text-emerald-600 bg-purple-50/30 flex items-center gap-1.5">
                    <i className="fa-solid fa-circle-check text-xs" /> Native 2-Way Sync &amp; Webhook Relays
                  </td>
                  <td className="py-3.5 px-5 text-gray-500">Simple email notification only</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-medium text-gray-900">AI Readiness</td>
                  <td className="py-3.5 px-5 font-bold text-emerald-600 bg-purple-50/30 flex items-center gap-1.5">
                    <i className="fa-solid fa-circle-check text-xs" /> Autonomous Voice &amp; Chatbot Agents
                  </td>
                  <td className="py-3.5 px-5 text-gray-500">Static rule-based forms</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-medium text-gray-900">Code Architecture</td>
                  <td className="py-3.5 px-5 font-bold text-emerald-600 bg-purple-50/30 flex items-center gap-1.5">
                    <i className="fa-solid fa-circle-check text-xs" /> Clean, modular, zero plugin bloat
                  </td>
                  <td className="py-3.5 px-5 text-gray-500">Heavy themes with 40+ plugins</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-medium text-gray-900">Pricing Transparency</td>
                  <td className="py-3.5 px-5 font-bold text-emerald-600 bg-purple-50/30 flex items-center gap-1.5">
                    <i className="fa-solid fa-circle-check text-xs" /> Transparent Live Estimator &amp; Fixed Scope
                  </td>
                  <td className="py-3.5 px-5 text-gray-500">Vague hourly quotes with scope creep</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-medium text-gray-900">Post-Launch Support</td>
                  <td className="py-3.5 px-5 font-bold text-emerald-600 bg-purple-50/30 flex items-center gap-1.5">
                    <i className="fa-solid fa-circle-check text-xs" /> 30-Day SLA &amp; Handover Documentation
                  </td>
                  <td className="py-3.5 px-5 text-gray-500">No warranty or ghosted support</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 dark-cosmic-bg text-white relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-20 right-1/4 w-96 h-96 bg-brand-600/30 rounded-full blur-3xl" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6" data-anim="fade-up">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-400/30 text-purple-200 text-[10px] font-extrabold uppercase tracking-widest">
          LET'S BUILD SOMETHING EXCEPTIONAL
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
          Ready to Modernize Your Digital Infrastructure?
        </h2>
        <p className="text-base text-base text-purple-200/80 max-w-2xl mx-auto leading-relaxed">
          Whether you need a high-converting WordPress presence, custom Laravel platform, or an autonomous GoHighLevel automation engine, our senior team is ready to deliver.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a href="/index.html#contact" className="btn-purple magnetic-btn text-white text-xs font-semibold px-7 py-3.5 rounded-full inline-flex items-center gap-2 shadow-glow">
            <span>Schedule a Free Strategy Call</span>
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
