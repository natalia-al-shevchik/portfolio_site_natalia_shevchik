console.log("Hey there! Welcome to my creative world! I'm thrilled to see you here");

/* ========== NAV MENU TOGGLE ========== */
function menuToggle() {
  const x = document.getElementById("myNavtoggle");
  x.classList.toggle("responsive");
}

/* ========== SPLASH SCREEN (independent logic) ========== */
window.addEventListener("load", () => {
  const splash = document.getElementById("splash-screen");
  const splashDuration = 800;

  if (!splash) return; // if project page has no splash

  const splashShown = sessionStorage.getItem("splashShown");

  const scrollToHash = () => {
  if (window.location.hash) {
    const el = document.querySelector(window.location.hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
};

if (splashShown) {
  splash.remove();
  scrollToHash(); // scroll immediately if splash was already shown
} else {
  // fade out after defined duration
  setTimeout(() => {
    splash.classList.add("hidden");
    sessionStorage.setItem("splashShown", "true");
  }, splashDuration);

  // remove from DOM after fade completes
  splash.addEventListener("transitionend", (e) => {
    if (e.propertyName === "opacity") {
      splash.remove();
      scrollToHash(); // scroll after splash fade finishes
    }
  });
}
});

/* =======================================================
   HABITREE CAROUSELS (.carousel)
   → Grid on desktop, carousel on tablet/mobile
======================================================= */
(function ($) {
  function initOrDestroyHabitreeCarousels() {
    $(".carousel").each(function () {
      const $row = $(this);

      if (window.innerWidth <= 1024) {
        if (!$row.hasClass("owl-loaded")) {
          $row.addClass("owl-carousel");
          $row.owlCarousel({
            loop: false,
            margin: 20,
            nav: true,
            dots: true,
            navText: ["‹", "›"],
            responsive: {
              0: { items: 1 },
              600: { items: 2 },
              900: { items: 3 },
            },
          });
        }
      } else {
        if ($row.hasClass("owl-loaded")) {
          $row.trigger("destroy.owl.carousel");
          $row.removeClass("owl-carousel owl-loaded");
          $row.find(".owl-stage-outer").children().unwrap();
        }
      }
    });
  }

  // debounce for Habitree only
  let resizeTimerHabitree;
  $(window).on("resize", function () {
    clearTimeout(resizeTimerHabitree);
    resizeTimerHabitree = setTimeout(initOrDestroyHabitreeCarousels, 150);
  });

  $(document).ready(initOrDestroyHabitreeCarousels);
})(jQuery);

/* =======================================================
   REGO + NOTABENE CAROUSELS (.wireframes-carousel, .mobile-carousel, .screen-grid, .image-grid)
======================================================= */
(function ($) {
  function initOrDestroyOtherCarousels() {
    const selectors =
      ".wireframes-carousel, .mobile-carousel, .screen-grid, .image-grid";

    $(selectors).each(function () {
      const $carousel = $(this);

      if (window.innerWidth <= 1024) {
        if (!$carousel.hasClass("owl-loaded")) {
          $carousel.addClass("owl-carousel");
          $carousel.owlCarousel({
            loop: false,
            margin: 16,
            nav: true,
            dots: true,
            navText: ["‹", "›"],
            responsive: {
              0: { items: 1 },
              600: { items: 2 },
              900: { items: 2 },
            },
          });
        }
      } else {
        if ($carousel.hasClass("owl-loaded")) {
          $carousel.trigger("destroy.owl.carousel");
          $carousel.removeClass("owl-carousel owl-loaded");
          $carousel.find(".owl-stage-outer").children().unwrap();
        }
      }
    });
  }

  // debounce for ReGo + NotaBene
  let resizeTimerOther;
  $(window).on("resize", function () {
    clearTimeout(resizeTimerOther);
    resizeTimerOther = setTimeout(initOrDestroyOtherCarousels, 150);
  });

  $(document).ready(initOrDestroyOtherCarousels);
})(jQuery);

/* ========== HERO TYPING EFFECT ========== */
document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector(".skill");
  if (!el) return;

  const phrases = [
    "user-centered, accessible digital products",
    "clear and thoughtful interface design",
    "research-driven UX and prototyping"
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 80;     // ms per character
  const deletingSpeed = 40;   // ms per character
  const pauseAfterTyping = 1600;
  const pauseAfterDeleting = 400;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (!isDeleting) {
      el.textContent = currentPhrase.slice(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentPhrase.length) {
        setTimeout(() => (isDeleting = true), pauseAfterTyping);
      }
    } else {
      el.textContent = currentPhrase.slice(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(() => {}, pauseAfterDeleting);
      }
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(type, speed);
  }

  type();
});


