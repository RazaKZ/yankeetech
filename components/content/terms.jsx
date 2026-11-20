export default function PageContent() {
  return (
<div>
  <div id="scroll-progress" />
  <main className="py-16 lg:py-20 bg-gray-50/50">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-6">
        <a href="/index.html" className="hover:text-brand-600 transition">Home</a>
        <i className="fa-solid fa-chevron-right text-[9px] text-gray-400" />
        <span className="text-brand-600">Terms of Service</span>
      </nav>
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-purple-100 shadow-sm space-y-8">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-600 block mb-2 font-mono">CLIENT AGREEMENT &amp; ENGAGEMENT TERMS</span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight">Terms of Service</h1>
          <p className="text-base text-gray-400 mt-2 font-mono">Last Updated: November 2026 • Valid for All Yankee Tech Contracts</p>
        </div>
        <div className="prose prose-purple max-w-none text-xs sm:text-sm text-gray-600 space-y-6 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-display font-bold text-lg text-gray-900">1. Agreement to Terms</h2>
            <p>
              These Terms of Service govern the engagement between <strong>Yankee Tech</strong> ("Agency," "we," or "us") and the individual or business entity ("Client" or "you") commissioning custom software development, web applications, GoHighLevel integrations, AI automation, or technical consulting services.
            </p>
            <p>
              By signing a statement of work (SOW), paying an initial invoice or deposit, or using our website (<strong>https://yankeeetech.com</strong>), you agree to these Terms.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="font-display font-bold text-lg text-gray-900">2. Discovery, Scoping &amp; Fixed Pricing</h2>
            <p>
              We operate on clear, milestone-based scopes with no surprise bills:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Initial Consultation:</strong> Free 30-minute technical evaluation to discuss requirements, architecture, and preliminary feasibility.</li>
              <li><strong>Scoping Phase:</strong> Dedicated discovery workshops and wireframe reviews. When a paid scoping deposit ($100–$250) is taken, 100% of the amount is credited toward your development milestone invoice upon project start.</li>
              <li><strong>Fixed Milestone Proposals:</strong> Each build includes a written specification, weekly sprint milestones, and an agreed fixed cost before code is written.</li>
            </ul>
          </section>
          <section className="space-y-3">
            <h2 className="font-display font-bold text-lg text-gray-900">3. Milestone Payments &amp; Invoicing</h2>
            <p>Standard fixed-price projects are structured into predictable milestone phases:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>30% Upfront Deposit:</strong> Secures engineering capacity, environment setup, and architecture initialization.</li>
              <li><strong>30% Midpoint Review:</strong> Billed upon demonstration of working core workflows and API integrations.</li>
              <li><strong>40% Final Launch Milestone:</strong> Due upon completion of QA testing, user acceptance testing (UAT), and before final production deployment.</li>
              <li><strong>Retainers &amp; Dedicated Pods:</strong> Dedicated developer or agency white-label retainers are billed monthly in advance.</li>
            </ul>
          </section>
          <section className="space-y-3">
            <h2 className="font-display font-bold text-lg text-gray-900">4. 100% Intellectual Property &amp; Code Ownership</h2>
            <p>
              <strong>You own everything.</strong> Upon payment of the final project milestone invoice:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>All custom code, database schemas, frontend assets, and documentation created specifically for your project transfer 100% to you.</li>
              <li>All hosting accounts, cloud credentials (AWS, DigitalOcean, Vercel), GoHighLevel sub-accounts, and Stripe API keys remain exclusively under your ownership and direct control.</li>
              <li>We never implement vendor lock-in or proprietary licensing gates.</li>
            </ul>
          </section>
          <section className="space-y-3">
            <h2 className="font-display font-bold text-lg text-gray-900">5. 30-Day Post-Launch Bug-Fix Warranty</h2>
            <p>
              Every custom application or integration built by Yankee Tech includes a <strong>complimentary 30-day post-launch warranty period</strong> starting from production deployment. During this window, any defects, functional regressions, or bugs identified within the original approved scope are resolved promptly at zero additional charge.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="font-display font-bold text-lg text-gray-900">6. White-Label &amp; Non-Disclosure Agreements (NDA)</h2>
            <p>
              For marketing agencies and software partners:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>We sign mutual NDAs before reviewing sensitive client briefs or data.</li>
              <li>Under white-label agreements, Yankee Tech operates completely behind the scenes under your agency brand with zero direct solicitation of your end-clients.</li>
            </ul>
          </section>
          <section className="space-y-3">
            <h2 className="font-display font-bold text-lg text-gray-900">7. Client Responsibilities &amp; Dependencies</h2>
            <p>
              Timely project delivery requires collaboration:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Providing necessary third-party API credentials (Stripe, Twilio, GoHighLevel, CRM keys) within agreed timelines.</li>
              <li>Reviewing weekly demo milestones and providing constructive feedback or approval within 3 business days.</li>
            </ul>
          </section>
          <section className="space-y-3">
            <h2 className="font-display font-bold text-lg text-gray-900">8. Limitation of Liability</h2>
            <p>
              While we adhere to senior engineering best practices, Yankee Tech is not liable for third-party platform downtime (e.g. AWS regional outages, GoHighLevel API changes, Stripe processor limits) or indirect business losses exceeding the total fees paid under the applicable statement of work.
            </p>
          </section>
          <section className="space-y-3 border-t border-gray-100 pt-6">
            <h2 className="font-display font-bold text-lg text-gray-900">9. Contact Information</h2>
            <p>For questions regarding these Terms or to request an executable mutual agreement / NDA:</p>
            <div className="bg-purple-50/70 p-4 rounded-2xl border border-purple-100 space-y-1 text-xs">
              <p><strong>Yankee Tech Operations</strong></p>
              <p>Domain: <a href="https://yankeeetech.com" className="text-brand-600 hover:underline">https://yankeeetech.com</a></p>
              <p>Business Inquiries: <a href="mailto:contact@yankeeetech.com" className="text-brand-600 hover:underline">contact@yankeeetech.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
  
</div>

  );
}
