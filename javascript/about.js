$(document).ready(function(){

	var divWidth = window.innerWidth*0.19;
	var divHeight =  (window.innerWidth*0.19)*1.57;
	$(".head").css ("width", divWidth);
	$(".head").css ("height", divHeight);
	


	var clicks = 0;
	var urls = ["../images/back.png", "../images/autoportrait.png"];
	var alts = ["back of an astroLogos card", "May's autoportrait"]

	$(".head").on("click", function(){
		console.log("yo");
		clicks +=1;
		var index = clicks % 2;
		changepic(index, function(){
			$(".headshot").css("margin", ((divHeight - divWidth)/2)*index + "px 0px");
		})
	});	

	function changepic(index, callback){
		$(".headshot")[0].src = urls[index];
		$(".headshot")[0].alt = alts[index];
		$(".head").toggleClass("field");
		callback();
	}
})
