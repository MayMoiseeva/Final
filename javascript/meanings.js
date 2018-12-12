$(document).ready(function(){
	var cards = tarot.cards;
	var request;
	var deckLength = 22;
	outputCards();

	function outputCards(){
		$(".card").hide();
		$(".error").hide();
		for (var i = 0; i<deckLength; i++){
			showCard(i);
		}
	}

	function showCard(index){
		var newCardPic = $("<img class='cardpic' src='../images/" + cards[index].picurl + "' alt='" + cards[index].name+ "'>");
		var newCard = $("<div class='card'>");
		var newCardDesc =  $("<div class='field description'>General meanings: "+cards[index].description+"</div>");
		var newCardMeaning = $("<div class='field meaning'>" + cards[index].fullmeaning + "</div>");
		newCard.append(newCardPic);
		newCard.append(newCardDesc);
		newCard.append(newCardMeaning);
		$("body").append(newCard);
	}

	$("button").on("click", searchForCard);
	$("#search").on("search", searchForCard);
	$("#search").on("keyup", function(event){
		request = $("#search").val();
		if((event.keyCode == 8 || event.keyCode == 46) && request==""){
			outputCards();
		}else if (event.keyCode==13){
			searchForCard();
		}
	});


	function searchForCard(){
		request = $("#search").val();
		$(".error").hide();
		var tarotCard;
		if (request==""){
			outputCards();
		}else{
			var found = false;
			request = stripString(request);
				$(".card").hide();
			for(var i=0;i<deckLength;i++){
					tarotCard = stripString(cards[i].name);
					if (request.includes(tarotCard) || tarotCard.includes(request) ){
						showCard(i);
						found = true;
					}
			}
			if (!found){
				var errorMessage = $("<div class='field error text'>Sorry, we were not able to find this card:( Please, try a different search request.</div>");
				$("body").append(errorMessage);
			}
		}
	}

	function stripString(string){
		string = string.toLowerCase();
		if(string.includes("the ")){
			string = string.replace(/the /gi, "");
		}
		string = string.trim();
		return string;
	}

})