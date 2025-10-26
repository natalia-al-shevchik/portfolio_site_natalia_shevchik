console.log("Hey there! Welcome to my creative world! I'm thrilled to see you here")
function menuToggle() {
  var x = document.getElementById("myNavtoggle");
  if (x.className === "navtoggle") {
    x.className += " responsive";
  } else {
    x.className = "navtoggle";
  }
}
