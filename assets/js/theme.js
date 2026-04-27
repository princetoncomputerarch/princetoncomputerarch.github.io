(function () {
  const KEY = 'theme-mode';
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');

  function apply(mode) {
    if (mode === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
  }

  // On load: stored choice wins; otherwise follow system.
  const stored = localStorage.getItem(KEY);
  if (stored === 'dark' || stored === 'light') {
    apply(stored);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    apply('dark');
  }

  if (btn) {
    btn.addEventListener('click', () => {
      const isDark = root.getAttribute('data-theme') === 'dark';
      const next = isDark ? 'light' : 'dark';
      apply(next);
      localStorage.setItem(KEY, next);
    });
  }
})();
