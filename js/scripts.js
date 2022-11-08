const body = document.body;
const switchThemeElement = document.getElementById('switch-theme')
const iconSwitchTheme = document.getElementById('switch-theme-icon')
const themeTextElement = document.getElementById('switch-theme-text')
const logoElement = document.getElementById('logo')
const coloChangerContainer = document.getElementById('change-color')
const rootStyles = document.documentElement.style;

switchThemeElement.addEventListener('click', (event) => {
    body.classList.toggle('dark')
    if (body.classList.contains('dark')) {
        logoElement.src = "assets/images/logo-dark.svg"
        iconSwitchTheme.src = "assets/images/icon-moon.svg"
        themeTextElement.textContent = 'Dark mode';
    }
    else {
        logoElement.src = "assets/images/logo-light.svg"
        iconSwitchTheme.src = "assets/images/icon-sun.svg"
        themeTextElement.textContent = 'Light mode';
    }
})

coloChangerContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('color')) {
        rootStyles.setProperty('--primary-color', event.target.dataset.color)
    }
})