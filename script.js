'use strict';

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}

menuButton.hidden = false;
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(expanded));
  navigation.classList.toggle('is-open', expanded);
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.site-header')) closeMenu();
});
window.matchMedia('(min-width: 901px)').addEventListener('change', closeMenu);
document.documentElement.classList.add('has-menu');

const projectCards = [...document.querySelectorAll('.website-card')];
const filters = document.querySelectorAll('[data-filter]');
const categories = new Map([
  ['Proyek lomba', 'competition'],
  ['Alat bantu pekerjaan', 'tools'],
  ['Freelance & pekerjaan', 'work'],
]);

filters.forEach((button) => {
  button.addEventListener('click', () => {
    let visibleCount = 0;
    projectCards.forEach((card) => {
      const category = categories.get(card.querySelector('.category').textContent.trim());
      const visible = button.dataset.filter === 'all' || button.dataset.filter === category;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    filters.forEach((filter) => filter.setAttribute('aria-pressed', String(filter === button)));
    document.querySelector('.project-count').textContent = `${visibleCount} proyek`;
  });
});
document.querySelector('.project-toolbar').hidden = false;

if ('IntersectionObserver' in window) {
  const links = [...navigation.querySelectorAll('a')];
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting);
    if (!visible.length) return;
    const section = visible[visible.length - 1].target;
    links.forEach((link) => {
      if (link.hash === `#${section.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-18% 0px -60% 0px', threshold: 0 });
  links.forEach((link) => {
    const section = document.querySelector(link.hash);
    if (section) observer.observe(section);
  });
}

const artworkDialog = document.querySelector('.art-dialog');
if (typeof artworkDialog.showModal === 'function') {
  let artworkTrigger = null;
  document.querySelectorAll('.work-image').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      artworkTrigger = link;
      const card = link.closest('.work-card');
      const image = artworkDialog.querySelector('img');
      image.src = link.href;
      image.alt = link.querySelector('img').alt;
      artworkDialog.querySelector('h2').textContent = card.querySelector('h3').textContent;
      artworkDialog.querySelector('.art-dialog-caption').textContent = card.querySelector('.work-copy p:last-child').textContent;
      artworkDialog.showModal();
    });
  });
  artworkDialog.querySelector('.dialog-close').addEventListener('click', () => artworkDialog.close());
  artworkDialog.addEventListener('close', () => {
    if (artworkTrigger) artworkTrigger.focus({ preventScroll: true });
  });
  artworkDialog.addEventListener('click', (event) => {
    const bounds = artworkDialog.getBoundingClientRect();
    if (event.target === artworkDialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) artworkDialog.close();
  });
}
