const toggleButton = document.querySelector('.toggle-btn')
const sun = document.querySelector('.sun')
const moon = document.querySelector('.moon')
const html = document.querySelector('html')
const cursor = document.querySelector('.cursor')

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark')
    sun.classList.add('light-svg')
    moon.classList.remove('dark-svg')
} else {
    html.classList.remove('dark')
    moon.classList.add('dark-svg')
    sun.classList.remove('light-svg')
}

let light = false;

toggleButton.addEventListener('click', () => {
    if (!light) {
        html.classList.remove('dark')
        moon.classList.add('dark-svg')
        sun.classList.remove('light-svg')
        localStorage.theme = 'light'
        light = true;
    } else {
        html.classList.add('dark')
        sun.classList.add('light-svg')
        moon.classList.remove('dark-svg')
        localStorage.theme = 'dark'
        light = false;
    }
});

