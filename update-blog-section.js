const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

const newBlogSection = `  <!-- ==========================================
       13. BLOG & TECHNICAL INSIGHTS ("Latest Articles & Guides")
       (Real Articles Published per Developer Brief Page 7)
       ========================================== -->
  <section id="blog" class="py-16 lg:py-24 bg-white scroll-mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-[10px] font-bold uppercase tracking-widest mb-3">
            <i class="fa-solid fa-newspaper text-xs"></i>
            <span>ENGINEERING &amp; ARCHITECTURE GUIDES</span>
          </div>
          <h2 class="font-display font-extrabold text-2xl sm:text-4xl text-gray-900 tracking-tight">Latest Articles &amp; Insights</h2>
          <p class="text-xs sm:text-sm text-gray-600 mt-2 max-w-lg">
            Practical engineering playbooks on SaaS MVP budgeting, GoHighLevel API integrations, and modern full-stack architectures.
          </p>
        </div>
        <div class="flex items-center gap-3">
          <a href="blog-hire-dedicated-developer.html"
            class="px-4 py-2 rounded-full border border-purple-200 hover:border-brand-600 text-xs font-semibold text-gray-700 hover:text-brand-600 inline-flex items-center gap-1.5 transition bg-purple-50/50">
            <span>Hiring Guide: Dedicated Developers</span>
            <i class="fa-solid fa-arrow-right text-[10px]"></i>
          </a>
        </div>
      </div>

      <!-- 3 Agency Blog Cards (Linking to Real Articles) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

        <!-- Blog 1: SaaS MVP Cost -->
        <article data-anim="fade-up" data-delay="1"
          class="blog-card rounded-3xl bg-[#faf8ff] border border-purple-100 overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div class="h-48 overflow-hidden bg-gradient-to-br from-[#1b083b] to-[#2d0f5c] p-6 flex flex-col justify-between relative">
              <div class="flex items-center justify-between z-10">
                <span class="text-[10px] font-bold uppercase tracking-widest text-purple-200 bg-white/10 px-2.5 py-1 rounded-full">
                  SAAS &amp; FULL-STACK
                </span>
                <span class="text-xs text-purple-300 font-mono">6 min read</span>
              </div>
              <div class="z-10">
                <i class="fa-solid fa-calculator text-3xl text-purple-400 group-hover:scale-110 transition duration-300"></i>
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-display font-bold text-base sm:text-lg text-gray-900 leading-snug mb-3 group-hover:text-brand-600 transition">
                <a href="blog-saas-mvp-cost.html">How Much Does It Cost to Build a SaaS MVP in 2026?</a>
              </h3>
              <p class="text-xs text-gray-600 leading-relaxed mb-4">
                A realistic breakdown of SaaS MVP development costs in 2026. From scoping and architecture to auth, Stripe billing, and post-launch maintenance.
              </p>
            </div>
          </div>
          <div class="px-6 pb-6 pt-2 border-t border-purple-100/60 flex items-center justify-between">
            <span class="text-[11px] text-gray-400 font-medium">November 2026</span>
            <a href="blog-saas-mvp-cost.html"
              class="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 group-hover:gap-2.5 transition-all">
              <span>Read Full Article</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
          </div>
        </article>

        <!-- Blog 2: GHL + API Integration -->
        <article data-anim="fade-up" data-delay="2"
          class="blog-card rounded-3xl bg-[#faf8ff] border border-purple-100 overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div class="h-48 overflow-hidden bg-gradient-to-br from-[#0e1c36] to-[#132f5d] p-6 flex flex-col justify-between relative">
              <div class="flex items-center justify-between z-10">
                <span class="text-[10px] font-bold uppercase tracking-widest text-sky-200 bg-white/10 px-2.5 py-1 rounded-full">
                  GHL &amp; INTEGRATIONS
                </span>
                <span class="text-xs text-sky-300 font-mono">8 min read</span>
              </div>
              <div class="z-10">
                <i class="fa-solid fa-plug-circle-bolt text-3xl text-sky-400 group-hover:scale-110 transition duration-300"></i>
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-display font-bold text-base sm:text-lg text-gray-900 leading-snug mb-3 group-hover:text-brand-600 transition">
                <a href="blog-gohighlevel-api.html">How to Connect GoHighLevel to Your App or Website via API</a>
              </h3>
              <p class="text-xs text-gray-600 leading-relaxed mb-4">
                A complete developer guide to connecting GoHighLevel using the GHL API v2, OAuth2 token rotation, and bidirectional webhooks.
              </p>
            </div>
          </div>
          <div class="px-6 pb-6 pt-2 border-t border-purple-100/60 flex items-center justify-between">
            <span class="text-[11px] text-gray-400 font-medium">November 2026</span>
            <a href="blog-gohighlevel-api.html"
              class="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 group-hover:gap-2.5 transition-all">
              <span>Read Full Article</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
          </div>
        </article>

        <!-- Blog 3: Laravel vs Node.js -->
        <article data-anim="fade-up" data-delay="3"
          class="blog-card rounded-3xl bg-[#faf8ff] border border-purple-100 overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div class="h-48 overflow-hidden bg-gradient-to-br from-[#270b20] to-[#45103a] p-6 flex flex-col justify-between relative">
              <div class="flex items-center justify-between z-10">
                <span class="text-[10px] font-bold uppercase tracking-widest text-rose-200 bg-white/10 px-2.5 py-1 rounded-full">
                  ARCHITECTURE &amp; TECH
                </span>
                <span class="text-xs text-rose-300 font-mono">7 min read</span>
              </div>
              <div class="z-10">
                <i class="fa-brands fa-laravel text-3xl text-red-400 group-hover:scale-110 transition duration-300"></i>
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-display font-bold text-base sm:text-lg text-gray-900 leading-snug mb-3 group-hover:text-brand-600 transition">
                <a href="blog-laravel-vs-nodejs.html">Laravel vs Node.js for Custom Business Applications in 2026</a>
              </h3>
              <p class="text-xs text-gray-600 leading-relaxed mb-4">
                An honest, hype-free comparison between Laravel 11 and Node.js for startups and growing businesses. Speed, costs, and scalability.
              </p>
            </div>
          </div>
          <div class="px-6 pb-6 pt-2 border-t border-purple-100/60 flex items-center justify-between">
            <span class="text-[11px] text-gray-400 font-medium">November 2026</span>
            <a href="blog-laravel-vs-nodejs.html"
              class="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 group-hover:gap-2.5 transition-all">
              <span>Read Full Article</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
          </div>
        </article>

      </div>
    </div>
  </section>`;

const blogStartIdx = html.indexOf('<!-- ==========================================\n       13. BLOG & INSIGHTS');
const blogEndIdx = html.indexOf('<!-- ==========================================\n       14. DARK COSMIC FOOTER');

if (blogStartIdx !== -1 && blogEndIdx !== -1) {
  html = html.slice(0, blogStartIdx) + newBlogSection + '\n\n  ' + html.slice(blogEndIdx);
  console.log('Successfully updated blog section in index.html!');
  fs.writeFileSync('index.html', html, 'utf-8');
} else {
  console.log('Blog bounds not found:', blogStartIdx, blogEndIdx);
}
