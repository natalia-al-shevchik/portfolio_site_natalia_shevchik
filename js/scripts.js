console.log("Hey there! Welcome to my creative world! I'm thrilled to see you here")
function menuToggle() {
  var x = document.getElementById("myNavtoggle");
  if (x.className === "navtoggle") {
    x.className += " responsive";
  } else {
    x.className = "navtoggle";
  }
}

window.addEventListener('load', () => {
  const splash = document.getElementById('splash-screen');
  const splashDuration = 800;

  // We check if splash screen was already shown in this session
  const splashShown = sessionStorage.getItem('splashShown');

  if (splashShown) {
    // If already shown, remove it immediately
    splash.remove();
  } else {
    // Show splash screen
    setTimeout(() => {
      splash.classList.add('hidden');
      // Save flag in sessionStorage
      sessionStorage.setItem('splashShown', 'true');
    }, splashDuration);

    splash.addEventListener('transitionend', (e) => {
      if (e.propertyName === 'opacity') {
        splash.remove();
      }
    });
  }
});

(function($) {
  function initOrDestroyScreenCarousels() {
    const $rows = $('.screen-row');

    $rows.each(function() {
      const $row = $(this);

      if (window.innerWidth <= 1024) {
        if (!$row.hasClass('owl-loaded')) {
          $row.addClass('owl-carousel');
          $row.owlCarousel({
            items: 1,
            margin: 20,
            loop: false,
            nav: true,
            dots: true,
            responsive: {
              600: { items: 2 },
              1024: { items: 1 }
            }
          });
        }
      } else {
        if ($row.hasClass('owl-loaded')) {
          $row.trigger('destroy.owl.carousel');
          $row.removeClass('owl-carousel owl-loaded');
          $row.find('.owl-stage-outer').children().unwrap();
        }
      }
    });
  }

  $(window).on('resize', function() {
    clearTimeout(window.resizing);
    window.resizing = setTimeout(initOrDestroyScreenCarousels, 150);
  });

  $(document).ready(initOrDestroyScreenCarousels);
})(jQuery);
