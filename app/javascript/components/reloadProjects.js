// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function reloadProject() {
  // When the user scrolls the page, execute myFunction
//window.onscroll = function() {navSticky()};

// Get the navbar
var reload = document.getElementById("reload");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

export { navSticky };
