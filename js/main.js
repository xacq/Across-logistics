const menuToggle = document.querySelector('[data-menu-toggle]');
const siteNav = document.querySelector('[data-site-nav]');
const submenuTriggers = document.querySelectorAll('[data-submenu-trigger]');
const navLinks = document.querySelectorAll('.site-nav a');

const desktopQuery = window.matchMedia('(min-width: 1080px)');

function isDesktop() {
  return desktopQuery.matches;
}

function closeSubmenus() {
  submenuTriggers.forEach((trigger) => {
    const item = trigger.closest('.site-nav__item--has-menu');

    if (!item) return;

    item.classList.remove('is-submenu-open');
    trigger.setAttribute('aria-expanded', 'false');
  });
}

function closeMobileMenu() {
  if (!menuToggle || !siteNav) return;

  siteNav.classList.remove('is-open');
  menuToggle.classList.remove('is-active');
  menuToggle.setAttribute('aria-expanded', 'false');

  closeSubmenus();
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');

    menuToggle.classList.toggle('is-active', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));

    if (!isOpen) {
      closeSubmenus();
    }
  });
}

submenuTriggers.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const item = trigger.closest('.site-nav__item--has-menu');

    if (!item) return;

    if (isDesktop()) {
      /*
        Desktop uses hover, not click.
        This prevents dropdowns from staying anchored after clicking a trigger.
      */
      trigger.blur();
      closeSubmenus();
      return;
    }

    const isOpen = item.classList.contains('is-submenu-open');

    closeSubmenus();

    item.classList.toggle('is-submenu-open', !isOpen);
    trigger.setAttribute('aria-expanded', String(!isOpen));
  });
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeMobileMenu();
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMobileMenu();
    closeSubmenus();
  }
});

document.addEventListener('click', (event) => {
  const target = event.target;

  if (!(target instanceof Element)) return;

  const clickedInsideHeader = target.closest('.site-header');

  if (!clickedInsideHeader && !isDesktop()) {
    closeMobileMenu();
  }

  if (!clickedInsideHeader && isDesktop()) {
    closeSubmenus();
  }
});

desktopQuery.addEventListener('change', () => {
  closeMobileMenu();
  closeSubmenus();
});


window.addEventListener('resize', () => {
  if (window.innerWidth >= 1080) {
    closeMobileMenu();

    document.querySelectorAll('.site-nav__item.is-submenu-open').forEach((item) => {
      item.classList.remove('is-submenu-open');
    });

    document.querySelectorAll('[data-submenu-trigger]').forEach((trigger) => {
      trigger.setAttribute('aria-expanded', 'false');
    });
  }
});