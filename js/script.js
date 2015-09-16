var app = {
	loadContent: function() {
		$("#headerSection").load("includes/header.html");				
		$("#footerSection").load("includes/footer.html");
		$("#aboutSection").load("includes/about.html");
		$("#blogSection").load("includes/publications.html");
		$("#projectsSection").load("includes/projects.html");
		$("#socialSection").load("includes/social.html");
		$("#raceResultsSection").load("includes/race-results.html");
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
