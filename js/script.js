var app = {
	loadContent: function() {
		$("#headerSection").load("includes/header.html", function() {
      //Set Listener
      $("#navbar a").on('click', function() {
  			$("#navbar").find('li').removeClass('active');
  			$(this).parent().addClass('active');
  		});
    });
		$("#footerSection").load("includes/footer.html", function() {
      //Set Listener
      $("footer button").on('click', function() {
        $(window).scrollTop(0);
      });
    });
		$("#aboutSection").load("includes/about.html");
		$("#blogSection").load("includes/publications.html");
		$("#projectsSection").load("includes/projects.html");
		$("#socialSection").load("includes/social.html");
		$("#raceResultsSection").load("includes/race-results.html", function (){
      //Set Listener
      $("#raceResultsBtn").on('click', function() {
        $(".raceResultsContent").toggle();
      });
    });
	}
};
