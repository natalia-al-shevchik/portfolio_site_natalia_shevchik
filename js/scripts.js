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
  const splashDuration = 1500;

  setTimeout( () => {
    splash.classList.add('hidden');
  }, splashDuration);

  splash.addEventListener("transitionend", (e) => {
    if (e.PropertyName === 'opacity') {
      splash.remove();
    }
  });
});