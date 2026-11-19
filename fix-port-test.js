const fs = require('fs');
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
        <!-- Review 1: Debt Recovery Hub -->
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

        <!-- Review 2: Zero Through -->
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

        <!-- Review 3: ClaimFirst -->
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
const pTestEnd = portHtml.indexOf('<!-- ==========================================\n       6. INTERACTIVE CTA SECTION');

if (pTestStart !== -1 && pTestEnd !== -1) {
  portHtml = portHtml.slice(0, pTestStart) + newPortTestimonials + '\n\n  ' + portHtml.slice(pTestEnd);
  console.log('Successfully replaced testimonials in portfolio.html!');
  fs.writeFileSync('portfolio.html', portHtml, 'utf-8');
} else {
  console.log('Bounds still not found:', pTestStart, pTestEnd);
}
