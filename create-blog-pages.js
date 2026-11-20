const fs = require('fs');

const articles = [
  {
    filename: 'blog-saas-mvp-cost.html',
    title: 'Planning Your SaaS MVP Budget',
    metaTitle: 'Planning Your SaaS MVP Budget | Yankee Tech',
    metaDesc: 'Define your first release, understand the starting budget and plan the handover.',
    category: 'SaaS & Full-Stack',
    readTime: '3 min read',
    date: 'November 2026',
    excerpt: 'Define your first release, understand the starting budget and plan the handover.',
    serviceLink: 'service-laravel-react.html',
    serviceLinkText: 'custom web application development',
    content: `<h2>Start with one useful workflow</h2><p>A useful first release gives a specific customer a way to complete a specific task. Before choosing features, describe that task, the people involved and what a successful result looks like.</p><h2>What goes into the budget?</h2><p>Scope includes the interface, user accounts, business rules, integrations, testing and deployment. A payment flow or a complex permission model can add work even when the screen looks simple.</p><p>Our project estimator starts a Starter SaaS MVP at $2,200 before optional features. Treat the result as an initial planning range. We confirm the price after reviewing your workflows, data and integration requirements.</p><h2>Separate launch essentials from later additions</h2><p>Write down what a customer must be able to do on day one. Keep reporting enhancements, additional integrations and secondary workflows in a follow-up list. This gives your team a clear acceptance checklist for the first release.</p><h2>Plan for the handover</h2><p>Include hosting, third-party subscriptions, documentation and maintenance in your planning. Agree who owns the accounts and source code, who handles support and how future changes will be scoped.</p><h2>Prepare a useful project brief</h2><p>Share your customer journey, example screens, existing tools and preferred launch date. If you already have a prototype or codebase, include it in the review so the estimate reflects the work that remains.</p>`
  },
  {
    filename: 'blog-gohighlevel-api.html',
    title: 'Planning a GoHighLevel Integration',
    metaTitle: 'Planning a GoHighLevel Integration | Yankee Tech',
    metaDesc: 'Map your data, plan for failures and scope a connection between your website and CRM.',
    category: 'GHL & Integrations',
    readTime: '3 min read',
    date: 'November 2026',
    excerpt: 'Map your data, plan for failures and scope a connection between your website and CRM.',
    serviceLink: 'service-api-engineering.html',
    serviceLinkText: 'custom API integration services',
    content: `<h2>Define the flow before connecting tools</h2><p>Start with the event that should trigger an action. For example, a website enquiry might create or update a CRM contact and assign a follow-up task. Write down which fields must move and which system owns each value.</p><h2>Keep a clear record of ownership</h2><p>Decide where contact details, consent preferences and appointment information are managed. Map fields explicitly and decide what should happen when a record already exists.</p><h2>Design for failures and repeat events</h2><p>A connection needs a plan for unavailable services, duplicate notifications and incomplete data. Include retries, useful logs and a way for your team to review failures as part of the project scope.</p><h2>Test with a complete customer journey</h2><p>Use a test environment and sample records to follow a lead from the website into the CRM. Check edits, missing fields and repeat submissions as well as the initial creation of a contact.</p><h2>Scope your integration</h2><p>Share the tools you use, the events you want to automate and a sample field map. Our team can review the current integration options and propose a workflow for your website and GoHighLevel setup.</p>`
  },
  {
    filename: 'blog-laravel-vs-nodejs.html',
    title: 'Laravel or Node.js for Your Business Application?',
    metaTitle: 'Laravel or Node.js for Your Business Application? | Yankee Tech',
    metaDesc: 'Consider your workflows, existing stack and maintenance needs before choosing a backend.',
    category: 'Architecture & Tech',
    readTime: '3 min read',
    date: 'November 2026',
    excerpt: 'Consider your workflows, existing stack and maintenance needs before choosing a backend.',
    serviceLink: 'service-laravel-react.html',
    serviceLinkText: 'Laravel and React development',
    content: `<h2>Start with your application requirements</h2><p>Choosing a backend starts with the product. Map the workflows, integrations and operational requirements, then consider the skills of the team that will maintain it.</p><h2>Where Laravel fits</h2><p>Laravel is a PHP framework used for applications such as portals, dashboards and business systems. When a project relies on structured data and recurring business workflows, it is one of the options we consider.</p><h2>Where Node.js fits</h2><p>Node.js lets teams use JavaScript on the server. It can fit projects with an existing JavaScript codebase, custom API services or requirements that benefit from shared language expertise across the team.</p><h2>Review the complete system</h2><p>Database design, permissions, background jobs, monitoring and deployment all affect the finished product. Decide how these pieces will be built and supported before committing to an implementation.</p><h2>Bring the decision back to your team</h2><p>Document your expected workloads, existing infrastructure and support responsibilities. We review those constraints with you and explain the tradeoffs behind the proposed architecture.</p>`
  },
  {
    filename: 'blog-hire-dedicated-developer.html',
    title: 'Hiring a Dedicated Developer',
    metaTitle: 'Hiring a Dedicated Developer | Yankee Tech',
    metaDesc: 'Set expectations for the backlog, communication, code review and long-term ownership.',
    category: 'Agency & White-Label',
    readTime: '3 min read',
    date: 'November 2026',
    excerpt: 'Set expectations for the backlog, communication, code review and long-term ownership.',
    serviceLink: 'service-white-label-agency.html',
    serviceLinkText: 'dedicated developers and white-label engineering',
    content: `<h2>Define the work you need help with</h2><p>A dedicated developer is most useful when there is a clear backlog and someone available to set priorities. Describe the product, current stack and expected responsibilities before comparing candidates.</p><h2>Agree how collaboration will work</h2><p>Discuss working-hour overlap, communication channels, access to the codebase and review responsibilities. Decide who approves scope and how questions or blockers should be raised.</p><h2>Start with a focused piece of work</h2><p>A small, well-defined task gives both sides a chance to assess communication, code review and delivery. Provide acceptance criteria and review the result together.</p><h2>Make progress visible</h2><p>Use a shared backlog, regular demonstrations and clear pull-request reviews. Keep documentation close to the code so another developer can understand how to run and maintain the application.</p><h2>Plan for continuity</h2><p>Confirm source-code ownership, account access and handover expectations. Tell us about your backlog and the skills you need so we can discuss a suitable engagement.</p>`
  }
];

function generateBlogHtml(article) {
  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${article.metaTitle}</title>
  <meta name="description" content="${article.metaDesc}" />
  <link rel="canonical" href="https://yankeeetech.com/${article.filename}" />

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
  <script src="script.js" defer></script>
  <!-- Main Stylesheet -->
  <link rel="stylesheet" href="style.css" />

  <!-- Article Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${article.title}",
    "description": "${article.metaDesc}",
    "author": {
      "@type": "Organization",
      "name": "Yankee Tech",
      "url": "https://yankeeetech.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Yankee Tech",
      "logo": {
        "@type": "ImageObject",
        "url": "https://yankeeetech.com/favicon.ico"
      }
    },
    "datePublished": "2026-11-01",
    "dateModified": "2026-11-10"
  }
  </script>
</head>

<body class="antialiased selection:bg-brand-600 selection:text-white bg-white text-gray-900">

  <!-- Header / Nav -->
  <header class="studio-header">
<div class="studio-container studio-nav"><a class="studio-brand" href="index.html" aria-label="Yankee Tech home"><span class="studio-logo">yt<span>.</span></span><span>Yankee Tech</span></a><nav class="studio-desktop-nav" aria-label="Main navigation"><a href="services.html">Services</a><a href="portfolio.html">Our work</a><a href="about.html">About us</a><a href="index.html#blog">Insights</a></nav><a href="index.html#contact" class="studio-nav-cta">Let's talk</a><button id="mobileMenuBtn" class="studio-menu-button" type="button" aria-label="Toggle navigation" aria-controls="mobileMenu" aria-expanded="false"><i class="fa-solid fa-bars" aria-hidden="true"></i></button></div>
<nav id="mobileMenu" class="hidden studio-mobile-nav" aria-label="Mobile navigation"><a href="services.html">Services</a><a href="portfolio.html">Our work</a><a href="about.html">About us</a><a href="use-cases.html">Use cases</a><a href="index.html#blog">Insights</a><a href="index.html#contact">Let's talk</a></nav></header>

  <!-- Article Hero -->
  <article class="py-12 lg:py-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Breadcrumbs -->
      <nav class="flex items-center gap-2 text-xs text-gray-500 mb-6 font-medium">
        <a href="index.html#home" class="hover:text-brand-600">Home</a>
        <span>/</span>
        <a href="index.html#blog" class="hover:text-brand-600">Blog</a>
        <span>/</span>
        <span class="text-gray-900 truncate">${article.category}</span>
      </nav>

      <!-- Category & Meta info -->
      <div class="flex flex-wrap items-center gap-3 mb-4">
        <span class="px-3 py-1 rounded-full bg-purple-50 text-brand-600 border border-purple-200 text-xs font-bold uppercase tracking-wider">
          ${article.category}
        </span>
        <span class="text-xs text-gray-500 font-medium">
          <i class="fa-regular fa-clock mr-1"></i> ${article.readTime}
        </span>
        <span class="text-gray-300">•</span>
        <span class="text-xs text-gray-500 font-medium">
          <i class="fa-regular fa-calendar mr-1"></i> ${article.date}
        </span>
      </div>

      <!-- H1 Headline -->
      <h1 class="font-display font-extrabold text-2xl sm:text-4xl lg:text-[40px] text-gray-900 leading-[1.2] tracking-tight mb-6">
        ${article.title}
      </h1>

      <!-- Excerpt Box -->
      <div class="p-5 sm:p-6 rounded-2xl bg-purple-50/60 border-l-4 border-brand-600 text-sm sm:text-base text-gray-700 leading-relaxed italic mb-10">
        "${article.excerpt}"
      </div>

      <!-- Main Body Content -->
      <div class="prose prose-purple max-w-none text-gray-700 text-sm sm:text-base leading-relaxed space-y-6">
        ${article.content}
      </div>

      <!-- Internal Link Recommendation Callout Box -->
      <div class="my-10 p-6 rounded-3xl bg-gradient-to-br from-[#15072b] via-[#100320] to-[#24083e] text-white shadow-xl relative overflow-hidden">
        <div class="relative z-10 space-y-3">
          <span class="text-[10px] font-mono text-purple-300 uppercase tracking-widest font-bold">NEXT LOGICAL STEP</span>
          <h3 class="font-display font-bold text-lg sm:text-xl text-white">Need expert engineering for your project?</h3>
          <p class="text-xs sm:text-sm text-purple-200/80 leading-relaxed max-w-xl">
            Explore our <a href="${article.serviceLink}" class="text-brand-400 font-bold underline hover:text-white transition">${article.serviceLinkText}</a> or calculate your realistic milestone budget in 30 seconds.
          </p>
          <div class="flex flex-wrap gap-3 pt-2">
            <a href="index.html#estimator" class="btn-purple text-white text-xs font-semibold px-5 py-3 rounded-full inline-flex items-center gap-2">
              <span>Use Project Estimator</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
            <a href="index.html#contact" class="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-5 py-3 rounded-full inline-flex items-center gap-2 transition">
              <span>Book a Free Technical Call</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Author Box per Developer Brief Page 7 -->
      <div class="p-6 rounded-3xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-center gap-5 my-10">
        <div class="w-16 h-16 rounded-2xl bg-brand-600 text-white font-display font-extrabold text-xl flex items-center justify-center shrink-0">
          YT
        </div>
        <div>
          <div class="font-display font-bold text-base text-gray-900">Yankee Tech Technical Team</div>
          <div class="text-xs text-gray-500 mb-2">Senior Full-Stack &amp; Integration Engineers</div>
          <p class="text-xs text-gray-600 leading-relaxed">
            We architect and build bespoke web applications, SaaS platforms, and deep API integrations with Laravel, React, and GoHighLevel. Fixed-price milestones and full code ownership.
          </p>
        </div>
      </div>

      <!-- Back to Blog -->
      <div class="pt-6 border-t border-gray-200 flex items-center justify-between">
        <a href="index.html#blog" class="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-2">
          <i class="fa-solid fa-arrow-left text-[10px]"></i>
          <span>Back to Articles &amp; Insights</span>
        </a>
        <a href="index.html#contact" class="text-xs font-semibold text-gray-600 hover:text-gray-900">
          Have questions? Ask our team →
        </a>
      </div>

    </div>
  </article>

  <!-- Footer -->
  <footer class="bg-[#0b0318] text-white pt-14 pb-8 border-t border-purple-500/20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col sm:flex-row items-center justify-between pb-8 border-b border-purple-500/10 gap-4">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-purple-900/60 border border-purple-500/30 flex items-center justify-center font-bold text-sm text-purple-300">YT</div>
          <span class="font-display font-bold text-sm">Yankee Tech</span>
        </div>
        <div class="flex items-center gap-6 text-xs text-gray-400">
          <a href="privacy-policy.html" class="hover:text-white transition">Privacy Policy</a>
          <a href="terms.html" class="hover:text-white transition">Terms of Service</a>
          <a href="index.html#contact" class="hover:text-white transition">Contact</a>
        </div>
      </div>
      <p class="text-[11px] text-gray-500 text-center mt-6">
        &copy; 2026 Yankee Tech (yankeeetech.com). All rights reserved. Milestone-based delivery, 100% code ownership.
      </p>
    </div>
  </footer>

</body>
</html>`;
}

articles.forEach(art => {
  const fileContent = generateBlogHtml(art);
  fs.writeFileSync(art.filename, fileContent, 'utf-8');
  console.log('Created blog article:', art.filename);
});
