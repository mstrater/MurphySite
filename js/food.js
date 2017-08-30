$(function() {
	$('.bag').mouseover(function() {
		$(window).mousemove(move);
		$('.bag').removeClass('baganimate');
	});

	var bagHeight = 288;
	var bagWidth = 229;
	var bowlWidth = 285;
	var bowlHeight = 143;
	var bowlLeft = 200;
	var bowlBottom = 60;
	function move(event){
		var pos = {x: event.pageX-bagWidth/2, y:  event.pageY-bagHeight/2};
		$('.bag').css('left', pos.x);
		$('.bag').css('top', pos.y);
		var height = $( window ).height();
		if (event.pageX > bowlLeft && event.pageX < bowlLeft + bowlWidth
			&& height - event.pageY > bowlBottom && height - event.pageY < bowlBottom + bowlHeight) {
			$('.bag').off("mouseover");
			$(window).off("mousemove");

			$('.bowl').attr('src', './img/food_fill.png');
			$('.murphy').removeClass('murphyanimate');
			$('.murphy').attr('src', './img/food_murphy_smile.png');
			$(".homepaw").css("display", "block");
			setTimeout(function() {
				$(".homepaw").css("opacity", 1);
			}, 0);
			$(".bag").addClass('throwbaganim');
			setTimeout(function() {
				$('.bag').css('display', 'none');
			}, 1900);
		}
	}
});
