
var menu = document.querySelector('.menu-parent.menu');
var nav = document.querySelector('nav');
var menuParentAbout = document.querySelector('.menu-parent.about');
var menuParentMember = document.querySelector('.menu-parent.member');
var subMenuAbout = document.querySelector('.submenu.about');
var subMenuMember = document.querySelector('.submenu.member');

// Needs both of these to run the function on page load in Edge for some reason...
window.addEventListener('load', headerHeight);
headerHeight();

// Runs function on browser resize
window.addEventListener('resize', headerHeight);

// Function to get height of fixed header and apply that value to the top padding of the nav/main
function headerHeight() {

  var headerContainer = document.querySelector('.header-container');
  var navContainer = document.querySelector('.nav-container');
  var navContainerHeight = document.querySelector('nav ul').offsetHeight;
  var headerContainerHeight = headerContainer.offsetHeight;
  var main = document.querySelector('main');

  navContainer.style.paddingTop = headerContainerHeight + "px"; // adds padding for when nav displayed in 'desktop' form

  if (getComputedStyle(menu).getPropertyValue('display') === "block") {
    main.style.paddingTop = 0 + "px"; // if the menu icon is displayed (mobile) remove the top padding from main
} else {
    main.style.paddingTop = navContainerHeight + headerContainerHeight + "px";
}
}


// Function to toggle menus on and off by adding/removing the menu-displayed class
function menuToggle(menuOne, menuTwo) {
  if (!menuOne.classList.contains('menu-displayed')) {
    menuOne.classList.add('menu-displayed');
    menuTwo.classList.remove('menu-displayed');
  }
  else {
    menuOne.classList.remove('menu-displayed');
  }
}

// Mobile menu toggle
menu.addEventListener('click', function() {
  scroll(0,0); //go back to top in order to see displayed menu
  menuToggle(nav);  
});

// Toggles About Us menu
menuParentAbout.addEventListener('click', function() {
  menuToggle(subMenuAbout, subMenuMember);
});

// Toggles Membership menu
menuParentMember.addEventListener('click', function() {
  menuToggle(subMenuMember, subMenuAbout);
});

/* ----- IMAGE CAROUSEL -----

var homeHero = document.querySelector('div.heroblock-image img'),
    imageArray = ["/assets/img/home/image1.jpg", "/assets/img/home/image2.jpg", "/assets/img/home/image3.jpg", "/assets/img/home/image4.jpg", "/assets/img/home/image5.jpg", "/assets/img/home/image6.jpg", "/assets/img/home/image7.jpg", "/assets/img/home/image8.jpg", "/assets/img/home/image9.jpg"],
    imageIndex = 0,
    intervalHandle = setInterval(changeImage, 99999000);

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

*/
