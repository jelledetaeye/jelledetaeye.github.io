var app = {
	setListeners: function() {
		$("#navbar a").on('click', function() {
			$("#navbar").find('li').removeClass('active');
			$(this).parent().addClass('active');
		});

		$("footer button").on('click', function() {
			$(window).scrollTop(0);
		});
	},

	loadContent: function() {
		$("#aboutSection").load("about.html"); 
		$("#projectsSection").load("projects.html"); 
		$("#socialSection").load("social.html"); 
		$("#raceResultsSection").load("race-results.html");
	}
};