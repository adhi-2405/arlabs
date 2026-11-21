/**
 * AR LABS — Main Application Controller
 * Handles dynamic card rendering for homepage and resource library page
 */

// Generate HTML for a single resource card
function renderResourceCard(item) {
  const isAvailable = item.status === 'available';
  const badgeClass = isAvailable ? 'live' : 'upcoming';
  const badgeText = isAvailable ? 'AVAILABLE · FREE' : 'IN DEVELOPMENT';

  return `
    <article class="resource-card ${isAvailable ? 'featured-badge-highlight' : ''}" data-category="${item.categorySlug}" data-id="${item.id}">
      <div class="card-media">
        <img src="${item.thumbnail}" alt="${item.title}" loading="lazy" />
        <span class="card-status-pill ${badgeClass}">${badgeText}</span>
      </div>
      <div class="card-body">
        <div class="card-category-row">
          <span class="card-category">${item.category}</span>
          <div class="card-meta-badges">
            <span class="meta-chip">${item.format}</span>
            <span class="meta-chip">${item.version}</span>
          </div>
        </div>
        <h3 class="card-title">${item.title}</h3>
        <p class="card-desc">${item.description}</p>
        <div class="card-footer">
          ${isAvailable 
            ? `<button class="btn btn-primary btn-sm btn-download-trigger" onclick="triggerDownload('${item.downloadUrl}', '${item.slug}.zip')">
                 <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                 Download File
               </button>
               <a href="${item.detailsUrl}" class="btn btn-secondary btn-sm">Guide</a>`
            : `<button class="btn btn-secondary btn-sm" onclick="showComingSoonModal('${item.title}')">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                 Coming Soon
               </button>
               <button class="btn btn-secondary btn-sm" onclick="showComingSoonModal('${item.title}')">Notify Me</button>`
          }
        </div>
      </div>
    </article>
  `;
}

// Initialize Resource Library Page (with search & filter pills)
function initResourceLibrary() {
  const container = document.getElementById('resources-library-grid');
  if (!container) return;

  const searchInput = document.getElementById('resource-search-input');
  const clearBtn = document.getElementById('search-clear-btn');
  const filterPills = document.querySelectorAll('.filter-pill');
  const countEl = document.getElementById('results-count-text');

  let activeCategory = 'all';
  let activeSearch = '';

  function render() {
    let items = ResourceStore.getAll();

    // Category filter
    if (activeCategory !== 'all') {
      items = items.filter(r => r.categorySlug === activeCategory);
    }

    // Search filter
    if (activeSearch.trim()) {
      const q = activeSearch.toLowerCase().trim();
      items = items.filter(r => 
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q) ||
        r.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    if (items.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #ffffff; border-radius: 18px; border: 1px dashed var(--border-light);">
          <svg style="margin: 0 auto 16px; color: var(--text-muted);" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <h3 style="margin-bottom: 8px;">No resources found</h3>
          <p style="color: var(--text-muted);">Try searching with different keywords or switch the category filter.</p>
        </div>
      `;
    } else {
      container.innerHTML = items.map(renderResourceCard).join('');
    }

    if (countEl) {
      countEl.textContent = `Showing ${items.length} ${items.length === 1 ? 'resource' : 'resources'}`;
    }
  }

  // Pill filter clicks
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.getAttribute('data-category') || 'all';
      render();
    });
  });

  // Search input typing
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      activeSearch = e.target.value;
      if (clearBtn) {
        if (activeSearch.length > 0) {
          clearBtn.classList.add('visible');
        } else {
          clearBtn.classList.remove('visible');
        }
      }
      render();
    });
  }

  // Clear search button
  if (clearBtn && searchInput) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      activeSearch = '';
      clearBtn.classList.remove('visible');
      render();
    });
  }

  // Initial render
  render();
}

// Initialize Homepage Resource Preview Grid
function initHomeResourcePreview() {
  const container = document.getElementById('home-resources-preview');
  if (!container) return;

  // Show top 3 resources on home preview
  const previewItems = ResourceStore.getAll().slice(0, 3);
  container.innerHTML = previewItems.map(renderResourceCard).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  initHomeResourcePreview();
  initResourceLibrary();
});
