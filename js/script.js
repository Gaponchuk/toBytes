var nav = document.getElementById("navigation");
var navLinks = document.querySelectorAll(".navigation__link");
var openMenu = document.getElementById("open-menu");
var closeMenu = document.getElementById("close-menu");

openMenu.addEventListener("click", function(){
	nav.style.transform = "translateY(0)";
});

closeMenu.addEventListener("click", function(){
	nav.style.transform = "translateY(-100vh)";
});

for(var i = 0; i < navLinks.length; i++) {
	navLinks[i].addEventListener("click", function(){
		nav.style.transform = "translateY(-100vh)";
	})
}