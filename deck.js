(function () {
  var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
  var total = slides.length;
  var idx = 0;

  var segs = document.getElementById('segs');
  var progress = document.getElementById('progress');
  var cur = document.getElementById('cur');
  var cur2 = document.getElementById('cur2');
  var prevBtn = document.getElementById('prev');
  var nextBtn = document.getElementById('next');

  // segmentos clicables
  var buttons = slides.map(function (s, i) {
    var b = document.createElement('button');
    b.className = 'seg';
    b.type = 'button';
    b.title = (i + 1) + '. ' + (s.querySelector('h1, h2') ? s.querySelector('h1, h2').textContent.replace(/\s+/g, ' ').trim() : 'Diapositiva ' + (i + 1));
    b.addEventListener('click', function () { go(i); });
    segs.appendChild(b);
    return b;
  });

  function pad(n) { return n < 10 ? '0' + n : '' + n; }

  function go(n, skipHash) {
    if (n < 0) n = 0;
    if (n > total - 1) n = total - 1;
    idx = n;
    slides.forEach(function (s, i) { s.classList.toggle('active', i === idx); });
    buttons.forEach(function (b, i) { b.classList.toggle('on', i === idx); });
    var pct = ((idx + 1) / total) * 100;
    progress.style.width = pct + '%';
    cur.textContent = pad(idx + 1);
    cur2.textContent = pad(idx + 1);
    prevBtn.disabled = idx === 0;
    nextBtn.disabled = idx === total - 1;
    var active = slides[idx];
    active.scrollTop = 0;
    if (!skipHash) {
      try { history.replaceState(null, '', '#' + active.id); } catch (e) { /* file:// sin historial */ }
    }
  }

  prevBtn.addEventListener('click', function () { go(idx - 1); });
  nextBtn.addEventListener('click', function () { go(idx + 1); });

  document.addEventListener('keydown', function (e) {
    var t = e.target;
    if (t && /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) return;
    if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') { e.preventDefault(); go(idx + 1); }
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); go(idx - 1); }
    else if (e.key === 'Home') { e.preventDefault(); go(0); }
    else if (e.key === 'End') { e.preventDefault(); go(total - 1); }
    else if (e.key === 'f' || e.key === 'F') {
      if (!document.fullscreenElement) { document.documentElement.requestFullscreen && document.documentElement.requestFullscreen(); }
      else { document.exitFullscreen && document.exitFullscreen(); }
    }
    else if (e.key === 'p' || e.key === 'P') { window.print(); }
  });

  // deslizar en pantallas táctiles
  var x0 = null, y0 = null;
  document.addEventListener('touchstart', function (e) {
    x0 = e.touches[0].clientX; y0 = e.touches[0].clientY;
  }, { passive: true });
  document.addEventListener('touchend', function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0;
    var dy = e.changedTouches[0].clientY - y0;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.6) { go(dx < 0 ? idx + 1 : idx - 1); }
    x0 = null; y0 = null;
  }, { passive: true });

  // ruta por hash
  function fromHash() {
    var h = (location.hash || '').replace('#', '');
    if (!h) return 0;
    var i = slides.findIndex(function (s) { return s.id === h; });
    return i < 0 ? 0 : i;
  }
  window.addEventListener('hashchange', function () { go(fromHash(), true); });

  go(fromHash(), true);
})();
