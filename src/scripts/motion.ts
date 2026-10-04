// Scroll motion: Lenis smooth scrolling + GSAP ScrollTrigger.
// Everything here is skipped for visitors who have reduced motion turned on.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

mm.add('(prefers-reduced-motion: no-preference)', () => {
  // ----- Smooth scrolling -----
  const lenis = new Lenis({ duration: 1.1, anchors: { offset: -120 } });
  lenis.on('scroll', ScrollTrigger.update);
  const raf = (time: number) => lenis.raf(time * 1000);
  gsap.ticker.add(raf);
  gsap.ticker.lagSmoothing(0);

  // ----- Hero: jar zooms and drifts, headline lifts away -----
  const heroTl = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true },
  });
  heroTl
    .to('#hero > img', { scale: 1.18, xPercent: -4, yPercent: 8 }, 0)
    .to('.hero-inner', { y: -90, opacity: 0 }, 0);

  // ----- Parallax: photos drift inside their frames -----
  gsap.utils.toArray<HTMLElement>('.px').forEach(img => {
    gsap.fromTo(img, { yPercent: -7 }, {
      yPercent: 7, ease: 'none',
      scrollTrigger: { trigger: img.parentElement!, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });
  gsap.fromTo('.banner img', { yPercent: -10 }, {
    yPercent: 10, ease: 'none',
    scrollTrigger: { trigger: '.banner', start: 'top bottom', end: 'bottom top', scrub: true },
  });

  // ----- Slide-ins: groups fade up one after another as they enter -----
  const groups = [
    '.world .title, .creations .title, .story .title, .how .title, .how .lede',
    '.tiles > .tile', '#track > .product', '.steps > .step', '.ing-row > .ing',
    '.story-text > p, .story-text > h3', '.assure > div',
  ];
  groups.forEach(selector => {
    const els = gsap.utils.toArray<HTMLElement>(selector);
    gsap.set(els, { opacity: 0, y: 36 });
    ScrollTrigger.batch(els, {
      start: 'top 92%',
      once: true,
      onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.08, overwrite: true }),
    });
  });

  // Images can change layout height as they load
  addEventListener('load', () => ScrollTrigger.refresh());

  return () => { gsap.ticker.remove(raf); lenis.destroy(); };
});
