$(function () {
	function pfade2() {
		$('.p1').css('opacity', '0');
		$('.p2').css('opacity', '1');
		$('.p3').css('opacity', '0');
		$('.p4').css('opacity', '0');
	}
	function pfade3() {
		$('.p1').css('opacity', '0');
		$('.p2').css('opacity', '0');
		$('.p3').css('opacity', '1');
		$('.p4').css('opacity', '0');
	}
	function pfade4() {
		$('.p1').css('opacity', '0');
		$('.p2').css('opacity', '0');
		$('.p3').css('opacity', '0');
		$('.p4').css('opacity', '1');
		$('.arrowkey').css('display', 'none');
		$('.pawprint').css('display', 'block');
		setTimeout(function() {
			$('.pawprint').css('opacity', '1');
		}, 0)
	}

	var text = 1
	$('.arrowkey').click(textprogress);

	function textprogress() {
		if (text === 1){
			pfade2();
			text = 2;
		} else if (text === 2){
			pfade3();
			text = 3;
		} else if (text === 3){
			pfade4();
		}
	}
});