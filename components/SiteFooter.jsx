export default function SiteFooter() {
  return (
<footer suppressHydrationWarning className="dark-cosmic-bg text-white pt-16 pb-10 rounded-t-[36px] relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-purple-400/30 flex items-center justify-center">
              <span className="font-display font-extrabold text-lg bg-gradient-to-tr from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">YT</span>
            </div>
            <div className="leading-none">
              <span className="block font-display font-extrabold text-lg text-white">Yankee Tech</span>
              <span className="block text-[10px] text-purple-300/70 uppercase tracking-wider mt-0.5">Infinite
                Possibilities</span>
            </div>
          </div>
          <p className="text-base text-purple-200/70 leading-relaxed max-w-xs">
            Building high-performing full-stack websites, automating business operations with AI, and integrating
            GoHighLevel &amp; WordPress ecosystems worldwide.
          </p>
          <div className="flex items-center gap-2.5 pt-1">
            <a href="/index.html#contact" className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-600 flex items-center justify-center text-xs transition" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></a>
            <a href="/index.html#contact" className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-600 flex items-center justify-center text-xs transition" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in" /></a>
            <a href="/index.html#contact" className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-600 flex items-center justify-center text-xs transition" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a>
            <a href="/index.html#contact" className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-600 flex items-center justify-center text-xs transition" aria-label="YouTube"><i className="fa-brands fa-youtube" /></a>
          </div>
        </div>
        <div className="lg:col-span-2 space-y-2.5">
          <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-xs text-purple-200/75">
            <li><a href="/index.html#home" className="hover:text-white transition">Home</a></li>
            <li><a href="/about.html" className="hover:text-white transition">About Us</a></li>
            <li><a href="/services.html" className="hover:text-white transition">Services</a></li>
            <li><a href="/use-cases.html" className="hover:text-white transition">Use Cases</a></li>
            <li><a href="/index.html#estimator" className="hover:text-white transition">Price Estimator</a></li>
            <li><a href="/index.html#contact" className="hover:text-white transition">Contact Us</a></li>
          </ul>
        </div>
        <div className="lg:col-span-3 space-y-2.5">
          <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white mb-3">Our Services</h4>
          <ul className="space-y-2 text-xs text-purple-200/75">
            <li><a href="/services.html#wordpress" className="hover:text-white transition">WordPress &amp; WooCommerce</a>
            </li>
            <li><a href="/services.html#fullstack" className="hover:text-white transition">Full-Stack Laravel &amp; React</a>
            </li>
            <li><a href="/services.html#ghl" className="hover:text-white transition">GoHighLevel (GHL) Setup</a></li>
            <li><a href="/services.html#ai" className="hover:text-white transition">AI Agents &amp; Chatbots</a></li>
            <li><a href="/services.html#sync" className="hover:text-white transition">2-Way GHL + WP Sync</a></li>
            <li><a href="/services.html#design" className="hover:text-white transition">UI/UX Figma Design Systems</a></li>
          </ul>
        </div>
        <div className="lg:col-span-3 space-y-3">
          <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">Newsletter</h4>
          <p className="text-base text-purple-200/75">Get the latest web engineering, GHL &amp; AI automation insights.</p>
          <form onSubmit={(event) => { window.handleNewsletter(event); }} className="space-y-2.5 pt-1">
            <input id="newsletterEmail" type="email" required placeholder="Your Email" className="w-full px-4 py-2.5 rounded-xl bg-white text-gray-900 text-base focus:outline-none" />
            <button type="submit" className="w-full btn-purple text-white text-xs font-semibold py-2.5 px-5 rounded-xl inline-flex items-center justify-center gap-2">
              <span id="newsletterBtnText">Subscribe →</span>
            </button>
          </form>
        </div>
      </div>
      <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-purple-300/60 gap-4">
        <p>© 2026 Yankee Tech. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="/privacy-policy.html" className="hover:text-white transition">Privacy Policy</a>
          <span>|</span>
          <a href="/terms.html" className="hover:text-white transition">Terms of Service</a>
        </div>
      </div>
    </div>
    <a href="/index.html#home" id="scrollTopBtn" className="fixed bottom-5 right-5 z-40 w-10 h-10 rounded-full bg-[#1e0a42] hover:bg-brand-600 text-white border border-purple-400/40 shadow-lg flex items-center justify-center text-xs transition" aria-label="Back to top">
      <i className="fa-solid fa-arrow-up" />
    </a>
  </footer>
  );
}
