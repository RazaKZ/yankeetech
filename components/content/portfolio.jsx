export default function PageContent() {
  return (
<div>
  <div id="scroll-progress" />
  <section className="hero-bg relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-purple-100/60">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <nav className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-6" aria-label="Breadcrumb">
        <a href="/index.html" className="hover:text-brand-600 transition">Home</a>
        <i className="fa-solid fa-chevron-right text-[9px] text-gray-400" />
        <span className="text-brand-600">Portfolio &amp; Case Studies</span>
      </nav>
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-brand-700 text-[10px] font-bold uppercase tracking-widest mb-3">
          <i className="fa-solid fa-layer-group" />
          <span>PROVEN CLIENT WORK • 100+ COMPLETED DELIVERIES</span>
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight leading-tight">
          Engineered for Speed, Scale &amp; Measurable ROI
        </h1>
        <p className="text-base sm:text-base text-gray-600 leading-relaxed mt-4">
          A deep dive into our production deliveries across WordPress stores, full-stack SaaS apps, GoHighLevel agency funnels, and autonomous AI automation pipelines. Real challenges, architectural solutions, and quantified results.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 pt-8 border-t border-purple-100">
        <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-purple-100 shadow-sm">
          <span className="block font-display font-extrabold text-2xl sm:text-3xl text-gray-900">100+</span>
          <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">Delivered Projects</span>
          <span className="block text-[10px] text-emerald-600 font-mono mt-0.5">Connected on-time milestone SLA</span>
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-purple-100 shadow-sm">
          <span className="block font-display font-extrabold text-2xl sm:text-3xl text-brand-600">98.6%</span>
          <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">Avg PageSpeed Score</span>
          <span className="block text-[10px] text-emerald-600 font-mono mt-0.5">Sub-second mobile loads</span>
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-purple-100 shadow-sm">
          <span className="block font-display font-extrabold text-2xl sm:text-3xl text-gray-900">$14.5M+</span>
          <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">Client Revenue Driven</span>
          <span className="block text-[10px] text-emerald-600 font-mono mt-0.5">Processed across checkouts</span>
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-purple-100 shadow-sm">
          <span className="block font-display font-extrabold text-2xl sm:text-3xl text-fuchsia-600">24/7</span>
          <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">AI Automation Uptime</span>
          <span className="block text-[10px] text-emerald-600 font-mono mt-0.5">Autonomous lead qualification</span>
        </div>
      </div>
    </div>
  </section>
  <section className="py-8 bg-white border-b border-gray-100 sticky top-20 z-30 shadow-xs backdrop-blur-md bg-white/95">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        <button type="button" onClick={(event) => { window.filterPortfolio('all', event.currentTarget); }} className="portfolio-filter-btn px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold bg-brand-600 text-white shadow-sm transition shrink-0 cursor-pointer">
          All Projects (12)
        </button>
        <button type="button" onClick={(event) => { window.filterPortfolio('wordpress', event.currentTarget); }} className="portfolio-filter-btn px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold bg-gray-100 hover:bg-purple-50 text-gray-700 transition shrink-0 cursor-pointer">
          WordPress &amp; E-Commerce (3)
        </button>
        <button type="button" onClick={(event) => { window.filterPortfolio('fullstack', event.currentTarget); }} className="portfolio-filter-btn px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold bg-gray-100 hover:bg-purple-50 text-gray-700 transition shrink-0 cursor-pointer">
          Full-Stack &amp; SaaS (3)
        </button>
        <button type="button" onClick={(event) => { window.filterPortfolio('ghl', event.currentTarget); }} className="portfolio-filter-btn px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold bg-gray-100 hover:bg-purple-50 text-gray-700 transition shrink-0 cursor-pointer">
          GoHighLevel &amp; CRM (3)
        </button>
        <button type="button" onClick={(event) => { window.filterPortfolio('ai', event.currentTarget); }} className="portfolio-filter-btn px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold bg-gray-100 hover:bg-purple-50 text-gray-700 transition shrink-0 cursor-pointer">
          AI &amp; Automation (3)
        </button>
      </div>
    </div>
  </section>
  <section className="py-16 lg:py-24 bg-gray-50/60">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div id="portfolioGrid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div id="debt-recovery-hub" data-anim="fade-up" data-delay={1} data-category="fullstack api" className="portfolio-card bg-white rounded-3xl border border-purple-100 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition relative overflow-hidden group">
          <div className="h-1.5 w-full bg-gradient-to-r from-brand-600 to-indigo-600 absolute top-0 left-0" />
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-0.5 rounded-full">
                Full-Stack &amp; API
              </span>
              <span className="text-[10px] text-emerald-600 font-mono font-bold flex items-center gap-1">
                <i className="fa-solid fa-circle-check" /> Live Production (UK)
              </span>
            </div>
            <h3 className="font-display font-bold text-xl text-gray-900 group-hover:text-brand-600 transition">
              Debt Recovery Hub
            </h3>
            <span className="text-xs text-gray-400 font-medium block mb-3">B2B Commercial Debt Platform • United Kingdom</span>
            <div className="space-y-2 text-xs text-gray-600 mb-5 leading-relaxed">
              <p><strong className="text-gray-900">Challenge:</strong> UK creditors faced opaque recovery workflows, manual email tracking, and fragmented document management.</p>
              <p><strong className="text-gray-900">Solution:</strong> Built an end-to-end commercial debt platform with automated claim intake, secure document upload pipelines, real-time case tracking, and dispute routing.</p>
            </div>
            <div className="bg-purple-50/50 rounded-2xl p-3.5 border border-purple-100 mb-5 grid grid-cols-2 gap-2 text-center">
              <div>
                <span className="block font-display font-extrabold text-base text-gray-900">Connected</span>
                <span className="block text-[9px] text-gray-500 uppercase tracking-tight">Paperless Intake</span>
              </div>
              <div className="border-l border-purple-200/60">
                <span className="block font-display font-extrabold text-base text-brand-600">Real-Time</span>
                <span className="block text-[9px] text-gray-500 uppercase tracking-tight">Claims Routing</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 mb-5">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Laravel</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Next.js</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">REST APIs</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">PostgreSQL</span>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-[11px] text-gray-500 font-medium">Production Release</span>
            <a href="https://debtrecoveryhub.org/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 group-hover:gap-1.5 transition-all">
              <span>Visit Live Site</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
            </a>
          </div>
        </div>
        <div id="zero-through" data-anim="fade-up" data-delay={2} data-category="wordpress api" className="portfolio-card bg-white rounded-3xl border border-purple-100 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition relative overflow-hidden group">
          <div className="h-1.5 w-full bg-gradient-to-r from-sky-500 to-indigo-600 absolute top-0 left-0" />
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200 px-2.5 py-0.5 rounded-full">
                Security &amp; IT Platform
              </span>
              <span className="text-[10px] text-emerald-600 font-mono font-bold flex items-center gap-1">
                <i className="fa-solid fa-circle-check" /> Live Production (London)
              </span>
            </div>
            <h3 className="font-display font-bold text-xl text-gray-900 group-hover:text-brand-600 transition">
              Zero Through
            </h3>
            <span className="text-xs text-gray-400 font-medium block mb-3">Managed IT &amp; Cybersecurity Consultancy • London, UK</span>
            <div className="space-y-2 text-xs text-gray-600 mb-5 leading-relaxed">
              <p><strong className="text-gray-900">Challenge:</strong> London IT firm needed an authoritative digital brand with sub-second speeds, zero vulnerability footprint, and enterprise client conversion.</p>
              <p><strong className="text-gray-900">Solution:</strong> Designed and engineered a modern, high-speed corporate architecture with strict CSP security headers, technical service blueprints, and qualification funnels.</p>
            </div>
            <div className="bg-sky-50/50 rounded-2xl p-3.5 border border-sky-100 mb-5 grid grid-cols-2 gap-2 text-center">
              <div>
                <span className="block font-display font-extrabold text-base text-gray-900">98 / 100</span>
                <span className="block text-[9px] text-gray-500 uppercase tracking-tight">Performance SLA</span>
              </div>
              <div className="border-l border-sky-200/60">
                <span className="block font-display font-extrabold text-base text-sky-600">Enterprise</span>
                <span className="block text-[9px] text-gray-500 uppercase tracking-tight">Security Grade</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 mb-5">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Modern WP Engine</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Tailwind CSS</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Cloudflare Edge</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Lead Flow</span>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-[11px] text-gray-500 font-medium">Production Release</span>
            <a href="https://zerothrough.co.uk/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 group-hover:gap-1.5 transition-all">
              <span>Visit Live Site</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
            </a>
          </div>
        </div>
        <div id="claimfirst" data-anim="fade-up" data-delay={3} data-category="ghl fullstack" className="portfolio-card bg-white rounded-3xl border border-purple-100 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition relative overflow-hidden group">
          <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 to-teal-600 absolute top-0 left-0" />
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                Funnel &amp; CRM Sync
              </span>
              <span className="text-[10px] text-emerald-600 font-mono font-bold flex items-center gap-1">
                <i className="fa-solid fa-circle-check" /> Live Production (UK)
              </span>
            </div>
            <h3 className="font-display font-bold text-xl text-gray-900 group-hover:text-brand-600 transition">
              ClaimFirst Car Finance
            </h3>
            <span className="text-xs text-gray-400 font-medium block mb-3">Consumer Rights Claims Funnel • United Kingdom</span>
            <div className="space-y-2 text-xs text-gray-600 mb-5 leading-relaxed">
              <p><strong className="text-gray-900">Challenge:</strong> High-volume ad campaigns required an interactive 60-second claim calculator that could intake thousands of submissions without drop-off.</p>
              <p><strong className="text-gray-900">Solution:</strong> Engineered a frictionless multi-step dynamic calculator funnel connected via real-time webhooks into GoHighLevel pipelines with automated SMS verification.</p>
            </div>
            <div className="bg-emerald-50/50 rounded-2xl p-3.5 border border-emerald-100 mb-5 grid grid-cols-2 gap-2 text-center">
              <div>
                <span className="block font-display font-extrabold text-base text-gray-900">&lt;60s</span>
                <span className="block text-[9px] text-gray-500 uppercase tracking-tight">Intake Speed</span>
              </div>
              <div className="border-l border-emerald-200/60">
                <span className="block font-display font-extrabold text-base text-emerald-600">2-Way Sync</span>
                <span className="block text-[9px] text-gray-500 uppercase tracking-tight">GHL CRM Webhooks</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 mb-5">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Multi-Step Funnel</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">GoHighLevel API</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Automated SMS</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Lead Parsing</span>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-[11px] text-gray-500 font-medium">Production Release</span>
            <a href="https://mis-sold-car-finance.claimfirst.co.uk/home/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 group-hover:gap-1.5 transition-all">
              <span>Visit Live Site</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
            </a>
          </div>
        </div>
        <div id="neolav" data-anim="fade-up" data-delay={1} data-category="wordpress" className="portfolio-card bg-white rounded-3xl border border-purple-100 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition relative overflow-hidden group">
          <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 to-cyan-500 absolute top-0 left-0" />
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                B2B Web &amp; Catalog
              </span>
              <span className="text-[10px] text-emerald-600 font-mono font-bold flex items-center gap-1">
                <i className="fa-solid fa-circle-check" /> Live Production (Australia)
              </span>
            </div>
            <h3 className="font-display font-bold text-xl text-gray-900 group-hover:text-brand-600 transition">
              NeoLav Australia
            </h3>
            <span className="text-xs text-gray-400 font-medium block mb-3">Commercial Sanitation Solutions • Sydney, Australia</span>
            <div className="space-y-2 text-xs text-gray-600 mb-5 leading-relaxed">
              <p><strong className="text-gray-900">Challenge:</strong> Australian sanitation supplier required an interactive B2B product showcase with instant technical quote generation for commercial architects.</p>
              <p><strong className="text-gray-900">Solution:</strong> Designed and deployed a responsive commercial catalog featuring detailed technical spec sheets, localized Australian inquiry routing, and rapid CDN delivery.</p>
            </div>
            <div className="bg-blue-50/50 rounded-2xl p-3.5 border border-blue-100 mb-5 grid grid-cols-2 gap-2 text-center">
              <div>
                <span className="block font-display font-extrabold text-base text-gray-900">Responsive</span>
                <span className="block text-[9px] text-gray-500 uppercase tracking-tight">Load Time</span>
              </div>
              <div className="border-l border-blue-200/60">
                <span className="block font-display font-extrabold text-base text-blue-600">B2B RFQ</span>
                <span className="block text-[9px] text-gray-500 uppercase tracking-tight">Quote Engine</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 mb-5">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">WordPress</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">B2B Catalog</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Schema SEO</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Tailwind</span>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-[11px] text-gray-500 font-medium">Production Release</span>
            <a href="https://neolav.com.au/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 group-hover:gap-1.5 transition-all">
              <span>Visit Live Site</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
            </a>
          </div>
        </div>
        <div id="atelier-shu" data-anim="fade-up" data-delay={2} data-category="wordpress" className="portfolio-card bg-white rounded-3xl border border-purple-100 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition relative overflow-hidden group">
          <div className="h-1.5 w-full bg-gradient-to-r from-rose-500 to-pink-500 absolute top-0 left-0" />
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded-full">
                Bilingual Web &amp; Booking
              </span>
              <span className="text-[10px] text-emerald-600 font-mono font-bold flex items-center gap-1">
                <i className="fa-solid fa-circle-check" /> Live Production (Canada)
              </span>
            </div>
            <h3 className="font-display font-bold text-xl text-gray-900 group-hover:text-brand-600 transition">
              L'Atelier Shu &amp; Co
            </h3>
            <span className="text-xs text-gray-400 font-medium block mb-3">Boutique Aesthetic Studio &amp; Academy • Montreal, Canada</span>
            <div className="space-y-2 text-xs text-gray-600 mb-5 leading-relaxed">
              <p><strong className="text-gray-900">Challenge:</strong> High-end Montreal beauty atelier needed a bilingual (French/English) booking interface and aesthetic mobile portfolio.</p>
              <p><strong className="text-gray-900">Solution:</strong> Built an elegant, mobile-first bilingual experience with automated appointment booking, artist portfolios, and studio course registration.</p>
            </div>
            <div className="bg-rose-50/50 rounded-2xl p-3.5 border border-rose-100 mb-5 grid grid-cols-2 gap-2 text-center">
              <div>
                <span className="block font-display font-extrabold text-base text-gray-900">FR / EN</span>
                <span className="block text-[9px] text-gray-500 uppercase tracking-tight">Full Bilingual</span>
              </div>
              <div className="border-l border-rose-200/60">
                <span className="block font-display font-extrabold text-base text-rose-600">Instant</span>
                <span className="block text-[9px] text-gray-500 uppercase tracking-tight">Calendar Booking</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 mb-5">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Bilingual WP</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Booking API</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Mobile UX</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Instagram Sync</span>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-[11px] text-gray-500 font-medium">Production Release</span>
            <a href="https://lateliershu.ca/fr/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 group-hover:gap-1.5 transition-all">
              <span>Visit Live Site</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
            </a>
          </div>
        </div>
        <div id="globaro" data-anim="fade-up" data-delay={3} data-category="wordpress" className="portfolio-card bg-white rounded-3xl border border-purple-100 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition relative overflow-hidden group">
          <div className="h-1.5 w-full bg-gradient-to-r from-amber-500 to-orange-500 absolute top-0 left-0" />
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                Global E-Commerce
              </span>
              <span className="text-[10px] text-emerald-600 font-mono font-bold flex items-center gap-1">
                <i className="fa-solid fa-circle-check" /> Live Production (Global)
              </span>
            </div>
            <h3 className="font-display font-bold text-xl text-gray-900 group-hover:text-brand-600 transition">
              Globaro Store
            </h3>
            <span className="text-xs text-gray-400 font-medium block mb-3">International Direct-to-Consumer Retail Platform</span>
            <div className="space-y-2 text-xs text-gray-600 mb-5 leading-relaxed">
              <p><strong className="text-gray-900">Challenge:</strong> Global retailer needed multi-currency support, frictionless 1-click checkout, and zero checkout lag across mobile devices worldwide.</p>
              <p><strong className="text-gray-900">Solution:</strong> Deployed high-speed WooCommerce architecture with automated Stripe multi-currency processing, Cloudflare APO caching, and automated tracking.</p>
            </div>
            <div className="bg-amber-50/50 rounded-2xl p-3.5 border border-amber-100 mb-5 grid grid-cols-2 gap-2 text-center">
              <div>
                <span className="block font-display font-extrabold text-base text-gray-900">Sub-Second</span>
                <span className="block text-[9px] text-gray-500 uppercase tracking-tight">Checkout Latency</span>
              </div>
              <div className="border-l border-amber-200/60">
                <span className="block font-display font-extrabold text-base text-amber-600">Global</span>
                <span className="block text-[9px] text-gray-500 uppercase tracking-tight">Multi-Currency</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 mb-5">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">WooCommerce</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Stripe Billing</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Cloudflare APO</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Order Webhooks</span>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-[11px] text-gray-500 font-medium">Production Release</span>
            <a href="https://globaro.shop/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 group-hover:gap-1.5 transition-all">
              <span>Visit Live Site</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
            </a>
          </div>
        </div>
        <div id="neuroconsult" data-anim="fade-up" data-delay={1} data-category="ai" className="portfolio-card bg-white rounded-3xl border border-purple-100 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition relative overflow-hidden group">
          <div className="h-1.5 w-full bg-gradient-to-r from-fuchsia-500 to-purple-600 absolute top-0 left-0" />
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-fuchsia-700 bg-fuchsia-50 border border-fuchsia-200 px-2.5 py-0.5 rounded-full">
                AI Voice Agent
              </span>
              <span className="text-[10px] text-purple-600 font-mono font-bold flex items-center gap-1">
                [Concept Project]
              </span>
            </div>
            <h3 className="font-display font-bold text-xl text-gray-900 group-hover:text-brand-600 transition">
              NeuroConsult Voice AI Receptionist
            </h3>
            <span className="text-xs text-gray-400 font-medium block mb-3">Healthcare &amp; Mental Health Clinics • [Concept Project]</span>
            <div className="space-y-2 text-xs text-gray-600 mb-5 leading-relaxed">
              <p><strong className="text-gray-900">Challenge:</strong> High inbound phone call volume overwhelming front desk staff, causing after-hours patient drop-offs.</p>
              <p><strong className="text-gray-900">Solution:</strong> Designed a 24/7 telephone voice agent with OpenAI GPT-4o, clinic knowledge base RAG, and automated EHR calendar booking.</p>
            </div>
            <div className="bg-fuchsia-50/50 rounded-2xl p-3.5 border border-fuchsia-100 mb-5 grid grid-cols-2 gap-2 text-center">
              <div>
                <span className="block font-display font-extrabold text-base text-gray-900">24/7</span>
                <span className="block text-[9px] text-gray-500 uppercase tracking-tight">Auto Answering</span>
              </div>
              <div className="border-l border-fuchsia-200/60">
                <span className="block font-display font-extrabold text-base text-fuchsia-600">EHR Synced</span>
                <span className="block text-[9px] text-gray-500 uppercase tracking-tight">Calendar Booking</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 mb-5">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">OpenAI GPT-4o</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">ElevenLabs</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Pinecone RAG</span>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-[11px] text-gray-500 font-mono">Architecture Demo</span>
            <a href="/service-ai-voice-receptionist.html" className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1">
              <span>View Specs</span>
            </a>
          </div>
        </div>
        <div id="creatorvault" data-anim="fade-up" data-delay={2} data-category="ghl wordpress" className="portfolio-card bg-white rounded-3xl border border-purple-100 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition relative overflow-hidden group">
          <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 to-teal-600 absolute top-0 left-0" />
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                2-Way GHL Sync
              </span>
              <span className="text-[10px] text-purple-600 font-mono font-bold flex items-center gap-1">
                [Concept Project]
              </span>
            </div>
            <h3 className="font-display font-bold text-xl text-gray-900 group-hover:text-brand-600 transition">
              CreatorVault Membership Platform
            </h3>
            <span className="text-xs text-gray-400 font-medium block mb-3">Creator Academy &amp; Courses • [Concept Project]</span>
            <div className="space-y-2 text-xs text-gray-600 mb-5 leading-relaxed">
              <p><strong className="text-gray-900">Challenge:</strong> Course completion events and student tags failing to synchronize with GoHighLevel CRM drip triggers.</p>
              <p><strong className="text-gray-900">Solution:</strong> Designed bi-directional webhook gateway, OAuth single sign-on, and real-time event listener syncing student accounts.</p>
            </div>
            <div className="bg-emerald-50/50 rounded-2xl p-3.5 border border-emerald-100 mb-5 grid grid-cols-2 gap-2 text-center">
              <div>
                <span className="block font-display font-extrabold text-base text-emerald-600">&lt;400ms</span>
                <span className="block text-[9px] text-gray-500 uppercase tracking-tight">Sync Latency</span>
              </div>
              <div className="border-l border-emerald-200/60">
                <span className="block font-display font-extrabold text-base text-gray-900">Zero Desync</span>
                <span className="block text-[9px] text-gray-500 uppercase tracking-tight">Webhook Reliability</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 mb-5">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">WordPress</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">GHL API v2</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Make.com</span>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-[11px] text-gray-500 font-mono">Architecture Demo</span>
            <a href="/service-ghl-wordpress-sync.html" className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1">
              <span>View Specs</span>
            </a>
          </div>
        </div>
        <div id="fintrack" data-anim="fade-up" data-delay={3} data-category="fullstack" className="portfolio-card bg-white rounded-3xl border border-purple-100 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition relative overflow-hidden group">
          <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 to-purple-600 absolute top-0 left-0" />
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded-full">
                Full-Stack SaaS
              </span>
              <span className="text-[10px] text-purple-600 font-mono font-bold flex items-center gap-1">
                [Concept Project]
              </span>
            </div>
            <h3 className="font-display font-bold text-xl text-gray-900 group-hover:text-brand-600 transition">
              FinTrack Pro Financial SaaS
            </h3>
            <span className="text-xs text-gray-400 font-medium block mb-3">Fintech Analytics &amp; Invoicing • [Concept Project]</span>
            <div className="space-y-2 text-xs text-gray-600 mb-5 leading-relaxed">
              <p><strong className="text-gray-900">Challenge:</strong> Need for a multi-tenant cashflow dashboard with custom automated PDF invoicing and role-based permissions.</p>
              <p><strong className="text-gray-900">Solution:</strong> Next.js 14 App Router, PostgreSQL on Supabase, Tailwind UI, and automated Stripe billing webhook infrastructure.</p>
            </div>
            <div className="bg-indigo-50/50 rounded-2xl p-3.5 border border-indigo-100 mb-5 grid grid-cols-2 gap-2 text-center">
              <div>
                <span className="block font-display font-extrabold text-base text-gray-900">Next.js 14</span>
                <span className="block text-[9px] text-gray-500 uppercase tracking-tight">App Router</span>
              </div>
              <div className="border-l border-indigo-200/60">
                <span className="block font-display font-extrabold text-base text-indigo-600">Stripe</span>
                <span className="block text-[9px] text-gray-500 uppercase tracking-tight">Multi-Tenant Billing</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 mb-5">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Next.js 14</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">PostgreSQL</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Tailwind</span>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-[11px] text-gray-500 font-mono">Architecture Demo</span>
            <a href="/service-laravel-react.html" className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1">
              <span>View Specs</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-16 lg:py-20 contact-cosmic-bg text-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-500/30 border border-brand-400/40 text-[10px] font-bold uppercase tracking-widest text-purple-200">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>ACCEPTING NEW CLIENTS FOR 2026</span>
      </div>
      <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight max-w-2xl mx-auto">
        Ready to Build Your Next High-Impact Digital Solution?
      </h2>
      <p className="text-base text-base text-purple-200/80 max-w-xl mx-auto leading-relaxed">
        Get a technical architecture proposal, turnaround estimate, and exact project roadmap within 24 hours.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <a href="/index.html#contact" className="w-full sm:w-auto btn-purple text-white text-xs font-semibold px-7 py-3.5 rounded-full inline-flex items-center justify-center gap-2 shadow-glow transition">
          <i className="fa-solid fa-paper-plane text-xs" />
          <span>Start 4-Step Project Form</span>
        </a>
        <a href="/index.html#estimator" className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-purple-400/50 hover:bg-purple-900/40 text-purple-200 text-xs font-semibold inline-flex items-center justify-center gap-2 transition">
          <i className="fa-solid fa-calculator text-xs" />
          <span>Use Project Price Estimator</span>
        </a>
      </div>
    </div>
  </section>
  
</div>

  );
}
