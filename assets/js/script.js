// Function to show the nav menu on menu icon click

var menuIcon = document.querySelector('.menu-icon');
var nav = document.querySelector('nav');

menuIcon.addEventListener('click', function() {
  if (nav.className === "menu-displayed") {
  nav.className = "menu-not-displayed";
}
  else {
    nav.className = "menu-displayed";
    headerHeight();
  }
});


// Runs function to get height of fixed header and apply that value to the top padding of the nav
headerHeight();

window.addEventListener('resize', headerHeight);

function headerHeight() {

  var headerContainer = document.querySelector('.header-container');
  var navContainer = document.querySelector('.nav-container');
  var headerContainerHeight = headerContainer.offsetHeight;

  if (nav.className === "menu-not-displayed") {
  navContainer.style.paddingTop = 0 + "px"; //removes the padding from nav when not in 'mobile' form
} else {
  navContainer.style.paddingTop = headerContainerHeight + "px";
}
}
