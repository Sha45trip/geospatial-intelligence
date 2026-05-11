/**
 * Results Panel Component — For Query Analysis
 */
const ResultsPanel = {
  renderQueryAResults(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = `
      <h3 style="font-size: 1rem; margin-bottom: var(--space-md);">Query A: Intersection Check</h3>
      <table class="data-table" style="font-size: 0.85rem;">
        <thead>
          <tr>
            <th>Indicator</th>
            <th>Intersects?</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          ${data.map(item => `
            <tr>
              <td>${item.label}</td>
              <td>${item.intersects ? '✅ <span class="text-success">Yes</span>' : '❌ <span class="text-muted">No</span>'}</td>
              <td>${item.count || 0}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
    container.innerHTML = html;
  },

  renderQueryBResults(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = `
      <h3 style="font-size: 1rem; margin-bottom: var(--space-md);">Query B: Nearest Features</h3>
      <table class="data-table" style="font-size: 0.85rem;">
        <thead>
          <tr>
            <th>Indicator</th>
            <th>Nearest Feature</th>
            <th>Distance</th>
          </tr>
        </thead>
        <tbody>
          ${data.map(item => `
            <tr>
              <td>${item.label}</td>
              <td>${item.featureName || '—'}</td>
              <td class="mono">${item.distance ? item.distance.toFixed(1) + ' km' : '—'}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
    container.innerHTML = html;
  },

  renderQueryCResults(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = `
      <h3 style="font-size: 1rem; margin-bottom: var(--space-md);">Query C: Overlap Analysis</h3>
      <table class="data-table" style="font-size: 0.85rem;">
        <thead>
          <tr>
            <th>Indicator</th>
            <th>Overlap Area</th>
            <th>% of Buffer</th>
          </tr>
        </thead>
        <tbody>
          ${data.map(item => `
            <tr>
              <td>${item.label}</td>
              <td class="mono">${item.area ? item.area.toFixed(1) + ' km²' : '—'}</td>
              <td>
                <div style="display: flex; align-items: center; gap: 8px;">
                  <div style="flex: 1; height: 6px; background: var(--color-bg-elevated); border-radius: 3px; overflow: hidden;">
                    <div style="width: ${item.pct || 0}%; height: 100%; background: var(--color-accent-eco);"></div>
                  </div>
                  <span class="mono" style="font-size: 0.75rem;">${item.pct ? item.pct.toFixed(1) + '%' : '0%'}</span>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
    container.innerHTML = html;
  }
};
