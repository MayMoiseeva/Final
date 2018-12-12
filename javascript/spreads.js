$(document).ready(function(){
	
	var cardsNumber;
	var cardsInd = [];

	$(".start").on("click", function(){
		cardsInd = [];
		cardsNumber = $("#spreadNumber").val();
		$(".hidden").removeClass("hidden");
		$(".openCard").removeClass("openCard");
		$(".eachCard").removeClass("eachCard");
		$(".card").hide();
		$(".card").removeClass("card");
		var cardWidth = window.innerWidth*0.17;
		var marginWidth = ((window.innerWidth/(cardsNumber))-cardWidth)/2-3;
		console.log(marginWidth+"px ");
		for (var i = 0; i<cardsNumber; i++){
			var newCard = $("<div class='card'><img class='eachCard back' src='../images/back.png' alt='back of an Astrologos tarot card'></div>");
			$(".box").append(newCard);
		}
		$(".card").css("margin", "15px " + marginWidth + "px");
		
		for (var i = 0; i<cardsNumber; i++){
			var newAdd = false;
			var cardIndex = Math.floor(Math.random()*21);
			while (!newAdd){
				var exists = false;
				for (var i = 0; i<cardsInd.length; i++){
					if(cardIndex==cardsInd[i]){
						exists = true;
					}
				}
				if(exists){
					cardIndex = Math.floor(Math.random()*21);
				} else{
					newAdd = true;
				}
				console.log(cardIndex);
			};
			cardsInd[i]=cardIndex;
		}

		$(".eachCard").one("click", function(){
			var index = $(".eachCard").index(this);
			var thisCard = cardsInd[index];
			$(".eachCard")[index].src="../images/" + tarot.cards[thisCard].picurl;
			$(".eachCard")[index].alt=tarot.cards[thisCard].name;
			$(this).addClass("openCard");
			var newDesc = $("<div class='text field'>"+tarot.cards[thisCard].description+"</div>");
			//var newMeaning = $("<div class='text field hidden'>"+tarot.cards[thisCard].fullmeaning+"</div>");

		//	$(this).after(newMeaning);
			$(this).after(newDesc);



			// $(".openCard").on("mouseenter", function(){
			// 	var index = $(".openCard").index(this);
			// 	if(index>=2){
			// 		$(".hidden")[index].style.left="0em";
			// 	}
			// 	$(".hidden")[index].style.display="inline-block";

			// });
		
			// $(".card").on("mouseleave", function(){
			// 	var index = $(".card").index(this);
			// 	$(".hidden")[index].style.display="none";

			// });
		});	

	});

	


})