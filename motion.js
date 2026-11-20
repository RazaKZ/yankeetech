/* Homepage motion scene. The scroll position drives the camera and typography. */
(() => {
  const hero = document.querySelector('.cinema-hero');
  const canvas = document.getElementById('cinemaCanvas');
  if (!hero || !canvas) return;

  const context = canvas.getContext('2d');
  if (!context) return;
  const stage = hero.querySelector('.cinema-stage');
  const copy = hero.querySelector('.cinema-copy');
  const secondScene = hero.querySelector('.cinema-second');
  const toggle = hero.querySelector('.cinema-motion-toggle');
  const typeBand = document.querySelector('.cinema-type-band');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const desktop = matchMedia('(min-width: 901px)');
  const pointer = { x: 0, y: 0 };
  let width = 0;
  let height = 0;
  let sceneProgress = 0;
  let phase = 0;
  let lastTime = 0;
  let frame = 0;
  let inView = true;
  let paused = reducedMotion.matches;
  let scrollFrame = 0;

  const clamp = value => Math.max(0, Math.min(1, value));
  const rings = [];
  // A twisted toroidal surface rendered as luminous contour lines.
  for (let strand = 0; strand < 22; strand++) {
    const points = [];
    const v = strand / 22 * Math.PI * 2;
    for (let segment = 0; segment <= 150; segment++) {
      const u = segment / 150 * Math.PI * 2;
      const twist = v + u * 3;
      const radius = 1.75 + .58 * Math.cos(twist);
      points.push({
        x: radius * Math.cos(u),
        y: .58 * Math.sin(twist),
        z: radius * Math.sin(u)
      });
    }
    rings.push(points);
  }

  function draw() {
    context.clearRect(0, 0, width, height);
    const yaw = phase * .18 + sceneProgress * 3.3 + pointer.x * .18;
    const pitch = .65 + Math.sin(phase * .13) * .2 + sceneProgress * .8 + pointer.y * .12;
    const scale = Math.min(width, height) * .19;
    const cosY = Math.cos(yaw);
    const sinY = Math.sin(yaw);
    const cosX = Math.cos(pitch);
    const sinX = Math.sin(pitch);

    const glow = context.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, scale * 3);
    glow.addColorStop(0, 'rgba(132, 67, 230, .18)');
    glow.addColorStop(1, 'rgba(132, 67, 230, 0)');
    context.fillStyle = glow;
    context.fillRect(0, 0, width, height);

    rings.forEach((points, index) => {
      context.beginPath();
      points.forEach((point, pointIndex) => {
        const x = point.x * cosY - point.z * sinY;
        const depth = point.x * sinY + point.z * cosY;
        const y = point.y * cosX - depth * sinX;
        const z = point.y * sinX + depth * cosX;
        const perspective = 6 / (6 + z);
        const px = width / 2 + x * scale * perspective;
        const py = height / 2 + y * scale * perspective;
        if (pointIndex === 0) context.moveTo(px, py);
        else context.lineTo(px, py);
      });
      context.strokeStyle = index % 4 === 0 ? 'rgba(217, 194, 255, .85)' : 'rgba(153, 100, 255, .5)';
      context.lineWidth = index % 4 === 0 ? 1.7 : 1;
      context.stroke();
    });
  }

  function animate(time) {
    frame = 0;
    if (paused || reducedMotion.matches || !inView || document.hidden) return;
    if (lastTime) phase += Math.min((time - lastTime) / 1000, .05);
    lastTime = time;
    draw();
    frame = requestAnimationFrame(animate);
  }

  function resume() {
    lastTime = 0;
    if (!frame && !paused && !reducedMotion.matches && inView && !document.hidden) {
      frame = requestAnimationFrame(animate);
    }
  }

  function updateScroll() {
    scrollFrame = 0;
    const bounds = hero.getBoundingClientRect();
    const travel = hero.offsetHeight - stage.offsetHeight;
    const enabled = desktop.matches && !reducedMotion.matches && !paused;
    sceneProgress = enabled ? clamp((88 - bounds.top) / Math.max(1, travel)) : 0;
    const exit = clamp(sceneProgress / .55);
    const enter = clamp((sceneProgress - .42) / .35);
    hero.style.setProperty('--scene-progress', sceneProgress);
    hero.style.setProperty('--copy-y', `${exit * -100}px`);
    hero.style.setProperty('--copy-opacity', 1 - exit);
    hero.style.setProperty('--art-x', `${sceneProgress * -27}%`);
    hero.style.setProperty('--art-scale', 1 + sceneProgress * .45);
    hero.style.setProperty('--second-opacity', enter);
    hero.style.setProperty('--second-y', `${(1 - enter) * 70}px`);
    // The fading scene must not leave invisible links in the keyboard sequence.
    copy.inert = exit > .95;
    secondScene.setAttribute('aria-hidden', String(enter < .5));
    const bandBounds = typeBand.getBoundingClientRect();
    const bandProgress = clamp((innerHeight - bandBounds.top) / (innerHeight + bandBounds.height));
    typeBand.style.setProperty('--type-x', enabled ? `${-12 + bandProgress * 12}%` : '0%');
    if (!frame) draw();
  }

  function scheduleScroll() {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScroll);
  }

  function resize() {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    const ratio = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    updateScroll();
    draw();
  }

  function applyPreference() {
    paused = reducedMotion.matches;
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.textContent = paused ? 'Motion paused' : 'Pause motion';
    resize();
    resume();
  }

  toggle.addEventListener('click', () => {
    paused = !paused;
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.textContent = paused ? 'Resume motion' : 'Pause motion';
    updateScroll();
    resume();
  });
  hero.addEventListener('pointermove', event => {
    if (event.pointerType !== 'mouse' || reducedMotion.matches || paused) return;
    pointer.x = event.clientX / innerWidth - .5;
    pointer.y = event.clientY / innerHeight - .5;
  });
  hero.addEventListener('pointerleave', () => { pointer.x = 0; pointer.y = 0; });
  window.addEventListener('scroll', scheduleScroll, { passive: true });
  window.addEventListener('resize', resize, { passive: true });
  document.addEventListener('visibilitychange', resume);
  reducedMotion.addEventListener('change', applyPreference);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting;
      resume();
    }).observe(hero);
  }
  document.documentElement.classList.add('cinema-ready', 'canvas-ready');
  resize();
  applyPreference();
})();
