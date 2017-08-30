$(function() {
	$('.lamp').click(darken);
	function darken(){
		$('.dark').css('display', 'block');
		$('.pawprint').css('display', 'block');
		setTimeout(function() {
			$('.dark').css('opacity', 1);
			$('.pawprint').css('opacity', 1);
		}, 0);
	}
});
