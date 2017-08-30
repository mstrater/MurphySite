$(function() {
	var ismurphyinside = true;
	$('.door').click(changestate);

	function openDoor() {
		$('.door').attr('src', './img/door_open_small.png');
		$('.windowshine').css('transform', 'translateX(-15px)');
	}
	function closeDoor() {
		$('.door').attr('src', './img/door_closed_small.png');
		$('.windowshine').css('transform', 'translateX(0)');
	}

	function goOutside(){
		openDoor();
		$('.murphy').css('opacity', 0);
		setTimeout(function() {
			closeDoor();
			$('.murphyout').css('opacity', 1);
		}, 300);
	}
	function goInside(){
		openDoor();
		$('.murphyout').css('opacity', 0);
		$(".homepaw").css("display", "block");
		setTimeout(function() {
			closeDoor();
			$('.murphy').css('opacity', 1);
			$(".homepaw").css("opacity", 1);
		}, 300)
	}

	function changestate (){
		if (ismurphyinside){
			goOutside();
			ismurphyinside = false;
		} else {
			goInside();
			ismurphyinside = true;
		}
	}
});