(function () {
  // Light theme only. Clear any previously-saved dark preference so users
  // who toggled dark before the toggle was removed are forced back to light.
  document.documentElement.removeAttribute('data-theme');
  try { localStorage.removeItem('theme-mode'); } catch (e) {}
})();
