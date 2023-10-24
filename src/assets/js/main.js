import { setupLenis } from "./lenis";

const lenis = setupLenis();

// const inithorizontalScrolling = () => { 
//   lenis = new Lenis({
//     lerp: 0.3,
//     orientation: 'horizontal',
//     gestureOrientation: 'both',
//     // infinite: true
//   });

//   function raf(time) {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
//   };

//   requestAnimationFrame(raf);

//   lenis.on('scroll', (e) => {
//     console.log(e);
//   });
// };

// inithorizontalScrolling();

const repeatItems = (parentEl, total = 0) => {
  const items = [...parentEl.children];
  for(let i = 0; i <= total-1; ++i) {
    var cln = items[i].cloneNode(true);
    parentEl.appendChild(cln);
  }
};

repeatItems(document.querySelector('.p-home-image__list'), 4);

const Modal = () => {
  const openBtn = document.querySelector('.js-modal-open');
  const closeBtn = document.querySelector('.js-modal-close');
  const about = document.querySelector('.p-home-about');
  
  openBtn.addEventListener('click', () => {
    about.classList.add('is-show');
    openBtn.textContent = "CLOSE";
    lenis.stop();
  });
  
  closeBtn.addEventListener('click', () => {
    about.classList.remove('is-show');
    openBtn.textContent = "ABOUT";
    lenis.start();
  });
} 

Modal();



document.addEventListener("Domcontentloaded", () => {
  
});



