import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// const logo = document.querySelector('.logo')

// logo.addEventListener('mouseover', () => {
//     gsap.to('nav .nav-container .logo a p', {
//         duration: 1,
//         x: 5,
//         stagger: 0.05,
//         // display: 'none'
//     })
//     // console.log('Worked')
// })
// logo.addEventListener('mouseout', () => {
//     gsap.to('nav .nav-container .logo a p', {
//         // duration: 0,
//         x: 0,
//         // stagger: 0.05,
//         // display: 'none'
//     })
//     // console.log('Worked')
// })