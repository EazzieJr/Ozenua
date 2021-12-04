import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const toggleButton = document.querySelector('.toggle-btn')
const sun = document.querySelector('.sun')
const moon = document.querySelector('.moon')
const html = document.querySelector('html')
const cursor = document.querySelector('.cursor')

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark')
    sun.classList.remove('light-svg')
    moon.classList.add('dark-svg')
} else {
    html.classList.remove('dark')
    moon.classList.remove('dark-svg')
    sun.classList.add('light-svg')
}

let light = false;

toggleButton.addEventListener('click', () => {
    if (!light) {
        html.classList.remove('dark')
        moon.classList.remove('dark-svg')
        sun.classList.add('light-svg')
        localStorage.theme = 'light'
        light = true;
    } else {
        html.classList.add('dark')
        sun.classList.remove('light-svg')
        moon.classList.add('dark-svg')
        localStorage.theme = 'dark'
        light = false;
    }
});


gsap.to('.toggle-btn', {
    scrollTrigger: {
        trigger: '.toggle-btn',
        endTrigger: 'footer',
        start: 'center 90%',
        pin: true,
        scrub: true
    }
})