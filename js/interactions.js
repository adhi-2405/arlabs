/**
 * AR LABS — Interactive Experiences & UI Controls
 * Handles Copy-to-clipboard, Accordions, Toasts, Modals, Downloads, and Search/Filters
 */

// Toast notification helper
function showToast(message, type = 'info', duration = 3500) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let iconSvg = '';
  if (type === 'success') {
    iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
  } else {
    iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
  }

  toast.innerHTML = `
    ${iconSvg}
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-out');
    toast.addEventListener('animationend', () => {
      toast.remove();
    });
  }, duration);
}

// Copy text to clipboard with button state feedback
function copyToClipboard(text, buttonElement) {
  if (!text) return;
  
  navigator.clipboard.writeText(text).then(() => {
    showToast('Copied to clipboard!', 'success');
    if (buttonElement) {
      const originalText = buttonElement.innerHTML;
      buttonElement.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>Copied!</span>
      `;
      buttonElement.style.color = '#10b981';
      buttonElement.style.borderColor = '#10b981';
      
      setTimeout(() => {
        buttonElement.innerHTML = originalText;
        buttonElement.style.color = '';
        buttonElement.style.borderColor = '';
      }, 2000);
    }
  }).catch(err => {
    console.error('Clipboard copy failed:', err);
    showToast('Failed to copy. Please select manually.', 'info');
  });
}

// Generic Download Trigger Handler
function triggerDownload(url, filename = 'stream-clips-skill.zip') {
  if (!url) {
    showComingSoonModal(filename);
    return;
  }

  showToast(`Downloading ${filename}...`, 'success');
  
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// Coming Soon notification modal
function showComingSoonModal(resourceTitle) {
  const modalOverlay = document.getElementById('coming-soon-modal');
  if (modalOverlay) {
    const titleEl = modalOverlay.querySelector('.modal-resource-name');
    if (titleEl) titleEl.textContent = resourceTitle || 'This Resource';
    modalOverlay.classList.add('open');
  } else {
    showToast(`${resourceTitle || 'Resource'} is currently in testing and coming soon!`, 'info');
  }
}

function closeComingSoonModal() {
  const modalOverlay = document.getElementById('coming-soon-modal');
  if (modalOverlay) {
    modalOverlay.classList.remove('open');
  }
}

// Initialize Interactive Accordion components
function initAccordions() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion-item');
      if (item) {
        item.classList.toggle('open');
      }
    });
  });
}

// Setup Copy Buttons on Code Blocks
function initCopyButtons() {
  document.querySelectorAll('.btn-copy-code').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-copy-target');
      let textToCopy = '';
      if (targetId) {
        const targetEl = document.getElementById(targetId);
        if (targetEl) textToCopy = targetEl.textContent.trim();
      } else {
        const pre = btn.closest('.code-block-container')?.querySelector('code, pre');
        if (pre) textToCopy = pre.textContent.trim();
      }
      copyToClipboard(textToCopy, btn);
    });
  });
}

// Mobile Menu Drawer Handler
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
      const isOpen = navLinks.classList.contains('mobile-open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close when clicking nav links
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }
}

// Header scroll elevation
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

// Table of Contents Active Section Tracker
function initTocTracker() {
  const links = document.querySelectorAll('.toc-link');
  if (!links.length) return;

  const sections = [];
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      const section = document.querySelector(href);
      if (section) sections.push({ link, section });
    }
  });

  if (!sections.length) return;

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 140;
    let current = null;

    for (const item of sections) {
      if (item.section.offsetTop <= scrollPos) {
        current = item;
      }
    }

    links.forEach(l => l.classList.remove('active'));
    if (current) {
      current.link.classList.add('active');
    }
  }, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
  initAccordions();
  initCopyButtons();
  initMobileMenu();
  initHeaderScroll();
  initTocTracker();
});
