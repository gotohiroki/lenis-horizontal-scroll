import Lenis from '@studio-freight/lenis'

export const setupLenis = () => {
  const lenis = new Lenis({
    lerp: 0.3,
    orientation: 'horizontal',
    gestureOrientation: 'both',
    // infinite: true
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);

  lenis.on('scroll', (e) => {
    console.log(e);
  });

  return lenis;
};