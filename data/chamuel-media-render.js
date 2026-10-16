
(function(){
  function unique(items, key){
    return [...new Set(items.map(x => x[key]).filter(Boolean))].sort();
  }
  function optionize(select, values){
    if(!select) return;
    values.forEach(v=>{
      const o=document.createElement('option');
      o.value=v;
      o.textContent=v;
      select.appendChild(o);
    });
  }
  function mediaCard(item){
    const isImage = item.media_type === 'image' && item.file_path;
    const access = item.access_level || 'Public';
    const img = isImage ? `<img src="${item.file_path}" alt="${item.alt_text || item.title || 'Chamuel media'}" loading="lazy">` : `<div class="media-placeholder">${item.media_type || 'media'}</div>`;
    return `
      <article class="media-record-card" data-category="${item.category || ''}" data-setting="${item.setting_code || ''}" data-access="${access}">
        <div class="media-record-visual">${img}</div>
        <div class="media-record-body">
          <span>${item.media_id || ''} · ${access}</span>
          <h3>${item.title || item.file_name || 'Untitled Media'}</h3>
          <p>${item.caption || item.alt_text || ''}</p>
          <dl>
            <div><dt>Category</dt><dd>${item.category || '-'}</dd></div>
            <div><dt>Setting</dt><dd>${item.setting_code || '-'} ${item.setting_name ? '· ' + item.setting_name : ''}</dd></div>
            <div><dt>Shape / Angle</dt><dd>${item.shape || '-'} ${item.angle ? '· ' + item.angle : ''}</dd></div>
            <div><dt>Placement</dt><dd>${item.page_placement || '-'}</dd></div>
          </dl>
        </div>
      </article>
    `;
  }
  function initMediaLibrary(){
    const grid=document.getElementById('mediaLibraryGrid');
    if(!grid || !window.CHAMUEL_MEDIA_LIBRARY) return;

    const items=window.CHAMUEL_MEDIA_LIBRARY;
    const category=document.getElementById('mediaCategoryFilter');
    const setting=document.getElementById('mediaSettingFilter');
    const access=document.getElementById('mediaAccessFilter');

    optionize(category, unique(items, 'category'));
    optionize(setting, unique(items, 'setting_code'));
    optionize(access, unique(items, 'access_level'));

    function render(){
      const c=category?.value || '';
      const s=setting?.value || '';
      const a=access?.value || '';
      const filtered=items.filter(item =>
        (!c || item.category===c) &&
        (!s || item.setting_code===s) &&
        (!a || item.access_level===a)
      );
      grid.innerHTML = filtered.map(mediaCard).join('') || '<p class="empty-note">No media records found.</p>';
    }

    [category, setting, access].forEach(el=>el && el.addEventListener('change', render));
    render();
  }
  document.addEventListener('DOMContentLoaded', initMediaLibrary);
})();
