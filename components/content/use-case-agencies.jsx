export default function PageContent() {
  return (
<div>
  <div id="scroll-progress" />
  <main>
    <section className="hero-bg relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-purple-100/70">
      <div className="pointer-events-none absolute -top-24 right-1/4 w-[600px] h-[400px] bg-purple-400/20 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <nav className="flex items-center gap-2 text-[11px] text-gray-500 font-medium mb-6">
          <a href="/index.html" className="hover:text-brand-600 transition">Home</a>
          <span className="text-gray-300">/</span>
          <a href="/use-cases.html" className="hover:text-brand-600 transition">Use Cases</a>
          <span className="text-gray-300">/</span>
          <span className="text-brand-600 font-bold">Marketing &amp; Creative Agencies (White-Label)</span>
        </nav>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div data-anim="fade-up" className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/80 border border-purple-300/60 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-700">INDUSTRY 03 • AGENCY PARTNERSHIPS</span>
            </div>
            <h1 data-anim="fade-up" data-delay={1} className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-[#110c22] leading-[1.15] tracking-tight">
              Your Invisible Technical Powerhouse for Frictionless Agency Scaling
            </h1>
            <p data-anim="fade-up" data-delay={2} className="text-base sm:text-base text-gray-600 leading-relaxed max-w-2xl">
              Scale your marketing or creative agency without the overhead, payroll risk, or headache of managing in-house developers. Yankee Tech acts as your private, white-label engineering arm — committing to your GitHub, communicating in your Slack, and delivering under strict NDAs.
            </p>
            <div data-anim="fade-up" data-delay={3} className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-white/85 backdrop-blur-md p-3.5 rounded-2xl border border-purple-100/90 shadow-sm">
                <div className="font-display font-extrabold text-xl sm:text-2xl text-brand-700">40%+</div>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5">Of Our Builds Are White-Label</div>
              </div>
              <div className="bg-white/85 backdrop-blur-md p-3.5 rounded-2xl border border-purple-100/90 shadow-sm">
                <div className="font-display font-extrabold text-xl sm:text-2xl text-brand-700">Strict NDA</div>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5">Bilateral Confidentiality</div>
              </div>
              <div className="bg-white/85 backdrop-blur-md p-3.5 rounded-2xl border border-purple-100/90 shadow-sm">
                <div className="font-display font-extrabold text-xl sm:text-2xl text-brand-700">Senior Only</div>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5">Zero Junior Outsourcers</div>
              </div>
              <div className="bg-white/85 backdrop-blur-md p-3.5 rounded-2xl border border-purple-100/90 shadow-sm">
                <div className="font-display font-extrabold text-xl sm:text-2xl text-brand-700">50-100%</div>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5">Agency Profit Margins</div>
              </div>
            </div>
            <div data-anim="fade-up" data-delay={4} className="flex flex-wrap items-center gap-4 pt-3">
              <a href="/index.html#estimator" onClick={(event) => { window.selectEstimatorPreset('fullstack'); }} className="btn-purple magnetic-btn text-white text-xs font-semibold px-6 py-3.5 rounded-full inline-flex items-center gap-2 shadow-md">
                <span>Configure Industry Estimate</span>
              </a>
              <a href="/index.html#contact" className="px-5 py-3.5 rounded-full text-xs font-semibold text-gray-700 bg-white/90 hover:bg-white border border-purple-200/80 transition hover:border-brand-400 inline-flex items-center gap-2 shadow-xs">
                <span>Book Discovery Call</span>
                <i className="fa-solid fa-calendar-check text-[10px] text-brand-600" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-5" data-anim="scale-in" data-delay={2}>
            <div className="rounded-3xl bg-gradient-to-br from-[#120727] via-[#1a0938] to-[#280c54] p-6 text-white border border-purple-500/30 shadow-2xl relative overflow-hidden tilt-card">
              <div className="flex items-center justify-between pb-3 border-b border-purple-500/20">
                <span className="text-[10px] font-mono text-purple-300">use-case-agencies-pipeline.svg</span>
                <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full">LIVE BLUEPRINT</span>
              </div>
              <div className="py-5 space-y-3">
                <div className="p-3.5 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand-500/30 text-purple-200 flex items-center justify-center text-[10px] font-mono font-bold">1</span>
                    <div>
                      <div className="text-xs font-bold text-white">Your Agency Brand</div>
                      <div className="text-[10px] text-purple-200/70">Client Communication &amp; Strategy</div>
                    </div>
                  </div>
                  <i className="fa-solid fa-check text-emerald-400 text-xs" />
                </div>
                <div className="p-3.5 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand-500/30 text-purple-200 flex items-center justify-center text-[10px] font-mono font-bold">2</span>
                    <div>
                      <div className="text-xs font-bold text-white">Yankee Tech Engine</div>
                      <div className="text-[10px] text-purple-200/70">Invisible Senior Engineering Arm</div>
                    </div>
                  </div>
                  <i className="fa-solid fa-check text-emerald-400 text-xs" />
                </div>
                <div className="p-3.5 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand-500/30 text-purple-200 flex items-center justify-center text-[10px] font-mono font-bold">3</span>
                    <div>
                      <div className="text-xs font-bold text-white">Tech Fulfillment</div>
                      <div className="text-[10px] text-purple-200/70">WordPress, Laravel, GHL &amp; AI</div>
                    </div>
                  </div>
                  <i className="fa-solid fa-check text-emerald-400 text-xs" />
                </div>
                <div className="p-3.5 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand-500/30 text-purple-200 flex items-center justify-center text-[10px] font-mono font-bold">4</span>
                    <div>
                      <div className="text-xs font-bold text-white">Delivery &amp; Handoff</div>
                      <div className="text-[10px] text-purple-200/70">White-Label Loom Video &amp; SLA</div>
                    </div>
                  </div>
                  <i className="fa-solid fa-check text-emerald-400 text-xs" />
                </div>
              </div>
              <div className="pt-3 border-t border-purple-500/20 flex items-center justify-between text-[10px] text-purple-300 font-mono">
                <span>Yankee Tech Production Standard</span>
                <span>Verified 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14" data-anim="fade-up">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-600 block mb-2">BEFORE VS AFTER</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight">
            How We Solve Core Industry Bottlenecks
          </h2>
          <p className="text-base text-base text-gray-500 mt-2">
            Eliminating technical debt, dropped leads, and sluggish architectures.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div data-anim="fade-up" data-delay={1} className="p-6 rounded-3xl bg-white border border-purple-100 shadow-sm space-y-4">
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✕</span>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-rose-500">Traditional Fragile Setup</div>
                <p className="text-base text-gray-500 mt-1 leading-relaxed">Struggling with unreliable freelancers who ghost mid-project.</p>
              </div>
            </div>
            <div className="pt-3 border-t border-purple-50 flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Yankee Tech Architecture</div>
                <p className="text-base text-gray-900 font-medium mt-1 leading-relaxed">Dedicated senior engineers with guaranteed delivery dates and daily standup updates.</p>
              </div>
            </div>
          </div>
          <div data-anim="fade-up" data-delay={2} className="p-6 rounded-3xl bg-white border border-purple-100 shadow-sm space-y-4">
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✕</span>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-rose-500">Traditional Fragile Setup</div>
                <p className="text-base text-gray-500 mt-1 leading-relaxed">Turning down lucrative web or automation clients due to lack of technical staff.</p>
              </div>
            </div>
            <div className="pt-3 border-t border-purple-50 flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Yankee Tech Architecture</div>
                <p className="text-base text-gray-900 font-medium mt-1 leading-relaxed">Expanding your service offerings overnight with high-margin engineering capabilities.</p>
              </div>
            </div>
          </div>
          <div data-anim="fade-up" data-delay={3} className="p-6 rounded-3xl bg-white border border-purple-100 shadow-sm space-y-4">
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✕</span>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-rose-500">Traditional Fragile Setup</div>
                <p className="text-base text-gray-500 mt-1 leading-relaxed">Wasting hours rebuilding GoHighLevel sub-accounts from scratch for every new client.</p>
              </div>
            </div>
            <div className="pt-3 border-t border-purple-50 flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Yankee Tech Architecture</div>
                <p className="text-base text-gray-900 font-medium mt-1 leading-relaxed">Standardized 1-click GHL snapshots deployed in under 2 minutes.</p>
              </div>
            </div>
          </div>
          <div data-anim="fade-up" data-delay={4} className="p-6 rounded-3xl bg-white border border-purple-100 shadow-sm space-y-4">
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✕</span>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-rose-500">Traditional Fragile Setup</div>
                <p className="text-base text-gray-500 mt-1 leading-relaxed">Fear of white-label partners poaching your client relationships.</p>
              </div>
            </div>
            <div className="pt-3 border-t border-purple-50 flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Yankee Tech Architecture</div>
                <p className="text-base text-gray-900 font-medium mt-1 leading-relaxed">Strict bilateral NDAs and non-compete agreements legally protecting your agency.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 bg-[#faf8ff] border-y border-purple-100/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#120727] via-[#1a083a] to-[#2b0c57] text-white p-8 sm:p-12 border border-purple-500/30 shadow-2xl relative overflow-hidden" data-anim="fade-up">
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-brand-500/30 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-purple-500/30">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-300">FLAGSHIP CASE STUDY SPOTLIGHT</span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-[9px] font-mono">VERIFIED RESULTS</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                  US-Based Digital Growth Agency (35 Retainer Clients)
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-purple-200/80 leading-relaxed">
                  <p><strong>The Challenge:</strong> The agency founder was spending 25 hours a week managing buggy WordPress sites and building manual Zapier flows instead of closing new enterprise retainers.</p>
                  <p><strong>The Solution:</strong> Yankee Tech took over full engineering fulfillment under white-label terms: establishing standardized GHL snapshots, custom Tailwind themes, and webhook integrations.</p>
                </div>
              </div>
              <div className="lg:col-span-5 bg-white/5 border border-purple-400/20 rounded-2xl p-5 space-y-3">
                <div className="text-xs font-bold text-white uppercase tracking-wider">Measurable Business Impact</div>
                <ul className="space-y-2 pt-1">
                  <li className="flex items-start gap-2.5 text-xs text-purple-100">
                    <i className="fa-solid fa-circle-check text-emerald-400 text-xs mt-0.5 shrink-0" />
                    <span>Agency scaled from 35 to 68 retainer clients in 9 months without hiring full-time staff.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-purple-100">
                    <i className="fa-solid fa-circle-check text-emerald-400 text-xs mt-0.5 shrink-0" />
                    <span>Client onboarding time dropped from 14 days to under 48 hours.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-purple-100">
                    <i className="fa-solid fa-circle-check text-emerald-400 text-xs mt-0.5 shrink-0" />
                    <span>Agency generated an additional $220,000 in high-margin development revenue.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12" data-anim="fade-up">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-600 block mb-2">INDUSTRY STANDARDS</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight">
            Technical Stack &amp; Deliverables
          </h2>
        </div>
        <div className="bg-white rounded-3xl border border-purple-100 shadow-md overflow-hidden" data-anim="fade-up">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-purple-100 bg-purple-50/60">
                <th className="py-4 px-5 font-bold text-gray-700 uppercase tracking-wider text-[10px]">Architecture Component</th>
                <th className="py-4 px-5 font-bold text-brand-700 uppercase tracking-wider text-[10px]">Yankee Tech Production Standard</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-50">
              <tr>
                <td className="py-3.5 px-5 font-semibold text-gray-900">Confidentiality</td>
                <td className="py-3.5 px-5 font-mono font-bold text-brand-700 bg-purple-50/40">Strict Bilateral Non-Disclosure Agreement (NDA)</td>
              </tr>
              <tr>
                <td className="py-3.5 px-5 font-semibold text-gray-900">Communication Channels</td>
                <td className="py-3.5 px-5 font-mono font-bold text-brand-700 bg-purple-50/40">Private Slack Channel / ClickUp / Asana / Loom</td>
              </tr>
              <tr>
                <td className="py-3.5 px-5 font-semibold text-gray-900">Source Control</td>
                <td className="py-3.5 px-5 font-mono font-bold text-brand-700 bg-purple-50/40">Direct Commits to Your Agency GitHub / GitLab</td>
              </tr>
              <tr>
                <td className="py-3.5 px-5 font-semibold text-gray-900">Core Capabilities</td>
                <td className="py-3.5 px-5 font-mono font-bold text-brand-700 bg-purple-50/40">WordPress, WooCommerce, Laravel, GHL, AI Bots</td>
              </tr>
              <tr>
                <td className="py-3.5 px-5 font-semibold text-gray-900">Warranty</td>
                <td className="py-3.5 px-5 font-mono font-bold text-brand-700 bg-purple-50/40">30-Day Technical Bug Warranty on Every Delivery</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <section className="py-16 bg-[#faf8ff] border-t border-purple-100/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10" data-anim="fade-up">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-600 block mb-2">INDUSTRY QUESTIONS</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-3" data-anim="fade-up">
          <div className="p-4 rounded-2xl border border-purple-100 bg-purple-50/20">
            <button type="button" onClick={(event) => { window.toggleFaq(0); }} className="w-full flex items-center justify-between text-left text-xs sm:text-sm font-bold text-gray-900">
              <span>Will our clients ever see the Yankee Tech name?</span>
              <i id="faq-icon-0" className="fa-solid fa-plus text-xs text-gray-400 shrink-0 ml-2 transition-transform" />
            </button>
            <div id="faq-body-0" className=" pt-3 text-xs text-gray-600 leading-relaxed border-t border-purple-100/80 mt-2.5">
              Never. All code comments, git author credentials, Loom videos, and documentation are strictly branded with your agency name and logo.
            </div>
          </div>
          <div className="p-4 rounded-2xl border border-purple-100 bg-purple-50/20">
            <button type="button" onClick={(event) => { window.toggleFaq(1); }} className="w-full flex items-center justify-between text-left text-xs sm:text-sm font-bold text-gray-900">
              <span>Can an engineer from your team join client discovery calls?</span>
              <i id="faq-icon-1" className="fa-solid fa-plus text-xs text-gray-400 shrink-0 ml-2 transition-transform" />
            </button>
            <div id="faq-body-1" className="hidden pt-3 text-xs text-gray-600 leading-relaxed border-t border-purple-100/80 mt-2.5">
              Yes! A senior engineer can attend client calls as your "Technical Director" or "Lead Architect" to assess scope and establish credibility.
            </div>
          </div>
          <div className="p-4 rounded-2xl border border-purple-100 bg-purple-50/20">
            <button type="button" onClick={(event) => { window.toggleFaq(2); }} className="w-full flex items-center justify-between text-left text-xs sm:text-sm font-bold text-gray-900">
              <span>How does billing work for partner agencies?</span>
              <i id="faq-icon-2" className="fa-solid fa-plus text-xs text-gray-400 shrink-0 ml-2 transition-transform" />
            </button>
            <div id="faq-body-2" className="hidden pt-3 text-xs text-gray-600 leading-relaxed border-t border-purple-100/80 mt-2.5">
              We offer wholesale fixed-price project quotes or dedicated monthly sprint retainers with priority SLA turnarounds.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 dark-cosmic-bg text-white relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-20 right-1/4 w-96 h-96 bg-brand-600/30 rounded-full blur-3xl" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6" data-anim="fade-up">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-400/30 text-purple-200 text-[10px] font-extrabold uppercase tracking-widest">
          LET'S ARCHITECT YOUR INDUSTRY SOLUTION
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
          Ready to Modernize for Marketing &amp; Creative Agencies (White-Label)?
        </h2>
        <p className="text-base text-base text-purple-200/80 max-w-2xl mx-auto leading-relaxed">
          Book a 30-minute discovery call or configure an instant estimate using our live price calculator.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a href="/index.html#estimator" onClick={(event) => { window.selectEstimatorPreset('fullstack'); }} className="btn-purple magnetic-btn text-white text-xs font-semibold px-7 py-3.5 rounded-full inline-flex items-center gap-2 shadow-glow">
            <span>Calculate Project Estimate</span>
            <i className="fa-solid fa-calculator text-[10px] text-amber-300" />
          </a>
          <a href="/index.html#contact" className="px-6 py-3.5 rounded-full text-xs font-semibold text-purple-100 bg-white/10 hover:bg-white/20 border border-white/15 transition inline-flex items-center gap-2">
            <span>Schedule Discovery Call</span>
          </a>
        </div>
      </div>
    </section>
  </main>
  
  <button id="scrollTopBtn" onClick={(event) => { window.scrollTo({top: 0, behavior: 'smooth'}); }} aria-label="Scroll back to top" className="fixed bottom-6 right-6 w-11 h-11 rounded-2xl bg-brand-600 text-white shadow-glow flex items-center justify-center transition hover:bg-brand-700 active:scale-95 z-40 border border-purple-400/40">
    <i className="fa-solid fa-arrow-up text-xs" />
  </button>
</div>

  );
}
