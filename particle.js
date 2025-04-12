particlesJS('particles-js', {
  particles: {
    number: {
      value: 35, // Slightly fewer for elegance
      density: {
        enable: true,
        value_area: 1400 // Wider, softer spread
      }
    },
    color: {
      value: '#00bfff'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000'
      }
    },
    opacity: {
      value: 0.3,
      random: true,
      anim: {
        enable: true,
        speed: 0.4,
        opacity_min: 0.15,
        sync: false
      }
    },
    size: {
      value: 2.2,
      random: true,
      anim: {
        enable: true,
        speed: 1.8,
        size_min: 0.2,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 160,
      color: '#00bfff',
      opacity: 0.3,
      width: 0.8
    },
    move: {
      enable: true,
      speed: 0.6,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 180,
        line_linked: {
          opacity: 0.7
        }
      },
      push: {
        particles_nb: 3
      }
    }
  },
  retina_detect: true
});
