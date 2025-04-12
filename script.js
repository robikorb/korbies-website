document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.service-section');
  const navLinks = document.querySelectorAll('nav a');

  // Intersection Observer for sections
  const observerOptions = {
    root: null,
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');

        // Update nav highlight
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').substring(1) === entry.target.id) {
            link.classList.add('active');
          }
        });
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
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
