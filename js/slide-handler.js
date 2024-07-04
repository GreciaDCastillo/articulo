gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content',
});

const handleScroll = () => {
  const scrollTop = document.documentElement.scrollTop;
  document.documentElement.style.setProperty('--scrollTop', `${scrollTop}px`);
};

document.addEventListener('scroll', () => {
  requestAnimationFrame(handleScroll);
});
