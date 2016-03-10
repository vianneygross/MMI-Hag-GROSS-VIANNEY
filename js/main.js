// VERSION JAVASCRIPT CASSÉE

/* window.onload = function(){
var lien = document.getElementsByClassName('nav-item');
	console.log(lien);
	
	lien.addEventListener("click", function() {
		lien.className = "nav-item";
		this.className += "active";
	});

} */


// VERSION JQUERY 

$(document).ready(function() {

  $(".nav-item").click(function (e) {
		e.preventDefault();
		$(".nav-item.active").removeClass("active");
		$(this).addClass("active"); 
		});
});