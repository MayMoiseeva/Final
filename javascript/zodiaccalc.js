$(document).ready(function(){

	$("button").on("click", function(){
		var sign = $("#sign").val();
		if(sign!=""){
			var day;
			for (var i=0; i<3; i++){
				if($(".day")[i].checked==true){
					day = $(".day")[i].value;
				}
			};
				$.ajax({
					method:"POST",
					url:"https://aztro.sameerkumar.website?sign="+sign+"&day="+day,
					success: function(data){
						console.log(data);
						$(".horoscope").hide();
						var newHoroscope = $("<div class='horoscope'>"); 
						newHoroscope.append(data.description + "<br><br>");
						newHoroscope.append("Lucky color: " + data.color + "<br>");
						newHoroscope.append("Lucky number: " + data.lucky_number + "<br>");
						newHoroscope.append("Lucky time of day: " + data.lucky_time + "<br>");
						newHoroscope.append("Best compatibility: " + data.compatibility + "<br>");
						$(".content").append(newHoroscope);
					},
					error: function(data, textStatus, errorThrown){
						console.log("this is the weakest link");
						console.log(errorThrown);
					}
				});
		} else {
			$(".horoscope").hide();
			var error = $("<div class='horoscope'>Please, choose a sign to see the horoscope</div>")
			$(".content").append(error);
		}
	});
})