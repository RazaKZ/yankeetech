const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

// 1. Fix dark use-cases heading
// Replace <div data-anim="fade-up"> inside #use-cases with <div class="fade-in-ready">
const oldUseCasesHeader = `<section id="use-cases" class="relative dark-cosmic-bg text-white pt-20 pb-24 overflow-hidden scroll-mt-16">
    <a id="industries" class="sr-only">Industries and Use Cases</a>
    <!-- Top Left Curved Cutout SVG matching screenshot -->
    <div class="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
      <svg viewBox="0 0 1440 54" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-8 sm:h-12 preserve-3d"
        preserveAspectRatio="none">
        <path d="M0 0H1440V12H140C70 12 30 35 0 54V0Z" fill="#ffffff" />
      </svg>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div data-anim="fade-up">`;

const newUseCasesHeader = `<section id="use-cases" class="relative dark-cosmic-bg text-white pt-20 pb-24 overflow-hidden scroll-mt-16">
    <a id="industries" class="sr-only">Industries and Use Cases</a>
    <!-- Top Left Curved Cutout SVG matching screenshot -->
    <div class="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
      <svg viewBox="0 0 1440 54" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-8 sm:h-12 preserve-3d"
        preserveAspectRatio="none">
        <path d="M0 0H1440V12H140C70 12 30 35 0 54V0Z" fill="#ffffff" />
      </svg>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Header (Always crisp & 100% visible) -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div class="opacity-100 visible">`;

if (html.includes(oldUseCasesHeader)) {
  html = html.replace(oldUseCasesHeader, newUseCasesHeader);
  console.log('Fixed #use-cases header animation bug!');
} else {
  console.log('Old use cases header not found exactly, searching alternate...');
  html = html.replace('<section id="use-cases" class="relative dark-cosmic-bg text-white pt-20 pb-24 overflow-hidden scroll-mt-16">\n    <a id="industries" class="sr-only">Industries and Use Cases</a>\n    <!-- Top Left Curved Cutout SVG matching screenshot -->\n    <div class="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none">\n      <svg viewBox="0 0 1440 54" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-8 sm:h-12 preserve-3d"\n        preserveAspectRatio="none">\n        <path d="M0 0H1440V12H140C70 12 30 35 0 54V0Z" fill="#ffffff" />\n      </svg>\n    </div>\n\n    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">\n      <!-- Header -->\n      <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">\n        <div data-anim="fade-up">', newUseCasesHeader);
}

// 2. Update FAQ with the 7 exact questions from Developer Brief Page 15
const oldFaqStart = html.indexOf('<!-- ==========================================\n       12. FREQUENTLY ASKED QUESTIONS');
const oldFaqEnd = html.indexOf('<!-- ==========================================\n       13. BLOG & INSIGHTS');

const newFaqSection = `<!-- ==========================================
       12. FREQUENTLY ASKED QUESTIONS ("Common Questions")
       (Exact 7 Core Questions per Developer Brief Page 15)
       ========================================== -->
  <section id="faq" class="py-16 lg:py-24 bg-white scroll-mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

        <!-- Left 5 Columns: Heading + Bottom Purple Button -->
        <div data-anim="fade-right" class="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-[10px] font-bold uppercase tracking-widest mb-3">
              <i class="fa-solid fa-circle-question text-xs"></i>
              <span>TRANSPARENT ANSWERS</span>
            </div>
            <h2 class="font-display font-extrabold text-2xl sm:text-4xl text-gray-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p class="text-xs sm:text-sm text-gray-600 mt-3 max-w-sm leading-relaxed">
              Everything you need to know about pricing, milestone delivery, code ownership, tech stack, and post-launch support.
            </p>
          </div>

          <div class="p-6 rounded-3xl bg-purple-50/60 border border-purple-100 space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center text-sm">
                <i class="fa-solid fa-comments"></i>
              </div>
              <div>
                <div class="font-display font-bold text-sm text-gray-900">Have a specific question?</div>
                <div class="text-[11px] text-gray-500">Book a free 30-min scoping call with our lead developer.</div>
              </div>
            </div>
            <a href="#contact"
              class="w-full btn-purple magnetic-btn text-white text-xs font-semibold py-3 px-5 rounded-full inline-flex items-center justify-center gap-2 shadow-sm">
              <span>Book a Free Technical Consultation</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
          </div>
        </div>

        <!-- Right 7 Columns: Expandable FAQ Accordion -->
        <div data-anim="fade-left" class="lg:col-span-7 divide-y divide-purple-100 border-t border-b border-purple-100"
          id="faqContainer">

          <!-- FAQ 1: Cost -->
          <div class="py-4 sm:py-5">
            <button type="button" onclick="toggleFaq(0)"
              class="w-full flex items-center justify-between text-left font-display font-bold text-xs sm:text-sm text-gray-900 hover:text-brand-600 transition gap-4">
              <span>How much does a custom web application cost?</span>
              <span class="w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                <i id="faq-icon-0" class="fa-solid fa-plus text-xs text-brand-600 transition-transform"></i>
              </span>
            </button>
            <div id="faq-body-0" class="hidden pt-3 text-xs sm:text-sm text-gray-600 leading-relaxed space-y-2">
              <p>A starter MVP typically starts from <strong>$2,200</strong>. Business web apps and client portals start from <strong>$3,800</strong>, and custom platforms from <strong>$8,000</strong>.</p>
              <p>The final fixed price depends on features and integrations, and we confirm it after a free consultation and a short scoping phase. Payments are split into milestones: 30% to start, 30% at midpoint, and 40% at launch.</p>
            </div>
          </div>

          <!-- FAQ 2: Timeline -->
          <div class="py-4 sm:py-5">
            <button type="button" onclick="toggleFaq(1)"
              class="w-full flex items-center justify-between text-left font-display font-bold text-xs sm:text-sm text-gray-900 hover:text-brand-600 transition gap-4">
              <span>How long does it take to build a custom web app?</span>
              <span class="w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                <i id="faq-icon-1" class="fa-solid fa-plus text-xs text-brand-600 transition-transform"></i>
              </span>
            </button>
            <div id="faq-body-1" class="hidden pt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
              <p>Starter MVPs typically take <strong>4 to 6 weeks</strong>. Larger applications take <strong>8 to 16 weeks</strong> depending on scope. We share a clear milestone timeline before development starts, with working weekly demos so you see continuous progress.</p>
            </div>
          </div>

          <!-- FAQ 3: Code Ownership -->
          <div class="py-4 sm:py-5">
            <button type="button" onclick="toggleFaq(2)"
              class="w-full flex items-center justify-between text-left font-display font-bold text-xs sm:text-sm text-gray-900 hover:text-brand-600 transition gap-4">
              <span>Who owns the code and the accounts?</span>
              <span class="w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                <i id="faq-icon-2" class="fa-solid fa-plus text-xs text-brand-600 transition-transform"></i>
              </span>
            </button>
            <div id="faq-body-2" class="hidden pt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
              <p><strong>You do. 100%.</strong> We hand over the full GitHub source code repository, documentation, deployment credentials and all third-party service accounts at launch. There is zero vendor lock-in.</p>
            </div>
          </div>

          <!-- FAQ 4: Technologies -->
          <div class="py-4 sm:py-5">
            <button type="button" onclick="toggleFaq(3)"
              class="w-full flex items-center justify-between text-left font-display font-bold text-xs sm:text-sm text-gray-900 hover:text-brand-600 transition gap-4">
              <span>What technologies do you use?</span>
              <span class="w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                <i id="faq-icon-3" class="fa-solid fa-plus text-xs text-brand-600 transition-transform"></i>
              </span>
            </button>
            <div id="faq-body-3" class="hidden pt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
              <p>We build with <strong>Laravel, React, Next.js, and Node.js</strong>, using PostgreSQL or MySQL, Redis caching, REST and GraphQL APIs, and cloud hosting such as AWS. We choose what fits your project and scale, not just what is trendy.</p>
            </div>
          </div>

          <!-- FAQ 5: US Timezones -->
          <div class="py-4 sm:py-5">
            <button type="button" onclick="toggleFaq(4)"
              class="w-full flex items-center justify-between text-left font-display font-bold text-xs sm:text-sm text-gray-900 hover:text-brand-600 transition gap-4">
              <span>Do you work with US clients and US time zones?</span>
              <span class="w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                <i id="faq-icon-4" class="fa-solid fa-plus text-xs text-brand-600 transition-transform"></i>
              </span>
            </button>
            <div id="faq-body-4" class="hidden pt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
              <p><strong>Yes.</strong> We schedule calls in your time zone (EST, CST, PST, and GMT) and maintain dedicated daily overlap hours every working day. We reply to messages and tickets promptly within 2 to 4 business hours.</p>
            </div>
          </div>

          <!-- FAQ 6: NDAs -->
          <div class="py-4 sm:py-5">
            <button type="button" onclick="toggleFaq(5)"
              class="w-full flex items-center justify-between text-left font-display font-bold text-xs sm:text-sm text-gray-900 hover:text-brand-600 transition gap-4">
              <span>Do you sign NDAs?</span>
              <span class="w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                <i id="faq-icon-5" class="fa-solid fa-plus text-xs text-brand-600 transition-transform"></i>
              </span>
            </button>
            <div id="faq-body-5" class="hidden pt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
              <p><strong>Yes.</strong> We sign a binding mutual Non-Disclosure Agreement (NDA) before you share your proprietary concept, technical specs, or existing codebase. We also provide strict white-label agreements for agency partners.</p>
            </div>
          </div>

          <!-- FAQ 7: Post-Launch Support -->
          <div class="py-4 sm:py-5">
            <button type="button" onclick="toggleFaq(6)"
              class="w-full flex items-center justify-between text-left font-display font-bold text-xs sm:text-sm text-gray-900 hover:text-brand-600 transition gap-4">
              <span>What happens after launch?</span>
              <span class="w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                <i id="faq-icon-6" class="fa-solid fa-plus text-xs text-brand-600 transition-transform"></i>
              </span>
            </button>
            <div id="faq-body-6" class="hidden pt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
              <p>Every project includes <strong>30 days of comprehensive post-launch warranty &amp; bug-fix support</strong> at no extra charge. After that, you can choose an ongoing monthly maintenance plan or a flexible pack of development hours as your platform scales.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>

  `;

if (oldFaqStart !== -1 && oldFaqEnd !== -1) {
  html = html.slice(0, oldFaqStart) + newFaqSection + html.slice(oldFaqEnd);
  console.log('Successfully updated FAQ section with exact 7 questions!');
} else {
  console.log('FAQ section markers not found:', oldFaqStart, oldFaqEnd);
}

// 3. Add Google FAQPage Schema to <head>
const faqSchema = `
  <!-- Google FAQPage Schema per Developer Brief Appendix D -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a custom web application cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A starter MVP typically starts from $2,200. Business web apps and client portals start from $3,800, and custom platforms from $8,000. The final fixed price depends on features and integrations, and we confirm it after a free consultation and a short scoping phase."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a custom web app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Starter MVPs typically take 4 to 6 weeks. Larger applications take 8 to 16 weeks depending on scope. We share a milestone timeline before development starts."
        }
      },
      {
        "@type": "Question",
        "name": "Who owns the code and the accounts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You do. We hand over the full source code, documentation and all accounts at launch, with no lock-in."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies do you use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We build with Laravel, React, Next.js and Node.js, using PostgreSQL or MySQL, Redis, REST and GraphQL APIs and cloud hosting such as AWS. We choose what fits your project, not what is trendy."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with US clients and US time zones?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We schedule calls in your time zone and overlap with US hours every working day. We reply to messages promptly within 2 to 4 hours."
        }
      },
      {
        "@type": "Question",
        "name": "Do you sign NDAs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We sign an NDA before you share your idea or documents, and we offer strict white-label arrangements for agencies."
        }
      },
      {
        "@type": "Question",
        "name": "What happens after launch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every project includes 30 days of support. After that you can choose a monthly maintenance plan or a pack of development hours."
        }
      }
    ]
  }
  </script>
`;

if (!html.includes('"@type": "FAQPage"')) {
  html = html.replace('</head>', faqSchema + '\n</head>');
  console.log('Embedded Google FAQPage Schema in <head>');
}

fs.writeFileSync('index.html', html, 'utf-8');
console.log('Saved index.html');
