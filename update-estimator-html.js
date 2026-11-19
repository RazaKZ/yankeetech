const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

const newEstimatorHtml = `  <!-- ==========================================
       7. INTERACTIVE PROJECT PRICE ESTIMATOR
          (Feature-Based Custom Engineering per Developer Brief Page 4 & 5)
       ========================================== -->
  <section id="estimator" class="py-16 lg:py-24 bg-white relative scroll-mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section Heading matching Yankee Tech style -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-[10px] font-bold uppercase tracking-widest mb-3">
            <i class="fa-solid fa-calculator text-xs"></i>
            <span>TRANSPARENT FEATURE-BASED PRICING</span>
          </div>
          <h2 class="font-display font-extrabold text-2xl sm:text-4xl text-gray-900 tracking-tight">
            Interactive Project Price Estimator
          </h2>
          <p class="text-xs sm:text-sm text-gray-600 mt-2 max-w-xl leading-relaxed">
            Choose your project type, toggle the features you need, and see an estimated range with realistic timelines. Every project is fixed-price and paid in milestones.
          </p>
        </div>

        <!-- Milestone Guarantee Badge -->
        <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-purple-50 border border-purple-100 text-gray-700 text-xs font-semibold shadow-xs">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Milestone Payments: 30% / 30% / 40%</span>
        </div>
      </div>

      <!-- Estimator Main Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        <!-- Left 7 Columns: Interactive Controls -->
        <div data-anim="fade-right"
          class="lg:col-span-7 bg-[#faf8ff] border border-purple-100 rounded-3xl p-6 sm:p-8 space-y-8 shadow-card">

          <!-- STEP 1: Select Project Type -->
          <div>
            <div class="flex items-center justify-between mb-4">
              <label class="font-display font-bold text-sm text-gray-900 flex items-center gap-2.5">
                <span
                  class="w-6 h-6 rounded-full bg-brand-600 text-white text-xs flex items-center justify-center font-bold">1</span>
                <span>Select Project Type</span>
              </label>
              <span class="text-[11px] text-brand-600 font-semibold font-mono">STEP 1 OF 2</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3" id="serviceTrackButtons">

              <!-- Track 1: Starter MVP -->
              <button type="button" onclick="selectTrack('starter_mvp')" data-track="starter_mvp"
                class="track-btn text-left p-4 rounded-2xl border-2 border-brand-600 bg-white shadow-md transition flex items-start gap-3.5 ring-2 ring-brand-500/10">
                <div
                  class="w-10 h-10 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-lg shrink-0 mt-0.5">
                  <i class="fa-solid fa-rocket"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between">
                    <span class="font-display font-bold text-xs sm:text-sm text-gray-900 truncate">Starter SaaS MVP</span>
                    <span class="text-xs font-bold text-brand-600">From $2,200</span>
                  </div>
                  <p class="text-[11px] text-gray-500 mt-1 leading-snug">Core workflow, user auth &amp; admin panel (4–6 wks)</p>
                </div>
              </button>

              <!-- Track 2: Custom Web App / Portal -->
              <button type="button" onclick="selectTrack('custom_app')" data-track="custom_app"
                class="track-btn text-left p-4 rounded-2xl border-2 border-purple-100 bg-white/70 hover:bg-white transition flex items-start gap-3.5">
                <div
                  class="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-lg shrink-0 mt-0.5">
                  <i class="fa-solid fa-laptop-code"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between">
                    <span class="font-display font-bold text-xs sm:text-sm text-gray-900 truncate">Web App / Portal</span>
                    <span class="text-xs font-bold text-brand-600">From $2,500</span>
                  </div>
                  <p class="text-[11px] text-gray-500 mt-1 leading-snug">Client portal, roles &amp; custom dashboard (6–8 wks)</p>
                </div>
              </button>

              <!-- Track 3: Custom Platform / SaaS -->
              <button type="button" onclick="selectTrack('platform_saas')" data-track="platform_saas"
                class="track-btn text-left p-4 rounded-2xl border-2 border-purple-100 bg-white/70 hover:bg-white transition flex items-start gap-3.5">
                <div
                  class="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center text-lg shrink-0 mt-0.5">
                  <i class="fa-solid fa-cubes"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between">
                    <span class="font-display font-bold text-xs sm:text-sm text-gray-900 truncate">Custom Platform</span>
                    <span class="text-xs font-bold text-brand-600">From $3,000</span>
                  </div>
                  <p class="text-[11px] text-gray-500 mt-1 leading-snug">Multi-tenant architecture, billing &amp; scaling (8–12 wks)</p>
                </div>
              </button>

              <!-- Track 4: Dedicated Developer -->
              <button type="button" onclick="selectTrack('dedicated_dev')" data-track="dedicated_dev"
                class="track-btn text-left p-4 rounded-2xl border-2 border-purple-100 bg-white/70 hover:bg-white transition flex items-start gap-3.5">
                <div
                  class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg shrink-0 mt-0.5">
                  <i class="fa-solid fa-user-check"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between">
                    <span class="font-display font-bold text-xs sm:text-sm text-gray-900 truncate">Dedicated Dev</span>
                    <span class="text-xs font-bold text-brand-600">From $1,500/mo</span>
                  </div>
                  <p class="text-[11px] text-gray-500 mt-1 leading-snug">Senior full-stack engineer, 80h or 160h/mo</p>
                </div>
              </button>

              <!-- Track 5: Quick Solution / API Integration -->
              <button type="button" onclick="selectTrack('quick_solutions')" data-track="quick_solutions"
                class="sm:col-span-2 track-btn text-left p-3.5 rounded-2xl border-2 border-purple-100 bg-white/70 hover:bg-white transition flex items-center justify-between gap-3.5">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center text-sm">
                    <i class="fa-solid fa-bolt"></i>
                  </div>
                  <div>
                    <span class="font-display font-bold text-xs text-gray-900">Quick Solutions &amp; Integrations</span>
                    <span class="text-[11px] text-gray-500 block">GHL setup ($400), WP Launch ($400), 2-way sync ($500), AI bot ($300)</span>
                  </div>
                </div>
                <span class="text-xs font-bold text-brand-600 bg-purple-50 px-2.5 py-1 rounded-md">From $400</span>
              </button>

            </div>
          </div>

          <!-- STEP 2: Feature Add-ons (Developer Brief Page 4 & 5) -->
          <div class="pt-2 border-t border-purple-100">
            <div class="flex items-center justify-between mb-4">
              <label class="font-display font-bold text-sm text-gray-900 flex items-center gap-2.5">
                <span
                  class="w-6 h-6 rounded-full bg-brand-600 text-white text-xs flex items-center justify-center font-bold">2</span>
                <span>Toggle Feature Add-Ons</span>
              </label>
              <span class="text-[11px] text-gray-500">Add features to calculate scope</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3" id="addonsGrid">

              <!-- Addon 1: User Accounts & Roles ($250) -->
              <label
                class="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-purple-100 hover:border-brand-300 transition cursor-pointer group shadow-xs">
                <input type="checkbox" onchange="updateEstimate()" data-name="User Accounts &amp; Roles"
                  data-cost="250" class="addon-check w-4 h-4 text-brand-600 rounded border-gray-300 focus:ring-brand-500 mt-0.5" />
                <div class="flex-1">
                  <div class="flex items-center justify-between">
                    <span class="font-display font-bold text-xs text-gray-900 group-hover:text-brand-600 transition">User Accounts &amp; Roles</span>
                    <span class="text-[11px] font-bold text-brand-600">+$250</span>
                  </div>
                  <p class="text-[11px] text-gray-500 mt-0.5">Auth, permissions, password reset &amp; profiles</p>
                </div>
              </label>

              <!-- Addon 2: Admin Dashboard ($300) -->
              <label
                class="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-purple-100 hover:border-brand-300 transition cursor-pointer group shadow-xs">
                <input type="checkbox" onchange="updateEstimate()" data-name="Admin Dashboard &amp; CMS"
                  data-cost="300" class="addon-check w-4 h-4 text-brand-600 rounded border-gray-300 focus:ring-brand-500 mt-0.5" />
                <div class="flex-1">
                  <div class="flex items-center justify-between">
                    <span class="font-display font-bold text-xs text-gray-900 group-hover:text-brand-600 transition">Admin Dashboard</span>
                    <span class="text-[11px] font-bold text-brand-600">+$300</span>
                  </div>
                  <p class="text-[11px] text-gray-500 mt-0.5">User management, metrics &amp; data CRUD</p>
                </div>
              </label>

              <!-- Addon 3: Payments (Stripe) ($150) -->
              <label
                class="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-purple-100 hover:border-brand-300 transition cursor-pointer group shadow-xs">
                <input type="checkbox" onchange="updateEstimate()" data-name="Stripe Payments &amp; Subscriptions"
                  data-cost="150" class="addon-check w-4 h-4 text-brand-600 rounded border-gray-300 focus:ring-brand-500 mt-0.5" />
                <div class="flex-1">
                  <div class="flex items-center justify-between">
                    <span class="font-display font-bold text-xs text-gray-900 group-hover:text-brand-600 transition">Stripe Payments</span>
                    <span class="text-[11px] font-bold text-brand-600">+$150</span>
                  </div>
                  <p class="text-[11px] text-gray-500 mt-0.5">One-time checkouts, recurring billing &amp; webhooks</p>
                </div>
              </label>

              <!-- Addon 4: Third-Party API Integration ($200) -->
              <label
                class="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-purple-100 hover:border-brand-300 transition cursor-pointer group shadow-xs">
                <input type="checkbox" onchange="updateEstimate()" data-name="Third-Party API Integration"
                  data-cost="200" class="addon-check w-4 h-4 text-brand-600 rounded border-gray-300 focus:ring-brand-500 mt-0.5" />
                <div class="flex-1">
                  <div class="flex items-center justify-between">
                    <span class="font-display font-bold text-xs text-gray-900 group-hover:text-brand-600 transition">Third-Party API</span>
                    <span class="text-[11px] font-bold text-brand-600">+$200</span>
                  </div>
                  <p class="text-[11px] text-gray-500 mt-0.5">CRM, email, SMS, or external software sync</p>
                </div>
              </label>

              <!-- Addon 5: Reporting and Analytics ($250) -->
              <label
                class="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-purple-100 hover:border-brand-300 transition cursor-pointer group shadow-xs">
                <input type="checkbox" onchange="updateEstimate()" data-name="Reporting &amp; Analytics"
                  data-cost="250" class="addon-check w-4 h-4 text-brand-600 rounded border-gray-300 focus:ring-brand-500 mt-0.5" />
                <div class="flex-1">
                  <div class="flex items-center justify-between">
                    <span class="font-display font-bold text-xs text-gray-900 group-hover:text-brand-600 transition">Reporting &amp; Analytics</span>
                    <span class="text-[11px] font-bold text-brand-600">+$250</span>
                  </div>
                  <p class="text-[11px] text-gray-500 mt-0.5">Data visualization, chart graphs &amp; PDF exports</p>
                </div>
              </label>

              <!-- Addon 6: AI Feature ($250) -->
              <label
                class="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-purple-100 hover:border-brand-300 transition cursor-pointer group shadow-xs">
                <input type="checkbox" onchange="updateEstimate()" data-name="AI Feature (Chatbot / RAG)"
                  data-cost="250" class="addon-check w-4 h-4 text-brand-600 rounded border-gray-300 focus:ring-brand-500 mt-0.5" />
                <div class="flex-1">
                  <div class="flex items-center justify-between">
                    <span class="font-display font-bold text-xs text-gray-900 group-hover:text-brand-600 transition">AI Assistant / Bot</span>
                    <span class="text-[11px] font-bold text-brand-600">+$250</span>
                  </div>
                  <p class="text-[11px] text-gray-500 mt-0.5">OpenAI GPT-4o RAG, smart prompt flows &amp; automation</p>
                </div>
              </label>

              <!-- Addon 7: GoHighLevel Integration ($250) -->
              <label
                class="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-purple-100 hover:border-brand-300 transition cursor-pointer group shadow-xs">
                <input type="checkbox" onchange="updateEstimate()" data-name="GoHighLevel 2-Way Sync"
                  data-cost="250" class="addon-check w-4 h-4 text-brand-600 rounded border-gray-300 focus:ring-brand-500 mt-0.5" />
                <div class="flex-1">
                  <div class="flex items-center justify-between">
                    <span class="font-display font-bold text-xs text-gray-900 group-hover:text-brand-600 transition">GoHighLevel Integration</span>
                    <span class="text-[11px] font-bold text-brand-600">+$250</span>
                  </div>
                  <p class="text-[11px] text-gray-500 mt-0.5">Real-time bi-directional pipeline &amp; contact sync</p>
                </div>
              </label>

              <!-- Addon 8: UI/UX Figma Design ($200) -->
              <label
                class="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-purple-100 hover:border-brand-300 transition cursor-pointer group shadow-xs">
                <input type="checkbox" onchange="updateEstimate()" data-name="UI/UX Figma Design System"
                  data-cost="200" class="addon-check w-4 h-4 text-brand-600 rounded border-gray-300 focus:ring-brand-500 mt-0.5" />
                <div class="flex-1">
                  <div class="flex items-center justify-between">
                    <span class="font-display font-bold text-xs text-gray-900 group-hover:text-brand-600 transition">UI/UX Design System</span>
                    <span class="text-[11px] font-bold text-brand-600">+$200</span>
                  </div>
                  <p class="text-[11px] text-gray-500 mt-0.5">Conversion-focused design &amp; responsive prototype</p>
                </div>
              </label>

            </div>
          </div>

        </div>

        <!-- Right 5 Columns: Dynamic Summary & Scoping Card -->
        <div data-anim="fade-left" class="lg:col-span-5 sticky top-28">
          <div
            class="bg-gradient-to-br from-[#120727] via-[#1a083a] to-[#2b0c57] text-white rounded-3xl p-6 sm:p-8 border border-purple-500/30 shadow-2xl space-y-6 relative overflow-hidden">
            <div
              class="absolute -top-20 -right-20 w-44 h-44 bg-brand-500/25 rounded-full blur-3xl pointer-events-none">
            </div>

            <!-- Header -->
            <div class="border-b border-white/10 pb-4">
              <div class="flex items-center justify-between text-xs text-purple-300 font-mono mb-1">
                <span>ESTIMATED INVESTMENT</span>
                <span class="text-emerald-400 font-bold">±10% ESTIMATE</span>
              </div>
              <h3 id="summaryTrackTitle" class="font-display font-extrabold text-xl text-white">Starter SaaS MVP</h3>
              <p class="text-xs text-purple-200/80 mt-1">Based on selected architecture &amp; feature set</p>
            </div>

            <!-- Big Investment Range -->
            <div>
              <div class="text-[11px] uppercase tracking-wider text-purple-300 font-semibold mb-1">Estimated Price Range:</div>
              <div id="summaryTotalDisplay" class="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                $2,000 – $2,400
              </div>
              <div class="flex items-center gap-2 mt-2 text-xs text-purple-200/90">
                <i class="fa-solid fa-clock text-brand-400"></i>
                <span>Estimated Timeline: <strong id="summaryTimeline" class="text-white">4 to 6 Weeks</strong></span>
              </div>
            </div>

            <!-- Milestone Terms Guarantee (Developer Brief Page 4) -->
            <div class="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs">
              <div class="font-bold text-purple-200 flex items-center gap-2">
                <i class="fa-solid fa-shield-halved text-emerald-400"></i>
                <span>Payment in Milestones</span>
              </div>
              <p class="text-purple-200/75 leading-relaxed">
                Fixed price confirmed after a free call. Pay in transparent stages: <strong>30% to start</strong>, <strong>30% at midpoint demo</strong>, and <strong>40% at launch</strong>.
              </p>
            </div>

            <!-- Selected Addons Dynamic List -->
            <div class="space-y-1.5 pt-2 border-t border-white/10">
              <div class="text-[11px] font-mono text-purple-300 uppercase tracking-wider mb-1">Scope Breakdown:</div>
              <div class="flex items-center justify-between text-xs text-purple-200/90 py-0.5">
                <span id="breakdownBaseName" class="truncate">Starter MVP Core</span>
                <span id="breakdownBaseCost" class="font-bold text-white">$2,200</span>
              </div>
              <div id="breakdownAddonsList" class="space-y-1"></div>
            </div>

            <!-- Actions -->
            <div class="space-y-3 pt-2">
              <button type="button" onclick="applyEstimateToContact()"
                class="w-full btn-purple magnetic-btn text-white font-display font-bold text-xs sm:text-sm py-4 px-6 rounded-full shadow-glow flex items-center justify-center gap-2">
                <span>Book a Scoping Call With This Estimate</span>
                <i class="fa-solid fa-arrow-right"></i>
              </button>
              <div class="flex items-center justify-between text-[11px] text-purple-300 px-1">
                <button type="button" onclick="resetEstimator()" class="hover:text-white underline transition">
                  Reset Selection
                </button>
                <a href="#contact" class="hover:text-emerald-300 transition flex items-center gap-1">
                  <i class="fa-solid fa-phone text-[10px]"></i>
                  <span>Not sure about budget? Free 30-min call</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>`;

// Replace from `<!-- ==========================================\n       7. INTERACTIVE PROJECT PRICE ESTIMATOR` up to `<!-- ==========================================\n       9. CLIENT TESTIMONIALS`
const oldEstStart = html.indexOf('<!-- ==========================================\n       7. INTERACTIVE PROJECT PRICE ESTIMATOR');
const oldEstEnd = html.indexOf('<!-- ==========================================\n       9. CLIENT TESTIMONIALS');

if (oldEstStart !== -1 && oldEstEnd !== -1) {
  html = html.slice(0, oldEstStart) + newEstimatorHtml + '\n\n  ' + html.slice(oldEstEnd);
  console.log('Successfully replaced Estimator in index.html!');
} else {
  console.log('Could not find estimator bounds in index.html:', oldEstStart, oldEstEnd);
}

fs.writeFileSync('index.html', html, 'utf-8');
console.log('Saved index.html');
