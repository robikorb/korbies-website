let cursor;

document.addEventListener('DOMContentLoaded', () => {
  // Page loader
  const loader = document.createElement('div');
  loader.style.position = 'fixed';
  loader.style.top = 0;
  loader.style.left = 0;
  loader.style.width = '100%';
  loader.style.height = '100%';
  loader.style.backgroundColor = '#0b1f33';
  loader.style.display = 'flex';
  loader.style.alignItems = 'center';
  loader.style.justifyContent = 'center';
  loader.style.zIndex = 99999;
  loader.innerHTML = '<img src="images/logo.png" alt="Loading..." style="width: 80px; height: auto; animation: fadeLogo 1.5s ease-in-out infinite;">';
  document.body.appendChild(loader);

  // Custom Cursor Init — inside DOMContentLoaded
  cursor = document.querySelector('.custom-cursor');

  if (!cursor) {
    cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
  }

  let mouseX = 0, mouseY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function updateCursor() {
    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    requestAnimationFrame(updateCursor);
  }
  updateCursor();

  document.addEventListener('mousedown', () => {
    cursor.style.transition = 'transform 0.1s ease';
    cursor.style.transform += ' scale(0.8)';
  });

  document.addEventListener('mouseup', () => {
    cursor.style.transform = cursor.style.transform.replace(' scale(0.8)', '');
  });

  // Cursor grow effect on hover
  function cursorGrow() {
    cursor.style.transform += ' scale(1.5)';
  }

  function cursorShrink() {
    cursor.style.transform = cursor.style.transform.replace(/ scale\(.*?\)/, '');
  }

  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', cursorGrow);
    el.addEventListener('mouseleave', cursorShrink);
  });

  // Page load fade
  document.body.style.opacity = 0;
  document.body.style.transition = 'opacity 0.8s ease';
  setTimeout(() => {
    document.body.style.opacity = 1;
  }, 100);

  // Loader disappear
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.style.transition = 'opacity 0.8s ease';
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.remove();
      }, 800);
    }, 300);
  });
});

// Ensure header visibility on all pages
const header = document.querySelector('header');
if (header) {
  header.style.position = 'fixed';
  header.style.width = '100%';
  header.style.top = '0';
  header.style.left = '0';
  header.style.zIndex = '1000';
}

// Ensure cursor position on first interaction
document.addEventListener('mousedown', () => {
  if (cursor) {
    cursor.style.transition = 'transform 0.1s ease';
    cursor.style.transform += ' scale(0.8)';
  }
});
document.addEventListener('mouseup', () => {
  if (cursor) {
    cursor.style.transform = cursor.style.transform.replace(' scale(0.8)', '');
  }
});

// Loader spin animation
const style = document.createElement('style');
style.textContent = `
@keyframes spin {
  to { transform: rotate(360deg); }
}
@keyframes fadeLogo {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
}
`;
document.head.appendChild(style);

// Initialize AOS animations
AOS.init({
    once: true,
    duration: 800,
    easing: 'ease-in-out',
});

// Scroll progress bar
window.addEventListener("scroll", () => {
  const scrollProgress = document.querySelector(".scroll-progress");
  if (!scrollProgress) return;

  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = `${scrollPercent}%`;
});

// Back to Top button logic
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopButton.style.opacity = "1";
    backToTopButton.style.pointerEvents = "auto";
  } else {
    backToTopButton.style.opacity = "0";
    backToTopButton.style.pointerEvents = "none";
  }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Counter Animation
function animateCounter(id, target, duration) {
    const element = document.getElementById(id);
    if (!element) return;

    let start = 0;
    const increment = target / (duration / 20);

    function updateCounter() {
        start += increment;
        if (start >= target) {
            element.textContent = target + (id === 'uptime' ? '%' : '+');
        } else {
            element.textContent = Math.ceil(start) + (id === 'uptime' ? '%' : '+');
            setTimeout(updateCounter, 20);
        }
    }

    updateCounter();
}

document.addEventListener('DOMContentLoaded', () => {
    animateCounter('clients', 50, 1000);
    animateCounter('uptime', 99.9, 1000);
    animateCounter('support', 24, 1000);
});

// Parallax Effect
let latestScrollY = window.scrollY;
let ticking = false;

function updateParallax() {
  const background = document.querySelector(".background-overlay");
  if (background) {
    const offset = latestScrollY * 0.2;
    background.style.transform = `translateY(${offset}px)`;
  }
  ticking = false;
}

window.addEventListener("scroll", () => {
  latestScrollY = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(updateParallax);
    ticking = true;
  }
});

// Hover touch improvements for service icons
document.querySelectorAll(".service-hover").forEach(service => {
    service.addEventListener("touchstart", () => {
        service.classList.add("hover");
    });
    service.addEventListener("touchend", () => {
        service.classList.remove("hover");
    });
});

// Optional: Smoother service icon animation on hover
document.querySelectorAll(".service-hover img").forEach(img => {
    img.addEventListener("mouseenter", () => {
        img.style.transition = "transform 0.3s ease, filter 0.3s ease";
        img.style.transform = "scale(1.08) rotate(1deg)";
        img.style.filter = "brightness(1.2)";
    });

    img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1) rotate(0deg)";
        img.style.filter = "brightness(1)";
    });
});

// Enhance service icons to animate on scroll
const serviceIcons = document.querySelectorAll(".service-hover img");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.transition = "transform 1s ease, opacity 1s ease";
      entry.target.style.transform = "scale(1)";
      entry.target.style.opacity = "1";
    } else {
      entry.target.style.transform = "scale(0.8)";
      entry.target.style.opacity = "0";
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -10% 0px' });

serviceIcons.forEach(icon => {
  icon.style.opacity = "0";
  observer.observe(icon);
});

// Smooth page transition
document.querySelectorAll('a[href]').forEach(link => {
  // Skip anchors and external links
  const href = link.getAttribute('href');
  if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = this.href;

      document.body.style.transition = 'opacity 0.8s ease';
      setTimeout(() => {
        document.body.style.opacity = 0;
      }, 100);

      setTimeout(() => {
        window.location.href = target;
      }, 800);
    });
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Image lazy loading
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("img").forEach(img => {
    img.setAttribute("loading", "lazy");
    img.style.opacity = "0";
    img.style.transform = "translateY(20px)";
  });

  const images = document.querySelectorAll("img");
  const imageObserver = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.transition = "opacity 0.8s ease, transform 0.8s ease";
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }, index * 100);
      }
    });
  }, { threshold: 0.2 });

  images.forEach(img => imageObserver.observe(img));
});

// Add passive event listeners for touch scroll
window.addEventListener("touchstart", () => {}, { passive: true });
window.addEventListener("touchmove", () => {}, { passive: true });
window.addEventListener("wheel", () => {}, { passive: true });

// Add smooth scroll behavior for the document
document.documentElement.style.scrollBehavior = "smooth";

// Animated lines under headings
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("h2, h1").forEach(heading => {
    const underline = document.createElement("div");
    underline.style.height = "3px";
    underline.style.width = "0";
    underline.style.backgroundColor = "#00c3ff";
    underline.style.margin = "10px auto 0";
    underline.style.transition = "width 1s ease";
    heading.appendChild(underline);

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          underline.style.width = "60px";
        }
      });
    }, { threshold: 0.6 });

    observer.observe(heading);
  });
});

// Scroll-triggered background color transitions
const sections = document.querySelectorAll('section');
const backgroundOverlay = document.querySelector('.background-overlay');

const bgColors = [
  'rgba(11, 31, 51, 0.6)', // Default
  'rgba(0, 51, 102, 0.6)',
  'rgba(0, 102, 153, 0.6)',
  'rgba(0, 153, 204, 0.6)'
];

const bgObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && backgroundOverlay) {
      const index = Array.from(sections).indexOf(entry.target) % bgColors.length;
      backgroundOverlay.style.transition = 'background-color 1s ease';
      backgroundOverlay.style.backgroundColor = bgColors[index];
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => bgObserver.observe(section));

// Magnetic effect on buttons
document.querySelectorAll('button, a').forEach(button => {
  button.style.position = 'relative';
  button.addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
  });
  button.addEventListener('mouseleave', function() {
    this.style.transform = 'translate(0, 0)';
  });
});

// Click ripple effect
document.querySelectorAll('button, a').forEach(button => {
  button.style.overflow = 'hidden';
  button.addEventListener('click', function(e) {
    const circle = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const diameter = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - diameter / 2;
    const y = e.clientY - rect.top - diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.position = 'absolute';
    circle.style.borderRadius = '50%';
    circle.style.background = 'rgba(0, 195, 255, 0.4)';
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    circle.style.transform = 'scale(0)';
    circle.style.opacity = '1';
    circle.style.transition = 'transform 0.5s ease, opacity 0.8s ease';
    this.appendChild(circle);

    requestAnimationFrame(() => {
      circle.style.transform = 'scale(2)';
      circle.style.opacity = '0';
    });

    setTimeout(() => {
      circle.remove();
    }, 800);
  });
});

// Cookie Consent Banner
document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('cookieConsent')) {
    const banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.style.position = 'fixed';
    banner.style.bottom = '20px';
    banner.style.right = '20px';
    banner.style.background = 'rgba(0, 0, 0, 0.8)';
    banner.style.color = '#fff';
    banner.style.padding = '15px 20px';
    banner.style.borderRadius = '8px';
    banner.style.zIndex = '99999';
    banner.style.maxWidth = '300px';
    banner.style.boxShadow = '0 0 20px rgba(0,195,255,0.5)';
    banner.style.fontSize = '0.9rem';
    banner.style.lineHeight = '1.4';

    banner.innerHTML = `
      <p>We use cookies to ensure you get the best experience. <a href="/https://robikorb.github.io/korbies-website/privacy-policy.html" style="color: #00c3ff; text-decoration: underline;">Learn more</a></p>
      <button style="margin-top: 8px; background: #00c3ff; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer;">Accept</button>
    `;

    document.body.appendChild(banner);

    const acceptButton = banner.querySelector('button');
    acceptButton.addEventListener('click', () => {
      localStorage.setItem('cookieConsent', 'true');
      banner.style.transition = 'opacity 0.5s ease';
      banner.style.opacity = '0';
      setTimeout(() => banner.remove(), 500);
    });
  }
});