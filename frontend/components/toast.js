/**
 * Toast Notification Utility
 */
function showToast(message, type = 'info') {
  const containerId = 'toast-container';
  let container = document.getElementById(containerId);
  
  if (!container) {
    container = document.createElement('div');
    container.id = containerId;
    container.style.cssText = `
      position: fixed; bottom: var(--space-lg); right: var(--space-lg);
      display: flex; flex-direction: column; gap: var(--space-sm);
      z-index: 9999;
    `;
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  const icons = {
    info: 'info',
    success: 'check-circle',
    warning: 'alert-triangle',
    error: 'x-circle'
  };

  const colors = {
    info: 'var(--color-accent-primary)',
    success: 'var(--color-accent-success)',
    warning: 'var(--color-accent-warning)',
    error: 'var(--color-accent-danger)'
  };

  toast.innerHTML = `
    <div style="display: flex; align-items: center; gap: var(--space-md); min-width: 280px; background: var(--color-bg-elevated); border: 1px solid var(--color-border); border-left: 4px solid ${colors[type]}; padding: var(--space-md); border-radius: var(--radius-md); box-shadow: var(--shadow-elevated); animation: toast-in 0.3s ease;">
      <i data-lucide="${icons[type]}" style="width: 20px; height: 20px; color: ${colors[type]};"></i>
      <div style="font-size: 0.9rem; font-weight: 500;">${message}</div>
    </div>
    <style>
      @keyframes toast-in {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes toast-out {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
      }
    </style>
  `;

  container.appendChild(toast);
  if (typeof lucide !== 'undefined') lucide.createIcons();

  // Auto remove
  setTimeout(() => {
    toast.style.animation = 'toast-out 0.3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
