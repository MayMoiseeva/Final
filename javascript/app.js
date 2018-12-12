$(document).ready(function(){

	var menuItems = ["<a href='about.html'>About</a>", "<a href='spreads.html'>Tarot spreads</a>", "<a href='meanings.html'>Card meanings</a>", "<a href='zodiaccalc.html'>Horoscope</a>", "<a href='contact.html'>Contact me</a>"];
	var itemsText = ["About","Tarot spreads","Card meanings","Horoscope","Contact me"];

	$(".menu").on("mouseenter", function(){
		$(".menu").toggleClass("open");
		$(".item").toggleClass("active");
		var textAppear = setTimeout(function(){
			for(var i=0; i<menuItems.length; i++){
				if ($(".item")[i].classList.contains("currPage")){
					$(".item")[i].innerHTML = itemsText[i];
				}else{
					$(".item")[i].innerHTML = menuItems[i];
				}
			}
		},250);
		$(".menu").on("mouseleave", function(){
			clearTimeout(textAppear);
		})
	});

	$(".menu").on("mouseleave", function(){
		$(".menu").toggleClass("open");
		$(".item").toggleClass("active");
		var textDisappear = setTimeout(function(){
			for(var i=0; i<menuItems.length; i++){
				$(".item")[i].innerHTML = "";
			}
		},150);
	});

	
})