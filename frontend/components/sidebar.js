/**
 * Shared Sidebar — matches new-dev-pcrtool-frontend AppSidebar exactly.
 * Starts collapsed (icon-only). Toggle via chevron at top.
 */

let geoSidebarCollapsed = true;

const GEO_NAV_ITEMS = [
  { icon: 'layout-grid',   label: 'Dashboard',               url: '/dashboard',                         id: 'dashboard' },
  { icon: 'folder-plus',   label: 'Manage Portfolio',         url: '/create-portfolio',                  id: 'portfolio' },
  { icon: 'bar-chart-3',   label: 'Portfolio Analysis',       url: '/portfolio-analysis',                id: 'analysis' },
  { icon: 'trending-up',   label: 'Analytics',                url: '/analytics',                         id: 'analytics' },
  { icon: 'newspaper',     label: 'Climate News',             url: '/climate-news',                      id: 'news' },
  { icon: 'user',          label: 'Profile',                  url: '/profile',                           id: 'profile' },
];

const GEO_INTEL_ITEMS = [
  { icon: 'bar-chart-3',   label: 'Portfolio Overview',      url: 'dashboard.html',                     id: 'geo-dash' },
  { icon: 'map',           label: 'Site Tracker',            url: 'site-tracker.html',                  id: 'geo-tracker' },
  { icon: 'map-pin',       label: 'Catchment Mapper',        url: 'catchment-mapper.html',              id: 'geo-catchment' },
  { icon: 'shield-check',  label: 'Biodiversity Screen',     url: 'biodiversity-screen.html',           id: 'geo-bio' },
];

const GEO_ACTION_ITEMS = [
  { icon: 'info',          label: 'Methodology',   id: 'methodology' },
  { icon: 'book-open',     label: 'Glossary',      id: 'glossary' },
  { icon: 'file-text',     label: 'Terms and Conditions', id: 'terms' },
];

function buildSidebarHTML() {
  const c = geoSidebarCollapsed;
  const w = c ? 48 : 260;
  const currentPath = window.location.pathname.split('/').pop() || 'dashboard.html';

  const renderItems = (items) => items.map(item => {
    const isActive = item.url === currentPath || (item.active && !currentPath.includes('.html'));
    return `
      <a href="${item.url}" class="geo-nav-item${isActive ? ' active' : ''}" title="${item.label}">
        <span class="geo-nav-icon"><i data-lucide="${item.icon}"></i></span>
        ${!c ? `<span class="geo-nav-label">${item.label}</span>` : ''}
      </a>
    `;
  }).join('');

  const navItems = renderItems(GEO_NAV_ITEMS);
  const intelItems = renderItems(GEO_INTEL_ITEMS);

  const separator = `<div class="geo-nav-sep"></div>`;

  const actionItems = renderItems(GEO_ACTION_ITEMS);

  const logoutBtn = `
    <button class="geo-nav-item geo-nav-logout" title="Log out">
      <span class="geo-nav-icon geo-nav-icon-logout"><i data-lucide="log-out"></i></span>
      ${!c ? `<span class="geo-nav-label">Log out</span>` : ''}
    </button>
  `;

  return `
    <!-- Header with toggle -->
    <div class="geo-sb-header">
      ${!c ? `<div class="geo-sb-user"><span class="geo-sb-user-name" style="color:#7c3aed;font-weight:600;font-size:0.95rem;">Welcome,</span><span class="geo-sb-user-name" style="color:#7c3aed;font-weight:400;font-size:0.85rem;">my org</span></div>` : ''}
      <button class="geo-sb-toggle" onclick="toggleGeoSidebar()" title="${c ? 'Expand' : 'Collapse'}">
        <i data-lucide="${c ? 'chevron-right' : 'chevron-left'}"></i>
      </button>
    </div>

    <!-- Nav items -->
    <div class="geo-sb-scroll">
      <div class="geo-sb-section">
        ${!c ? `<p class="geo-sb-section-label" style="color:#7c3aed;font-weight:700;font-size:1.1rem;text-transform:none;letter-spacing:0;margin-bottom:8px;">Navigation</p>` : ''}
        <nav class="geo-sb-nav">
          ${navItems}
        </nav>
      </div>
      
      ${separator}
      
      <div class="geo-sb-section">
        ${!c ? `<p class="geo-sb-section-label">Geospatial Analysis</p>` : ''}
        <nav class="geo-sb-nav">
          ${intelItems}
        </nav>
      </div>

      ${separator}
      <div class="geo-sb-section">
        <nav class="geo-sb-nav">
          ${actionItems}
        </nav>
      </div>
    </div>

    <!-- Footer: Logout -->
    <div class="geo-sb-footer">
      ${logoutBtn}
    </div>

    <style>
      /* ======== SIDEBAR BASE ======== */
      #sidebar {
        width: ${w}px;
        min-width: ${w}px;
        height: 100vh;
        display: flex;
        flex-direction: column;
        background: #fff;
        border-right: 1px solid rgba(147, 51, 234, 0.08);
        transition: width 0.2s cubic-bezier(.4,0,.2,1);
        overflow: hidden;
        flex-shrink: 0;
      }

      /* ======== HEADER ======== */
      .geo-sb-header {
        height: 72px;
        display: flex;
        align-items: center;
        padding: 0 ${c ? '0' : '16px'};
        justify-content: ${c ? 'center' : 'space-between'};
        flex-shrink: 0;
      }
      .geo-sb-user { display: flex; flex-direction: column; gap: 0; min-width: 0; }
      .geo-sb-toggle {
        width: 24px; height: 24px;
        border-radius: 4px;
        border: none; background: none;
        display: flex; align-items: center; justify-content: center;
        cursor: pointer; color: #a855f7;
        transition: background 0.15s;
      }
      .geo-sb-toggle:hover { background: #f5f3ff; }
      .geo-sb-toggle i { width: 14px; height: 14px; }

      /* ======== SCROLL AREA ======== */
      .geo-sb-scroll { flex: 1; overflow-y: auto; overflow-x: hidden; padding: 4px 0; }
      .geo-sb-section { padding: ${c ? '2px 4px' : '2px 12px'}; }
      .geo-sb-section-label {
        font-size: 0.65rem; font-weight: 700; color: #a855f7;
        text-transform: uppercase; letter-spacing: 0.08em;
        padding: 8px 12px 4px; margin: 0;
      }
      .geo-sb-nav { display: flex; flex-direction: column; gap: 2px; }
      .geo-nav-sep {
        height: 1px;
        background: rgba(147, 51, 234, 0.1);
        margin: 12px ${c ? '8px' : '12px'};
      }

      /* ======== NAV ITEM ======== */
      .geo-nav-item {
        display: flex;
        align-items: center;
        gap: ${c ? '0' : '12px'};
        padding: ${c ? '8px 0' : '8px 12px'};
        justify-content: ${c ? 'center' : 'flex-start'};
        text-decoration: none;
        color: #1e293b;
        font-size: 0.875rem;
        font-weight: 500;
        border-radius: 8px;
        border: none;
        background: none;
        width: 100%;
        cursor: pointer;
        transition: all 0.15s;
        white-space: nowrap;
        font-family: 'Inter', sans-serif;
      }
      .geo-nav-item:hover { background: #f8fafc; color: #7c3aed; }
      .geo-nav-item:hover .geo-nav-icon i { color: #7c3aed; }

      .geo-nav-item.active {
        background: #f3e8ff;
        color: #6d28d9;
        font-weight: 600;
        border-radius: 8px;
      }
      .geo-nav-item.active .geo-nav-icon i { color: #7c3aed; }

      .geo-nav-icon {
        width: 24px; height: 24px;
        display: flex; align-items: center; justify-content: center;
        flex-shrink: 0;
      }
      .geo-nav-icon i { width: 16px; height: 16px; color: #64748b; stroke-width: 1.8; }

      .geo-nav-label { flex: 1; text-align: left; }

      /* ======== FOOTER ======== */
      .geo-sb-footer {
        padding: ${c ? '8px 6px' : '8px'};
        border-top: 1px solid rgba(168,85,247,0.15);
        flex-shrink: 0;
      }
      .geo-nav-logout { color: #6b7280; }
      .geo-nav-logout:hover { background: #fef2f2; color: #dc2626; }
      .geo-nav-logout:hover .geo-nav-icon-logout i { color: #dc2626; }
      .geo-nav-icon-logout i { transform: scaleX(-1); }
    </style>
  `;
}

async function renderGeoSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  sidebar.innerHTML = buildSidebarHTML();

  // Update main grid column
  const container = document.getElementById('app-container');
  if (container) {
    container.style.gridTemplateColumns = `${geoSidebarCollapsed ? 56 : 280}px 1fr`;
  }

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function toggleGeoSidebar() {
  geoSidebarCollapsed = !geoSidebarCollapsed;
  renderGeoSidebar();
  // Let map/charts know they can resize
  setTimeout(() => window.dispatchEvent(new Event('resize')), 280);
}

document.addEventListener('DOMContentLoaded', renderGeoSidebar);
