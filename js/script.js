var app = {
	loadContent: function() {
		$("#aboutSection").load("_includes/about.html");
		$("#blogSection").load("_includes/publications.html");
		$("#projectsSection").load("_includes/projects.html");
		$("#socialSection").load("_includes/social.html");
		$("#raceResultsSection").load("_includes/race-results.html");
	},

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
