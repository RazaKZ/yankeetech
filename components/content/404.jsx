export default function PageContent() {
  return (
<div>
  <main className="flex-1 flex items-center justify-center py-20 px-4 relative overflow-hidden">
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl pointer-events-none" />
    <div className="max-w-2xl mx-auto text-center relative z-10 space-y-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-mono font-bold uppercase tracking-widest">
        <span>ERROR 404 • ROUTE NOT FOUND</span>
      </div>
      <h1 className="font-display font-extrabold text-6xl sm:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">
        404
      </h1>
      <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
        This platform page is off the grid
      </h2>
      <p className="text-base text-base text-purple-200/80 max-w-md mx-auto leading-relaxed">
        The link you followed may have moved or no longer exists. Let's get you back to our active digital ecosystem.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
        <a href="/index.html#home" className="btn-purple text-white text-xs font-semibold px-6 py-3.5 rounded-full inline-flex items-center gap-2 shadow-glow">
          <i className="fa-solid fa-house text-xs" />
          <span>Return Home</span>
        </a>
        <a href="/services.html" className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-5 py-3.5 rounded-full inline-flex items-center gap-2 transition border border-purple-400/20">
          <i className="fa-solid fa-layer-group text-xs" />
          <span>View Services</span>
        </a>
        <a href="/portfolio.html" className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-5 py-3.5 rounded-full inline-flex items-center gap-2 transition border border-purple-400/20">
          <i className="fa-solid fa-folder-open text-xs" />
          <span>View Portfolio</span>
        </a>
        <a href="/index.html#estimator" className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-5 py-3.5 rounded-full inline-flex items-center gap-2 transition border border-purple-400/20">
          <i className="fa-solid fa-calculator text-xs" />
          <span>Project Estimator</span>
        </a>
      </div>
    </div>
  </main>
  
</div>

  );
}
