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