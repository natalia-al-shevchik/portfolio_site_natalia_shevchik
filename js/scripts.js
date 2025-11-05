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
  const body = document.body;

  body.classList.remove('loaded');

  setTimeout( () => {
    splash.classList.add('hidden');
    body.classList.add('loaded')
  }, 5000);
});