const menuToggle = document.querySelector('[data-menu-toggle]');
const siteNav = document.querySelector('[data-site-nav]');
const submenuTriggers = document.querySelectorAll('[data-submenu-trigger]');
const submenuItems = document.querySelectorAll('.site-nav__item--has-menu');
const navLinks = document.querySelectorAll('.site-nav a');

const desktopQuery = window.matchMedia('(min-width: 1080px)');

function isDesktop() {
  return desktopQuery.matches;
}

function setSubmenuState(item, isOpen) {
  const trigger = item.querySelector('[data-submenu-trigger]');

  item.classList.toggle('is-submenu-open', isOpen);

  if (trigger) {
    trigger.setAttribute('aria-expanded', String(isOpen));
  }
}

function closeSubmenus(exceptItem = null) {
  submenuItems.forEach((item) => {
    if (item !== exceptItem) {
      setSubmenuState(item, false);
    }
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
        Desktop exposes dropdowns through hover and focus-within.
        Click only refreshes the ARIA state and avoids sticky menus.
      */
      closeSubmenus(item);
      setSubmenuState(item, true);
      trigger.blur();
      return;
    }

    const shouldOpen = !item.classList.contains('is-submenu-open');

    closeSubmenus(item);
    setSubmenuState(item, shouldOpen);
  });
});

submenuItems.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    if (isDesktop()) {
      closeSubmenus(item);
      setSubmenuState(item, true);
    }
  });

  item.addEventListener('mouseleave', () => {
    if (isDesktop()) {
      setSubmenuState(item, false);
    }
  });

  item.addEventListener('focusin', () => {
    if (isDesktop()) {
      closeSubmenus(item);
      setSubmenuState(item, true);
    }
  });

  item.addEventListener('focusout', (event) => {
    if (isDesktop() && !item.contains(event.relatedTarget)) {
      setSubmenuState(item, false);
    }
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
