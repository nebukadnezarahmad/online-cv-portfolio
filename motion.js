'use strict';

(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const desktop = window.matchMedia('(min-width: 1100px) and (min-height: 700px) and (pointer: fine)');
  const experience = document.querySelector('#pengalaman');
  const scrollRegion = experience.querySelector('.experience-scroll');
  const stage = experience.querySelector('.experience-stage');
  const track = experience.querySelector('.experience-layout');
  const cards = [...track.querySelectorAll('.timeline-item')];
  const controls = experience.querySelector('.experience-controls');
  const position = controls.querySelector('.experience-position');
  const previous = controls.querySelector('[data-experience="previous"]');
  const next = controls.querySelector('[data-experience="next"]');
  const portrait = document.querySelector('.profile-visual');
  const hero = document.querySelector('.hero');
  const progressBar = document.querySelector('.reading-progress span');
  const summary = document.querySelector('.about-copy p');
  let distance = 0;
  let start = 0;
  let frame = 0;
  let active = -1;
  let wordNodes = [];
  let summaryStart = 0;
  let summaryEnd = 1;
  let revealObserver;
  const clamp = (value) => Math.min(1, Math.max(0, value));

  function setupSummary() {
    if (wordNodes.length) return;
    const text = summary.textContent;
    const words = document.createElement('span');
    words.className = 'summary-words';
    words.setAttribute('aria-hidden', 'true');
    text.split(/(\s+)/).forEach((word) => {
      if (!word.trim()) words.append(document.createTextNode(word));
      else {
        const span = document.createElement('span');
        span.textContent = word;
        words.append(span);
        wordNodes.push(span);
      }
    });
    const accessibleText = document.createElement('span');
    accessibleText.className = 'visually-hidden';
    accessibleText.textContent = text;
    summary.replaceChildren(accessibleText, words);
  }

  function updatePosition(index) {
    if (index === active) return;
    active = index;
    position.textContent = `${index + 1} / ${cards.length}`;
    previous.disabled = index === 0;
    next.disabled = index === cards.length - 1;
  }

  function measure() {
    const cinematic = desktop.matches && !reducedMotion.matches;
    experience.classList.toggle('cinematic-experience', cinematic);
    controls.hidden = !cinematic;
    distance = cinematic ? Math.max(0, track.scrollWidth - stage.clientWidth) : 0;
    scrollRegion.style.setProperty('--rail-distance', `${distance}px`);
    start = scrollRegion.getBoundingClientRect().top + window.scrollY - 104;
    const summaryBounds = summary.getBoundingClientRect();
    summaryStart = summaryBounds.top + window.scrollY - window.innerHeight * .82;
    summaryEnd = summaryBounds.bottom + window.scrollY - window.innerHeight * .32;
    if (!cinematic) track.style.removeProperty('transform');
    update();
  }

  function update() {
    frame = 0;
    const scroll = window.scrollY;
    const pageDistance = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.transform = `scaleX(${pageDistance > 0 ? clamp(scroll / pageDistance) : 0})`;
    if (distance) {
      const progress = clamp((scroll - start) / distance);
      track.style.transform = `translate3d(${-progress * distance}px, 0, 0)`;
      const index = Math.min(cards.length - 1, Math.round(progress * distance / (cards[1].offsetLeft - cards[0].offsetLeft)));
      updatePosition(index);
    }
    if (!reducedMotion.matches) {
      const heroProgress = clamp(scroll / Math.max(1, hero.offsetHeight));
      portrait.style.transform = desktop.matches ? `translate3d(0, ${heroProgress * -40}px, 0) rotate(${heroProgress * -1.5}deg)` : '';
      const wordProgress = clamp((scroll - summaryStart) / Math.max(1, summaryEnd - summaryStart));
      wordNodes.forEach((word, index) => word.classList.toggle('is-read', wordProgress >= index / wordNodes.length));
    }
  }

  function requestUpdate() {
    if (!frame) frame = window.requestAnimationFrame(update);
  }

  function jump(direction) {
    if (!distance) return;
    const index = Math.min(cards.length - 1, Math.max(0, active + direction));
    const offset = Math.min(distance, cards[index].offsetLeft - cards[0].offsetLeft);
    window.scrollTo({ top: start + offset, behavior: 'smooth' });
  }
  previous.addEventListener('click', () => jump(-1));
  next.addEventListener('click', () => jump(1));

  function configureReveals() {
    if (revealObserver) revealObserver.disconnect();
    document.querySelectorAll('.motion-pending').forEach((element) => element.classList.remove('motion-pending'));
    document.documentElement.classList.toggle('motion-enabled', !reducedMotion.matches);
    if (reducedMotion.matches) {
      portrait.style.removeProperty('transform');
      wordNodes.forEach((word) => word.classList.add('is-read'));
      return;
    }
    if (!('IntersectionObserver' in window)) return;
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('motion-pending');
        entry.target.classList.add('motion-seen');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: .08, rootMargin: '0px 0px -24px 0px' });
    document.querySelectorAll('.section-heading, .education-card, .skills-grid > article, .website-card, .work-card, .award-list > article, .contact-intro, .contact-form').forEach((element, index) => {
      element.classList.add('motion-item');
      if (element.classList.contains('motion-seen')) return;
      element.style.setProperty('--reveal-delay', `${(index % 2) * 70}ms`);
      element.classList.add('motion-pending');
      revealObserver.observe(element);
    });
  }

  document.addEventListener('focusin', (event) => {
    const item = event.target.closest('.motion-item');
    if (item) item.classList.remove('motion-pending');
  });
  document.querySelectorAll('[data-filter]').forEach((button) => button.addEventListener('click', () => {
    document.querySelectorAll('.website-card:not([hidden])').forEach((card) => card.classList.remove('motion-pending'));
    measure();
  }));
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', measure);
  desktop.addEventListener('change', measure);
  reducedMotion.addEventListener('change', () => { configureReveals(); measure(); });
  setupSummary();
  configureReveals();
  measure();
  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    observer.observe(summary);
  }
  window.addEventListener('load', measure, { once: true });
})();
