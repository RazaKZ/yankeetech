export default function PageContent() {
  return (
<div>
  <div id="scroll-progress" />
  <main id="main-content">
    <section id="home" className="cinema-hero" aria-label="Yankee Tech digital studio">
      <div className="cinema-stage">
        <div className="cinema-grain" aria-hidden="true" />
        <div className="cinema-art" aria-hidden="true">
          <div className="cinema-art-fallback" />
          <canvas id="cinemaCanvas" />
        </div>
        <div className="cinema-copy">
          <p className="cinema-eyebrow">Independent thinking. Connected technology.</p>
          <h1 aria-label="We build your next advantage.">
            <span className="cinema-line"><span>We build</span></span>
            <span className="cinema-line"><span>your next</span></span>
            <span className="cinema-line cinema-accent"><span>advantage.</span></span>
          </h1>
          <div className="cinema-intro-footer">
            <p>Websites, software &amp; automation.<br />Made to move your business forward.</p>
            <a className="cinema-cta" href="#contact"><span>Start a project</span><i className="fa-solid fa-plus" aria-hidden="true" /></a>
          </div>
        </div>
        <div className="cinema-second" aria-hidden="true">
          <p>From the first idea to the next stage.</p>
          <strong>Designed to connect.<br /><em>Built to scale.</em></strong>
        </div>
        <div className="cinema-bottom">
          <a href="#services">Explore our capabilities <span aria-hidden="true">↓</span></a>
          <span>Design / Development / Automation</span>
          <button className="cinema-motion-toggle" type="button" aria-pressed="false">Pause motion</button>
        </div>
        <div className="cinema-scroll-line" aria-hidden="true"><span /></div>
      </div>
    </section>
    <section className="cinema-type-band" aria-label="Design, build and connect">
      <p>DESIGN. <em>BUILD.</em> CONNECT.</p>
    </section>
    <section className="studio-stack" aria-label="Technologies we work with"><div className="studio-container"><p>Built with tools you trust</p><div><span>Laravel</span><span>React</span><span>WordPress</span><span>GoHighLevel</span><span>WooCommerce</span><span>n8n</span></div></div></section>
    <section id="services" className="py-16 lg:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div data-anim="fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-[10px] font-bold uppercase tracking-widest mb-3">
              <i className="fa-solid fa-layer-group text-xs" />
              <span>WHAT WE CAN BUILD</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-gray-900 tracking-tight">
              Built around what your business needs.
            </h2>
            <p className="text-base text-base text-gray-600 mt-2 max-w-2xl leading-relaxed">
              Launch a product, connect your tools or extend your team. We turn your requirements into a clear scope and a working solution.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a href="/services.html" className="px-5 py-2.5 rounded-full border border-purple-200 hover:border-brand-600 hover:text-brand-600 text-xs font-semibold text-gray-700 inline-flex items-center gap-2 transition bg-purple-50/50">
              <span>View all services</span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          <div data-anim="fade-up" data-delay={1} className="group bg-[#faf8ff] hover:bg-white border border-purple-100 hover:border-purple-300 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-brand-600 to-indigo-600" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-brand-600 flex items-center justify-center text-xl mb-5 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition shadow-sm">
                <i className="fa-solid fa-laptop-code" />
              </div>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-brand-600 mb-2">
                <span>CORE PLATFORM</span>
              </div>
              <h3 className="font-display font-bold text-lg text-gray-900 mb-2.5 group-hover:text-brand-600 transition leading-snug">
                Custom Web Apps &amp; SaaS Development
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-5">
                Scalable web applications, client portals and SaaS products, from first prototype to production with user roles, auth and dashboards.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-purple-100 text-gray-700">Next.js 14</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-purple-100 text-gray-700">React</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-purple-100 text-gray-700">PostgreSQL</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-purple-100 text-gray-700">SaaS MVP</span>
              </div>
            </div>
            <div className="pt-4 border-t border-purple-100/80 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-gray-500">From $2,200</span>
              <a href="/service-laravel-react.html" className="inline-flex items-center gap-1 text-xs font-bold text-brand-600 group-hover:gap-2 transition-all">
                <span>View Specs</span>
              </a>
            </div>
          </div>
          <div data-anim="fade-up" data-delay={2} className="group bg-[#faf8ff] hover:bg-white border border-purple-100 hover:border-purple-300 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-amber-500 to-rose-600" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl mb-5 group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white transition shadow-sm">
                <i className="fa-solid fa-plug-circle-bolt" />
              </div>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700 mb-2">
                <span>DEEP CONNECTIVITY</span>
              </div>
              <h3 className="font-display font-bold text-lg text-gray-900 mb-2.5 group-hover:text-brand-600 transition leading-snug">
                API &amp; Third-Party Integrations
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-5">
                Connect your CRM, payments, GoHighLevel, accounting and internal tools with reliable, well-documented APIs, webhooks &amp; SSO.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-purple-100 text-gray-700">REST &amp; GraphQL</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-purple-100 text-gray-700">GHL API v2</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-purple-100 text-gray-700">Stripe Billing</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-purple-100 text-gray-700">n8n / Make</span>
              </div>
            </div>
            <div className="pt-4 border-t border-purple-100/80 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-gray-500">From $250 - $500</span>
              <a href="/service-api-engineering.html" className="inline-flex items-center gap-1 text-xs font-bold text-brand-600 group-hover:gap-2 transition-all">
                <span>View Specs</span>
              </a>
            </div>
          </div>
          <div data-anim="fade-up" data-delay={3} className="group bg-[#faf8ff] hover:bg-white border border-purple-100 hover:border-purple-300 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-red-500 to-fuchsia-600" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center text-xl mb-5 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition shadow-sm">
                <i className="fa-brands fa-laravel" />
              </div>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-red-600 mb-2">
                <span>MODERN FULL-STACK</span>
              </div>
              <h3 className="font-display font-bold text-lg text-gray-900 mb-2.5 group-hover:text-brand-600 transition leading-snug">
                Laravel, React &amp; Next.js Development
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-5">
                Modern full-stack engineering with clean code, automated unit tests, CI/CD pipelines and documentation you 100% own.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-purple-100 text-gray-700">Laravel 11</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-purple-100 text-gray-700">PHP 8.3</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-purple-100 text-gray-700">Tailwind CSS</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-purple-100 text-gray-700">Redis &amp; MySQL</span>
              </div>
            </div>
            <div className="pt-4 border-t border-purple-100/80 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-gray-500">From $2,500</span>
              <a href="/service-laravel-react.html" className="inline-flex items-center gap-1 text-xs font-bold text-brand-600 group-hover:gap-2 transition-all">
                <span>View Specs</span>
              </a>
            </div>
          </div>
          <div data-anim="fade-up" data-delay={4} className="group bg-[#faf8ff] hover:bg-white border border-purple-100 hover:border-purple-300 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-emerald-500 to-teal-600" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl mb-5 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition shadow-sm">
                <i className="fa-solid fa-users-gear" />
              </div>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 mb-2">
                <span>AGENCY EXTENSION</span>
              </div>
              <h3 className="font-display font-bold text-lg text-gray-900 mb-2.5 group-hover:text-brand-600 transition leading-snug">
                Dedicated Developers &amp; White-Label Team
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-5">
                Extend your team or your agency with senior developers, GHL architects and dedicated engineering, billed on transparent monthly retainers.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-purple-100 text-gray-700">White-Label NDA</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-purple-100 text-gray-700">US Timezone</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-purple-100 text-gray-700">Weekly Demos</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-purple-100 text-gray-700">Monthly Billing</span>
              </div>
            </div>
            <div className="pt-4 border-t border-purple-100/80 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-gray-500">From $1,500/mo</span>
              <a href="/service-white-label-agency.html" className="inline-flex items-center gap-1 text-xs font-bold text-brand-600 group-hover:gap-2 transition-all">
                <span>View Specs</span>
              </a>
            </div>
          </div>
        </div>
        <div data-anim="fade-up" className="pt-6 border-t border-purple-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
            <div>
              <h3 className="font-display font-extrabold text-lg text-gray-900 flex items-center gap-2">
                <i className="fa-solid fa-bolt text-amber-500 text-sm" />
                <span>Quick Solutions</span>
              </h3>
              <p className="text-base text-gray-500">Rapid turnaround packages with fixed scope and transparent pricing</p>
            </div>
            <span className="text-xs font-mono text-purple-600 font-semibold">Milestone Payments (30 / 30 / 40)</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a href="/service-wordpress.html" className="group p-4 rounded-2xl bg-white border border-purple-100 hover:border-brand-500 hover:shadow-md transition flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#21759b] flex items-center justify-center text-lg shrink-0 group-hover:scale-105 transition">
                  <i className="fa-brands fa-wordpress" />
                </div>
                <div className="min-w-0">
                  <div className="font-display font-bold text-xs text-gray-900 group-hover:text-brand-600 transition truncate">
                    WordPress &amp; WooCommerce
                  </div>
                  <div className="text-[11px] text-gray-500 truncate">Themes, speed &amp; checkouts</div>
                </div>
              </div>
              <span className="text-[11px] font-bold text-brand-600 shrink-0 bg-purple-50 px-2 py-0.5 rounded-md">From $400</span>
            </a>
            <a href="/service-ghl-funnels.html" className="group p-4 rounded-2xl bg-white border border-purple-100 hover:border-brand-500 hover:shadow-md transition flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg shrink-0 group-hover:scale-105 transition">
                  <i className="fa-solid fa-filter-circle-dollar" />
                </div>
                <div className="min-w-0">
                  <div className="font-display font-bold text-xs text-gray-900 group-hover:text-brand-600 transition truncate">
                    GoHighLevel Setup &amp; CRM
                  </div>
                  <div className="text-[11px] text-gray-500 truncate">Pipelines &amp; SMS/email funnels</div>
                </div>
              </div>
              <span className="text-[11px] font-bold text-emerald-700 shrink-0 bg-emerald-50 px-2 py-0.5 rounded-md">From $400</span>
            </a>
            <a href="/service-ai-chatbots.html" className="group p-4 rounded-2xl bg-white border border-purple-100 hover:border-brand-500 hover:shadow-md transition flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-fuchsia-50 text-fuchsia-600 flex items-center justify-center text-lg shrink-0 group-hover:scale-105 transition">
                  <i className="fa-solid fa-robot" />
                </div>
                <div className="min-w-0">
                  <div className="font-display font-bold text-xs text-gray-900 group-hover:text-brand-600 transition truncate">
                    AI Chatbots &amp; Voice Agents
                  </div>
                  <div className="text-[11px] text-gray-500 truncate">24/7 lead qualification &amp; booking</div>
                </div>
              </div>
              <span className="text-[11px] font-bold text-fuchsia-700 shrink-0 bg-fuchsia-50 px-2 py-0.5 rounded-md">From $300</span>
            </a>
            <a href="/service-ui-ux-figma.html" className="group p-4 rounded-2xl bg-white border border-purple-100 hover:border-brand-500 hover:shadow-md transition flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-brand-600 flex items-center justify-center text-lg shrink-0 group-hover:scale-105 transition">
                  <i className="fa-solid fa-pen-ruler" />
                </div>
                <div className="min-w-0">
                  <div className="font-display font-bold text-xs text-gray-900 group-hover:text-brand-600 transition truncate">
                    UI/UX Figma Design Systems
                  </div>
                  <div className="text-[11px] text-gray-500 truncate">High-converting prototypes</div>
                </div>
              </div>
              <span className="text-[11px] font-bold text-brand-600 shrink-0 bg-purple-50 px-2 py-0.5 rounded-md">From $200</span>
            </a>
          </div>
        </div>
        <div id="about" className="mt-20 scroll-mt-28">
          <div className="mb-10" data-anim="fade-up">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-600 block mb-1.5">ABOUT YANKEE
              TECH</span>
            <h2 className="font-display font-extrabold text-xl sm:text-2xl text-gray-900">A clear path from idea to launch.</h2>
            <p className="text-base text-gray-500 mt-1 max-w-xl">
              A transparent, sprint-based engineering model designed to deliver custom full-stack builds, AI agent
              automations, and frictionless GHL &amp; WordPress ecosystems.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div data-anim="fade-up" data-delay={1} className="relative flex flex-col justify-between p-4 rounded-2xl hover:bg-purple-50/40 transition">
              <div className="w-9 h-9 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-sm mb-4">
                <i className="fa-solid fa-magnifying-glass-chart" />
              </div>
              <div className="flex items-baseline gap-2.5 mb-1.5">
                <span className="font-display font-extrabold text-xl text-gray-900">01</span>
                <h3 className="font-display font-bold text-sm text-gray-900">Discover &amp; Architect</h3>
              </div>
              <p className="text-base text-gray-500 leading-relaxed pl-7">
                We audit your tech stack, map out GHL/WordPress workflows, and design a clear technical blueprint.
              </p>
              <div className="hidden lg:flex absolute top-1/2 -right-3 text-gray-400 text-xs">
              </div>
            </div>
            <div data-anim="fade-up" data-delay={2} className="relative flex flex-col justify-between p-4 rounded-2xl hover:bg-purple-50/40 transition">
              <div className="w-9 h-9 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-sm mb-4">
                <i className="fa-solid fa-code" />
              </div>
              <div className="flex items-baseline gap-2.5 mb-1.5">
                <span className="font-display font-extrabold text-xl text-gray-900">02</span>
                <h3 className="font-display font-bold text-sm text-gray-900">Design &amp; Full-Stack Build</h3>
              </div>
              <p className="text-base text-gray-500 leading-relaxed pl-7">
                We bring your vision to life with modern Figma UI/UX, clean full-stack or WordPress code, and custom APIs.
              </p>
              <div className="hidden lg:flex absolute top-1/2 -right-3 text-gray-400 text-xs">
              </div>
            </div>
            <div data-anim="fade-up" data-delay={3} className="relative flex flex-col justify-between p-4 rounded-2xl hover:bg-purple-50/40 transition">
              <div className="w-9 h-9 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-sm mb-4">
                <i className="fa-solid fa-gears" />
              </div>
              <div className="flex items-baseline gap-2.5 mb-1.5">
                <span className="font-display font-extrabold text-xl text-gray-900">03</span>
                <h3 className="font-display font-bold text-sm text-gray-900">Integrate AI &amp; Automate</h3>
              </div>
              <p className="text-base text-gray-500 leading-relaxed pl-7">
                We connect GoHighLevel pipelines, AI agents, webhooks, and speed-optimize every page for 95+ Core Web
                Vitals.
              </p>
              <div className="hidden lg:flex absolute top-1/2 -right-3 text-gray-400 text-xs">
              </div>
            </div>
            <div data-anim="fade-up" data-delay={4} className="relative flex flex-col justify-between p-4 rounded-2xl hover:bg-purple-50/40 transition">
              <div className="w-9 h-9 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-sm mb-4">
                <i className="fa-solid fa-rocket" />
              </div>
              <div className="flex items-baseline gap-2.5 mb-1.5">
                <span className="font-display font-extrabold text-xl text-gray-900">04</span>
                <h3 className="font-display font-bold text-sm text-gray-900">Launch &amp; Handover</h3>
              </div>
              <p className="text-base text-gray-500 leading-relaxed pl-7">
                We prepare your release, hand over the code and documentation, and agree the support you need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="use-cases" className="relative dark-cosmic-bg text-white pt-20 pb-24 overflow-hidden scroll-mt-16">
      <a id="industries" className="sr-only">Industries and Use Cases</a>
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1440 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 sm:h-12 preserve-3d" preserveAspectRatio="none">
          <path d="M0 0H1440V12H140C70 12 30 35 0 54V0Z" fill="#ffffff" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div className="opacity-100 visible">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400 block mb-1.5">USE CASES &amp;
              INDUSTRIES WE SERVE</span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              Solutions &amp; Use Cases for Every Vision
            </h2>
            <p className="text-base text-purple-200/70 mt-1">
              We partner with startups, e-commerce brands, SaaS founders, and marketing agencies worldwide.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a href="/use-cases.html" className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-brand-600 text-purple-200 hover:text-white border border-purple-400/30 text-xs font-semibold transition">
              <span>Explore All Use Cases</span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <a href="/use-case-startups.html" data-anim="fade-up" data-delay={1} className="industry-card group relative rounded-2xl overflow-hidden bg-[#180a33] border border-purple-500/20 h-[310px] flex flex-col justify-between p-5 transition block">
            <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=700&q=80" alt="Businesses and Startups" className="absolute inset-0 w-full h-full object-cover object-center opacity-55 group-hover:scale-105 transition duration-500" onerror="this.src='https://placehold.co/600x800/1a0936/c4a6ff?text=Startups'" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f0521]/95 via-[#130629]/55 to-[#0b0318]/90" />
            <div className="relative z-10 flex items-start justify-between gap-2">
              <div>
                <h3 className="font-display font-bold text-base text-white leading-snug">Businesses<br />&amp; Startups</h3>
                <p className="text-[11px] text-purple-200/80 mt-1.5">Custom Full-Stack MVPs &amp; WordPress sites for growing
                  brands.</p>
              </div>
              <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white text-xs group-hover:bg-brand-500 transition">
              </span>
            </div>
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-950/80 border border-purple-400/30 text-[10px] text-purple-200 font-medium">
                <i className="fa-solid fa-layer-group text-purple-400" /> Full-Stack &amp; WP
              </span>
            </div>
          </a>
          <a href="/use-case-ecommerce.html" data-anim="fade-up" data-delay={2} className="industry-card group relative rounded-2xl overflow-hidden bg-[#180a33] border border-purple-500/20 h-[310px] flex flex-col justify-between p-5 transition block">
            <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=80" alt="Ecommerce Stores" className="absolute inset-0 w-full h-full object-cover object-center opacity-55 group-hover:scale-105 transition duration-500" onerror="this.src='https://placehold.co/600x800/1a0936/c4a6ff?text=Ecommerce'" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f0521]/95 via-[#130629]/55 to-[#0b0318]/90" />
            <div className="relative z-10 flex items-start justify-between gap-2">
              <div>
                <h3 className="font-display font-bold text-base text-white leading-snug">Ecommerce<br />Stores</h3>
                <p className="text-[11px] text-purple-200/80 mt-1.5">Scalable WooCommerce &amp; custom stores with automated
                  cart recovery.</p>
              </div>
              <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white text-xs group-hover:bg-brand-500 transition">
              </span>
            </div>
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-950/80 border border-purple-400/30 text-[10px] text-purple-200 font-medium">
                <i className="fa-solid fa-cart-shopping text-purple-400" /> WooCommerce + Stripe
              </span>
            </div>
          </a>
          <a href="/use-case-saas-b2b.html" data-anim="fade-up" data-delay={3} className="industry-card group relative rounded-2xl overflow-hidden bg-[#180a33] border border-purple-500/20 h-[310px] flex flex-col justify-between p-5 transition block">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80" alt="SaaS & B2B Platforms" className="absolute inset-0 w-full h-full object-cover object-center opacity-55 group-hover:scale-105 transition duration-500" onerror="this.src='https://placehold.co/600x800/1a0936/c4a6ff?text=SaaS+Platforms'" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f0521]/95 via-[#130629]/55 to-[#0b0318]/90" />
            <div className="relative z-10 flex items-start justify-between gap-2">
              <div>
                <h3 className="font-display font-bold text-base text-white leading-snug">SaaS &amp; B2B<br />Enterprises</h3>
                <p className="text-[11px] text-purple-200/80 mt-1.5">Custom web portals, AI agents &amp; deep multi-system API
                  integrations.</p>
              </div>
              <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white text-xs group-hover:bg-brand-500 transition">
              </span>
            </div>
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-950/80 border border-purple-400/30 text-[10px] text-purple-200 font-medium">
                <i className="fa-solid fa-microchip text-purple-400" /> AI &amp; Custom APIs
              </span>
            </div>
          </a>
          <a href="/use-case-agencies.html" data-anim="fade-up" data-delay={4} className="industry-card group relative rounded-2xl overflow-hidden bg-[#180a33] border border-purple-500/20 h-[310px] flex flex-col justify-between p-5 transition block">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80" alt="Coaches and Agencies" className="absolute inset-0 w-full h-full object-cover object-center opacity-55 group-hover:scale-105 transition duration-500" onerror="this.src='https://placehold.co/600x800/1a0936/c4a6ff?text=Agencies'" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f0521]/95 via-[#130629]/55 to-[#0b0318]/90" />
            <div className="relative z-10 flex items-start justify-between gap-2">
              <div>
                <h3 className="font-display font-bold text-base text-white leading-snug">Coaches &amp;<br />Agencies</h3>
                <p className="text-[11px] text-purple-200/80 mt-1.5">GoHighLevel sub-account automation, funnels &amp;
                  WordPress sites to scale.</p>
              </div>
              <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white text-xs group-hover:bg-brand-500 transition">
              </span>
            </div>
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-950/80 border border-purple-400/30 text-[10px] text-purple-200 font-medium">
                <i className="fa-solid fa-bolt text-purple-400" /> GoHighLevel Pro
              </span>
            </div>
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1440 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 sm:h-12" preserveAspectRatio="none">
          <path d="M0 42H1300C1370 42 1410 19 1440 0V54H0V42Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
    <section id="portfolio" className="py-16 lg:py-24 bg-gradient-to-b from-white via-purple-50/25 to-white relative overflow-hidden scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div data-anim="fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-brand-700 text-[10px] font-bold uppercase tracking-widest mb-2.5">
              <i className="fa-solid fa-briefcase" />
              <span>SELECTED WORK</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-gray-900 tracking-tight">
              A closer look at our work.
            </h2>
            <p className="text-base text-base text-gray-500 max-w-xl leading-relaxed mt-2">
              Explore websites, storefronts and business platforms across different industries. See the project details and visit the live sites.
            </p>
          </div>
          <div data-anim="fade-up" data-delay={1} className="flex flex-col sm:flex-row sm:items-center gap-3">
            <a href="/portfolio.html" className="btn-purple magnetic-btn text-white text-xs font-semibold px-5 py-3 rounded-full inline-flex items-center justify-center gap-2 shadow-md">
              <span>View the portfolio</span>
            </a>
          </div>
        </div>
        <div data-anim="fade-up" className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <button type="button" onClick={(event) => { window.filterPortfolio('all', event.currentTarget); }} className="portfolio-filter-btn px-4 py-2 rounded-full text-xs font-bold bg-brand-600 text-white shadow-sm transition shrink-0 cursor-pointer">
            All Work (6)
          </button>
          <button type="button" onClick={(event) => { window.filterPortfolio('wordpress', event.currentTarget); }} className="portfolio-filter-btn px-4 py-2 rounded-full text-xs font-semibold bg-gray-100 hover:bg-purple-50 text-gray-700 transition shrink-0 cursor-pointer">
            WordPress &amp; Woo
          </button>
          <button type="button" onClick={(event) => { window.filterPortfolio('fullstack', event.currentTarget); }} className="portfolio-filter-btn px-4 py-2 rounded-full text-xs font-semibold bg-gray-100 hover:bg-purple-50 text-gray-700 transition shrink-0 cursor-pointer">
            Full-Stack SaaS
          </button>
          <button type="button" onClick={(event) => { window.filterPortfolio('ghl', event.currentTarget); }} className="portfolio-filter-btn px-4 py-2 rounded-full text-xs font-semibold bg-gray-100 hover:bg-purple-50 text-gray-700 transition shrink-0 cursor-pointer">
            GoHighLevel CRM
          </button>
          <button type="button" onClick={(event) => { window.filterPortfolio('ai', event.currentTarget); }} className="portfolio-filter-btn px-4 py-2 rounded-full text-xs font-semibold bg-gray-100 hover:bg-purple-50 text-gray-700 transition shrink-0 cursor-pointer">
            AI &amp; Automations
          </button>
        </div>
        <div id="portfolioGrid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div data-category="fullstack" className="portfolio-card bg-white rounded-3xl border border-purple-100 p-6 flex flex-col justify-between shadow-sm relative overflow-hidden group">
            <div className="case-art case-art-0" aria-hidden="true"><span>DRH</span><div className="case-art-shape" /></div>
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 to-indigo-600 absolute top-0 left-0" />
            <div>
              <div className="flex items-center justify-between gap-2 mb-3.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full font-mono">
                  Web App &amp; Portal
                </span>
                <span className="text-[10px] text-emerald-600 font-mono font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live in UK
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-brand-600 transition">
                Debt Recovery Hub
              </h3>
              <span className="text-xs text-gray-400 font-medium block mb-2.5">B2B Commercial Recovery Platform • UK</span>
              <p className="text-base text-gray-500 leading-relaxed mb-4">
                Custom enquiry matching engine connecting UK businesses with independent recovery agencies through multi-criteria debt evaluation and automated partner triage.
              </p>
              <div className="bg-gray-50 rounded-2xl p-3 border border-gray-100 mb-4 grid grid-cols-2 gap-2 text-center">
                <div>
                  <span className="block font-display font-extrabold text-sm text-gray-900">Lead intake</span>
                  <span className="block text-[9px] text-gray-500 uppercase tracking-tight">Enquiry workflow</span>
                </div>
                <div className="border-l border-gray-200">
                  <span className="block font-display font-extrabold text-sm text-emerald-600">100%</span>
                  <span className="block text-[9px] text-gray-500 uppercase tracking-tight">Automated Routing</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-5">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-100">Custom Web App</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-100">Lead Logic</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-100">UK Compliance</span>
              </div>
            </div>
            <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold">
              <a href="https://debtrecoveryhub.org/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 inline-flex items-center gap-1 transition">
                <span>Visit Live Site</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[9px]" />
              </a>
              <a href="/portfolio.html#debtrecoveryhub" className="text-gray-400 hover:text-gray-700 text-[11px] font-semibold">
                Read Brief →
              </a>
            </div>
          </div>
          <div data-category="fullstack" className="portfolio-card bg-white rounded-3xl border border-purple-100 p-6 flex flex-col justify-between shadow-sm relative overflow-hidden group">
            <div className="case-art case-art-1" aria-hidden="true"><span>ZERO</span><div className="case-art-shape" /></div>
            <div className="h-1.5 w-full bg-gradient-to-r from-purple-600 to-indigo-700 absolute top-0 left-0" />
            <div>
              <div className="flex items-center justify-between gap-2 mb-3.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-0.5 rounded-full font-mono">
                  Enterprise Tech
                </span>
                <span className="text-[10px] text-emerald-600 font-mono font-bold flex items-center gap-1">
                  <i className="fa-solid fa-shield" /> Leadenhall London
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-brand-600 transition">
                Zero Through Consultancy
              </h3>
              <span className="text-xs text-gray-400 font-medium block mb-2.5">Global IT &amp; Cyber Security • London, UK</span>
              <p className="text-base text-gray-500 leading-relaxed mb-4">
                High-performance corporate platform presenting enterprise SIEM/SOC services, penetration testing, and MDR solutions to UK &amp; European enterprise clients.
              </p>
              <div className="bg-gray-50 rounded-2xl p-3 border border-gray-100 mb-4 grid grid-cols-2 gap-2 text-center">
                <div>
                  <span className="block font-display font-extrabold text-sm text-emerald-600">Responsive</span>
                  <span className="block text-[9px] text-gray-500 uppercase tracking-tight">Website design</span>
                </div>
                <div className="border-l border-gray-200">
                  <span className="block font-display font-extrabold text-sm text-gray-900">Structured</span>
                  <span className="block text-[9px] text-gray-500 uppercase tracking-tight">Core Web Vitals</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-5">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-100">Enterprise UI</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-100">Tailwind CSS</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-100">Schema SEO</span>
              </div>
            </div>
            <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold">
              <a href="https://zerothrough.co.uk/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 inline-flex items-center gap-1 transition">
                <span>Visit Live Site</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[9px]" />
              </a>
              <a href="/portfolio.html#zerothrough" className="text-gray-400 hover:text-gray-700 text-[11px] font-semibold">
                Read Brief →
              </a>
            </div>
          </div>
          <div data-category="ghl" className="portfolio-card bg-white rounded-3xl border border-purple-100 p-6 flex flex-col justify-between shadow-sm relative overflow-hidden group">
            <div className="case-art case-art-2" aria-hidden="true"><span>CLAIM</span><div className="case-art-shape" /></div>
            <div className="h-1.5 w-full bg-gradient-to-r from-amber-500 to-orange-500 absolute top-0 left-0" />
            <div>
              <div className="flex items-center justify-between gap-2 mb-3.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full font-mono">
                  Claims Funnel &amp; CRM
                </span>
                <span className="text-[10px] text-brand-600 font-mono font-bold flex items-center gap-1">
                  High-Volume Funnel
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-brand-600 transition">
                ClaimFirst Car Finance Funnel
              </h3>
              <span className="text-xs text-gray-400 font-medium block mb-2.5">Legal Claims &amp; Motor Finance • UK</span>
              <p className="text-base text-gray-500 leading-relaxed mb-4">
                Multi-step eligibility funnel processing PCP/HP mis-sold car finance claims with real-time lender validation, signature capture, and automated CRM intake.
              </p>
              <div className="bg-gray-50 rounded-2xl p-3 border border-gray-100 mb-4 grid grid-cols-2 gap-2 text-center">
                <div>
                  <span className="block font-display font-extrabold text-sm text-amber-600">Multi-step</span>
                  <span className="block text-[9px] text-gray-500 uppercase tracking-tight">Enquiry form</span>
                </div>
                <div className="border-l border-gray-200">
                  <span className="block font-display font-extrabold text-sm text-gray-900">Real-Time</span>
                  <span className="block text-[9px] text-gray-500 uppercase tracking-tight">CRM Sync Engine</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-5">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-100">Multi-Step Form</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-100">GHL/CRM Webhooks</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-100">Conversion UX</span>
              </div>
            </div>
            <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold">
              <a href="https://mis-sold-car-finance.claimfirst.co.uk/home/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 inline-flex items-center gap-1 transition">
                <span>Visit Live Funnel</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[9px]" />
              </a>
              <a href="/portfolio.html#claimfirst" className="text-gray-400 hover:text-gray-700 text-[11px] font-semibold">
                Read Brief →
              </a>
            </div>
          </div>
          <div data-category="wordpress" className="portfolio-card bg-white rounded-3xl border border-purple-100 p-6 flex flex-col justify-between shadow-sm relative overflow-hidden group">
            <div className="case-art case-art-3" aria-hidden="true"><span>NEOLAV</span><div className="case-art-shape" /></div>
            <div className="h-1.5 w-full bg-gradient-to-r from-teal-500 to-emerald-600 absolute top-0 left-0" />
            <div>
              <div className="flex items-center justify-between gap-2 mb-3.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full font-mono">
                  Commercial Catalog
                </span>
                <span className="text-[10px] text-teal-600 font-mono font-bold flex items-center gap-1">
                  Australia Tenders
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-brand-600 transition">
                NeoLav Australia
              </h3>
              <span className="text-xs text-gray-400 font-medium block mb-2.5">Industrial Infrastructure • Western Australia</span>
              <p className="text-base text-gray-500 leading-relaxed mb-4">
                Modern commercial quotation portal showcasing portable sanitation infrastructure, mobile showers, and industrial trailers for mining and event procurement.
              </p>
              <div className="bg-gray-50 rounded-2xl p-3 border border-gray-100 mb-4 grid grid-cols-2 gap-2 text-center">
                <div>
                  <span className="block font-display font-extrabold text-sm text-gray-900">B2B Fleet</span>
                  <span className="block text-[9px] text-gray-500 uppercase tracking-tight">Online Catalog</span>
                </div>
                <div className="border-l border-gray-200">
                  <span className="block font-display font-extrabold text-sm text-emerald-600">Fast Quote</span>
                  <span className="block text-[9px] text-gray-500 uppercase tracking-tight">Tender Inquiries</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-5">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-100">Product Catalog</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-100">Quotation Flow</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-100">Speed Optimized</span>
              </div>
            </div>
            <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold">
              <a href="https://neolav.com.au/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 inline-flex items-center gap-1 transition">
                <span>Visit Live Site</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[9px]" />
              </a>
              <a href="/portfolio.html#neolav" className="text-gray-400 hover:text-gray-700 text-[11px] font-semibold">
                Read Brief →
              </a>
            </div>
          </div>
          <div data-category="wordpress" className="portfolio-card bg-white rounded-3xl border border-purple-100 p-6 flex flex-col justify-between shadow-sm relative overflow-hidden group">
            <div className="case-art case-art-4" aria-hidden="true"><span>SHU</span><div className="case-art-shape" /></div>
            <div className="h-1.5 w-full bg-gradient-to-r from-rose-500 to-pink-600 absolute top-0 left-0" />
            <div>
              <div className="flex items-center justify-between gap-2 mb-3.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded-full font-mono">
                  Bilingual Studio
                </span>
                <span className="text-[10px] text-rose-600 font-mono font-bold flex items-center gap-1">
                  Montreal, QC
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-brand-600 transition">
                L'Atelier Shu &amp; Co
              </h3>
              <span className="text-xs text-gray-400 font-medium block mb-2.5">Aesthetic Studio &amp; Treatments • Canada</span>
              <p className="text-base text-gray-500 leading-relaxed mb-4">
                High-end bilingual (French/English) studio web presence for laser and body contouring treatments, featuring treatment menus and online consultation booking.
              </p>
              <div className="bg-gray-50 rounded-2xl p-3 border border-gray-100 mb-4 grid grid-cols-2 gap-2 text-center">
                <div>
                  <span className="block font-display font-extrabold text-sm text-gray-900">FR / EN</span>
                  <span className="block text-[9px] text-gray-500 uppercase tracking-tight">Bilingual Architecture</span>
                </div>
                <div className="border-l border-gray-200">
                  <span className="block font-display font-extrabold text-sm text-rose-600">Online</span>
                  <span className="block text-[9px] text-gray-500 uppercase tracking-tight">Booking Flow</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-5">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-100">Luxury Branding</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-100">Bilingual i18n</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-100">Local SEO</span>
              </div>
            </div>
            <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold">
              <a href="https://lateliershu.ca/fr/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 inline-flex items-center gap-1 transition">
                <span>Visit Live Studio</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[9px]" />
              </a>
              <a href="/portfolio.html#lateliershu" className="text-gray-400 hover:text-gray-700 text-[11px] font-semibold">
                Read Brief →
              </a>
            </div>
          </div>
          <div data-category="wordpress" className="portfolio-card bg-white rounded-3xl border border-purple-100 p-6 flex flex-col justify-between shadow-sm relative overflow-hidden group">
            <div className="case-art case-art-5" aria-hidden="true"><span>GLOBARO</span><div className="case-art-shape" /></div>
            <div className="h-1.5 w-full bg-gradient-to-r from-violet-600 to-purple-600 absolute top-0 left-0" />
            <div>
              <div className="flex items-center justify-between gap-2 mb-3.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-violet-700 bg-violet-50 border border-violet-200 px-2.5 py-0.5 rounded-full font-mono">
                  E-Commerce
                </span>
                <span className="text-[10px] text-emerald-600 font-mono font-bold flex items-center gap-1">
                  Fast Checkout
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-brand-600 transition">
                Globaro Online Store
              </h3>
              <span className="text-xs text-gray-400 font-medium block mb-2.5">Global Retail &amp; Consumer Products</span>
              <p className="text-base text-gray-500 leading-relaxed mb-4">
                Lightweight mobile-first online storefront built for rapid product browsing, asset-optimized imagery, and seamless single-page checkout flow.
              </p>
              <div className="bg-gray-50 rounded-2xl p-3 border border-gray-100 mb-4 grid grid-cols-2 gap-2 text-center">
                <div>
                  <span className="block font-display font-extrabold text-sm text-emerald-600">Mobile</span>
                  <span className="block text-[9px] text-gray-500 uppercase tracking-tight">Storefront design</span>
                </div>
                <div className="border-l border-gray-200">
                  <span className="block font-display font-extrabold text-sm text-gray-900">Global</span>
                  <span className="block text-[9px] text-gray-500 uppercase tracking-tight">Payment Integration</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-5">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-100">E-Commerce</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-100">Mobile Checkout</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-100">Asset Caching</span>
              </div>
            </div>
            <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold">
              <a href="https://globaro.shop/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 inline-flex items-center gap-1 transition">
                <span>Visit Live Shop</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[9px]" />
              </a>
              <a href="/portfolio.html#globaro" className="text-gray-400 hover:text-gray-700 text-[11px] font-semibold">
                Read Brief →
              </a>
            </div>
          </div>
        </div>
        <div data-anim="fade-up" className="mt-12 rounded-3xl bg-gradient-to-r from-[#170833] via-[#120525] to-[#240a42] text-white p-6 sm:p-8 border border-purple-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-48 h-48 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="space-y-1 text-center md:text-left z-10">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono text-purple-300 font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>CUSTOM SOLUTIONS DELIVERED ON TIME</span>
            </div>
            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white">
              Need a high-impact platform or workflow built?
            </h3>
            <p className="text-base text-purple-200/80 max-w-lg">
              Explore our projects or use the estimator to plan an initial budget.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 z-10 shrink-0 w-full sm:w-auto">
            <a href="/portfolio.html" className="w-full sm:w-auto btn-purple text-white text-xs font-semibold px-6 py-3 rounded-full flex items-center justify-center gap-2 shadow-glow transition">
              <i className="fa-solid fa-folder-open text-xs" />
              <span>View Master Portfolio</span>
            </a>
            <a href="#estimator" className="w-full sm:w-auto px-5 py-3 rounded-full border border-purple-400/40 hover:bg-purple-800/40 text-purple-200 text-xs font-semibold flex items-center justify-center gap-2 transition">
              <i className="fa-solid fa-calculator text-xs" />
              <span>Calculate Cost</span>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section id="estimator" className="py-16 lg:py-24 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-[10px] font-bold uppercase tracking-widest mb-3">
              <i className="fa-solid fa-calculator text-xs" />
              <span>TRANSPARENT FEATURE-BASED PRICING</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-gray-900 tracking-tight">
              Interactive Project Price Estimator
            </h2>
            <p className="text-base text-base text-gray-600 mt-2 max-w-xl leading-relaxed">
              Choose a project type and the features you need to explore a starting budget. Your final quote and delivery dates are confirmed after we review the scope.
            </p>
          </div>
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-purple-50 border border-purple-100 text-gray-700 text-xs font-semibold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Milestone Payments: 30% / 30% / 40%</span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div data-anim="fade-right" className="lg:col-span-7 bg-[#faf8ff] border border-purple-100 rounded-3xl p-6 sm:p-8 space-y-8 shadow-card">
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="font-display font-bold text-sm text-gray-900 flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-brand-600 text-white text-xs flex items-center justify-center font-bold">1</span>
                  <span>Select Project Type</span>
                </label>
                <span className="text-[11px] text-brand-600 font-semibold font-mono">STEP 1 OF 2</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="serviceTrackButtons">
                <button type="button" onClick={(event) => { window.selectTrack('starter_mvp'); }} data-track="starter_mvp" className="track-btn text-left p-4 rounded-2xl border-2 border-brand-600 bg-white shadow-md transition flex items-start gap-3.5 ring-2 ring-brand-500/10">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-lg shrink-0 mt-0.5">
                    <i className="fa-solid fa-rocket" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-xs sm:text-sm text-gray-900 truncate">Starter SaaS MVP</span>
                      <span className="text-xs font-bold text-brand-600">From $2,200</span>
                    </div>
                    <p className="text-[11px] text-gray-500 mt-1 leading-snug">Core workflow, user auth &amp; admin panel (4–6 wks)</p>
                  </div>
                </button>
                <button type="button" onClick={(event) => { window.selectTrack('custom_app'); }} data-track="custom_app" className="track-btn text-left p-4 rounded-2xl border-2 border-purple-100 bg-white/70 hover:bg-white transition flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-lg shrink-0 mt-0.5">
                    <i className="fa-solid fa-laptop-code" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-xs sm:text-sm text-gray-900 truncate">Web App / Portal</span>
                      <span className="text-xs font-bold text-brand-600">From $2,500</span>
                    </div>
                    <p className="text-[11px] text-gray-500 mt-1 leading-snug">Client portal, roles &amp; custom dashboard (6–8 wks)</p>
                  </div>
                </button>
                <button type="button" onClick={(event) => { window.selectTrack('platform_saas'); }} data-track="platform_saas" className="track-btn text-left p-4 rounded-2xl border-2 border-purple-100 bg-white/70 hover:bg-white transition flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center text-lg shrink-0 mt-0.5">
                    <i className="fa-solid fa-cubes" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-xs sm:text-sm text-gray-900 truncate">Custom Platform</span>
                      <span className="text-xs font-bold text-brand-600">From $3,000</span>
                    </div>
                    <p className="text-[11px] text-gray-500 mt-1 leading-snug">Multi-tenant architecture, billing &amp; scaling (8–12 wks)</p>
                  </div>
                </button>
                <button type="button" onClick={(event) => { window.selectTrack('dedicated_dev'); }} data-track="dedicated_dev" className="track-btn text-left p-4 rounded-2xl border-2 border-purple-100 bg-white/70 hover:bg-white transition flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg shrink-0 mt-0.5">
                    <i className="fa-solid fa-user-check" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-xs sm:text-sm text-gray-900 truncate">Dedicated Dev</span>
                      <span className="text-xs font-bold text-brand-600">From $1,500/mo</span>
                    </div>
                    <p className="text-[11px] text-gray-500 mt-1 leading-snug">Senior full-stack engineer, 80h or 160h/mo</p>
                  </div>
                </button>
                <button type="button" onClick={(event) => { window.selectTrack('quick_solutions'); }} data-track="quick_solutions" className="sm:col-span-2 track-btn text-left p-3.5 rounded-2xl border-2 border-purple-100 bg-white/70 hover:bg-white transition flex items-center justify-between gap-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center text-sm">
                      <i className="fa-solid fa-bolt" />
                    </div>
                    <div>
                      <span className="font-display font-bold text-xs text-gray-900">Quick Solutions &amp; Integrations</span>
                      <span className="text-[11px] text-gray-500 block">GHL setup ($400), WP Launch ($400), 2-way sync ($500), AI bot ($300)</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-brand-600 bg-purple-50 px-2.5 py-1 rounded-md">From $400</span>
                </button>
              </div>
            </div>
            <div className="pt-2 border-t border-purple-100">
              <div className="flex items-center justify-between mb-4">
                <label className="font-display font-bold text-sm text-gray-900 flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-brand-600 text-white text-xs flex items-center justify-center font-bold">2</span>
                  <span>Toggle Feature Add-Ons</span>
                </label>
                <span className="text-[11px] text-gray-500">Add features to calculate scope</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="addonsGrid">
                <label className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-purple-100 hover:border-brand-300 transition cursor-pointer group shadow-xs">
                  <input type="checkbox" onChange={(event) => { window.updateEstimate(); }} data-name="User Accounts & Roles" data-cost={250} className="addon-check w-4 h-4 text-brand-600 rounded border-gray-300 focus:ring-brand-500 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-xs text-gray-900 group-hover:text-brand-600 transition">User Accounts &amp; Roles</span>
                      <span className="text-[11px] font-bold text-brand-600">+$250</span>
                    </div>
                    <p className="text-[11px] text-gray-500 mt-0.5">Auth, permissions, password reset &amp; profiles</p>
                  </div>
                </label>
                <label className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-purple-100 hover:border-brand-300 transition cursor-pointer group shadow-xs">
                  <input type="checkbox" onChange={(event) => { window.updateEstimate(); }} data-name="Admin Dashboard & CMS" data-cost={300} className="addon-check w-4 h-4 text-brand-600 rounded border-gray-300 focus:ring-brand-500 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-xs text-gray-900 group-hover:text-brand-600 transition">Admin Dashboard</span>
                      <span className="text-[11px] font-bold text-brand-600">+$300</span>
                    </div>
                    <p className="text-[11px] text-gray-500 mt-0.5">User management, metrics &amp; data CRUD</p>
                  </div>
                </label>
                <label className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-purple-100 hover:border-brand-300 transition cursor-pointer group shadow-xs">
                  <input type="checkbox" onChange={(event) => { window.updateEstimate(); }} data-name="Stripe Payments & Subscriptions" data-cost={150} className="addon-check w-4 h-4 text-brand-600 rounded border-gray-300 focus:ring-brand-500 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-xs text-gray-900 group-hover:text-brand-600 transition">Stripe Payments</span>
                      <span className="text-[11px] font-bold text-brand-600">+$150</span>
                    </div>
                    <p className="text-[11px] text-gray-500 mt-0.5">One-time checkouts, recurring billing &amp; webhooks</p>
                  </div>
                </label>
                <label className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-purple-100 hover:border-brand-300 transition cursor-pointer group shadow-xs">
                  <input type="checkbox" onChange={(event) => { window.updateEstimate(); }} data-name="Third-Party API Integration" data-cost={200} className="addon-check w-4 h-4 text-brand-600 rounded border-gray-300 focus:ring-brand-500 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-xs text-gray-900 group-hover:text-brand-600 transition">Third-Party API</span>
                      <span className="text-[11px] font-bold text-brand-600">+$200</span>
                    </div>
                    <p className="text-[11px] text-gray-500 mt-0.5">CRM, email, SMS, or external software sync</p>
                  </div>
                </label>
                <label className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-purple-100 hover:border-brand-300 transition cursor-pointer group shadow-xs">
                  <input type="checkbox" onChange={(event) => { window.updateEstimate(); }} data-name="Reporting & Analytics" data-cost={250} className="addon-check w-4 h-4 text-brand-600 rounded border-gray-300 focus:ring-brand-500 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-xs text-gray-900 group-hover:text-brand-600 transition">Reporting &amp; Analytics</span>
                      <span className="text-[11px] font-bold text-brand-600">+$250</span>
                    </div>
                    <p className="text-[11px] text-gray-500 mt-0.5">Data visualization, chart graphs &amp; PDF exports</p>
                  </div>
                </label>
                <label className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-purple-100 hover:border-brand-300 transition cursor-pointer group shadow-xs">
                  <input type="checkbox" onChange={(event) => { window.updateEstimate(); }} data-name="AI Feature (Chatbot / RAG)" data-cost={250} className="addon-check w-4 h-4 text-brand-600 rounded border-gray-300 focus:ring-brand-500 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-xs text-gray-900 group-hover:text-brand-600 transition">AI Assistant / Bot</span>
                      <span className="text-[11px] font-bold text-brand-600">+$250</span>
                    </div>
                    <p className="text-[11px] text-gray-500 mt-0.5">OpenAI GPT-4o RAG, smart prompt flows &amp; automation</p>
                  </div>
                </label>
                <label className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-purple-100 hover:border-brand-300 transition cursor-pointer group shadow-xs">
                  <input type="checkbox" onChange={(event) => { window.updateEstimate(); }} data-name="GoHighLevel 2-Way Sync" data-cost={250} className="addon-check w-4 h-4 text-brand-600 rounded border-gray-300 focus:ring-brand-500 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-xs text-gray-900 group-hover:text-brand-600 transition">GoHighLevel Integration</span>
                      <span className="text-[11px] font-bold text-brand-600">+$250</span>
                    </div>
                    <p className="text-[11px] text-gray-500 mt-0.5">Real-time bi-directional pipeline &amp; contact sync</p>
                  </div>
                </label>
                <label className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-purple-100 hover:border-brand-300 transition cursor-pointer group shadow-xs">
                  <input type="checkbox" onChange={(event) => { window.updateEstimate(); }} data-name="UI/UX Figma Design System" data-cost={200} className="addon-check w-4 h-4 text-brand-600 rounded border-gray-300 focus:ring-brand-500 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-xs text-gray-900 group-hover:text-brand-600 transition">UI/UX Design System</span>
                      <span className="text-[11px] font-bold text-brand-600">+$200</span>
                    </div>
                    <p className="text-[11px] text-gray-500 mt-0.5">Conversion-focused design &amp; responsive prototype</p>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div data-anim="fade-left" className="lg:col-span-5 sticky top-28">
            <div className="bg-gradient-to-br from-[#120727] via-[#1a083a] to-[#2b0c57] text-white rounded-3xl p-6 sm:p-8 border border-purple-500/30 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-44 h-44 bg-brand-500/25 rounded-full blur-3xl pointer-events-none">
              </div>
              <div className="border-b border-white/10 pb-4">
                <div className="flex items-center justify-between text-xs text-purple-300 font-mono mb-1">
                  <span>ESTIMATED INVESTMENT</span>
                  <span className="text-emerald-400 font-bold">±10% ESTIMATE</span>
                </div>
                <h3 id="summaryTrackTitle" className="font-display font-extrabold text-xl text-white">Starter SaaS MVP</h3>
                <p className="text-base text-purple-200/80 mt-1">Based on selected architecture &amp; feature set</p>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-purple-300 font-semibold mb-1">Estimated Price Range:</div>
                <div id="summaryTotalDisplay" className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                  $2,000 – $2,400
                </div>
                <div className="flex items-center gap-2 mt-2 text-xs text-purple-200/90">
                  <i className="fa-solid fa-clock text-brand-400" />
                  <span>Estimated Timeline: <strong id="summaryTimeline" className="text-white">4 to 6 Weeks</strong></span>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs">
                <div className="font-bold text-purple-200 flex items-center gap-2">
                  <i className="fa-solid fa-shield-halved text-emerald-400" />
                  <span>Payment in Milestones</span>
                </div>
                <p className="text-purple-200/75 leading-relaxed">
                  Fixed price confirmed after a free call. Pay in transparent stages: <strong>30% to start</strong>, <strong>30% at midpoint demo</strong>, and <strong>40% at launch</strong>.
                </p>
              </div>
              <div className="space-y-1.5 pt-2 border-t border-white/10">
                <div className="text-[11px] font-mono text-purple-300 uppercase tracking-wider mb-1">Scope Breakdown:</div>
                <div className="flex items-center justify-between text-xs text-purple-200/90 py-0.5">
                  <span id="breakdownBaseName" className="truncate">Starter MVP Core</span>
                  <span id="breakdownBaseCost" className="font-bold text-white">$2,200</span>
                </div>
                <div id="breakdownAddonsList" className="space-y-1" />
              </div>
              <div className="space-y-3 pt-2">
                <button type="button" onClick={(event) => { window.applyEstimateToContact(); }} className="w-full btn-purple magnetic-btn text-white font-display font-bold text-xs sm:text-sm py-4 px-6 rounded-full shadow-glow flex items-center justify-center gap-2">
                  <span>Book a Scoping Call With This Estimate</span>
                </button>
                <div className="flex items-center justify-between text-[11px] text-purple-300 px-1">
                  <button type="button" onClick={(event) => { window.resetEstimator(); }} className="hover:text-white underline transition">
                    Reset Selection
                  </button>
                  <a href="#contact" className="hover:text-emerald-300 transition flex items-center gap-1">
                    <i className="fa-solid fa-phone text-[10px]" />
                    <span>Not sure about budget? Free 30-min call</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="contact" className="relative contact-cosmic-bg text-white pt-20 pb-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1440 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 sm:h-12" preserveAspectRatio="none">
          <path d="M0 0H1440V12H140C70 12 30 35 0 54V0Z" fill="#ffffff" />
        </svg>
      </div>
      <svg className="pointer-events-none absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-100 450 C 300 200, 650 580, 1540 180" stroke="url(#gradWave)" strokeWidth={2} fill="none" />
        <path d="M-100 500 C 340 240, 700 610, 1540 230" stroke="url(#gradWave)" strokeWidth="1.5" fill="none" />
        <path d="M-100 550 C 380 280, 750 640, 1540 280" stroke="url(#gradWave)" strokeWidth={1} fill="none" />
        <defs>
          <linearGradient id="gradWave" x1={0} y1={0} x2={1} y2={0}>
            <stop offset="0%" stopColor="#a472ff" />
            <stop offset="50%" stopColor="#6e18f5" />
            <stop offset="100%" stopColor="#c4a6ff" />
          </linearGradient>
        </defs>
      </svg>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div data-anim="fade-right" className="lg:col-span-5 space-y-5">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-300 block">LET'S WORK
              TOGETHER</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white leading-tight">
              What would you like<br />to build next?
            </h2>
            <p className="text-base text-base text-purple-200/80 leading-relaxed max-w-md">
              Tell us what you are building, who it is for and where you need help. Start with your project type and we will help you define the next steps.
            </p>
            <ul className="space-y-3 pt-2 text-xs sm:text-sm text-purple-100">
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-brand-500 text-white flex items-center justify-center text-[10px]">
                  <i className="fa-solid fa-check" />
                </span>
                <span>Free Architecture &amp; Automation Consultation</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-brand-500 text-white flex items-center justify-center text-[10px]">
                  <i className="fa-solid fa-check" />
                </span>
                <span>On-Time Agile Milestone Delivery</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-brand-500 text-white flex items-center justify-center text-[10px]">
                  <i className="fa-solid fa-check" />
                </span>
                <span>Post-launch support and handover</span>
              </li>
            </ul>
          </div>
          <div data-anim="fade-left" className="lg:col-span-7">
            <div className="bg-white text-gray-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-purple-100 max-w-2xl lg:ml-auto">
              <div className="mb-5 pb-5 border-b border-purple-100">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-600 bg-purple-100 px-2.5 py-0.5 rounded-full">2026 Interactive Onboarding</span>
                  <span className="text-[11px] font-mono font-bold text-gray-400">Step <span id="currentStepNumberDisplay">1</span> of 4</span>
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900">Start Your Project Journey</h3>
                <p className="text-base text-gray-500 mt-0.5">Share your goals, scope and preferred timeline.</p>
                <div className="mt-4">
                  <div className="w-full bg-purple-100/70 h-2 rounded-full overflow-hidden">
                    <div id="multiStepProgressFill" className="bg-gradient-to-r from-brand-600 via-purple-500 to-indigo-600 h-full rounded-full transition-all duration-300" style={{width: '0%'}} />
                  </div>
                  <div className="grid grid-cols-4 gap-1 mt-2.5">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span id="stepDot-1" className="w-7 h-7 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold shadow-glow ring-2 ring-purple-300">1</span>
                      <span id="stepTitle-1" className="hidden sm:block text-[11px] font-bold text-gray-900">Service</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 justify-center sm:justify-start">
                      <span id="stepDot-2" className="w-7 h-7 rounded-full bg-purple-100 text-purple-400 flex items-center justify-center text-xs font-semibold">2</span>
                      <span id="stepTitle-2" className="hidden sm:block text-[11px] font-medium text-gray-400">Scope</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 justify-center sm:justify-start">
                      <span id="stepDot-3" className="w-7 h-7 rounded-full bg-purple-100 text-purple-400 flex items-center justify-center text-xs font-semibold">3</span>
                      <span id="stepTitle-3" className="hidden sm:block text-[11px] font-medium text-gray-400">Features</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 justify-end sm:justify-start">
                      <span id="stepDot-4" className="w-7 h-7 rounded-full bg-purple-100 text-purple-400 flex items-center justify-center text-xs font-semibold">4</span>
                      <span id="stepTitle-4" className="hidden sm:block text-[11px] font-medium text-gray-400">Launch</span>
                    </div>
                  </div>
                </div>
              </div>
              <div id="multiStepEstimateBanner" className="hidden mb-4 p-3 rounded-2xl bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 text-purple-900 text-xs flex items-center justify-between">
                <div className="flex items-center gap-2 min-w-0">
                  <i className="fa-solid fa-calculator text-brand-600 shrink-0" />
                  <span id="multiStepEstimateText" className="font-semibold truncate">Estimate attached from Hero Calculator</span>
                </div>
                <button type="button" onClick={(event) => { window.clearMultiStepEstimate(); }} className="text-[11px] text-purple-600 hover:text-purple-900 font-bold underline shrink-0 ml-2">Clear</button>
              </div>
              <form id="multiStepFormWrapper" onSubmit={(event) => { window.handleMultiStepFormSubmit(event); }}>
                <div id="multiStepPane-1" className="ms-step-pane space-y-3.5">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display font-bold text-sm text-gray-900">1. Select Your Core Project Goal</h4>
                    <span className="text-[10px] text-gray-400 font-mono">1 OF 4</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div onClick={(event) => { window.selectMultiStepService('wordpress', 'WordPress & WooCommerce'); }} data-ms-svc="wordpress" className="ms-service-card p-3 sm:p-3.5 rounded-2xl border-2 border-brand-600 bg-purple-50/80 shadow-sm cursor-pointer transition flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-sm shrink-0">
                        <i className="fa-brands fa-wordpress" />
                      </div>
                      <div className="min-w-0">
                        <h5 className="font-display font-bold text-xs text-gray-900">WordPress &amp; WooCommerce</h5>
                        <p className="text-[10px] text-gray-500 leading-tight mt-0.5">Custom themes, Elementor, high speed &amp; store checkout</p>
                      </div>
                    </div>
                    <div onClick={(event) => { window.selectMultiStepService('fullstack', 'Full-Stack Web App (Laravel / React)'); }} data-ms-svc="fullstack" className="ms-service-card p-3 sm:p-3.5 rounded-2xl border border-gray-200 bg-white hover:border-purple-300 hover:bg-purple-50/30 shadow-xs cursor-pointer transition flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-sm shrink-0">
                        <i className="fa-brands fa-laravel" />
                      </div>
                      <div className="min-w-0">
                        <h5 className="font-display font-bold text-xs text-gray-900">Full-Stack Web App</h5>
                        <p className="text-[10px] text-gray-500 leading-tight mt-0.5">Laravel, React, Next.js, scalable SaaS architectures</p>
                      </div>
                    </div>
                    <div onClick={(event) => { window.selectMultiStepService('ghl', 'GoHighLevel CRM & Automations'); }} data-ms-svc="ghl" className="ms-service-card p-3 sm:p-3.5 rounded-2xl border border-gray-200 bg-white hover:border-purple-300 hover:bg-purple-50/30 shadow-xs cursor-pointer transition flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-sm shrink-0">
                        <i className="fa-solid fa-filter-circle-dollar" />
                      </div>
                      <div className="min-w-0">
                        <h5 className="font-display font-bold text-xs text-gray-900">GoHighLevel Setup &amp; CRM</h5>
                        <p className="text-[10px] text-gray-500 leading-tight mt-0.5">Custom funnels, snapshots, SMS/Email nurturing &amp; pipelines</p>
                      </div>
                    </div>
                    <div onClick={(event) => { window.selectMultiStepService('ai', 'AI Agents, Chatbots & Automation'); }} data-ms-svc="ai" className="ms-service-card p-3 sm:p-3.5 rounded-2xl border border-gray-200 bg-white hover:border-purple-300 hover:bg-purple-50/30 shadow-xs cursor-pointer transition flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-sm shrink-0">
                        <i className="fa-solid fa-robot" />
                      </div>
                      <div className="min-w-0">
                        <h5 className="font-display font-bold text-xs text-gray-900">AI Agents &amp; Automation</h5>
                        <p className="text-[10px] text-gray-500 leading-tight mt-0.5">24/7 custom RAG bots, Voice AI receptionists, n8n &amp; Make</p>
                      </div>
                    </div>
                    <div onClick={(event) => { window.selectMultiStepService('sync', '2-Way GHL + WordPress Integration'); }} data-ms-svc="sync" className="ms-service-card p-3 sm:p-3.5 rounded-2xl border border-gray-200 bg-white hover:border-purple-300 hover:bg-purple-50/30 shadow-xs cursor-pointer transition flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-sm shrink-0">
                        <i className="fa-solid fa-arrows-rotate" />
                      </div>
                      <div className="min-w-0">
                        <h5 className="font-display font-bold text-xs text-gray-900">2-Way GHL + WordPress Sync</h5>
                        <p className="text-[10px] text-gray-500 leading-tight mt-0.5">Real-time webhook sync, single sign-on &amp; custom data mapping</p>
                      </div>
                    </div>
                    <div onClick={(event) => { window.selectMultiStepService('agency', 'White-Label Dedicated Agency Engineering'); }} data-ms-svc="agency" className="ms-service-card p-3 sm:p-3.5 rounded-2xl border border-gray-200 bg-white hover:border-purple-300 hover:bg-purple-50/30 shadow-xs cursor-pointer transition flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-sm shrink-0">
                        <i className="fa-solid fa-layer-group" />
                      </div>
                      <div className="min-w-0">
                        <h5 className="font-display font-bold text-xs text-gray-900">White-Label Dedicated Team</h5>
                        <p className="text-[10px] text-gray-500 leading-tight mt-0.5">Dedicated monthly engineering sprint capacity for agencies</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="multiStepPane-2" className="ms-step-pane hidden space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display font-bold text-sm text-gray-900">2. Define Scope &amp; Target Budget</h4>
                    <span className="text-[10px] text-gray-400 font-mono">2 OF 4</span>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-600 mb-2">Project Scale / Size:</label>
                    <div className="grid grid-cols-3 gap-2.5">
                      <div onClick={(event) => { window.selectMultiStepScope('starter', 'MVP / Starter (1-5 Pages)'); }} data-ms-scope="starter" className="ms-scope-card p-3 rounded-xl border-2 border-brand-600 bg-purple-50/80 shadow-xs cursor-pointer transition text-center">
                        <span className="block text-xs font-bold text-gray-900">Starter MVP</span>
                        <span className="block text-[10px] text-gray-500 mt-0.5">1–5 Pages</span>
                      </div>
                      <div onClick={(event) => { window.selectMultiStepScope('growth', 'Growth & Scale (6-15 Pages)'); }} data-ms-scope="growth" className="ms-scope-card p-3 rounded-xl border border-gray-200 bg-white hover:border-purple-300 cursor-pointer transition text-center">
                        <span className="block text-xs font-bold text-gray-900">Growth</span>
                        <span className="block text-[10px] text-gray-500 mt-0.5">6–15 Pages</span>
                      </div>
                      <div onClick={(event) => { window.selectMultiStepScope('enterprise', 'Enterprise Custom Platform'); }} data-ms-scope="enterprise" className="ms-scope-card p-3 rounded-xl border border-gray-200 bg-white hover:border-purple-300 cursor-pointer transition text-center">
                        <span className="block text-xs font-bold text-gray-900">Enterprise</span>
                        <span className="block text-[10px] text-gray-500 mt-0.5">Custom Platform</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-600 mb-2">Estimated Investment Tier (USD):</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <button type="button" onClick={(event) => { window.selectMultiStepBudget('<1k', '< $1,000'); }} data-ms-budget="<1k" className="ms-budget-btn py-2 px-3 rounded-xl border border-gray-200 bg-gray-50 hover:bg-purple-50 text-gray-700 font-medium text-xs transition">
                        &lt; $1,000
                      </button>
                      <button type="button" onClick={(event) => { window.selectMultiStepBudget('1k-3k', '$1,000 – $3,000'); }} data-ms-budget="1k-3k" className="ms-budget-btn py-2 px-3 rounded-xl border-2 border-brand-600 bg-brand-600 text-white font-bold text-xs shadow-xs transition">
                        $1k – $3k
                      </button>
                      <button type="button" onClick={(event) => { window.selectMultiStepBudget('3k-7k', '$3,000 – $7,500'); }} data-ms-budget="3k-7k" className="ms-budget-btn py-2 px-3 rounded-xl border border-gray-200 bg-gray-50 hover:bg-purple-50 text-gray-700 font-medium text-xs transition">
                        $3k – $7.5k
                      </button>
                      <button type="button" onClick={(event) => { window.selectMultiStepBudget('7k+', '$7,500+'); }} data-ms-budget="7k+" className="ms-budget-btn py-2 px-3 rounded-xl border border-gray-200 bg-gray-50 hover:bg-purple-50 text-gray-700 font-medium text-xs transition">
                        $7,500+
                      </button>
                    </div>
                  </div>
                </div>
                <div id="multiStepPane-3" className="ms-step-pane hidden space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display font-bold text-sm text-gray-900">3. Timeline &amp; Key Priorities</h4>
                    <span className="text-[10px] text-gray-400 font-mono">3 OF 4</span>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-600 mb-2">Target Launch Timeline:</label>
                    <div className="grid grid-cols-3 gap-2">
                      <button type="button" onClick={(event) => { window.selectMultiStepTimeline('2w', 'Within 2 Weeks'); }} data-ms-timeline="2w" className="ms-timeline-btn py-2 px-3 rounded-xl border-2 border-brand-600 bg-brand-600 text-white font-bold text-xs shadow-xs transition">
                        Within 2 Wks
                      </button>
                      <button type="button" onClick={(event) => { window.selectMultiStepTimeline('1m', '3 to 6 Weeks'); }} data-ms-timeline="1m" className="ms-timeline-btn py-2 px-3 rounded-xl border border-gray-200 bg-gray-50 hover:bg-purple-50 text-gray-700 font-medium text-xs transition">
                        3–6 Weeks
                      </button>
                      <button type="button" onClick={(event) => { window.selectMultiStepTimeline('flexible', 'Flexible / Planning'); }} data-ms-timeline="flexible" className="ms-timeline-btn py-2 px-3 rounded-xl border border-gray-200 bg-gray-50 hover:bg-purple-50 text-gray-700 font-medium text-xs transition">
                        Flexible
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-600 mb-2">Must-Have Superpowers (Click to toggle):</label>
                    <div className="flex flex-wrap gap-2">
                      <span onClick={(event) => { window.toggleMultiStepPriority('Sub-Second PageSpeed SLA', event.currentTarget); }} className="ms-priority-chip py-1.5 px-3 rounded-full border border-brand-500 bg-purple-100 text-brand-700 font-bold text-[11px] cursor-pointer transition">
                        <i className="fa-solid fa-bolt text-brand-600 mr-1" /> Sub-Second PageSpeed (95+)
                      </span>
                      <span onClick={(event) => { window.toggleMultiStepPriority('Automated CRM Pipelines', event.currentTarget); }} className="ms-priority-chip py-1.5 px-3 rounded-full border border-gray-200 bg-gray-50 text-gray-600 text-[11px] font-medium cursor-pointer transition">
                        <i className="fa-solid fa-filter-circle-dollar text-gray-500 mr-1" /> CRM Pipelines
                      </span>
                      <span onClick={(event) => { window.toggleMultiStepPriority('Custom Figma UI/UX', event.currentTarget); }} className="ms-priority-chip py-1.5 px-3 rounded-full border border-gray-200 bg-gray-50 text-gray-600 text-[11px] font-medium cursor-pointer transition">
                        <i className="fa-brands fa-figma text-gray-500 mr-1" /> Custom Figma UI/UX
                      </span>
                      <span onClick={(event) => { window.toggleMultiStepPriority('24/7 AI Receptionist', event.currentTarget); }} className="ms-priority-chip py-1.5 px-3 rounded-full border border-gray-200 bg-gray-50 text-gray-600 text-[11px] font-medium cursor-pointer transition">
                        <i className="fa-solid fa-headset text-gray-500 mr-1" /> 24/7 AI Receptionist
                      </span>
                      <span onClick={(event) => { window.toggleMultiStepPriority('Stripe Global Checkout', event.currentTarget); }} className="ms-priority-chip py-1.5 px-3 rounded-full border border-gray-200 bg-gray-50 text-gray-600 text-[11px] font-medium cursor-pointer transition">
                        <i className="fa-brands fa-stripe text-gray-500 mr-1" /> Stripe Checkout
                      </span>
                      <span onClick={(event) => { window.toggleMultiStepPriority('2-Way Live Sync', event.currentTarget); }} className="ms-priority-chip py-1.5 px-3 rounded-full border border-gray-200 bg-gray-50 text-gray-600 text-[11px] font-medium cursor-pointer transition">
                        <i className="fa-solid fa-arrows-rotate text-gray-500 mr-1" /> 2-Way Live Sync
                      </span>
                    </div>
                  </div>
                </div>
                <div id="multiStepPane-4" className="ms-step-pane hidden space-y-3.5">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display font-bold text-sm text-gray-900">4. Contact Details &amp; Brief</h4>
                    <span className="text-[10px] text-gray-400 font-mono">4 OF 4</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-700 mb-1">Your Full Name *</label>
                      <input type="text" id="msName" required placeholder="Alex Mitchell" className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-base text-gray-900 focus:outline-none focus:border-brand-500 focus:bg-white transition" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-700 mb-1">Work Email *</label>
                      <input type="email" id="msEmail" required placeholder="alex@company.com" className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-base text-gray-900 focus:outline-none focus:border-brand-500 focus:bg-white transition" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-700 mb-1">WhatsApp / Phone Number</label>
                    <input type="tel" id="msPhone" placeholder="+1 (555) 000-0000" className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-base text-gray-900 focus:outline-none focus:border-brand-500 focus:bg-white transition" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-700 mb-1">Project Notes &amp; Specific Requirements</label>
                    <textarea id="msNotes" rows={3} placeholder="Tell us about your current stack, pain points, or specific custom integrations needed..." className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-base text-gray-900 focus:outline-none focus:border-brand-500 focus:bg-white transition" defaultValue={""} />
                  </div>
                </div>
                <div className="pt-5 mt-5 border-t border-purple-100 flex items-center justify-between gap-3">
                  <button type="button" id="multiStepPrevBtn" onClick={(event) => { window.prevMultiStep(); }} className="hidden px-4 py-2.5 rounded-full border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-400 text-xs font-semibold transition flex items-center gap-1.5">
                    <i className="fa-solid fa-arrow-left text-[10px]" />
                    <span>Back</span>
                  </button>
                  <div className="ml-auto flex items-center gap-3">
                    <button type="button" id="multiStepNextBtn" onClick={(event) => { window.nextMultiStep(); }} className="btn-purple magnetic-btn text-white text-xs font-semibold px-6 py-2.5 rounded-full inline-flex items-center gap-2 shadow-md">
                      <span>Continue to Next Step</span>
                    </button>
                    <button type="submit" id="multiStepSubmitBtn" className="hidden btn-purple magnetic-btn text-white text-xs font-semibold px-7 py-2.5 rounded-full inline-flex items-center gap-2 shadow-md">
                      <span>Submit Project Request</span>
                      <i className="fa-solid fa-paper-plane text-[10px]" />
                    </button>
                  </div>
                </div>
              </form>
              <div id="multiStepSuccessScreen" className="hidden text-center py-6 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl shadow-inner">
                  <i className="fa-solid fa-circle-check" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-extrabold text-xl text-gray-900">Project Brief Received!</h4>
                  <p className="text-base text-gray-500 max-w-sm mx-auto">
                    We have locked in your project parameters. A senior solutions architect will contact you within 24 hours.
                  </p>
                </div>
                <div className="max-w-md mx-auto p-4 rounded-2xl bg-purple-50/80 border border-purple-200 text-left space-y-1.5">
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-purple-700">Scope Parameters Summary</div>
                  <div id="msSubmittedSummary" className="text-xs text-purple-950 font-medium" />
                </div>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto btn-purple text-white text-xs font-semibold px-5 py-2.5 rounded-full inline-flex items-center justify-center gap-2 shadow-md">
                    <i className="fa-regular fa-calendar-check" />
                    <span>Book 15-Min Strategy Call</span>
                  </a>
                  <button type="button" onClick={(event) => { location.reload(); }} className="w-full sm:w-auto px-4 py-2.5 rounded-full border border-gray-200 text-gray-600 hover:text-gray-900 text-xs font-medium transition">
                    Submit Another Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1440 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 sm:h-12" preserveAspectRatio="none">
          <path d="M0 42H1300C1370 42 1410 19 1440 0V54H0V42Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
    <section id="faq" className="py-16 lg:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div data-anim="fade-right" className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-[10px] font-bold uppercase tracking-widest mb-3">
                <i className="fa-solid fa-circle-question text-xs" />
                <span>TRANSPARENT ANSWERS</span>
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-gray-900 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-base text-base text-gray-600 mt-3 max-w-sm leading-relaxed">
                Everything you need to know about pricing, milestone delivery, code ownership, tech stack, and post-launch support.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-purple-50/60 border border-purple-100 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center text-sm">
                  <i className="fa-solid fa-comments" />
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-gray-900">Have a specific question?</div>
                  <div className="text-[11px] text-gray-500">Book a free 30-min scoping call with our lead developer.</div>
                </div>
              </div>
              <a href="#contact" className="w-full btn-purple magnetic-btn text-white text-xs font-semibold py-3 px-5 rounded-full inline-flex items-center justify-center gap-2 shadow-sm">
                <span>Book a Free Technical Consultation</span>
              </a>
            </div>
          </div>
          <div data-anim="fade-left" className="lg:col-span-7 divide-y divide-purple-100 border-t border-b border-purple-100" id="faqContainer">
            <div className="py-4 sm:py-5">
              <button type="button" onClick={(event) => { window.toggleFaq(0); }} className="w-full flex items-center justify-between text-left font-display font-bold text-xs sm:text-sm text-gray-900 hover:text-brand-600 transition gap-4">
                <span>How much does a custom web application cost?</span>
                <span className="w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                  <i id="faq-icon-0" className="fa-solid fa-plus text-xs text-brand-600 transition-transform" />
                </span>
              </button>
              <div id="faq-body-0" className="hidden pt-3 text-xs sm:text-sm text-gray-600 leading-relaxed space-y-2">
                <p>A starter MVP typically starts from <strong>$2,200</strong>. Business web apps and client portals start from <strong>$3,800</strong>, and custom platforms from <strong>$8,000</strong>.</p>
                <p>The final fixed price depends on features and integrations, and we confirm it after a free consultation and a short scoping phase. Payments are split into milestones: 30% to start, 30% at midpoint, and 40% at launch.</p>
              </div>
            </div>
            <div className="py-4 sm:py-5">
              <button type="button" onClick={(event) => { window.toggleFaq(1); }} className="w-full flex items-center justify-between text-left font-display font-bold text-xs sm:text-sm text-gray-900 hover:text-brand-600 transition gap-4">
                <span>How long does it take to build a custom web app?</span>
                <span className="w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                  <i id="faq-icon-1" className="fa-solid fa-plus text-xs text-brand-600 transition-transform" />
                </span>
              </button>
              <div id="faq-body-1" className="hidden pt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <p>Starter MVPs typically take <strong>4 to 6 weeks</strong>. Larger applications take <strong>8 to 16 weeks</strong> depending on scope. We share a clear milestone timeline before development starts, with working weekly demos so you see continuous progress.</p>
              </div>
            </div>
            <div className="py-4 sm:py-5">
              <button type="button" onClick={(event) => { window.toggleFaq(2); }} className="w-full flex items-center justify-between text-left font-display font-bold text-xs sm:text-sm text-gray-900 hover:text-brand-600 transition gap-4">
                <span>Who owns the code and the accounts?</span>
                <span className="w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                  <i id="faq-icon-2" className="fa-solid fa-plus text-xs text-brand-600 transition-transform" />
                </span>
              </button>
              <div id="faq-body-2" className="hidden pt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <p><strong>You do. 100%.</strong> We hand over the full GitHub source code repository, documentation, deployment credentials and all third-party service accounts at launch. There is zero vendor lock-in.</p>
              </div>
            </div>
            <div className="py-4 sm:py-5">
              <button type="button" onClick={(event) => { window.toggleFaq(3); }} className="w-full flex items-center justify-between text-left font-display font-bold text-xs sm:text-sm text-gray-900 hover:text-brand-600 transition gap-4">
                <span>What technologies do you use?</span>
                <span className="w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                  <i id="faq-icon-3" className="fa-solid fa-plus text-xs text-brand-600 transition-transform" />
                </span>
              </button>
              <div id="faq-body-3" className="hidden pt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <p>We build with <strong>Laravel, React, Next.js, and Node.js</strong>, using PostgreSQL or MySQL, Redis caching, REST and GraphQL APIs, and cloud hosting such as AWS. We choose what fits your project and scale, not just what is trendy.</p>
              </div>
            </div>
            <div className="py-4 sm:py-5">
              <button type="button" onClick={(event) => { window.toggleFaq(4); }} className="w-full flex items-center justify-between text-left font-display font-bold text-xs sm:text-sm text-gray-900 hover:text-brand-600 transition gap-4">
                <span>Do you work with US clients and US time zones?</span>
                <span className="w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                  <i id="faq-icon-4" className="fa-solid fa-plus text-xs text-brand-600 transition-transform" />
                </span>
              </button>
              <div id="faq-body-4" className="hidden pt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <p><strong>Yes.</strong> We schedule calls in your time zone (EST, CST, PST, and GMT) and maintain dedicated daily overlap hours every working day. We reply to messages and tickets promptly within 2 to 4 business hours.</p>
              </div>
            </div>
            <div className="py-4 sm:py-5">
              <button type="button" onClick={(event) => { window.toggleFaq(5); }} className="w-full flex items-center justify-between text-left font-display font-bold text-xs sm:text-sm text-gray-900 hover:text-brand-600 transition gap-4">
                <span>Do you sign NDAs?</span>
                <span className="w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                  <i id="faq-icon-5" className="fa-solid fa-plus text-xs text-brand-600 transition-transform" />
                </span>
              </button>
              <div id="faq-body-5" className="hidden pt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <p><strong>Yes.</strong> We sign a binding mutual Non-Disclosure Agreement (NDA) before you share your proprietary concept, technical specs, or existing codebase. We also provide strict white-label agreements for agency partners.</p>
              </div>
            </div>
            <div className="py-4 sm:py-5">
              <button type="button" onClick={(event) => { window.toggleFaq(6); }} className="w-full flex items-center justify-between text-left font-display font-bold text-xs sm:text-sm text-gray-900 hover:text-brand-600 transition gap-4">
                <span>What happens after launch?</span>
                <span className="w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                  <i id="faq-icon-6" className="fa-solid fa-plus text-xs text-brand-600 transition-transform" />
                </span>
              </button>
              <div id="faq-body-6" className="hidden pt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <p>Every project includes <strong>30 days of comprehensive post-launch warranty &amp; bug-fix support</strong> at no extra charge. After that, you can choose an ongoing monthly maintenance plan or a flexible pack of development hours as your platform scales.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="blog" className="py-16 lg:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-[10px] font-bold uppercase tracking-widest mb-3">
              <i className="fa-solid fa-newspaper text-xs" />
              <span>ENGINEERING &amp; ARCHITECTURE GUIDES</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-gray-900 tracking-tight">Latest Articles &amp; Insights</h2>
            <p className="text-base text-base text-gray-600 mt-2 max-w-lg">
              Practical engineering playbooks on SaaS MVP budgeting, GoHighLevel API integrations, and modern full-stack architectures.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a href="/blog-hire-dedicated-developer.html" className="px-4 py-2 rounded-full border border-purple-200 hover:border-brand-600 text-xs font-semibold text-gray-700 hover:text-brand-600 inline-flex items-center gap-1.5 transition bg-purple-50/50">
              <span>Hiring Guide: Dedicated Developers</span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <article data-anim="fade-up" data-delay={1} className="blog-card rounded-3xl bg-[#faf8ff] border border-purple-100 overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="h-48 overflow-hidden bg-gradient-to-br from-[#1b083b] to-[#2d0f5c] p-6 flex flex-col justify-between relative">
                <div className="flex items-center justify-between z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-purple-200 bg-white/10 px-2.5 py-1 rounded-full">
                    SAAS &amp; FULL-STACK
                  </span>
                  <span className="text-xs text-purple-300 font-mono">3 min read</span>
                </div>
                <div className="z-10">
                  <i className="fa-solid fa-calculator text-3xl text-purple-400 group-hover:scale-110 transition duration-300" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-base sm:text-lg text-gray-900 leading-snug mb-3 group-hover:text-brand-600 transition">
                  <a href="/blog-saas-mvp-cost.html">Planning Your SaaS MVP Budget</a>
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  Define your first release, understand the starting budget and plan the handover.
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-2 border-t border-purple-100/60 flex items-center justify-between">
              <span className="text-[11px] text-gray-400 font-medium">November 2026</span>
              <a href="/blog-saas-mvp-cost.html" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 group-hover:gap-2.5 transition-all">
                <span>Read Full Article</span>
              </a>
            </div>
          </article>
          <article data-anim="fade-up" data-delay={2} className="blog-card rounded-3xl bg-[#faf8ff] border border-purple-100 overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="h-48 overflow-hidden bg-gradient-to-br from-[#0e1c36] to-[#132f5d] p-6 flex flex-col justify-between relative">
                <div className="flex items-center justify-between z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-sky-200 bg-white/10 px-2.5 py-1 rounded-full">
                    GHL &amp; INTEGRATIONS
                  </span>
                  <span className="text-xs text-sky-300 font-mono">3 min read</span>
                </div>
                <div className="z-10">
                  <i className="fa-solid fa-plug-circle-bolt text-3xl text-sky-400 group-hover:scale-110 transition duration-300" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-base sm:text-lg text-gray-900 leading-snug mb-3 group-hover:text-brand-600 transition">
                  <a href="/blog-gohighlevel-api.html">Planning a GoHighLevel Integration</a>
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  Map your data, plan for failures and scope a connection between your website and CRM.
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-2 border-t border-purple-100/60 flex items-center justify-between">
              <span className="text-[11px] text-gray-400 font-medium">November 2026</span>
              <a href="/blog-gohighlevel-api.html" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 group-hover:gap-2.5 transition-all">
                <span>Read Full Article</span>
              </a>
            </div>
          </article>
          <article data-anim="fade-up" data-delay={3} className="blog-card rounded-3xl bg-[#faf8ff] border border-purple-100 overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="h-48 overflow-hidden bg-gradient-to-br from-[#270b20] to-[#45103a] p-6 flex flex-col justify-between relative">
                <div className="flex items-center justify-between z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-rose-200 bg-white/10 px-2.5 py-1 rounded-full">
                    ARCHITECTURE &amp; TECH
                  </span>
                  <span className="text-xs text-rose-300 font-mono">3 min read</span>
                </div>
                <div className="z-10">
                  <i className="fa-brands fa-laravel text-3xl text-red-400 group-hover:scale-110 transition duration-300" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-base sm:text-lg text-gray-900 leading-snug mb-3 group-hover:text-brand-600 transition">
                  <a href="/blog-laravel-vs-nodejs.html">Laravel or Node.js for Your Business Application?</a>
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  Consider your workflows, existing stack and maintenance needs before choosing a backend.
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-2 border-t border-purple-100/60 flex items-center justify-between">
              <span className="text-[11px] text-gray-400 font-medium">November 2026</span>
              <a href="/blog-laravel-vs-nodejs.html" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 group-hover:gap-2.5 transition-all">
                <span>Read Full Article</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
  
</div>

  );
}
