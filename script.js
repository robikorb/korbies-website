document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.service-section');
  const navLinks = document.querySelectorAll('nav a');

  function activateSection() {
    const scrollPos = window.scrollY + window.innerHeight / 2;
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const sectionHeight = section.offsetHeight;

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  }

  function updateNavHighlight() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - window.innerHeight / 2;
      if (pageYOffset >= sectionTop) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) link.classList.add('active');
    });
  }

  // Important: Trigger on load as well as scroll
  window.addEventListener('scroll', () => {
    activateSection();
    updateNavHighlight();
  });

  window.addEventListener('load', () => {
    activateSection();
    updateNavHighlight();
  });

  window.addEventListener('resize', () => {
    activateSection();
    updateNavHighlight();
  });

  // Smooth scroll for nav links
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
