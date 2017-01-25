
headerHeight();

var menu = document.querySelector('.menu-parent.menu');
var nav = document.querySelector('nav');
var menuParentAbout = document.querySelector('.menu-parent.about');
var menuParentMember = document.querySelector('.menu-parent.member');
var subMenuAbout = document.querySelector('.submenu.about');
var subMenuMember = document.querySelector('.submenu.member');

// Runs function on browser resize
window.addEventListener('resize', headerHeight);

// Function to get height of fixed header and apply that value to the top padding of the nav/main
function headerHeight() {

  var headerContainer = document.querySelector('.header-container');
  var navContainer = document.querySelector('.nav-container');
  var headerContainerHeight = headerContainer.offsetHeight;
  var main = document.querySelector('main');
  var nav = document.querySelector('nav');

  if (!nav.classList.contains('menu-displayed')) {
  navContainer.style.paddingTop = 0 + "px"; // removes the padding from nav when not in 'mobile' form
  main.style.paddingTop = headerContainerHeight + "px"; // adds top padding to main same size as header
} else {
  navContainer.style.paddingTop = headerContainerHeight + "px";
  main.style.paddingTop = 0 + "px"; // removes padding from main when nav is displayed in 'mobile' form

}
}

// Function to toggle menus on and off by adding/removing the menu-displayed class
function menuToggle(menuName) {
  if (!menuName.classList.contains('menu-displayed')) {
    menuName.classList.add('menu-displayed');
  } else {
    menuName.classList.remove('menu-displayed');
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

/* ----- IMAGE CAROUSEL ----- */

var homeHero = document.querySelector('div.heroblock-image img'),
    imageArray = ["/assets/img/home/image1.jpg", "/assets/img/home/image2.jpg", "/assets/img/home/image3.jpg", "/assets/img/home/image4.jpg", "/assets/img/home/image5.jpg", "/assets/img/home/image6.jpg"],
    imageIndex = 0,
    intervalHandle = setInterval(changeImage, 5000);

function changeImage() {

    homeHero.setAttribute("src", imageArray[imageIndex]);
  imageIndex++;
	if (imageIndex >= imageArray.length) {
	imageIndex = 0;
	//}
}
}

homeHero.onclick =  function () {
    clearInterval(intervalHandle);
    changeImage();
};
