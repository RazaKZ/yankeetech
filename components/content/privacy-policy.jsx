export default function PageContent() {
  return (
<div>
  <div id="scroll-progress" />
  <main className="py-16 lg:py-20 bg-gray-50/50">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-6">
        <a href="/index.html" className="hover:text-brand-600 transition">Home</a>
        <i className="fa-solid fa-chevron-right text-[9px] text-gray-400" />
        <span className="text-brand-600">Privacy Policy</span>
      </nav>
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-purple-100 shadow-sm space-y-8">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-600 block mb-2 font-mono">LEGAL COMPLIANCE &amp; DATA PRIVACY</span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight">Privacy Policy</h1>
          <p className="text-base text-gray-400 mt-2 font-mono">Last Updated: November 2026 • Effective Immediately</p>
        </div>
        <div className="prose prose-purple max-w-none text-xs sm:text-sm text-gray-600 space-y-6 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-display font-bold text-lg text-gray-900">1. Introduction</h2>
            <p>
              Yankee Tech ("we," "our," or "us"), accessible via <strong>https://yankeeetech.com</strong>, operates as a specialized digital software engineering agency providing custom web applications, SaaS platforms, GoHighLevel integrations, and AI workflow automations. We respect the privacy of our website visitors, clients, and prospective partners.
            </p>
            <p>
              This Privacy Policy explains what personal and technical data we collect, how it is processed and secured, and your legal rights in accordance with applicable global data privacy regulations, including the European Union General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and UK Data Protection laws.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="font-display font-bold text-lg text-gray-900">2. Information We Collect</h2>
            <p>We only collect information necessary to deliver scoping estimates, communicate about projects, and provide contracted development services:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Contact &amp; Identification Data:</strong> Your name, work email address, phone/WhatsApp number, and company name submitted through our project estimator, contact form, or calendar booking scheduler.</li>
              <li><strong>Project Requirements Data:</strong> Technical briefs, stack preferences, timeline requirements, and budget ranges submitted during the scoping inquiry.</li>
              <li><strong>Technical &amp; Usage Data:</strong> Anonymized IP addresses, browser types, operating systems, referring URLs, and interaction timestamps collected via cookies or analytical scripts (such as Google Analytics 4) to monitor website health and performance.</li>
            </ul>
          </section>
          <section className="space-y-3">
            <h2 className="font-display font-bold text-lg text-gray-900">3. How We Use Your Information</h2>
            <p>Your information is used strictly for legitimate business purposes:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Preparing accurate technical architecture proposals and milestone-based development quotes.</li>
              <li>Scheduling and conducting initial discovery and scoping consultation calls.</li>
              <li>Delivering contracted development, API integrations, and ongoing client support.</li>
              <li>Fulfilling legal, tax, accounting, and anti-fraud compliance obligations.</li>
            </ul>
            <p><strong>We do not sell, rent, or trade your personal data</strong> to third-party data brokers or marketing lists under any circumstances.</p>
          </section>
          <section className="space-y-3">
            <h2 className="font-display font-bold text-lg text-gray-900">4. Client Confidentiality &amp; Non-Disclosure (NDAs)</h2>
            <p>
              We treat all client concepts, proprietary code, business logic, customer databases, and GoHighLevel sub-account credentials with strict confidentiality. Prior to exchanging sensitive project specifications or architectural documentation, we execute mutual Non-Disclosure Agreements (NDAs). All Yankee Tech engineers operate under signed confidentiality and intellectual property assignment covenants.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="font-display font-bold text-lg text-gray-900">5. Cookies and Analytics</h2>
            <p>
              Our website uses essential and performance cookies. Performance cookies (such as GA4) help us understand how users navigate our site so we can optimize load times and conversion flows. You may configure your browser settings to reject or delete cookies at any time without impacting your ability to browse our services.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="font-display font-bold text-lg text-gray-900">6. Third-Party Service Providers</h2>
            <p>We work with trusted infrastructure and SaaS partners who adhere to enterprise security standards:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Calendar Scheduling:</strong> Calendly / Google Calendar (for appointment booking).</li>
              <li><strong>Payment Processing:</strong> Stripe (for invoice settlement; no credit card details are stored on our servers).</li>
              <li><strong>CRM &amp; Messaging:</strong> GoHighLevel &amp; Twilio (for inquiry routing and SMS/email notifications).</li>
              <li><strong>Analytics &amp; Ads:</strong> Google Analytics 4 &amp; Google Ads conversion tracking.</li>
            </ul>
          </section>
          <section className="space-y-3">
            <h2 className="font-display font-bold text-lg text-gray-900">7. Data Retention &amp; Security</h2>
            <p>
              We implement industry-standard encryption (HTTPS/TLS 1.3), access controls, and firewall safeguards to prevent unauthorized access or disclosure. Project inquiries that do not proceed to a contracted engagement are automatically purged from our active CRM records within 12 months.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="font-display font-bold text-lg text-gray-900">8. Your Legal Rights</h2>
            <p>
              Depending on your jurisdiction, you have the right to request access to the personal data we hold about you, request corrections, request complete erasure ("right to be forgotten"), or restrict processing. To exercise any of these rights, please contact our Data Protection Lead at <strong>contact@yankeeetech.com</strong>.
            </p>
          </section>
          <section className="space-y-3 border-t border-gray-100 pt-6">
            <h2 className="font-display font-bold text-lg text-gray-900">9. Contact Us</h2>
            <p>If you have any questions or requests regarding this Privacy Policy, please reach out directly:</p>
            <div className="bg-purple-50/70 p-4 rounded-2xl border border-purple-100 space-y-1 text-xs">
              <p><strong>Yankee Tech</strong></p>
              <p>Website: <a href="https://yankeeetech.com" className="text-brand-600 hover:underline">https://yankeeetech.com</a></p>
              <p>Direct Business Email: <a href="mailto:contact@yankeeetech.com" className="text-brand-600 hover:underline">contact@yankeeetech.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
  
</div>

  );
}
