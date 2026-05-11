/**
 * Layer Toggle UI Component
 */
const LayerControls = {
  render(containerId, layers, layerGroups, map) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = `
      <div class="map-overlay-panel">
        <div style="font-size: 0.75rem; font-weight: 700; color: var(--color-text-secondary); text-transform: uppercase; margin-bottom: var(--space-xs); padding: 0 var(--space-sm);">Layers</div>
    `;

    layers.forEach(layer => {
      const isVisible = map.hasLayer(layerGroups[layer.id]);
      html += `
        <label class="layer-control-item">
          <input type="checkbox" id="chk-${layer.id}" ${isVisible ? 'checked' : ''} onchange="LayerControls.toggleLayer('${layer.id}')">
          <span class="dot" style="background-color: ${layer.color};"></span>
          <span>${layer.label}</span>
        </label>
      `;
    });

    html += `</div>`;
    container.innerHTML = html;

    // Attach to window so onchange works
    window.LayerControls = {
      toggleLayer: (layerId) => {
        const checkbox = document.getElementById(`chk-${layerId}`);
        if (checkbox.checked) {
          layerGroups[layerId].addTo(map);
        } else {
          map.removeLayer(layerGroups[layerId]);
        }
      }
    };
  }
};
