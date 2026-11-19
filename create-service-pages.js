const fs = require('fs');
const path = require('path');

const services = [
  {
    slug: 'service-wordpress.html',
    title: 'Custom WordPress & WooCommerce Development',
    eyebrow: 'WEB & CMS ENGINEERING',
    heroBadge: 'CORE 01 • SUB-SECOND ARCHITECTURE',
    headline: 'Bespoke WordPress Architectures with Sub-Second Performance',
    description: 'We build custom, enterprise-grade WordPress themes and high-converting WooCommerce storefronts engineered with zero plugin bloat. Every build scores 95+ on Google PageSpeed Insights, featuring clean PHP, Tailwind CSS, modular ACF flexible content blocks, and native Redis caching.',
    preset: 'wordpress',
    metrics: [
      { num: '95+', label: 'Mobile PageSpeed Score' },
      { num: '<0.5s', label: 'Time to First Byte (TTFB)' },
      { num: '100%', label: 'Custom Clean Code' },
      { num: '0', label: 'Vulnerable Plugin Bloat' }
    ],
    svgType: 'wordpress',
    features: [
      {
        icon: 'fa-solid fa-code',
        title: 'Custom Themes & Elementor Systems',
        desc: 'Pixel-perfect development tailored to your exact Figma designs with custom theme hierarchies and ACF flexible content blocks for easy marketing updates.'
      },
      {
        icon: 'fa-solid fa-gauge-high',
        title: 'Core Web Vitals 95+ Optimization',
        desc: 'Sub-second page rendering via critical CSS extraction, modern WebP/AVIF formats, Redis object caching, and asset minification.'
      },
      {
        icon: 'fa-solid fa-cart-shopping',
        title: 'High-Converting WooCommerce Checkouts',
        desc: 'Frictionless 1-step checkout funnels, Stripe/PayPal Apple Pay integrations, upsell workflows, and automated receipt delivery.'
      },
      {
        icon: 'fa-solid fa-shield-halved',
        title: 'Enterprise Hardening & Security SLA',
        desc: 'Database prefix obfuscation, strict CORS/CSP headers, 2FA enforcement, and automated off-site encrypted backup routines.'
      }
    ],
    process: [
      { step: '01', title: 'Blueprint & Architecture', desc: 'We audit technical requirements, map database taxonomies, and establish design system components.' },
      { step: '02', title: 'Modular Theme Coding', desc: 'Semantic PHP 8.3 template coding with Tailwind CSS utilities and responsive breakpoints.' },
      { step: '03', title: 'Database & Speed Tuning', desc: 'Redis object caching integration, query indexing, and Core Web Vitals optimization.' },
      { step: '04', title: 'Security Audit & Handoff', desc: 'Vulnerability scanning, SSL/header hardening, and Loom video training for your marketing team.' }
    ],
    specs: [
      { name: 'PHP Environment', value: 'PHP 8.2 / 8.3 with OPcache' },
      { name: 'Front-End Stack', value: 'Tailwind CSS, Alpine.js / Vanilla JS' },
      { name: 'Database & Caching', value: 'MySQL 8 / MariaDB + Redis Object Cache' },
      { name: 'Page Speed SLA', value: '95+ on Mobile & Desktop Guaranteed' },
      { name: 'Post-Launch Warranty', value: '30 Days Full Technical Coverage' }
    ],
    faqs: [
      { q: 'Will my marketing team be able to update content without knowing code?', a: 'Yes! We configure ACF (Advanced Custom Fields) Pro and intuitive drag-and-drop flexible content blocks so your team can create new landing pages and swap copy without ever touching code or breaking layouts.' },
      { q: 'Can you migrate our sluggish WordPress site to your clean-code architecture?', a: 'Absolutely. We regularly migrate clients from bloated 40-plugin setups to our lean framework, preserving all SEO URLs, metadata, and blog history while slicing load times by 70%.' },
      { q: 'Do you work with Elementor Pro or strictly custom code?', a: 'We master both! When clients prefer Elementor Pro for rapid visual freedom, we build optimized child themes that bypass Elementor bloat. For maximum speed, we build custom Tailwind PHP templates.' }
    ]
  },
  {
    slug: 'service-laravel-react.html',
    title: 'Laravel & React / Next.js Full-Stack Web Applications',
    eyebrow: 'BESPOKE PLATFORMS & SAAS',
    heroBadge: 'CORE 02 • SCALABLE WEB APPS',
    headline: 'Enterprise Full-Stack Web Applications Engineered for Scale',
    description: 'When off-the-shelf software falls short, we engineer custom web applications that scale effortlessly. We combine resilient Laravel 11 backends with snappy React 18 and Next.js interfaces, delivering customer portals, multi-tenant SaaS tools, and high-concurrency APIs.',
    preset: 'fullstack',
    metrics: [
      { num: '99.9%', label: 'Uptime Reliability SLA' },
      { num: '<120ms', label: 'Average API Response' },
      { num: '100%', label: 'Role-Based Access (RBAC)' },
      { num: 'REST & GraphQL', label: 'API Architecture' }
    ],
    svgType: 'fullstack',
    features: [
      {
        icon: 'fa-solid fa-layer-group',
        title: 'Multi-Tenant Database Architecture',
        desc: 'Scoped multi-tenancy or isolated database schemas ensuring enterprise compliance, data isolation, and smooth customer onboarding.'
      },
      {
        icon: 'fa-solid fa-lock',
        title: 'Granular Role-Based Access Control',
        desc: 'Secure JWT/Sanctum authentication, team hierarchies, permission-scoped actions, and tamper-proof audit event logging.'
      },
      {
        icon: 'fa-solid fa-bolt',
        title: 'Snappy React 18 & Next.js Frontends',
        desc: 'Server-Side Rendering (SSR), optimistic UI updates, responsive Tailwind components, and real-time state synchronization.'
      },
      {
        icon: 'fa-solid fa-credit-card',
        title: 'Stripe Billing & Subscription Engines',
        desc: 'Tiered subscription billing, seat management, metered usage calculations, customer billing portals, and automated tax handling.'
      }
    ],
    process: [
      { step: '01', title: 'Data Modeling & PRD', desc: 'Detailed schema design, ERD diagrams, user flow mapping, and API contract specifications.' },
      { step: '02', title: 'Backend API & Business Logic', desc: 'Laravel REST/GraphQL endpoints, validation rules, queue workers, and unit tests.' },
      { step: '03', title: 'Reactive Frontend Engineering', desc: 'React/Next.js UI implementation with interactive dashboards, forms, and charts.' },
      { step: '04', title: 'Dockerized Staging & Deploy', desc: 'CI/CD pipeline configuration, PostgreSQL indexing, and automated production rollout.' }
    ],
    specs: [
      { name: 'Backend Framework', value: 'Laravel 11 / PHP 8.3' },
      { name: 'Frontend Framework', value: 'React 18 / Next.js 14 + Tailwind CSS' },
      { name: 'Database & Queues', value: 'PostgreSQL / MySQL + Redis Queue Workers' },
      { name: 'API Standards', value: 'OpenAPI v3 RESTful & GraphQL Contracts' },
      { name: 'Deployment Target', value: 'AWS, DigitalOcean, Forge or Dockerized VPS' }
    ],
    faqs: [
      { q: 'Can this platform handle high traffic and concurrent users?', a: 'Yes. Our Laravel architectures utilize Redis queues for background tasks, database read/write replicas, and optimized query indexing capable of handling thousands of concurrent requests seamlessly.' },
      { q: 'Who owns the intellectual property and code?', a: 'You do. 100% of the repository, database schemas, and documentation are transferred to your company upon project milestone sign-off with zero licensing fees.' },
      { q: 'Do you provide ongoing feature development after launch?', a: 'Yes, we offer dedicated monthly sprint retainers or fixed-scope milestone upgrades for continuous feature releases and scaling support.' }
    ]
  },
  {
    slug: 'service-ghl-funnels.html',
    title: 'GoHighLevel (GHL) Funnels, Pipelines & Snapshots',
    eyebrow: 'CRM & LEAD ARCHITECTURE',
    heroBadge: 'CORE 03 • SALES PIPELINES',
    headline: 'High-Converting GoHighLevel Funnels & Automated Pipelines',
    description: 'Transform GoHighLevel into an automated sales and appointment booking powerhouse. From custom white-label snapshots to multi-stage pipelines and automated SMS/email follow-ups, we engineer setups that nurture leads in under 60 seconds and skyrocket show-up rates.',
    preset: 'ghl',
    metrics: [
      { num: '<60s', label: 'Speed-to-Lead Response' },
      { num: '3.2x', label: 'Average Booking Rate' },
      { num: '1-Click', label: 'Agency Snapshot Deploy' },
      { num: '100%', label: 'Calendar Synchronization' }
    ],
    svgType: 'ghl',
    features: [
      {
        icon: 'fa-solid fa-filter-circle-dollar',
        title: 'Multi-Stage Opportunity Pipelines',
        desc: 'Custom deal stages, automated win/loss tagging, revenue forecasting, and visual Kanban boards for sales teams.'
      },
      {
        icon: 'fa-solid fa-comments',
        title: 'Conversational SMS & Email Sequences',
        desc: 'Two-way conversational messaging, missed-call text-back, appointment reminders, and long-term re-engagement drip campaigns.'
      },
      {
        icon: 'fa-solid fa-calendar-check',
        title: 'Smart Calendar & Round-Robin Routing',
        desc: 'Automated sales rep routing based on availability or territory, time-zone detection, and two-way Google/Outlook sync.'
      },
      {
        icon: 'fa-solid fa-boxes-packing',
        title: 'Custom Snapshots & SaaS Mode Provisioning',
        desc: 'Deployable 1-click snapshots pre-configured with funnels, triggers, tags, custom fields, and email templates for agency scale.'
      }
    ],
    process: [
      { step: '01', title: 'Funnel Strategy & Audit', desc: 'Dissecting target buyer personas, offer architecture, and conversion qualification criteria.' },
      { step: '02', title: 'Pipeline & Workflow Build', desc: 'Configuring custom fields, triggers, SMS templates, and automated stage rules in GHL.' },
      { step: '03', title: 'Calendar & Webhook Wiring', desc: 'Hooking up booking forms, round-robin teams, and payment gateways with automated receipts.' },
      { step: '04', title: 'Live Testing & Staff Training', desc: 'Simulating full lead journeys and providing Loom tutorials for your sales reps.' }
    ],
    specs: [
      { name: 'CRM Platform', value: 'GoHighLevel (Agency Pro / SaaS Mode)' },
      { name: 'Telephony & SMS', value: 'LC Phone / Twilio Native Configuration' },
      { name: 'Email Deliverability', value: 'LC Email / Mailgun with DKIM, SPF & DMARC' },
      { name: 'Calendar Integration', value: 'Round-Robin, Class & Event Calendars' },
      { name: 'Snapshot Portability', value: '1-Click Deployable to Infinite Sub-Accounts' }
    ],
    faqs: [
      { q: 'Can you build a complete turnkey snapshot for my marketing agency?', a: 'Yes! We have designed specialized GHL snapshots for real estate, dental clinics, MedSpas, e-commerce brands, and B2B consultants that can be duplicated into any new sub-account in 30 seconds.' },
      { q: 'Will the automated SMS triggers comply with A2P 10DLC regulations?', a: 'Yes. We guide you through brand and campaign registration for A2P 10DLC compliance to ensure maximum SMS deliverability and prevent carrier filtering.' },
      { q: 'Can this connect to our existing WordPress or custom website?', a: 'Absolutely. We configure seamless 2-way webhooks and embed forms directly into your web pages with zero styling mismatch.' }
    ]
  },
  {
    slug: 'service-ai-chatbots.html',
    title: 'Autonomous AI Chatbots & Custom RAG Agents',
    eyebrow: 'ARTIFICIAL INTELLIGENCE',
    heroBadge: 'CORE 04 • 2026 AI AGENTS',
    headline: 'Custom RAG AI Chatbots That Answer, Qualify & Book 24/7',
    description: 'Replace scripted, frustrating chatbots with fine-tuned autonomous AI agents powered by OpenAI GPT-4o and Anthropic Claude 3.5. Trained exclusively on your knowledge base, documentation, and CRM data, our agents answer complex queries, overcome objections, and schedule calendar meetings autonomously.',
    preset: 'ai',
    metrics: [
      { num: '<850ms', label: 'Average AI Latency' },
      { num: '24/7', label: 'Autonomous Availability' },
      { num: '0%', label: 'Hallucination Policy' },
      { num: 'RAG', label: 'Vector Knowledge Base' }
    ],
    svgType: 'ai',
    features: [
      {
        icon: 'fa-solid fa-file-contract',
        title: 'Custom RAG Knowledge Retrieval',
        desc: 'Vector embeddings generated from your PDF manuals, website URLs, and internal docs, guaranteeing 100% factual, brand-aligned answers.'
      },
      {
        icon: 'fa-brands fa-whatsapp',
        title: 'Multi-Channel Deployment',
        desc: 'Embedded seamlessly across your website widgets, WhatsApp Business API, Facebook Messenger, and Instagram direct messages.'
      },
      {
        icon: 'fa-solid fa-calendar-plus',
        title: 'Autonomous Calendar Booking',
        desc: 'Intelligently checks sales availability via API and books qualified meetings into GoHighLevel or Calendly without human touch.'
      },
      {
        icon: 'fa-solid fa-headset',
        title: 'Smart Human Escalation Protocol',
        desc: 'Identifies high-value opportunities or complex complaints and routes the conversation instantly to a live agent with full transcript.'
      }
    ],
    process: [
      { step: '01', title: 'Knowledge Base Indexing', desc: 'Compiling, cleaning, and chunking your proprietary company documentation into vector embeddings.' },
      { step: '02', title: 'Prompt & Guardrail Tuning', desc: 'Crafting system prompts, tone directives, strict negative constraints, and tool-calling functions.' },
      { step: '03', title: 'API & Widget Integration', desc: 'Connecting the model to your CRM, calendar webhooks, and responsive frontend chat widget.' },
      { step: '04', title: 'Evaluation & Live Launch', desc: 'Running 100+ edge-case test queries to benchmark accuracy before production deployment.' }
    ],
    specs: [
      { name: 'Core Foundation Models', value: 'OpenAI GPT-4o / Anthropic Claude 3.5 Sonnet' },
      { name: 'Knowledge Architecture', value: 'Retrieval-Augmented Generation (RAG) + Pinecone / pgvector' },
      { name: 'Function Calling', value: 'Calendar API, CRM Contact Lookup & Webhook Dispatch' },
      { name: 'Security & Privacy', value: 'Zero Data Retention (ZDR) & Enterprise Encryption' },
      { name: 'Supported Channels', value: 'Web Widget, WhatsApp, Messenger, SMS' }
    ],
    faqs: [
      { q: 'How do you prevent the AI bot from making up incorrect pricing or terms?', a: 'We employ strict retrieval guardrails and temperature constraints. If a user asks a question not contained in your verified knowledge base, the bot is instructed to politely deflect and offer human escalation.' },
      { q: 'Can the bot book appointments directly into my sales calendar?', a: 'Yes! Using function calling, the agent asks for the prospect’s preferred time, queries your live calendar API for availability, confirms the slot, and creates the appointment in GHL or Google Calendar.' },
      { q: 'How much does it cost to run the AI on a monthly basis?', a: 'Running state-of-the-art models like GPT-4o mini or Claude 3.5 Haiku is extremely cost-effective — typically costing only a few dollars for thousands of conversational messages.' }
    ]
  },
  {
    slug: 'service-ghl-wordpress-sync.html',
    title: '2-Way Real-Time GoHighLevel & WordPress Synchronization',
    eyebrow: 'DATA INTEGRATION & WEBHOOKS',
    heroBadge: 'CORE 05 • ZERO-LAG SYNAPSE',
    headline: 'Continuous Real-Time Data Synchronization Between GHL & WordPress',
    description: 'Eliminate disjointed customer data and tedious manual entry. We engineer robust, bidirectional webhook pipelines and middleware that synchronize WordPress user accounts, WooCommerce order statuses, and GoHighLevel CRM contacts in under 1.5 seconds with zero data loss.',
    preset: 'ai',
    metrics: [
      { num: '<1.2s', label: 'Data Relay Latency' },
      { num: '100%', label: 'Bidirectional Integrity' },
      { num: '0', label: 'Manual Copy-Pasting' },
      { num: 'HMAC', label: 'Encrypted Security' }
    ],
    svgType: 'sync',
    features: [
      {
        icon: 'fa-solid fa-arrows-rotate',
        title: 'Instant Form-to-CRM Relays',
        desc: 'Submissions on Elementor, Gravity Forms, or custom React forms immediately update contacts, custom fields, and tags in GHL.'
      },
      {
        icon: 'fa-solid fa-id-card-clip',
        title: 'Membership & Course Access Sync',
        desc: 'GHL pipeline stage changes automatically grant, tier, or revoke WordPress membership and course permissions instantly.'
      },
      {
        icon: 'fa-solid fa-bag-shopping',
        title: 'WooCommerce Purchase Webhooks',
        desc: 'Purchases immediately tag customer records in GHL, trigger post-purchase nurture sequences, and update lifetime customer value.'
      },
      {
        icon: 'fa-solid fa-shield-virus',
        title: 'Fail-Safe Retry Queues & Audit Logs',
        desc: 'Exponential backoff retry queues guarantee that even during third-party API outages, no lead or transaction is ever dropped.'
      }
    ],
    process: [
      { step: '01', title: 'Data Schema Mapping', desc: 'Matching custom fields, tags, and trigger conditions between WordPress and GoHighLevel.' },
      { step: '02', title: 'Webhook & Middleware Build', desc: 'Developing custom REST API webhooks, n8n orchestrations, and HMAC security tokens.' },
      { step: '03', title: 'Bidirectional Loop Testing', desc: 'Verifying that data updates in both directions without recursive infinite loops.' },
      { step: '04', title: 'Queue Hardening & Go-Live', desc: 'Setting up error logging, automated failure notifications, and live production deployment.' }
    ],
    specs: [
      { name: 'Sync Direction', value: '2-Way Bidirectional Real-Time' },
      { name: 'Middleware Architecture', value: 'Custom REST Webhooks + n8n / Make Engine' },
      { name: 'Authentication', value: 'HMAC SHA-256 Signatures & GHL API v2 OAuth' },
      { name: 'Fail-Safe Guarantee', value: 'Automated 5-Stage Retry Queue' },
      { name: 'Latency SLA', value: '<1.5 Seconds Form-to-Contact Sync' }
    ],
    faqs: [
      { q: 'What happens if GoHighLevel API is temporarily down?', a: 'Our webhook middleware holds pending events in a secure Redis retry queue. Once GHL connectivity resumes, all queued contacts and orders are processed sequentially with zero loss of data.' },
      { q: 'Can this synchronize WooCommerce subscription renewals?', a: 'Yes! Renewal payments, cancellations, and failed payments on WooCommerce are immediately synced to GHL to pause or renew services and trigger automated retention emails.' },
      { q: 'Will this slow down our WordPress site?', a: 'Not at all. All webhook dispatches occur asynchronously via background queue workers, meaning your visitors experience zero delay when submitting forms.' }
    ]
  },
  {
    slug: 'service-workflow-automation.html',
    title: 'n8n, Make & Zapier Multi-Step AI Workflows',
    eyebrow: 'OPERATIONS AUTOMATION',
    heroBadge: 'CORE 06 • EVENT-DRIVEN AUTOMATION',
    headline: 'Eliminate Repetitive Tasks with Autonomous Multi-Step Workflows',
    description: 'Supercharge your business operations by connecting web platforms, internal databases, CRMs, and AI models. Using n8n, Make.com, and Zapier, we engineer event-driven automations that save hundreds of labor hours each month and execute with flawless precision.',
    preset: 'ai',
    metrics: [
      { num: '94%', label: 'Labor Tasks Automated' },
      { num: '100+', label: 'Connected Apps & APIs' },
      { num: 'Zero', label: 'Human Entry Errors' },
      { num: '24/7', label: 'Continuous Execution' }
    ],
    svgType: 'automation',
    features: [
      {
        icon: 'fa-solid fa-diagram-project',
        title: 'Multi-Step Conditional Logic',
        desc: 'Advanced data routing, multi-branching logic, data transformations, and fallback rules that adapt to complex business needs.'
      },
      {
        icon: 'fa-solid fa-wand-magic-sparkles',
        title: 'AI-Powered Document Extraction',
        desc: 'Automated parsing of invoices, customer intake PDFs, and emails using LLMs to extract structured JSON data into your database.'
      },
      {
        icon: 'fa-solid fa-server',
        title: 'Self-Hosted n8n Infrastructure',
        desc: 'Private, secure n8n server deployments that eliminate expensive per-task SaaS fees while giving you unlimited execution volume.'
      },
      {
        icon: 'fa-solid fa-bell',
        title: 'Real-Time Error Alerting',
        desc: 'Instant Slack, Telegram, or email notifications whenever an external API fails, with automatic self-healing workflows.'
      }
    ],
    process: [
      { step: '01', title: 'Operational Bottleneck Audit', desc: 'Analyzing manual processes, repetitive copy-pasting, and disjointed team workflows.' },
      { step: '02', title: 'Workflow Architecture Map', desc: 'Designing node diagrams, API credentials, data payload structures, and error fallbacks.' },
      { step: '03', title: 'Node Construction & Stress Test', desc: 'Building logic branches, data sanitizers, and testing with real-world edge cases.' },
      { step: '04', title: 'Production Schedule & Monitoring', desc: 'Deploying live triggers, setting up health checks, and providing admin documentation.' }
    ],
    specs: [
      { name: 'Automation Engines', value: 'n8n (Self-Hosted/Cloud), Make.com, Zapier' },
      { name: 'AI Integration', value: 'OpenAI GPT-4o, Claude 3.5, OCR Vision' },
      { name: 'Security Standard', value: 'End-to-End Encrypted Key Storage' },
      { name: 'Data Formats', value: 'JSON, XML, CSV, Webhook Payloads' },
      { name: 'Uptime SLA', value: '99.9% Continuous Execution' }
    ],
    faqs: [
      { q: 'Why do you recommend n8n over Zapier?', a: 'While Zapier is great for simple tasks, n8n can be self-hosted on your own private cloud. This gives you unlimited workflow executions for a flat server cost, saving thousands of dollars annually on Zapier task overages.' },
      { q: 'Can workflows handle confidential client data securely?', a: 'Yes. With self-hosted n8n, your customer data never touches third-party commercial middleware servers. All API tokens and customer data reside strictly on your own encrypted VPS.' },
      { q: 'What happens if a third-party API changes or fails?', a: 'We build structured error-catch nodes that send instant alerts to your private Slack channel and park the payload in a retry buffer until the destination API recovers.' }
    ]
  },
  {
    slug: 'service-woocommerce-stripe.html',
    title: 'WooCommerce & Stripe High-Converting E-Commerce',
    eyebrow: 'E-COMMERCE & CONVERSIONS',
    heroBadge: 'CORE 07 • CHECKOUT VELOCITY',
    headline: 'High-Converting E-Commerce Architectures Built for Revenue',
    description: 'Transform your online store into a frictionless revenue engine. We engineer custom WooCommerce platforms optimized for conversion velocity — featuring 1-click checkout funnels, instant Stripe payment processing, mobile wallet integrations, and sub-second catalog browsing.',
    preset: 'wordpress',
    metrics: [
      { num: '-28%', label: 'Cart Abandonment Drop' },
      { num: '<1.1s', label: 'Product Page Render' },
      { num: 'Apple/Google', label: '1-Click Pay Ready' },
      { num: 'PCI-DSS', label: 'Compliant Security' }
    ],
    svgType: 'ecommerce',
    features: [
      {
        icon: 'fa-solid fa-cart-shopping',
        title: 'Optimized 1-Page Checkout Funnels',
        desc: 'Eliminating multi-step friction with clean, distractions-free checkout pages, floating order summaries, and coupon auto-applies.'
      },
      {
        icon: 'fa-brands fa-stripe',
        title: 'Stripe Elements & Global Gateways',
        desc: 'Native Apple Pay, Google Pay, Klarna/Afterpay BNPL, and multi-currency localized payment routing.'
      },
      {
        icon: 'fa-solid fa-arrow-trend-up',
        title: 'Pre- & Post-Purchase Upsells',
        desc: 'One-click bump offers on checkout and dynamic 1-click post-purchase upsells that boost Average Order Value (AOV) by 18-35%.'
      },
      {
        icon: 'fa-solid fa-boxes-stacked',
        title: 'Custom Product Configurator Logic',
        desc: 'Dynamic variation selectors, bundle builders, subscription billing intervals, and real-time inventory synchronization.'
      }
    ],
    process: [
      { step: '01', title: 'Buyer Journey & AOV Audit', desc: 'Analyzing cart drop-off points, mobile checkout usability, and high-value upsell opportunities.' },
      { step: '02', title: 'Frictionless Checkout Coding', desc: 'Implementing 1-step checkout, Stripe Elements, address autocompletion, and mobile wallets.' },
      { step: '03', title: 'Catalog Speed & Database Tuning', desc: 'Optimizing product database queries, image delivery CDN, and object caching.' },
      { step: '04', title: 'Live Payment Testing & Launch', desc: 'Conducting live test transactions, refund verification, and fulfillment webhook checks.' }
    ],
    specs: [
      { name: 'E-Commerce Platform', value: 'WooCommerce + Custom PHP Architecture' },
      { name: 'Payment Processing', value: 'Stripe, PayPal Commerce, Apple Pay, Google Pay' },
      { name: 'Checkout Architecture', value: 'Distraction-Free 1-Step Checkout Engine' },
      { name: 'Speed Optimization', value: 'Redis Object Cache + Sub-Second Catalog TTFB' },
      { name: 'Compliance', value: 'PCI-DSS Level 1 Compliant Handoff' }
    ],
    faqs: [
      { q: 'Can WooCommerce handle high order spikes during sales campaigns?', a: 'Yes! With our custom Redis caching, separated database sessions, and optimized checkout endpoints, our WooCommerce builds routinely handle hundreds of simultaneous flash-sale checkouts with zero downtime.' },
      { q: 'Can you integrate automated abandoned cart recovery?', a: 'Yes. We connect checkout funnels to GoHighLevel or Klaviyo to trigger personalized SMS and email recovery sequences within 15 minutes of cart abandonment.' },
      { q: 'Do you charge a percentage of our transactions?', a: 'Never. You keep 100% of your revenue. You only pay standard gateway processing fees directly to Stripe/PayPal with zero agency transaction cuts.' }
    ]
  },
  {
    slug: 'service-ai-voice-receptionist.html',
    title: 'Autonomous AI Voice Receptionists & Call Booking',
    eyebrow: 'VOICE ARTIFICIAL INTELLIGENCE',
    heroBadge: 'CORE 08 • SUB-SECOND VOICE AI',
    headline: 'Autonomous 24/7 Voice AI Agents That Call, Qualify & Book',
    description: 'Never miss another high-value inbound call. Our conversational AI voice receptionists feature human-grade natural speech and sub-800ms latency. They answer inbound calls 24/7, dial new web form leads within 30 seconds, qualify prospects, and book calendar appointments directly into your CRM.',
    preset: 'ai',
    metrics: [
      { num: '<800ms', label: 'Voice Response Latency' },
      { num: '<30s', label: 'Outbound Speed-to-Lead' },
      { num: '24/7/365', label: 'Continuous Phone Line' },
      { num: 'Zero', label: 'Hold Time for Callers' }
    ],
    svgType: 'voice',
    features: [
      {
        icon: 'fa-solid fa-phone-volume',
        title: 'Sub-800ms Natural Conversations',
        desc: 'Ultra-low latency audio processing powered by ElevenLabs and advanced voice LLMs, producing lifelike human inflection and zero awkward pauses.'
      },
      {
        icon: 'fa-solid fa-clock',
        title: '24/7 Inbound Reception & FAQs',
        desc: 'Answers questions about hours, services, and pricing anytime day or night, ensuring zero lost calls after business hours.'
      },
      {
        icon: 'fa-solid fa-bolt',
        title: 'Instant 30s Outbound Speed-to-Lead',
        desc: 'Dials prospective buyers within 30 seconds of web form submission, catching leads while their buying intent is at its peak.'
      },
      {
        icon: 'fa-solid fa-calendar-check',
        title: 'Direct CRM & Calendar Booking',
        desc: 'Checks your team’s live schedule during the conversation, confirms the appointment, and logs audio recordings and transcripts into GHL.'
      }
    ],
    process: [
      { step: '01', title: 'Persona & Script Design', desc: 'Drafting conversational scripts, objection handlers, pronunciation guides, and brand tone rules.' },
      { step: '02', title: 'Telephony & Webhook Wiring', desc: 'Provisioning local phone numbers, configuring Twilio/SIP trunks, and connecting CRM webhooks.' },
      { step: '03', title: 'Voice Latency & QA Tuning', desc: 'Benchmarking speech-to-text accuracy, interruptibility handling, and audio stream speeds.' },
      { step: '04', title: 'Live Test Calls & Launch', desc: 'Conducting live trial calls with your team, refining prompts, and switching on 24/7 live routing.' }
    ],
    specs: [
      { name: 'Voice Synthesis Engine', value: 'ElevenLabs / Deepgram Nova-2 Ultra-Low Latency' },
      { name: 'Conversation Core', value: 'OpenAI GPT-4o Realtime / Claude Voice Stream' },
      { name: 'Telephony Infrastructure', value: 'Twilio / SIP Trunking with Local Numbers' },
      { name: 'CRM Integration', value: 'GoHighLevel, HubSpot, Salesforce' },
      { name: 'Recording & Compliance', value: 'Automated Call Recording, Transcripts & Consent' }
    ],
    faqs: [
      { q: 'Can callers tell that they are talking to an AI voice bot?', a: 'With sub-800ms response times, natural breathing pauses, and studio-grade voice models, the experience feels remarkably like speaking with a polite, professional receptionist.' },
      { q: 'Can the caller interrupt the AI if they need to change the subject?', a: 'Yes! Our voice agents feature full duplex conversational stream handling. If the user starts speaking while the bot is talking, the bot immediately stops and listens naturally.' },
      { q: 'Can the bot transfer the caller to a live human if requested?', a: 'Yes. If a caller requests a human or triggers an escalation rule, the AI immediately transfers the call to your mobile phone or office desk with zero dropped connection.' }
    ]
  },
  {
    slug: 'service-api-engineering.html',
    title: 'Custom REST & GraphQL 3rd-Party API Engineering',
    eyebrow: 'API & CLOUD INFRASTRUCTURE',
    heroBadge: 'CORE 09 • SCALABLE APIS',
    headline: 'Robust, Documented REST & GraphQL APIs Built for Scale',
    description: 'Connect disparate systems into a unified digital infrastructure. We architect high-performance, secure RESTful and GraphQL APIs connecting your web applications with third-party SaaS tools, legacy databases, payment processors, and mobile applications with interactive Swagger documentation.',
    preset: 'fullstack',
    metrics: [
      { num: '<100ms', label: 'Average Endpoint Latency' },
      { num: 'OpenAPI v3', label: 'Swagger Documentation' },
      { num: 'OAuth2 / JWT', label: 'Secure Token Auth' },
      { num: '100%', label: 'Type-Safe Contracts' }
    ],
    svgType: 'api',
    features: [
      {
        icon: 'fa-solid fa-plug-circle-bolt',
        title: 'RESTful & GraphQL Endpoint Architecture',
        desc: 'Clean, semantic API endpoints designed according to industry standards with structured JSON payloads and comprehensive error codes.'
      },
      {
        icon: 'fa-solid fa-shield-halved',
        title: 'OAuth2, JWT & Token Authentication',
        desc: 'Secure authentication protocols, scope-based permissions, API rate limiting, and protection against replay attacks.'
      },
      {
        icon: 'fa-solid fa-file-code',
        title: 'Interactive Swagger & Postman Docs',
        desc: 'Complete OpenAPI v3 specifications and importable Postman collections allowing client developers to integrate in minutes.'
      },
      {
        icon: 'fa-solid fa-server',
        title: 'Redis Caching & High-Concurrency Queues',
        desc: 'Intelligent response caching for read-heavy endpoints and background workers for asynchronous heavy data operations.'
      }
    ],
    process: [
      { step: '01', title: 'Data Contracts & Schema Design', desc: 'Defining endpoint routes, payload contracts, HTTP methods, and status response standards.' },
      { step: '02', title: 'Controller & Service Implementation', desc: 'Coding business logic, validation layers, database transactions, and security checks.' },
      { step: '03', title: 'Security & Rate Limiting Audit', desc: 'Configuring CORS, throttle limits, token expiration, and SQL injection sanitization.' },
      { step: '04', title: 'Load Testing & Documentation', desc: 'Running Apache Bench / k6 stress tests and generating interactive Swagger docs.' }
    ],
    specs: [
      { name: 'API Paradigms', value: 'RESTful JSON & GraphQL Specifications' },
      { name: 'Documentation', value: 'Interactive Swagger / OpenAPI v3 & Postman' },
      { name: 'Authentication', value: 'OAuth 2.0, JWT Tokens, Bearer API Keys' },
      { name: 'Rate Limiting', value: 'Redis Token Bucket & IP Throttling' },
      { name: 'Test Coverage', value: 'PHPUnit / Pest Automated Endpoint Tests' }
    ],
    faqs: [
      { q: 'Can you integrate legacy ERP or custom inventory software?', a: 'Yes! We specialize in bridging modern web frontends with legacy SOAP, XML, or custom SQL databases using secure middleware API adapters.' },
      { q: 'Do you provide SDKs or documentation for our client developers?', a: 'Yes. We provide complete interactive Swagger documentation and sample curl / JavaScript / Python code snippets so any developer can integrate smoothly.' },
      { q: 'How do you prevent API abuse and DDoS attacks?', a: 'We configure Redis-backed token bucket rate limiters, strict CORS policies, and Cloudflare WAF rules to ensure authorized access only.' }
    ]
  },
  {
    slug: 'service-speed-seo.html',
    title: 'Core Web Vitals 95+ Speed & Technical SEO Hardening',
    eyebrow: 'PERFORMANCE & SEARCH SEO',
    heroBadge: 'CORE 10 • GOOGLE LIGHTHOUSE 95+',
    headline: 'Guaranteed 95+ PageSpeed & Comprehensive Technical SEO',
    description: 'Speed is revenue. Every 100ms delay costs your business conversions and search rankings. We conduct deep code-level performance surgeries — removing bloat, inlining critical CSS, tuning databases, and configuring edge CDNs to guarantee 95+ scores on Google PageSpeed Insights.',
    preset: 'wordpress',
    metrics: [
      { num: '95–100', label: 'Mobile PageSpeed Score' },
      { num: '<0.6s', label: 'Largest Contentful Paint' },
      { num: '0.00', label: 'Cumulative Layout Shift' },
      { num: '100%', label: 'Green Core Web Vitals' }
    ],
    svgType: 'speed',
    features: [
      {
        icon: 'fa-solid fa-gauge-high',
        title: 'Critical CSS & JavaScript Deferral',
        desc: 'Extracting above-the-fold critical CSS and deferring non-essential scripts so the visible page renders in under 600 milliseconds.'
      },
      {
        icon: 'fa-solid fa-image',
        title: 'Next-Gen WebP/AVIF Image Pipelines',
        desc: 'Automated image compression, responsive srcset attributes, and native lazy-loading cutting page weight by up to 80%.'
      },
      {
        icon: 'fa-solid fa-database',
        title: 'Database Query & Redis Object Tuning',
        desc: 'Cleaning bloated autoload options tables, indexing slow queries, and setting up persistent Redis caching.'
      },
      {
        icon: 'fa-solid fa-magnifying-glass-chart',
        title: 'Schema.org & Technical SEO Hardening',
        desc: 'Semantic JSON-LD rich snippets, canonical tag auditing, XML sitemap validation, and Google Search Console error fixes.'
      }
    ],
    process: [
      { step: '01', title: 'Deep Waterfall Audit', desc: 'Running Google Lighthouse, GTmetrix, and WebPageTest to isolate render-blocking bottlenecks.' },
      { step: '02', title: 'Code & Asset Surgery', desc: 'Minifying assets, removing unused CSS, deferring heavy tracking tags, and optimizing fonts.' },
      { step: '03', title: 'Server Caching & CDN Setup', desc: 'Deploying Redis object caching, Brotli compression, and Cloudflare edge rules.' },
      { step: '04', title: 'Verification & Performance Warranty', desc: 'Testing real-world mobile devices and issuing our 30-day speed maintenance guarantee.' }
    ],
    specs: [
      { name: 'Target Mobile Score', value: '95 to 100 on Google PageSpeed' },
      { name: 'LCP (Largest Contentful Paint)', value: '< 1.2 Seconds on 4G Mobile' },
      { name: 'CLS (Cumulative Layout Shift)', value: '< 0.05 (Zero visual layout jump)' },
      { name: 'Edge CDN', value: 'Cloudflare / QUIC.cloud HTTP/3 Support' },
      { name: 'Warranty', value: 'Score guaranteed for 30 days post-launch' }
    ],
    faqs: [
      { q: 'Will this optimization break our visual layout or tracking scripts?', a: 'Never. We perform all optimizations on a staging replica first, testing each script and visual interaction to ensure 100% design fidelity and active tracking before pushing live.' },
      { q: 'What happens if our score drops after our team publishes new blog posts?', a: 'We install automated image optimization pipelines that automatically compress new media uploads, and provide a clear author checklist to maintain top speeds.' },
      { q: 'Do you offer a money-back guarantee on speed improvements?', a: 'Yes! If we do not measurably improve your Core Web Vitals and load times according to our agreed proposal, you do not pay for the sprint.' }
    ]
  },
  {
    slug: 'service-ui-ux-figma.html',
    title: 'UI/UX Figma Design Systems & Conversion Prototyping',
    eyebrow: 'VISUAL ARCHITECTURE',
    heroBadge: 'CORE 11 • CONVERSION-FIRST DESIGN',
    headline: 'Conversion-Focused UI/UX & Production-Ready Figma Systems',
    description: 'We design user interfaces that do more than look pretty — they drive measurable commercial conversions. We craft complete atomic design systems, UX wireframes, and interactive clickable prototypes in Figma mapped 1:1 to Tailwind CSS tokens for frictionless frontend implementation.',
    preset: 'wordpress',
    metrics: [
      { num: '100%', label: 'Tailwind CSS Token Mapping' },
      { num: 'WCAG 2.1', label: 'Accessibility Standard' },
      { num: 'Auto-Layout', label: 'Fluid Responsive Artboards' },
      { num: 'Zero Drift', label: 'Design-to-Code Handoff' }
    ],
    svgType: 'design',
    features: [
      {
        icon: 'fa-solid fa-shapes',
        title: 'Atomic Component Libraries',
        desc: 'Modular buttons, inputs, pills, cards, and modal dialogs organized into scalable variant sets with auto-layout.'
      },
      {
        icon: 'fa-solid fa-play',
        title: 'Interactive High-Fidelity Prototypes',
        desc: 'Clickable prototypes with realistic micro-interactions, modal behaviors, and responsive navigation for client testing.'
      },
      {
        icon: 'fa-solid fa-universal-access',
        title: 'WCAG 2.1 AA Accessibility Standards',
        desc: 'Verified color contrast ratios, accessible touch targets, and legible typography scales that welcome all users.'
      },
      {
        icon: 'fa-solid fa-laptop-code',
        title: '1:1 Tailwind CSS Dev Handoff',
        desc: 'All spacing units, paddings, hex colors, and font styles map directly to standard Tailwind classes, cutting dev time in half.'
      }
    ],
    process: [
      { step: '01', title: 'Competitor & UX Research', desc: 'Analyzing user journeys, high-converting competitor funnels, and brand positioning.' },
      { step: '02', title: 'Wireframing & Information Flow', desc: 'Building low-fidelity wireframes to validate hierarchy, CTAs, and content layout.' },
      { step: '03', title: 'Design System & High-Fi UI', desc: 'Crafting token palettes, typography, components, and responsive mobile/desktop screens.' },
      { step: '04', title: 'Interactive Prototype & Handoff', desc: 'Connecting interactions, running user walkthroughs, and exporting organized dev specs.' }
    ],
    specs: [
      { name: 'Design Tool', value: 'Figma (Auto-Layout 5.0 & Variables)' },
      { name: 'Design System Paradigm', value: 'Atomic Design (Tokens, Atoms, Molecules)' },
      { name: 'CSS Framework Match', value: '1:1 Tailwind CSS Utility Tokens' },
      { name: 'Screen Breakpoints', value: 'Mobile (375px), Tablet (768px), Desktop (1440px)' },
      { name: 'Handoff Assets', value: 'Complete Figma file ownership with dev inspect mode' }
    ],
    faqs: [
      { q: 'Do you provide the complete Figma source file upon completion?', a: 'Yes! You receive 100% ownership of the Figma project file, including all vector icons, component variants, style libraries, and prototype links.' },
      { q: 'Can your team also code the design once approved?', a: 'Yes! That is our core advantage. Because our designers understand code, we build designs that transition into pixel-perfect Tailwind HTML or React code with zero drift.' },
      { q: 'How many rounds of revisions are included?', a: 'We include two comprehensive revision cycles at the wireframe stage and two revision cycles at the high-fidelity UI stage to ensure complete visual satisfaction.' }
    ]
  },
  {
    slug: 'service-white-label-agency.html',
    title: 'White-Label Agency & Dedicated Enterprise Engineering',
    eyebrow: 'AGENCY PARTNERSHIPS',
    heroBadge: 'CORE 12 • WHITE-LABEL FULFILLMENT',
    headline: 'Your Invisible Technical Powerhouse for Agency Scale',
    description: 'Scale your marketing or creative agency without the overhead of hiring in-house developers. We serve as the dedicated, white-label engineering arm behind high-growth agencies worldwide — committing to your GitHub, communicating in your Slack, and delivering under strict NDAs.',
    preset: 'fullstack',
    metrics: [
      { num: '40%+', label: 'Of Our Builds Are White-Label' },
      { num: 'Strict NDA', label: 'Guaranteed Client Privacy' },
      { num: 'Senior Only', label: 'Zero Junior Outsourcers' },
      { num: '<24h', label: 'Ticket Turnaround Time' }
    ],
    svgType: 'whitelabel',
    features: [
      {
        icon: 'fa-solid fa-user-shield',
        title: '100% Invisible White-Label Delivery',
        desc: 'We operate under your agency brand. All Git commits, Loom videos, and client deliverables carry your logo and domain.'
      },
      {
        icon: 'fa-solid fa-code-branch',
        title: 'Seamless Workflow Integration',
        desc: 'We join your Slack, ClickUp, or Asana workspaces, participate in client discovery calls as your "Technical Lead," and manage sprints smoothly.'
      },
      {
        icon: 'fa-solid fa-award',
        title: 'Senior Engineering Quality',
        desc: 'Every project is coded by seasoned developers who master WordPress, Laravel, GoHighLevel, and AI. No fragile outsourced spaghetti code.'
      },
      {
        icon: 'fa-solid fa-handshake-angle',
        title: 'Predictable Fixed Margins',
        desc: 'Transparent wholesale agency pricing that lets you mark up deliverables 50–100% while providing your clients superior quality.'
      }
    ],
    process: [
      { step: '01', title: 'Mutual NDA & SLA Agreement', desc: 'Signing confidentiality terms, establishing communication channels, and setting rate cards.' },
      { step: '02', title: 'Project Scoping & Fixed Quote', desc: 'Reviewing client briefs, wireframes, and providing guaranteed fixed-price delivery estimates.' },
      { step: '03', title: 'Sprint Execution & Updates', desc: 'Building features with daily commit logs, staging links, and proactive progress updates.' },
      { step: '04', title: 'White-Label Delivery & Warranty', desc: 'Presenting deliverables with unbranded or branded Loom videos and 30-day bug warranty.' }
    ],
    specs: [
      { name: 'Engagement Models', value: 'Fixed-Price Project Sprints or Dedicated Monthly Retainers' },
      { name: 'Confidentiality', value: 'Strict Bilateral Non-Disclosure Agreement (NDA)' },
      { name: 'Communication', value: 'Private Slack Channel / ClickUp / Asana / Loom' },
      { name: 'Source Control', value: 'Direct Commits to Your Agency GitHub / GitLab' },
      { name: 'Post-Launch Warranty', value: '30 Days Complete Technical Coverage on Every Build' }
    ],
    faqs: [
      { q: 'Will our clients ever know that Yankee Tech built the project?', a: 'Never. We sign strict NDAs before touching any project. All code comments, repository names, and Loom videos reflect your agency branding.' },
      { q: 'Can an engineer from your team join client discovery calls?', a: 'Yes! Upon request, a senior engineer can attend calls as your agency’s "Technical Director" or "Lead Architect" to handle technical feasibility and estimation.' },
      { q: 'What is the typical markup agencies apply to your services?', a: 'Most partner agencies apply a 60% to 120% markup on our wholesale development quotes, creating high-margin recurring and project revenue with zero internal headcount stress.' }
    ]
  }
];

function generateSvg(type) {
  switch (type) {
    case 'wordpress':
      return `
        <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto drop-shadow-md">
          <rect x="20" y="20" width="360" height="200" rx="20" fill="#13072b" stroke="#843dff" stroke-width="1.5" />
          <path d="M 50 160 A 70 70 0 0 1 190 160" stroke="#31145f" stroke-width="14" fill="none" stroke-linecap="round" />
          <path d="M 50 160 A 70 70 0 0 1 185 148" stroke="#10b981" stroke-width="14" fill="none" stroke-linecap="round" stroke-dasharray="220" stroke-dashoffset="15" />
          <text x="120" y="142" text-anchor="middle" fill="#ffffff" font-size="24" font-family="'Plus Jakarta Sans', sans-serif" font-weight="900">99</text>
          <text x="120" y="156" text-anchor="middle" fill="#34d399" font-size="9" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700">MOBILE SPEED</text>
          
          <rect x="230" y="50" width="130" height="42" rx="10" fill="#1e0a40" stroke="#843dff" stroke-width="1" />
          <text x="245" y="68" fill="#ffffff" font-size="10" font-weight="700">Tailwind Engine</text>
          <text x="245" y="81" fill="#a78bfa" font-size="8" font-family="monospace">Zero CSS Bloat</text>

          <rect x="230" y="105" width="130" height="42" rx="10" fill="#1e0a40" stroke="#10b981" stroke-width="1" />
          <text x="245" y="123" fill="#ffffff" font-size="10" font-weight="700">Redis Object Cache</text>
          <text x="245" y="136" fill="#6ee7b7" font-size="8" font-family="monospace">&lt;0.4s TTFB</text>

          <rect x="230" y="160" width="130" height="42" rx="10" fill="#1e0a40" stroke="#38bdf8" stroke-width="1" />
          <text x="245" y="178" fill="#ffffff" font-size="10" font-weight="700">WooCommerce Core</text>
          <text x="245" y="191" fill="#7dd3fc" font-size="8" font-family="monospace">1-Click Checkout</text>
        </svg>
      `;
    case 'fullstack':
      return `
        <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto drop-shadow-md">
          <rect x="20" y="20" width="360" height="200" rx="20" fill="#13072b" stroke="#843dff" stroke-width="1.5" />
          <g transform="translate(45, 50)">
            <rect width="130" height="50" rx="12" fill="#1e0a40" stroke="#38bdf8" stroke-width="1.5" />
            <text x="65" y="28" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="700">React / Next.js</text>
            <text x="65" y="41" text-anchor="middle" fill="#7dd3fc" font-size="8" font-family="monospace">Client UI &amp; SSR</text>
          </g>
          <path d="M 175 75 H 225" stroke="#843dff" stroke-width="2" stroke-dasharray="3 3" />
          <g transform="translate(225, 50)">
            <rect width="130" height="50" rx="12" fill="#1e0a40" stroke="#f43f5e" stroke-width="1.5" />
            <text x="65" y="28" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="700">Laravel 11 API</text>
            <text x="65" y="41" text-anchor="middle" fill="#fda4af" font-size="8" font-family="monospace">Auth, Queues &amp; RBAC</text>
          </g>
          <path d="M 290 100 V 135" stroke="#10b981" stroke-width="2" />
          <g transform="translate(225, 135)">
            <rect width="130" height="50" rx="12" fill="#1e0a40" stroke="#10b981" stroke-width="1.5" />
            <text x="65" y="28" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="700">PostgreSQL DB</text>
            <text x="65" y="41" text-anchor="middle" fill="#6ee7b7" font-size="8" font-family="monospace">Multi-Tenant Store</text>
          </g>
          <g transform="translate(45, 135)">
            <rect width="130" height="50" rx="12" fill="#1e0a40" stroke="#eab308" stroke-width="1.5" />
            <text x="65" y="28" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="700">Redis Cache</text>
            <text x="65" y="41" text-anchor="middle" fill="#fde047" font-size="8" font-family="monospace">&lt;15ms Latency</text>
          </g>
          <path d="M 175 160 H 225" stroke="#eab308" stroke-width="2" stroke-dasharray="3 3" />
        </svg>
      `;
    case 'ghl':
      return `
        <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto drop-shadow-md">
          <rect x="20" y="20" width="360" height="200" rx="20" fill="#13072b" stroke="#843dff" stroke-width="1.5" />
          <!-- Funnel Stages -->
          <polygon points="50,45 350,45 310,85 90,85" fill="#2a0f55" stroke="#843dff" stroke-width="1" />
          <text x="200" y="68" text-anchor="middle" fill="#ffffff" font-size="10" font-weight="700">1. Web Form / Ad Lead Ingestion (&lt;60s)</text>

          <polygon points="90,92 310,92 275,130 125,130" fill="#230d47" stroke="#38bdf8" stroke-width="1" />
          <text x="200" y="114" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="700">2. Automated SMS + Email Nurture</text>

          <polygon points="125,137 275,137 240,175 160,175" fill="#1c0b38" stroke="#f59e0b" stroke-width="1" />
          <text x="200" y="159" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="700">3. Calendar Booking</text>

          <rect x="160" y="182" width="80" height="28" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="1.5" />
          <text x="200" y="200" text-anchor="middle" fill="#6ee7b7" font-size="9" font-weight="800">4. REVENUE WON</text>
        </svg>
      `;
    case 'ai':
      return `
        <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto drop-shadow-md">
          <rect x="20" y="20" width="360" height="200" rx="20" fill="#13072b" stroke="#843dff" stroke-width="1.5" />
          <circle cx="200" cy="110" r="45" fill="#2d0c5a" stroke="#d946ef" stroke-width="2" />
          <text x="200" y="106" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="800">RAG BRAIN</text>
          <text x="200" y="120" text-anchor="middle" fill="#f0abfc" font-size="8" font-family="monospace">GPT-4o &amp; Claude</text>

          <!-- Surrounding Node bubbles -->
          <g transform="translate(45, 50)">
            <rect width="90" height="35" rx="8" fill="#1c0a3a" stroke="#38bdf8" stroke-width="1" />
            <text x="45" y="22" text-anchor="middle" fill="#7dd3fc" font-size="9" font-weight="700">PDF / URLs</text>
          </g>
          <path d="M 135 68 L 165 90" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="2 2" />

          <g transform="translate(45, 140)">
            <rect width="90" height="35" rx="8" fill="#1c0a3a" stroke="#10b981" stroke-width="1" />
            <text x="45" y="22" text-anchor="middle" fill="#6ee7b7" font-size="9" font-weight="700">WhatsApp</text>
          </g>
          <path d="M 135 150 L 165 130" stroke="#10b981" stroke-width="1.5" stroke-dasharray="2 2" />

          <g transform="translate(265, 50)">
            <rect width="90" height="35" rx="8" fill="#1c0a3a" stroke="#f59e0b" stroke-width="1" />
            <text x="45" y="22" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="700">GHL Calendar</text>
          </g>
          <path d="M 265 68 L 235 90" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="2 2" />

          <g transform="translate(265, 140)">
            <rect width="90" height="35" rx="8" fill="#1c0a3a" stroke="#a855f7" stroke-width="1" />
            <text x="45" y="22" text-anchor="middle" fill="#d8b4fe" font-size="9" font-weight="700">Human Hand-off</text>
          </g>
          <path d="M 265 150 L 235 130" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="2 2" />
        </svg>
      `;
    case 'sync':
      return `
        <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto drop-shadow-md">
          <rect x="20" y="20" width="360" height="200" rx="20" fill="#13072b" stroke="#843dff" stroke-width="1.5" />
          <rect x="50" y="80" width="100" height="70" rx="14" fill="#1e0a40" stroke="#843dff" stroke-width="2" />
          <text x="100" y="112" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="800">WordPress</text>
          <text x="100" y="127" text-anchor="middle" fill="#c084fc" font-size="8" font-family="monospace">Forms &amp; Woo</text>

          <rect x="250" y="80" width="100" height="70" rx="14" fill="#1e0a40" stroke="#38bdf8" stroke-width="2" />
          <text x="300" y="112" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="800">GoHighLevel</text>
          <text x="300" y="127" text-anchor="middle" fill="#7dd3fc" font-size="8" font-family="monospace">CRM Pipelines</text>

          <!-- Circular sync paths -->
          <path d="M 150 95 Q 200 60 250 95" fill="none" stroke="#843dff" stroke-width="2.5" stroke-dasharray="4 3" />
          <polygon points="245,90 252,96 245,102" fill="#843dff" />

          <path d="M 250 135 Q 200 170 150 135" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="4 3" />
          <polygon points="155,140 148,134 155,128" fill="#38bdf8" />

          <circle cx="200" cy="115" r="16" fill="#120727" stroke="#e879f9" stroke-width="1.5" />
          <text x="200" y="119" text-anchor="middle" fill="#ffffff" font-size="9" font-family="monospace">SYNC</text>
        </svg>
      `;
    default:
      return `
        <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto drop-shadow-md">
          <rect x="20" y="20" width="360" height="200" rx="20" fill="#13072b" stroke="#843dff" stroke-width="1.5" />
          <circle cx="200" cy="120" r="50" fill="#260b4e" stroke="#843dff" stroke-width="2" />
          <text x="200" y="116" text-anchor="middle" fill="#ffffff" font-size="13" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800">YANKEE TECH</text>
          <text x="200" y="132" text-anchor="middle" fill="#a78bfa" font-size="8" font-family="monospace">ENGINEERED 2026</text>
          <circle cx="100" cy="70" r="15" fill="#38bdf8" opacity="0.6" />
          <circle cx="300" cy="70" r="15" fill="#10b981" opacity="0.6" />
          <circle cx="100" cy="170" r="15" fill="#f59e0b" opacity="0.6" />
          <circle cx="300" cy="170" r="15" fill="#ec4899" opacity="0.6" />
          <path d="M 115 70 L 150 100 M 285 70 L 250 100 M 115 170 L 150 140 M 285 170 L 250 140" stroke="#6b21a8" stroke-width="1.5" stroke-dasharray="3 3" />
        </svg>
      `;
  }
}

function renderServicePage(s) {
  const metricItems = s.metrics.map(m => `
    <div class="bg-white/85 backdrop-blur-md p-3.5 rounded-2xl border border-purple-100/90 shadow-sm">
      <div class="font-display font-extrabold text-xl sm:text-2xl text-brand-700">${m.num}</div>
      <div class="text-[11px] text-gray-500 font-medium mt-0.5">${m.label}</div>
    </div>
  `).join('');

  const featureItems = s.features.map((f, i) => `
    <div data-anim="fade-up" data-delay="${i + 1}" class="rounded-3xl p-6 service-card-bg border border-purple-100 flex flex-col justify-between">
      <div class="space-y-3">
        <div class="w-10 h-10 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-lg shadow-xs">
          <i class="${f.icon}"></i>
        </div>
        <h3 class="font-display font-bold text-base text-gray-900">${f.title}</h3>
        <p class="text-xs text-gray-600 leading-relaxed">${f.desc}</p>
      </div>
    </div>
  `).join('');

  const processItems = s.process.map((p, i) => `
    <div data-anim="fade-up" data-delay="${i + 1}" class="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm relative group hover:border-brand-300 transition">
      <div class="flex items-center justify-between mb-3">
        <span class="font-mono text-xs font-bold text-purple-400">STAGE ${p.step}</span>
        <span class="w-7 h-7 rounded-lg bg-purple-50 text-brand-600 flex items-center justify-center text-[10px] font-bold">✓</span>
      </div>
      <h4 class="font-display font-bold text-sm text-gray-900">${p.title}</h4>
      <p class="text-xs text-gray-500 mt-2 leading-relaxed">${p.desc}</p>
    </div>
  `).join('');

  const specRows = s.specs.map(spec => `
    <tr>
      <td class="py-3.5 px-5 font-semibold text-gray-900">${spec.name}</td>
      <td class="py-3.5 px-5 font-mono font-bold text-brand-700 bg-purple-50/40">${spec.value}</td>
    </tr>
  `).join('');

  const faqItems = s.faqs.map((faq, i) => `
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
  <title>${s.title} — Yankee Tech</title>
  <meta name="description" content="${s.description.replace(/"/g, '&quot;')}" />

  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Google Fonts: Plus Jakarta Sans & Inter -->
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
      <!-- Brand Logo -->
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
        <a href="services.html" class="text-brand-600 font-bold bg-purple-50 border border-purple-200/60 px-3 py-1.5 rounded-full transition shadow-xs">Services</a>
        <a href="index.html#use-cases" class="hover:text-brand-600 transition py-2">Use Cases</a>
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

    <!-- Mobile Nav Drawer -->
    <div id="mobileMenu" class="hidden md:hidden bg-white/98 backdrop-blur-2xl border-b border-purple-100 px-5 sm:px-6 py-5 space-y-3 text-sm font-medium text-gray-700 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto">
      <a href="index.html" class="block py-1.5 hover:text-brand-600 transition border-b border-purple-50">Home</a>
      <a href="about.html" class="block py-1.5 hover:text-brand-600 transition border-b border-purple-50">About Us</a>
      <a href="services.html" class="block py-1.5 text-brand-600 font-bold border-b border-purple-50">Services Overview</a>
      <a href="index.html#use-cases" class="block py-1.5 hover:text-brand-600 transition border-b border-purple-50">Use Cases</a>
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
         2. BREADCRUMBS & HERO SECTION
         ========================================== -->
    <section class="hero-bg relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-purple-100/70">
      <div class="pointer-events-none absolute -top-24 right-1/4 w-[600px] h-[400px] bg-purple-400/20 rounded-full blur-3xl"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Breadcrumbs -->
        <nav class="flex items-center gap-2 text-[11px] text-gray-500 font-medium mb-6">
          <a href="index.html" class="hover:text-brand-600 transition">Home</a>
          <span class="text-gray-300">/</span>
          <a href="services.html" class="hover:text-brand-600 transition">Services</a>
          <span class="text-gray-300">/</span>
          <span class="text-brand-600 font-bold">${s.title}</span>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <!-- Left Column -->
          <div class="lg:col-span-7 space-y-5">
            <div data-anim="fade-up" class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/80 border border-purple-300/60 shadow-xs">
              <span class="w-2 h-2 rounded-full bg-brand-600 animate-pulse"></span>
              <span class="text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-700">${s.heroBadge}</span>
            </div>

            <h1 data-anim="fade-up" data-delay="1" class="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-[#110c22] leading-[1.15] tracking-tight">
              ${s.headline}
            </h1>

            <p data-anim="fade-up" data-delay="2" class="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl">
              ${s.description}
            </p>

            <!-- Metrics Grid -->
            <div data-anim="fade-up" data-delay="3" class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              ${metricItems}
            </div>

            <div data-anim="fade-up" data-delay="4" class="flex flex-wrap items-center gap-4 pt-3">
              <a href="index.html#estimator" onclick="selectEstimatorPreset('${s.preset}')" class="btn-purple magnetic-btn text-white text-xs font-semibold px-6 py-3.5 rounded-full inline-flex items-center gap-2 shadow-md">
                <span>Configure Live Project Estimate</span>
                <i class="fa-solid fa-arrow-right text-[10px]"></i>
              </a>
              <a href="index.html#contact" class="px-5 py-3.5 rounded-full text-xs font-semibold text-gray-700 bg-white/90 hover:bg-white border border-purple-200/80 transition hover:border-brand-400 inline-flex items-center gap-2 shadow-xs">
                <span>Book Discovery Call</span>
                <i class="fa-solid fa-calendar-check text-[10px] text-brand-600"></i>
              </a>
            </div>
          </div>

          <!-- Right Column: Vector Graphic -->
          <div class="lg:col-span-5" data-anim="scale-in" data-delay="2">
            <div class="rounded-3xl bg-gradient-to-br from-[#120727] via-[#1a0938] to-[#280c54] p-5 text-white border border-purple-500/30 shadow-2xl relative overflow-hidden tilt-card">
              <div class="flex items-center justify-between pb-3 border-b border-purple-500/20">
                <span class="text-[10px] font-mono text-purple-300">${s.slug.replace('.html', '')}.svg</span>
                <span class="text-[9px] font-mono text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full">SPEC VERIFIED</span>
              </div>
              <div class="py-4">
                ${generateSvg(s.svgType)}
              </div>
              <div class="pt-2 border-t border-purple-500/20 flex items-center justify-between text-[10px] text-purple-300 font-mono">
                <span>Yankee Tech Production Standard</span>
                <span>2026 Core</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================
         3. KEY CAPABILITIES & FEATURES
         ========================================== -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-14" data-anim="fade-up">
          <span class="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-600 block mb-2">TECHNICAL HIGHLIGHTS</span>
          <h2 class="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight">
            What Sets Our Engineering Apart
          </h2>
          <p class="text-xs sm:text-sm text-gray-500 mt-2">
            Engineered with strict code integrity, high scalability, and measurable commercial results.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          ${featureItems}
        </div>
      </div>
    </section>

    <!-- ==========================================
         4. STEP-BY-STEP EXECUTION PROCESS
         ========================================== -->
    <section class="py-20 bg-[#faf8ff] border-y border-purple-100/70">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-14" data-anim="fade-up">
          <span class="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-600 block mb-2">OUR FRAMEWORK</span>
          <h2 class="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight">
            How We Execute This Service
          </h2>
          <p class="text-xs sm:text-sm text-gray-500 mt-2">
            A 4-step agile lifecycle ensuring on-time delivery with zero technical surprises.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          ${processItems}
        </div>
      </div>
    </section>

    <!-- ==========================================
         5. DELIVERABLES & SPECS MATRIX
         ========================================== -->
    <section class="py-20 bg-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-12" data-anim="fade-up">
          <span class="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-600 block mb-2">SERVICE SPECIFICATIONS</span>
          <h2 class="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight">
            Technical Deliverables &amp; Standards
          </h2>
        </div>

        <div class="bg-white rounded-3xl border border-purple-100 shadow-md overflow-hidden" data-anim="fade-up">
          <table class="w-full text-left text-xs">
            <thead>
              <tr class="border-b border-purple-100 bg-purple-50/60">
                <th class="py-4 px-5 font-bold text-gray-700 uppercase tracking-wider text-[10px]">Specification / Deliverable</th>
                <th class="py-4 px-5 font-bold text-brand-700 uppercase tracking-wider text-[10px]">Yankee Tech Deliverable</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-purple-50">
              ${specRows}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- ==========================================
         6. SERVICE FAQS
         ========================================== -->
    <section class="py-16 bg-[#faf8ff] border-t border-purple-100/70">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-10" data-anim="fade-up">
          <span class="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-600 block mb-2">QUESTIONS &amp; ANSWERS</span>
          <h2 class="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div class="space-y-3" data-anim="fade-up">
          ${faqItems}
        </div>
      </div>
    </section>

    <!-- ==========================================
         7. CALL TO ACTION (COSMIC DARK)
         ========================================== -->
    <section class="py-20 dark-cosmic-bg text-white relative overflow-hidden">
      <div class="pointer-events-none absolute -bottom-20 right-1/4 w-96 h-96 bg-brand-600/30 rounded-full blur-3xl"></div>

      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6" data-anim="fade-up">
        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-400/30 text-purple-200 text-[10px] font-extrabold uppercase tracking-widest">
          LET'S BUILD SOMETHING EXTRAORDINARY
        </span>
        <h2 class="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
          Ready to Start Your ${s.title}?
        </h2>
        <p class="text-xs sm:text-sm text-purple-200/80 max-w-2xl mx-auto leading-relaxed">
          Get an instant price estimate with our live calculator or schedule a 30-minute discovery call with our senior architects.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a href="index.html#estimator" onclick="selectEstimatorPreset('${s.preset}')" class="btn-purple magnetic-btn text-white text-xs font-semibold px-7 py-3.5 rounded-full inline-flex items-center gap-2 shadow-glow">
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

  <!-- ==========================================
       8. FOOTER
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
            <li><a href="index.html#use-cases" class="hover:text-white transition">Use Cases</a></li>
            <li><a href="index.html#estimator" class="hover:text-white transition">Price Estimator</a></li>
            <li><a href="index.html#contact" class="hover:text-white transition">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-display font-bold text-white text-xs uppercase tracking-wider mb-4">Related Services</h4>
          <ul class="space-y-2 text-purple-200/70">
            <li><a href="service-wordpress.html" class="hover:text-white transition">Custom WordPress Dev</a></li>
            <li><a href="service-laravel-react.html" class="hover:text-white transition">Laravel &amp; React Apps</a></li>
            <li><a href="service-ghl-funnels.html" class="hover:text-white transition">GoHighLevel Funnels</a></li>
            <li><a href="service-ai-chatbots.html" class="hover:text-white transition">AI Chatbots &amp; Agents</a></li>
            <li><a href="service-ghl-wordpress-sync.html" class="hover:text-white transition">GHL + WordPress Sync</a></li>
            <li><a href="service-speed-seo.html" class="hover:text-white transition">Core Web Vitals 95+</a></li>
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

// Generate all 12 detail pages
services.forEach(s => {
  const filePath = path.join(__dirname, s.slug);
  const html = renderServicePage(s);
  fs.writeFileSync(filePath, html, 'utf8');
  console.log('Created:', s.slug);
});

console.log('Successfully generated all 12 detail pages!');

