const fs = require('fs');

const portfolioHtml = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Portfolio & Case Studies — Yankee Tech | Proven Engineering & Digital ROI</title>
  <meta name="description"
    content="Explore Yankee Tech's engineering portfolio: high-performance WordPress stores, custom full-stack SaaS apps, GoHighLevel agency funnels, and autonomous AI automation pipelines with measurable results." />

  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Google Fonts: Plus Jakarta Sans & Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
    rel="stylesheet">
  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
  <!-- Main JavaScript -->
  <script src="script.js"></script>
  <!-- Main Stylesheet -->
  <link rel="stylesheet" href="style.css" />
</head>

<body class="antialiased selection:bg-brand-600 selection:text-white bg-white text-gray-900">

  <!-- Scroll Progress Bar -->
  <div id="scroll-progress"></div>

  <!-- ==========================================
       1. STICKY HEADER / NAVBAR
       ========================================== -->
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-purple-100/80 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative">
      <!-- Brand Logo (YT Yankee Tech - Infinite Possibilities) -->
      <a href="index.html#home" class="flex items-center gap-3 group shrink-0">
        <div
          class="w-10 h-10 rounded-xl bg-[#120924] flex items-center justify-center shadow-md border border-purple-500/30 group-hover:border-purple-500 transition">
          <span
            class="font-display font-extrabold text-lg tracking-tighter bg-gradient-to-tr from-purple-400 via-fuchsia-400 to-indigo-300 bg-clip-text text-transparent">YT</span>
        </div>
        <div class="leading-none">
          <span class="block font-display font-extrabold text-lg text-gray-900 tracking-tight">Yankee Tech</span>
          <span class="block text-[10px] font-medium text-gray-400 tracking-wider uppercase mt-0.5">Infinite Possibilities</span>
        </div>
      </a>

      <!-- Center Nav Links -->
      <nav class="hidden md:flex items-center gap-8 text-xs font-semibold text-gray-700">
        <!-- 1. Home -->
        <a href="index.html#home" class="hover:text-brand-600 transition py-2">Home</a>

        <!-- 2. About Us -->
        <a href="about.html" class="hover:text-brand-600 transition py-2">About Us</a>

        <!-- 3. Services with Mega Menu -->
        <div class="group/mega py-6">
          <a href="services.html"
            class="flex items-center gap-1.5 py-2 hover:text-brand-600 transition group-hover/mega:text-brand-600">
            <span>Services</span>
            <i class="fa-solid fa-chevron-down text-[9px] text-gray-400 group-hover/mega:text-brand-600 group-hover/mega:rotate-180 transition-transform duration-300"></i>
          </a>

          <!-- Bento Mega Menu Dropdown -->
          <div
            class="absolute left-1/2 -translate-x-1/2 top-full w-full max-w-5xl px-4 sm:px-6 pointer-events-none opacity-0 invisible -translate-y-2 group-hover/mega:pointer-events-auto group-hover/mega:opacity-100 group-hover/mega:visible group-hover/mega:translate-y-0 transition-all duration-300 ease-out z-50">
            <div
              class="bg-white/95 backdrop-blur-2xl border border-purple-100/90 shadow-[0_25px_60px_-15px_rgba(91,12,212,0.18)] rounded-3xl p-6 lg:p-7 overflow-hidden ring-1 ring-purple-500/10">

              <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                <!-- Col 1: Web & Platforms -->
                <div class="lg:col-span-5 space-y-3">
                  <div class="flex items-center justify-between pb-2 border-b border-purple-100">
                    <span class="text-[10px] font-extrabold uppercase tracking-[0.16em] text-brand-600 flex items-center gap-1.5">
                      <i class="fa-solid fa-code text-xs"></i>
                      <span>WEB &amp; PLATFORM DEV</span>
                    </span>
                    <span class="text-[9px] font-bold text-gray-400 uppercase tracking-widest font-mono">CORE 01</span>
                  </div>
                  <div class="space-y-1">
                    <a href="service-wordpress.html"
                      class="group/item flex items-start gap-3 p-2.5 rounded-2xl hover:bg-purple-50/80 border border-transparent hover:border-purple-200/70 transition">
                      <div class="w-9 h-9 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-sm shrink-0 group-hover/item:bg-brand-600 group-hover/item:text-white transition">
                        <i class="fa-brands fa-wordpress"></i>
                      </div>
                      <div class="flex-1 min-w-0">
                        <h4 class="font-display font-bold text-xs text-gray-900 group-hover/item:text-brand-600 transition">WordPress &amp; WooCommerce</h4>
                        <p class="text-[11px] text-gray-500 leading-snug mt-0.5">Custom themes, Elementor, high speed &amp; checkouts.</p>
                      </div>
                    </a>
                    <a href="service-laravel-react.html"
                      class="group/item flex items-start gap-3 p-2.5 rounded-2xl hover:bg-purple-50/80 border border-transparent hover:border-purple-200/70 transition">
                      <div class="w-9 h-9 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-sm shrink-0 group-hover/item:bg-brand-600 group-hover/item:text-white transition">
                        <i class="fa-brands fa-laravel"></i>
                      </div>
                      <div class="flex-1 min-w-0">
                        <h4 class="font-display font-bold text-xs text-gray-900 group-hover/item:text-brand-600 transition">Full-Stack Laravel &amp; React</h4>
                        <p class="text-[11px] text-gray-500 leading-snug mt-0.5">Scalable bespoke SaaS apps &amp; RESTful APIs.</p>
                      </div>
                    </a>
                    <a href="service-woocommerce-stripe.html"
                      class="group/item flex items-start gap-3 p-2.5 rounded-2xl hover:bg-purple-50/80 border border-transparent hover:border-purple-200/70 transition">
                      <div class="w-9 h-9 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-sm shrink-0 group-hover/item:bg-brand-600 group-hover/item:text-white transition">
                        <i class="fa-brands fa-stripe"></i>
                      </div>
                      <div class="flex-1 min-w-0">
                        <h4 class="font-display font-bold text-xs text-gray-900 group-hover/item:text-brand-600 transition">WooCommerce &amp; Stripe</h4>
                        <p class="text-[11px] text-gray-500 leading-snug mt-0.5">Sub-second conversion-first checkouts.</p>
                      </div>
                    </a>
                  </div>
                </div>

                <!-- Col 2: Automation & AI -->
                <div class="lg:col-span-4 space-y-3">
                  <div class="flex items-center justify-between pb-2 border-b border-purple-100">
                    <span class="text-[10px] font-extrabold uppercase tracking-[0.16em] text-brand-600 flex items-center gap-1.5">
                      <i class="fa-solid fa-bolt text-xs"></i>
                      <span>AUTOMATION &amp; AI</span>
                    </span>
                    <span class="text-[9px] font-bold text-gray-400 uppercase tracking-widest font-mono">SCALE 02</span>
                  </div>
                  <div class="space-y-1">
                    <a href="service-ghl-funnels.html"
                      class="group/item flex items-start gap-3 p-2.5 rounded-2xl hover:bg-purple-50/80 border border-transparent hover:border-purple-200/70 transition">
                      <div class="w-9 h-9 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-sm shrink-0 group-hover/item:bg-brand-600 group-hover/item:text-white transition">
                        <i class="fa-solid fa-filter-circle-dollar"></i>
                      </div>
                      <div class="flex-1 min-w-0">
                        <h4 class="font-display font-bold text-xs text-gray-900 group-hover/item:text-brand-600 transition">GoHighLevel (GHL) Setup</h4>
                        <p class="text-[11px] text-gray-500 leading-snug mt-0.5">Pipelines, automations &amp; snapshots.</p>
                      </div>
                    </a>
                    <a href="service-ai-chatbots.html"
                      class="group/item flex items-start gap-3 p-2.5 rounded-2xl hover:bg-purple-50/80 border border-transparent hover:border-purple-200/70 transition">
                      <div class="w-9 h-9 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-sm shrink-0 group-hover/item:bg-brand-600 group-hover/item:text-white transition">
                        <i class="fa-solid fa-brain"></i>
                      </div>
                      <div class="flex-1 min-w-0">
                        <h4 class="font-display font-bold text-xs text-gray-900 group-hover/item:text-brand-600 transition">AI Agents &amp; Chatbots</h4>
                        <p class="text-[11px] text-gray-500 leading-snug mt-0.5">OpenAI RAG bots &amp; autonomous voice booking.</p>
                      </div>
                    </a>
                    <a href="service-ghl-wordpress-sync.html"
                      class="group/item flex items-start gap-3 p-2.5 rounded-2xl hover:bg-purple-50/80 border border-transparent hover:border-purple-200/70 transition">
                      <div class="w-9 h-9 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-sm shrink-0 group-hover/item:bg-brand-600 group-hover/item:text-white transition">
                        <i class="fa-solid fa-arrows-rotate"></i>
                      </div>
                      <div class="flex-1 min-w-0">
                        <h4 class="font-display font-bold text-xs text-gray-900 group-hover/item:text-brand-600 transition">GHL + WordPress Sync</h4>
                        <p class="text-[11px] text-gray-500 leading-snug mt-0.5">Real-time webhook sync &amp; SSO.</p>
                      </div>
                    </a>
                  </div>
                </div>

                <!-- Col 3: Spotlight Card -->
                <div
                  class="lg:col-span-3 rounded-2xl bg-gradient-to-br from-[#120727] via-[#1a083a] to-[#2b0c57] text-white p-5 border border-purple-500/30 flex flex-col justify-between relative overflow-hidden shadow-xl">
                  <div>
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-500/25 border border-brand-400/40 text-[9px] font-bold uppercase tracking-wider text-purple-200 mb-3">
                      <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Live Estimator
                    </span>
                    <h4 class="font-display font-extrabold text-sm text-white">Instant Price Calculator</h4>
                    <p class="text-[11px] text-purple-200/75 mt-1.5">
                      Calculate your project pages, workflows &amp; AI add-ons in 30 seconds.
                    </p>
                  </div>
                  <div class="mt-4 pt-3 border-t border-white/10">
                    <a href="index.html#estimator"
                      class="w-full btn-purple text-white text-[11px] font-bold py-2.5 px-3.5 rounded-xl flex items-center justify-center gap-2">
                      <span>Launch Tool</span>
                      <i class="fa-solid fa-arrow-right text-[10px]"></i>
                    </a>
                  </div>
                </div>
              </div>

              <!-- Mega Menu Footer Bar -->
              <div
                class="mt-5 pt-3 border-t border-purple-100/90 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs bg-purple-50/60 -mx-6 -mb-6 lg:-mx-7 lg:-mb-7 px-6 lg:px-7 py-3 rounded-b-3xl">
                <div class="flex items-center gap-2 text-gray-600">
                  <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span class="font-semibold text-gray-900">Accepting Q1 2026 Projects</span>
                </div>
                <a href="index.html#contact" class="font-bold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1.5 transition">
                  <span>Start Project Form</span>
                  <i class="fa-solid fa-arrow-right text-[10px]"></i>
                </a>
              </div>

            </div>
          </div>
        </div>

        <!-- 4. Portfolio (ACTIVE) -->
        <a href="portfolio.html" class="text-brand-600 font-bold hover:text-brand-700 transition py-2">Portfolio</a>

        <!-- 5. Use Cases -->
        <a href="use-cases.html" class="hover:text-brand-600 transition py-2">Use Cases</a>

        <!-- 6. Contact Us -->
        <a href="index.html#contact" class="hover:text-brand-600 transition py-2">Contact Us</a>
      </nav>

      <!-- Right CTA Pill & Hamburger -->
      <div class="flex items-center gap-2.5 sm:gap-3">
        <a href="index.html#contact"
          class="hidden sm:inline-flex btn-purple magnetic-btn text-white text-xs font-semibold px-4 sm:px-5 py-2.5 rounded-full items-center gap-2 shadow-sm">
          <span>Let's Talk</span>
          <i class="fa-solid fa-arrow-right text-[10px]"></i>
        </a>
        <button id="mobileMenuBtn" aria-label="Toggle navigation menu"
          class="md:hidden w-10 h-10 rounded-xl border border-purple-200/90 flex items-center justify-center text-gray-700 hover:bg-purple-50 transition active:scale-95">
          <i class="fa-solid fa-bars text-base"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Nav Drawer -->
    <div id="mobileMenu"
      class="hidden md:hidden bg-white/98 backdrop-blur-2xl border-b border-purple-100 px-5 sm:px-6 py-5 space-y-3 text-sm font-medium text-gray-700 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto">
      <a href="index.html#home" class="block py-1.5 hover:text-brand-600 transition border-b border-purple-50">Home</a>
      <a href="about.html" class="block py-1.5 hover:text-brand-600 transition border-b border-purple-50">About Us</a>
      <a href="services.html" class="block py-1.5 hover:text-brand-600 transition border-b border-purple-50">Services</a>
      <a href="portfolio.html" class="block py-1.5 text-brand-600 font-bold border-b border-purple-50">Portfolio</a>
      <a href="use-cases.html" class="block py-1.5 hover:text-brand-600 transition border-b border-purple-50">Use Cases</a>
      <a href="index.html#contact" class="block py-1.5 hover:text-brand-600 transition">Contact Us</a>
      <div class="pt-3">
        <a href="index.html#contact"
          class="btn-purple text-white text-xs font-semibold py-3.5 px-5 rounded-full w-full flex items-center justify-center gap-2 shadow-sm">
          <span>Let's Talk</span>
          <i class="fa-solid fa-arrow-right text-[10px]"></i>
        </a>
      </div>
    </div>
  </header>

  <!-- ==========================================
       2. HERO SECTION & STATS
       ========================================== -->
  <section class="hero-bg relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-purple-100/60">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <!-- Breadcrumbs -->
      <nav class="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-6" aria-label="Breadcrumb">
        <a href="index.html" class="hover:text-brand-600 transition">Home</a>
        <i class="fa-solid fa-chevron-right text-[9px] text-gray-400"></i>
        <span class="text-brand-600">Portfolio &amp; Case Studies</span>
      </nav>

      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-brand-700 text-[10px] font-bold uppercase tracking-widest mb-3">
          <i class="fa-solid fa-layer-group"></i>
          <span>PROVEN CLIENT WORK • 100+ COMPLETED DELIVERIES</span>
        </div>
        <h1 class="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight leading-tight">
          Engineered for Speed, Scale &amp; Measurable ROI
        </h1>
        <p class="text-sm sm:text-base text-gray-600 leading-relaxed mt-4">
          A deep dive into our production deliveries across WordPress stores, full-stack SaaS apps, GoHighLevel agency funnels, and autonomous AI automation pipelines. Real challenges, architectural solutions, and quantified results.
        </p>
      </div>

      <!-- 4 Key Impact Metric Counters -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 pt-8 border-t border-purple-100">
        <div class="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-purple-100 shadow-sm">
          <span class="block font-display font-extrabold text-2xl sm:text-3xl text-gray-900">100+</span>
          <span class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">Delivered Projects</span>
          <span class="block text-[10px] text-emerald-600 font-mono mt-0.5">100% on-time milestone SLA</span>
        </div>
        <div class="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-purple-100 shadow-sm">
          <span class="block font-display font-extrabold text-2xl sm:text-3xl text-brand-600">98.6%</span>
          <span class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">Avg PageSpeed Score</span>
          <span class="block text-[10px] text-emerald-600 font-mono mt-0.5">Sub-second mobile loads</span>
        </div>
        <div class="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-purple-100 shadow-sm">
          <span class="block font-display font-extrabold text-2xl sm:text-3xl text-gray-900">$14.5M+</span>
          <span class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">Client Revenue Driven</span>
          <span class="block text-[10px] text-emerald-600 font-mono mt-0.5">Processed across checkouts</span>
        </div>
        <div class="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-purple-100 shadow-sm">
          <span class="block font-display font-extrabold text-2xl sm:text-3xl text-fuchsia-600">24/7</span>
          <span class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">AI Automation Uptime</span>
          <span class="block text-[10px] text-emerald-600 font-mono mt-0.5">Autonomous lead qualification</span>
        </div>
      </div>

    </div>
  </section>

  <!-- ==========================================
       3. INTERACTIVE CATEGORY FILTER TABS
       ========================================== -->
  <section class="py-8 bg-white border-b border-gray-100 sticky top-20 z-30 shadow-xs backdrop-blur-md bg-white/95">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        <button type="button" onclick="filterPortfolio('all', this)"
          class="portfolio-filter-btn px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold bg-brand-600 text-white shadow-sm transition shrink-0 cursor-pointer">
          All Projects (12)
        </button>
        <button type="button" onclick="filterPortfolio('wordpress', this)"
          class="portfolio-filter-btn px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold bg-gray-100 hover:bg-purple-50 text-gray-700 transition shrink-0 cursor-pointer">
          WordPress &amp; E-Commerce (3)
        </button>
        <button type="button" onclick="filterPortfolio('fullstack', this)"
          class="portfolio-filter-btn px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold bg-gray-100 hover:bg-purple-50 text-gray-700 transition shrink-0 cursor-pointer">
          Full-Stack &amp; SaaS (3)
        </button>
        <button type="button" onclick="filterPortfolio('ghl', this)"
          class="portfolio-filter-btn px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold bg-gray-100 hover:bg-purple-50 text-gray-700 transition shrink-0 cursor-pointer">
          GoHighLevel &amp; CRM (3)
        </button>
        <button type="button" onclick="filterPortfolio('ai', this)"
          class="portfolio-filter-btn px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold bg-gray-100 hover:bg-purple-50 text-gray-700 transition shrink-0 cursor-pointer">
          AI &amp; Automation (3)
        </button>
      </div>
    </div>
  </section>

  <!-- ==========================================
       4. 12 IN-DEPTH CASE STUDIES SHOWCASE
       ========================================== -->
  <section class="py-16 lg:py-24 bg-gray-50/60">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div id="portfolioGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <!-- Case 1: LuxeAura (WordPress & Woo) -->
        <div id="luxeaura" data-anim="fade-up" data-delay="1" data-category="wordpress"
          class="portfolio-card bg-white rounded-3xl border border-purple-100 p-6 sm:p-7 flex flex-col justify-between shadow-sm relative overflow-hidden group">
          <div class="h-1.5 w-full bg-gradient-to-r from-purple-500 to-pink-500 absolute top-0 left-0"></div>
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-0.5 rounded-full">
                WordPress &amp; WooCommerce
              </span>
              <span class="text-[10px] text-emerald-600 font-mono font-bold flex items-center gap-1">
                <i class="fa-solid fa-circle-check"></i> Live Production
              </span>
            </div>
            <h3 class="font-display font-bold text-xl text-gray-900 group-hover:text-brand-600 transition">
              LuxeAura Luxury Couture
            </h3>
            <span class="text-xs text-gray-400 font-medium block mb-3">Luxury Fashion &amp; E-Commerce</span>

            <!-- Problem & Solution -->
            <div class="space-y-2 text-xs text-gray-600 mb-5 leading-relaxed">
              <p><strong class="text-gray-900">Challenge:</strong> Legacy WooCommerce site taking 4.8s to load, suffering 68% cart abandonment on mobile devices.</p>
              <p><strong class="text-gray-900">Solution:</strong> Ground-up bespoke theme build, 1-click Express Stripe checkout, Cloudflare APO edge caching, and critical CSS inlining.</p>
            </div>

            <!-- Quantified Results Grid -->
            <div class="bg-purple-50/50 rounded-2xl p-3.5 border border-purple-100 mb-5 grid grid-cols-2 gap-2 text-center">
              <div>
                <span class="block font-display font-extrabold text-base text-emerald-600">99 / 100</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">Mobile PageSpeed</span>
              </div>
              <div class="border-l border-purple-200/60">
                <span class="block font-display font-extrabold text-base text-brand-600">+142%</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">Checkout Conversion</span>
              </div>
            </div>

            <!-- Tech Stack Badges -->
            <div class="flex flex-wrap gap-1.5 mb-5">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">WordPress</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">WooCommerce</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Stripe Elements</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Cloudflare APO</span>
            </div>
          </div>

          <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
            <span class="text-[11px] text-gray-500 italic">"Over $1.2M in sales in 90 days."</span>
            <a href="service-wordpress.html" class="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1">
              <span>Specs</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
          </div>
        </div>

        <!-- Case 2: OmniSphere Logistics (Full-Stack) -->
        <div id="omnisphere" data-anim="fade-up" data-delay="2" data-category="fullstack"
          class="portfolio-card bg-white rounded-3xl border border-purple-100 p-6 sm:p-7 flex flex-col justify-between shadow-sm relative overflow-hidden group">
          <div class="h-1.5 w-full bg-gradient-to-r from-blue-500 to-indigo-600 absolute top-0 left-0"></div>
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                Full-Stack SaaS
              </span>
              <span class="text-[10px] text-blue-600 font-mono font-bold flex items-center gap-1">
                <i class="fa-solid fa-server"></i> Enterprise SLA
              </span>
            </div>
            <h3 class="font-display font-bold text-xl text-gray-900 group-hover:text-brand-600 transition">
              OmniSphere Global Logistics
            </h3>
            <span class="text-xs text-gray-400 font-medium block mb-3">Freight &amp; Supply Chain Portal</span>

            <div class="space-y-2 text-xs text-gray-600 mb-5 leading-relaxed">
              <p><strong class="text-gray-900">Challenge:</strong> Legacy backend breaking under 450k+ daily tracking pings with severe UI freeze.</p>
              <p><strong class="text-gray-900">Solution:</strong> Decoupled reactive Laravel 11 API engine, Redis queue pipelines, React 18 dashboard, and RESTful webhooks.</p>
            </div>

            <div class="bg-blue-50/50 rounded-2xl p-3.5 border border-blue-100 mb-5 grid grid-cols-2 gap-2 text-center">
              <div>
                <span class="block font-display font-extrabold text-base text-blue-700">+310%</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">API Throughput</span>
              </div>
              <div class="border-l border-blue-200/60">
                <span class="block font-display font-extrabold text-base text-emerald-600">99.99%</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">System Uptime</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-1.5 mb-5">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Laravel 11</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">React 18</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Redis Queues</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">AWS ECS</span>
            </div>
          </div>

          <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
            <span class="text-[11px] text-gray-500 italic">"Zero downtime in 12 months."</span>
            <a href="service-laravel-react.html" class="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1">
              <span>Specs</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
          </div>
        </div>

        <!-- Case 3: ApexScale (GoHighLevel) -->
        <div id="apexscale" data-anim="fade-up" data-delay="3" data-category="ghl"
          class="portfolio-card bg-white rounded-3xl border border-purple-100 p-6 sm:p-7 flex flex-col justify-between shadow-sm relative overflow-hidden group">
          <div class="h-1.5 w-full bg-gradient-to-r from-amber-500 to-orange-500 absolute top-0 left-0"></div>
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                GoHighLevel CRM
              </span>
              <span class="text-[10px] text-amber-600 font-mono font-bold flex items-center gap-1">
                25+ Sub-Accounts
              </span>
            </div>
            <h3 class="font-display font-bold text-xl text-gray-900 group-hover:text-brand-600 transition">
              ApexScale Agency Growth Engine
            </h3>
            <span class="text-xs text-gray-400 font-medium block mb-3">B2B Marketing &amp; Client Acquisition</span>

            <div class="space-y-2 text-xs text-gray-600 mb-5 leading-relaxed">
              <p><strong class="text-gray-900">Challenge:</strong> High ad spend with low show-up rates (32%) and messy lead handoff between media buyers.</p>
              <p><strong class="text-gray-900">Solution:</strong> Master GHL snapshot with instant SMS qualification triggers, missed-call text-back, and round-robin rep scheduling.</p>
            </div>

            <div class="bg-amber-50/50 rounded-2xl p-3.5 border border-amber-100 mb-5 grid grid-cols-2 gap-2 text-center">
              <div>
                <span class="block font-display font-extrabold text-base text-gray-900">12,400+</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">Leads Processed</span>
              </div>
              <div class="border-l border-amber-200/60">
                <span class="block font-display font-extrabold text-base text-amber-600">+215%</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">Call Show-Up Rate</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-1.5 mb-5">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">GoHighLevel</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Twilio SMS</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Custom Funnels</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Calendar Bot</span>
            </div>
          </div>

          <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
            <span class="text-[11px] text-gray-500 italic">"Added $380k in pipeline value."</span>
            <a href="service-ghl-funnels.html" class="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1">
              <span>Specs</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
          </div>
        </div>

        <!-- Case 4: NeuroConsult (AI & Automation) -->
        <div id="neuroconsult" data-anim="fade-up" data-delay="1" data-category="ai"
          class="portfolio-card bg-white rounded-3xl border border-purple-100 p-6 sm:p-7 flex flex-col justify-between shadow-sm relative overflow-hidden group">
          <div class="h-1.5 w-full bg-gradient-to-r from-fuchsia-500 to-indigo-600 absolute top-0 left-0"></div>
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="text-[10px] font-bold uppercase tracking-wider text-fuchsia-700 bg-fuchsia-50 border border-fuchsia-200 px-2.5 py-0.5 rounded-full">
                AI &amp; Automations
              </span>
              <span class="text-[10px] text-fuchsia-600 font-mono font-bold flex items-center gap-1">
                24/7 Live Agent
              </span>
            </div>
            <h3 class="font-display font-bold text-xl text-gray-900 group-hover:text-brand-600 transition">
              NeuroConsult AI Receptionist
            </h3>
            <span class="text-xs text-gray-400 font-medium block mb-3">Healthcare &amp; Mental Health Clinics</span>

            <div class="space-y-2 text-xs text-gray-600 mb-5 leading-relaxed">
              <p><strong class="text-gray-900">Challenge:</strong> 150+ daily inbound calls overwhelming staff; 40% after-hours calls lost to competitor clinics.</p>
              <p><strong class="text-gray-900">Solution:</strong> Voice AI telephone agent integrated with GPT-4o, clinic knowledge base RAG, and direct EHR calendar booking.</p>
            </div>

            <div class="bg-fuchsia-50/50 rounded-2xl p-3.5 border border-fuchsia-100 mb-5 grid grid-cols-2 gap-2 text-center">
              <div>
                <span class="block font-display font-extrabold text-base text-gray-900">2,800+</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">Auto Bookings</span>
              </div>
              <div class="border-l border-fuchsia-200/60">
                <span class="block font-display font-extrabold text-base text-fuchsia-600">$0</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">Added Payroll Cost</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-1.5 mb-5">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">OpenAI GPT-4o</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">ElevenLabs</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">n8n Workflows</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Pinecone RAG</span>
            </div>
          </div>

          <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
            <span class="text-[11px] text-gray-500 italic">"Zero missed patient calls."</span>
            <a href="service-ai-voice-receptionist.html" class="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1">
              <span>Specs</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
          </div>
        </div>

        <!-- Case 5: CreatorVault (2-Way GHL + WP Sync) -->
        <div id="creatorvault" data-anim="fade-up" data-delay="2" data-category="ghl wordpress"
          class="portfolio-card bg-white rounded-3xl border border-purple-100 p-6 sm:p-7 flex flex-col justify-between shadow-sm relative overflow-hidden group">
          <div class="h-1.5 w-full bg-gradient-to-r from-emerald-500 to-teal-600 absolute top-0 left-0"></div>
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                2-Way GHL Sync
              </span>
              <span class="text-[10px] text-emerald-600 font-mono font-bold flex items-center gap-1">
                Zero Desync Error
              </span>
            </div>
            <h3 class="font-display font-bold text-xl text-gray-900 group-hover:text-brand-600 transition">
              CreatorVault Membership Platform
            </h3>
            <span class="text-xs text-gray-400 font-medium block mb-3">Education &amp; Creator Academy</span>

            <div class="space-y-2 text-xs text-gray-600 mb-5 leading-relaxed">
              <p><strong class="text-gray-900">Challenge:</strong> WordPress student course progress wasn't syncing with GoHighLevel CRM, causing wrong email drip triggers.</p>
              <p><strong class="text-gray-900">Solution:</strong> Custom bi-directional webhook gateway, OAuth single sign-on, and real-time event listener syncing 18,000+ accounts.</p>
            </div>

            <div class="bg-emerald-50/50 rounded-2xl p-3.5 border border-emerald-100 mb-5 grid grid-cols-2 gap-2 text-center">
              <div>
                <span class="block font-display font-extrabold text-base text-emerald-600">&lt;400ms</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">Sync Latency</span>
              </div>
              <div class="border-l border-emerald-200/60">
                <span class="block font-display font-extrabold text-base text-gray-900">18,000+</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">Enrolled Students</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-1.5 mb-5">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">WordPress</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">MemberPress</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">GHL API v2</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Make.com</span>
            </div>
          </div>

          <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
            <span class="text-[11px] text-gray-500 italic">"Completely automated our academy."</span>
            <a href="service-ghl-wordpress-sync.html" class="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1">
              <span>Specs</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
          </div>
        </div>

        <!-- Case 6: FinTrack Pro (Full-Stack SaaS) -->
        <div id="fintrack" data-anim="fade-up" data-delay="3" data-category="fullstack"
          class="portfolio-card bg-white rounded-3xl border border-purple-100 p-6 sm:p-7 flex flex-col justify-between shadow-sm relative overflow-hidden group">
          <div class="h-1.5 w-full bg-gradient-to-r from-indigo-500 to-purple-600 absolute top-0 left-0"></div>
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="text-[10px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded-full">
                Full-Stack &amp; UI/UX
              </span>
              <span class="text-[10px] text-indigo-600 font-mono font-bold flex items-center gap-1">
                $1.8M ARR Tracked
              </span>
            </div>
            <h3 class="font-display font-bold text-xl text-gray-900 group-hover:text-brand-600 transition">
              FinTrack Pro Financial SaaS
            </h3>
            <span class="text-xs text-gray-400 font-medium block mb-3">Fintech Analytics &amp; Invoicing</span>

            <div class="space-y-2 text-xs text-gray-600 mb-5 leading-relaxed">
              <p><strong class="text-gray-900">Challenge:</strong> Founders needed a sleek, multi-tenant cashflow dashboard with custom automated PDF invoicing within 3 weeks.</p>
              <p><strong class="text-gray-900">Solution:</strong> Next.js 14 App Router, PostgreSQL on Supabase, Tailwind conversion UI, and automated Stripe billing webhook logic.</p>
            </div>

            <div class="bg-indigo-50/50 rounded-2xl p-3.5 border border-indigo-100 mb-5 grid grid-cols-2 gap-2 text-center">
              <div>
                <span class="block font-display font-extrabold text-base text-gray-900">14 Days</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">MVP Turnaround</span>
              </div>
              <div class="border-l border-indigo-200/60">
                <span class="block font-display font-extrabold text-base text-indigo-600">4.9 / 5.0</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">Client Review</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-1.5 mb-5">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Next.js 14</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Tailwind CSS</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">PostgreSQL</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Stripe Billing</span>
            </div>
          </div>

          <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
            <span class="text-[11px] text-gray-500 italic">"Fastest sprint delivery we've seen."</span>
            <a href="service-laravel-react.html" class="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1">
              <span>Specs</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
          </div>
        </div>

        <!-- Case 7: BioVeda (WordPress Speed SEO) -->
        <div id="bioveda" data-anim="fade-up" data-delay="1" data-category="wordpress"
          class="portfolio-card bg-white rounded-3xl border border-purple-100 p-6 sm:p-7 flex flex-col justify-between shadow-sm relative overflow-hidden group">
          <div class="h-1.5 w-full bg-gradient-to-r from-emerald-500 to-green-600 absolute top-0 left-0"></div>
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                WordPress &amp; Speed SEO
              </span>
              <span class="text-[10px] text-emerald-600 font-mono font-bold flex items-center gap-1">
                100 Core Web Vitals
              </span>
            </div>
            <h3 class="font-display font-bold text-xl text-gray-900 group-hover:text-brand-600 transition">
              BioVeda Nutraceuticals
            </h3>
            <span class="text-xs text-gray-400 font-medium block mb-3">Health &amp; Wellness Supplements</span>

            <div class="space-y-2 text-xs text-gray-600 mb-5 leading-relaxed">
              <p><strong class="text-gray-900">Challenge:</strong> Heavy Elementor bloat caused 5.2s Largest Contentful Paint (LCP), penalizing organic Google SEO rankings.</p>
              <p><strong class="text-gray-900">Solution:</strong> Asset minification, Next-Gen WebP/AVIF pipeline, server-side Redis object cache, and DOM tree pruning.</p>
            </div>

            <div class="bg-emerald-50/50 rounded-2xl p-3.5 border border-emerald-100 mb-5 grid grid-cols-2 gap-2 text-center">
              <div>
                <span class="block font-display font-extrabold text-base text-emerald-600">0.7s</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">LCP Score</span>
              </div>
              <div class="border-l border-emerald-200/60">
                <span class="block font-display font-extrabold text-base text-gray-900">+88%</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">Organic Traffic</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-1.5 mb-5">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">WordPress</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Speed Optimization</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Redis Cache</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Schema Markup</span>
            </div>
          </div>

          <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
            <span class="text-[11px] text-gray-500 italic">"Ranked #1 for target keywords."</span>
            <a href="service-speed-seo.html" class="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1">
              <span>Specs</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
          </div>
        </div>

        <!-- Case 8: CloudSync (Custom REST & APIs) -->
        <div id="cloudsync" data-anim="fade-up" data-delay="2" data-category="fullstack"
          class="portfolio-card bg-white rounded-3xl border border-purple-100 p-6 sm:p-7 flex flex-col justify-between shadow-sm relative overflow-hidden group">
          <div class="h-1.5 w-full bg-gradient-to-r from-sky-500 to-indigo-600 absolute top-0 left-0"></div>
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200 px-2.5 py-0.5 rounded-full">
                API Engineering
              </span>
              <span class="text-[10px] text-sky-600 font-mono font-bold flex items-center gap-1">
                1.4M Monthly Calls
              </span>
            </div>
            <h3 class="font-display font-bold text-xl text-gray-900 group-hover:text-brand-600 transition">
              CloudSync DevPortal Gateway
            </h3>
            <span class="text-xs text-gray-400 font-medium block mb-3">Developer Tools &amp; Data Pipeline</span>

            <div class="space-y-2 text-xs text-gray-600 mb-5 leading-relaxed">
              <p><strong class="text-gray-900">Challenge:</strong> Synchronizing data between 12 separate SaaS tools resulted in lost payloads and unhandled rate limits.</p>
              <p><strong class="text-gray-900">Solution:</strong> Unified GraphQL and REST proxy with exponential backoff retry queues, secret token rotation, and logging.</p>
            </div>

            <div class="bg-sky-50/50 rounded-2xl p-3.5 border border-sky-100 mb-5 grid grid-cols-2 gap-2 text-center">
              <div>
                <span class="block font-display font-extrabold text-base text-emerald-600">99.98%</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">Delivery Success</span>
              </div>
              <div class="border-l border-sky-200/60">
                <span class="block font-display font-extrabold text-base text-gray-900">&lt;65ms</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">Gateway Latency</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-1.5 mb-5">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Node.js</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">GraphQL</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Docker</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">RabbitMQ</span>
            </div>
          </div>

          <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
            <span class="text-[11px] text-gray-500 italic">"Bulletproof webhook infrastructure."</span>
            <a href="service-api-engineering.html" class="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1">
              <span>Specs</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
          </div>
        </div>

        <!-- Case 9: DentalCare Direct (GoHighLevel) -->
        <div id="dentalcare" data-anim="fade-up" data-delay="3" data-category="ghl"
          class="portfolio-card bg-white rounded-3xl border border-purple-100 p-6 sm:p-7 flex flex-col justify-between shadow-sm relative overflow-hidden group">
          <div class="h-1.5 w-full bg-gradient-to-r from-teal-500 to-cyan-600 absolute top-0 left-0"></div>
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full">
                GoHighLevel CRM
              </span>
              <span class="text-[10px] text-teal-600 font-mono font-bold flex items-center gap-1">
                Local Patient Gen
              </span>
            </div>
            <h3 class="font-display font-bold text-xl text-gray-900 group-hover:text-brand-600 transition">
              DentalCare Direct Patient Funnels
            </h3>
            <span class="text-xs text-gray-400 font-medium block mb-3">Dental &amp; Healthcare Clinics</span>

            <div class="space-y-2 text-xs text-gray-600 mb-5 leading-relaxed">
              <p><strong class="text-gray-900">Challenge:</strong> High cost per consultation ($140+) with ad traffic bouncing off slow generic WordPress pages.</p>
              <p><strong class="text-gray-900">Solution:</strong> 2-step insurance check qualification funnel in GHL, instant automated booking confirmation, and SMS reminders.</p>
            </div>

            <div class="bg-teal-50/50 rounded-2xl p-3.5 border border-teal-100 mb-5 grid grid-cols-2 gap-2 text-center">
              <div>
                <span class="block font-display font-extrabold text-base text-teal-700">-58%</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">Acquisition Cost</span>
              </div>
              <div class="border-l border-teal-200/60">
                <span class="block font-display font-extrabold text-base text-gray-900">340+</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">New Consultations</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-1.5 mb-5">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">GoHighLevel</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">SMS Automation</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Calendar Engine</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Custom CSS</span>
            </div>
          </div>

          <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
            <span class="text-[11px] text-gray-500 italic">"Filled our schedule for 6 months."</span>
            <a href="service-ghl-funnels.html" class="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1">
              <span>Specs</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
          </div>
        </div>

        <!-- Case 10: LegalBrief AI (AI & Automation) -->
        <div id="legalbrief" data-anim="fade-up" data-delay="1" data-category="ai"
          class="portfolio-card bg-white rounded-3xl border border-purple-100 p-6 sm:p-7 flex flex-col justify-between shadow-sm relative overflow-hidden group">
          <div class="h-1.5 w-full bg-gradient-to-r from-violet-500 to-purple-700 absolute top-0 left-0"></div>
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="text-[10px] font-bold uppercase tracking-wider text-violet-700 bg-violet-50 border border-violet-200 px-2.5 py-0.5 rounded-full">
                AI &amp; Automation
              </span>
              <span class="text-[10px] text-violet-600 font-mono font-bold flex items-center gap-1">
                Zero Data Leakage
              </span>
            </div>
            <h3 class="font-display font-bold text-xl text-gray-900 group-hover:text-brand-600 transition">
              LegalBrief AI Contract Auditor
            </h3>
            <span class="text-xs text-gray-400 font-medium block mb-3">Corporate Law &amp; Compliance</span>

            <div class="space-y-2 text-xs text-gray-600 mb-5 leading-relaxed">
              <p><strong class="text-gray-900">Challenge:</strong> Senior associates wasting 12+ hours weekly manually extracting liability terms from 80-page contracts.</p>
              <p><strong class="text-gray-900">Solution:</strong> Private self-hosted RAG audit bot with vector chunking, page-referenced citations, and automated risk scoring.</p>
            </div>

            <div class="bg-violet-50/50 rounded-2xl p-3.5 border border-violet-100 mb-5 grid grid-cols-2 gap-2 text-center">
              <div>
                <span class="block font-display font-extrabold text-base text-violet-700">-82%</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">Review Time</span>
              </div>
              <div class="border-l border-violet-200/60">
                <span class="block font-display font-extrabold text-base text-emerald-600">100%</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">Privacy Compliant</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-1.5 mb-5">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">OpenAI API</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">LangChain</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Qdrant Vector DB</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Next.js UI</span>
            </div>
          </div>

          <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
            <span class="text-[11px] text-gray-500 italic">"Saves hundreds of attorney hours."</span>
            <a href="service-ai-chatbots.html" class="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1">
              <span>Specs</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
          </div>
        </div>

        <!-- Case 11: NomadStay (Full-Stack Next.js) -->
        <div id="nomadstay" data-anim="fade-up" data-delay="2" data-category="fullstack"
          class="portfolio-card bg-white rounded-3xl border border-purple-100 p-6 sm:p-7 flex flex-col justify-between shadow-sm relative overflow-hidden group">
          <div class="h-1.5 w-full bg-gradient-to-r from-rose-500 to-orange-500 absolute top-0 left-0"></div>
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="text-[10px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded-full">
                Full-Stack SaaS
              </span>
              <span class="text-[10px] text-rose-600 font-mono font-bold flex items-center gap-1">
                Zero OTA Fees
              </span>
            </div>
            <h3 class="font-display font-bold text-xl text-gray-900 group-hover:text-brand-600 transition">
              NomadStay Boutique Booking Engine
            </h3>
            <span class="text-xs text-gray-400 font-medium block mb-3">Hospitality &amp; Property Rentals</span>

            <div class="space-y-2 text-xs text-gray-600 mb-5 leading-relaxed">
              <p><strong class="text-gray-900">Challenge:</strong> High 18% OTA platform fees eating directly into direct property management margins.</p>
              <p><strong class="text-gray-900">Solution:</strong> Custom Next.js 14 direct booking portal with Stripe Connect multi-currency escrow, interactive map, and iCal sync.</p>
            </div>

            <div class="bg-rose-50/50 rounded-2xl p-3.5 border border-rose-100 mb-5 grid grid-cols-2 gap-2 text-center">
              <div>
                <span class="block font-display font-extrabold text-base text-gray-900">$940k+</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">Direct Bookings</span>
              </div>
              <div class="border-l border-rose-200/60">
                <span class="block font-display font-extrabold text-base text-emerald-600">$169k</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">Saved Commissions</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-1.5 mb-5">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Next.js 14</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Stripe Connect</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Tailwind</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">iCal Sync</span>
            </div>
          </div>

          <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
            <span class="text-[11px] text-gray-500 italic">"Completely liberated our bookings."</span>
            <a href="service-laravel-react.html" class="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1">
              <span>Specs</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
          </div>
        </div>

        <!-- Case 12: EliteScale (White-Label Agency) -->
        <div id="elitescale" data-anim="fade-up" data-delay="3" data-category="wordpress ghl fullstack"
          class="portfolio-card bg-white rounded-3xl border border-purple-100 p-6 sm:p-7 flex flex-col justify-between shadow-sm relative overflow-hidden group">
          <div class="h-1.5 w-full bg-gradient-to-r from-purple-600 to-indigo-700 absolute top-0 left-0"></div>
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="text-[10px] font-bold uppercase tracking-wider text-brand-700 bg-purple-50 border border-purple-200 px-2.5 py-0.5 rounded-full">
                White-Label Agency
              </span>
              <span class="text-[10px] text-brand-600 font-mono font-bold flex items-center gap-1">
                Dedicated Sprint Pod
              </span>
            </div>
            <h3 class="font-display font-bold text-xl text-gray-900 group-hover:text-brand-600 transition">
              EliteScale Agency White-Label Pod
            </h3>
            <span class="text-xs text-gray-400 font-medium block mb-3">Dedicated Agency Engineering</span>

            <div class="space-y-2 text-xs text-gray-600 mb-5 leading-relaxed">
              <p><strong class="text-gray-900">Challenge:</strong> Fast-growing US agency suffering from unreliable freelancers and missed launch deadlines.</p>
              <p><strong class="text-gray-900">Solution:</strong> A dedicated 3-developer Yankee Tech pod managing WordPress custom themes, GHL setups, and code QA on monthly retainer.</p>
            </div>

            <div class="bg-purple-50/50 rounded-2xl p-3.5 border border-purple-100 mb-5 grid grid-cols-2 gap-2 text-center">
              <div>
                <span class="block font-display font-extrabold text-base text-gray-900">42 Sites</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">Launched in 12 Mo</span>
              </div>
              <div class="border-l border-purple-200/60">
                <span class="block font-display font-extrabold text-base text-emerald-600">Zero</span>
                <span class="block text-[9px] text-gray-500 uppercase tracking-tight">Delayed Milestones</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-1.5 mb-5">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">Dedicated Team</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">WordPress</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">GHL CRM</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">CI/CD QA</span>
            </div>
          </div>

          <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
            <span class="text-[11px] text-gray-500 italic">"Our secret weapon for scaling."</span>
            <a href="service-white-label-agency.html" class="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1">
              <span>Specs</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- ==========================================
       5. CLIENT TESTIMONIALS & SOCIAL PROOF
       ========================================== -->
  <section class="py-16 lg:py-20 bg-white border-t border-purple-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-600 block mb-2">VERIFIED PARTNER FEEDBACK</span>
        <h2 class="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight">
          What Founders &amp; Leaders Say
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Review 1 -->
        <div class="p-6 rounded-3xl bg-gray-50 border border-gray-200/80 space-y-4">
          <div class="flex text-amber-400 text-xs gap-1">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
          </div>
          <p class="text-xs text-gray-600 leading-relaxed italic">
            "Yankee Tech took our WooCommerce store from a sluggish 4.8s mobile disaster to a blistering 0.5s sub-second checkout. Our conversion rate jumped by 142% in the first quarter alone."
          </p>
          <div class="flex items-center gap-3 pt-2 border-t border-gray-200/60">
            <div class="w-9 h-9 rounded-full bg-brand-600 text-white font-bold text-xs flex items-center justify-center">
              SR
            </div>
            <div>
              <span class="block font-bold text-xs text-gray-900">Sophia Reynolds</span>
              <span class="block text-[10px] text-gray-500">Managing Director, LuxeAura</span>
            </div>
          </div>
        </div>

        <!-- Review 2 -->
        <div class="p-6 rounded-3xl bg-gray-50 border border-gray-200/80 space-y-4">
          <div class="flex text-amber-400 text-xs gap-1">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
          </div>
          <p class="text-xs text-gray-600 leading-relaxed italic">
            "Their 2-way GoHighLevel + WordPress integration solved a nightmare we fought with for months. 18,000 students sync automatically with zero manual support tickets. Invaluable engineering team."
          </p>
          <div class="flex items-center gap-3 pt-2 border-t border-gray-200/60">
            <div class="w-9 h-9 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">
              DM
            </div>
            <div>
              <span class="block font-bold text-xs text-gray-900">David Miller</span>
              <span class="block text-[10px] text-gray-500">Founder, CreatorVault Academy</span>
            </div>
          </div>
        </div>

        <!-- Review 3 -->
        <div class="p-6 rounded-3xl bg-gray-50 border border-gray-200/80 space-y-4">
          <div class="flex text-amber-400 text-xs gap-1">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
          </div>
          <p class="text-xs text-gray-600 leading-relaxed italic">
            "Finding a white-label partner that writes clean code, honors deadlines, and can build both Laravel backends and complex GoHighLevel automations is rare. Yankee Tech is our greatest unfair advantage."
          </p>
          <div class="flex items-center gap-3 pt-2 border-t border-gray-200/60">
            <div class="w-9 h-9 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
              AC
            </div>
            <div>
              <span class="block font-bold text-xs text-gray-900">Aaron Chen</span>
              <span class="block text-[10px] text-gray-500">CEO, ApexScale Agency</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- ==========================================
       6. INTERACTIVE CTA SECTION
       ========================================== -->
  <section class="py-16 lg:py-20 contact-cosmic-bg text-white relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
      <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-500/30 border border-brand-400/40 text-[10px] font-bold uppercase tracking-widest text-purple-200">
        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>ACCEPTING NEW CLIENTS FOR 2026</span>
      </div>

      <h2 class="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight max-w-2xl mx-auto">
        Ready to Build Your Next High-Impact Digital Solution?
      </h2>

      <p class="text-xs sm:text-sm text-purple-200/80 max-w-xl mx-auto leading-relaxed">
        Get a technical architecture proposal, turnaround estimate, and exact project roadmap within 24 hours.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <a href="index.html#contact"
          class="w-full sm:w-auto btn-purple text-white text-xs font-semibold px-7 py-3.5 rounded-full inline-flex items-center justify-center gap-2 shadow-glow transition">
          <i class="fa-solid fa-paper-plane text-xs"></i>
          <span>Start 4-Step Project Form</span>
        </a>
        <a href="index.html#estimator"
          class="w-full sm:w-auto px-6 py-3.5 rounded-full border border-purple-400/50 hover:bg-purple-900/40 text-purple-200 text-xs font-semibold inline-flex items-center justify-center gap-2 transition">
          <i class="fa-solid fa-calculator text-xs"></i>
          <span>Use Project Price Estimator</span>
        </a>
      </div>
    </div>
  </section>

  <!-- ==========================================
       7. GLOBAL 2026 FOOTER
       ========================================== -->
  <footer class="bg-[#0b0517] text-white pt-16 pb-12 border-t border-purple-900/40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-purple-900/40">
        
        <!-- Col 1: Brand Info -->
        <div class="lg:col-span-2 space-y-4">
          <a href="index.html#home" class="flex items-center gap-3 group">
            <div class="w-10 h-10 rounded-xl bg-purple-950 flex items-center justify-center shadow-md border border-purple-500/40">
              <span class="font-display font-extrabold text-lg bg-gradient-to-tr from-purple-400 via-fuchsia-400 to-indigo-300 bg-clip-text text-transparent">YT</span>
            </div>
            <div class="leading-none">
              <span class="block font-display font-extrabold text-lg text-white tracking-tight">Yankee Tech</span>
              <span class="block text-[10px] font-medium text-gray-400 tracking-wider uppercase mt-0.5">Infinite Possibilities</span>
            </div>
          </a>
          <p class="text-xs text-gray-400 leading-relaxed max-w-sm">
            Elite digital engineering studio building bespoke WordPress storefronts, full-stack web applications, automated GoHighLevel CRM funnels, and enterprise AI workflows.
          </p>
          <div class="flex items-center gap-3 text-sm text-purple-300 pt-1">
            <a href="#" class="w-8 h-8 rounded-full bg-purple-900/40 hover:bg-brand-600 flex items-center justify-center transition"><i class="fa-brands fa-github"></i></a>
            <a href="#" class="w-8 h-8 rounded-full bg-purple-900/40 hover:bg-brand-600 flex items-center justify-center transition"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="#" class="w-8 h-8 rounded-full bg-purple-900/40 hover:bg-brand-600 flex items-center justify-center transition"><i class="fa-brands fa-x-twitter"></i></a>
          </div>
        </div>

        <!-- Col 2: Navigation Links -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-purple-300 mb-3 font-mono">Pages</h4>
          <ul class="space-y-2 text-xs text-gray-400">
            <li><a href="index.html#home" class="hover:text-white transition">Home</a></li>
            <li><a href="about.html" class="hover:text-white transition">About Us</a></li>
            <li><a href="services.html" class="hover:text-white transition">All Services</a></li>
            <li><a href="portfolio.html" class="text-purple-300 font-bold hover:text-white transition">Portfolio &amp; Work</a></li>
            <li><a href="use-cases.html" class="hover:text-white transition">Use Cases</a></li>
            <li><a href="index.html#contact" class="hover:text-white transition">Contact &amp; Quotes</a></li>
          </ul>
        </div>

        <!-- Col 3: Core Capabilities -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-purple-300 mb-3 font-mono">Core Services</h4>
          <ul class="space-y-2 text-xs text-gray-400">
            <li><a href="service-wordpress.html" class="hover:text-white transition">WordPress &amp; Elementor</a></li>
            <li><a href="service-laravel-react.html" class="hover:text-white transition">Laravel &amp; React SaaS</a></li>
            <li><a href="service-ghl-funnels.html" class="hover:text-white transition">GoHighLevel Funnels</a></li>
            <li><a href="service-ai-chatbots.html" class="hover:text-white transition">AI Agents &amp; Chatbots</a></li>
            <li><a href="service-ghl-wordpress-sync.html" class="hover:text-white transition">2-Way GHL Sync</a></li>
            <li><a href="service-speed-seo.html" class="hover:text-white transition">95+ Speed SEO</a></li>
          </ul>
        </div>

        <!-- Col 4: Contact Info -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-purple-300 mb-3 font-mono">Contact</h4>
          <ul class="space-y-2.5 text-xs text-gray-400">
            <li class="flex items-center gap-2">
              <i class="fa-solid fa-envelope text-brand-400"></i>
              <span>hello@yankeetech.com</span>
            </li>
            <li class="flex items-center gap-2">
              <i class="fa-solid fa-phone text-brand-400"></i>
              <span>+1 (555) 019-2834</span>
            </li>
            <li class="flex items-center gap-2">
              <i class="fa-solid fa-clock text-emerald-400"></i>
              <span>Mon - Fri: 24h Turnaround</span>
            </li>
            <li class="pt-2">
              <a href="index.html#contact" class="text-brand-400 hover:text-brand-300 font-semibold underline">Book Strategy Session →</a>
            </li>
          </ul>
        </div>

      </div>

      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-3">
        <span>© 2026 Yankee Tech. All rights reserved. Built for high-growth businesses.</span>
        <div class="flex items-center gap-4">
          <a href="#" class="hover:text-gray-400 transition">Privacy Policy</a>
          <span>•</span>
          <a href="#" class="hover:text-gray-400 transition">Terms of Service</a>
          <span>•</span>
          <a href="portfolio.html" class="hover:text-gray-400 transition">Portfolio Hub</a>
        </div>
      </div>
    </div>
  </footer>

</body>

</html>
`;

fs.writeFileSync('portfolio.html', portfolioHtml, 'utf8');
console.log('portfolio.html created successfully! Size:', portfolioHtml.length, 'bytes');

