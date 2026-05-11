/**
 * Shared Navbar — matches new-dev-pcrtool-frontend Navbar exactly
 */
function renderNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  navbar.innerHTML = `
    <div class="geo-navbar">
      <!-- Left: Logo -->
      <div class="geo-navbar-left">
        <a href="../index.html" class="geo-navbar-logo">
          <img src="../assets/images/logo.png" alt="Prudent" />
        </a>
      </div>

      <!-- Center: Title -->
      <div class="geo-navbar-center">
        <span class="geo-navbar-title">Geospatial Intelligence</span>
      </div>

      <!-- Right: User icon -->
      <div class="geo-navbar-right">
        <button class="geo-navbar-user-btn" title="Profile">
          <i data-lucide="user"></i>
        </button>
      </div>
    </div>

    <style>
      #navbar {
        position: sticky;
        top: 0;
        z-index: 50;
        height: 64px;
        background: rgba(255,255,255,0.8);
        backdrop-filter: blur(8px);
        border-bottom: 1px solid rgba(168,85,247,0.15);
        display: flex;
        align-items: stretch;
      }
      .geo-navbar {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 0 24px;
      }
      .geo-navbar-left {
        display: flex;
        align-items: center;
        flex: 0 0 auto;
      }
      .geo-navbar-logo {
        display: flex;
        align-items: center;
        text-decoration: none;
      }
      .geo-navbar-logo img {
        height: 40px;
        width: auto;
        object-fit: contain;
      }
      .geo-navbar-center {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .geo-navbar-title {
        font-size: 1.375rem;
        font-weight: 700;
        color: #9333ea;
        font-family: 'Inter', sans-serif;
        letter-spacing: -0.01em;
      }
      .geo-navbar-right {
        display: flex;
        align-items: center;
        flex: 0 0 auto;
      }
      .geo-navbar-user-btn {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 1px solid rgba(168,85,247,0.3);
        background: #fdf4ff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.2s;
      }
      .geo-navbar-user-btn:hover { background: #f3e8ff; }
      .geo-navbar-user-btn i { width: 18px; height: 18px; color: #9333ea; }
    </style>
  `;

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', renderNavbar);
