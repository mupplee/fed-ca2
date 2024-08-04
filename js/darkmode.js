document.addEventListener('DOMContentLoaded', () => {
const darkModeSwitch = document.getElementById('darkModeSwitch');
const navbarLogo = document.getElementById('navbarLogo');

// Check for saved theme preference or use default
const currentTheme = localStorage.getItem('theme') || 'light';
setTheme(currentTheme);
darkModeSwitch.checked = currentTheme === 'dark';

darkModeSwitch.addEventListener('change', () => {
    const newTheme = darkModeSwitch.checked ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
});

function setTheme(theme) {
    document.body.setAttribute('data-bs-theme', theme);
    if (theme === 'dark') {
    navbarLogo.src = 'images/sp-70-light.png';
    } else {
    navbarLogo.src = 'images/sp-70-logo.png';
    }
}
});
  