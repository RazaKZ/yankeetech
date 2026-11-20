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
          <a href="/services.html" className="hover:text-brand-600 transition">Services</a>
          <span className="text-gray-300">/</span>
          <span className="text-brand-600 font-bold">UI/UX Figma Design Systems &amp; Conversion Prototyping</span>
        </nav>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div data-anim="fade-up" className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/80 border border-purple-300/60 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-700">CORE 11 • CONVERSION-FIRST DESIGN</span>
            </div>
            <h1 data-anim="fade-up" data-delay={1} className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-[#110c22] leading-[1.15] tracking-tight">
              Make your product easier to use.
            </h1>
            <p data-anim="fade-up" data-delay={2} className="text-base sm:text-base text-gray-600 leading-relaxed max-w-2xl">
              Turn requirements into clear user journeys, responsive screens and a Figma design system your development team can build from.
            </p>
            <div data-anim="fade-up" data-delay={3} className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-white/85 backdrop-blur-md p-3.5 rounded-2xl border border-purple-100/90 shadow-sm">
                <div className="font-display font-extrabold text-xl sm:text-2xl text-brand-700">100%</div>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5">Tailwind CSS Token Mapping</div>
              </div>
              <div className="bg-white/85 backdrop-blur-md p-3.5 rounded-2xl border border-purple-100/90 shadow-sm">
                <div className="font-display font-extrabold text-xl sm:text-2xl text-brand-700">WCAG 2.1</div>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5">Accessibility Standard</div>
              </div>
              <div className="bg-white/85 backdrop-blur-md p-3.5 rounded-2xl border border-purple-100/90 shadow-sm">
                <div className="font-display font-extrabold text-xl sm:text-2xl text-brand-700">Auto-Layout</div>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5">Fluid Responsive Artboards</div>
              </div>
              <div className="bg-white/85 backdrop-blur-md p-3.5 rounded-2xl border border-purple-100/90 shadow-sm">
                <div className="font-display font-extrabold text-xl sm:text-2xl text-brand-700">Zero Drift</div>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5">Design-to-Code Handoff</div>
              </div>
            </div>
            <div data-anim="fade-up" data-delay={4} className="flex flex-wrap items-center gap-4 pt-3">
              <a href="/index.html#estimator" onClick={(event) => { window.selectEstimatorPreset('wordpress'); }} className="btn-purple magnetic-btn text-white text-xs font-semibold px-6 py-3.5 rounded-full inline-flex items-center gap-2 shadow-md">
                <span>Configure Live Project Estimate</span>
              </a>
              <a href="/index.html#contact" className="px-5 py-3.5 rounded-full text-xs font-semibold text-gray-700 bg-white/90 hover:bg-white border border-purple-200/80 transition hover:border-brand-400 inline-flex items-center gap-2 shadow-xs">
                <span>Book Discovery Call</span>
                <i className="fa-solid fa-calendar-check text-[10px] text-brand-600" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-5" data-anim="scale-in" data-delay={2}>
            <div className="rounded-3xl bg-gradient-to-br from-[#120727] via-[#1a0938] to-[#280c54] p-5 text-white border border-purple-500/30 shadow-2xl relative overflow-hidden tilt-card">
              <div className="flex items-center justify-between pb-3 border-b border-purple-500/20">
                <span className="text-[10px] font-mono text-purple-300">service-ui-ux-figma.svg</span>
                <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full">SPEC VERIFIED</span>
              </div>
              <div className="py-4">
                <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-md">
                  <rect x={20} y={20} width={360} height={200} rx={20} fill="#13072b" stroke="#843dff" strokeWidth="1.5" />
                  <circle cx={200} cy={120} r={50} fill="#260b4e" stroke="#843dff" strokeWidth={2} />
                  <text x={200} y={116} textAnchor="middle" fill="#ffffff" fontSize={13} fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight={800}>YANKEE TECH</text>
                  <text x={200} y={132} textAnchor="middle" fill="#a78bfa" fontSize={8} fontFamily="monospace">ENGINEERED 2026</text>
                  <circle cx={100} cy={70} r={15} fill="#38bdf8" opacity="0.6" />
                  <circle cx={300} cy={70} r={15} fill="#10b981" opacity="0.6" />
                  <circle cx={100} cy={170} r={15} fill="#f59e0b" opacity="0.6" />
                  <circle cx={300} cy={170} r={15} fill="#ec4899" opacity="0.6" />
                  <path d="M 115 70 L 150 100 M 285 70 L 250 100 M 115 170 L 150 140 M 285 170 L 250 140" stroke="#6b21a8" strokeWidth="1.5" strokeDasharray="3 3" />
                </svg>
              </div>
              <div className="pt-2 border-t border-purple-500/20 flex items-center justify-between text-[10px] text-purple-300 font-mono">
                <span>Yankee Tech Production Standard</span>
                <span>2026 Core</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14" data-anim="fade-up">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-600 block mb-2">TECHNICAL HIGHLIGHTS</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight">
            What Sets Our Engineering Apart
          </h2>
          <p className="text-base text-base text-gray-500 mt-2">
            Engineered with strict code integrity, high scalability, and measurable commercial results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div data-anim="fade-up" data-delay={1} className="rounded-3xl p-6 service-card-bg border border-purple-100 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-lg shadow-xs">
                <i className="fa-solid fa-shapes" />
              </div>
              <h3 className="font-display font-bold text-base text-gray-900">Atomic Component Libraries</h3>
              <p className="text-base text-gray-600 leading-relaxed">Modular buttons, inputs, pills, cards, and modal dialogs organized into scalable variant sets with auto-layout.</p>
            </div>
          </div>
          <div data-anim="fade-up" data-delay={2} className="rounded-3xl p-6 service-card-bg border border-purple-100 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-lg shadow-xs">
                <i className="fa-solid fa-play" />
              </div>
              <h3 className="font-display font-bold text-base text-gray-900">Interactive High-Fidelity Prototypes</h3>
              <p className="text-base text-gray-600 leading-relaxed">Clickable prototypes with realistic micro-interactions, modal behaviors, and responsive navigation for client testing.</p>
            </div>
          </div>
          <div data-anim="fade-up" data-delay={3} className="rounded-3xl p-6 service-card-bg border border-purple-100 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-lg shadow-xs">
                <i className="fa-solid fa-universal-access" />
              </div>
              <h3 className="font-display font-bold text-base text-gray-900">WCAG 2.1 AA Accessibility Standards</h3>
              <p className="text-base text-gray-600 leading-relaxed">Verified color contrast ratios, accessible touch targets, and legible typography scales that welcome all users.</p>
            </div>
          </div>
          <div data-anim="fade-up" data-delay={4} className="rounded-3xl p-6 service-card-bg border border-purple-100 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-brand-600 flex items-center justify-center text-lg shadow-xs">
                <i className="fa-solid fa-laptop-code" />
              </div>
              <h3 className="font-display font-bold text-base text-gray-900">1:1 Tailwind CSS Dev Handoff</h3>
              <p className="text-base text-gray-600 leading-relaxed">All spacing units, paddings, hex colors, and font styles map directly to standard Tailwind classes, cutting dev time in half.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 bg-[#faf8ff] border-y border-purple-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14" data-anim="fade-up">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-600 block mb-2">OUR FRAMEWORK</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight">
            How We Execute This Service
          </h2>
          <p className="text-base text-base text-gray-500 mt-2">
            A 4-step agile lifecycle ensuring on-time delivery with zero technical surprises.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div data-anim="fade-up" data-delay={1} className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm relative group hover:border-brand-300 transition">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-bold text-purple-400">STAGE 01</span>
              <span className="w-7 h-7 rounded-lg bg-purple-50 text-brand-600 flex items-center justify-center text-[10px] font-bold">✓</span>
            </div>
            <h4 className="font-display font-bold text-sm text-gray-900">Competitor &amp; UX Research</h4>
            <p className="text-base text-gray-500 mt-2 leading-relaxed">Analyzing user journeys, high-converting competitor funnels, and brand positioning.</p>
          </div>
          <div data-anim="fade-up" data-delay={2} className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm relative group hover:border-brand-300 transition">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-bold text-purple-400">STAGE 02</span>
              <span className="w-7 h-7 rounded-lg bg-purple-50 text-brand-600 flex items-center justify-center text-[10px] font-bold">✓</span>
            </div>
            <h4 className="font-display font-bold text-sm text-gray-900">Wireframing &amp; Information Flow</h4>
            <p className="text-base text-gray-500 mt-2 leading-relaxed">Building low-fidelity wireframes to validate hierarchy, CTAs, and content layout.</p>
          </div>
          <div data-anim="fade-up" data-delay={3} className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm relative group hover:border-brand-300 transition">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-bold text-purple-400">STAGE 03</span>
              <span className="w-7 h-7 rounded-lg bg-purple-50 text-brand-600 flex items-center justify-center text-[10px] font-bold">✓</span>
            </div>
            <h4 className="font-display font-bold text-sm text-gray-900">Design System &amp; High-Fi UI</h4>
            <p className="text-base text-gray-500 mt-2 leading-relaxed">Crafting token palettes, typography, components, and responsive mobile/desktop screens.</p>
          </div>
          <div data-anim="fade-up" data-delay={4} className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm relative group hover:border-brand-300 transition">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-bold text-purple-400">STAGE 04</span>
              <span className="w-7 h-7 rounded-lg bg-purple-50 text-brand-600 flex items-center justify-center text-[10px] font-bold">✓</span>
            </div>
            <h4 className="font-display font-bold text-sm text-gray-900">Interactive Prototype &amp; Handoff</h4>
            <p className="text-base text-gray-500 mt-2 leading-relaxed">Connecting interactions, running user walkthroughs, and exporting organized dev specs.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12" data-anim="fade-up">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-600 block mb-2">SERVICE SPECIFICATIONS</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight">
            Technical Deliverables &amp; Standards
          </h2>
        </div>
        <div className="bg-white rounded-3xl border border-purple-100 shadow-md overflow-hidden" data-anim="fade-up">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-purple-100 bg-purple-50/60">
                <th className="py-4 px-5 font-bold text-gray-700 uppercase tracking-wider text-[10px]">Specification / Deliverable</th>
                <th className="py-4 px-5 font-bold text-brand-700 uppercase tracking-wider text-[10px]">Yankee Tech Deliverable</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-50">
              <tr>
                <td className="py-3.5 px-5 font-semibold text-gray-900">Design Tool</td>
                <td className="py-3.5 px-5 font-mono font-bold text-brand-700 bg-purple-50/40">Figma (Auto-Layout 5.0 &amp; Variables)</td>
              </tr>
              <tr>
                <td className="py-3.5 px-5 font-semibold text-gray-900">Design System Paradigm</td>
                <td className="py-3.5 px-5 font-mono font-bold text-brand-700 bg-purple-50/40">Atomic Design (Tokens, Atoms, Molecules)</td>
              </tr>
              <tr>
                <td className="py-3.5 px-5 font-semibold text-gray-900">CSS Framework Match</td>
                <td className="py-3.5 px-5 font-mono font-bold text-brand-700 bg-purple-50/40">1:1 Tailwind CSS Utility Tokens</td>
              </tr>
              <tr>
                <td className="py-3.5 px-5 font-semibold text-gray-900">Screen Breakpoints</td>
                <td className="py-3.5 px-5 font-mono font-bold text-brand-700 bg-purple-50/40">Mobile (375px), Tablet (768px), Desktop (1440px)</td>
              </tr>
              <tr>
                <td className="py-3.5 px-5 font-semibold text-gray-900">Handoff Assets</td>
                <td className="py-3.5 px-5 font-mono font-bold text-brand-700 bg-purple-50/40">Complete Figma file ownership with dev inspect mode</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <section className="py-16 bg-[#faf8ff] border-t border-purple-100/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10" data-anim="fade-up">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-600 block mb-2">QUESTIONS &amp; ANSWERS</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-3" data-anim="fade-up">
          <div className="p-4 rounded-2xl border border-purple-100 bg-purple-50/20">
            <button type="button" onClick={(event) => { window.toggleFaq(0); }} className="w-full flex items-center justify-between text-left text-xs sm:text-sm font-bold text-gray-900">
              <span>Do you provide the complete Figma source file upon completion?</span>
              <i id="faq-icon-0" className="fa-solid fa-plus text-xs text-gray-400 shrink-0 ml-2 transition-transform" />
            </button>
            <div id="faq-body-0" className=" pt-3 text-xs text-gray-600 leading-relaxed border-t border-purple-100/80 mt-2.5">
              Yes! You receive 100% ownership of the Figma project file, including all vector icons, component variants, style libraries, and prototype links.
            </div>
          </div>
          <div className="p-4 rounded-2xl border border-purple-100 bg-purple-50/20">
            <button type="button" onClick={(event) => { window.toggleFaq(1); }} className="w-full flex items-center justify-between text-left text-xs sm:text-sm font-bold text-gray-900">
              <span>Can your team also code the design once approved?</span>
              <i id="faq-icon-1" className="fa-solid fa-plus text-xs text-gray-400 shrink-0 ml-2 transition-transform" />
            </button>
            <div id="faq-body-1" className="hidden pt-3 text-xs text-gray-600 leading-relaxed border-t border-purple-100/80 mt-2.5">
              Yes! That is our core advantage. Because our designers understand code, we build designs that transition into pixel-perfect Tailwind HTML or React code with zero drift.
            </div>
          </div>
          <div className="p-4 rounded-2xl border border-purple-100 bg-purple-50/20">
            <button type="button" onClick={(event) => { window.toggleFaq(2); }} className="w-full flex items-center justify-between text-left text-xs sm:text-sm font-bold text-gray-900">
              <span>How many rounds of revisions are included?</span>
              <i id="faq-icon-2" className="fa-solid fa-plus text-xs text-gray-400 shrink-0 ml-2 transition-transform" />
            </button>
            <div id="faq-body-2" className="hidden pt-3 text-xs text-gray-600 leading-relaxed border-t border-purple-100/80 mt-2.5">
              We include two comprehensive revision cycles at the wireframe stage and two revision cycles at the high-fidelity UI stage to ensure complete visual satisfaction.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 dark-cosmic-bg text-white relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-20 right-1/4 w-96 h-96 bg-brand-600/30 rounded-full blur-3xl" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6" data-anim="fade-up">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-400/30 text-purple-200 text-[10px] font-extrabold uppercase tracking-widest">
          LET'S BUILD SOMETHING EXTRAORDINARY
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
          Ready to Start Your UI/UX Figma Design Systems &amp; Conversion Prototyping?
        </h2>
        <p className="text-base text-base text-purple-200/80 max-w-2xl mx-auto leading-relaxed">
          Get an instant price estimate with our live calculator or schedule a 30-minute discovery call with our senior architects.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a href="/index.html#estimator" onClick={(event) => { window.selectEstimatorPreset('wordpress'); }} className="btn-purple magnetic-btn text-white text-xs font-semibold px-7 py-3.5 rounded-full inline-flex items-center gap-2 shadow-glow">
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
