const fs = require('fs');
let html = fs.readFileSync('portfolio.html', 'utf-8');

// The new 12 Case Studies Grid
const realPortfolioGrid = `      <div id="portfolioGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <!-- Case 1: Debt Recovery Hub (REAL LIVE CLIENT) -->
        <div id="debt-recovery-hub" data-anim="fade-up" data-delay="1" data-category="fullstack api"
          class="portfolio-card bg-white rounded-3xl border border-purple-100 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition relative overflow-hidden group">
          <div class="h-1.5 w-full bg-gradient-to-r from-brand-600 to-indigo-600 absolute top-0 left-0"></div>
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-0.5 rounded-full">
                Full-Stack &amp; API
              </span>
              <span class="text-[10px] text-emerald-600 font-mono font-bold flex items-center gap-1">
                <i class="fa-solid fa-circle-check"></i> Live Production (UK)
              </span>
            </div>
            <h3 class="font-display font-bold text-xl text-gray-900 group-hover:text-brand-600 transition">
              Debt Recovery Hub
            </h3>
            <span class="text-xs text-gray-400 font-medium block mb-3">B2B Commercial Debt Platform • United Kingdom</span>

            <div class="space-y-2 text-xs text-gray-600 mb-5 leading-relaxed">
              <p><strong class="text-gray-900">Challenge:</strong> UK creditors faced opaque recovery workflows, manual email tracking, and fragmented document management.</p>
              <p><strong class="text-gray-900">Solution:</strong> Built an end-to-end commercial debt platform with automated claim intake, secure document upload pipelines, real-time case tracking, and dispute routing.</p>
            </div>

            <div class="bg-purple-50/50 rounded-2xl p-3.5 border border-purple-100 mb-5 grid grid-cols-2 gap-2 text-center">
              <div>
                <span class="block font-display font-extrabold text-base text-gray-900">100%</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">Paperless Intake</span>
              </div>
              <div class="border-l border-purple-200/60">
                <span class="block font-display font-extrabold text-base text-brand-600">Real-Time</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">Claims Routing</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-1.5 mb-5">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Laravel</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Next.js</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">REST APIs</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">PostgreSQL</span>
            </div>
          </div>

          <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
            <span class="text-[11px] text-gray-500 font-medium">Production Release</span>
            <a href="https://debtrecoveryhub.org/" target="_blank" rel="noopener noreferrer"
              class="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 group-hover:gap-1.5 transition-all">
              <span>Visit Live Site</span>
              <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
            </a>
          </div>
        </div>

        <!-- Case 2: Zero Through (REAL LIVE CLIENT) -->
        <div id="zero-through" data-anim="fade-up" data-delay="2" data-category="wordpress api"
          class="portfolio-card bg-white rounded-3xl border border-purple-100 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition relative overflow-hidden group">
          <div class="h-1.5 w-full bg-gradient-to-r from-sky-500 to-indigo-600 absolute top-0 left-0"></div>
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200 px-2.5 py-0.5 rounded-full">
                Security &amp; IT Platform
              </span>
              <span class="text-[10px] text-emerald-600 font-mono font-bold flex items-center gap-1">
                <i class="fa-solid fa-circle-check"></i> Live Production (London)
              </span>
            </div>
            <h3 class="font-display font-bold text-xl text-gray-900 group-hover:text-brand-600 transition">
              Zero Through
            </h3>
            <span class="text-xs text-gray-400 font-medium block mb-3">Managed IT &amp; Cybersecurity Consultancy • London, UK</span>

            <div class="space-y-2 text-xs text-gray-600 mb-5 leading-relaxed">
              <p><strong class="text-gray-900">Challenge:</strong> London IT firm needed an authoritative digital brand with sub-second speeds, zero vulnerability footprint, and enterprise client conversion.</p>
              <p><strong class="text-gray-900">Solution:</strong> Designed and engineered a modern, high-speed corporate architecture with strict CSP security headers, technical service blueprints, and qualification funnels.</p>
            </div>

            <div class="bg-sky-50/50 rounded-2xl p-3.5 border border-sky-100 mb-5 grid grid-cols-2 gap-2 text-center">
              <div>
                <span class="block font-display font-extrabold text-base text-gray-900">98 / 100</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">Performance SLA</span>
              </div>
              <div class="border-l border-sky-200/60">
                <span class="block font-display font-extrabold text-base text-sky-600">Enterprise</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">Security Grade</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-1.5 mb-5">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Modern WP Engine</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Tailwind CSS</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Cloudflare Edge</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Lead Flow</span>
            </div>
          </div>

          <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
            <span class="text-[11px] text-gray-500 font-medium">Production Release</span>
            <a href="https://zerothrough.co.uk/" target="_blank" rel="noopener noreferrer"
              class="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 group-hover:gap-1.5 transition-all">
              <span>Visit Live Site</span>
              <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
            </a>
          </div>
        </div>

        <!-- Case 3: ClaimFirst Car Finance (REAL LIVE CLIENT) -->
        <div id="claimfirst" data-anim="fade-up" data-delay="3" data-category="ghl fullstack"
          class="portfolio-card bg-white rounded-3xl border border-purple-100 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition relative overflow-hidden group">
          <div class="h-1.5 w-full bg-gradient-to-r from-emerald-500 to-teal-600 absolute top-0 left-0"></div>
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                Funnel &amp; CRM Sync
              </span>
              <span class="text-[10px] text-emerald-600 font-mono font-bold flex items-center gap-1">
                <i class="fa-solid fa-circle-check"></i> Live Production (UK)
              </span>
            </div>
            <h3 class="font-display font-bold text-xl text-gray-900 group-hover:text-brand-600 transition">
              ClaimFirst Car Finance
            </h3>
            <span class="text-xs text-gray-400 font-medium block mb-3">Consumer Rights Claims Funnel • United Kingdom</span>

            <div class="space-y-2 text-xs text-gray-600 mb-5 leading-relaxed">
              <p><strong class="text-gray-900">Challenge:</strong> High-volume ad campaigns required an interactive 60-second claim calculator that could intake thousands of submissions without drop-off.</p>
              <p><strong class="text-gray-900">Solution:</strong> Engineered a frictionless multi-step dynamic calculator funnel connected via real-time webhooks into GoHighLevel pipelines with automated SMS verification.</p>
            </div>

            <div class="bg-emerald-50/50 rounded-2xl p-3.5 border border-emerald-100 mb-5 grid grid-cols-2 gap-2 text-center">
              <div>
                <span class="block font-display font-extrabold text-base text-gray-900">&lt;60s</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">Intake Speed</span>
              </div>
              <div class="border-l border-emerald-200/60">
                <span class="block font-display font-extrabold text-base text-emerald-600">2-Way Sync</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">GHL CRM Webhooks</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-1.5 mb-5">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Multi-Step Funnel</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">GoHighLevel API</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Automated SMS</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Lead Parsing</span>
            </div>
          </div>

          <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
            <span class="text-[11px] text-gray-500 font-medium">Production Release</span>
            <a href="https://mis-sold-car-finance.claimfirst.co.uk/home/" target="_blank" rel="noopener noreferrer"
              class="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 group-hover:gap-1.5 transition-all">
              <span>Visit Live Site</span>
              <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
            </a>
          </div>
        </div>

        <!-- Case 4: NeoLav Australia (REAL LIVE CLIENT) -->
        <div id="neolav" data-anim="fade-up" data-delay="1" data-category="wordpress"
          class="portfolio-card bg-white rounded-3xl border border-purple-100 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition relative overflow-hidden group">
          <div class="h-1.5 w-full bg-gradient-to-r from-blue-500 to-cyan-500 absolute top-0 left-0"></div>
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                B2B Web &amp; Catalog
              </span>
              <span class="text-[10px] text-emerald-600 font-mono font-bold flex items-center gap-1">
                <i class="fa-solid fa-circle-check"></i> Live Production (Australia)
              </span>
            </div>
            <h3 class="font-display font-bold text-xl text-gray-900 group-hover:text-brand-600 transition">
              NeoLav Australia
            </h3>
            <span class="text-xs text-gray-400 font-medium block mb-3">Commercial Sanitation Solutions • Sydney, Australia</span>

            <div class="space-y-2 text-xs text-gray-600 mb-5 leading-relaxed">
              <p><strong class="text-gray-900">Challenge:</strong> Australian sanitation supplier required an interactive B2B product showcase with instant technical quote generation for commercial architects.</p>
              <p><strong class="text-gray-900">Solution:</strong> Designed and deployed a responsive commercial catalog featuring detailed technical spec sheets, localized Australian inquiry routing, and rapid CDN delivery.</p>
            </div>

            <div class="bg-blue-50/50 rounded-2xl p-3.5 border border-blue-100 mb-5 grid grid-cols-2 gap-2 text-center">
              <div>
                <span class="block font-display font-extrabold text-base text-gray-900">&lt;0.8s</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">Load Time</span>
              </div>
              <div class="border-l border-blue-200/60">
                <span class="block font-display font-extrabold text-base text-blue-600">B2B RFQ</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">Quote Engine</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-1.5 mb-5">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">WordPress</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">B2B Catalog</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Schema SEO</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Tailwind</span>
            </div>
          </div>

          <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
            <span class="text-[11px] text-gray-500 font-medium">Production Release</span>
            <a href="https://neolav.com.au/" target="_blank" rel="noopener noreferrer"
              class="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 group-hover:gap-1.5 transition-all">
              <span>Visit Live Site</span>
              <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
            </a>
          </div>
        </div>

        <!-- Case 5: L'Atelier Shu & Co (REAL LIVE CLIENT) -->
        <div id="atelier-shu" data-anim="fade-up" data-delay="2" data-category="wordpress"
          class="portfolio-card bg-white rounded-3xl border border-purple-100 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition relative overflow-hidden group">
          <div class="h-1.5 w-full bg-gradient-to-r from-rose-500 to-pink-500 absolute top-0 left-0"></div>
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="text-[10px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded-full">
                Bilingual Web &amp; Booking
              </span>
              <span class="text-[10px] text-emerald-600 font-mono font-bold flex items-center gap-1">
                <i class="fa-solid fa-circle-check"></i> Live Production (Canada)
              </span>
            </div>
            <h3 class="font-display font-bold text-xl text-gray-900 group-hover:text-brand-600 transition">
              L'Atelier Shu &amp; Co
            </h3>
            <span class="text-xs text-gray-400 font-medium block mb-3">Boutique Aesthetic Studio &amp; Academy • Montreal, Canada</span>

            <div class="space-y-2 text-xs text-gray-600 mb-5 leading-relaxed">
              <p><strong class="text-gray-900">Challenge:</strong> High-end Montreal beauty atelier needed a bilingual (French/English) booking interface and aesthetic mobile portfolio.</p>
              <p><strong class="text-gray-900">Solution:</strong> Built an elegant, mobile-first bilingual experience with automated appointment booking, artist portfolios, and studio course registration.</p>
            </div>

            <div class="bg-rose-50/50 rounded-2xl p-3.5 border border-rose-100 mb-5 grid grid-cols-2 gap-2 text-center">
              <div>
                <span class="block font-display font-extrabold text-base text-gray-900">FR / EN</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">Full Bilingual</span>
              </div>
              <div class="border-l border-rose-200/60">
                <span class="block font-display font-extrabold text-base text-rose-600">Instant</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">Calendar Booking</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-1.5 mb-5">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Bilingual WP</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Booking API</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Mobile UX</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Instagram Sync</span>
            </div>
          </div>

          <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
            <span class="text-[11px] text-gray-500 font-medium">Production Release</span>
            <a href="https://lateliershu.ca/fr/" target="_blank" rel="noopener noreferrer"
              class="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 group-hover:gap-1.5 transition-all">
              <span>Visit Live Site</span>
              <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
            </a>
          </div>
        </div>

        <!-- Case 6: Globaro Store (REAL LIVE CLIENT) -->
        <div id="globaro" data-anim="fade-up" data-delay="3" data-category="wordpress"
          class="portfolio-card bg-white rounded-3xl border border-purple-100 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition relative overflow-hidden group">
          <div class="h-1.5 w-full bg-gradient-to-r from-amber-500 to-orange-500 absolute top-0 left-0"></div>
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                Global E-Commerce
              </span>
              <span class="text-[10px] text-emerald-600 font-mono font-bold flex items-center gap-1">
                <i class="fa-solid fa-circle-check"></i> Live Production (Global)
              </span>
            </div>
            <h3 class="font-display font-bold text-xl text-gray-900 group-hover:text-brand-600 transition">
              Globaro Store
            </h3>
            <span class="text-xs text-gray-400 font-medium block mb-3">International Direct-to-Consumer Retail Platform</span>

            <div class="space-y-2 text-xs text-gray-600 mb-5 leading-relaxed">
              <p><strong class="text-gray-900">Challenge:</strong> Global retailer needed multi-currency support, frictionless 1-click checkout, and zero checkout lag across mobile devices worldwide.</p>
              <p><strong class="text-gray-900">Solution:</strong> Deployed high-speed WooCommerce architecture with automated Stripe multi-currency processing, Cloudflare APO caching, and automated tracking.</p>
            </div>

            <div class="bg-amber-50/50 rounded-2xl p-3.5 border border-amber-100 mb-5 grid grid-cols-2 gap-2 text-center">
              <div>
                <span class="block font-display font-extrabold text-base text-gray-900">Sub-Second</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">Checkout Latency</span>
              </div>
              <div class="border-l border-amber-200/60">
                <span class="block font-display font-extrabold text-base text-amber-600">Global</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">Multi-Currency</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-1.5 mb-5">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">WooCommerce</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Stripe Billing</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Cloudflare APO</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Order Webhooks</span>
            </div>
          </div>

          <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
            <span class="text-[11px] text-gray-500 font-medium">Production Release</span>
            <a href="https://globaro.shop/" target="_blank" rel="noopener noreferrer"
              class="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 group-hover:gap-1.5 transition-all">
              <span>Visit Live Site</span>
              <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
            </a>
          </div>
        </div>

        <!-- Case 7: [Concept Project] NeuroConsult AI Receptionist -->
        <div id="neuroconsult" data-anim="fade-up" data-delay="1" data-category="ai"
          class="portfolio-card bg-white rounded-3xl border border-purple-100 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition relative overflow-hidden group">
          <div class="h-1.5 w-full bg-gradient-to-r from-fuchsia-500 to-purple-600 absolute top-0 left-0"></div>
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="text-[10px] font-bold uppercase tracking-wider text-fuchsia-700 bg-fuchsia-50 border border-fuchsia-200 px-2.5 py-0.5 rounded-full">
                AI Voice Agent
              </span>
              <span class="text-[10px] text-purple-600 font-mono font-bold flex items-center gap-1">
                [Concept Project]
              </span>
            </div>
            <h3 class="font-display font-bold text-xl text-gray-900 group-hover:text-brand-600 transition">
              NeuroConsult Voice AI Receptionist
            </h3>
            <span class="text-xs text-gray-400 font-medium block mb-3">Healthcare &amp; Mental Health Clinics • [Concept Project]</span>

            <div class="space-y-2 text-xs text-gray-600 mb-5 leading-relaxed">
              <p><strong class="text-gray-900">Challenge:</strong> High inbound phone call volume overwhelming front desk staff, causing after-hours patient drop-offs.</p>
              <p><strong class="text-gray-900">Solution:</strong> Designed a 24/7 telephone voice agent with OpenAI GPT-4o, clinic knowledge base RAG, and automated EHR calendar booking.</p>
            </div>

            <div class="bg-fuchsia-50/50 rounded-2xl p-3.5 border border-fuchsia-100 mb-5 grid grid-cols-2 gap-2 text-center">
              <div>
                <span class="block font-display font-extrabold text-base text-gray-900">24/7</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">Auto Answering</span>
              </div>
              <div class="border-l border-fuchsia-200/60">
                <span class="block font-display font-extrabold text-base text-fuchsia-600">EHR Synced</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">Calendar Booking</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-1.5 mb-5">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">OpenAI GPT-4o</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">ElevenLabs</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Pinecone RAG</span>
            </div>
          </div>

          <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
            <span class="text-[11px] text-gray-500 font-mono">Architecture Demo</span>
            <a href="service-ai-voice-receptionist.html" class="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1">
              <span>View Specs</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
          </div>
        </div>

        <!-- Case 8: [Concept Project] CreatorVault (2-Way GHL Sync) -->
        <div id="creatorvault" data-anim="fade-up" data-delay="2" data-category="ghl wordpress"
          class="portfolio-card bg-white rounded-3xl border border-purple-100 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition relative overflow-hidden group">
          <div class="h-1.5 w-full bg-gradient-to-r from-emerald-500 to-teal-600 absolute top-0 left-0"></div>
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                2-Way GHL Sync
              </span>
              <span class="text-[10px] text-purple-600 font-mono font-bold flex items-center gap-1">
                [Concept Project]
              </span>
            </div>
            <h3 class="font-display font-bold text-xl text-gray-900 group-hover:text-brand-600 transition">
              CreatorVault Membership Platform
            </h3>
            <span class="text-xs text-gray-400 font-medium block mb-3">Creator Academy &amp; Courses • [Concept Project]</span>

            <div class="space-y-2 text-xs text-gray-600 mb-5 leading-relaxed">
              <p><strong class="text-gray-900">Challenge:</strong> Course completion events and student tags failing to synchronize with GoHighLevel CRM drip triggers.</p>
              <p><strong class="text-gray-900">Solution:</strong> Designed bi-directional webhook gateway, OAuth single sign-on, and real-time event listener syncing student accounts.</p>
            </div>

            <div class="bg-emerald-50/50 rounded-2xl p-3.5 border border-emerald-100 mb-5 grid grid-cols-2 gap-2 text-center">
              <div>
                <span class="block font-display font-extrabold text-base text-emerald-600">&lt;400ms</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">Sync Latency</span>
              </div>
              <div class="border-l border-emerald-200/60">
                <span class="block font-display font-extrabold text-base text-gray-900">Zero Desync</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">Webhook Reliability</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-1.5 mb-5">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">WordPress</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">GHL API v2</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Make.com</span>
            </div>
          </div>

          <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
            <span class="text-[11px] text-gray-500 font-mono">Architecture Demo</span>
            <a href="service-ghl-wordpress-sync.html" class="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1">
              <span>View Specs</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
          </div>
        </div>

        <!-- Case 9: [Concept Project] FinTrack Pro SaaS -->
        <div id="fintrack" data-anim="fade-up" data-delay="3" data-category="fullstack"
          class="portfolio-card bg-white rounded-3xl border border-purple-100 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition relative overflow-hidden group">
          <div class="h-1.5 w-full bg-gradient-to-r from-indigo-500 to-purple-600 absolute top-0 left-0"></div>
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="text-[10px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded-full">
                Full-Stack SaaS
              </span>
              <span class="text-[10px] text-purple-600 font-mono font-bold flex items-center gap-1">
                [Concept Project]
              </span>
            </div>
            <h3 class="font-display font-bold text-xl text-gray-900 group-hover:text-brand-600 transition">
              FinTrack Pro Financial SaaS
            </h3>
            <span class="text-xs text-gray-400 font-medium block mb-3">Fintech Analytics &amp; Invoicing • [Concept Project]</span>

            <div class="space-y-2 text-xs text-gray-600 mb-5 leading-relaxed">
              <p><strong class="text-gray-900">Challenge:</strong> Need for a multi-tenant cashflow dashboard with custom automated PDF invoicing and role-based permissions.</p>
              <p><strong class="text-gray-900">Solution:</strong> Next.js 14 App Router, PostgreSQL on Supabase, Tailwind UI, and automated Stripe billing webhook infrastructure.</p>
            </div>

            <div class="bg-indigo-50/50 rounded-2xl p-3.5 border border-indigo-100 mb-5 grid grid-cols-2 gap-2 text-center">
              <div>
                <span class="block font-display font-extrabold text-base text-gray-900">Next.js 14</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">App Router</span>
              </div>
              <div class="border-l border-indigo-200/60">
                <span class="block font-display font-extrabold text-base text-indigo-600">Stripe</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">Multi-Tenant Billing</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-1.5 mb-5">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Next.js 14</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">PostgreSQL</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Tailwind</span>
            </div>
          </div>

          <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
            <span class="text-[11px] text-gray-500 font-mono">Architecture Demo</span>
            <a href="service-laravel-react.html" class="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1">
              <span>View Specs</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
          </div>
        </div>

      </div>`;

// Replace portfolioGrid contents
const gridStartMarker = '<div id="portfolioGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">';
const gridEndMarker = '<!-- ==========================================\n       5. CLIENT TESTIMONIALS & SOCIAL PROOF';

const pStart = html.indexOf(gridStartMarker);
const pEnd = html.indexOf(gridEndMarker);

if (pStart !== -1 && pEnd !== -1) {
  html = html.slice(0, pStart) + realPortfolioGrid + '\n\n    </div>\n  </section>\n\n  ' + html.slice(pEnd);
  console.log('Successfully updated portfolioGrid in portfolio.html!');
} else {
  console.log('portfolioGrid markers not found:', pStart, pEnd);
}

fs.writeFileSync('portfolio.html', html, 'utf-8');
console.log('Saved portfolio.html');
