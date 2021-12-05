// import '../../fonts/stylesheet.css'
// import '../../src/sass/style.scss'
// import '../../src/sass/cursor.scss'
// // import '../../src/sass/texts.scss'
// import '../../src/public/styles/style.css'
// import LocomotiveScroll from 'locomotive-scroll';

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true
// });

// function toggle() {
//     const html = document.querySelector('html')
//     // html.classList.add('dark')
//     console.log('gehj')
// }

import Cursor from "./cursor.js";

const cursor = new Cursor(document.querySelector(".cursor"));
// window.onload(
//     $('html, body').animate({ scrollTop: 0 }, 'normal')
// )