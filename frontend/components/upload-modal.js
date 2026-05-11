/**
 * Bulk Upload Modal Component
 */
function showUploadModal() {
  const modalId = 'upload-modal-container';
  let modal = document.getElementById(modalId);
  
  if (!modal) {
    modal = document.createElement('div');
    modal.id = modalId;
    modal.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0,0,0,0.8); z-index: 3000;
      display: flex; align-items: center; justify-content: center;
      backdrop-filter: blur(8px);
    `;
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="card" style="width: 500px; max-width: 90%; padding: var(--space-xl); position: relative;">
      <button onclick="document.getElementById('${modalId}').remove()" style="position: absolute; top: var(--space-md); right: var(--space-md); background: none; border: none; color: var(--color-text-secondary); cursor: pointer;">
        <i data-lucide="x"></i>
      </button>
      
      <h2 style="margin-bottom: var(--space-sm);">Bulk Site Upload</h2>
      <p class="text-muted" style="font-size: 0.9rem; margin-bottom: var(--space-lg);">Upload a CSV, KML, or GeoJSON file to add multiple sites to your portfolio.</p>
      
      <div id="drop-zone" style="border: 2px dashed var(--color-border); border-radius: var(--radius-lg); padding: var(--space-2xl); text-align: center; cursor: pointer; transition: all 0.2s;">
        <i data-lucide="upload-cloud" style="width: 48px; height: 48px; color: var(--color-accent-primary); margin-bottom: var(--space-md);"></i>
        <div style="font-weight: 600;">Drag & drop files here</div>
        <div class="text-muted" style="font-size: 0.8rem; margin-top: var(--space-xs);">or click to browse from your computer</div>
        <input type="file" id="file-input" style="display: none;" accept=".csv,.kml,.geojson">
      </div>
      
      <div id="upload-progress" style="display: none; margin-top: var(--space-lg);">
        <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: var(--space-xs);">
          <span>Processing sites...</span>
          <span id="progress-pct">0%</span>
        </div>
        <div style="height: 6px; background: var(--color-bg-elevated); border-radius: 3px; overflow: hidden;">
          <div id="progress-bar" style="width: 0%; height: 100%; background: var(--color-accent-primary); transition: width 0.3s;"></div>
        </div>
      </div>
      
      <div style="margin-top: var(--space-xl); display: flex; justify-content: flex-end; gap: var(--space-md);">
        <button class="btn btn-outline" onclick="document.getElementById('${modalId}').remove()">Cancel</button>
        <button class="btn btn-primary" id="btn-process" disabled>Start Import</button>
      </div>
    </div>
  `;

  if (typeof lucide !== 'undefined') lucide.createIcons();

  const dropZone = modal.querySelector('#drop-zone');
  const fileInput = modal.querySelector('#file-input');
  const btnProcess = modal.querySelector('#btn-process');
  const progressBar = modal.querySelector('#progress-bar');
  const progressPct = modal.querySelector('#progress-pct');
  const progressContainer = modal.querySelector('#upload-progress');

  dropZone.onclick = () => fileInput.click();
  
  fileInput.onchange = () => {
    if (fileInput.files.length > 0) {
      dropZone.style.borderColor = 'var(--color-accent-success)';
      dropZone.innerHTML = `
        <i data-lucide="file-text" style="width: 48px; height: 48px; color: var(--color-accent-success); margin-bottom: var(--space-md);"></i>
        <div style="font-weight: 600;">${fileInput.files[0].name}</div>
        <div class="text-muted" style="font-size: 0.8rem; margin-top: var(--space-xs);">File ready for import</div>
      `;
      if (typeof lucide !== 'undefined') lucide.createIcons();
      btnProcess.disabled = false;
    }
  };

  btnProcess.onclick = () => {
    btnProcess.disabled = true;
    progressContainer.style.display = 'block';
    
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 30;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => {
          showToast('Successfully imported 12 sites into Maharashtra Portfolio', 'success');
          document.getElementById(modalId).remove();
          window.dispatchEvent(new CustomEvent('sitesUploaded'));
        }, 500);
      }
      progressBar.style.width = progress + '%';
      progressPct.innerText = Math.round(progress) + '%';
    }, 400);
  };
}
