
const onClick = document.getElementById("onclick");
const sideNav = document.querySelector(".side-nav");
const sideClose = document.querySelector(".side-nav-close");

onClick.addEventListener('click', function(){
	// console.log(sideNav.classList);
	sideNav.classList.toggle("show-side-nav");
});

sideClose.addEventListener('click', function(){
	// alert('message?: DOMString');
	sideNav.classList.remove("show-side-nav");
});