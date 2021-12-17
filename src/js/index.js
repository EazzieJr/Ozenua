// import '../../fonts/stylesheet.css'
// import '../../src/sass/style.scss'
// import '../../src/sass/cursor.scss'
// // import '../../src/sass/texts.scss'
// import '../../src/public/styles/style.css'
// import LocomotiveScroll from 'locomotive-scroll';

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.container'),
//     smooth: true
// });



// function toggle() {
//     const html = document.querySelector('html')
//     // html.classList.add('dark')
//     console.log('gehj')
// }

// import Cursor from "./cursor.js";
// import Cursor2 from "./sCursor.js";
import viewCase from "./cursor";
import viewCase from "./view case.js"
// import HoverVideo from "./hoverVideo.js"

// export default {
//     // props: {
//     //     label: String,
//     //     assetUrl: String,
//     //     href: String,
//     //     index: String
//     // },
//     mounted() {
//         // const hoverRef = this.$refs.hoverLink;
//         let src = el.getAttribute("data-image-src");
//         new HoverVideo(src);
//     }
// };

// const cursor = new Cursor(document.querySelector(".cursor"));
const viewCase = new viewCase(document.querySelector(".view-case"))
// const cursor2 = new Cursor2(document.querySelector(".view-case"));
// const hoverVideo = new HoverVideo(document.querySelector(".hover-reveal"))
// const HoverVideo = new HoverVideo(document.querySelector(".hover-reveal"))
// window.onload(
//     $('html, body').animate({ scrollTop: 0 }, 'normal')
// )