
var menu = document.querySelector('.menu-parent.menu');
var nav = document.querySelector('nav');
var menuParentAbout = document.querySelector('.menu-parent.about');
var menuParentMember = document.querySelector('.menu-parent.member');
var subMenuAbout = document.querySelector('.submenu.about');
var subMenuMember = document.querySelector('.submenu.member');

// Runs function on browser resize
window.addEventListener('resize', headerHeight);

// Function to get height of fixed header and apply that value to the top padding of the nav
function headerHeight() {

  var headerContainer = document.querySelector('.header-container');
  var navContainer = document.querySelector('.nav-container');
  var headerContainerHeight = headerContainer.offsetHeight;

  if (!nav.classList.contains('menu-displayed')) {
  navContainer.style.paddingTop = 0 + "px"; // removes the padding from nav when not in 'mobile' form
} else {
  navContainer.style.paddingTop = headerContainerHeight + "px";
}
}


// Function to toggle menus on and off by adding/removing the menu-displayed class
function menuToggle(varName) {
  if (!varName.classList.contains('menu-displayed')) {
    varName.classList.add('menu-displayed');
  } else {
    varName.classList.remove('menu-displayed');
  }
}

// Mobile menu toggle, also runs header height function
menu.addEventListener('click', function() {
  menuToggle(nav);
  headerHeight();
});

// Toggles About Us menu
menuParentAbout.addEventListener('click', function() {
  menuToggle(subMenuAbout);
});

// Toggles Membership menu
menuParentMember.addEventListener('click', function() {
  menuToggle(subMenuMember);
});
