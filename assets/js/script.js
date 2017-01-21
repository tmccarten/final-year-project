var menuIcon = document.querySelector('.menu-icon');
var nav = document.querySelector('nav');

menuIcon.addEventListener('click', function() {
  if (nav.className === "menu-displayed") {
  nav.className = "menu-not-displayed";
}
  else {
    nav.className = "menu-displayed";
  }
});
