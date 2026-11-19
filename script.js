/**
 * Yankee Tech — Main JavaScript (script.js)
 * Full-Stack Web Development, AI Automation & GHL/WordPress Integrations
 * 2026 Scroll Animation Engine & Interactive Estimator
 */

// ==========================================================================
// 1. TAILWIND CONFIG (Extended Theme & Colors)
// ==========================================================================
if (typeof tailwind !== 'undefined') {
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          display: ['Plus Jakarta Sans', 'sans-serif'],
        },
        colors: {
          brand: {
            50: '#f7f3ff',
            100: '#efe6ff',
            200: '#decfff',
            300: '#c4a6ff',
            400: '#a472ff',
            500: '#843dff',
            600: '#6e18f5',
            700: '#5b0cd4',
            800: '#490aa9',
            900: '#2d0669',
            950: '#13022c',
          }
        },
        boxShadow: {
          'soft': '0 10px 40px -10px rgba(91, 12, 212, 0.08)',
          'glow': '0 12px 32px -6px rgba(110, 24, 245, 0.45)',
          'card': '0 4px 24px rgba(17, 12, 34, 0.05)',
        }
      }
    }
  };
}

// ==========================================================================
// ==========================================================================
// 1B. CONVERSION TRACKING & ANALYTICS (GA4 & Google Ads Event Hooks)
// ==========================================================================
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
window.gtag = window.gtag || gtag;

window.trackConversionEvent = function(eventName, eventParams) {
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, eventParams);
    }
    window.dataLayer.push({
      event: eventName,
      ...eventParams,
      timestamp: new Date().toISOString()
    });
    console.log('[Analytics Event Tracked]', eventName, eventParams);
  } catch (err) {
    console.warn('[Analytics Error]', err);
  }
};

// Global click tracking for WhatsApp & Consultation Booking
document.addEventListener('click', function(e) {
  const target = e.target.closest('a');
  if (!target) return;
  const href = target.getAttribute('href') || '';

  if (href.includes('wa.me') || href.includes('whatsapp.com')) {
    window.trackConversionEvent('click_whatsapp', {
      link: href,
      label: target.textContent.trim() || 'WhatsApp CTA'
    });
  } else if (href.includes('calendly.com') || (href.includes('#contact') && target.textContent.toLowerCase().includes('book'))) {
    window.trackConversionEvent('schedule_call', {
      link: href,
      label: target.textContent.trim() || 'Book Call CTA'
    });
  }
});

// 2. PROJECT PRICE ESTIMATOR STATE & CONFIG (Developer Brief Page 4 & 5)
// ==========================================================================
let currentTrack = 'starter_mvp';
let currentCurrency = 'USD';

const currencyRates = {
  USD: { symbol: '$', rate: 1 }
};

const tracksConfig = {
  starter_mvp: {
    title: 'Starter SaaS MVP',
    baseName: 'Starter MVP (Core Workflow, Auth & Admin)',
    baseCost: 2200,
    baseWeeks: 4,
    timelineStr: '4 to 6 Weeks',
    contactOption: 'SaaS MVP Development for Startups'
  },
  custom_app: {
    title: 'Custom Web App / Portal',
    baseName: 'Business Web Application or Client Portal',
    baseCost: 2500,
    baseWeeks: 6,
    timelineStr: '6 to 8 Weeks',
    contactOption: 'Custom Web Application Development'
  },
  platform_saas: {
    title: 'Custom Platform or SaaS',
    baseName: 'Multi-Tenant Custom Platform / SaaS Engine',
    baseCost: 3000,
    baseWeeks: 8,
    timelineStr: '8 to 12 Weeks',
    contactOption: 'Full-Stack Web App (Laravel / React / Next.js)'
  },
  dedicated_dev: {
    title: 'Dedicated Senior Developer',
    baseName: 'Senior Full-Stack Developer (Billed Monthly)',
    baseCost: 1500,
    baseWeeks: 4,
    timelineStr: 'Monthly Retainer',
    contactOption: 'Dedicated Developer / White-Label Team'
  },
  quick_solutions: {
    title: 'Quick Solutions & Integrations',
    baseName: 'Fast-Track Setup or API Webhook Integration',
    baseCost: 400,
    baseWeeks: 1,
    timelineStr: '1 to 2 Weeks',
    contactOption: 'Custom API Integration Services'
  }
};

function formatMoney(usdAmount) {
  return '$' + Math.round(usdAmount).toLocaleString();
}

function selectTrack(trackKey) {
  currentTrack = trackKey;
  document.querySelectorAll('.track-btn').forEach(btn => {
    if (btn.getAttribute('data-track') === trackKey) {
      btn.className = 'track-btn text-left p-4 rounded-2xl border-2 border-brand-600 bg-white shadow-md transition flex items-start gap-3.5 ring-2 ring-brand-500/10';
    } else {
      btn.className = 'track-btn text-left p-4 rounded-2xl border-2 border-purple-100 bg-white/70 hover:bg-white transition flex items-start gap-3.5';
    }
  });
  updateEstimate();
}

function selectEstimatorPreset(trackKey) {
  selectTrack(trackKey);
}

function updateEstimate() {
  const cfg = tracksConfig[currentTrack];
  if (!cfg) return;

  // Calculate Addons
  let addonsCost = 0;
  const addonsListEl = document.getElementById('breakdownAddonsList');
  if (addonsListEl) {
    addonsListEl.innerHTML = '';
  }

  const selectedAddonNames = [];
  document.querySelectorAll('.addon-check:checked').forEach(chk => {
    const name = chk.getAttribute('data-name');
    const cost = parseInt(chk.getAttribute('data-cost'), 10) || 0;
    addonsCost += cost;
    selectedAddonNames.push(name);

    if (addonsListEl) {
      const row = document.createElement('div');
      row.className = 'flex items-center justify-between text-purple-200 py-1 text-xs border-b border-white/5';
      row.innerHTML = `
        <span class="flex items-center gap-1.5"><i class="fa-solid fa-check text-[10px] text-emerald-400"></i> ${name}</span>
        <span class="font-bold text-white">${formatMoney(cost)}</span>
      `;
      addonsListEl.appendChild(row);
    }
  });

  const totalBaseUsd = cfg.baseCost + addonsCost;
  // Range calculation per Developer Brief Page 4 (about plus or minus 10 percent)
  const lowRangeUsd = Math.round((totalBaseUsd * 0.90) / 50) * 50;
  const highRangeUsd = Math.round((totalBaseUsd * 1.10) / 50) * 50;

  // Update Summary Card
  const summaryTrackTitle = document.getElementById('summaryTrackTitle');
  const summaryTotalDisplay = document.getElementById('summaryTotalDisplay');
  const summaryTimeline = document.getElementById('summaryTimeline');
  const summaryBaseCost = document.getElementById('summaryBaseCost');

  if (summaryTrackTitle) summaryTrackTitle.textContent = cfg.title;
  if (summaryTotalDisplay) summaryTotalDisplay.textContent = `${formatMoney(lowRangeUsd)} – ${formatMoney(highRangeUsd)}`;
  if (summaryBaseCost) summaryBaseCost.textContent = formatMoney(cfg.baseCost);
  if (summaryTimeline) summaryTimeline.textContent = cfg.timelineStr;

  // Breakdown items
  const baseNameEl = document.getElementById('breakdownBaseName');
  const baseCostEl = document.getElementById('breakdownBaseCost');
  if (baseNameEl) baseNameEl.textContent = cfg.baseName;
  if (baseCostEl) baseCostEl.textContent = formatMoney(cfg.baseCost);

  // Conversion tracking helper
  if (typeof window.trackConversionEvent === 'function') {
    window.trackConversionEvent('calculate_estimate', {
      track: cfg.title,
      low: lowRangeUsd,
      high: highRangeUsd
    });
  }
}

function resetEstimator() {
  document.querySelectorAll('.addon-check').forEach(c => { c.checked = false; });
  selectTrack('starter_mvp');
}

function applyEstimateToContact() {
  const cfg = tracksConfig[currentTrack];
  if (!cfg) return;

  const priceRange = document.getElementById('summaryTotalDisplay')?.textContent.trim() || '';
  const timeline = document.getElementById('summaryTimeline')?.textContent.trim() || '';

  const selectedAddons = [];
  document.querySelectorAll('.addon-check:checked').forEach(chk => {
    selectedAddons.push(chk.getAttribute('data-name'));
  });

  const projectSelect = document.getElementById('contactProjectType');
  if (projectSelect) projectSelect.value = cfg.contactOption;

  const summaryText =
    `Hi Yankee Tech Team,\n\nI configured an estimate using your Project Price Estimator:\n` +
    `• Project Type: ${cfg.title}\n` +
    `• Base Architecture: ${cfg.baseName} (${formatMoney(cfg.baseCost)})\n` +
    `• Selected Features: ${selectedAddons.length ? selectedAddons.join(', ') : 'Base Scope'}\n` +
    `• Estimated Range: ${priceRange} (${timeline})\n` +
    `• Payment Terms: Milestone-Based (30% / 30% / 40%)\n\n` +
    `Let's book a scoping call to confirm technical specs and lock in the timeline!`;

  const contactMessage = document.getElementById('contactMessage');
  if (contactMessage) contactMessage.value = summaryText;

  const notesField = document.getElementById('msNotes');
  if (notesField) notesField.value = summaryText;

  if (typeof window.trackConversionEvent === 'function') {
    window.trackConversionEvent('schedule_call', {
      source: 'estimator_button',
      project: cfg.title
    });
  }

  const contactSec = document.getElementById('contact');
  if (contactSec) {
    contactSec.scrollIntoView({ behavior: 'smooth' });
  }
}

// ==========================================================================
// 3. FAQ ACCORDION
// ==========================================================================
function toggleFaq(index) {
  const body = document.getElementById('faq-body-' + index);
  const icon = document.getElementById('faq-icon-' + index);
  if (!body || !icon) return;

  const isHidden = body.classList.contains('hidden');
  if (isHidden) {
    body.classList.remove('hidden');
    icon.classList.remove('fa-plus');
    icon.classList.add('fa-minus', 'text-brand-600');
  } else {
    body.classList.add('hidden');
    icon.classList.remove('fa-minus', 'text-brand-600');
    icon.classList.add('fa-plus');
  }
}

// ==========================================================================
// 4. FORM HANDLERS
// ==========================================================================
function handleContactSubmit(e) {
  e.preventDefault();
  const toast = document.getElementById('formSuccessToast');
  if (toast) toast.classList.remove('hidden');

  setTimeout(() => {
    if (toast) toast.classList.add('hidden');
    e.target.reset();
    const banner = document.getElementById('estimateAttachedBanner');
    if (banner) banner.classList.add('hidden');
  }, 4500);
}

function handleNewsletter(e) {
  e.preventDefault();
  const btnText = document.getElementById('newsletterBtnText');
  const emailInput = document.getElementById('newsletterEmail');
  if (btnText) btnText.textContent = 'Subscribed Successfully ✓';
  if (emailInput) emailInput.value = '';

  setTimeout(() => {
    if (btnText) btnText.textContent = 'Subscribe →';
  }, 3500);
}

// ==========================================================================
// 5. SERVICES NAVIGATION HIGHLIGHT
// ==========================================================================
let serviceHighlightIndex = 0;
function scrollServices(dir) {
  const cards = document.querySelectorAll('#servicesGrid > div');
  if (!cards.length) return;
  serviceHighlightIndex = (serviceHighlightIndex + dir + cards.length) % cards.length;
  cards.forEach((c, idx) => {
    if (idx === serviceHighlightIndex) {
      c.classList.add('ring-2', 'ring-brand-500');
    } else {
      c.classList.remove('ring-2', 'ring-brand-500');
    }
  });
}

// ==========================================================================
// 6. MOBILE MENU
// ==========================================================================
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Auto-close menu when any navigation link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

// ==========================================================================
// 7. 2026 SCROLL ANIMATION CONTROLLER
// ==========================================================================

// Reveal on Scroll Observer
function initScrollAnimations() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const animElements = document.querySelectorAll('[data-anim]');

  if (prefersReducedMotion) {
    animElements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -30px 0px'
  });

  animElements.forEach(el => observer.observe(el));
}

// Animated Stats Counters
function initCounters() {
  const counterEls = document.querySelectorAll('.counter-num');
  if (!counterEls.length) return;

  const counterObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 1600;
        const startTime = performance.now();

        function updateCounter(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out cubic curve
          const ease = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(ease * target);
          el.textContent = current + suffix;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            el.textContent = target + suffix;
          }
        }

        requestAnimationFrame(updateCounter);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.4 });

  counterEls.forEach(el => counterObserver.observe(el));
}

// Scroll Progress, Navbar Shrink & Scroll-To-Top Toggle
function initScrollEvents() {
  const progressBar = document.getElementById('scroll-progress');
  const headerEl = document.querySelector('header');
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }

    if (headerEl) {
      if (scrollTop > 40) {
        headerEl.classList.add('scrolled');
      } else {
        headerEl.classList.remove('scrolled');
      }
    }

    if (scrollTopBtn) {
      if (scrollTop > 350) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  }, { passive: true });
}

// 3D Card Tilt Effect
function init3DTilt() {
  const tiltCards = document.querySelectorAll('.tilt-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5.5;
      const rotateY = ((x - centerX) / centerX) * 5.5;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

// Magnetic CTA Buttons
function initMagneticButtons() {
  const magneticBtns = document.querySelectorAll('.magnetic-btn');
  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0px, 0px)';
    });
  });
}

// ==========================================================================
// 6. HERO QUICK ESTIMATOR STATE & LOGIC
// ==========================================================================
let heroService = 'wordpress';
let heroScope = 'starter';
let heroAddons = { ghl: false, ai: false, speed: true };
let heroCurrency = 'USD';

const heroPricing = {
  wordpress: {
    name: 'WordPress & WooCommerce',
    base: { starter: 450, growth: 750, scale: 1250 },
    timeline: { starter: '1–2 Weeks', growth: '2–3 Weeks', scale: '3–4 Weeks' }
  },
  fullstack: {
    name: 'Full-Stack SaaS (Laravel/React)',
    base: { starter: 950, growth: 1650, scale: 2800 },
    timeline: { starter: '2–3 Weeks', growth: '3–5 Weeks', scale: '5–8 Weeks' }
  },
  ghl: {
    name: 'GoHighLevel CRM Setup',
    base: { starter: 550, growth: 850, scale: 1400 },
    timeline: { starter: '1–2 Weeks', growth: '2–3 Weeks', scale: '3–4 Weeks' }
  },
  ai: {
    name: 'Autonomous AI Agents',
    base: { starter: 650, growth: 950, scale: 1600 },
    timeline: { starter: '1–2 Weeks', growth: '2–3 Weeks', scale: '3–4 Weeks' }
  }
};

const heroAddonValues = {
  ghl: 180,
  ai: 220,
  speed: 120
};

function formatHeroMoney(usdAmount) {
  const curr = currencyRates[heroCurrency] || currencyRates.USD;
  const converted = Math.round(usdAmount * curr.rate);
  return curr.symbol + converted.toLocaleString();
}

function setHeroCurrency(curr) {
  heroCurrency = curr;
  if (typeof setCurrency === 'function') setCurrency(curr);
  ['USD', 'PKR', 'GBP'].forEach(c => {
    const btn = document.getElementById('hero-curr-' + c);
    if (!btn) return;
    if (c === curr) {
      btn.className = 'px-2 py-0.5 rounded font-bold bg-brand-600 text-white';
    } else {
      btn.className = 'px-2 py-0.5 rounded font-bold text-gray-400 hover:text-white';
    }
  });
  updateHeroEstimate();
}

function setHeroService(svc) {
  heroService = svc;
  ['wordpress', 'fullstack', 'ghl', 'ai'].forEach(s => {
    const btn = document.getElementById('hero-svc-' + s);
    if (!btn) return;
    if (s === svc) {
      btn.className = 'hero-svc-btn p-2.5 rounded-xl border-2 border-brand-500 bg-brand-900/60 text-white shadow-md text-left transition flex items-center gap-2.5';
    } else {
      btn.className = 'hero-svc-btn p-2.5 rounded-xl border border-purple-500/20 bg-purple-950/40 text-gray-300 hover:bg-purple-900/40 text-left transition flex items-center gap-2.5';
    }
  });
  updateHeroEstimate();
}

function setHeroScope(scp) {
  heroScope = scp;
  ['starter', 'growth', 'scale'].forEach(sc => {
    const btn = document.getElementById('hero-scope-' + sc);
    if (!btn) return;
    if (sc === scp) {
      btn.className = 'hero-scope-btn flex-1 py-1.5 px-2 rounded-lg text-[10px] font-bold bg-brand-600 text-white shadow-sm border border-brand-400 text-center transition';
    } else {
      btn.className = 'hero-scope-btn flex-1 py-1.5 px-2 rounded-lg text-[10px] font-medium bg-purple-950/40 text-purple-200 border border-purple-500/20 hover:bg-purple-900/40 text-center transition';
    }
  });
  updateHeroEstimate();
}

function toggleHeroAddon(addonKey) {
  heroAddons[addonKey] = !heroAddons[addonKey];
  const btn = document.getElementById('hero-addon-' + addonKey);
  const icon = document.getElementById('hero-addon-icon-' + addonKey);
  if (btn && icon) {
    if (heroAddons[addonKey]) {
      btn.className = 'hero-addon-chip px-2.5 py-1.5 rounded-lg text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/50 flex items-center gap-1.5 transition cursor-pointer';
      icon.className = 'fa-solid fa-check text-[9px] text-emerald-400';
    } else {
      btn.className = 'hero-addon-chip px-2.5 py-1.5 rounded-lg text-[10px] font-medium bg-purple-950/40 text-purple-300 border border-purple-500/20 hover:bg-purple-900/40 flex items-center gap-1.5 transition cursor-pointer';
      icon.className = 'fa-solid fa-plus text-[9px] text-purple-400';
    }
  }
  updateHeroEstimate();
}

function updateHeroEstimate() {
  const cfg = heroPricing[heroService] || heroPricing.wordpress;
  let baseCost = cfg.base[heroScope] || cfg.base.starter;

  if (heroAddons.ghl) baseCost += heroAddonValues.ghl;
  if (heroAddons.ai) baseCost += heroAddonValues.ai;
  if (heroAddons.speed) baseCost += heroAddonValues.speed;

  const highCost = Math.round(baseCost * 1.22);
  const displayTotal = document.getElementById('heroEstimatedTotal');
  const displayTimeline = document.getElementById('heroEstimatedTimeline');

  if (displayTotal) {
    displayTotal.textContent = `${formatHeroMoney(baseCost)} – ${formatHeroMoney(highCost)}`;
  }
  if (displayTimeline) {
    displayTimeline.textContent = cfg.timeline[heroScope] || '1–2 Weeks';
  }
}

function applyHeroEstimateToForm() {
  const cfg = heroPricing[heroService] || heroPricing.wordpress;
  const priceDisplay = document.getElementById('heroEstimatedTotal')?.textContent || '$450 – $650';
  const timelineDisplay = document.getElementById('heroEstimatedTimeline')?.textContent || '1–2 Weeks';

  // Sync to multi-step form
  selectMultiStepService(heroService, cfg.name);
  selectMultiStepScope(heroScope);

  const banner = document.getElementById('multiStepEstimateBanner');
  const bannerText = document.getElementById('multiStepEstimateText');
  if (banner && bannerText) {
    banner.classList.remove('hidden');
    bannerText.textContent = `Attached from Hero: ${cfg.name} (${heroScope.toUpperCase()}) ~ ${priceDisplay} [${timelineDisplay}]`;
  }

  const contactEl = document.getElementById('contact');
  if (contactEl) {
    contactEl.scrollIntoView({ behavior: 'smooth' });
  }
}

// ==========================================================================
// 7. MULTI-STEP ONBOARDING FORM STATE & LOGIC
// ==========================================================================
let currentMultiStep = 1;
const multiStepData = {
  service: 'WordPress & WooCommerce',
  serviceKey: 'wordpress',
  scope: 'MVP / Starter (1-5 Pages)',
  budget: '$1,000 – $3,000',
  timeline: 'Within 2 Weeks',
  priorities: ['Sub-Second PageSpeed SLA'],
  name: '',
  email: '',
  phone: '',
  notes: ''
};

function updateMultiStepUI() {
  for (let i = 1; i <= 4; i++) {
    const pane = document.getElementById('multiStepPane-' + i);
    const dot = document.getElementById('stepDot-' + i);
    const title = document.getElementById('stepTitle-' + i);
    if (pane) {
      if (i === currentMultiStep) {
        pane.classList.remove('hidden');
        pane.classList.add('block');
      } else {
        pane.classList.add('hidden');
        pane.classList.remove('block');
      }
    }
    if (dot) {
      if (i < currentMultiStep) {
        dot.className = 'w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold shadow-sm';
        dot.innerHTML = '<i class="fa-solid fa-check text-[10px]"></i>';
      } else if (i === currentMultiStep) {
        dot.className = 'w-7 h-7 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold shadow-glow ring-2 ring-purple-300';
        dot.textContent = i;
      } else {
        dot.className = 'w-7 h-7 rounded-full bg-purple-100 text-purple-400 flex items-center justify-center text-xs font-semibold';
        dot.textContent = i;
      }
    }
    if (title) {
      if (i === currentMultiStep) {
        title.className = 'hidden sm:block text-[11px] font-bold text-gray-900';
      } else {
        title.className = 'hidden sm:block text-[11px] font-medium text-gray-400';
      }
    }
  }

  const progressFill = document.getElementById('multiStepProgressFill');
  if (progressFill) {
    const pct = ((currentMultiStep - 1) / 3) * 100;
    progressFill.style.width = `${pct}%`;
  }

  const stepNumDisplay = document.getElementById('currentStepNumberDisplay');
  if (stepNumDisplay) {
    stepNumDisplay.textContent = currentMultiStep;
  }

  const prevBtn = document.getElementById('multiStepPrevBtn');
  const nextBtn = document.getElementById('multiStepNextBtn');
  const submitBtn = document.getElementById('multiStepSubmitBtn');

  if (prevBtn) {
    if (currentMultiStep === 1) {
      prevBtn.classList.add('hidden');
    } else {
      prevBtn.classList.remove('hidden');
    }
  }

  if (nextBtn && submitBtn) {
    if (currentMultiStep === 4) {
      nextBtn.classList.add('hidden');
      submitBtn.classList.remove('hidden');
    } else {
      nextBtn.classList.remove('hidden');
      submitBtn.classList.add('hidden');
    }
  }
}

function nextMultiStep() {
  if (currentMultiStep < 4) {
    currentMultiStep++;
    updateMultiStepUI();
  }
}

function prevMultiStep() {
  if (currentMultiStep > 1) {
    currentMultiStep--;
    updateMultiStepUI();
  }
}

function selectMultiStepService(serviceKey, serviceName) {
  multiStepData.serviceKey = serviceKey;
  multiStepData.service = serviceName || serviceKey;
  document.querySelectorAll('.ms-service-card').forEach(card => {
    if (card.getAttribute('data-ms-svc') === serviceKey) {
      card.className = 'ms-service-card p-3 sm:p-4 rounded-2xl border-2 border-brand-600 bg-purple-50/80 shadow-sm cursor-pointer transition flex items-start gap-3';
    } else {
      card.className = 'ms-service-card p-3 sm:p-4 rounded-2xl border border-gray-200 bg-white hover:border-purple-300 hover:bg-purple-50/30 shadow-xs cursor-pointer transition flex items-start gap-3';
    }
  });
}

function selectMultiStepScope(scopeKey, scopeName) {
  multiStepData.scope = scopeName || scopeKey;
  document.querySelectorAll('.ms-scope-card').forEach(card => {
    if (card.getAttribute('data-ms-scope') === scopeKey) {
      card.className = 'ms-scope-card p-3 rounded-xl border-2 border-brand-600 bg-purple-50/80 shadow-xs cursor-pointer transition text-center';
    } else {
      card.className = 'ms-scope-card p-3 rounded-xl border border-gray-200 bg-white hover:border-purple-300 cursor-pointer transition text-center';
    }
  });
}

function selectMultiStepBudget(budgetKey, budgetText) {
  multiStepData.budget = budgetText || budgetKey;
  document.querySelectorAll('.ms-budget-btn').forEach(btn => {
    if (btn.getAttribute('data-ms-budget') === budgetKey) {
      btn.className = 'ms-budget-btn py-2 px-3 rounded-xl border-2 border-brand-600 bg-brand-600 text-white font-bold text-xs shadow-xs transition';
    } else {
      btn.className = 'ms-budget-btn py-2 px-3 rounded-xl border border-gray-200 bg-gray-50 hover:bg-purple-50 text-gray-700 font-medium text-xs transition';
    }
  });
}

function selectMultiStepTimeline(timelineKey, timelineText) {
  multiStepData.timeline = timelineText || timelineKey;
  document.querySelectorAll('.ms-timeline-btn').forEach(btn => {
    if (btn.getAttribute('data-ms-timeline') === timelineKey) {
      btn.className = 'ms-timeline-btn py-2 px-3 rounded-xl border-2 border-brand-600 bg-brand-600 text-white font-bold text-xs shadow-xs transition';
    } else {
      btn.className = 'ms-timeline-btn py-2 px-3 rounded-xl border border-gray-200 bg-gray-50 hover:bg-purple-50 text-gray-700 font-medium text-xs transition';
    }
  });
}

function toggleMultiStepPriority(pName, element) {
  const idx = multiStepData.priorities.indexOf(pName);
  if (idx > -1) {
    multiStepData.priorities.splice(idx, 1);
    element.className = 'ms-priority-chip py-1.5 px-3 rounded-full border border-gray-200 bg-gray-50 text-gray-600 text-[11px] font-medium cursor-pointer transition';
  } else {
    multiStepData.priorities.push(pName);
    element.className = 'ms-priority-chip py-1.5 px-3 rounded-full border border-brand-500 bg-purple-100 text-brand-700 font-bold text-[11px] cursor-pointer transition';
  }
}

function clearMultiStepEstimate() {
  const banner = document.getElementById('multiStepEstimateBanner');
  if (banner) banner.classList.add('hidden');
}

function handleMultiStepFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('msName')?.value.trim();
  const email = document.getElementById('msEmail')?.value.trim();

  if (!name || !email) {
    alert('Please enter your name and email address in Step 4.');
    return;
  }

  const formWrap = document.getElementById('multiStepFormWrapper');
  const successScreen = document.getElementById('multiStepSuccessScreen');
  const summaryDisplay = document.getElementById('msSubmittedSummary');

  if (summaryDisplay) {
    summaryDisplay.textContent = `${multiStepData.service} • ${multiStepData.scope} • Budget: ${multiStepData.budget} • Timeline: ${multiStepData.timeline}`;
  }

  if (formWrap) formWrap.classList.add('hidden');
  if (successScreen) successScreen.classList.remove('hidden');

  if (typeof window.trackConversionEvent === 'function') {
    window.trackConversionEvent('generate_lead', {
      service: multiStepData.service || 'Custom Development',
      scope: multiStepData.scope || 'Standard',
      budget: multiStepData.budget || '$2,500+',
      timeline: multiStepData.timeline || '4-6 Weeks',
      name: name,
      email: email
    });
  }
}

// ==========================================================================
// 8. PORTFOLIO FILTERING
// ==========================================================================
function filterPortfolio(category, btnElement) {
  const cards = document.querySelectorAll('.portfolio-card');
  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    if (category === 'all' || cardCat === category || (cardCat && cardCat.includes(category))) {
      card.classList.remove('hidden');
      card.classList.add('flex');
    } else {
      card.classList.add('hidden');
      card.classList.remove('flex');
    }
  });

  if (btnElement) {
    const parent = btnElement.parentElement;
    if (parent) {
      parent.querySelectorAll('.portfolio-filter-btn').forEach(btn => {
        btn.className = 'portfolio-filter-btn px-4 py-2 rounded-full text-xs font-semibold bg-gray-100 hover:bg-purple-50 text-gray-700 transition cursor-pointer';
      });
      btnElement.className = 'portfolio-filter-btn px-4 py-2 rounded-full text-xs font-bold bg-brand-600 text-white shadow-sm transition cursor-pointer';
    }
  }
}

// ==========================================================================
// 9. INITIALIZATION ON DOM READY
// ==========================================================================
window.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  updateEstimate();
  updateHeroEstimate();
  updateMultiStepUI();
  // Open first FAQ by default for clean visual layout
  toggleFaq(0);
  // Initialize 2026 interactive scroll animations
  initScrollAnimations();
  initCounters();
  initScrollEvents();
  init3DTilt();
  initMagneticButtons();
});

// Explicitly export functions to global window scope for inline HTML handlers
window.setCurrency = setCurrency;
window.selectTrack = selectTrack;
window.selectEstimatorPreset = selectEstimatorPreset;
window.updateEstimate = updateEstimate;
window.resetEstimator = resetEstimator;
window.applyEstimateToContact = applyEstimateToContact;
window.clearAttachedEstimate = clearAttachedEstimate;
window.toggleFaq = toggleFaq;
window.handleContactSubmit = handleContactSubmit;
window.handleNewsletter = handleNewsletter;
window.scrollServices = scrollServices;

// Hero quick calculator exports
window.setHeroCurrency = setHeroCurrency;
window.setHeroService = setHeroService;
window.setHeroScope = setHeroScope;
window.toggleHeroAddon = toggleHeroAddon;
window.updateHeroEstimate = updateHeroEstimate;
window.applyHeroEstimateToForm = applyHeroEstimateToForm;

// Multi-step form exports
window.updateMultiStepUI = updateMultiStepUI;
window.nextMultiStep = nextMultiStep;
window.prevMultiStep = prevMultiStep;
window.selectMultiStepService = selectMultiStepService;
window.selectMultiStepScope = selectMultiStepScope;
window.selectMultiStepBudget = selectMultiStepBudget;
window.selectMultiStepTimeline = selectMultiStepTimeline;
window.toggleMultiStepPriority = toggleMultiStepPriority;
window.clearMultiStepEstimate = clearMultiStepEstimate;
window.handleMultiStepFormSubmit = handleMultiStepFormSubmit;

// Portfolio filter export
window.filterPortfolio = filterPortfolio;
