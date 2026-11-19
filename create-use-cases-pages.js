const fs = require('fs');
const path = require('path');

// 1. MASTER HUB PAGE: use-cases.html
const masterHubHtml = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Use Cases & Client Transformations — Yankee Tech</title>
  <meta name="description"
    content="Discover how Yankee Tech engineers high-performance web systems, GoHighLevel CRM funnels, and autonomous AI agents for e-commerce brands, SaaS platforms, digital agencies, and startups." />

  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet">
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
      <a href="index.html" class="flex items-center gap-3 group shrink-0">
        <div class="w-10 h-10 rounded-xl bg-[#120924] flex items-center justify-center shadow-md border border-purple-500/30 group-hover:border-purple-500 transition">
          <span class="font-display font-extrabold text-lg tracking-tighter bg-gradient-to-tr from-purple-400 via-fuchsia-400 to-indigo-300 bg-clip-text text-transparent">YT</span>
        </div>
        <div class="leading-none">
          <span class="block font-display font-extrabold text-lg text-gray-900 tracking-tight">Yankee Tech</span>
          <span class="block text-[10px] font-medium text-gray-400 tracking-wider uppercase mt-0.5">Infinite Possibilities</span>
        </div>
      </a>

      <!-- Center Nav Links -->
      <nav class="hidden md:flex items-center gap-8 text-xs font-semibold text-gray-700">
        <a href="index.html" class="hover:text-brand-600 transition py-2">Home</a>
        <a href="about.html" class="hover:text-brand-600 transition py-2">About Us</a>
        <a href="services.html" class="hover:text-brand-600 transition py-2">Services</a>
        <a href="use-cases.html" class="text-brand-600 font-bold bg-purple-50 border border-purple-200/60 px-3 py-1.5 rounded-full transition shadow-xs">Use Cases</a>
        <a href="index.html#contact" class="hover:text-brand-600 transition py-2">Contact Us</a>
      </nav>

      <!-- Right CTA -->
      <div class="flex items-center gap-2.5 sm:gap-3">
        <a href="index.html#contact" class="hidden sm:inline-flex btn-purple magnetic-btn text-white text-xs font-semibold px-4 sm:px-5 py-2.5 rounded-full items-center gap-2 shadow-sm">
          <span>Let's Talk</span>
          <i class="fa-solid fa-arrow-right text-[10px]"></i>
        </a>
        <button id="mobileMenuBtn" aria-label="Toggle navigation menu" class="md:hidden w-10 h-10 rounded-xl border border-purple-200/90 flex items-center justify-center text-gray-700 hover:bg-purple-50 transition active:scale-95">
          <i class="fa-solid fa-bars text-base"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div id="mobileMenu" class="hidden md:hidden bg-white/98 backdrop-blur-2xl border-b border-purple-100 px-5 sm:px-6 py-5 space-y-3 text-sm font-medium text-gray-700 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto">
      <a href="index.html" class="block py-1.5 hover:text-brand-600 transition border-b border-purple-50">Home</a>
      <a href="about.html" class="block py-1.5 hover:text-brand-600 transition border-b border-purple-50">About Us</a>
      <a href="services.html" class="block py-1.5 hover:text-brand-600 transition border-b border-purple-50">Services</a>
      <a href="use-cases.html" class="block py-1.5 text-brand-600 font-bold border-b border-purple-50">Use Cases</a>
      <a href="index.html#contact" class="block py-1.5 hover:text-brand-600 transition">Contact Us</a>
      <div class="pt-2">
        <a href="index.html#contact" class="btn-purple text-white text-xs font-semibold py-3 px-5 rounded-full w-full flex items-center justify-center gap-2 shadow-sm">
          <span>Let's Talk</span>
          <i class="fa-solid fa-arrow-right text-[10px]"></i>
        </a>
      </div>
    </div>
  </header>

  <main>
    <!-- ==========================================
         2. HERO SECTION
         ========================================== -->
    <section class="hero-bg relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-purple-100/70">
      <div class="pointer-events-none absolute -top-24 right-1/4 w-[600px] h-[400px] bg-purple-400/20 rounded-full blur-3xl"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div data-anim="fade-up" class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/80 border border-purple-300/60 shadow-xs mb-4">
          <span class="w-2 h-2 rounded-full bg-brand-600 animate-pulse"></span>
          <span class="text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-700">PROVEN TRANSFORMATION BLUEPRINTS</span>
        </div>

        <h1 data-anim="fade-up" data-delay="1" class="font-display font-extrabold text-3xl sm:text-4xl lg:text-[46px] text-[#110c22] leading-[1.15] tracking-tight max-w-4xl mx-auto">
          Real-World Systems Engineering for <span class="bg-gradient-to-r from-purple-700 via-brand-600 to-indigo-600 bg-clip-text text-transparent">Every High-Growth Industry</span>
        </h1>

        <p data-anim="fade-up" data-delay="2" class="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto mt-4">
          Explore how we deploy clean-code WordPress architectures, custom Laravel portals, GoHighLevel pipeline automations, and autonomous AI agents tailored to specific industry business models.
        </p>

        <!-- Stats Bar -->
        <div data-anim="fade-up" data-delay="3" class="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto pt-8">
          <div class="bg-white/85 backdrop-blur-md p-4 rounded-2xl border border-purple-100/90 shadow-sm">
            <div class="font-display font-extrabold text-2xl text-brand-700">45+</div>
            <div class="text-[11px] text-gray-500 font-medium mt-0.5">Enterprise Deliveries</div>
          </div>
          <div class="bg-white/85 backdrop-blur-md p-4 rounded-2xl border border-purple-100/90 shadow-sm">
            <div class="font-display font-extrabold text-2xl text-emerald-600">-28%</div>
            <div class="text-[11px] text-gray-500 font-medium mt-0.5">Checkout Abandonment</div>
          </div>
          <div class="bg-white/85 backdrop-blur-md p-4 rounded-2xl border border-purple-100/90 shadow-sm">
            <div class="font-display font-extrabold text-2xl text-indigo-600">94%</div>
            <div class="text-[11px] text-gray-500 font-medium mt-0.5">Manual Tasks Automated</div>
          </div>
          <div class="bg-white/85 backdrop-blur-md p-4 rounded-2xl border border-purple-100/90 shadow-sm">
            <div class="font-display font-extrabold text-2xl text-amber-600">&lt;60s</div>
            <div class="text-[11px] text-gray-500 font-medium mt-0.5">Lead Response Latency</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================
         3. 5 INDUSTRY USE CASE DEEP-DIVE CARDS
         ========================================== -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-2xl mx-auto mb-16" data-anim="fade-up">
          <span class="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-600 block mb-2">INDUSTRY BLUEPRINTS</span>
          <h2 class="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-gray-900 tracking-tight">
            Tailored Engineering for Your Business Model
          </h2>
          <p class="text-xs sm:text-sm text-gray-500 mt-2">
            Select your industry to explore architecture blueprints, before/after transformations, and technical deliverables.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Card 1: E-Commerce -->
          <div data-anim="fade-up" data-delay="1" class="rounded-3xl border border-purple-100 bg-[#faf8ff] p-6 lg:p-7 flex flex-col justify-between hover:shadow-xl hover:border-brand-300 transition group">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div class="w-12 h-12 rounded-2xl bg-purple-100 text-brand-600 flex items-center justify-center text-xl group-hover:scale-105 group-hover:bg-brand-600 group-hover:text-white transition">
                  <i class="fa-solid fa-cart-shopping"></i>
                </div>
                <span class="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">95+ Speed</span>
              </div>
              <h3 class="font-display font-extrabold text-xl text-gray-900 group-hover:text-brand-600 transition">
                High-Growth E-Commerce Brands
              </h3>
              <p class="text-xs text-gray-600 leading-relaxed">
                Frictionless 1-step checkout funnels, sub-second WooCommerce catalog browsing, Stripe global payments, and automated abandoned cart nurture via GHL/Klaviyo.
              </p>
              <ul class="pt-2 space-y-2 text-[11px] text-gray-600">
                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-500 text-xs"></i> 1-Click Apple/Google Pay</li>
                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-500 text-xs"></i> -28% Cart Abandonment</li>
                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-500 text-xs"></i> Redis Object Caching (&lt;0.5s TTFB)</li>
              </ul>
            </div>

            <div class="mt-8 pt-5 border-t border-purple-100">
              <a href="use-case-ecommerce.html" class="w-full btn-purple text-white text-xs font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm">
                <span>View E-Commerce Blueprint</span>
                <i class="fa-solid fa-arrow-right text-[10px]"></i>
              </a>
            </div>
          </div>

          <!-- Card 2: SaaS & B2B -->
          <div data-anim="fade-up" data-delay="2" class="rounded-3xl border border-purple-100 bg-[#faf8ff] p-6 lg:p-7 flex flex-col justify-between hover:shadow-xl hover:border-brand-300 transition group">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div class="w-12 h-12 rounded-2xl bg-purple-100 text-brand-600 flex items-center justify-center text-xl group-hover:scale-105 group-hover:bg-brand-600 group-hover:text-white transition">
                  <i class="fa-solid fa-server"></i>
                </div>
                <span class="px-2.5 py-1 rounded-full bg-purple-100 text-brand-700 border border-purple-200 text-[10px] font-bold">Enterprise SaaS</span>
              </div>
              <h3 class="font-display font-extrabold text-xl text-gray-900 group-hover:text-brand-600 transition">
                SaaS Founders &amp; B2B Enterprises
              </h3>
              <p class="text-xs text-gray-600 leading-relaxed">
                Custom full-stack portals built with Laravel and Next.js. Featuring multi-tenant databases, role-based access control, Stripe subscriptions, and high-concurrency APIs.
              </p>
              <ul class="pt-2 space-y-2 text-[11px] text-gray-600">
                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-500 text-xs"></i> Multi-Tenant Data Isolation</li>
                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-500 text-xs"></i> Granular RBAC Permissions</li>
                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-500 text-xs"></i> Automated Tiered Billing &amp; Invoices</li>
              </ul>
            </div>

            <div class="mt-8 pt-5 border-t border-purple-100">
              <a href="use-case-saas-b2b.html" class="w-full btn-purple text-white text-xs font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm">
                <span>View SaaS &amp; B2B Blueprint</span>
                <i class="fa-solid fa-arrow-right text-[10px]"></i>
              </a>
            </div>
          </div>

          <!-- Card 3: Marketing Agencies -->
          <div data-anim="fade-up" data-delay="3" class="rounded-3xl border border-purple-100 bg-[#faf8ff] p-6 lg:p-7 flex flex-col justify-between hover:shadow-xl hover:border-brand-300 transition group">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div class="w-12 h-12 rounded-2xl bg-purple-100 text-brand-600 flex items-center justify-center text-xl group-hover:scale-105 group-hover:bg-brand-600 group-hover:text-white transition">
                  <i class="fa-solid fa-cubes-stacked"></i>
                </div>
                <span class="px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-bold">100% White-Label</span>
              </div>
              <h3 class="font-display font-extrabold text-xl text-gray-900 group-hover:text-brand-600 transition">
                Digital &amp; Creative Agencies
              </h3>
              <p class="text-xs text-gray-600 leading-relaxed">
                Your silent engineering arm. We deliver sub-account GHL snapshot setups, custom WordPress sites, and automation pipelines under strict bilateral NDAs inside your tools.
              </p>
              <ul class="pt-2 space-y-2 text-[11px] text-gray-600">
                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-500 text-xs"></i> Complete Invisible Delivery</li>
                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-500 text-xs"></i> 1-Click Agency Snapshots</li>
                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-500 text-xs"></i> 50–100% Client Markup Margins</li>
              </ul>
            </div>

            <div class="mt-8 pt-5 border-t border-purple-100">
              <a href="use-case-agencies.html" class="w-full btn-purple text-white text-xs font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm">
                <span>View Agency Blueprint</span>
                <i class="fa-solid fa-arrow-right text-[10px]"></i>
              </a>
            </div>
          </div>

          <!-- Card 4: Coaches & Creators -->
          <div data-anim="fade-up" data-delay="4" class="rounded-3xl border border-purple-100 bg-[#faf8ff] p-6 lg:p-7 flex flex-col justify-between hover:shadow-xl hover:border-brand-300 transition group">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div class="w-12 h-12 rounded-2xl bg-purple-100 text-brand-600 flex items-center justify-center text-xl group-hover:scale-105 group-hover:bg-brand-600 group-hover:text-white transition">
                  <i class="fa-solid fa-brain"></i>
                </div>
                <span class="px-2.5 py-1 rounded-full bg-fuchsia-50 text-fuchsia-700 border border-fuchsia-200 text-[10px] font-bold">24/7 AI Booking</span>
              </div>
              <h3 class="font-display font-extrabold text-xl text-gray-900 group-hover:text-brand-600 transition">
                Coaches &amp; Service Businesses
              </h3>
              <p class="text-xs text-gray-600 leading-relaxed">
                Autonomous AI voice receptionists and WhatsApp chatbots that qualify leads and schedule sales appointments into GHL calendars around the clock.
              </p>
              <ul class="pt-2 space-y-2 text-[11px] text-gray-600">
                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-500 text-xs"></i> 24/7 Autonomous Lead Qualifier</li>
                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-500 text-xs"></i> &lt;30s Speed-to-Lead Dialing</li>
                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-500 text-xs"></i> Two-Way Course &amp; Member Sync</li>
              </ul>
            </div>

            <div class="mt-8 pt-5 border-t border-purple-100">
              <a href="use-case-coaches-creators.html" class="w-full btn-purple text-white text-xs font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm">
                <span>View Coaches &amp; Services Blueprint</span>
                <i class="fa-solid fa-arrow-right text-[10px]"></i>
              </a>
            </div>
          </div>

          <!-- Card 5: Startups & MVPs -->
          <div data-anim="fade-up" data-delay="5" class="rounded-3xl border border-purple-100 bg-[#faf8ff] p-6 lg:p-7 flex flex-col justify-between hover:shadow-xl hover:border-brand-300 transition group md:col-span-2 lg:col-span-2">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <div class="w-12 h-12 rounded-2xl bg-purple-100 text-brand-600 flex items-center justify-center text-xl group-hover:scale-105 group-hover:bg-brand-600 group-hover:text-white transition">
                    <i class="fa-solid fa-rocket"></i>
                  </div>
                  <span class="px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-[10px] font-bold">2-4 Week Delivery</span>
                </div>
                <h3 class="font-display font-extrabold text-xl text-gray-900 group-hover:text-brand-600 transition">
                  Fast-Moving Startups &amp; MVPs
                </h3>
                <p class="text-xs text-gray-600 leading-relaxed">
                  Turn your pitch deck into a production-grade software prototype in weeks, not months. Zero tech debt, pitch-ready Figma prototypes, and clean scalable code.
                </p>
                <ul class="pt-1 space-y-2 text-[11px] text-gray-600">
                  <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-500 text-xs"></i> 2–4 Week Turnaround to Production</li>
                  <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-500 text-xs"></i> Complete Source Code Transfer</li>
                  <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-500 text-xs"></i> Pitch-Ready Interactive UI</li>
                </ul>
              </div>

              <div class="flex flex-col justify-between h-full pt-4 lg:pt-0">
                <div class="p-5 rounded-2xl bg-white border border-purple-100/90 shadow-sm space-y-2.5">
                  <div class="text-xs font-bold text-gray-900">Startup Guarantee</div>
                  <p class="text-[11px] text-gray-500 leading-relaxed">
                    We architect MVPs with modular clean code so you don’t have to throw everything away after your seed round.
                  </p>
                </div>
                <div class="mt-6">
                  <a href="use-case-startups.html" class="w-full btn-purple text-white text-xs font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm">
                    <span>View Startup MVP Blueprint</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ==========================================
         4. CALL TO ACTION (COSMIC DARK)
         ========================================== -->
    <section class="py-20 dark-cosmic-bg text-white relative overflow-hidden">
      <div class="pointer-events-none absolute -bottom-20 right-1/4 w-96 h-96 bg-brand-600/30 rounded-full blur-3xl"></div>

      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6" data-anim="fade-up">
        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-400/30 text-purple-200 text-[10px] font-extrabold uppercase tracking-widest">
          NEED A CUSTOM SOLUTION FOR YOUR BUSINESS?
        </span>
        <h2 class="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
          Let's Engineer Your Competitive Advantage
        </h2>
        <p class="text-xs sm:text-sm text-purple-200/80 max-w-2xl mx-auto leading-relaxed">
          Book a 30-minute discovery call with our senior technical leads. We will review your workflow challenges and deliver an actionable architecture roadmap.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a href="index.html#contact" class="btn-purple magnetic-btn text-white text-xs font-semibold px-7 py-3.5 rounded-full inline-flex items-center gap-2 shadow-glow">
            <span>Schedule Discovery Call</span>
            <i class="fa-solid fa-arrow-right text-[10px]"></i>
          </a>
          <a href="index.html#estimator" class="px-6 py-3.5 rounded-full text-xs font-semibold text-purple-100 bg-white/10 hover:bg-white/20 border border-white/15 transition inline-flex items-center gap-2">
            <span>Launch Live Price Estimator</span>
            <i class="fa-solid fa-calculator text-[10px] text-amber-300"></i>
          </a>
        </div>
      </div>
    </section>
  </main>

  <!-- ==========================================
       5. FOOTER
       ========================================== -->
  <footer class="dark-cosmic-bg text-gray-300 pt-16 pb-12 border-t border-purple-900/60 text-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-purple-900/60">
        <div class="lg:col-span-2 space-y-4">
          <a href="index.html" class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-brand-600/30 border border-brand-500/40 flex items-center justify-center shadow-md">
              <span class="font-display font-extrabold text-lg text-white">YT</span>
            </div>
            <div class="leading-none">
              <span class="block font-display font-extrabold text-lg text-white tracking-tight">Yankee Tech</span>
              <span class="block text-[10px] font-medium text-purple-300 tracking-wider uppercase mt-0.5">Infinite Possibilities</span>
            </div>
          </a>
          <p class="text-xs text-purple-200/70 leading-relaxed max-w-sm">
            Elite Full-Stack engineering studio. We build sub-second WordPress platforms, custom SaaS architectures, GoHighLevel ecosystems, and autonomous AI agents for high-growth enterprises worldwide.
          </p>
        </div>

        <div>
          <h4 class="font-display font-bold text-white text-xs uppercase tracking-wider mb-4">Quick Links</h4>
          <ul class="space-y-2 text-purple-200/70">
            <li><a href="index.html" class="hover:text-white transition">Home</a></li>
            <li><a href="about.html" class="hover:text-white transition">About Us</a></li>
            <li><a href="services.html" class="hover:text-white transition">Services</a></li>
            <li><a href="use-cases.html" class="text-brand-400 font-bold hover:text-white transition">Use Cases</a></li>
            <li><a href="index.html#estimator" class="hover:text-white transition">Price Estimator</a></li>
            <li><a href="index.html#contact" class="hover:text-white transition">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-display font-bold text-white text-xs uppercase tracking-wider mb-4">Industry Blueprints</h4>
          <ul class="space-y-2 text-purple-200/70">
            <li><a href="use-case-ecommerce.html" class="hover:text-white transition">E-Commerce Brands</a></li>
            <li><a href="use-case-saas-b2b.html" class="hover:text-white transition">SaaS &amp; B2B Enterprises</a></li>
            <li><a href="use-case-agencies.html" class="hover:text-white transition">Marketing Agencies</a></li>
            <li><a href="use-case-coaches-creators.html" class="hover:text-white transition">Coaches &amp; Creators</a></li>
            <li><a href="use-case-startups.html" class="hover:text-white transition">Startups &amp; MVPs</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-display font-bold text-white text-xs uppercase tracking-wider mb-4">Newsletter</h4>
          <p class="text-[11px] text-purple-200/70 mb-3">Quarterly engineering insights on web performance and AI.</p>
          <form onsubmit="handleNewsletter(event)" class="space-y-2">
            <input type="email" id="newsletterEmail" required placeholder="Business email" class="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-purple-500/30 text-white placeholder-purple-300/40 text-xs focus:outline-none focus:border-brand-500 transition" />
            <button type="submit" class="w-full btn-purple text-white text-xs font-semibold py-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow-sm">
              <span id="newsletterBtnText">Subscribe →</span>
            </button>
          </form>
        </div>
      </div>

      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-purple-300/60">
        <div>&copy; 2026 Yankee Tech. All rights reserved. Built for speed, scale &amp; autonomous intelligence.</div>
        <div class="flex items-center gap-4">
          <a href="index.html#contact" class="hover:text-white transition">Privacy Policy</a>
          <span>•</span>
          <a href="index.html#contact" class="hover:text-white transition">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>

  <button id="scrollTopBtn" onclick="window.scrollTo({top: 0, behavior: 'smooth'})" aria-label="Scroll back to top" class="fixed bottom-6 right-6 w-11 h-11 rounded-2xl bg-brand-600 text-white shadow-glow flex items-center justify-center transition hover:bg-brand-700 active:scale-95 z-40 border border-purple-400/40">
    <i class="fa-solid fa-arrow-up text-xs"></i>
  </button>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'use-cases.html'), masterHubHtml, 'utf8');
console.log('Created: use-cases.html');

// 2. INDIVIDUAL DEEP-DIVE USE CASE PAGES
const useCasesData = [
  {
    slug: 'use-case-ecommerce.html',
    industry: 'High-Growth E-Commerce Brands',
    eyebrow: 'E-COMMERCE & CONVERSION VELOCITY',
    heroBadge: 'INDUSTRY 01 • RETAIL & DIRECT-TO-CONSUMER',
    headline: 'High-Converting E-Commerce Architectures That Eliminate Checkout Drop-Off',
    description: 'We help fast-scaling e-commerce brands break through technical bottlenecks. From sub-second WooCommerce product browsing to frictionless 1-page checkout flows, Stripe multi-currency processing, and automated GoHighLevel abandoned cart recovery.',
    preset: 'wordpress',
    metrics: [
      { num: '-28%', label: 'Cart Abandonment Drop' },
      { num: '<0.5s', label: 'Product Page TTFB' },
      { num: '34%', label: 'Average Order Value Lift' },
      { num: '99.9%', label: 'Flash-Sale Uptime SLA' }
    ],
    svgNodes: [
      { title: 'Storefront Layer', desc: 'Sub-second WooCommerce + Tailwind' },
      { title: 'Checkout Funnel', desc: '1-Step Apple/Google Pay Elements' },
      { title: 'CRM & Recovery', desc: 'GHL Abandoned SMS Drip (&lt;15m)' },
      { title: 'Order Fulfillment', desc: 'Automated 2-Way Inventory Webhooks' }
    ],
    challenges: [
      { before: 'Slow 4-second mobile catalog load times causing 60% bounce rate.', after: 'Sub-second load times (<0.5s TTFB) powered by custom Redis object caching.' },
      { before: 'Clunky multi-page checkout demanding 12 manual form fields.', after: 'Streamlined 1-page checkout with native Apple Pay & Google Pay 1-click buy.' },
      { before: 'Lost carts only receiving a generic email 24 hours later.', after: 'Conversational SMS recovery triggered in 15 minutes via GoHighLevel integration.' },
      { before: 'Store crashing during TikTok/Instagram viral flash sales.', after: 'High-concurrency database query tuning capable of 500+ checkouts/min.' }
    ],
    caseStudy: {
      client: 'Direct-to-Consumer Apparel Brand ($3.4M Annual GMV)',
      problem: 'The client was losing thousands of dollars every week due to high mobile checkout abandonment (74%) and slow WooCommerce product filtering.',
      solution: 'Yankee Tech stripped 32 redundant plugins, replaced them with a lightweight custom theme, engineered a 1-step checkout, and integrated 2-way GoHighLevel abandoned cart SMS triggers.',
      results: [
        'Cart abandonment plummeted from 74% to 46% within 14 days.',
        'Mobile PageSpeed score surged from 38/100 to 98/100.',
        'Recovered an additional $42,000 in monthly abandoned cart revenue.'
      ]
    },
    specs: [
      { name: 'Core Engine', value: 'WooCommerce + Custom PHP 8.3 Theme' },
      { name: 'Payment Integrations', value: 'Stripe Elements, Apple Pay, Google Pay, PayPal' },
      { name: 'Abandoned Cart Pipeline', value: 'GoHighLevel 2-Way SMS & Email Automation' },
      { name: 'Speed Optimization', value: 'Redis Object Cache + WebP CDN Delivery' },
      { name: 'Technical Warranty', value: '30-Day Post-Launch SLA on Conversion Metrics' }
    ],
    faqs: [
      { q: 'Can you migrate our store from Shopify to custom WooCommerce?', a: 'Yes! We migrate all customer records, order histories, product variations, and SEO redirect maps without losing search rankings or customer logins.' },
      { q: 'Will this work with our third-party warehouse or shipping 3PL?', a: 'Yes. We build custom REST API webhooks connecting WooCommerce orders directly to ShipStation, Deliverr, or custom warehouse ERPs.' },
      { q: 'How long does a full e-commerce speed and checkout overhaul take?', a: 'Typical speed surgeries take 4–7 days, while full custom storefront redesigns are delivered in 2–3 weeks.' }
    ]
  },
  {
    slug: 'use-case-saas-b2b.html',
    industry: 'SaaS Founders & B2B Enterprises',
    eyebrow: 'SAAS ARCHITECTURE & CLOUD PLATFORMS',
    heroBadge: 'INDUSTRY 02 • B2B & SOFTWARE FOUNDERS',
    headline: 'Custom Full-Stack Web Applications Engineered for High Concurrency',
    description: 'We partner with B2B founders and software enterprises to build robust, multi-tenant customer portals, internal billing dashboards, and high-concurrency SaaS applications using Laravel 11, React 18, and Next.js.',
    preset: 'fullstack',
    metrics: [
      { num: '99.9%', label: 'Uptime Reliability SLA' },
      { num: '<100ms', label: 'Average API Response' },
      { num: '100%', label: 'Multi-Tenant Isolation' },
      { num: 'REST & GraphQL', label: 'Documented Endpoints' }
    ],
    svgNodes: [
      { title: 'Frontend UI', desc: 'React 18 / Next.js Server-Side' },
      { title: 'API Gateway', desc: 'Laravel 11 Auth, RBAC & Queues' },
      { title: 'Database Store', desc: 'PostgreSQL Multi-Tenant Schema' },
      { title: 'Background Workers', desc: 'Redis Asynchronous Task Runner' }
    ],
    challenges: [
      { before: 'Spaghetti code from previous offshore agency with zero documentation.', after: 'Clean modular architecture with complete OpenAPI v3 Swagger specs and unit tests.' },
      { before: 'Database slowdowns when multiple enterprise clients query data simultaneously.', after: 'Optimized PostgreSQL schemas with read/write separation and Redis caching.' },
      { before: 'Clunky manual billing and invoice reconciliation at month-end.', after: 'Fully automated Stripe billing engine with tiered seats and usage metrics.' },
      { before: 'Security vulnerabilities and lack of granular team permissions.', after: 'Enterprise-grade Role-Based Access Control (RBAC) and audit event logging.' }
    ],
    caseStudy: {
      client: 'B2B Logistics SaaS Platform (12,000+ Active Fleet Drivers)',
      problem: 'Their previous MVP collapsed under peak morning load, experiencing 8-second page timeouts and frequent data synchronization conflicts.',
      solution: 'Yankee Tech re-engineered the backend in Laravel 11 with Redis background queues, optimized PostgreSQL indexes, and built a snappy Next.js dashboard.',
      results: [
        'Average API latency dropped from 8,200ms to 92ms.',
        'Zero downtime recorded across 6 consecutive months.',
        'Reduced client server hosting costs by 45% through query optimization.'
      ]
    },
    specs: [
      { name: 'Backend Architecture', value: 'Laravel 11 / PHP 8.3 with Scoped Multi-Tenancy' },
      { name: 'Frontend Architecture', value: 'React 18 / Next.js 14 + Tailwind UI' },
      { name: 'Database & Caching', value: 'PostgreSQL + Redis Queue Workers' },
      { name: 'Subscription Billing', value: 'Stripe Billing & Metered Usage API' },
      { name: 'Deployment Target', value: 'AWS, DigitalOcean, Forge or Dockerized Infrastructure' }
    ],
    faqs: [
      { q: 'Who owns the intellectual property and code repository?', a: 'You own 100% of all code, git commits, documentation, and database schemas upon milestone completion with zero licensing fees.' },
      { q: 'Can you work with our existing in-house technical team?', a: 'Yes! We frequently integrate with internal engineering teams, taking ownership of specific modules, APIs, or frontends via Git PR workflows.' },
      { q: 'Do you provide enterprise SLA maintenance after launch?', a: 'Yes, we provide structured monthly retainers covering continuous deployment, security patching, and on-call server monitoring.' }
    ]
  },
  {
    slug: 'use-case-agencies.html',
    industry: 'Marketing & Creative Agencies (White-Label)',
    eyebrow: 'AGENCY SCALING & WHITE-LABEL',
    heroBadge: 'INDUSTRY 03 • AGENCY PARTNERSHIPS',
    headline: 'Your Invisible Technical Powerhouse for Frictionless Agency Scaling',
    description: 'Scale your marketing or creative agency without the overhead, payroll risk, or headache of managing in-house developers. Yankee Tech acts as your private, white-label engineering arm — committing to your GitHub, communicating in your Slack, and delivering under strict NDAs.',
    preset: 'fullstack',
    metrics: [
      { num: '40%+', label: 'Of Our Builds Are White-Label' },
      { num: 'Strict NDA', label: 'Bilateral Confidentiality' },
      { num: 'Senior Only', label: 'Zero Junior Outsourcers' },
      { num: '50-100%', label: 'Agency Profit Margins' }
    ],
    svgNodes: [
      { title: 'Your Agency Brand', desc: 'Client Communication & Strategy' },
      { title: 'Yankee Tech Engine', desc: 'Invisible Senior Engineering Arm' },
      { title: 'Tech Fulfillment', desc: 'WordPress, Laravel, GHL & AI' },
      { title: 'Delivery & Handoff', desc: 'White-Label Loom Video & SLA' }
    ],
    challenges: [
      { before: 'Struggling with unreliable freelancers who ghost mid-project.', after: 'Dedicated senior engineers with guaranteed delivery dates and daily standup updates.' },
      { before: 'Turning down lucrative web or automation clients due to lack of technical staff.', after: 'Expanding your service offerings overnight with high-margin engineering capabilities.' },
      { before: 'Wasting hours rebuilding GoHighLevel sub-accounts from scratch for every new client.', after: 'Standardized 1-click GHL snapshots deployed in under 2 minutes.' },
      { before: 'Fear of white-label partners poaching your client relationships.', after: 'Strict bilateral NDAs and non-compete agreements legally protecting your agency.' }
    ],
    caseStudy: {
      client: 'US-Based Digital Growth Agency (35 Retainer Clients)',
      problem: 'The agency founder was spending 25 hours a week managing buggy WordPress sites and building manual Zapier flows instead of closing new enterprise retainers.',
      solution: 'Yankee Tech took over full engineering fulfillment under white-label terms: establishing standardized GHL snapshots, custom Tailwind themes, and webhook integrations.',
      results: [
        'Agency scaled from 35 to 68 retainer clients in 9 months without hiring full-time staff.',
        'Client onboarding time dropped from 14 days to under 48 hours.',
        'Agency generated an additional $220,000 in high-margin development revenue.'
      ]
    },
    specs: [
      { name: 'Confidentiality', value: 'Strict Bilateral Non-Disclosure Agreement (NDA)' },
      { name: 'Communication Channels', value: 'Private Slack Channel / ClickUp / Asana / Loom' },
      { name: 'Source Control', value: 'Direct Commits to Your Agency GitHub / GitLab' },
      { name: 'Core Capabilities', value: 'WordPress, WooCommerce, Laravel, GHL, AI Bots' },
      { name: 'Warranty', value: '30-Day Technical Bug Warranty on Every Delivery' }
    ],
    faqs: [
      { q: 'Will our clients ever see the Yankee Tech name?', a: 'Never. All code comments, git author credentials, Loom videos, and documentation are strictly branded with your agency name and logo.' },
      { q: 'Can an engineer from your team join client discovery calls?', a: 'Yes! A senior engineer can attend client calls as your "Technical Director" or "Lead Architect" to assess scope and establish credibility.' },
      { q: 'How does billing work for partner agencies?', a: 'We offer wholesale fixed-price project quotes or dedicated monthly sprint retainers with priority SLA turnarounds.' }
    ]
  },
  {
    slug: 'use-case-coaches-creators.html',
    industry: 'High-Ticket Coaches, Creators & Service Businesses',
    eyebrow: 'LEAD AUTOMATION & MEMBERSHIPS',
    heroBadge: 'INDUSTRY 04 • COACHES & CONSULTANTS',
    headline: 'Autonomous 24/7 Lead Qualification & Calendar Booking Systems',
    description: 'Never drop a high-ticket prospect again. We engineer automated sales ecosystems for coaches, consultants, and service businesses — featuring 24/7 AI conversational voice and WhatsApp booking agents, custom GoHighLevel funnels, and real-time membership access synchronization.',
    preset: 'ai',
    metrics: [
      { num: '<30s', label: 'Speed-to-Lead Dialing' },
      { num: '3.4x', label: 'Calendar Booking Volume' },
      { num: '24/7', label: 'Autonomous Receptionist' },
      { num: '100%', label: 'Course & Member Sync' }
    ],
    svgNodes: [
      { title: 'Inbound Web Lead', desc: 'Form or Ad Lead Ingestion' },
      { title: 'AI Voice / Chatbot', desc: '&lt;30s Conversational Qualification' },
      { title: 'Calendar Booking', desc: 'GoHighLevel Live Slot Confirmation' },
      { title: 'Automated Nurture', desc: 'Pre-Call Case Study SMS Drip' }
    ],
    challenges: [
      { before: 'Leads submitting forms at 9 PM and waiting until the next morning for follow-up.', after: 'Autonomous AI voice or WhatsApp agent calls or texts the lead within 30 seconds.' },
      { before: 'Sales calendar filled with unqualified tire-kickers and no-shows.', after: 'AI pre-qualifies budget and requirements before granting calendar access.' },
      { before: 'Manual copy-pasting customer emails between Stripe, GHL, and course platforms.', after: 'Real-time 2-way sync: payment instantly provisions membership access.' },
      { before: 'High cancellation rates and no-shows on discovery calls.', after: 'Automated SMS reminder sequences with embedded video warm-up content.' }
    ],
    caseStudy: {
      client: 'Executive Coaching Practice ($8,500 Average Deal Size)',
      problem: 'Prospects were booking calls but failing to show up (42% no-show rate), and the founder was overwhelmed responding to manual DMs and emails.',
      solution: 'Yankee Tech deployed an autonomous AI WhatsApp booking bot, connected it to a streamlined GHL calendar, and built automated SMS pre-call warm-up drips.',
      results: [
        'Show-up rate improved from 58% to 89% in the first 30 days.',
        'Automated 14 hours of manual DM triage per week.',
        'Booked 28 additional qualified strategy calls in the first month.'
      ]
    },
    specs: [
      { name: 'Lead Qualification', value: 'Autonomous OpenAI GPT-4o RAG / Voice AI' },
      { name: 'CRM & Funnel', value: 'GoHighLevel Sub-Account Architecture' },
      { name: 'Calendar Routing', value: 'Smart Round-Robin with Time-Zone Detection' },
      { name: 'Membership Engine', value: 'WordPress / LearnDash / GHL Membership Sync' },
      { name: 'Messaging Channels', value: 'SMS, WhatsApp Business API, Live Web Widget' }
    ],
    faqs: [
      { q: 'Can the AI bot answer custom questions about our coaching program?', a: 'Yes! We train the bot on your specific case studies, curriculum, FAQs, and pricing guardrails so it speaks strictly in your brand voice.' },
      { q: 'Can this integrate with our existing website?', a: 'Yes, we embed the booking widgets, AI chat bubbles, and webhook forms onto WordPress, Webflow, or custom web pages seamlessly.' },
      { q: 'What happens if a prospect asks a question the AI does not know?', a: 'The AI uses safe fallback protocols to deflect gracefully and offers immediate escalation to your team via SMS or email.' }
    ]
  },
  {
    slug: 'use-case-startups.html',
    industry: 'Fast-Moving Startups & High-Growth MVPs',
    eyebrow: 'RAPID MVP ENGINEERING',
    heroBadge: 'INDUSTRY 05 • STARTUPS & FOUNDERS',
    headline: 'Turn Your Vision into a Scalable Production MVP in 2 to 4 Weeks',
    description: 'Speed to market is everything for an early-stage startup. We build production-ready Minimum Viable Products (MVPs) engineered with clean architecture from day one — giving founders pitch-ready Figma prototypes, robust databases, and zero technical debt.',
    preset: 'fullstack',
    metrics: [
      { num: '2–4w', label: 'Average MVP Delivery' },
      { num: '100%', label: 'Source Code Ownership' },
      { num: 'Zero', label: 'Spaghetti Tech Debt' },
      { num: 'Investor', label: 'Pitch-Ready Architecture' }
    ],
    svgNodes: [
      { title: 'Figma Prototype', desc: 'Clickable Investor Wireframes' },
      { title: 'Core MVP Backend', desc: 'Laravel / Node.js Scalable API' },
      { title: 'Reactive Web App', desc: 'React 18 / Next.js Tailwind UI' },
      { title: 'Cloud Deploy', desc: 'Dockerized Staging & Live URL' }
    ],
    challenges: [
      { before: 'Spending 6 months and $80k with traditional agencies before launching.', after: 'Launching a polished, production-grade MVP in 2 to 4 weeks at fixed scope.' },
      { before: 'Building on fragile no-code tools that crash once you hit 500 users.', after: 'Building on production-grade Laravel & React that scales smoothly to 100k+ users.' },
      { before: 'Endless scope creep and shifting deadlines from developers.', after: 'Crystal-clear milestone deliverables with fixed pricing and weekly demos.' },
      { before: 'Being locked into proprietary agency platforms.', after: 'Complete GitHub repository transfer with full developer documentation.' }
    ],
    caseStudy: {
      client: 'AI PropTech Startup (Pre-Seed Financed)',
      problem: 'Founders needed a functional property evaluation platform to demo to institutional angel investors within 3 weeks.',
      solution: 'Yankee Tech designed the Figma system, built the Laravel backend with automated OpenAI valuation hooks, and deployed a responsive Next.js web portal.',
      results: [
        'Delivered complete functional MVP in exactly 18 business days.',
        'Founders successfully closed $450,000 in pre-seed funding.',
        'Platform seamlessly handled its first 1,500 active beta users with zero crashes.'
      ]
    },
    specs: [
      { name: 'Turnaround Time', value: '2 to 4 Weeks from Kickoff to Live Launch' },
      { name: 'Core Stack', value: 'Laravel 11 / React 18 / Next.js / Tailwind CSS' },
      { name: 'Database Architecture', value: 'PostgreSQL with Automated Migration Scripts' },
      { name: 'Investor Assets', value: 'Interactive Figma Prototype + Live Staging Sandbox' },
      { name: 'Handoff Guarantee', value: '100% Repository Transfer + Dev Setup Guide' }
    ],
    faqs: [
      { q: 'Can we build an MVP in 2–4 weeks without sacrificing quality?', a: 'Yes! We focus aggressively on your core value proposition, eliminating unnecessary feature fluff while coding with production-grade frameworks like Laravel and React.' },
      { q: 'Will we have to throw away this code when we raise a Series A round?', a: 'No! Unlike fragile no-code hacks, our architectures follow strict clean-code principles, semantic database indexing, and unit tests ready for your future in-house team.' },
      { q: 'Do you help with database schema modeling and user flows?', a: 'Yes! Our senior architects work closely with founders during the first 3 days to blueprint data models and user journeys before writing a line of code.' }
    ]
  }
];

function generateUseCasePage(uc) {
  const metricItems = uc.metrics.map(m => `
    <div class="bg-white/85 backdrop-blur-md p-3.5 rounded-2xl border border-purple-100/90 shadow-sm">
      <div class="font-display font-extrabold text-xl sm:text-2xl text-brand-700">${m.num}</div>
      <div class="text-[11px] text-gray-500 font-medium mt-0.5">${m.label}</div>
    </div>
  `).join('');

  const challengeItems = uc.challenges.map((c, i) => `
    <div data-anim="fade-up" data-delay="${i + 1}" class="p-6 rounded-3xl bg-white border border-purple-100 shadow-sm space-y-4">
      <div class="flex items-start gap-3">
        <span class="w-6 h-6 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✕</span>
        <div>
          <div class="text-[10px] font-bold uppercase tracking-wider text-rose-500">Traditional Fragile Setup</div>
          <p class="text-xs text-gray-500 mt-1 leading-relaxed">${c.before}</p>
        </div>
      </div>
      <div class="pt-3 border-t border-purple-50 flex items-start gap-3">
        <span class="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
        <div>
          <div class="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Yankee Tech Architecture</div>
          <p class="text-xs text-gray-900 font-medium mt-1 leading-relaxed">${c.after}</p>
        </div>
      </div>
    </div>
  `).join('');

  const svgNodesRendered = uc.svgNodes.map((n, i) => `
    <div class="p-3.5 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <span class="w-6 h-6 rounded-full bg-brand-500/30 text-purple-200 flex items-center justify-center text-[10px] font-mono font-bold">${i + 1}</span>
        <div>
          <div class="text-xs font-bold text-white">${n.title}</div>
          <div class="text-[10px] text-purple-200/70">${n.desc}</div>
        </div>
      </div>
      <i class="fa-solid fa-check text-emerald-400 text-xs"></i>
    </div>
  `).join('');

  const resultItems = uc.caseStudy.results.map(r => `
    <li class="flex items-start gap-2.5 text-xs text-purple-100">
      <i class="fa-solid fa-circle-check text-emerald-400 text-xs mt-0.5 shrink-0"></i>
      <span>${r}</span>
    </li>
  `).join('');

  const specRows = uc.specs.map(spec => `
    <tr>
      <td class="py-3.5 px-5 font-semibold text-gray-900">${spec.name}</td>
      <td class="py-3.5 px-5 font-mono font-bold text-brand-700 bg-purple-50/40">${spec.value}</td>
    </tr>
  `).join('');

  const faqItems = uc.faqs.map((faq, i) => `
    <div class="p-4 rounded-2xl border border-purple-100 bg-purple-50/20">
      <button type="button" onclick="toggleFaq(${i})" class="w-full flex items-center justify-between text-left text-xs sm:text-sm font-bold text-gray-900">
        <span>${faq.q}</span>
        <i id="faq-icon-${i}" class="fa-solid fa-plus text-xs text-gray-400 shrink-0 ml-2 transition-transform"></i>
      </button>
      <div id="faq-body-${i}" class="${i === 0 ? '' : 'hidden'} pt-3 text-xs text-gray-600 leading-relaxed border-t border-purple-100/80 mt-2.5">
        ${faq.a}
      </div>
    </div>
  `).join('');

  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${uc.industry} — Yankee Tech Use Case</title>
  <meta name="description" content="${uc.description.replace(/"/g, '&quot;')}" />

  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet">
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

  <!-- Header -->
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-purple-100/80 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative">
      <a href="index.html" class="flex items-center gap-3 group shrink-0">
        <div class="w-10 h-10 rounded-xl bg-[#120924] flex items-center justify-center shadow-md border border-purple-500/30 group-hover:border-purple-500 transition">
          <span class="font-display font-extrabold text-lg tracking-tighter bg-gradient-to-tr from-purple-400 via-fuchsia-400 to-indigo-300 bg-clip-text text-transparent">YT</span>
        </div>
        <div class="leading-none">
          <span class="block font-display font-extrabold text-lg text-gray-900 tracking-tight">Yankee Tech</span>
          <span class="block text-[10px] font-medium text-gray-400 tracking-wider uppercase mt-0.5">Infinite Possibilities</span>
        </div>
      </a>

      <nav class="hidden md:flex items-center gap-8 text-xs font-semibold text-gray-700">
        <a href="index.html" class="hover:text-brand-600 transition py-2">Home</a>
        <a href="about.html" class="hover:text-brand-600 transition py-2">About Us</a>
        <a href="services.html" class="hover:text-brand-600 transition py-2">Services</a>
        <a href="use-cases.html" class="text-brand-600 font-bold bg-purple-50 border border-purple-200/60 px-3 py-1.5 rounded-full transition shadow-xs">Use Cases</a>
        <a href="index.html#contact" class="hover:text-brand-600 transition py-2">Contact Us</a>
      </nav>

      <div class="flex items-center gap-2.5 sm:gap-3">
        <a href="index.html#contact" class="hidden sm:inline-flex btn-purple magnetic-btn text-white text-xs font-semibold px-4 sm:px-5 py-2.5 rounded-full items-center gap-2 shadow-sm">
          <span>Let's Talk</span>
          <i class="fa-solid fa-arrow-right text-[10px]"></i>
        </a>
        <button id="mobileMenuBtn" aria-label="Toggle navigation menu" class="md:hidden w-10 h-10 rounded-xl border border-purple-200/90 flex items-center justify-center text-gray-700 hover:bg-purple-50 transition active:scale-95">
          <i class="fa-solid fa-bars text-base"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div id="mobileMenu" class="hidden md:hidden bg-white/98 backdrop-blur-2xl border-b border-purple-100 px-5 sm:px-6 py-5 space-y-3 text-sm font-medium text-gray-700 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto">
      <a href="index.html" class="block py-1.5 hover:text-brand-600 transition border-b border-purple-50">Home</a>
      <a href="about.html" class="block py-1.5 hover:text-brand-600 transition border-b border-purple-50">About Us</a>
      <a href="services.html" class="block py-1.5 hover:text-brand-600 transition border-b border-purple-50">Services</a>
      <a href="use-cases.html" class="block py-1.5 text-brand-600 font-bold border-b border-purple-50">Use Cases</a>
      <a href="index.html#contact" class="block py-1.5 hover:text-brand-600 transition">Contact Us</a>
      <div class="pt-2">
        <a href="index.html#contact" class="btn-purple text-white text-xs font-semibold py-3 px-5 rounded-full w-full flex items-center justify-center gap-2 shadow-sm">
          <span>Let's Talk</span>
          <i class="fa-solid fa-arrow-right text-[10px]"></i>
        </a>
      </div>
    </div>
  </header>

  <main>
    <!-- Hero Section -->
    <section class="hero-bg relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-purple-100/70">
      <div class="pointer-events-none absolute -top-24 right-1/4 w-[600px] h-[400px] bg-purple-400/20 rounded-full blur-3xl"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Breadcrumbs -->
        <nav class="flex items-center gap-2 text-[11px] text-gray-500 font-medium mb-6">
          <a href="index.html" class="hover:text-brand-600 transition">Home</a>
          <span class="text-gray-300">/</span>
          <a href="use-cases.html" class="hover:text-brand-600 transition">Use Cases</a>
          <span class="text-gray-300">/</span>
          <span class="text-brand-600 font-bold">${uc.industry}</span>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div class="lg:col-span-7 space-y-5">
            <div data-anim="fade-up" class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/80 border border-purple-300/60 shadow-xs">
              <span class="w-2 h-2 rounded-full bg-brand-600 animate-pulse"></span>
              <span class="text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-700">${uc.heroBadge}</span>
            </div>

            <h1 data-anim="fade-up" data-delay="1" class="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-[#110c22] leading-[1.15] tracking-tight">
              ${uc.headline}
            </h1>

            <p data-anim="fade-up" data-delay="2" class="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl">
              ${uc.description}
            </p>

            <div data-anim="fade-up" data-delay="3" class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              ${metricItems}
            </div>

            <div data-anim="fade-up" data-delay="4" class="flex flex-wrap items-center gap-4 pt-3">
              <a href="index.html#estimator" onclick="selectEstimatorPreset('${uc.preset}')" class="btn-purple magnetic-btn text-white text-xs font-semibold px-6 py-3.5 rounded-full inline-flex items-center gap-2 shadow-md">
                <span>Configure Industry Estimate</span>
                <i class="fa-solid fa-arrow-right text-[10px]"></i>
              </a>
              <a href="index.html#contact" class="px-5 py-3.5 rounded-full text-xs font-semibold text-gray-700 bg-white/90 hover:bg-white border border-purple-200/80 transition hover:border-brand-400 inline-flex items-center gap-2 shadow-xs">
                <span>Book Discovery Call</span>
                <i class="fa-solid fa-calendar-check text-[10px] text-brand-600"></i>
              </a>
            </div>
          </div>

          <!-- Architecture Visualizer -->
          <div class="lg:col-span-5" data-anim="scale-in" data-delay="2">
            <div class="rounded-3xl bg-gradient-to-br from-[#120727] via-[#1a0938] to-[#280c54] p-6 text-white border border-purple-500/30 shadow-2xl relative overflow-hidden tilt-card">
              <div class="flex items-center justify-between pb-3 border-b border-purple-500/20">
                <span class="text-[10px] font-mono text-purple-300">${uc.slug.replace('.html', '')}-pipeline.svg</span>
                <span class="text-[9px] font-mono text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full">LIVE BLUEPRINT</span>
              </div>
              <div class="py-5 space-y-3">
                ${svgNodesRendered}
              </div>
              <div class="pt-3 border-t border-purple-500/20 flex items-center justify-between text-[10px] text-purple-300 font-mono">
                <span>Yankee Tech Production Standard</span>
                <span>Verified 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Before vs. After Challenges -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-14" data-anim="fade-up">
          <span class="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-600 block mb-2">BEFORE VS AFTER</span>
          <h2 class="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight">
            How We Solve Core Industry Bottlenecks
          </h2>
          <p class="text-xs sm:text-sm text-gray-500 mt-2">
            Eliminating technical debt, dropped leads, and sluggish architectures.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${challengeItems}
        </div>
      </div>
    </section>

    <!-- Flagship Case Study Spotlight -->
    <section class="py-20 bg-[#faf8ff] border-y border-purple-100/70">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="rounded-3xl bg-gradient-to-br from-[#120727] via-[#1a083a] to-[#2b0c57] text-white p-8 sm:p-12 border border-purple-500/30 shadow-2xl relative overflow-hidden" data-anim="fade-up">
          <div class="absolute -top-16 -right-16 w-56 h-56 bg-brand-500/30 rounded-full blur-3xl pointer-events-none"></div>

          <div class="relative z-10 space-y-6">
            <div class="flex items-center justify-between pb-4 border-b border-purple-500/30">
              <span class="text-[10px] font-extrabold uppercase tracking-widest text-purple-300">FLAGSHIP CASE STUDY SPOTLIGHT</span>
              <span class="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-[9px] font-mono">VERIFIED RESULTS</span>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div class="lg:col-span-7 space-y-4">
                <h3 class="font-display font-extrabold text-2xl sm:text-3xl text-white">
                  ${uc.caseStudy.client}
                </h3>
                <div class="space-y-3 text-xs sm:text-sm text-purple-200/80 leading-relaxed">
                  <p><strong>The Challenge:</strong> ${uc.caseStudy.problem}</p>
                  <p><strong>The Solution:</strong> ${uc.caseStudy.solution}</p>
                </div>
              </div>

              <div class="lg:col-span-5 bg-white/5 border border-purple-400/20 rounded-2xl p-5 space-y-3">
                <div class="text-xs font-bold text-white uppercase tracking-wider">Measurable Business Impact</div>
                <ul class="space-y-2 pt-1">
                  ${resultItems}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Specs Table -->
    <section class="py-20 bg-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-12" data-anim="fade-up">
          <span class="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-600 block mb-2">INDUSTRY STANDARDS</span>
          <h2 class="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight">
            Technical Stack &amp; Deliverables
          </h2>
        </div>

        <div class="bg-white rounded-3xl border border-purple-100 shadow-md overflow-hidden" data-anim="fade-up">
          <table class="w-full text-left text-xs">
            <thead>
              <tr class="border-b border-purple-100 bg-purple-50/60">
                <th class="py-4 px-5 font-bold text-gray-700 uppercase tracking-wider text-[10px]">Architecture Component</th>
                <th class="py-4 px-5 font-bold text-brand-700 uppercase tracking-wider text-[10px]">Yankee Tech Production Standard</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-purple-50">
              ${specRows}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Industry FAQs -->
    <section class="py-16 bg-[#faf8ff] border-t border-purple-100/70">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-10" data-anim="fade-up">
          <span class="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-600 block mb-2">INDUSTRY QUESTIONS</span>
          <h2 class="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div class="space-y-3" data-anim="fade-up">
          ${faqItems}
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 dark-cosmic-bg text-white relative overflow-hidden">
      <div class="pointer-events-none absolute -bottom-20 right-1/4 w-96 h-96 bg-brand-600/30 rounded-full blur-3xl"></div>

      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6" data-anim="fade-up">
        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-400/30 text-purple-200 text-[10px] font-extrabold uppercase tracking-widest">
          LET'S ARCHITECT YOUR INDUSTRY SOLUTION
        </span>
        <h2 class="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
          Ready to Modernize for ${uc.industry}?
        </h2>
        <p class="text-xs sm:text-sm text-purple-200/80 max-w-2xl mx-auto leading-relaxed">
          Book a 30-minute discovery call or configure an instant estimate using our live price calculator.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a href="index.html#estimator" onclick="selectEstimatorPreset('${uc.preset}')" class="btn-purple magnetic-btn text-white text-xs font-semibold px-7 py-3.5 rounded-full inline-flex items-center gap-2 shadow-glow">
            <span>Calculate Project Estimate</span>
            <i class="fa-solid fa-calculator text-[10px] text-amber-300"></i>
          </a>
          <a href="index.html#contact" class="px-6 py-3.5 rounded-full text-xs font-semibold text-purple-100 bg-white/10 hover:bg-white/20 border border-white/15 transition inline-flex items-center gap-2">
            <span>Schedule Discovery Call</span>
            <i class="fa-solid fa-arrow-right text-[10px]"></i>
          </a>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="dark-cosmic-bg text-gray-300 pt-16 pb-12 border-t border-purple-900/60 text-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-purple-900/60">
        <div class="lg:col-span-2 space-y-4">
          <a href="index.html" class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-brand-600/30 border border-brand-500/40 flex items-center justify-center shadow-md">
              <span class="font-display font-extrabold text-lg text-white">YT</span>
            </div>
            <div class="leading-none">
              <span class="block font-display font-extrabold text-lg text-white tracking-tight">Yankee Tech</span>
              <span class="block text-[10px] font-medium text-purple-300 tracking-wider uppercase mt-0.5">Infinite Possibilities</span>
            </div>
          </a>
          <p class="text-xs text-purple-200/70 leading-relaxed max-w-sm">
            Elite Full-Stack engineering studio. We build sub-second WordPress platforms, custom SaaS architectures, GoHighLevel ecosystems, and autonomous AI agents for high-growth enterprises worldwide.
          </p>
        </div>

        <div>
          <h4 class="font-display font-bold text-white text-xs uppercase tracking-wider mb-4">Quick Links</h4>
          <ul class="space-y-2 text-purple-200/70">
            <li><a href="index.html" class="hover:text-white transition">Home</a></li>
            <li><a href="about.html" class="hover:text-white transition">About Us</a></li>
            <li><a href="services.html" class="hover:text-white transition">Services</a></li>
            <li><a href="use-cases.html" class="text-brand-400 font-bold hover:text-white transition">Use Cases</a></li>
            <li><a href="index.html#estimator" class="hover:text-white transition">Price Estimator</a></li>
            <li><a href="index.html#contact" class="hover:text-white transition">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-display font-bold text-white text-xs uppercase tracking-wider mb-4">Industry Blueprints</h4>
          <ul class="space-y-2 text-purple-200/70">
            <li><a href="use-case-ecommerce.html" class="hover:text-white transition">E-Commerce Brands</a></li>
            <li><a href="use-case-saas-b2b.html" class="hover:text-white transition">SaaS &amp; B2B Enterprises</a></li>
            <li><a href="use-case-agencies.html" class="hover:text-white transition">Marketing Agencies</a></li>
            <li><a href="use-case-coaches-creators.html" class="hover:text-white transition">Coaches &amp; Creators</a></li>
            <li><a href="use-case-startups.html" class="hover:text-white transition">Startups &amp; MVPs</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-display font-bold text-white text-xs uppercase tracking-wider mb-4">Newsletter</h4>
          <p class="text-[11px] text-purple-200/70 mb-3">Quarterly engineering insights on web performance and AI.</p>
          <form onsubmit="handleNewsletter(event)" class="space-y-2">
            <input type="email" id="newsletterEmail" required placeholder="Business email" class="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-purple-500/30 text-white placeholder-purple-300/40 text-xs focus:outline-none focus:border-brand-500 transition" />
            <button type="submit" class="w-full btn-purple text-white text-xs font-semibold py-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow-sm">
              <span id="newsletterBtnText">Subscribe →</span>
            </button>
          </form>
        </div>
      </div>

      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-purple-300/60">
        <div>&copy; 2026 Yankee Tech. All rights reserved. Built for speed, scale &amp; autonomous intelligence.</div>
        <div class="flex items-center gap-4">
          <a href="index.html#contact" class="hover:text-white transition">Privacy Policy</a>
          <span>•</span>
          <a href="index.html#contact" class="hover:text-white transition">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>

  <button id="scrollTopBtn" onclick="window.scrollTo({top: 0, behavior: 'smooth'})" aria-label="Scroll back to top" class="fixed bottom-6 right-6 w-11 h-11 rounded-2xl bg-brand-600 text-white shadow-glow flex items-center justify-center transition hover:bg-brand-700 active:scale-95 z-40 border border-purple-400/40">
    <i class="fa-solid fa-arrow-up text-xs"></i>
  </button>
</body>
</html>
`;
}

useCasesData.forEach(uc => {
  const filePath = path.join(__dirname, uc.slug);
  const html = generateUseCasePage(uc);
  fs.writeFileSync(filePath, html, 'utf8');
  console.log('Created:', uc.slug);
});

console.log('All Use Case pages successfully created!');

