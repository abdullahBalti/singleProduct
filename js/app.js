
const onClick = document.getElementById("onclick");
const sideNav = document.querySelector(".side-nav");

onClick.addEventListener('click', function(){
	// console.log(sideNav.classList);
	sideNav.classList.toggle("show-side-nav");

});