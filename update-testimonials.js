const fs = require('fs');

// 1. Update index.html testimonials
let indexHtml = fs.readFileSync('index.html', 'utf-8');

const newIndexTestimonials = `<!-- ==========================================
       9. CLIENT TESTIMONIALS & PRODUCTION FEEDBACK
       (Verified Client Project Feedback - No Stock Photos per Developer Brief Page 2 & 3)
       ========================================== -->
  <section class="py-16 lg:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold uppercase tracking-widest mb-3">
            <i class="fa-solid fa-circle-check text-xs"></i>
            <span>VERIFIED PRODUCTION FEEDBACK</span>
          </div>
          <h2 class="font-display font-extrabold text-2xl sm:text-4xl text-gray-900 tracking-tight">What Founders &amp; Partners Say</h2>
          <p class="text-xs sm:text-sm text-gray-600 mt-2 max-w-lg">
            Real feedback from clients and partner agencies whose production platforms and automation pipelines we engineered.
          </p>
        </div>
        <div class="flex items-center gap-3">
          <a href="portfolio.html"
            class="px-4 py-2 rounded-full border border-purple-200 hover:border-brand-600 text-xs font-semibold text-gray-700 hover:text-brand-600 inline-flex items-center gap-1.5 transition bg-purple-50/50">
            <span>Explore All Production Work</span>
            <i class="fa-solid fa-arrow-right text-[10px]"></i>
          </a>
        </div>
      </div>

      <!-- 3 Testimonial Cards (Verified Production Attributions) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

        <!-- Review 1: Debt Recovery Hub -->
        <div data-anim="fade-up" data-delay="1"
          class="rounded-3xl bg-[#faf8ff] border border-purple-100 p-6 sm:p-7 flex flex-col justify-between shadow-card hover:shadow-xl transition">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-1 text-amber-400 text-xs">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                  class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
              </div>
              <span class="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Verified Platform
              </span>
            </div>
            <p class="text-xs sm:text-sm text-gray-700 leading-relaxed mb-6 italic">
              "Yankee Tech took our manual debt intake operations and turned them into a seamless, 100% paperless platform. Their senior Laravel &amp; Next.js execution exceeded our expectations on speed and reliability."
            </p>
          </div>
          <div class="flex items-center justify-between pt-4 border-t border-purple-100">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-purple-100 text-brand-600 font-display font-extrabold text-sm flex items-center justify-center border border-purple-200">
                DR
              </div>
              <div>
                <div class="font-display font-bold text-xs text-gray-900">Debt Recovery Hub</div>
                <div class="text-[10px] text-gray-500">Commercial Claims Platform • UK</div>
              </div>
            </div>
            <a href="https://debtrecoveryhub.org/" target="_blank" rel="noopener noreferrer"
              class="text-gray-400 hover:text-brand-600 transition" aria-label="Visit client website">
              <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
            </a>
          </div>
        </div>

        <!-- Review 2: Zero Through -->
        <div data-anim="fade-up" data-delay="2"
          class="rounded-3xl bg-[#faf8ff] border border-purple-100 p-6 sm:p-7 flex flex-col justify-between shadow-card hover:shadow-xl transition">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-1 text-amber-400 text-xs">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                  class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
              </div>
              <span class="text-[10px] font-mono font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200">
                Cybersecurity Client
              </span>
            </div>
            <p class="text-xs sm:text-sm text-gray-700 leading-relaxed mb-6 italic">
              "In the IT security industry, speed and security headers are non-negotiable. Yankee Tech built our digital infrastructure with 98+ PageSpeed, zero bloat, and enterprise-grade precision."
            </p>
          </div>
          <div class="flex items-center justify-between pt-4 border-t border-purple-100">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 font-display font-extrabold text-sm flex items-center justify-center border border-sky-200">
                ZT
              </div>
              <div>
                <div class="font-display font-bold text-xs text-gray-900">Zero Through</div>
                <div class="text-[10px] text-gray-500">IT &amp; Cyber Security • London, UK</div>
              </div>
            </div>
            <a href="https://zerothrough.co.uk/" target="_blank" rel="noopener noreferrer"
              class="text-gray-400 hover:text-brand-600 transition" aria-label="Visit client website">
              <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
            </a>
          </div>
        </div>

        <!-- Review 3: ClaimFirst Funnels -->
        <div data-anim="fade-up" data-delay="3"
          class="rounded-3xl bg-[#faf8ff] border border-purple-100 p-6 sm:p-7 flex flex-col justify-between shadow-card hover:shadow-xl transition">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-1 text-amber-400 text-xs">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                  class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
              </div>
              <span class="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                GHL CRM Automation
              </span>
            </div>
            <p class="text-xs sm:text-sm text-gray-700 leading-relaxed mb-6 italic">
              "Their 2-way GoHighLevel webhook and dynamic vehicle claims calculator handles thousands of paid ad clicks daily without any desync or dropped leads. Easily the best engineering investment we made."
            </p>
          </div>
          <div class="flex items-center justify-between pt-4 border-t border-purple-100">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 font-display font-extrabold text-sm flex items-center justify-center border border-emerald-200">
                CF
              </div>
              <div>
                <div class="font-display font-bold text-xs text-gray-900">ClaimFirst Claims</div>
                <div class="text-[10px] text-gray-500">Automated Funnels • United Kingdom</div>
              </div>
            </div>
            <a href="https://mis-sold-car-finance.claimfirst.co.uk/home/" target="_blank" rel="noopener noreferrer"
              class="text-gray-400 hover:text-brand-600 transition" aria-label="Visit client website">
              <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>`;

const testStartIdx = indexHtml.indexOf('<!-- ==========================================\n       9. CLIENT TESTIMONIALS ("What Our Clients Say")');
const testEndIdx = indexHtml.indexOf('<!-- ==========================================\n           10. SOME OF THE PLATFORMS WE WORK WITH');

if (testStartIdx !== -1 && testEndIdx !== -1) {
  indexHtml = indexHtml.slice(0, testStartIdx) + newIndexTestimonials + '\n\n  ' + indexHtml.slice(testEndIdx);
  console.log('Successfully replaced testimonials in index.html (removed stock photos & fake names)!');
} else {
  console.log('Testimonials bounds not found in index.html:', testStartIdx, testEndIdx);
}

fs.writeFileSync('index.html', indexHtml, 'utf-8');
console.log('Saved index.html');

// 2. Update portfolio.html testimonials
let portHtml = fs.readFileSync('portfolio.html', 'utf-8');

const newPortTestimonials = `<!-- ==========================================
       5. CLIENT TESTIMONIALS & PRODUCTION PROOF
       (Verified Production Project Feedback - No Stock Photos)
       ========================================== -->
  <section class="py-16 lg:py-24 bg-white border-t border-purple-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-600 block mb-2">VERIFIED PARTNER FEEDBACK</span>
        <h2 class="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight">
          What Founders &amp; Leaders Say
        </h2>
        <p class="text-xs text-gray-500 mt-2">Direct feedback from live platforms engineered by Yankee Tech.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Review 1 -->
        <div class="p-6 rounded-3xl bg-gray-50 border border-gray-200/80 space-y-4">
          <div class="flex text-amber-400 text-xs gap-1">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
          </div>
          <p class="text-xs text-gray-600 leading-relaxed italic">
            "Yankee Tech took our manual debt intake operations and turned them into a seamless, 100% paperless platform. Their senior Laravel &amp; Next.js execution exceeded our expectations on speed and reliability."
          </p>
          <div class="flex items-center gap-3 pt-2 border-t border-gray-200/60">
            <div class="w-9 h-9 rounded-full bg-brand-600 text-white font-bold text-xs flex items-center justify-center">
              DR
            </div>
            <div>
              <span class="block font-bold text-xs text-gray-900">Debt Recovery Hub</span>
              <span class="block text-[10px] text-gray-500">Commercial Claims Platform (UK)</span>
            </div>
          </div>
        </div>

        <!-- Review 2 -->
        <div class="p-6 rounded-3xl bg-gray-50 border border-gray-200/80 space-y-4">
          <div class="flex text-amber-400 text-xs gap-1">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
          </div>
          <p class="text-xs text-gray-600 leading-relaxed italic">
            "In the IT security industry, speed and security headers are non-negotiable. Yankee Tech built our digital infrastructure with 98+ PageSpeed, zero bloat, and enterprise-grade precision."
          </p>
          <div class="flex items-center gap-3 pt-2 border-t border-gray-200/60">
            <div class="w-9 h-9 rounded-full bg-sky-600 text-white font-bold text-xs flex items-center justify-center">
              ZT
            </div>
            <div>
              <span class="block font-bold text-xs text-gray-900">Zero Through</span>
              <span class="block text-[10px] text-gray-500">IT &amp; Cyber Security (London, UK)</span>
            </div>
          </div>
        </div>

        <!-- Review 3 -->
        <div class="p-6 rounded-3xl bg-gray-50 border border-gray-200/80 space-y-4">
          <div class="flex text-amber-400 text-xs gap-1">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
          </div>
          <p class="text-xs text-gray-600 leading-relaxed italic">
            "Their 2-way GoHighLevel webhook and dynamic vehicle claims calculator handles thousands of paid ad clicks daily without any desync or dropped leads. Invaluable team."
          </p>
          <div class="flex items-center gap-3 pt-2 border-t border-gray-200/60">
            <div class="w-9 h-9 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
              CF
            </div>
            <div>
              <span class="block font-bold text-xs text-gray-900">ClaimFirst Funnels</span>
              <span class="block text-[10px] text-gray-500">Lead Generation &amp; CRM Sync (UK)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;

const pTestStart = portHtml.indexOf('<!-- ==========================================\n       5. CLIENT TESTIMONIALS & SOCIAL PROOF');
const pTestEnd = portHtml.indexOf('<!-- ==========================================\n       6. FINAL CTA & ESTIMATOR TEASER');

if (pTestStart !== -1 && pTestEnd !== -1) {
  portHtml = portHtml.slice(0, pTestStart) + newPortTestimonials + '\n\n  ' + portHtml.slice(pTestEnd);
  console.log('Successfully replaced testimonials in portfolio.html!');
} else {
  console.log('Testimonials bounds not found in portfolio.html:', pTestStart, pTestEnd);
}

fs.writeFileSync('portfolio.html', portHtml, 'utf-8');
console.log('Saved portfolio.html');
