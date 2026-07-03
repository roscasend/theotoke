const themeMap = {
  'css/light.css': 'light',
  'css/dark.css': 'dark',
  'css/light-hc.css': 'light-high-contrast',
  'css/light-mc.css': 'light-medium-contrast',
  'css/dark-hc.css': 'dark-high-contrast',
  'css/dark-mc.css': 'dark-medium-contrast'
};

function applyTheme(themePath) {
  const themeLink = document.getElementById('theme');

  if (!themeLink) {
    return;
  }

  themeLink.href = themePath;

  Object.values(themeMap).forEach((className) => {
    document.documentElement.classList.remove(className);
  });

  if (themeMap[themePath]) {
    document.documentElement.classList.add(themeMap[themePath]);
  }

  localStorage.setItem('theme', themePath);
}

window.addEventListener('DOMContentLoaded', () => {
  const themeSelector = document.getElementById('theme-selector');
  const savedTheme = localStorage.getItem('theme') || 'css/dark-hc.css';

  applyTheme(savedTheme);

  if (themeSelector) {
    themeSelector.value = savedTheme;

    themeSelector.addEventListener('change', (event) => {
      applyTheme(event.target.value);
    });
  }
});
