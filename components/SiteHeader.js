import { useState } from 'react';
const links = [
  ['/services.html', 'Services'],
  ['/portfolio.html', 'Our work'],
  ['/about.html', 'About us'],
  ['/index.html#blog', 'Insights']
];
export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <header className="studio-header" onKeyDown={(event) => { if (event.key === 'Escape') setMenuOpen(false); }}>
    <div className="studio-container studio-nav">
      <a className="studio-brand" href="/" aria-label="Yankee Tech home">
        <span className="studio-logo">yt<span>.</span></span><span>Yankee Tech</span>
      </a>
      <nav className="studio-desktop-nav" aria-label="Main navigation">
        {links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <a href="/index.html#contact" className="studio-nav-cta">Let's talk</a>
      <button id="mobileMenuBtn" className="studio-menu-button" type="button" aria-label="Toggle navigation" aria-controls="mobileMenu" aria-expanded={menuOpen} onClick={() => setMenuOpen(open => !open)}>
        <i className="fa-solid fa-bars" aria-hidden="true" />
      </button>
    </div>
    <nav id="mobileMenu" className={`${menuOpen ? '' : 'hidden '}studio-mobile-nav`} onClick={() => setMenuOpen(false)} aria-label="Mobile navigation">
      {links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
      <a href="/use-cases.html">Use cases</a>
      <a href="/index.html#contact">Let's talk</a>
    </nav>
  </header>;
}
