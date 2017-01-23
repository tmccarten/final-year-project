
var menuIcon = document.querySelector('.menu-icon');
var nav = document.querySelector('nav');

// Function to show the nav menu on menu icon click
menuIcon.addEventListener('click', function() {
  if (nav.className === "menu-displayed") {
  nav.className = "menu-not-displayed";
}
  else {
    nav.className = "menu-displayed";
    headerHeight();
  }
});

var menuParent = document.querySelector('.menu-parent');
var subMenu = document.querySelector('.submenu');

menuParent.addEventListener('click', function() {
  if (subMenu.className === "submenu menu-displayed") {
    subMenu.className = "submenu menu-not-displayed";
  }
  else {
    subMenu.className = "submenu menu-displayed";
  }
});

// Runs function
headerHeight();

// Runs function on browser resize
window.addEventListener('resize', headerHeight);

// Function to get height of fixed header and apply that value to the top padding of the nav
function headerHeight() {

  var headerContainer = document.querySelector('.header-container');
  var navContainer = document.querySelector('.nav-container');
  var headerContainerHeight = headerContainer.offsetHeight;

  if (nav.className === "menu-not-displayed") {
  navContainer.style.paddingTop = 0 + "px"; // removes the padding from nav when not in 'mobile' form
} else {
  navContainer.style.paddingTop = headerContainerHeight + "px";
}
}
