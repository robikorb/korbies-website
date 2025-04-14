let cursor;

document.addEventListener('DOMContentLoaded', () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

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
  loader.innerHTML = '<img src="https://msp.korbies.uk/Images/logo.png" alt="Loading..." style="width: 80px; height: auto; animation: fadeLogo 1.5s ease-in-out infinite;">';
  document.body.appendChild(loader);

  // ✅ Custom Cursor Init — only if not mobile
  if (!isMobile) {
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

    // Ensure cursor position on first interaction (moved inside isMobile check)
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
  }

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