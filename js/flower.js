$(function() {
	$('.murphy').mouseover(function() {
		$(window).mousemove(move);
	});

	knockedOne = false;
	knockedTwo = false;
	knockedThree = false;

	function move(event){
		$('.murphy').css('left', event.pageX);
		if (!knockedOne && event.pageX < $('.flowerpot1').offset().left + $('.flowerpot1').width()) {
			knockedover();
		}
		if (!knockedTwo && event.pageX < $('.flowerpot2').offset().left + $('.flowerpot2').width()) {
			knockedover2();
		}
		if (!knockedThree && event.pageX < $('.flowerpot3').offset().left + $('.flowerpot3').width()) {
			knockedover3();
		}
		if (knockedOne && knockedTwo && knockedThree) {
			$(".homepaw").css("display", "block");
			setTimeout(function() {
				$(".homepaw").css("opacity", 1);
			}, 0);
			$('.murphy').off("mouseover");
			$(window).off("mousemove");
			$('.murphy').addClass("murphyrun");
			setTimeout(function() {
				$('.murphy').css('display', 'none');
			}, 2900);
		}
	}

	function knockedover() {
		$('.flowerpot1').attr('src', './img/knockedpot.png');
		$('.flowerpot1').css('padding-bottom', 0);
		$('.flowerpot1').css('padding-left', 50);
		knockedOne = true;
	}
	function knockedover2() {
		$('.flowerpot2').attr('src', './img/knockedpot.png');
		$('.flowerpot2').css('padding-bottom', 0);
		$('.flowerpot2').css('padding-left', 50);
		knockedTwo = true;
	}
	function knockedover3() {
		$('.flowerpot3').attr('src', './img/knockedpot.png');
		$('.flowerpot3').css('padding-bottom', 0);
		$('.flowerpot3').css('padding-left', 50);
		knockedThree = true;
	}
});