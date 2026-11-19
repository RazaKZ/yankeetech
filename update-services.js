const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

// The new unified Services section based on Developer Brief Page 2 & 13
const unifiedServicesSection = `  <!-- ==========================================
       4. SERVICES & DIGITAL CAPABILITIES
       (Unified Master Grid per Developer Brief Page 2 & 13)
       ========================================== -->
  <section id="services" class="py-16 lg:py-24 bg-white scroll-mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div data-anim="fade-up">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-[10px] font-bold uppercase tracking-widest mb-3">
            <i class="fa-solid fa-layer-group text-xs"></i>
            <span>FULL-STACK, AI &amp; INTEGRATION SERVICES</span>
          </div>
          <h2 class="font-display font-extrabold text-2xl sm:text-4xl text-gray-900 tracking-tight">
            Engineering Scalable Platforms, APIs &amp; Automations
          </h2>
          <p class="text-xs sm:text-sm text-gray-600 mt-2 max-w-2xl leading-relaxed">
            We design, build and integrate high-performance web applications, SaaS platforms and automation workflows. Fixed-price milestones, clean code you own, and zero agency fluff.
          </p>
        </div>
        <div class="flex items-center gap-3 shrink-0">
          <a href="services.html"
            class="px-5 py-2.5 rounded-full border border-purple-200 hover:border-brand-600 hover:text-brand-600 text-xs font-semibold text-gray-700 inline-flex items-center gap-2 transition bg-purple-50/50">
            <span>Explore All 12 Services</span>
            <i class="fa-solid fa-arrow-right text-[10px]"></i>
          </a>
        </div>
      </div>

      <!-- PRIMARY ROW (4 Large Premium Cards per Developer Brief Page 2 & 13) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">

        <!-- Card 1: Custom Web Apps & SaaS Development -->
        <div data-anim="fade-up" data-delay="1"
          class="group bg-[#faf8ff] hover:bg-white border border-purple-100 hover:border-purple-300 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl relative overflow-hidden">
          <div class="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-brand-600 to-indigo-600"></div>
          <div>
            <div class="w-12 h-12 rounded-2xl bg-purple-100 text-brand-600 flex items-center justify-center text-xl mb-5 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition shadow-sm">
              <i class="fa-solid fa-laptop-code"></i>
            </div>
            <div class="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-brand-600 mb-2">
              <span>CORE PLATFORM</span>
            </div>
            <h3 class="font-display font-bold text-lg text-gray-900 mb-2.5 group-hover:text-brand-600 transition leading-snug">
              Custom Web Apps &amp; SaaS Development
            </h3>
            <p class="text-xs text-gray-600 leading-relaxed mb-5">
              Scalable web applications, client portals and SaaS products, from first prototype to production with user roles, auth and dashboards.
            </p>
            <div class="flex flex-wrap gap-1.5 mb-6">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-purple-100 text-gray-700">Next.js 14</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-purple-100 text-gray-700">React</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-purple-100 text-gray-700">PostgreSQL</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-purple-100 text-gray-700">SaaS MVP</span>
            </div>
          </div>
          <div class="pt-4 border-t border-purple-100/80 flex items-center justify-between">
            <span class="text-[11px] font-semibold text-gray-500">From $2,200</span>
            <a href="service-laravel-react.html"
              class="inline-flex items-center gap-1 text-xs font-bold text-brand-600 group-hover:gap-2 transition-all">
              <span>View Specs</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
          </div>
        </div>

        <!-- Card 2: API & Third-Party Integrations -->
        <div data-anim="fade-up" data-delay="2"
          class="group bg-[#faf8ff] hover:bg-white border border-purple-100 hover:border-purple-300 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl relative overflow-hidden">
          <div class="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-amber-500 to-rose-600"></div>
          <div>
            <div class="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl mb-5 group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white transition shadow-sm">
              <i class="fa-solid fa-plug-circle-bolt"></i>
            </div>
            <div class="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700 mb-2">
              <span>DEEP CONNECTIVITY</span>
            </div>
            <h3 class="font-display font-bold text-lg text-gray-900 mb-2.5 group-hover:text-brand-600 transition leading-snug">
              API &amp; Third-Party Integrations
            </h3>
            <p class="text-xs text-gray-600 leading-relaxed mb-5">
              Connect your CRM, payments, GoHighLevel, accounting and internal tools with reliable, well-documented APIs, webhooks &amp; SSO.
            </p>
            <div class="flex flex-wrap gap-1.5 mb-6">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-purple-100 text-gray-700">REST &amp; GraphQL</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-purple-100 text-gray-700">GHL API v2</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-purple-100 text-gray-700">Stripe Billing</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-purple-100 text-gray-700">n8n / Make</span>
            </div>
          </div>
          <div class="pt-4 border-t border-purple-100/80 flex items-center justify-between">
            <span class="text-[11px] font-semibold text-gray-500">From $250 - $500</span>
            <a href="service-api-engineering.html"
              class="inline-flex items-center gap-1 text-xs font-bold text-brand-600 group-hover:gap-2 transition-all">
              <span>View Specs</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
          </div>
        </div>

        <!-- Card 3: Laravel, React & Next.js Development -->
        <div data-anim="fade-up" data-delay="3"
          class="group bg-[#faf8ff] hover:bg-white border border-purple-100 hover:border-purple-300 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl relative overflow-hidden">
          <div class="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-red-500 to-fuchsia-600"></div>
          <div>
            <div class="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center text-xl mb-5 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition shadow-sm">
              <i class="fa-brands fa-laravel"></i>
            </div>
            <div class="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-red-600 mb-2">
              <span>MODERN FULL-STACK</span>
            </div>
            <h3 class="font-display font-bold text-lg text-gray-900 mb-2.5 group-hover:text-brand-600 transition leading-snug">
              Laravel, React &amp; Next.js Development
            </h3>
            <p class="text-xs text-gray-600 leading-relaxed mb-5">
              Modern full-stack engineering with clean code, automated unit tests, CI/CD pipelines and documentation you 100% own.
            </p>
            <div class="flex flex-wrap gap-1.5 mb-6">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-purple-100 text-gray-700">Laravel 11</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-purple-100 text-gray-700">PHP 8.3</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-purple-100 text-gray-700">Tailwind CSS</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-purple-100 text-gray-700">Redis &amp; MySQL</span>
            </div>
          </div>
          <div class="pt-4 border-t border-purple-100/80 flex items-center justify-between">
            <span class="text-[11px] font-semibold text-gray-500">From $2,500</span>
            <a href="service-laravel-react.html"
              class="inline-flex items-center gap-1 text-xs font-bold text-brand-600 group-hover:gap-2 transition-all">
              <span>View Specs</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
          </div>
        </div>

        <!-- Card 4: Dedicated Developers & White-Label Team -->
        <div data-anim="fade-up" data-delay="4"
          class="group bg-[#faf8ff] hover:bg-white border border-purple-100 hover:border-purple-300 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl relative overflow-hidden">
          <div class="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-emerald-500 to-teal-600"></div>
          <div>
            <div class="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl mb-5 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition shadow-sm">
              <i class="fa-solid fa-users-gear"></i>
            </div>
            <div class="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 mb-2">
              <span>AGENCY EXTENSION</span>
            </div>
            <h3 class="font-display font-bold text-lg text-gray-900 mb-2.5 group-hover:text-brand-600 transition leading-snug">
              Dedicated Developers &amp; White-Label Team
            </h3>
            <p class="text-xs text-gray-600 leading-relaxed mb-5">
              Extend your team or your agency with senior developers, GHL architects and dedicated engineering, billed on transparent monthly retainers.
            </p>
            <div class="flex flex-wrap gap-1.5 mb-6">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-purple-100 text-gray-700">White-Label NDA</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-purple-100 text-gray-700">US Timezone</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-purple-100 text-gray-700">Weekly Demos</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-purple-100 text-gray-700">Monthly Billing</span>
            </div>
          </div>
          <div class="pt-4 border-t border-purple-100/80 flex items-center justify-between">
            <span class="text-[11px] font-semibold text-gray-500">From $1,500/mo</span>
            <a href="service-white-label-agency.html"
              class="inline-flex items-center gap-1 text-xs font-bold text-brand-600 group-hover:gap-2 transition-all">
              <span>View Specs</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
          </div>
        </div>

      </div>

      <!-- SECONDARY ROW: Quick Solutions (per Developer Brief Page 2 & 13) -->
      <div data-anim="fade-up" class="pt-6 border-t border-purple-100">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
          <div>
            <h3 class="font-display font-extrabold text-lg text-gray-900 flex items-center gap-2">
              <i class="fa-solid fa-bolt text-amber-500 text-sm"></i>
              <span>Quick Solutions</span>
            </h3>
            <p class="text-xs text-gray-500">Rapid turnaround packages with fixed scope and transparent pricing</p>
          </div>
          <span class="text-xs font-mono text-purple-600 font-semibold">Milestone Payments (30 / 30 / 40)</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          <!-- Quick Solution 1: WordPress & WooCommerce -->
          <a href="service-wordpress.html"
            class="group p-4 rounded-2xl bg-white border border-purple-100 hover:border-brand-500 hover:shadow-md transition flex items-center justify-between gap-3">
            <div class="flex items-center gap-3 min-w-0">
              <div class="w-10 h-10 rounded-xl bg-sky-50 text-[#21759b] flex items-center justify-center text-lg shrink-0 group-hover:scale-105 transition">
                <i class="fa-brands fa-wordpress"></i>
              </div>
              <div class="min-w-0">
                <div class="font-display font-bold text-xs text-gray-900 group-hover:text-brand-600 transition truncate">
                  WordPress &amp; WooCommerce
                </div>
                <div class="text-[11px] text-gray-500 truncate">Themes, speed &amp; checkouts</div>
              </div>
            </div>
            <span class="text-[11px] font-bold text-brand-600 shrink-0 bg-purple-50 px-2 py-0.5 rounded-md">From $400</span>
          </a>

          <!-- Quick Solution 2: GoHighLevel Setup & Automation -->
          <a href="service-ghl-funnels.html"
            class="group p-4 rounded-2xl bg-white border border-purple-100 hover:border-brand-500 hover:shadow-md transition flex items-center justify-between gap-3">
            <div class="flex items-center gap-3 min-w-0">
              <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg shrink-0 group-hover:scale-105 transition">
                <i class="fa-solid fa-filter-circle-dollar"></i>
              </div>
              <div class="min-w-0">
                <div class="font-display font-bold text-xs text-gray-900 group-hover:text-brand-600 transition truncate">
                  GoHighLevel Setup &amp; CRM
                </div>
                <div class="text-[11px] text-gray-500 truncate">Pipelines &amp; SMS/email funnels</div>
              </div>
            </div>
            <span class="text-[11px] font-bold text-emerald-700 shrink-0 bg-emerald-50 px-2 py-0.5 rounded-md">From $400</span>
          </a>

          <!-- Quick Solution 3: AI Chatbots & Voice Receptionists -->
          <a href="service-ai-chatbots.html"
            class="group p-4 rounded-2xl bg-white border border-purple-100 hover:border-brand-500 hover:shadow-md transition flex items-center justify-between gap-3">
            <div class="flex items-center gap-3 min-w-0">
              <div class="w-10 h-10 rounded-xl bg-fuchsia-50 text-fuchsia-600 flex items-center justify-center text-lg shrink-0 group-hover:scale-105 transition">
                <i class="fa-solid fa-robot"></i>
              </div>
              <div class="min-w-0">
                <div class="font-display font-bold text-xs text-gray-900 group-hover:text-brand-600 transition truncate">
                  AI Chatbots &amp; Voice Agents
                </div>
                <div class="text-[11px] text-gray-500 truncate">24/7 lead qualification &amp; booking</div>
              </div>
            </div>
            <span class="text-[11px] font-bold text-fuchsia-700 shrink-0 bg-fuchsia-50 px-2 py-0.5 rounded-md">From $300</span>
          </a>

          <!-- Quick Solution 4: UI/UX Figma Design Systems -->
          <a href="service-ui-ux-figma.html"
            class="group p-4 rounded-2xl bg-white border border-purple-100 hover:border-brand-500 hover:shadow-md transition flex items-center justify-between gap-3">
            <div class="flex items-center gap-3 min-w-0">
              <div class="w-10 h-10 rounded-xl bg-purple-50 text-brand-600 flex items-center justify-center text-lg shrink-0 group-hover:scale-105 transition">
                <i class="fa-solid fa-pen-ruler"></i>
              </div>
              <div class="min-w-0">
                <div class="font-display font-bold text-xs text-gray-900 group-hover:text-brand-600 transition truncate">
                  UI/UX Figma Design Systems
                </div>
                <div class="text-[11px] text-gray-500 truncate">High-converting prototypes</div>
              </div>
            </div>
            <span class="text-[11px] font-bold text-brand-600 shrink-0 bg-purple-50 px-2 py-0.5 rounded-md">From $200</span>
          </a>

        </div>
      </div>

      <!-- Bottom Agile Process Anchor Block (Keep Agile Steps cleanly structured) -->
      <div id="about" class="mt-20 scroll-mt-28">`;

// Let's replace the section 4 start up to `<div id="about" class="mt-20 scroll-mt-28">`
const section4Start = html.indexOf('<!-- ==========================================\n       4. OUR SERVICES');
const aboutIndex = html.indexOf('<div id="about" class="mt-20 scroll-mt-28">');

if (section4Start !== -1 && aboutIndex !== -1) {
  html = html.slice(0, section4Start) + unifiedServicesSection + html.slice(aboutIndex + '<div id="about" class="mt-20 scroll-mt-28">'.length);
  console.log('Successfully replaced Section 4!');
} else {
  console.log('Section 4 or About not found:', section4Start, aboutIndex);
}

// Now remove the duplicate Section 8 (#ecosystem) completely
const sec8Comment = '<!-- ==========================================\n       8. FULL-STACK, AI & INTEGRATION ECOSYSTEM GRID';
const sec8EndMarker = '<!-- ==========================================\n       9. CLIENT TESTIMONIALS';

const sec8Start = html.indexOf(sec8Comment);
const sec9Start = html.indexOf(sec8EndMarker);

if (sec8Start !== -1 && sec9Start !== -1) {
  html = html.slice(0, sec8Start) + html.slice(sec9Start);
  console.log('Successfully removed duplicate Section 8 (#ecosystem)!');
} else {
  console.log('Sec 8 or Sec 9 not found:', sec8Start, sec9Start);
}

fs.writeFileSync('index.html', html, 'utf-8');
console.log('Saved updated index.html');
