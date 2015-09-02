var app = {
	setListeners: function() {
		$("#navbar a").on('click', function() {
			$("#navbar").find('li').removeClass('active');
			$(this).parent().addClass('active');
		});

		$("footer button").on('click', function() {
			$(window).scrollTop(0);
		});
	}
};
