import Lenis from 'https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.21/bundled/lenis.min.js';

// Smooth scrolling with Lenis.js
const lenis = new Lenis({
  duration: 1.0,  // Reduce duration for faster, snappier scrolling
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -8 * t)),  // Smoother easing function
  smooth: true,
  smoothTouch: true,
  direction: 'vertical'
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// GSAP Animations and ScrollTrigger setup
document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  // Sync Lenis with ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);

  const sections = document.querySelectorAll('.service-section');

  sections.forEach((section, index) => {
    const image = section.querySelector('img');
    const content = section.querySelector('.service-content');

    // Pin section and fade in content
    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: '+=100%',
      pin: true,
      pinSpacing: false,
      scrub: true,
      once: true, // Ensure it activates only once
    });

    // Parallax effect for images
    if (image) {
      gsap.to(image, {
        yPercent: -10,  // Reduce parallax intensity
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom top",
          scrub: true,
        }
      });
    }

    // Fade and slide-in effect for content
    if (content) {
      gsap.fromTo(content,
        { autoAlpha: 0, y: 50, scale: 0.95 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1.2,  // Reduced duration for faster transitions
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            scrub: true,
          }
        }
      );
    }
  });

  // Smooth scroll for nav links
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        lenis.scrollTo(targetSection, { offset: 0, duration: 1.5 });
      }
    });
  });
  
  // Scroll-to-top button logic
  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight) {  // Only show after scrolling down a bit
      scrollToTopButton.classList.add('show');
    } else {
      scrollToTopButton.classList.remove('show');
    }
  });
});
